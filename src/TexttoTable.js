
import React, { useEffect, useState } from 'react';
 function TexttoTable()
{ 
    const [bagDetails, setBagDetails] = useState(
    {
      BagNumber: '',
      Schedulename: ''
   
    }
  );


const handlebgno = (e) =>
 {
    setBagDetails({...bagDetails,BagNumber:e.target.value});

};


const handleschedule = (e) => {
    setBagDetails({...bagDetails,Schedulename:e.target.value});

    };
    
    function Item()
    {
        return(
        <div>
        <tbody>
        <tr>
          <td>{bagDetails.BagNumber}</td>
          <td>{bagDetails.Schedulename}</td>
        </tr>
       </tbody>
       </div>
        )
    }






    return(
        <div className=" border-2 border-red-300">
             <label>Schedule </label>
             <input type="text"  value={bagDetails.Schedulename} onChange={handleschedule}/><br/>
             <labe>bagNumber</labe>
             <input type="text" value={bagDetails.BagNumber} onChange={handlebgno} /><br/>
             
             <input type="button" value="Submit" />
        </div>
    )
}
export default TexttoTable;

