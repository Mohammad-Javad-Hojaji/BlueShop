import { useEffect, useState } from "react"
import { getItemCategory, getSingleCategory } from "../../services/api"
import { useParams } from "react-router-dom"
import type { Category, Products } from "../../type/type"
import CategoryCart from "../../components/CategoryCart/CategoryCart"
import Container from "../../components/Container/Container"
import ProductCart from "../../components/ProductCart/ProductCart"
import Button from "../../components/_UI_/Button/button"

export default function Category() {
    const params = useParams<{ id: string }>()
    const [category, setCategory] = useState<Category>({} as Category)
    const [page, setPage] = useState<number>(1)
    const [products, setProducts] = useState<Products>([])
    function handlePage(id: number) {
        setPage(id)
    }
    useEffect(() => {
        getSingleCategory(params.id as string).then((data) => {
            setCategory(data)
        })
        getItemCategory(page, params.id as string).then(data => {
            setProducts(data)
        })
    },[page])
    return (
        <div className="pt-18 ">
            <Container>
                <div style={{ backgroundColor: category.bg }} className="py-5 rounded-3xl ">
                    <CategoryCart {...category} />
                </div>
                <div>
                    <h1 className="text-2xl! text-gray-700!">{category.name}</h1>
                    <div className="flex lg:flex-nowrap flex-wrap justify-around gap-3 pt-5">
                        {
                            products.map((data) => (
                                <ProductCart {...data} />
                            ))
                        }
                    </div>
                </div>
                <div className="py-10 flex justify-center items-center">
                    {
                        page - 1 > 1 ?
                            (
                                <span className="pr-4">...</span>
                            ) :
                            (
                                null
                            )
                    }
                    {
                        page !== 1 ?
                            (<Button variant="light" className="p-0! h-9 w-9 mr-4 " onClick={() => {
                                handlePage(page - 1)
                            }}>
                                {page - 1}
                            </Button>)
                            :
                            (
                                null
                            )

                    }
                    <span className="p-0! h-9 w-9 mr-4 bg-sky-600 justify-center items-center flex mr-4 ">
                        <span className=" text-white">{page}</span>
                    </span>
                    {
                        page !== category.pages ?
                            (<Button variant="light" className="p-0! h-9 w-9 mr-4 " onClick={() => {
                                handlePage(page + 1)
                            }}>
                                {page + 1}
                            </Button>)
                            :
                            (
                                null
                            )

                    }
                    {
                        page + 1 < category.pages ?
                            (
                                <span className="pr-4">...</span>
                            ) :
                            (
                                null
                            )
                    }

                </div>
            </Container>
        </div>
    )
}