import axios from 'axios';


const url = "http://127.0.0.1:3003/users";

const getUsers = async () => {
    const rspns = await axios.get(url);
    return rspns;
    
}

export default getUsers;