import axios from 'axios';



const url = "http://127.0.0.1:8000";  //nodejs server url.


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
         await axios.post(`${url}/newemp`, user, headers)
        //console.log(issubmit);
     }catch(err){
        //err.response.data;
        console.log(err.res);
     }

}

//this is to update user. here we are using 'put' method to update the user. this function is exporting to "EditUser.jsx" file.
export async function updateEmp(id, user){
    try{
        return await axios.put(`${url}/edit/${id}`, user);
    }catch(err){
        console.log(err);
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


export async function deleteOneUser(id){
    console.log(id);
    return await axios.delete(`${url}/${id}`);
}