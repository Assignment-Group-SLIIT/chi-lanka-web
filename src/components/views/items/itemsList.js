import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Swal from 'sweetalert2';
import Header from '../../Header'
import axios from 'axios'
import { Modal } from 'react-bootstrap';

import ItemUpdate from "../items/itemUpdate"
import { deleteItemPermenantly } from "../../services/itemServices";


import { getItemsList } from "../../services/itemServices";
import moment from 'moment';
import { deleteSupplierItemPermenantly } from '../../services/supplierService';


function ItemList() {

    const [itemsList, setItemsList] = useState([]);
    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentItemUpdate, setCurrentItemUpdate] = useState();




    useEffect(() => {

        getItemsList().then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setItemsList(res.data);
            }
        }).catch((error) => {
            alert(error.message);
        })

    }, []);


    function deleteItem(itemID) {
        Swal.fire({
            title: 'Do you want delete the Item details permanantly?',
            showDenyButton: true,
            showConfirmationButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItemPermenantly(itemID.toUpperCase()).then((response) => {
                    if (response.ok) {

                        deleteSupplierItemPermenantly(itemID.toUpperCase()).then((response) => {
                            if (response.ok) {
                                Swal.fire({
                                    text: 'Success!',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(() => {
                                    window.location.reload()
                                })

                            } else {
                                Swal.fire({
                                    text: 'Oops!',
                                    icon: 'error',
                                    showConfirmButton: false,
                                    timer: 1500
                                }).then(() => {
                                    window.location.reload()
                                })

                            }

                        })


                    } else {
                        Swal.fire({
                            text: 'Oops!',
                            icon: 'error',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            window.location.reload()
                        })

                    }
                })

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }




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


                    <a href="/addItems" className="float-right">
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
                            {
                                icon: () => (
                                    <button class="btn btn-sm btn-danger">Remove</button>
                                ),
                                onClick: (event, rowData) => {
                                    deleteItem(rowData.itemid);
                                },
                            }
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