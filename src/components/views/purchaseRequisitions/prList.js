import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import moment from 'moment';

import PrUpdateModal from "../modals/prUpdate"

import Header from "../../Header";

export default function PrList() {


    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentProductUpdate, setCurrentProductUpdate] = useState();

    return (
        <div className="page-component-body " >

            <Header></Header>

            <div className="table-emp">
                <div class="row table-head  mt-3">
                    <div class="col">
                        <h3 className="float-left">Purchase Requisitions</h3>
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
                            { date: '2012-01-12', requisition: 'Baran', supplier: 'abs suppliers', reqPrice: 63, status: 'updated', amount: 100 },
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
                                onClick: (event, rowData) => {
                                    setCurrentProductUpdate(rowData);
                                    setModalStateUpdate(true);
                                },
                            },
                        ]}
                    />
                </table>
            </div>
            {/* modal for view purchase requisition */}
            <Modal show={modalStateUpdate}
                onHide={() => setModalStateUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <PrUpdateModal
                    data={currentProductUpdate}
                    onHide={() => setModalStateUpdate(false)}
                />
            </Modal>
        </div >
    );
}
