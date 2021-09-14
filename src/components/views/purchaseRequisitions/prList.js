import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import moment from 'moment';

import Header from "../../Header";

export default function PrList() {

    return (
        <div className="page-component-body " >

            <Header></Header>

            <div className="table-emp">

                <div class="row table-head  mt-3 mb-5">
                    <i class="fa fa-check-square fa-o"></i>
                    <div class="col">

                        <h3>Purchase Requisitions</h3>
                    </div>
                    <a href="/addEmployee" className="float-right">
                        <button class="btn btn-ok white">
                            Add Requisition
                        </button>
                    </a>
                </div>
                <table class="table table-hover">
                    <MaterialTable
                        title=""
                        columns={[
                            { title: "Date", field: "date", type: "string" },
                            { title: "Requisition", field: "requisition", type: "string" },
                            { title: "Supplier", field: "supplier", type: "string" },
                            { title: "Request Date", field: "reqPrice", type: "numeric" },
                            { title: "Status", field: "status", type: "string" },
                            { title: "Amount", field: "amount", type: "numeric" },
                        ]}
                        // data={null}
                        data={[
                            { date: '2012-01-12', requisition: 'Baran', supplier: '2012 - 01 - 12', reqPrice: 63, status: 'updated', amount: 100 },
                        ]}
                        options={{
                            sorting: true,
                            actionsColumnIndex: -1,
                            exportButton: true,
                        }}
                        actions={[
                            {
                                icon: () => (
                                    <button class="btn btn-sm btn-warning">view</button>
                                ),
                                // onClick: (event, rowData) => {
                                //     setCurrentProductUpdate(rowData);
                                //     setModalStateUpdate(true);
                                // },
                            },
                        ]}
                    />
                </table>
            </div>


            {/* modal for display while loading or on error */}
            {/* <Modal show={modalLoading} size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <div class="d-flex justify-content-center mt-2">
                        <div class="spinner-grow text-danger" role="status">
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                        </div><div class="spinner-grow text-danger" role="status">
                        </div>

                        <span class="sr-only">something went wrong...</span>
                    </div>
                    <div class="d-flex justify-content-center mt-4 h5"> something went wrong</div>

                </Modal.Body>
                <Modal.Footer>

                    <div className="col py-3 text-center">
                        <button type="submit" className="btn btn-delete" onClick={() => { window.location.reload() }}>
                            Try again
                        </button>
                    </div>
                </Modal.Footer>
            </Modal> */}

            {/* modal for update the data of employee
            <Modal
                show={modalUpdate}
                onHide={() => setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <UpdateEmployeeModal
                    data={modalDataUpdate}
                    onHide={() => setModalUpdate(false)}
                />
            </Modal> */}
        </div >
    );
}
