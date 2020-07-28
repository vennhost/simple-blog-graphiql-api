import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./Home";
import SinglePost from "./SinglePost";
import CreatePost from "./CreatePost";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";


const client = new ApolloClient({
    uri: "https://special-cat-93.hasura.app/v1/graphql", 
        headers: {
            "x-hasura-admin-secret": "bpfhtipuawjqlrdvfzcvyunzrvoocttf"
        }
    
})

class Main extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <ApolloProvider client={client}>
                <Router>
                    <Route to="/" exact component={Home} />
                    <Route to="/post/id" exact component={SinglePost} />
                    <Route to="/create" exact component={CreatePost} />
                </Router>
            </ApolloProvider>
            </>
         );
    }
}
 
export default Main;