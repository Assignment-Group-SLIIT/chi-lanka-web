import React from 'react'
import Header from '../../Header'
import MaterialTable from 'material-table'

function bills() { 


    



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
                            { title: "Date", field: "date", type: "string" },
                            { title: "Purchase Order", field: "Order", type: "string" },
                            { title: "Supplier", field: "supplier", type: "String" },
                            { title: "Request Date", field: "Rdate", type: "string" },
                            { title: "Status", field: "status", type: "string" },
                            { title: "Amount", field: "amount", type: "numeric" },

                        ]}

                        data={[
                            { date: '2021-09-25', Order: 'Cement', supplier: "karu", Rdate: '2021-09-30', status: "pending", amount: 1000 },
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

        </div>
    )
}

export default bills
