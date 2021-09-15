import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import moment from 'moment';
import { getAllRequisition } from "../../services/requisitionService"

import PrUpdateModal from "../modals/prUpdate"

import Header from "../../Header";

export default function PrList() {


    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentProductUpdate, setCurrentProductUpdate] = useState();
    const [prList, setPrList] = useState([]);

    useEffect(() => {
        getAllRequisition().then((res) => {
            console.log("data for tableeeee", res.data.reverse())
            setPrList(res.data.reverse())
        })
    }, [])



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
                            { title: "Requisition", field: "requisition", type: "string" },
                            { title: "Supplier", field: "supplier", type: "string" },
                            { title: "Requisition Date", field: "requisitionDate", type: "string" },
                            { title: "Ship to Address", field: "shipToAddress", type: "numeric" },
                            { title: "Amount", field: "amount", type: "string" },
                            { title: "Comment", field: "comment", type: "string" },
                            { title: "Status", field: "status", type: "numeric" },
                        ]}
                        // data={null}
                        data={[
                            { requisitionDate: '2012-01-12', requisition: 'Baran', supplier: 'abs suppliers', amount: 63, status: 'Approved', shipToAddress: "passara, bibilegama", comment: "no comment" },
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
