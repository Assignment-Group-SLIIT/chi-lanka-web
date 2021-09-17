import { React, useState, useEffect } from "react";

import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import { Modal } from "react-bootstrap";
import { getSupplierByID } from '../../services/supplierService';


import 'react-datetime/css/react-datetime.css';

function ItemUpdate(item) {

    const [itemID, setItemID] = useState("")
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [availability, setAvailability] = useState("")
    const [quantity, setQuanity] = useState("")
    const [ReceivedDate, setReceivedDate] = useState("")
    const [suppliername, setSuppliername] = useState("")
    const [address, setAddress] = useState("")
    const [contactnumber, setContactNumber] = useState("")



    useEffect(() => {


        try {
            setItemID(item.data.itemid)
            setItemName(item.data.itemname)
            setPrice(item.data.price)
            setDescription(item.data.Description)
            setAvailability(item.data.availability)
            setQuanity(item.data.Quantity)
            setReceivedDate(item.data.ReceivedDate)

        } catch (error) {
            alert(error.message);
        }

    }, [item.data])

    useEffect(() => {

        getSupplierByID(itemID.toUpperCase()).then((response) => {
            console.log("data for table", response.data);
            if (response.ok) {
                setSuppliername(response.data.suppliername);
                setAddress(response.data.address);
                setContactNumber(response.data.contactnumber);
            }
        }).catch((error) => {
            alert(error.message);
        })
    }, [itemID, suppliername, address, contactnumber])







    // useEffect(() => {
    //     controlButton(status);
    // }, [status])

    // const sendData = (e) => {
    //     e.preventDefault();

    //     const newPurchaseRequisition = {
    //         requisition,
    //         supplier,
    //         requisitionDate,
    //         shipToAddress,
    //         amount,
    //         comment,
    //         status,
    //     }

    //     console.log("data in updateee", newPurchaseRequisition)
    //     updateRequisitionStatus(requisition, newPurchaseRequisition, empList).then((res) => {
    //         console.log("response came from service", res)
    //         Swal.fire({
    //             text: 'Successfully updated!',
    //             icon: 'success',
    //             showConfirmButton: false,
    //             timer: 1500
    //         }).then(() => {
    //             window.location.reload()
    //         })

    //     })
    // }

    //function to disable button according to statuse


    // const openModalDelete = (data) => {

    //     Swal.fire({
    //         title: 'Do you want to decline the requisition?',
    //         showDenyButton: true,
    //         confirmButtonText: 'Yes',
    //         denyButtonText: `Don't save`,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             Swal.fire({
    //                 text: 'Success!',
    //                 icon: 'success',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             }).then(() => {
    //                 document.getElementById('status').disabled = true;
    //             })
    //         } else if (result.isDenied) {
    //             Swal.fire('Changes are not saved', '', 'info')
    //         }
    //     })

    // }

    console.log("data for update", item)
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Item Name : {item.data.itemname}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addEmp-form" action="post" className="form" >
                            <div className="row">
                                <div className="form-group col-md-4 ">
                                    <label className="form-label" for="itemId">Item ID:</label>
                                </div>
                                <div className="form-group col-md-8 ">
                                    <input
                                        required
                                        value={itemID}
                                        id="itemId"
                                        type="text"
                                        className="form-control "
                                        placeholder="itemId"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-4">


                                <label className="form-label-emp " for="supplier">Supplier:</label>
                            </div>

                            <div className="form-group col-md-9">
                                <select
                                    id="supplier"
                                    className="form-control "
                                    value={suppliername}
                                    onChange={e => { setSuppliername(e.target.value); }}
                                    required
                                >
                                    <option  >choose</option>
                                    <option id="KDH" value="KDH" >KDH Constructions</option>
                                    <option id="PERERA" value="PERERA">PERERA Constructions</option>
                                    <option id="Manual Handlers" value="Manual Handlers" >Manual Handlers</option>
                                    <option id="Builders Barn" value="Builders Barn">Builders Barn Constructions</option>
                                    <option id="Pinnacle" value="Pinnacle" >Pinnacle Constructions</option>
                                </select>


                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp" for="date">Received Date:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="date"
                                        type="text"
                                        className="form-control "
                                        placeholder="date"
                                        value={ReceivedDate}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4 ">
                                    <label className="form-label" for="description">Description:</label>
                                </div>
                                <div className="form-group col-md-8 ">
                                    <input
                                        required
                                        value={description}
                                        id="description"
                                        type="text"
                                        className="form-control "
                                        placeholder="description"
                                    // onChange={(e) => {
                                    //     setShipTo(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="unitPrice">Unit Price:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="unitPrice"
                                        type="number"
                                        className="form-control "
                                        placeholder="unitPrice"
                                        disabled
                                        value={price}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="availability">Availability:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="availability"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="availability"
                                        value={availability}
                                    // onChange={(e) => {
                                    //     setComment(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="quatntity">Quantity:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="quatntity"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="quatntity"
                                        value={quantity}
                                    // onChange={(e) => {
                                    //     setComment(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="address">Supplier Address:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="address"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="address"
                                        value={address}
                                    // onChange={(e) => {
                                    //     setComment(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="contact">Contact Number:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="contact"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="contact"
                                        value={contactnumber}
                                    // onChange={(e) => {
                                    //     setComment(e.target.value);
                                    // }}
                                    />
                                </div>
                            </div>


                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok" id="btn-update">
                                        Update
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={item.onHide}>
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

export default ItemUpdate;
