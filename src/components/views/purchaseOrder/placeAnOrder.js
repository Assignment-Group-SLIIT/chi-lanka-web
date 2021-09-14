import { React, useState } from "react";

import Swal from 'sweetalert2';
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

import Header from '../../Header'

function PlaceAnOrder() {
    return (
        <div className="page-component-body">
            <Header></Header>
            <div className="container input-main-form-emp">
                <div className="tab-content-emp" id="myTabContent">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                <h3 className="text-left mt-4 mb-4">Place an Order</h3>
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
                                            <input
                                                required
                                                id="supplier"
                                                type="text"
                                                className="form-control "
                                                placeholder="supplier name"
                                                // value={supplier}
                                                disabled
                                            />

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
                                            // value={amount}
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
