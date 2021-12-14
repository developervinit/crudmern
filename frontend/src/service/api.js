import axios from 'axios';



const url = "http://127.0.0.1:8000";  //nodejs server url.

//const urlf = "http://127.0.0.1:3003/users?department=HR"; //dont this url



//it is to get value from the database currently which is from 'Database/db.json'. 
export async function getUsers(slectValue) {
     
    try{
        let rspns
        if(slectValue.length !== 0){
             rspns = await axios.get(`${url}/${slectValue}`);
        } else {
             rspns = await axios.get(url);
        }

        return rspns;
    
         
    }catch(err){
        console.log(err);
    }
    
}


let headers =  {
    'Content-Type': 'application/json'
}

//this function sending data (which is coming from the input-form) to this route "http://127.0.0.1:8000/newemp". and this route is in nodejs file.  
export async function addNewUser(user){

    try{
         await axios.post(`${url}/newemp`, user, headers);
      }catch(err){
        return err.response;
     }

}

//this is to update user. here we are using 'put' method to update the user. this function is exporting to "EditUser.jsx" file.
export async function updateEmp(id, user){
    try{
        const rsponse =  await axios.put(`${url}/edit/${id}`, user);
        //console.log(rsponse);
        return rsponse;
    }catch(err){
        return err.response;
    }
     
}

//getting user's data according 'id'
export async function getEditUser(id){
    try{
        const response = await axios.get(`${url}/edit/${id}`);
        return response;
    } catch(err){
        console.log(err);
    }
    
}


//to delete one document that matches an id 
export async function deleteOneUser(id){
    return await axios.delete(`${url}/${id}`);
}