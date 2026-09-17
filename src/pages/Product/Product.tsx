import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../../services/api"
import type { Product } from "../../type/type"
import Container from "../../components/Container/Container"
import Button from "../../components/_UI_/Button/button"

export default function Product() {
    const params = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product>({} as Product)
    useEffect(() => {
        getSingleProduct(params.id as string).then(data => {
            setProduct(data)
        })
    }, [])
    return (
        <div className="pt-16">
            <Container>
                <div className="grid md:grid-cols-11 grid-cols-1 p-5 shadow-xl rounded-xl">
                    <div className=" col-span-5">
                        <h1 className="text-3xl!">
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
                            <Button variant="primary" className="rounded-2xl px-4! py-2! cursor-pointer">
                                اضافه کردن به سبد خرید
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-1">

                    </div>
                    <div style={{ backgroundColor: "#e0e8f2" }} className="p-10 col-span-5 mt-10 md:m-0">
                        <img src={product.image} alt="Product" />
                    </div>
                </div>
            </Container>
        </div>
    )
}