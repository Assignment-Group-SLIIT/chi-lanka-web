import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./Header";
import PrList from "./views/purchaseRequisitions/prList";





function Home() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/prList" exact component={PrList} />
            </Switch>
        </Router>
    );
}

export default Home;
