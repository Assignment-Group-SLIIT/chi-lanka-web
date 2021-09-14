import React from 'react'
import MaterialTable from 'material-table'

import Header from '../../Header'

function pOrders() {
    return (
        <div className="page-component-body">
            <Header></Header>

            <div className="table-emp">
                <div className="row table-head mt-3">
                    {/* <div className="col"> */}
                    <i class="fa fa-check-square mt-2" aria-hidden="true"></i>
                    {/* </div> */}
                    <div className="col">

                        <h3>Purchase Orders</h3>

                    </div>


                    <a href="" className="float-right">
                        <button className="btn btn-ok white">
                            + Purchase Order
                        </button>
                    </a>
                </div>

                <table class="table table-hover">
                    <MaterialTable
                        title=""
                        columns={[
                            { title: "Date", field: "id", type: "string" },
                            { title: "Purchase Order", field: "Order", type: "string" },
                            { title: "Supplier", field: "supplier", type: "String" },
                            { title: "Status", field: "status", type: "string" },
                            { title: "Amount", field: "status", type: "string" },
                            { title: "Action", field: "action", type: "string" },
                        ]}



                    />
                </table>

            </div>

        </div>
    )
}

export default pOrders
