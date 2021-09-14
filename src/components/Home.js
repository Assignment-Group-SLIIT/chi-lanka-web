import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./Header";
import pOrders from "./views/purchaseOrder/pOrders";
import PrList from "./views/purchaseRequisitions/prList";
import bills from "./views/Bills/bills"
import PlaceAnOrder from "./views/purchaseOrder/placeAnOrder";





function Home() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/prList" exact component={PrList} />
                <Route path="/pOrders" exact component={pOrders} />
                <Route path="/bills" exact component={bills} />
                <Route path="/placeAnOrder" exact component={PlaceAnOrder} />
            </Switch>
        </Router>
    );
}

export default Home;
