import axios from 'axios';

const { getAllReceipts, createReceiptService } = require('../billsService')

jest.mock("axios");

test('should fetch data', () => {
    const resp = { ok: true };
    axios.get.mockResolvedValue(resp);
    return getAllReceipts().then(ok => expect(ok).toEqual({ "ok": true, "data": undefined }));
});

test('should add new requisition', () => {
    const resp = {
        orderno: 'OI005',
        receiptdate: '2021-10-10',
        tax: 50,
        totammount: 500,
        shipto: 'lskfjdlaskjfd'
    };
    axios.post.mockResolvedValue(resp);
    return createReceiptService().then(ok => expect(ok).toEqual({ "ok": true }));
});

//negative test function to fetch bills
test('should fetch data while throwing error', () => {
    const resp = { ok: false };
    axios.get.mockImplementationOnce(resp);
    return getAllReceipts().then(error => expect(error).toEqual({ "ok": false }));
});

//negative test function to add a bill
test('should create error', () => {
    const resp = { "ok": false };
    axios.post.mockImplementationOnce(resp);
    return createReceiptService().then(error => expect(error).toEqual({ "ok": false, "err": "error.response.data.status" }));
});