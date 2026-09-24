import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../services/api"
import type { Product } from "../../type/type"
import Container from "../../components/Container/Container"
import Button from "../../components/_UI_/Button/button"
import Load from "./../../assets/images/Loading.svg"
import { useShoppingCartContext } from "../../context/ShoppingCartItems"

export default function Product() {
    const { handleIncreaseProductQty, getQtyProduct,handleDecreaseProductQty } = useShoppingCartContext()
    const params = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product>({} as Product)
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        getSingleProduct(params.id as string).then(data => {
            setProduct(data)
            setLoading(false)
        })
    }, [])

    return (
        <div className="pt-16">
            <Container>
                {
                    loading ?
                        (
                            <div className="flex justify-center items-center">
                                <img src={Load} alt="loading" className="w-1/4" />
                            </div>
                        )
                        :
                        (
                            <div className="grid md:grid-cols-11 grid-cols-1 p-5 shadow-xl rounded-xl">
                                <div className=" col-span-5">
                                    <h1 className="text-2xl!">
                                        {
                                            product.name
                                        }
                                    </h1>
                                    <div className="flex">
                                        <span className="text-sky-800 pr-5">
                                            {product.score}
                                        </span>
                                        <img src="https://uploadkon.ir/uploads/fe8e17_26icons8-star-48.png" className="h-5 pr-2" alt="" />
                                    </div>

                                    <p className="text-blue-700 text-end">
                                        <span className="text-3xl">{product.price + " "} </span>
                                        تومان
                                    </p>
                                    <h2 className="text-gray-700! pt-2">توضیحات : </h2>
                                    <p>
                                        {product.description}
                                    </p>
                                    <div className="pt-5 flex justify-center items-center">
                                        {
                                            getQtyProduct(parseInt(params.id as string)) === 0 ?
                                                (
                                                    <Button variant="primary" onClick={() => handleIncreaseProductQty(parseInt(params.id as string),product.price)} className="rounded-2xl px-4! py-2! cursor-pointer">
                                                        اضافه کردن به سبد خرید
                                                    </Button>
                                                )
                                                :
                                                (
                                                    <div className="flex">

                                                        <Button variant="primary" className="py-2!" onClick={()=>handleIncreaseProductQty(parseInt(params.id as string),product.price)}>
                                                            +
                                                        </Button>
                                                        <p className="text-3xl px-8">
                                                            {
                                                                getQtyProduct(parseInt(params.id as string))
                                                            }
                                                        </p>
                                                        <Button variant="danger" className="py-2!" onClick={()=>handleDecreaseProductQty(parseInt(params.id as string))}>
                                                            -
                                                        </Button>
                                                    </div>

                                                )
                                        }

                                    </div>
                                </div>
                                <div className="col-span-1">

                                </div>
                                <div style={{ backgroundColor: "#e0e8f2" }} className="p-10 col-span-5 mt-10 md:m-0">
                                    <img src={product.image} alt="Product" />
                                </div>
                            </div>
                        )
                }
            </Container>
        </div>
    )
}