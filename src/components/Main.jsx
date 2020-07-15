import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./Home";

class Main extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Router>
                    <Route to="/" exact component={Home} />
                    <Route to="/post/id" exact component={Home} />
                    <Route to="/create" exact component={Home} />
                </Router>
            </>
         );
    }
}
 
export default Main;