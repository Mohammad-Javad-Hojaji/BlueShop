import { Link } from "react-router-dom"
import banner from "./../../assets/images/banner.png"
import Container from "../../components/Container/Container"
import { getCategory, getOfferProducts } from "../../services/api"
import {  useEffect, useState } from "react"
import type { Categories, OfferProducts } from "../../type/type"
import CategoryCart from "../../components/CategoryCart/CategoryCart"
import ProductCart from "../../components/ProductCart/ProductCart"
import Load from "./../../assets/images/Loading.svg"

export default function Home() {
    type Loading = {
        categories: boolean,
        offers: boolean
    }
    const [category, setCategory] = useState<Categories>([])
    const [offerProducts, setOfferProducts] = useState<OfferProducts>([])
    const [loading, setLoading] = useState<Loading>({
        categories: true,
        offers: true
    })
    useEffect(() => {
        getCategory().then(data => {
            setCategory(data)
            setLoading(current=>({...current,categories:false}))
        })
        getOfferProducts().then(data => {
            setOfferProducts(data)
            setLoading(current=>({...current,offers:false}))
        })

    }, [])
    return (
        <div className="pt-16">
            <Container>
                <Link to="/products" >
                    <img src={banner} alt="Banner Site" className="rounded-2xl" />
                </Link>

                <div className="pt-5">
                    {
                        loading.categories ?
                            (
                                <div className="flex justify-center items-center">
                                    <img src={Load} alt="loading" className="w-1/4" />
                                </div>
                            ) :
                            (
                                <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3">
                                    {
                                        category.map((data) => (

                                            <CategoryCart {...data} key={data.id} />

                                        ))
                                    }
                                </div>
                            )

                    }
                </div>
                <div className="pt-10">
                    <h2 className="text-gray-600!">
                        محصولات پر فروش
                    </h2>

                    {
                        loading.offers ? (
                            <div className="flex justify-center items-center">
                                <img src={Load} alt="loading" className="w-1/4" />
                            </div>
                        )
                            :
                            (
                                <div className="flex lg:flex-nowrap flex-wrap justify-between gap-3 pt-5">
                                    {
                                        offerProducts.map(item => (
                                            <ProductCart {...item} key={item.id} />
                                        ))
                                    }
                                </div>
                            )
                    }

                </div>
            </Container>

        </div>
    )
}