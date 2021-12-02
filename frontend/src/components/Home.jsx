import React from 'react';


export default function Home() {
    return(<>
            <div className="container">
               <h1 className="hello">Hello World</h1>
               <button className="newEmp">New Employee</button>

               <select className="deptSelct" name="departments" id="depart">
                  <option value="Accounts and Finance">Select Department</option>
                  <option value="Accounts and Finance">Accounts and Finance</option>
                  <option value="HR">HR</option>
                  <option value="Research and development">Research and development</option>
                  <option value="Learning and development">Learning and development</option>
                  <option value="IT services">IT services</option>
                  <option value="Product development">Product development</option>
                  <option value="Admin department">Admin department</option>
               </select>
             </div> 
           </>)
}

