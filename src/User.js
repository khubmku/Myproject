import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function UserPage() {
 const [ users, setUser] = useState([]);

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data);
    
    });

  }, []);


    return (
    <div>
      <h2>User Page</h2>
      {users.map((user)=>(
        <tr key={user.id}> 
        <td> {user.id} </td>
        <td> <Link to={`/user/${user.id}`}> {user.name} </Link></td>
        
        </tr>
       
      ))}
     
    </div>
  );
}

export default UserPage;
