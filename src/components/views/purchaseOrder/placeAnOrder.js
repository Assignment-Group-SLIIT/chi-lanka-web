import { React, useState } from "react";

import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

import Header from '../../Header'

function PlaceAnOrder() {

    const addNewItem = () => {
        console.log("button clicked")
        document.getElementById('btnAdd1').style.display = "none";
        document.getElementById('hide2').style.display = "";
    }

    const addNewItem2 = () => {
        console.log("button clicked")
        document.getElementById('btnAdd2').style.display = "none";
        document.getElementById('hide3').style.display = "";
    }

    return (
        <div className="page-component-body">
            <Header></Header>
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Place an Order - for below Rs.100,000.00</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addEmp-form" action="post" className="form"
                                // onSubmit={sendData}
                                >

                                    <div className="row">
                                        <div className="form-group col-md-4">
                                            <label className="form-label-emp " for="gender">Supplier:</label>
                                        </div>

                                        <div className="form-group col-md-8">
                                            <select
                                                id="supplier"
                                                className="form-control "
                                                //tabindex="3"
                                                // onChange={e => { setVehicleType(e.target.value); searchModel() }}
                                                required
                                            >
                                                <option  >choose</option>
                                                <option id="type1" value="Car" >Car</option>
                                                <option id="type2" value="Van">Van</option>
                                                <option id="type3" value="Bus">Bus</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-4 ">
                                            <label className="form-label" for="fName">PO Title:</label>
                                        </div>
                                        <div className="form-group col-md-8 ">
                                            <input
                                                required
                                                // value={poTitle}
                                                id="poTitle"
                                                type="text"
                                                className="form-control "
                                                placeholder="poTitle"
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
                                                // value={shipToAddress}
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

                                    <div class="row" id="hide1">
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="item1">Item 01:</label>
                                            <select
                                                id="item1"
                                                className="form-control "
                                                //tabindex="3"
                                                // onChange={e => { setVehicleType(e.target.value); searchModel() }}
                                                required
                                            >
                                                <option  >choose</option>
                                                <option id="type1" value="Car" >Car</option>
                                                <option id="type2" value="Van">Van</option>
                                                <option id="type3" value="Bus">Bus</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label-emp" for="itemName1">Item Name:</label>
                                            <div className="form-group col-md-8 ">
                                                <input
                                                    required
                                                    // value={shipToAddress}
                                                    id="itemName1"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="item name"
                                                // onChange={(e) => {
                                                //     setShipTo(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="quantity1">Quantity:</label>
                                            <input
                                                type="number"
                                                class="form-control formInput"
                                                id="quantity1"
                                                name="quantity1"
                                                placeholder="Count"
                                                min="1"
                                                //tabindex="5"
                                                pattern="[0-9]"
                                                required
                                            // onChange={(event) => { setno1(event.target.value); }}
                                            />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="amount1">Amount:</label>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="amount1"
                                                name="amount1"
                                                placeholder="0.00"
                                                //tabindex="5"
                                                required
                                                disabled
                                            //pattern="[0-9]"
                                            />
                                        </div>
                                        <div className="form-group col" id="btnAdd1" style={{ display: "block", margin: "15px 0 0 0" }}>
                                            <button class="btn btn-sm btn-primary" onClick={addNewItem}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row" id="hide2" style={{ display: "none" }}>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="item2">Item 02:</label>
                                            <select
                                                id="item2"
                                                className="form-control "
                                                //tabindex="3"
                                                // onChange={e => { setVehicleType(e.target.value); searchModel() }}
                                                required
                                            >
                                                <option  >choose</option>
                                                <option id="type1" value="Car" >Car</option>
                                                <option id="type2" value="Van">Van</option>
                                                <option id="type3" value="Bus">Bus</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label-emp" for="itemName2">Item Name:</label>
                                            <div className="form-group col-md-8 ">
                                                <input
                                                    required
                                                    // value={shipToAddress}
                                                    id="itemName2"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="item name"
                                                // onChange={(e) => {
                                                //     setShipTo(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="quantity2">Quantity:</label>
                                            <input
                                                type="number"
                                                class="form-control formInput"
                                                id="quantity2"
                                                name="quantity2"
                                                placeholder="Count"
                                                min="1"
                                                //tabindex="5"
                                                pattern="[0-9]"
                                                required
                                            // onChange={(event) => { setno1(event.target.value); }}
                                            />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="amount2">Amount:</label>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="amount2"
                                                name="amount2"
                                                placeholder="0.00"
                                                //tabindex="5"
                                                required
                                                disabled
                                            //pattern="[0-9]"
                                            />
                                        </div>
                                        <div className="form-group col" id="btnAdd2" style={{ display: "block", margin: "15px 0 0 0" }}>
                                            <button class="btn btn-sm btn-primary" onClick={addNewItem2}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row" id="hide3" style={{ display: "none" }}>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="item3">Item 03:</label>
                                            <select
                                                id="item3"
                                                className="form-control "
                                                //tabindex="3"
                                                // onChange={e => { setVehicleType(e.target.value); searchModel() }}
                                                required
                                            >
                                                <option  >choose</option>
                                                <option id="type1" value="Car" >Car</option>
                                                <option id="type2" value="Van">Van</option>
                                                <option id="type3" value="Bus">Bus</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label class="form-label-emp" for="itemName3">Item Name:</label>
                                            <div className="form-group col-md-8 ">
                                                <input
                                                    required
                                                    // value={shipToAddress}
                                                    id="itemName3"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="item name"
                                                // onChange={(e) => {
                                                //     setShipTo(e.target.value);
                                                // }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="quantity3">Quantity:</label>
                                            <input
                                                type="number"
                                                class="form-control formInput"
                                                id="quantity3"
                                                name="quantity3"
                                                placeholder="Count"
                                                min="1"
                                                //tabindex="5"
                                                pattern="[0-9]"
                                                required
                                            // onChange={(event) => { setno1(event.target.value); }}
                                            />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="amount3">Amount:</label>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="amount3"
                                                name="amount3"
                                                placeholder="0.00"
                                                //tabindex="5"
                                                required
                                                disabled
                                            //pattern="[0-9]"
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
                                            // value={comment}
                                            // onChange={(e) => {
                                            //     setComment(e.target.value);
                                            // }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok">
                                                Submit
                                            </button>
                                        </div>
                                        <div className="col py-3 text-center">
                                            <button type="reset" className="btn btn-reset">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlaceAnOrder
