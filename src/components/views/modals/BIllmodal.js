import React, { useState, useEffect } from 'react'

import Pdf from "react-to-pdf";
import { Modal } from 'react-bootstrap';
import { DialerSip } from '@material-ui/icons';

import { getSupplierByID} from "../../services/supplierService"
import { getOrderItemsforOrder} from "../../services/purchaseOrderItemsService"


const ref = React.createRef();


function BIllmodal(emp) {

     const [PONo, setPONo] = useState("");
     const [receiptdate, setreceiptdate] = useState("");
    
     const[supAdd, setSupAdd]=useState("");
     const[supName, setSupName]=useState("");
     const[contactNO, setcontactNO]=useState("");
     const [shipTo,setshipTo] = useState("");
     const [Amount,setAmount] = useState("");

     const [taxVal,settaxVal] = useState("");
     const [totVal,settotVal] = useState("");

     const [itemsList,setItemList] = useState([]);




     const[itemID, setItemID]=useState("");

     useEffect(() => {
        try {

            setPONo(emp.data.orderno);
            setreceiptdate(emp.data.receiptdate)
            setshipTo(emp.data.shipto)
            setAmount(emp.data.totammount)          

        } catch (error) {
            console.log(error)
        }

        // setItemsListData();
    }, [emp.data])



    useEffect(()=>{

        setOrderListData();
        setSupplierData();
        calcTax(Amount);
        
    },[PONo,itemID,Amount])

        //to retrieve data for supllier list
        const setOrderListData = async () => {
            try {
                await getOrderItemsforOrder(PONo).then((response) => {
                    console.log("data for table items", response.data);
                    setItemID(response.data.item01.toUpperCase())
                    setItemList(response.data)


                })
    
            } catch (error) { }
    
        }

        const setSupplierData = async () => {
            try {
                await getSupplierByID(itemID).then((response) => {
                    console.log("data for table items", response.data);
                    setSupAdd(response.data.address)
                    setcontactNO(response.data.contactnumber)
                    setSupName(response.data.suppliername)
                })
    
            } catch (error) { }
    
        }


        function calcTax(Amount){

                const taxval = Amount * (10/100)
                const totVal = Amount + taxval

                settaxVal(taxval)
                settotVal(totVal)

                

        }

    return (
        <div >
            <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div >

            {/* <Header></Header> */}
            


                <div>
                    
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
                                                    value={PONo}
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
                                                    value={receiptdate}
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
                                                    value={supName}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    // placeholder="No.475, Uniojn Place,"
                                                    
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
                                                    value={supAdd}
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
                                                    value={contactNO}
                                                    disabled
                                                />
                                        </div>
                                        

                                    </div>
                                    <div className="row ml-2">

                                        
                                        
                                        

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
                                                    value={shipTo}
                                                    id="requisition"
                                                    type="text"
                                                    className="form-control "
                                                    placeholder="No.475, Uniojn Place,"
                                                    
                                                    disabled
                                                />
                                        </div>
                                        

                                    </div>

                                    <div className="row ml-2">

                                        
                                       
                                        

                                    </div>
                                    <div className="row ml-2">

                                        
                                       
                                        

                                    </div>
                                 

                                   
                                </div>


                            </div>

                            



                            <table class="table table-hover border border-secondary mt-3 ">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th class="text-center">Item Code</th>
                                                <th class="text-center">Item Name</th>
                                                <th class="text-center">Quantity</th>
                                                <th class="text-right"> Unit Price</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center">{itemsList.item01}</td>
                                                <td class="text-center">{itemsList.itemName01}</td>
                                                <td class="text-center">{itemsList.qty01}</td>
                                                <td class="text-right">{itemsList.unitPrice01}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">{itemsList.item02}</td>
                                                <td class="text-center">{itemsList.itemName02}</td>
                                                <td class="text-center">{itemsList.qty02}</td>
                                                <td class="text-right">{itemsList.unitPrice02}</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">{itemsList.item03}</td>
                                                <td class="text-center">{itemsList.itemName03}</td>
                                                <td class="text-center">{itemsList.qty03}</td>
                                                <td class="text-right">{itemsList.unitPrice03}</td>
                                            </tr>
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
                                                        value={Amount}
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
                                                        value={taxVal}
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
                                                         value={totVal}
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
