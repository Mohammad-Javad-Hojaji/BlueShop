import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import type { OfferProducts } from "../../type/type";
import { getItemProducts, getPagesProducts } from "../../services/api";
import ProductCart from "../../components/ProductCart/ProductCart";
import Button from "../../components/_UI_/Button/button";

export default function Products() {
    const [products, setProducts] = useState<OfferProducts>([])
    const [page, setPages] = useState<number>(1)
    const[totalPage,setTotalPage]=useState<number>(0)
    function handlePage(page:number){
        setPages(page)
    }
    useEffect(() => {
        getItemProducts(page).then((data) => {
            setProducts(data)
        })
        getPagesProducts().then(data=>{
            setTotalPage(data)
        })
    },[page])
    return (
        <div className="pt-16">
            <Container>
                <div>
                    <h1 className="text-2xl! text-gray-800!">
                        تمامی محصولات
                    </h1>
                    <div className="flex flex-wrap justify-between gap-3 pt-5">
                        {
                            products.map((product)=>(
                                <ProductCart {...product}/>
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
                    <span className="p-0! h-9 w-9 mr-4 bg-sky-600 justify-center items-center flex">
                        <span className=" text-white">{page}</span>
                    </span>
                    {
                        page !== totalPage ?
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
                        page + 1 < totalPage ?
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