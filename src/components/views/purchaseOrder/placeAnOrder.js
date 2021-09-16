import { React, useState, useEffect } from "react";

import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


import { addOrder } from "../../services/purchaseOrderService";
import { addOrderItems } from "../../services/purchaseOrderItemsService";

import Header from '../../Header'

function PlaceAnOrder() {



    const [orderid, setOrderId] = useState("");
    const [orderdate, setOrderdate] = useState("");
    const [suppliername, setSuppliername] = useState("");
    const [title, setTitle] = useState("");
    const [shipto, setShipTo] = useState("");
    const [total, setTotal] = useState("");
    const [comment, setComment] = useState("");
    const [item01, setItem01] = useState("");
    const [item02, setItem02] = useState("");
    const [item03, setItem03] = useState("");
    const [itemName01, setItemName01] = useState("");
    const [itemName02, setItemName02] = useState("");
    const [itemName03, setItemName03] = useState("");
    const [qty01, setQty01] = useState("");
    const [qty02, setQty02] = useState("");
    const [qty03, setQty03] = useState("");
    const [amount1, setAmount01] = useState("");
    const [amount2, setAmount02] = useState("");
    const [amount3, setAmount03] = useState("");

    useEffect(() => {
        calculateItem1Amount()
        calculateTwoItemsAmount()
        calculateThreeItemsAmount()
    }, [amount1, amount2, amount3, qty01, qty02, qty03]);

    const addNewItem = () => {
        console.log("button clicked")
        document.getElementById('btnAdd1').style.display = "none";
        document.getElementById('hide2').style.display = "";
        calculateItem1Amount();
    }

    const addNewItem2 = () => {
        console.log("button clicked")
        document.getElementById('btnAdd2').style.display = "none";
        document.getElementById('hide3').style.display = "";
        calculateTwoItemsAmount()
    }

    function calculateItem1Amount() {
        var firstAmount = amount1 * qty01;
        document.getElementById("totalAmount").value = firstAmount;
        return firstAmount;
    }

    function calculateTwoItemsAmount() {
        var secondAmount = (amount2 * qty02) + calculateItem1Amount();
        document.getElementById("totalAmount").value = secondAmount;
        return secondAmount;
    }

    function calculateThreeItemsAmount() {
        var thirdAmount = (amount3 * qty03) + calculateTwoItemsAmount();
        document.getElementById("totalAmount").value = thirdAmount;
    }

    function sendData(e) {
        e.preventDefault();
        //alert("function called")
        const status = "Approved"


        const newOrder = {
            orderid,
            orderdate,
            suppliername,
            title,
            shipto,
            status,
            total,
            comment,
        };


        const newOrderItems = {
            orderid,
            item01,
            item02,
            item03,
            itemName01,
            itemName02,
            itemName03,
            qty01,
            qty02,
            qty03
        }

        // const newPayment = {
        //     orderid,
        //     total,
        //     comment,
        //     orderdate
        // }

        if (total > 100000) {
           // alert("Your Total is greater than 100000 please make a requisition instead !");
           Swal.fire({
            icon: 'error',
            title: "Opps ! ",
            text: `${"Your Total is greater than 100000 please make a requisition instead !"}`,
            confirmButtonColor: "#1fc191",
        })
        } else {

            addOrder(newOrder).then((response) => {
                const message = response.ok
                    ? "Purchase Order insertion successful!"
                     : response.err;

                if (response.ok) {

                    //alert(`${message}`)
                    Swal.fire({
                        title: 'Success!',
                        text: `${message}`,
                        icon: 'success',
                        showConfirmButton: true,
                        showDenyButton: true,
                        confirmButtonText: "Proceed",
                        denyButtonText: "Cancel",
                        confirmButtonColor: "#1fc191",
                        //timer: 1500
                    }
                    ).then((result) => {
                       // window.location.reload();
                   
                    if(result.isConfirmed){

                    addOrderItems(newOrderItems).then(() => {
                        const message = response.ok
                            ? "Purchase Order Items insertion successful!"
                            : response.err;

                        if (response.ok) {
                            //alert(`${message}`)
                            Swal.fire({
                                title: 'Success!',
                                text: `${message}`,
                                icon: 'success',
                                confirmButtonColor: "#1fc191",
                                //timer: 1500
                            }
                            ).then(() => {
                                //window.location.reload();
                            })
                        }
                        else {
                            //alert(response.err)
                            Swal.fire({
                                title: 'Oops!',
                                text: `${response.err}`,
                                icon: 'error',
                                confirmButtonColor: false,
                                timer: 1500
                            }
                            )
                        }
                    })
                }
                })

                } else {
                    //alert(response.err)
                    Swal.fire({
                        title: 'Oops!',
                        text: `${response.err}`,
                        icon: 'error',
                        confirmButtonColor: "#1fc191",
                        //timer: 1500
                    }
                    )
                }
            }
            )
        }
    }

    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday)
    } 

    return (
        <div className="page-component-body">
            <Header></Header>
            <div className="container input-main-form-emp mb-5">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Place an Order - for below Rs.100,000.00</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>

                                <div className="row mt-5">

                                        <div className="form-group col-md-3">
                                            <label className="form-label-emp " for="gender">Supplier:</label>
                                        </div>

                                        <div className="form-group col-md-9">
                                            <select
                                                id="supplier"
                                                className="form-control "
                                                //tabindex="3"
                                                onChange={e => { setSuppliername(e.target.value); }}
                                                required
                                            >
                                                <option  >choose</option>
                                                <option id="supplier1" value="supplier1" >Supplier 1</option>
                                                <option id="supplier2" value="supplier2">Supplier 2</option>
                                                <option id="supplier3" value="supplier3">Supplier 3</option>
                                            </select>

                                        </div>
                                        </div>

                                        <hr></hr>



                                    <div className="row mt-3 mb-3">
                                            <div className="col-md-6 float-right">

                                                        <div className="row">
                                                    
                                                                <div className="form-group col-md-6">
                                                                    <label className="form-label-emp " for="orderId">Order Id:</label>
                                                                </div>

                                                                <div className="form-group col-md-6">
                                                                    <input
                                                                        required
                                                                        onChange={e => { setOrderId(e.target.value); }}
                                                                        id="orderId"
                                                                        type="text"
                                                                        className="form-control "
                                                                        placeholder="orderId"
                                                                        pattern="OI[0-9]{3}"
                                                                    />

                                                                </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 float-right">

                                                    <div className="row">
                                                    <div class="form-group col-md-6"  >
                                                        <label for="rfrom" class="form-label-emp float-right mr-5">Order Date</label>
                                                        
                                                    </div>
                                                    <div class="form-group col-md-6"  >
                                                        
                                                        <DatePicker required id="orderDate"
                                                            name="orderDate"
                                                            onChange={(event) => { setOrderdate(event); }}
                                                            timeFormat={false}
                                                            isValidDate={disablePastDt}
                                                        />
                                                    </div>
                                                </div>

                                            </div>

                                    </div>

                                    {/* <div className="row">
                                        
                                        <div className="form-group col-md-3">
                                            <label className="form-label-emp " for="orderId">Order Id:</label>
                                        </div>

                                        <div className="form-group col-md-9">
                                            <input
                                                required
                                                onChange={e => { setOrderId(e.target.value); }}
                                                id="orderId"
                                                type="text"
                                                className="form-control "
                                                placeholder="orderId"
                                                pattern="OI[0-9]{3}"
                                            />

                                        </div>
                                    </div> */}

                                    
                                    {/* <div className="row">
                                        <div class="form-group col-md-4"  >
                                            <label for="rfrom" class="form-label-emp">Order Date</label>
                                            
                                        </div>
                                        <div class="form-group col-md-8"  >
                                            
                                            <DatePicker required id="orderDate"
                                                name="orderDate"
                                                onChange={(event) => { setOrderdate(event); }}
                                                timeFormat={false}
                                            />
                                        </div>
                                    </div> */}

                                   
                                    <div className="row mb-3">
                                        <div className="form-group col-md-3 ">
                                            <label className="form-label" for="fName">PO Title:</label>
                                        </div>
                                        <div className="form-group col-md-9 ">
                                            <input
                                                required
                                                onChange={e => { setTitle(e.target.value); }}
                                                id="poTitle"
                                                type="text"
                                                className="form-control "
                                                placeholder="poTitle"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="form-group col-md-3 ">
                                            <label className="form-label" for="shipTo">Ship to:</label>
                                        </div>
                                        <div className="form-group col-md-9 ">
                                            <input
                                                required
                                                id="shipTo"
                                                type="text"
                                                className="form-control "
                                                placeholder="ship to"
                                                onChange={(e) => {
                                                    setShipTo(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div class="row border pt-3" id="hide1">
                                        <div className="col-md-1">

                                        </div>
                                        
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="item1">Item 01:</label>
                                            <select
                                                id="item1"
                                                className="form-control "
                                                //tabindex="3"
                                                onChange={e => { setItem01(e.target.value); }}
                                                required
                                            >
                                                <option  >choose</option>
                                                <option id="item1" value="item1" >Item 1</option>
                                                <option id="item2" value="item2">Item 2</option>
                                                <option id="item3" value="item3">Item 3</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="form-label-emp ml-2" for="itemName1">Item Name:</label>
                                            <div className="form-group">
                                                <input
                                                    required
                                                    id="itemName1"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="item name"
                                                    onChange={(e) => {
                                                        setItemName01(e.target.value);
                                                    }}
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
                                                onChange={(event) => { setQty01(event.target.value); }}
                                            />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="amount1">Unit Price :</label>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="amount1"
                                                name="amount1"
                                                placeholder="0.00"
                                                //tabindex="5"
                                                //required
                                                //disabled
                                                onChange={(event) => { setAmount01(event.target.value); }}

                                            //pattern="[0-9]"
                                            />
                                        </div>
                                        <div className="form-group col-md-1 " id="btnAdd1" style={{ display: "block", margin: "15px 0 0 0" }}>
                                            <button class="btn btn-sm btn-primary" onClick={addNewItem}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row border pt-3" id="hide2" style={{ display: "none" }}>
                                    <div className="col-md-1">

                                    </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="item2">Item 02:</label>
                                            <select
                                                id="item2"
                                                className="form-control "
                                                //tabindex="3"
                                                onChange={e => { setItem02(e.target.value); }}
                                            //required
                                            >
                                                <option  >choose</option>
                                                <option id="item1" value="item1" >Item 1</option>
                                                <option id="item2" value="item2">Item 2</option>
                                                <option id="item3" value="item3">Item 3</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="form-label-emp" for="itemName2">Item Name:</label>
                                            <div className="form-group ">
                                                <input
                                                    //required
                                                    // value={shipToAddress}
                                                    id="itemName2"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="item name"
                                                    onChange={e => { setItemName02(e.target.value); }}
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
                                                //required
                                                onChange={e => { setQty02(e.target.value); }}

                                            />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="amount2">Unit Price :</label>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="amount2"
                                                name="amount2"
                                                placeholder="0.00"
                                                //tabindex="5"
                                                //required
                                                //disabled
                                                onChange={(event) => { setAmount02(event.target.value); }}
                                                onDoubleClick={calculateTwoItemsAmount}

                                            />
                                        </div>
                                        <div className="form-group col" id="btnAdd2" style={{ display: "block", margin: "15px 0 0 0" }}>
                                            <button class="btn btn-sm btn-primary" onClick={addNewItem2}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row border pt-3" id="hide3" style={{ display: "none" }}>
                                    <div className="col-md-1">

                                    </div>
                                        <div class="form-group col-md-2 ">
                                            <label class="form-label-emp" for="item3">Item 03:</label>
                                            <select
                                                id="item3"
                                                className="form-control "
                                                //tabindex="3"
                                                onChange={e => { setItem03(e.target.value); }}
                                            //required
                                            >
                                                <option  >choose</option>
                                                <option id="item1" value="item1" >Item 1</option>
                                                <option id="item2" value="item2">Item 2</option>
                                                <option id="item3" value="item3">Item 3</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="form-label-emp" for="itemName3">Item Name:</label>
                                            <div className="form-group  ">
                                                <input
                                                    //required
                                                    // value={shipToAddress}
                                                    id="itemName3"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="item name"
                                                    onChange={e => { setItemName03(e.target.value); }}
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
                                                //required
                                                onChange={e => { setQty03(e.target.value); }}
                                            />
                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="amount3">Unit Price :</label>
                                            <input
                                                type="text"
                                                class="form-control formInput"
                                                id="amount3"
                                                name="amount3"
                                                placeholder="0.00"
                                                //tabindex="5"
                                                //required
                                                //disabled
                                                onChange={(event) => { setAmount03(event.target.value); }}
                                            // onDoubleClick={calculateThreeItemsAmount}
                                            //pattern="[0-9]"
                                            />
                                        </div>
                                    </div>


                                    <div className="row mt-3 mb-3">

                                        <div className=" col-3">

                                        </div>
                                        <div className=" col-8">
                                            <div className ="row">
                                                <div className="form-group col-md-4">
                                                    <label className="form-label-emp mt-2 ml-4 " for="totalAmount">Total Amount :</label>
                                                </div>

                                                    <div className="form-group col-md-7">
                                                        <input
                                                            required
                                                            onClick={e => { setTotal(e.target.value); }}
                                                            id="totalAmount"
                                                            type="text"
                                                            className="form-control "
                                                            placeholder="totalAmount"
                                                            style={{color :"black"}}
                                                        />

                                            </div>
                                        {/* <div className="form-group col-md-4">
                                            <label className="form-label-emp " for="totalAmount">Total Amount :</label>
                                        </div>

                                        <div className="form-group col-md-8">
                                            <input
                                                required
                                                onClick={e => { setTotal(e.target.value); }}
                                                id="totalAmount"
                                                type="text"
                                                className="form-control "
                                                placeholder="totalAmount"
                                            /> */}

                                        </div>
                                        </div>
                                    </div>
                                    


                                    <div className="row">
                                        <div className="form-group col-md-3">
                                            <label className="form-label" for="CurrAdd">Comment:</label>
                                        </div>
                                        <div className="form-group col-md-9">
                                            <input
                                                required
                                                id="comment"
                                                type="textarea"
                                                className="form-control "
                                                placeholder="comment"
                                                onChange={e => { setComment(e.target.value); }}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4 mt-3">
                                        <div className="col py-3 text-center">
                                            <button type="submit" className="btn btn-ok"  >
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
