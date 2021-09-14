import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datetime';

function POrderUpdate(emp) {

    const [order, setOrder] = useState("");
    const [orderID, setOrderID] = useState("");
    const [Date, setDate] = useState("");
    const [supplier, setSupplier] = useState("");
    const [POTitle, setPOTitle] = useState("");
    const [status, setStatus] = useState("");
    const [comment, setComment] = useState("");
    const [total, setTotal] = useState("");
    const [ShipAddress, setAddress] = useState("");

    const [orderList, setOrderList] = useState("")


    useEffect(() => {

    }, [])

    const sendDate = (e) => {
        e.preventDefault();
        console.log("data in updateee")
    }





    return (
        <div>
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body className="px-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="addEmp-form" action="post" className="form"
                        // onSubmit={sendData}
                        >
                            <div className="row justify-content-end">
                                <div className="form-group col-9 ">
                                    <h3>Purchase Order</h3>
                                </div>
                                <div className="form-group col-3">
                                    <input
                                        required
                                        // value={requisition}
                                        id="requisition"
                                        type="text"
                                        className="form-control "
                                        placeholder="Order No"
                                        value={orderID}
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="form-group col-6 col-sm-3 float-right">

                                </div>
                                <div className="form-group col-3">
                                    <input
                                        required
                                        value={Date}
                                        id="requisition"
                                        type="text"
                                        className="form-control "
                                        placeholder="Date"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4 ">
                                    <label className="form-label" for="fName">Supplier:</label>
                                </div>
                                <div className="form-group col-md-8 ">
                                    <input
                                        required
                                        value={supplier}
                                        id="requisition"
                                        type="text"
                                        className="form-control "
                                        placeholder="Supplier Name"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp " for="gender">PO Title:</label>
                                </div>

                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="supplier"
                                        type="text"
                                        className="form-control "
                                        placeholder="Purchase Order Title"
                                        value={POTitle}
                                        disabled
                                    />

                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-4">
                                    <label className="form-label-emp" for="dob">Ship To :</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input
                                        required
                                        id="supplier"
                                        type="text"
                                        className="form-control "
                                        placeholder="Shipping Address"
                                        value={ShipAddress}
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="row">

                                <div className="form-group col">



                                    <table class="table table-hover border border-secondary mt-3 ">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th class="text-center">Item Code</th>
                                                <th class="text-center">Item Name</th>
                                                <th class="text-center">Quantity</th>
                                                <th class="text-center">Amount</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {/* {orderList.map((orders) => {

                                                return ( */}
                                            <tr>


                                                <td class="text-center">001</td>
                                                <td class="text-center">Cement</td>
                                                <td class="text-center">4</td>
                                                <td class="text-right">1000</td>




                                            </tr>
                                            {/* );


                                            })} */}


                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="form-group col-md-8">

                                </div>
                                <div className="col-md-4">
                                    <div className="row">

                                        <div className="col text-right">
                                            <label className="form-label-emp mt-2" for="dob">Total  :</label>

                                        </div>

                                        <div className="col">
                                            <input
                                                required
                                                value={total}
                                                id="requisition"
                                                type="text"
                                                className="form-control "
                                                placeholder="Order No"
                                                disabled
                                            />
                                        </div>


                                    </div>

                                </div>
                            </div>



                            <div className="row mb-3">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="form-label-emp" for="dob">Status :</label>
                                    </div>

                                </div>
                                <div className="col">
                                    <button type="button" class="btn btn-success btn-sm btn-block" value="Approved"

                                    // onClick={setStatus(value)}
                                    >Approved</button>

                                </div>
                                <div className="col">
                                    <button type="button" class="btn btn-danger btn-sm btn-block" value="Declined"
                                    // onClick={setStatus(value)}
                                    >Declined</button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn btn-warning btn-sm btn-block" value="Pending"
                                    // onClick={setStatus(value)}
                                    >Pending</button>
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

                            <div className="row mb-4">
                                <div className="col py-3 text-center">
                                    <button type="submit" className="btn btn-ok">
                                        Submit
                                    </button>
                                </div>
                                <div className="col py-3 text-center">
                                    <button type="reset" className="btn btn-reset" onClick={emp.onHide}>
                                        Get Reciept
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

export default POrderUpdate
