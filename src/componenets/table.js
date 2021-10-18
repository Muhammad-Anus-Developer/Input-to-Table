import React from "react";
import "../App.css";
import Data from "./data.json"

export const Stocks = (props) => {
  return (
    <>
      <header className="bg-info text-white py-3 my-5">
      <h2>Your Detail Table</h2>
    </header>
      <div className="stock-container">
        {Data.map((e, i) => {
          return (
            <div key={i}>
              <Detail
                num = {i+1}
                userName={e.userName}
                name={e.name}
                email={e.email}
                password={e.password}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};




const Detail = ({ userName, name, email, password , num }) => {
  
  if (!userName) return <div />;
  return (
    <div>

<table className="table table-bordered">

  <tbody>
    <tr>
    <th scope="row"> {num} </th>
      <td> <p>{userName}</p> </td>
      <td> <p>{name}</p> </td>
      <td> <p>{email}</p> </td>
      <td>  <p>{password}</p>  </td>
    </tr>

  </tbody>
 
</table>
</div>

  );
};