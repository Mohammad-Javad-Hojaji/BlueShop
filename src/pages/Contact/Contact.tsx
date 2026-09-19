import Container from "../../components/Container/Container";
import contactImage from "./../../assets/images/contact.png"
import callNumber from "./../../assets/images/callNumber.png"
import Email from "./../../assets/images/email.png"
import clock from "./../../assets/images/clock.png"
import address from "./../../assets/images/address.png"

export default function Contact() {
    return (
        <div className="pt-18">
            <Container>
                <div >
                    <img className="rounded-2xl" src={contactImage} alt="ContactUs" />
                </div>
                <div className="grid grid-cols-2 mt-10">
                    <div className="grid grid-cols-11 justify-stretch">
                        <div className="shadow-gray-400 shadow rounded col-span-5 p-5 mt-5">
                            <div className="flex justify-between">

                                <div>
                                    <h3 className="font-black"> ایمیل</h3>
                                    <p className="text-xs pt-2">BlueShop@gmail.com</p>
                                    <p className="text-xs">پاسخگویی :    24 ساعته</p>
                                </div>
                                <img src={Email} className="h-12" alt="number" />
                            </div>

                        </div>
                        <div>

                        </div>
                        <div className="shadow-gray-400 shadow rounded col-span-5 p-5 mt-5">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="font-black">شماره تماس</h3>
                                    <p className="text-xs pt-2">09921354092</p>
                                    <p className="text-xs">پاسخگویی : 9صبح تا 10 شب</p>
                                </div>
                                <img src={callNumber} className="h-12" alt="number" />
                            </div>
                        </div>

                        <div className="shadow-gray-400 shadow rounded col-span-5 p-5 mt-5">
                            <div className="flex justify-between">

                                <div>
                                    <h3 className="font-black"> ساعت کاری</h3>
                                    <p className="text-xs pt-2">شنبه تا پنجشنبه 9 صبح تا 10 شب</p>
                                    <p className="text-xs"> جمعه 9 صبح تا 3 بعد از ظهر     </p>
                                </div>
                                <img src={clock} className="h-12" alt="Clock" />
                            </div>

                        </div>
                        <div>

                        </div>
                        <div className="shadow-gray-400 shadow rounded col-span-5 p-5 mt-5">
                            <div className="flex justify-between">

                                <div>
                                    <h3 className="font-black">  آدرس</h3>
                                    <p className="text-xs pt-2">   مشهد - قائم مقام 32 </p>
                                    <p className="text-xs"> پلاک10  </p>
                                </div>
                                <img src={address} className="h-12" alt="Clock" />
                            </div>

                        </div>
                        <div className="col-span-11">
                            <iframe className="w-full rounded-2xl pt-10" title="map-iframe" src="https://neshan.org/maps/iframe/places/Qb1OTiWJByLw/36.3378326/59.5002997" width="600" height="450" allowFullScreen loading="lazy" ></iframe>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </Container>
        </div>
    )
}