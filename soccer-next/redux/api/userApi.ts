import axios, {AxiosResponse} from "axios"

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type" : "application/json",
    Authorization : "JWT fefege..."
}

export interface UserType{ // public class JoinPayload{}
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
}

export const postUser = async (payload:
    {userid: string, password: string, email: string, 
    name: string, phone: string, birth: string, address: string}) => {
        try{
            const response : AxiosResponse<unknown, UserType[]> = await axios.post(`${SERVER}/user/join`, payload, {headers})
            alert('진행 5 : 응답 성공' + JSON.stringify(response.data))
            return response.data
        } catch(err){
            return err;
        }
    }