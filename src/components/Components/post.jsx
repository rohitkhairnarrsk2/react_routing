import React from "react";
import queryString from "query-string";
const Post = (props) => {
  console.log("Query Strings= ", queryString.parse(props.location.search));
  return (
    <React.Fragment>
      <h1>Post</h1>
      <h5>Year = {props.match.params.year}</h5>
      <h5>Month = {props.match.params.month}</h5>
    </React.Fragment>
  );
};

export default Post;
