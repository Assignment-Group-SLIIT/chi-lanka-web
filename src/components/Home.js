import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Header from "./Header"





function Home() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Header} />
            </Switch>
        </Router>
    );
}

export default Home;
