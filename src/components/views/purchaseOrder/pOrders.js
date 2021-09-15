import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

import Header from '../../Header'
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import POrderUpdateModal from '../modals/pOrderUpdate';


import { getAllPurchaseOrders } from "../../services/purchaseOrderService";

function POrders() {

    const [OrderList, setOrderList] = useState([]);
    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentOrderUpdate, setCurrentOrderUpdate] = useState();



    useEffect(() => {

        getAllPurchaseOrders().then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setOrderList(res.data.reverse());
            }
        }).catch((error) => {
            alert(error.message);
        })

    }, []);





    return (
        <div className="page-component-body">
            <Header></Header>

            <div className="table-emp">
                <div className="row table-head mt-3 mb-5">
                    {/* <div className="col"> */}
                    <i class="fa fa-check-square fa-o"></i>
                    {/* </div> */}
                    <div className="col">

                        <h3>Purchase Orders</h3>

                    </div>


                    <a href="/placeAnOrder" className="float-right">
                        <button className="btn btn-ok white">
                            + Purchase Order
                        </button>
                    </a>
                </div>

                <table class="table table-hover">
                    <MaterialTable
                        title=""
                        columns={[
                            { title: "PO Number", field: "orderid", type: "string" },
                            { title: "Purchase Order", field: "title", type: "string" },
                            { title: "Date", field: "orderdate", type: "string" },
                            { title: "Supplier", field: "suppliername", type: "String" },
                            { title: "Ship To Address", field: "shipto", type: "String" },
                            { title: "Status", field: "status", type: "string" },
                            { title: "Amount", field: "total", type: Number },

                        ]}

                        data={OrderList}
                        options={{
                            sorting: true,
                            actionsColumnIndex: -1,
                            exportButton: true,
                        }}
                        actions={[
                            {
                                icon: () => (
                                    <button class="btn btn-sm btn-warning">View</button>
                                ),
                                onClick: (event, rowData) => {
                                    setCurrentOrderUpdate(rowData);
                                    setModalStateUpdate(true);
                                }
                            },
                        ]}



                    />
                </table>

            </div>

            <Modal show={modalStateUpdate}
                onHide={() => setModalStateUpdate(false)}
                size="lg"
                aria-labelledby="containeed-modal-title-vcenter"
                centered


            >
                <POrderUpdateModal
                    data={currentOrderUpdate}
                    onHide={() => setModalStateUpdate(false)}

                />

            </Modal>



        </div>
    )
}

export default POrders
