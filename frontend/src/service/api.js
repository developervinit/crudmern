import axios from 'axios';

//this url is not of any component, this is of database url from database/db.json. and 'users' is the object in it holding all the values.
//Note - if it is fething data from 'Database/db.json' file then did not use that url here like: 'http://127.0.0.1:3003/Database/users' because we installed 'json-server' and in 'npm-script' we gave the url (127.0.0.1:3003) to run json-server on it then when we start 'json-server' using script 'npm run json-server' then 'jeson-server' automatically fetch the data from the server.
const url = "http://127.0.0.1:3003/users";


//it is to get value from the database currently which is from 'Database/db.json'. 
export async function getUsers() {

    try{
        const rspns = await axios.get(url);
        return rspns;
    }catch(err){
        console.log(err);
    }
    
}

//it is to put dadta into the database currently which is 'Database/db.json'.
export async function addNewUser(user){

    try{
        await axios.post(url, user);
     }catch(err){
        console.log(err);
     }

}

//this is to update user. here we are using 'put' method to update the user
export async function updateUser(id, user){
    try{
        return await axios.put(`${url}/${id}`, user);
    }catch(err){
        console.log(err);
    }
     
}

//getting user's data according 'id'
export async function getEditUser(id){

    try{
        const response = await axios.get(`${url}/${id}`);
        return response;
    } catch(err){
        console.log(err);
    }
    
}


export async function deleteOneUser(id){
    return await axios.delete(`${url}/${id}`);
}