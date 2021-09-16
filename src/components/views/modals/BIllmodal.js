import React from 'react'

import Pdf from "react-to-pdf";
import { Modal } from 'react-bootstrap';
import { DialerSip } from '@material-ui/icons';

const ref = React.createRef();


function BIllmodal() {
    return (
        <div >
            <Modal.Header closeButton>

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
                            <img src="https://i.ibb.co/Vxr5DHc/chi-lanka-report.png"/>



                            <div className ="row mt-3">
                                <div className="col-8">

                                    <div className="row ml-2">

                                        
                                        <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
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
                                                    // value={requisition}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="Order No"
                                                    // value={orderID}
                                                    disabled
                                                />
                                        </div>
                                        

                                    </div>
                                    <div className="row">

                                        
                                        <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
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



                            <div className ="row mt-3">
                                <div className="col-8">

                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <h5 className="text-left mb-1">Supplier :</h5>
                                            </div>

                                    <div className="row ml-2">

                                        
                                        <div className="form-group">
                                                <input
                                                    required
                                                    // value={requisition}
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
                                <div className="row ">

                                            <div className="col">
                                                    <h5 className="mb-1">Sent To :</h5>
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
                                 

                                   
                                </div>


                            </div>

                            



                            <table class="table table-hover border mt-3">
                                <thead class="thead-dark">
                                    <tr>
                                        
                                        <th>Vehicle RegNo</th>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Years of rental</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {vehicles.map((vehicle) => {
                                        console.log("table", vehicle.Date);
                                        return ( */}
                                            

                                            <tr >

                                                <td>sss</td>
                                                <td >25</td>
                                                <td >525</td>
                                                <td >5252</td>
                                                <td >252</td>
                                                <td >255</td>

                                                {/* <td>{vehicle.VehicleRegNo}</td>
                                                <td > {vehicle.Date}</td>
                                                <td >{vehicle.VehicleType}</td>
                                                <td >{vehicle.VehicleBrand}</td>
                                                <td >{vehicle.VehicleModel}</td>
                                                <td >{vehicle.YearsRent}</td> */}
                                                
                                            </tr>
                                        {/* );
                                    })} */}
                                </tbody>
                            </table>

                            <div className ="row mt-3">
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
                                                        // value={requisition}
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

                            
                            <div className ="row">
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
                                                        // value={requisition}
                                                        id="requisition"
                                                        type="text"
                                                        className="form-control text-right"
                                                        placeholder="Rs. 180.00"
                                                        disabled
                                                    />
                                            </div>
                                    </div>

                                </div>
                            </div>

                            
                            <div className ="row">
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
                                                        // value={requisition}
                                                        id="requisition"
                                                        type="text"
                                                        className="form-control text-right" 
                                                        placeholder="Rs. 11880.00"
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

export default BIllmodal
