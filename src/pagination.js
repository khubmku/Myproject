import React, { useEffect, useState } from "react";
import axios from "axios";
import Numbers from "./numbers";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="table">
     
        <div className="col-6">
          {currentPosts.map((getting) => (
            <tr>
              <td>{getting.username}</td>
              <td>{getting.email}</td>
            </tr>
          ))}
          <Numbers
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage} 
          
          />
        </div>
   
    </div>
  );
};

export default Pagination;