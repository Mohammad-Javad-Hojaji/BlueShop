import axios from "axios";

export const client=axios.create({
    baseURL:"http://localhost:8000"
})


export async function getCategory(){
    const {data}=await client.get("/categories")

    return data
}
export async function getSingleCategory(id:string){
    const {data}=await client.get(`/categories/${id}`)

    return data
}
export async function getItemCategory(page:number,id:string|number){
    const {data}=await client.get(`/products?page=${page}&categoryid=${id}`)

    return data
}
export async function getItemProducts(page:number){
    const {data}=await client.get(`/products?productPage=${page}`)

    return data
}
export async function getPagesProducts(){
    const {data}=await client.get(`/productPages`)

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