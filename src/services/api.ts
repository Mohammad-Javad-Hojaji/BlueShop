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

export async function getSingleProduct(id:string){
    const {data}=await client.get(`/products/${id}`)

    return data
}