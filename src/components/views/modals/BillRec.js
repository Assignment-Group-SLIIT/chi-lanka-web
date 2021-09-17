import React, { useState, useEffect } from 'react'


import Pdf from "react-to-pdf";
import { Modal } from 'react-bootstrap';
import { DialerSip } from '@material-ui/icons';
import { getSupplier } from '../../services/supplierService';

const ref = React.createRef();


function BillRec(payload) {

    const [dataForModal, setDataForModal] = useState([])
    const [supplierData, setSupplierData] = useState([])

    const [taxVal,settaxVal] = useState("");
    const [totVal,settotVal] = useState("");

    useEffect(() => {
        setDataForModal(payload.data)

        getSupplier(payload.data.suppliername).then((res) => {
            setSupplierData(res.data);
            

        })

    }, [payload.data])


    
    useEffect(()=>{

        
        calcTax(dataForModal.total);
        
    },[dataForModal.total])

    function calcTax(Amount){

        const taxval = Amount * (10/100)
        const totVal = Amount + taxval

        settaxVal(taxval)
        settotVal(totVal)

        

}



    return (

        <div >
            <Modal.Header closeButton>
                Order Reciept

            </Modal.Header>
            <Modal.Body>
                <div >

                    {/* <Header></Header> */}



                    <div>
                        <Pdf targetRef={ref} filename="VehicleReport.pdf">
                            {({ toPdf }) => <button class="btn btn-download white" onClick={toPdf}><i class="fa fa-download" aria-hidden="true"></i></button>}
                        </Pdf>

                        <div ref={ref} className=" pl-4">
                            <div className="report" id="test">
                                <img src="https://i.ibb.co/Vxr5DHc/chi-lanka-report.png" />



                                <div className="row mt-3">
                                    <div className="col-8">

                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    // value={orderData}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="No.475, Uniojn Place,"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>

                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Colombo 02,"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>
                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="0771111111"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>
                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="abc@gmail.com"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>


                                    </div>
                                    <div className="col-4">

                                        <div className="row">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    value={dataForModal.orderid}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Order No"
                                                    disabled
                                                />
                                            </div>


                                        </div>
                                        <div className="row">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    value={new Date().toISOString().slice(0, 10)}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Date"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>


                                    </div>
                                </div>



                                <div className="row mt-3">
                                    <div className="col-8">

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                            <h5 className="text-left mb-1">Supplier :</h5>
                                        </div>

                                         <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    value={supplierData.suppliername}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="No.475, Uniojn Place,"
                                                    disabled
                                                />
                                            </div>


                                        </div>

                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    value={supplierData.address}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="No.475, Uniojn Place,"
                                                    disabled
                                                />
                                            </div>


                                        </div>
                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    value={supplierData.contactnumber}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="0771111111"
                                                    disabled
                                                />
                                            </div>


                                        </div>


                                    </div>


                                    <div className="col-4">
                                        <div className="row ">

                                            <div className="col">
                                                <h5 className="mb-1">Sent To :</h5>
                                            </div>
                                        </div>

                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    value={dataForModal.shipto}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="address"
                                                    disabled
                                                />
                                            </div>


                                        </div>

                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="address line 2"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>
                                        <div className="row ml-2">


                                            <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="mobile"
                                                    // value={orderID}
                                                    disabled
                                                />
                                            </div>


                                        </div>



                                    </div>


                                </div>





                                <table class="table table-hover border mt-3">
                                    <thead class="thead-dark">
                                        <tr>

                                            <th>Item Code</th>
                                            <th>Item Name</th>
                                            <th>Quantity</th>
                                            <th>Unit Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td>{dataForModal.item01}</td>
                                            <td >{dataForModal.itemName01}</td>
                                            <td >{dataForModal.qty01}</td>
                                            <td class="text-right">{dataForModal.unitPrice01}</td>
                                        </tr>
                                        <tr>
                                            <td >{dataForModal.item02}</td>
                                            <td >{dataForModal.itemName02}</td>
                                            <td >{dataForModal.qty02}</td>
                                            <td class="text-right">{dataForModal.unitPrice02}</td>
                                        </tr>
                                        <tr>
                                            <td >{dataForModal.item03}</td>
                                            <td >{dataForModal.itemName03}</td>
                                            <td >{dataForModal.qty03}</td>
                                            <td class="text-right">{dataForModal.unitPrice03}</td>

                                        </tr>
                                    </tbody>
                                </table>

                                <div className="row mt-3">
                                    <div className="col-6">

                                    </div>

                                    <div className="col-6">

                                        <div className="row ml-2">

                                            <div className="form-group col-md-6 ">
                                                <label className="form-label-rec mt-2" for="fName">Sub Total :</label>
                                            </div>
                                            <div className="form-group col-md-6 ">
                                                <input
                                                    required
                                                    value={dataForModal.total}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control text-right"
                                                    placeholder="10800.00"
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-6">

                                    </div>

                                    <div className="col-6">

                                        <div className="row ml-2">

                                            <div className="form-group col-md-6 ">
                                                <label className="form-label-rec mt-2" for="fName">Tax 10% :</label>
                                            </div>
                                            <div className="form-group col-md-6 ">
                                                <input
                                                    required
                                                    value={taxVal}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control text-right"
                                                    placeholder="tax"
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-6">

                                    </div>

                                    <div className="col-6">

                                        <div className="row ml-2">

                                            <div className="form-group col-md-6 ">
                                                <label className="form-label-rec mt-2" for="fName">Total Amount :</label>
                                            </div>
                                            <div className="form-group col-md-6 " id="test">
                                                <input
                                                    required
                                                    value={totVal}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control text-right"
                                                    placeholder="amount"
                                                    disabled
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <h6 className="pb-5 mt-5">* Thank you For your order  <span id="dateDisplay"></span></h6>
                        </div>
                    </div>


                </div>




            </Modal.Body >

        </div>
    )
}

export default BillRec
