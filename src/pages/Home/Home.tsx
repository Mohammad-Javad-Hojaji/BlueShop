import { Link, Navigate, useNavigate } from "react-router-dom"
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
    const navigate = useNavigate()
    const [category, setCategory] = useState<Categories>([])
    const [offerProducts, setOfferProducts] = useState<OfferProducts>([])
    const [loading, setLoading] = useState<Loading>({
        categories: true,
        offers: true
    })
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragDistance, setDragDistance] = useState(0);
    const handleMouseDown = (e: React.MouseEvent) => {
        setStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        setDragDistance(e.clientX - startX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        if (Math.abs(dragDistance) < 10) {
            navigate("/products");
        } else if (dragDistance > 80) {
            setIndexSlider(prev =>
                prev === 0 ? slider.length - 1 : prev - 1
            );
        } else if (dragDistance < -80) {
            setIndexSlider(prev =>
                (prev + 1) % slider.length
            );
        }

        setIsDragging(false);
        setDragDistance(0);
    };


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

            <div>
                <div className="relative" >
                    <div className="slider-container w-full overflow-hidden " onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}>
                        <div className="slide w-full flex " style={{ translate: `${indexSlider * 100}%` }}>
                            {
                                slider.map((sliderx, index) => (

                                    <img src={sliderx} draggable="false" alt="banner" className="w-full" key={index} />
                                ))
                            }
                        </div>
                    </div>



                    <div className="absolute top-10/12 right-1/2 flex justify-center items-center gap-2">
                        {slider.map((v, index) => (
                            <div className={` w-2 h-2 rounded-full ${indexSlider == index ? ("bg-white") : ("bg-gray-400")}`} >

                            </div>
                        ))}


                    </div>

                </div>
            </div>
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