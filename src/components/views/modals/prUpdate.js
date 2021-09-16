import { React, useState, useEffect } from "react";

import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import { Modal } from "react-bootstrap";

import { updateRequisitionStatus } from "../../services/requisitionService"

import 'react-datetime/css/react-datetime.css';

function PrUpdateModal(emp) {

    const [requisition, setRequisition] = useState("")
    const [supplier, setSupplier] = useState("")
    const [requisitionDate, setstate] = useState("")
    const [shipToAddress, setShipToAddress] = useState("")
    const [amount, setAmount] = useState("")
    const [comment, setComment] = useState("")
    const [status, setStatus] = useState("")

    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    useEffect(() => {

        try {
            setRequisition(emp.data.requisitionid)
            setSupplier(emp.data.suppliername)
            setstate(emp.data.requisiondate)
            setShipToAddress(emp.data.shipto)
            setAmount(emp.data.total)
            setComment(emp.data.comment)
            setStatus(emp.data.status)

        } catch (error) {

        }

    }, [emp.data])


    useEffect(() => {
        controlButton(status);
    }, [status])

    const sendData = (e) => {
        e.preventDefault();

        const newPurchaseRequisition = {
            requisition,
            supplier,
            requisitionDate,
            shipToAddress,
            amount,
            comment,
            status,
        }

        console.log("data in updateee", newPurchaseRequisition)
        updateRequisitionStatus(requisition, newPurchaseRequisition);
    }

    //function to disable button according to statuse
    const controlButton = (e) => {
        console.log("buttonnnn", e)
        switch (e) {
            case 'Declined':
                openModalDelete()
                break;
            case 'Approved':
                document.getElementById('btn-update').disabled = false;
                break;
            case 'Referred':
                document.getElementById('btn-update').disabled = false;
                break;
            case 'Waiting for Approval':
                document.getElementById('btn-update').disabled = false;
                break;
            default:
                break;
        }

    }

    const openModalDelete = (data) => {

        Swal.fire({
            title: 'Do you want to decline the requisition?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    text: 'Success!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    document.getElementById('status').disabled = true;
                })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

    }

    console.log("data for update", emp)
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Purchase Requisition : {emp.data.requisition}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            <div className="row">
                                <div className="form-group col-md-4 ">
                                    <label className="form-label" for="fName">Requisition:</label>
                                </div>
                                <div className="form-group col-md-8 ">
                                    <input
                                        required
                                        value={requisition}
                                        id="requisition"
                                        type="text"
                                        className="form-control "
                                        placeholder="Requisition Name"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp " for="gender">Supplier:</label>
                                </div>

                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="supplier"
                                        type="text"
                                        className="form-control "
                                        placeholder="supplier name"
                                        value={supplier}
                                        disabled
                                    />

                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp" for="dob">Requisition requested date:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="requisitionDate"
                                        type="text"
                                        className="form-control "
                                        placeholder="supplier name"
                                        value={requisitionDate}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4 ">
                                    <label className="form-label" for="shipTo">Ship to:</label>
                                </div>
                                <div className="form-group col-md-8 ">
                                    <input
                                        required
                                        value={shipToAddress}
                                        id="shipTo"
                                        type="text"
                                        className="form-control "
                                        placeholder="ship to"
                                    // onChange={(e) => {
                                    //     setShipTo(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="CurrAdd">Amount:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="amount"
                                        type="number"
                                        className="form-control "
                                        placeholder="Current address"
                                        disabled
                                        value={amount}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="CurrAdd">Comment:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="comment"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="comment"
                                        value={comment}
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp" for="designation">Status:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <select
                                        id="status"
                                        className="form-control "
                                        onChange={(e) => {
                                            setStatus(e.target.value);
                                        }}
                                        value={status}
                                    >
                                        <option id="waiting-for-approval">Waiting for Apprvoval</option>
                                        <option id="approved">Approved</option>
                                        <option id="referred">Referred</option>
                                        <option id="declined">Declined</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok" id="btn-update">
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={emp.onHide}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </Modal.Body >
        </div >
    )
}

export default PrUpdateModal;
