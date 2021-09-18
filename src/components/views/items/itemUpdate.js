import { React, useState, useEffect } from "react";
import moment, { isMoment } from 'moment';
import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import { Modal } from "react-bootstrap";
import { getSupplierByID } from '../../services/supplierService';


import 'react-datetime/css/react-datetime.css';
import { deleteItemPermenantly, updateItemDetails } from "../../services/itemServices";

function ItemUpdate(item) {

    const [itemID, setItemID] = useState("")
    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [availability, setAvailability] = useState("")
    const [quantity, setQuantiity] = useState("")
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
            setQuantiity(item.data.Quantity)
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


    }, [itemID, address, contactnumber])


    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday)
    }





    // useEffect(() => {
    //     controlButton(status);
    // }, [status])

    const sendData = (e) => {
        e.preventDefault();

        const newItemUpdate = {
            itemID,
            itemName,
            price,
            price,
            Description: description,
            availability,
            Quantity: quantity,
            ReceivedDate
        }

        console.log("data in updateee for supplier", newItemUpdate)
        updateItemDetails(itemID.toUpperCase(), newItemUpdate).then((res) => {
            console.log("response came from service", res)

            if (res.ok) {
                Swal.fire({
                    text: 'Successfully updated!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500

                }).then(() => {
                    window.location.reload()
                })
            } else {
                Swal.fire({
                    text: 'Oops!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.reload()
                })
            }



        })
    }



    console.log("data for update", item)
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Item Name : {item.data.itemname}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>
                            <div className="row mt-3 mb-3">
                                <div className="col-md-6 float-right">

                                    <div className="row">
                                        <div className="form-group col-md-4 ">
                                            <label className="form-label" for="itemId">Item ID: </label>
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
                                </div>
                                <div className="col-md-6 float-right">
                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label className="form-label-emp" for="date">Received Date: </label>
                                        </div>
                                        <div className="form-group col-md-8">
                                            <DatePicker required id="receivedDate"
                                                name="receivedDate"
                                                value={moment(ReceivedDate).format("MM/DD/YYYY")}

                                                timeFormat={false}
                                                isValidDate={disablePastDt}
                                                onChange={(event) => { setReceivedDate(event); }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp " for="supplier">Supplier: </label>
                                </div>
                                <div className="form-group col-md-8 ">

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

                            </div>

                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label" for="address">Supplier Address: </label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="address"
                                        type="textarea"
                                        className="form-control "
                                        placeholder="address"
                                        value={address}
                                        onChange={(e) => {
                                            setAddress(e.target.value);

                                        }}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row mt-3 mb-3">
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
                                        onChange={(e) => {
                                            setContactNumber(e.target.value);
                                        }}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4 ">
                                    <label className="form-label" for="itemName">Item Name: </label>
                                </div>
                                <div className="form-group col-md-8 ">
                                    <input
                                        required
                                        value={itemName}
                                        id="itemName"
                                        type="text"
                                        className="form-control "
                                        placeholder="itemName"
                                        onChange={(e) => {
                                            setItemName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">

                                <div className="form-group col-md-4">
                                    <label className="form-label" for="unitPrice">Unit Price:</label>

                                    <div className="form-group ">
                                        <input
                                            required
                                            id="unitPrice"
                                            type="number"
                                            className="form-control "
                                            placeholder="unitPrice"
                                            onChange={(e) => {
                                                setPrice(e.target.value);
                                            }}
                                            value={price}
                                        />
                                    </div>
                                </div>

                                <div className="form-group col-md-4">
                                    <label className="form-label-emp " for="availability">Availability:</label>

                                    <div className="form-group ">

                                        <select
                                            id="availability"
                                            className="form-control "
                                            value={availability}
                                            onChange={e => { setAvailability(e.target.value); }}
                                            required
                                        >
                                            <option  >choose</option>
                                            <option id="InStock" value="InStock" >InStock</option>
                                            <option id="Out-of Stock" value="Out-of Stock">Out-of Stock</option>
                                            <option id="Requested" value="Requested" >Requested</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="form-group col-md-4">
                                    <label className="form-label" for="quatntity">Quantity:</label>

                                    <div className="form-group">
                                        <input
                                            required
                                            id="quatntity"
                                            type="textarea"
                                            className="form-control "
                                            placeholder="quatntity"
                                            value={quantity}
                                            onChange={(e) => {
                                                setQuantiity(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3 mb-3">


                            </div>
                            <div>
                                <div className="row">
                                    <div className="form-group col-md-4 ">
                                        <label className="form-label" for="description">Description: </label>
                                    </div>
                                    <div className="form-group col-md-8 ">
                                        <input
                                            required
                                            value={description}
                                            id="description"
                                            type="text"
                                            className="form-control "
                                            placeholder="description"
                                            onChange={(e) => {
                                                setDescription(e.target.value);
                                            }}
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



                            </div>


                        </form>
                    </div >
                </div>
            </Modal.Body>
        </div>

    )
}

export default ItemUpdate;
