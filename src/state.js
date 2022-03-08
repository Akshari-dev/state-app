import React,{useState} from "react";

function State(){

    const[Var_1 ,setVar_1]=useState("ReactJS");
    const[Var_2 ,setVar_2]=useState(100);
    const[Var_3 ,setVar_3]=useState(true);
    const[Var_4, setVar_4]=useState({"key1":"Hello_1","key2":"Hello_2","key3":"Hello_3"});
    const[Var_5, setVar_5]=useState([10,20,30,40,50]);
    const[product, setproduct]=useState([
        {"p_id":111,"p_name":"Niki","p_cost":100},
        {"p_id":222,"p_name":"polo","p_cost":200},
        {"p_id":333,"p_name":"Peter","p_cost":300},
        {"p_id":444,"p_name":"ClubFox","p_cost":400},
        {"p_id":555,"p_name":"Pepe","p_cost":500}
    ] )
 return(
     <React.Fragment>
<table border="1" colspan="10px" cellPadding="10px">
         <tr>
             <th>S.Number</th>
             <th>p_id</th>
             <th>p_name</th>
             <th>p_cost</th>
         </tr>
   
     {product.map((element,index)=>(
         <tr key={index}>
             <td>{index+1}</td>
             <td>{element.p_id}</td>
             <td>{element.p_name}</td>
             <td>{element.p_cost}</td>
         </tr>
     ))
     }
       </table>

         <h1>{Var_1}</h1>
         <h1>{Var_2}</h1>
         <h1>{JSON.stringify(Var_3)}</h1>
         <h2>{JSON.stringify(Var_4)}</h2>
         <h2>{(Var_5)}</h2>
         <h2>{JSON.stringify(Var_4)}</h2>
         <button>RANDOM</button>
     </React.Fragment>
 )
}
export default State;