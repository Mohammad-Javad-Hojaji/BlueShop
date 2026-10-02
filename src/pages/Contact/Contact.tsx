import Container from "../../components/Container/Container";
import contactImage from "./../../assets/images/contact.png"
import callNumber from "./../../assets/images/callNumber.png"
import Email from "./../../assets/images/email.png"
import clock from "./../../assets/images/clock.png"
import address from "./../../assets/images/address.png"
import send from "./../../assets/images/send.png"
import Button from "../../components/_UI_/Button/button";
import React, { useState } from "react";
import Alerm from "../../components/Alerm/Alerm";

export default function Contact() {
    const FieldsLabel = {
        name: 'نام و نام خانوادگی',
        email: 'ایمیل',
        title: 'موضوع پیام',
        text: 'پیام'
    }
    type Data = {
        name: string,
        email: string,
        title: string,
        text: string
    }
    const [data, setData] = useState<Data>({ name: '', email: '', title: '', text: '' })
    const [errorMessages, setErrorMessages] = useState<Data>({ name: '', email: '', title: '', text: '' })
    const [trueFields, setTrueFields] = useState<boolean>(true)
    const [showAlerm, setShowAlerm] = useState<boolean>(false)
    const handleData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
        if (e.target.value.trim() !== "") {
            setErrorMessages((preview) => (
                { ...preview, [e.target.name]: '' }
            ))
        }
        else {
            setErrorMessages((preview) => (
                { ...preview, [e.target.name]: 'را وارد کنید' }
            ))
        }

        if (e.target.name == "email") {
            if (e.target.value.endsWith("@yahoo.com") || e.target.value.endsWith("@gmail.com")) {

                setErrorMessages((preview) => (
                    { ...preview, email: "" }
                ))
            }
            else if (e.target.value.trim() == "") {
                setErrorMessages((preview) => (
                    { ...preview, email: 'را وارد کنید' }
                ))
            }
            else {
                setErrorMessages((preview) => (
                    { ...preview, email: 'شما نادرست است' }
                ))
            }
        }
        if (e.target.name == "text") {
            if (e.target.value.trim() !== "") {
                if (e.target.value.length < 12) {
                    setErrorMessages((preview) => (
                        { ...preview, [e.target.name]: "شما نباید کمتر از  12 کاراکتر باشد" }
                    ))
                }
            }
        }
    }

    const handleSend = () => {
        if (data.text.length < 12) {
            setTrueFields(false)
            setErrorMessages((perview) => ({ ...perview, text: "شما نباید کمتر از  12 کاراکتر باشد" }))
        }
        if (!(data.email.endsWith("@yahoo.com") || data.email.endsWith("@gmail.com"))) {
            setTrueFields(false)
            setErrorMessages((perview) => ({ ...perview, email: "نادرست است" }))
        }
        for (const [key, value] of Object.entries(data)) {
            if (value.trim() == "") {
                setTrueFields(false)
                setErrorMessages((perview) => ({ ...perview, [key]: "را وارد کنید" }))
            }
        }
        setShowAlerm(true)
        setTimeout(() => {
            setShowAlerm(false)
            setTrueFields(true)
        }, 2000);
    }
    return (
        <div className="pt-18">
            <Container>
                {
                    showAlerm ?
                        (
                            trueFields ?
                                (
                                    <Alerm variant="success" title="پیام شما با موفقیت ارسال شد" />
                                )
                                :
                                (
                                    <Alerm variant="danger" title="فرم شما نیاز به اصلاح دارد" />
                                )
                        ) :
                        (
                            <>

                            </>
                        )
                }
                <div >
                    <img className="rounded-2xl" src={contactImage} alt="ContactUs" />
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 ">
                    <div className="grid grid-cols-11 justify-stretch shadow p-3 shadow-gray-300 rounded-2xl mt-10 ">
                        <div className="shadow-gray-400 shadow rounded col-span-11  md:col-span-5 p-5 mt-5">
                            <div className="flex justify-between">

                                <div>
                                    <h3 className="font-black"> ایمیل</h3>
                                    <p className="text-xs font-light pt-2">BlueShop@gmail.com</p>
                                    <p className="text-xs">پاسخگویی :    24 ساعته</p>
                                </div>
                                <img src={Email} className="h-10" alt="number" />
                            </div>

                        </div>
                        <div className="hidden md:flex">

                        </div>
                        <div className="shadow-gray-400 shadow rounded col-span-11  md:col-span-5 p-5 mt-5">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-black">شماره تماس</h3>
                                    <p className="text-xs pt-2">09921354092</p>
                                    <p className="text-xs">پاسخگویی : 9صبح تا 10 شب</p>
                                </div>
                                <img src={callNumber} className="h-10" alt="number" />
                            </div>
                        </div>

                        <div className="shadow-gray-400 shadow rounded col-span-11  md:col-span-5 p-5 mt-5">
                            <div className="flex justify-between">

                                <div>
                                    <h3 className="font-black"> ساعت کاری</h3>
                                    <p className="text-xs pt-2">شنبه تا پنجشنبه 9 صبح تا 10 شب</p>
                                    <p className="text-xs"> جمعه 9 صبح تا 3 بعد از ظهر     </p>
                                </div>
                                <img src={clock} className="h-10" alt="Clock" />
                            </div>

                        </div>
                        <div className="hidden md:flex">

                        </div>
                        <div className="shadow-gray-400 shadow rounded col-span-11  md:col-span-5 p-5 mt-5">
                            <div className="flex justify-between">

                                <div>
                                    <h3 className="font-black">  آدرس</h3>
                                    <p className="text-xs pt-2">   مشهد - قائم مقام 32 </p>
                                    <p className="text-xs"> پلاک10  </p>
                                </div>
                                <img src={address} className="h-10" alt="Clock" />
                            </div>

                        </div>
                        <div className="col-span-11">
                            <iframe className="w-full rounded-2xl pt-10" title="map-iframe" src="https://neshan.org/maps/iframe/places/Qb1OTiWJByLw/36.3378326/59.5002997" width="600" height="450" allowFullScreen loading="lazy" ></iframe>
                        </div>
                    </div>
                    <div className="shadow p-5 shadow-gray-300 rounded-2xl mr-0  lg:mr-10 mt-10">
                        <div className="flex gap-1 h-auto">
                            <img src={send} alt="send" className="h-6" />
                            <h2 >ارسال پیام</h2>
                        </div>
                        <p className="pt-2">پیام خود را برای ما بنویسید در اسرع وقت پاسخ میدهیم.</p>
                        <div className="pt-4">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="user">نام و نام خانوادگی</label>
                                <input onChange={handleData} className="md:text-sm text-xs border-gray-300 border outline-none p-2 rounded mt-2" type="text" name="name" id="user" placeholder="نام شما (برای مثال مهدی)" />
                                {
                                    errorMessages.name ?
                                        (
                                            <p className="text-red-500 text-sm pt-2">{FieldsLabel.name} {errorMessages.name} </p>
                                        )
                                        :
                                        (
                                            <p></p>
                                        )
                                }
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email"> ایمیل  </label>
                                <input onChange={handleData} className="md:text-sm text-xs border-gray-300 border outline-none p-2 rounded mt-2" type="email" name="email" id="email" placeholder="ایمیل شما (برای مثال mahdi@gmail.com)" />
                                {
                                    errorMessages.email ?
                                        (
                                            <p className="text-red-500 text-sm pt-2">{FieldsLabel.email} {errorMessages.email} </p>
                                        )
                                        :
                                        (
                                            <p></p>
                                        )
                                }

                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="title"> موضوع پیام  </label>
                                <input onChange={handleData} className="md:text-sm text-xs border-gray-300 border outline-none p-2 rounded mt-2" type="text" name="title" id="title" placeholder="موضوع شما (برای مثال مشکل در فرایند خرید)" />
                                {
                                    errorMessages.title ?
                                        (
                                            <p className="text-red-500 text-sm pt-2">{FieldsLabel.title} {errorMessages.title} </p>
                                        )
                                        :
                                        (
                                            <p></p>
                                        )
                                }
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="text">  پیام شما  </label>
                                <textarea onChange={handleData} className="md:text-sm text-xs border-gray-300 border outline-none p-2 rounded mt-2" name="text" id="text" placeholder="پیام خود را جزئیات بیشتری بیان کنید ">
                                </textarea>
                                {
                                    errorMessages.text ?
                                        (
                                            <p className="text-red-500 text-sm pt-2">{FieldsLabel.text} {errorMessages.text} </p>
                                        )
                                        :
                                        (
                                            <p></p>
                                        )
                                }
                            </div>
                            <div className="flex justify-center">
                                {
                                    showAlerm ?
                                        (
                                            <Button className="flex mt-10 w-4/5 justify-center items-center rounded-2xl py-2! cursor-not-allowed" variant="secondary">
                                                <img className="h-8" src={send} alt="ContactUs" />
                                                ارسال پیام
                                            </Button>
                                        )
                                        :
                                        (
                                            <Button onClick={handleSend} className="flex mt-10 w-4/5 justify-center items-center rounded-2xl py-2! cursor-pointer" variant="primary">
                                                <img className="h-8" src={send} alt="ContactUs" />
                                                ارسال پیام
                                            </Button>
                                        )
                                }

                            </div>


                        </div>

                    </div>
                </div>

            </Container >
        </div >
    )
}