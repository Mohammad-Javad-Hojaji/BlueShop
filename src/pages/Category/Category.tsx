import { useEffect, useState } from "react"
import { getItemCategory, getSingleCategory } from "../../services/api"
import { useParams } from "react-router-dom"
import type { Category, Products } from "../../type/type"
import CategoryCart from "../../components/CategoryCart/CategoryCart"
import Container from "../../components/Container/Container"
import ProductCart from "../../components/ProductCart/ProductCart"

export default function Category() {
    const params = useParams<{ id: string }>()
    const [category, setCategory] = useState<Category>({} as Category)
    const [page,setPage] = useState<number>(1)
    const [products, setProducts] = useState<Products>([])
    useEffect(() => {
        getSingleCategory(params.id as string).then((data) => {
            setCategory(data)
        })
        getItemCategory(page,params.id as string).then(data=>{
            setProducts(data)
        })
    })
    return (
        <div className="pt-18 ">
            <Container>
                <div style={{ backgroundColor: category.bg }} className="py-5 rounded-3xl ">
                    <CategoryCart {...category} />
                </div>
                <div>
                    <h1 className="text-2xl! text-gray-700!">{category.name}</h1>
                    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3 pt-5">
                        {
                            products.map((data)=>(
                                <ProductCart {...data}/>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}