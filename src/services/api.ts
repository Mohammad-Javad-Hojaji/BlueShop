import axios from "axios";

export const client=axios.create({
    baseURL:"http://localhost:8000"
})


export async function getCategory(){
    const {data}=await client.get("/categories")

    return data
}
export async function getOfferProducts(){
    const {data}=await client.get("/offerProduct")

    return data
}