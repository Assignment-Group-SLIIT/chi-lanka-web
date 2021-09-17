import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';


import { addOrder } from "../../services/purchaseOrderService";
import { addOrderItems } from "../../services/purchaseOrderItemsService";
import { getItemsFromSupplier } from "../../services/supplierService";
import { getItemDetails } from "../../services/itemServices";
import { addRequisition } from "../../services/requisitionService";
import { createPayment } from "../../services/paymentService";



import Header from '../../Header'

function PlaceAnOrder() {

    let history = useHistory();

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


    const [Supplier01List, setSupplier01List] = useState([]);
    const [Supplier02List, seSupplier02List] = useState([]);
    const [Supplier03List, setSupplier03List] = useState([]);
    const [Supplier04List, setSupplier04List] = useState([]);
    const [Supplier05List, setSupplier05List] = useState([]);


    const [OrderIDErr, setOrderIDErr] = useState("");

    useEffect(() => {
        calculateItem1Amount()
        calculateTwoItemsAmount()
        calculateThreeItemsAmount()


        getItemsFromSupplier("KDH").then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setSupplier01List(res.data);
            }
        }).catch((error) => {
            alert(error.message);
        })


        getItemsFromSupplier("PERERA").then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                seSupplier02List(res.data);
            }
        }).catch((error) => {
            alert(error.message);
        })

        getItemsFromSupplier("Manual Handlers").then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setSupplier03List(res.data);
            }
        }).catch((error) => {
            alert(error.message);
        })

        getItemsFromSupplier("Builders Barn").then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setSupplier04List(res.data);
            }
        }).catch((error) => {
            alert(error.message);
        })

        getItemsFromSupplier("Pinnacle").then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setSupplier05List(res.data);
            }
        }).catch((error) => {
            alert(error.message);
        })


    }, [amount1, amount2, amount3, qty01, qty02, qty03]);


    function ItemDetails() {

        //alert(document.getElementById('item1').value)

        var itemCode1 = document.getElementById('item1').value.trim().toUpperCase();
        var itemCode2 = document.getElementById('item2').value.trim().toUpperCase();
        var itemCode3 = document.getElementById('item3').value.trim().toUpperCase();

        getItemDetails(itemCode1).then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setItemName01(res.data.item.itemname);
                setAmount01(res.data.item.price);
            }
        }).catch((error) => {
            alert(error.message);

        })

        getItemDetails(itemCode2).then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setItemName02(res.data.item.itemname);
                setAmount02(res.data.item.price);
            }
        }).catch((error) => {
            alert(error.message);

        })

        getItemDetails(itemCode3).then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setItemName03(res.data.item.itemname);
                setAmount03(res.data.item.price);
            }
        }).catch((error) => {
            alert(error.message);

        })

    }

    function populate() {
        var Stringsplit1 = Supplier01List.split(',')
        var Stringsplit2 = Supplier02List.split(",")
        var Stringsplit3 = Supplier03List.split(",")
        var Stringsplit4 = Supplier04List.split(",")
        var Stringsplit5 = Supplier05List.split(",")


        var s1 = document.getElementById('supplier')
        var s2 = document.getElementById('item1')
        var s3 = document.getElementById('item2')
        var s4 = document.getElementById('item3')

        var arry1 = [Stringsplit1.length];

        for (var a = 0; a < Stringsplit1.length; a++) {
            arry1[a] = Stringsplit1[a].toLowerCase() + "|" + Stringsplit1[a];
        }
        arry1.unshift("choose|Choose");


        var arry2 = [Stringsplit2.length];

        for (var a = 0; a < Stringsplit2.length; a++) {
            arry2[a] = Stringsplit2[a].toLowerCase() + "|" + Stringsplit2[a];
        }
        arry2.unshift("choose|Choose");


        var arry3 = [Stringsplit3.length];

        for (var a = 0; a < Stringsplit3.length; a++) {
            arry3[a] = Stringsplit3[a].toLowerCase() + "|" + Stringsplit3[a];
        }
        arry3.unshift("choose|Choose");


        var arry4 = [Stringsplit4.length];

        for (var a = 0; a < Stringsplit4.length; a++) {
            arry4[a] = Stringsplit4[a].toLowerCase() + "|" + Stringsplit4[a];
        }
        arry4.unshift("choose|Choose");


        var arry5 = [Stringsplit5.length];

        for (var a = 0; a < Stringsplit5.length; a++) {
            arry5[a] = Stringsplit5[a].toLowerCase() + "|" + Stringsplit5[a];
        }
        arry5.unshift("choose|Choose");


        s2.innerjs = " ";
        s3.innerjs = " ";
        s4.innerjs = " ";
        if (s1.value == "KDH") {
            var optionArray = arry1;
        } else if (s1.value == "PERERA") {
            var optionArray = arry2;
        } else if (s1.value == "Manual Handlers") {
            var optionArray = arry3;
        } else if (s1.value == "Builders Barn") {
            var optionArray = arry4;
        } else if (s1.value == "Pinnacle") {
            var optionArray = arry5;
        }

        for (var option in optionArray) {
            var pair = optionArray[option].split('|');
            var newoption = document.createElement("option")
            newoption.value = pair[0];
            newoption.innerHTML = pair[1];
            s2.options.add(newoption);


        }

        for (var option in optionArray) {
            var pair = optionArray[option].split('|');
            var newoption = document.createElement("option")
            newoption.value = pair[0];
            newoption.innerHTML = pair[1];
            s3.options.add(newoption);


        }

        for (var option in optionArray) {
            var pair = optionArray[option].split('|');
            var newoption = document.createElement("option")
            newoption.value = pair[0];
            newoption.innerHTML = pair[1];
            s4.options.add(newoption);


        }

    }

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
        var status = "Pending"

        const OrderIDValid = OrderIDValidation();

        if(OrderIDValid){
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
            qty03,
            amount1,
            amount2,
            amount3
        }

        const newPayment = {
            orderid,
            total,
            comment,
            orderdate
        }

        if (total > 100000) {
            Swal.fire({
                title: "Order Amount Exceeds 100,000 Do you want to submit a purchase Requisition? ",
                showConfirmButton: true,
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: "Cancel",
                confirmButtonColor: "#1fc191",

            }).then((result) => {

                if (result.isConfirmed) {

                    var requisitionid = orderid;
                    status = "Waiting for Approval";
                    const newRequisition = {
                        requisitionid, orderdate, suppliername, title, shipto, status, total, comment, item01, item02, item03, itemName01, itemName02, itemName03,
                        qty01, qty02, qty03, amount1, amount2, amount3
                    }

                    addRequisition(newRequisition).then((response) => {
                        const message = response.ok
                            ? "Purchase Requisition was successful placed!"
                            : response.err;

                        if (response.ok) {
                            Swal.fire({
                                title: "Success! ",
                                text: `${message}`,
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500

                            })

                            history.push("/prList")
                        }
                        else {
                            Swal.fire({
                                title: "Oops! ",
                                text: response.err,
                                icon: 'error',
                                showConfirmButton: false,
                                timer: 1500

                            })
                        }
                    })


                }

            })

        } else {

            addOrder(newOrder).then((response) => {
                const message = response.ok
                    ? "Purchase Order insertion successful!"
                    : response.err;

                if (response.ok) {

                    addOrderItems(newOrderItems).then(() => {
                        const message = response.ok
                            ? "Purchase Order Items insertion successful!"
                            : response.err;

                        if (response.ok) {

                            createPayment(newPayment).then(() => {
                                const message = response.ok
                                    ? "Purchase Order was successfully Placed!"
                                    : response.err;

                                if (response.ok) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: `${message}`,
                                        icon: 'success',
                                        confirmButtonColor: false,
                                        timer: 30000
                                    }
                                    )
                                } else {
                                    Swal.fire({
                                        title: 'Oops!',
                                        text: `${response.err}`,
                                        icon: 'error',
                                        confirmButtonColor: false,
                                        timer: 1500
                                    })

                                }

                            })

                        }
                        else {
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

                } else {
                    Swal.fire({
                        title: 'Oops!',
                        text: `${response.err}`,
                        icon: 'error',
                        confirmButtonColor: false,
                        timer: 1500
                    }
                    )
                }
            }
            )
        }
    }
    }

    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday)
    }



    const [isOrderIDValid, setOrderIDIsValid] = useState(false);
    const [Ordermessage, setOrderMessage] = useState('');

    const OrderIdRegex = /^[O][I][0-9][0-9][0-9]$/;
    

    const validateOrderID = (event) => {
        const orderid = event.target.value;
        if (OrderIdRegex.test(orderid)) {
            setOrderIDIsValid(true);
            setOrderMessage('Order ID Number looks good!');
        }
        else {
            setOrderIDIsValid(false);
            setOrderMessage('Please enter a valid Order ID Number !');
        }
    };


    const OrderIDValidation = () => {//validate function

        const OrderIDErr = {}; //State
        let isValid = true; //setting flag


        if (orderid.trim().length > 5) {

            OrderIDErr.InValidOrderID = " *Invalid Order ID Number"; // error msg
            // alert("**Invalid Vehicle Registration Number");

            Swal.fire({
                icon: 'error',
                title: 'Oops...Invalid Order ID Number',
                text: 'You enterd invalid Order ID Number , Try Again !!',
                confirmButtonColor: '#1fc191',
                // footer: '<a href=""#home">Why do I have this issue?</a>'
            })
            isValid = false;
        } else if (orderid.trim().length < 5) {
            OrderIDErr.InValidOrderID = " *Invalid Order ID Number"; // error msg

            Swal.fire({
                icon: 'error',
                title: 'Oops...Invalid Order ID Number',
                text: 'You enterd invalid Order ID Number , Try Again !!',
                confirmButtonColor: '#1fc191',
                // footer: '<a href=""#home">Why do I have this issue?</a>'
            })
            isValid = false;
        }


        setOrderIDErr(OrderIDErr);//update error objects
        return isValid;


    }


    
    const [istotAmtValid, setTotAmntValid] = useState(false);
    const [Amtmessage, setAmtMessage] = useState('');

    
    

    const validateTotalID = (event) => {
        const total = event.target.value;
        if (total < 100000) {
            setTotAmntValid(true);
            // setAmtMessage('This !');
        }
        else {
            setTotAmntValid(false);
            setAmtMessage('This will be conversion to the purchase requestion !');
        }
    };





    return (
        <div className="page-component-body">
            <Header></Header>
            <div className="container input-main-form-emp mb-5">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Place an Order</h3>
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
                                                onChange={e => { setSuppliername(e.target.value); populate(); }}
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
                                                        onChange={e => { setOrderId(e.target.value);  validateOrderID(e)}}
                                                        id="orderId"
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="orderId"
                                                        // pattern="OI[0-9]{3}"
                                                    />

                                                    <div className={`message ${isOrderIDValid ? 'success' : 'error'}`}>
                                                        {Ordermessage}
                                                    </div>

                                                    {Object.keys(OrderIDErr).map((key) => {
                                                        // return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                                                    })}

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
                                                value={item01}
                                                onChange={e => { setItem01(e.target.value); ItemDetails() }}
                                                required
                                            >


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
                                                    value={itemName01}
                                                // onChange={(e) => {
                                                //     setItemName01(e.target.value);
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
                                                value={amount1}
                                            //tabindex="5"
                                            //required
                                            //disabled
                                            //onChange={(event) => { setAmount01(event.target.value); }}

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
                                                value={item02}
                                                onChange={e => { setItem02(e.target.value); ItemDetails() }}
                                            //required
                                            >

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
                                                    //onChange={e => { setItemName02(e.target.value); }}
                                                    value={itemName02}
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
                                                //onChange={(event) => { setAmount02(event.target.value); }}
                                                value={amount2}
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
                                                value={item03}
                                                onChange={e => { setItem03(e.target.value); ItemDetails() }}
                                            //required
                                            >
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
                                                    //onChange={e => { setItemName03(e.target.value); }}
                                                    value={itemName03}
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
                                                value={amount3}
                                            //tabindex="5"
                                            //required
                                            //disabled
                                            //onChange={(event) => { setAmount03(event.target.value); }}
                                            // onDoubleClick={calculateThreeItemsAmount}
                                            //pattern="[0-9]"
                                            />
                                        </div>
                                    </div>


                                    <div className="row mt-3 mb-3">

                                        <div className=" col-3">

                                        </div>
                                        <div className=" col-8">
                                            <div className="row">
                                                <div className="form-group col-md-4">
                                                    <label className="form-label-emp mt-2 ml-4 " for="totalAmount">Total Amount :</label>
                                                </div>

                                                <div className="form-group col-md-7">
                                                    <input
                                                        required
                                                        onClick={e => { setTotal(e.target.value); validateTotalID(e);}}
                                                        id="totalAmount"
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="totalAmount"
                                                        style={{ color: "black" }}
                                                    />
                                                    <div className={`message ${istotAmtValid ? 'success' : 'error'}`}>
                                                        {Amtmessage}
                                                    </div>

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
                            </div >
                        </div >
                    </div >
                </div >
            </div >

        </div >
    )
}

export default PlaceAnOrder
