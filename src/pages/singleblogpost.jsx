import React from 'react';
import { Link } from 'react-router-dom';

const Singleblogpost = ({ cohort2post }) => {
  // const something = props.cohort2post;
  console.log('bdvsjvsj', cohort2post);
  return (
    <Link to={`/blog/${cohort2post?.id}`}>
    <div className="border border-blue-300 drop-shadow-md rounded-md p-3">
    <h5 className="text-green-500">{cohort2post?.title}</h5>
    <p className="text-grey-600">{cohort2post?.postContent}</p>
  </div>
  </Link>
    
  );
};

export default Singleblogpost;
