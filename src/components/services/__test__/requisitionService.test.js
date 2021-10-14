import axios from "axios";
import { addRequisition, getAllRequisition, deleteRequisitionRecord, updateRequisitionStatus, getOneRequisitionRecord } from "../requisitionService";

jest.mock("axios");

//testing for addRequisition service(positive)
test('should create requisition', () => {
    const resp = {
        requisitionid: 'OI006',
        requisiondate: '2021-September-17',
        suppliername: 'thisara',
        title: 'order received',
        shipto: 'Malabe',
        status: 'Waiting for Approval',
        total: 60000,
        comment: 'order for Malabe site',
        item01: 'IT006',
        item02: 'IT007',
        item03: 'IT008',
        itemName01: 'cement',
        itemName02: 'metal',
        itemName03: 'sand',
        qty01: 3,
        qty02: 5,
        qty03: 6,
        amount01: 12,
        amount02: 15,
        amount03: 20
    };
    axios.post.mockResolvedValue(resp);
    return addRequisition().then(ok => expect(ok).toEqual({ "ok": true }));
});

//testing for getAllRequisition(positive)
test('should fetch data', () => {
    axios.get.mockResolvedValue();
    return getAllRequisition().then(ok => expect(ok).toEqual({ "ok": true, "data": undefined }));
});

//testing for deleteRequisitionRecord service(positive)
test('should delete requisition', () => {
    const resp = {
        requisitionid: 'OI006'
    };
    axios.post.mockResolvedValue(resp);
    return deleteRequisitionRecord().then(ok => expect(ok).toEqual({ "ok": true }));
});

// testing for getOneRequisitionRecord service(positive)
test('should retrive requisition record', () => {
    const resp = {
        requisitionid: 'OI006'
    };
    axios.get.mockResolvedValue(resp);
    return getOneRequisitionRecord().then(ok => expect(ok).toEqual({ "ok": true }));
});

//testing for updateRequisitionStatus service(positive) - status=waiting for approval
test('testing updateRequisitionStatus function with status waiting for approval status', async () => {
    const payload = {
        requisiondate: '2021-September-17',
        supplier: 'thisara',
        shipto: 'Malabe',
        status: 'Waiting for Approval',
        comment: 'order for Malabe site'
    };

    const list = {
        item01: 'IT006',
        item02: 'IT007',
        item03: 'IT008',
        itemName01: 'cement',
        itemName02: 'metal',
        itemName03: 'sand',
        qty01: 3,
        qty02: 5,
        qty03: 6,
        amount01: 12,
        amount02: 15,
        amount03: 20,
        total: 60000,
        title: 'order received'
    }
    const data = await updateRequisitionStatus('OI006', payload, list);
    expect(data).toStrictEqual({ "ok": true });
});

//testing for updateRequisitionStatus service(positive) - Approved
test('testing updateRequisitionStatus function with status Approved', async () => {
    const payload = {
        requisiondate: '2021-September-17',
        supplier: 'thisara',
        shipto: 'Malabe',
        status: 'Approved',
        comment: 'order for Malabe site'
    };

    const list = {
        item01: 'IT006',
        item02: 'IT007',
        item03: 'IT008',
        itemName01: 'cement',
        itemName02: 'metal',
        itemName03: 'sand',
        qty01: 3,
        qty02: 5,
        qty03: 6,
        amount01: 12,
        amount02: 15,
        amount03: 20,
        total: 60000,
        title: 'order received'
    }
    const data = await updateRequisitionStatus('OI006', payload, list);
    expect(data).toStrictEqual(undefined);
});

//testing for updateRequisitionStatus service(positive) - Declined
test('testing updateRequisitionStatus function with status Declined', async () => {
    const payload = {
        requisiondate: '2021-September-17',
        supplier: 'thisara',
        shipto: 'Malabe',
        status: 'Declined',
        comment: 'order for Malabe site'
    };

    const list = {
        item01: 'IT006',
        item02: 'IT007',
        item03: 'IT008',
        itemName01: 'cement',
        itemName02: 'metal',
        itemName03: 'sand',
        qty01: 3,
        qty02: 5,
        qty03: 6,
        amount01: 12,
        amount02: 15,
        amount03: 20,
        total: 60000,
        title: 'order received'
    }
    const data = await updateRequisitionStatus('OI005', payload, list);
    expect(data).toStrictEqual({ "ok": true });
});



//testing for addRequisition service(negative)
test('should return error', () => {
    const resp = {
        requisitionid: 'OI006',
        requisiondate: '2021-September-17',
        suppliername: 'thisara',
        title: 'order received',
        shipto: 'Malabe',
        status: 'Waiting for Approval',
        total: 60000,
        comment: 'order for Malabe site',
        item01: 'IT006',
        item02: 'IT007',
        item03: 'IT008',
        itemName01: 'cement',
        itemName02: 'metal',
        itemName03: 'sand',
        qty01: 3,
        qty02: 5,
        qty03: 6,
        amount01: 12,
        amount02: 15,
        amount03: 20
    };
    axios.post.mockImplementation(resp);
    return addRequisition().then(error => expect(error).toEqual({ "ok": false, err: "error.response.data.message" }));
});


//testing for getAllRequisition(negative)
test('should throw error when retrieving data', () => {
    axios.get.mockResolvedValue();
    return getAllRequisition().then(error => expect(error).toEqual({ "ok": false }));
});

//testing for deleteRequisitionRecord service(negative)
test('should return error for request', () => {
    const resp = {
        requisitionid: 'OI006'
    };
    axios.post.mockImplementation(resp);
    return deleteRequisitionRecord().then(error => expect(error).toEqual({ "ok": false, err: "error.response.data.status" }));
});

//testing for updateRequisitionStatus service(positive) - status=waiting for approval
test('testing updateRequisitionStatus for error', async () => {
    const payload = {
        requisiondate: '2021-September-17',
        supplier: 'thisara',
        shipto: 'Malabe',
        status: 'Waiting for Approval',
        comment: 'order for Malabe site'
    };

    const list = {
        item01: 'IT006',
        item02: 'IT007',
        item03: 'IT008',
        itemName01: 'cement',
        itemName02: 'metal',
        itemName03: 'sand',
        qty01: 3,
        qty02: 5,
        qty03: 6,
        amount01: 12,
        amount02: 15,
        amount03: 20,
        total: 60000,
        title: ''
    }
    axios.post.mockImplementationOnce();
    return updateRequisitionStatus('OI006', payload, list).then(error => expect(error).toEqual({ "ok": true }));
});

// testing for getOneRequisitionRecord service(negative)
test('should throw error when retrieving requisition record', () => {
    const resp = {
    };
    axios.get.mockImplementation(resp);
    return getOneRequisitionRecord().then(error => expect(error).toEqual({ "ok": false, err: "error.response.data.message" }));
});