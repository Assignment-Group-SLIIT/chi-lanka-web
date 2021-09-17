import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

import Header from '../../Header'
import axios from 'axios'
import { Modal } from 'react-bootstrap';

import ItemUpdate from "../items/itemUpdate"



import { getItemsList } from "../../services/itemServices";

function ItemList() {

    const [itemsList, setItemsList] = useState([]);
    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentItemUpdate, setCurrentItemUpdate] = useState();



    useEffect(() => {

        getItemsList().then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setItemsList(res.data.reverse());
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

                        <h3>Available Items</h3>

                    </div>


                    <a href="/placeAnOrder" className="float-right">
                        <button className="btn btn-ok white">
                            + Add New Items
                        </button>
                    </a>
                </div>

                <table class="table table-hover">
                    <MaterialTable
                        title=""
                        columns={[
                            { title: "Item ID", field: "itemid", type: "string" },
                            { title: "Item Name", field: "itemname", type: "string" },
                            { title: "Price", field: "price", type: Number },
                            { title: "Description", field: "Description", type: "string" },
                            { title: "Availability", field: "availability", type: "string" },
                            { title: "Quantity", field: "Quantity", type: "string" },
                            { title: "ReceivedDate", field: "ReceivedDate", type: "string" },

                        ]}

                        data={itemsList}
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
                                    setCurrentItemUpdate(rowData);
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
                <ItemUpdate
                    data={currentItemUpdate}
                    onHide={() => setModalStateUpdate(false)}

                />


            </Modal>




        </div>
    )
}

export default ItemList