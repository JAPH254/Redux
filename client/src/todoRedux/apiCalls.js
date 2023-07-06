import axios from "axios"
import {addtodos, login} from "./userSlice"
import { apiDomain } from "../utils/utils"

export const loginUser = async (user,dispatch)=>{
    const res = await axios.post(`${apiDomain}/auth/login`,user)
    // const data = await res.data
    dispatch(login(res.data))
    localStorage.setItem("user",JSON.stringify(res.data))
}
export const logoutUser = async (user)=>{
    localStorage.setItem("user",JSON.stringify(user))
}
export const addTodos = async ({user, description},dispatch)=>{
    const res = await axios.post(`${apiDomain}/todos`, description,
            { headers: { "Authorization": `${user.token}` } })
    const data = await res.data
    dispatch(addtodos(data))
}