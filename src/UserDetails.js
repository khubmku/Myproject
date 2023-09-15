import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserDetails() {
  const {userId}= useParams();
  //const [uidsetUid]=useState(2);
  const [count, setCount] = useState(4);

  const [UserDetails, setUserDetail]= useState ([]);

  useEffect(() => {

    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) => {
      setUserDetail(response.data);
    
    });

  }, []);


  return (
    <div>
      <h2> Selected User Id: ({UserDetails.id} ) </h2>
     
      <h2> Selected User Name:( {UserDetails.name} ) </h2>
      <h2> Selected User Email:{UserDetails.email}  </h2>
    

    </div>
  );
}

export default UserDetails;
