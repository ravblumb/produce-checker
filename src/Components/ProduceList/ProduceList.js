import React from 'react';
import './ProduceList.css';
import { produce } from '../Produce/Produce';

export function ProduceList() {
return(
  <div id="ProdList">
    <h2>Produce List</h2>
    <table>
      <tbody>
        <tr>
          <th>Produce</th>
          <th>Bugs Found</th>
          <th>Procedure</th>
        </tr>
{produce.map (p =>
     (<tr key={p.id}>
      <td>{p.produceName}</td>
      <td>{p.bugsFound}</td>
      <td>{p.procedure}</td>
    </tr>)
  )}
  </tbody>
  </table>
  </div> 
  );
}


