import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

import Header from '../../Header'
import axios from 'axios'
import { Modal } from 'react-bootstrap';
import POrderUpdateModal from '../modals/pOrderUpdate';






function POrders() {



    const [OrderList, setOrderList] = useState([]);

    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentOrderUpdate, setCurrentOrderUpdate] = useState();


    // const HOST = "http://localhost:8060/order"

    // useEffect(() => {
    //     // view all Orders

    //     axios.get(HOST + "/pOrders")
    //         .then((res) => {
    //             setOrderList(res.data);
    //             console.log('Data has been received');
    //         }).catch(() => {
    //             alert('Error while fetching data')
    //         })

    // }, []);





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
                            { title: "Date", field: "date", type: "string" },
                            { title: "Purchase Order", field: "Order", type: "string" },
                            { title: "Supplier", field: "supplier", type: "String" },
                            { title: "Modified Date", field: "Mdate", type: "string" },
                            { title: "Status", field: "status", type: "string" },
                            { title: "Amount", field: "amount", type: "numeric" },

                        ]}

                        data={[
                            { date: '2021-09-25', Order: 'Cement', supplier: "karu", Mdate: '2021-09-30', status: "pending", amount: 1000 },
                        ]}
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
