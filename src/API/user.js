import { api } from "./api";


export async function getUser(id){
    const {data} = await api(`/users/${id}`)
    return data
}