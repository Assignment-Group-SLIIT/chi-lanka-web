import { React, useState, useEffect } from "react";
import moment, { isMoment } from 'moment';
import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import Header from '../../Header'


import 'react-datetime/css/react-datetime.css';
import { addNewItem, deleteItemPermenantly, lastAddedItem, updateItemDetails } from "../../services/itemServices";
import { addSupplierItem, getSupplier } from "../../services/supplierService";

function AddItem() {

    const [itemid, setItemID] = useState("")
    const [itemname, setItemName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [availability, setAvailability] = useState("")
    const [quantity, setQuantiity] = useState("")
    const [ReceivedDate, setReceivedDate] = useState("")
    const [suppliername, setSuppliername] = useState("")
    const [address, setAddress] = useState("")
    const [contactnumber, setContactNumber] = useState("")
    const [siteid, setSiteId] = useState("")

    var [id, setID] = useState("");

    function getTheSupplier() {
        //alert("function called")

        getSupplier(suppliername).then((response) => {
            console.log("data for table", response.data);
            if (response.ok) {
                setAddress(response.data.address);
                setContactNumber(response.data.contactnumber);
                setSiteId(response.data.siteid);
            }

        })
    }

    useEffect(() => {

        lastAddedItem().then((response) => {
            if (response.ok) {
                setID(response.data.itemid)
                console.log("iddddd", response.data.itemid)
            }

            id = id.substring(2)
            id = Number(id) + 1;
            id = "IT0" + id;
            setItemID(id)
            //alert(itemid)
        })


    }, [itemid])
    useEffect(() => {

        getTheSupplier()

    }, [suppliername, address, contactnumber, siteid])

    const sendData = (e) => {
        e.preventDefault();

        const newItem = {
            itemid,
            itemname,
            price,
            Description: description,
            availability,
            Quantity: quantity,
            ReceivedDate
        }

        const newSupplierItem = {
            suppliername,
            address,
            contactnumber,
            itemid,
            itemname,
            siteid

        }


        console.log("data in new Item", newItem)
        addNewItem(newItem).then((res) => {
            console.log("response came from service", res)

            if (res.ok) {

                addSupplierItem(newSupplierItem).then((res) => {

                    if (res.ok) {
                        Swal.fire({
                            text: 'Successfully Inserted the New Item!',
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
                            // window.location.reload()
                        })

                    }

                })


            } else {
                Swal.fire({
                    text: 'Oops!',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    // window.location.reload()
                })
            }



        })
    }




    return (

        <div className="page-component-body">
            <Header></Header>
            <div className="container input-main-form-emp mb-5">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Add New Item</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addEmp-form" action="post" className="form" onSubmit={sendData} >
                                    <div className="row">
                                        <div className="form-group col-md-4 ">
                                            <label className="form-label" for="itemId">Item ID:</label>
                                        </div>
                                        <div className="form-group col-md-8 ">
                                            <input
                                                required
                                                onChange={e => { setItemID(e.target.value); }}
                                                id="itemId"
                                                type="text"
                                                className="form-control "
                                                placeholder="itemId"
                                                value={itemid}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label className="form-label-emp " for="supplier">Supplier:</label>
                                        </div>
                                        <div className="form-group col-md-8 ">

                                            <select
                                                id="supplier"
                                                className="form-control "
                                                //value={suppliername}
                                                onChange={e => { setSuppliername(e.target.value); getTheSupplier(); }}
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
                                            <label className="form-label-emp" for="date">Received Date:</label>
                                        </div>
                                        <div className="form-group col-md-8">
                                            <DatePicker required id="receivedDate"
                                                name="receivedDate"
                                                //value={moment(ReceivedDate).format("MM/DD/YYYY")}

                                                timeFormat={false}
                                                //isValidDate={disablePastDt}
                                                onChange={(event) => { setReceivedDate(event); }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-4 ">
                                            <label className="form-label" for="itemName">Item Name:</label>
                                        </div>
                                        <div className="form-group col-md-8 ">
                                            <input
                                                required
                                                //value={description}
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
                                    <div className="row">
                                        <div className="form-group col-md-4 ">
                                            <label className="form-label" for="description">Description:</label>
                                        </div>
                                        <div className="form-group col-md-8 ">
                                            <input
                                                required
                                                //value={description}
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
                                                onChange={(e) => {
                                                    setPrice(e.target.value);
                                                }}
                                            //value={price}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label className="form-label-emp " for="availability">Availability:</label>
                                        </div>
                                        <div className="form-group col-md-8 ">

                                            <select
                                                id="availability"
                                                className="form-control "
                                                //value={availability}
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
                                                // value={quantity}
                                                onChange={(e) => {
                                                    setQuantiity(e.target.value);
                                                }}
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
                                                onChange={(e) => {
                                                    setAddress(e.target.value);

                                                }}
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
                                                onChange={(e) => {
                                                    setContactNumber(e.target.value);
                                                }}

                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label className="form-label" for="siteid">Site ID:</label>
                                        </div>
                                        <div className="form-group col-md-8">
                                            <input
                                                required
                                                id="siteid"
                                                type="text"
                                                className="form-control "
                                                placeholder="site ID"
                                                value={siteid}
                                                onChange={(e) => {
                                                    setSiteId(e.target.value);
                                                }}
                                                disabled
                                            />
                                        </div>
                                    </div>


                                    <div className="row mb-4">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok" id="btn-update">
                                                Submit
                                            </button>
                                        </div>

                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset" >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div >
                        </div >
                    </div >
                </div >
            </div >

        </div >





























    )
}

export default AddItem;
