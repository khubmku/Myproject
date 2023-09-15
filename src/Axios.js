import { useEffect, useState } from "react";
import axios from "axios";
function Axios()
{
   const [userId,setUserId]=useState(4)
   const [loader,setLoder]=useState(true);
   const [userData,setData]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users?id="+`${userId}`).then((response)=>{
            console.log(response);
            setData(response.data);
            setLoder(false);
        });
    },[]);
    


    return(
        // <div className="tableForm">
          
            
        //     {userData.map((data)=> {
        //         return(
        //             <div> {`${data.id}) Username: ${ data.name}`}  </div>
        //         )
        //     })

        //     }y

        // </div>
         <div>
         { loader? (<h1>Loding........</h1>) :(
        <div className="tableForm">  
         <div className="col-6">

        {/* <h2>Name Table</h2> */}

        <table className="table border-2 border-red-900" >

          <thead >

            <tr className="border-4 border-blue-800">

              <th>ID</th>

              <th>Name</th>

            </tr>

          </thead>

          <tbody>
            
            {userData.slice().reverse().map((item) => (

              <tr className="border-4 border-red-700">

                <td className="border-4 border-x-cyan-800">{item.id}</td>

                <td className="border-x-cyan-800 border-4">{item.name}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
      </div>

         )}

 

      {/* <div className="col-6"> */}

      
       {/* <h2>Name: {Meta}</h2> */}
        
{/* <button onClick={buttonClick}> Click Here</button> */}
    
</div>
   

    )


}
export default Axios;
