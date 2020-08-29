import axios from 'axios'; 

export async function apiCall(param1) 
{
    try 
    {
        let api = 'http://157.230.190.251/api/v1/';
 
        const res = await axios.get(`${api}${param1}`);
        return res.data
    } 
    catch (error) 
    {
        console.log(error);
    }
}

export async function apiLogin(user, pass)
{
  try 
    {
        let api = 'http://157.230.190.251/api/v1/cmodels/users/login';
 
        const res = await axios.post(`${api}`, {
          "username": user,
          "password": pass
          }
        );
        return res.data
    } 
    catch (error) 
    {
        console.log(error);
    }
}