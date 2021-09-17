import { React, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import { Modal } from "react-bootstrap";
import { getAllDrafts, updateDraft } from "../../services/draftsService"

function DraftViewModal(emp) {

    console.log("modal draft", emp.data);


    const [orderid, setOrderId] = useState("");
    const [Draftid, setDraftId] = useState("");

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

    const [data, setData] = useState([])

    // const [Comment, setComment] = useState("");


    // const [Supplier01List, setSupplier01List] = useState([]);
    // const [Supplier02List, seSupplier02List] = useState([]);
    // const [Supplier03List, setSupplier03List] = useState([]);
    // const [Supplier04List, setSupplier04List] = useState([]);
    // const [Supplier05List, setSupplier05List] = useState([]);



    useEffect(() => {

        try {
            setData(emp.data)
            setSuppliername(emp.data.suppliername);
            //setOrderdate(emp.data.requisiondate);
            setOrderId(emp.data.requisitionid);
            setTitle(emp.data.title);
            setShipTo(emp.data.shipto);
            setTotal(emp.data.total);
            setComment(emp.data.comment);

        } catch (err) {
            console.log(err);
        }


    }, [emp.data])



    useEffect(() => {
        setDrfatListData();
    }, [])

    const setDrfatListData = async () => {
        try {
            await getAllDrafts().then((response) => {
                console.log("data for table items", response.data);

                setDraftId(response.data.draftid.toUpperCase())
                setOrderdate(response.data.modifydat)
                // setItemID(response.data.draftdate)
                // setItemList(response.data)


            })

        } catch (error) { }

    }

    const sendData = (e) => { }

    const saveAsDraft = () => {
        const newDraft = {
            draftid: orderid,
            draftdate: orderdate,
            modifydate: new Date().toISOString().slice(0, 10),
            suppliername: suppliername,
            title: title,
            shipto: shipto,
            status: "Waiting for Approval",
            total: total,
            comment: comment,
            item01: item01,
            item02: item02,
            item03: item03,
            itemName01: itemName01,
            itemName02: itemName02,
            itemName03: itemName03,
            qty01: qty01,
            qty02: qty02,
            qty03: qty03,
            amount01: amount1,
            amount02: amount2,
            amount03: amount3
        }

        updateDraft(orderid, newDraft).then(() => {
            window.alert("successfully updated draft")
        })


    }


    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title> Update a Draft : {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">

                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <form id="addEmp-form" action="post" className="form" onSubmit={sendData}>

                                    <div className="row mt-5">

                                        <div className="form-group col-md-3">
                                            <label className="form-label-emp " for="gender">Supplier: </label>
                                        </div>

                                        <div className="form-group col-md-9">
                                            <select
                                                id="supplier"
                                                className="form-control "
                                                value={suppliername}
                                                //tabindex="3"
                                                onChange={e => {
                                                    setSuppliername(e.target.value);
                                                    //  populate()
                                                    ;
                                                }}
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
                                                    <label className="form-label-emp " for="orderId">Order Id: </label>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <input
                                                        value={data.draftid}
                                                        required
                                                        // onChange={e => { setOrderId(e.target.value); validateOrderID(e) }}
                                                        id="orderId"
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="orderId"
                                                    // pattern="OI[0-9]{3}"
                                                    />

                                                    {/* <div className={`message ${isOrderIDValid ? 'success' : 'error'}`}>
                                                        {Ordermessage}
                                                    </div>

                                                    {Object.keys(OrderIDErr).map((key) => {
                                                        // return<div style={{color :"red"}}>{RegNoErr[key]}</div>
                                                    })} */}

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
                                                        value={data.draftdate}
                                                    // isValidDate={disablePastDt}
                                                    />
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="row mb-3">
                                        <div className="form-group col-md-3 ">
                                            <label className="form-label" for="fName">PO Title: </label>
                                        </div>
                                        <div className="form-group col-md-9 ">
                                            <input
                                                required
                                                onChange={e => { setTitle(e.target.value); }}
                                                id="poTitle"
                                                type="text"
                                                className="form-control "
                                                placeholder="poTitle"
                                                value={data.title}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="form-group col-md-3 ">
                                            <label className="form-label" for="shipTo">Ship to: </label>
                                        </div>
                                        <div className="form-group col-md-9 ">
                                            <input
                                                value={data.shipto}
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
                                            <label class="form-label-emp" for="item1">Item 01: </label>
                                            <select
                                                id="item1"
                                                className="form-control "
                                                value={item01}
                                                // onChange={e => { setItem01(e.target.value); ItemDetails() }}
                                                required
                                            >


                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="form-label-emp ml-2" for="itemName1">Item Name: </label>
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
                                            <label class="form-label-emp" for="quantity1">Quantity: </label>
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
                                            <label class="form-label-emp" for="amount1">Unit Price: </label>
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
                                            <button class="btn btn-sm btn-primary" >

                                                {/* onClick={addNewItem} */}
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row border pt-3" id="hide2" style={{ display: "none" }}>
                                        <div className="col-md-1">

                                        </div>
                                        <div class="form-group col-md-2">
                                            <label class="form-label-emp" for="item2">Item 02: </label>
                                            <select
                                                id="item2"
                                                className="form-control "
                                                value={item02}
                                            // onChange={e => { setItem02(e.target.value); ItemDetails() }}
                                            //required
                                            >

                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="form-label-emp" for="itemName2">Item Name: </label>
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
                                            <label class="form-label-emp" for="quantity2">Quantity: </label>
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
                                            <label class="form-label-emp" for="amount2">Unit Price: </label>
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
                                            // onDoubleClick={calculateTwoItemsAmount}

                                            />
                                        </div>
                                        <div className="form-group col" id="btnAdd2" style={{ display: "block", margin: "15px 0 0 0" }}>
                                            <button class="btn btn-sm btn-primary"
                                            // onClick={addNewItem2}
                                            >
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row border pt-3" id="hide3" style={{ display: "none" }}>
                                        <div className="col-md-1">

                                        </div>
                                        <div class="form-group col-md-2 ">
                                            <label class="form-label-emp" for="item3">Item 03: </label>
                                            <select
                                                id="item3"
                                                className="form-control "
                                                value={item03}
                                            // onChange={e => {
                                            //      setItem03(e.target.value); ItemDetails() }}
                                            //required
                                            >
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label class="form-label-emp" for="itemName3">Item Name: </label>
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
                                            <label class="form-label-emp" for="quantity3">Quantity: </label>
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
                                            <label class="form-label-emp" for="amount3">Unit Price: </label>
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
                                                    <label className="form-label-emp mt-2 ml-4 " for="totalAmount">Total Amount: </label>
                                                </div>

                                                <div className="form-group col-md-7">
                                                    <input
                                                        required
                                                        // onClick={e => { 
                                                        //     setTotal(e.target.value); validateTotalID(e); }}
                                                        id="totalAmount"
                                                        type="text"
                                                        className="form-control "
                                                        placeholder="totalAmount"
                                                        value={data.total}
                                                        style={{ color: "black" }}
                                                    />
                                                    {/* <div className={`message ${istotAmtValid ? 'success' : 'error'}`}>
                                                        {Amtmessage}
                                                    </div> */}

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
                                            <label className="form-label" for="CurrAdd">Comment: </label>
                                        </div>
                                        <div className="form-group col-md-9">
                                            <input
                                                required
                                                id="comment"
                                                type="textarea"
                                                className="form-control "
                                                placeholder="comment"
                                                value={data.comment}
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

                                <div className="col py-3 text-center">
                                    <button className="btn btn-reset"
                                        onClick={() => { saveAsDraft() }

                                        }
                                    >
                                        Save as Draft
                                    </button>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >





            </Modal.Body >

        </div >
    )
}

export default DraftViewModal