import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Empty from "./Empty";
import { Jumbotron, Button, Container } from 'reactstrap';
import Moment from 'react-moment';

const GET_POST = gql`{
  posts {
    id
    body
    title
    createdAt
  }
}`
const Home = () => {

  const { loading, data } = useQuery(GET_POST)

  if (loading) return <div> loading... </div>;

  console.log(data)

  return (
    <>

    <h2 className="mb-5">GraphQL Blog</h2>

    <Container>

      {data.posts.length === 0 && <Empty />}
      {data.posts.map(post => 
      <Jumbotron className="shadow-sm p-3 mb-5 bg-white rounded">
        <h1 className="display-6">{post.title}</h1>

        <hr className="my-2" />
        <p>{post.body}</p>
        <p className="disable text-secondary">Posted: {" "}
          <Moment fromNow>
              {post.createdAt}    
            </Moment></p>
        <p className="lead">
          <Button color="primary">Read More</Button>
        </p>
      </Jumbotron>)}

      </Container>
    </>
  );
}

export default Home;