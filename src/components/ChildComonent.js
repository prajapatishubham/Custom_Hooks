import React, { useEffect } from 'react';
import useApi from '../api/useApi';

const ChildComponent = ({ sendDataToParent }) => {
  // const {
  //   data: postsData,
  //   loading: postsLoading,
  //   error: postsError,
  //   callApi: fetchPosts,
  // } = useApi('https://jsonplaceholder.typicode.com', []);
  // sendDataToParent({ postsData, postsLoading, postsError });
  // console.log("postsData", postsData)
  // useEffect(() => {
  //   fetchPosts('GET', '/posts');
  // }, []);
  return (
    <>
    <div>child component</div>
      {/* {postsLoading ? (
        <p>Loading posts...</p>
      ) : postsError ? (
        <p>Error fetching posts: {postsError.message}</p>
      ) : (
        <ul>
          {postsData?.map((post) => (
            <li key={post.id}>{post.body}{post.title}</li>
          ))}
          {console.log("postsData", postsData)} // Log after data is fetched
        </ul>
      )} */}
    </>
  );

};

export default React.memo(ChildComponent);
