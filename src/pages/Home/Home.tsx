import { Link } from "react-router-dom"
import banner from "./../../assets/images/banner.png"
import banner2 from "./../../assets/images/banner2.png"
import Container from "../../components/Container/Container"
import { getCategory, getOfferProducts } from "../../services/api"
import React, { useEffect, useRef, useState } from "react"
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
            setLoading(current => ({ ...current, categories: false }))
        })
        getOfferProducts().then(data => {
            setOfferProducts(data)
            setLoading(current => ({ ...current, offers: false }))
        })

    }, [])
    useEffect(() => {

        const interval = setInterval(() => {

            setTimeout(() => {
                setIndexSlider((prev) => (prev + 1) % slider.length);
            },);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const [indexSlider, setIndexSlider] = useState<number>(0)
    let slider: string[] = [
        banner,
        banner2
    ]

    return (
        <div className="pt-16">

            <Link to="/products" className="pb-12" >
                <div className="relative" >
                    <div className="slider-container w-full overflow-hidden ">
                        <div className="slide w-full flex " style={{ translate: `${indexSlider * 100}%` }}>
                            {
                                slider.map((sliderx, index) => (
                                    <img src={sliderx} alt="banner" className="w-full" key={index} />
                                ))
                            }
                        </div>
                    </div>



                    <div className="absolute top-10/12 right-1/2 flex justify-center items-center gap-2">
                        {slider.map((v,index) => (
                            <div className={` w-2 h-2 rounded-full ${indexSlider==index?("bg-white"):("bg-gray-400")}`} >

                            </div>
                        ))}

               
                    </div>

                </div>
            </Link>
            <Container>
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