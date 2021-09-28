import React, { useState, useEffect } from "react";

import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";

import ReceiptModal from '../modals/BIllmodal'
import Swal from 'sweetalert2';

import { getAllReceipts } from "../../services/billsService";

import Header from "../../Header";

function Bills() {

    const [receipts, setReceipt] = useState([]);
    const [modalStateUpdate, setModalStateUpdate] = useState(false);
    const [currentOrderUpdate, setCurrentOrderUpdate] = useState();

    useEffect(() => {
        getAllReceipts().then((res) => {
            console.log("data for table", res);
            if (res.ok) {
                setReceipt(res.data.reverse());
            }
        }).catch((error) => {
            //alert(error.message);
            Swal.fire({
                title: "Oops! ",
                text: error.message,
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            })
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

                        <h3>Bills</h3>

                    </div>

                </div>

                <table class="table table-hover">
                    <MaterialTable
                        title=""
                        columns={[
                            { title: "Receipt Id", field: "receiptid", type: "string" },
                            { title: "PO Number", field: "orderno", type: "string" },
                            { title: "Issued Date", field: "receiptdate", type: "string" },
                            { title: "Tax", field: "tax", type: Number },
                            { title: "Amount", field: "totammount", type: Number },

                        ]}

                        data={receipts}
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
                <ReceiptModal
                    data={currentOrderUpdate}
                    onHide={() => setModalStateUpdate(false)}

                />

            </Modal>

        </div>
    )
}

export default Bills
