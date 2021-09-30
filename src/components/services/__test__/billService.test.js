import axios from 'axios';

const HOST = "http://localhost:4000/receipt";

const { getAllReceipts, createReceiptService } = require('../../services/billsService')

jest.mock("axios");

test('should fetch data', () => {
    const resp = { ok: true };
    axios.get.mockResolvedValue(resp);
    return getAllReceipts().then(ok => expect(ok).toEqual({ "ok": true, "data": undefined }));
});

test('should create receipt', () => {
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

