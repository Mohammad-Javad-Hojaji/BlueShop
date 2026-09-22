import CartItem from "../../components/CartItem/CartItem"
import Container from "../../components/Container/Container"
import CartPageImg from "./../../assets/images/cartPage.png"
export default function Cart() {
    return (
        <div className="pt-18">
            <Container>
                <img src={CartPageImg} alt="CartPage" className="rounded-2xl" />
                <div className="grid grid-cols-3 pt-5">
                    <div className="col-span-2 shadow">
                        <div className="px-4">
                            <h1 className="p-0! text-xl!">
                                محصولات سبد خرید(1)
                            </h1>
                        </div>
                        <div>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>
                    </div>
                    <div className="border col-span-1 px-2 mr-6">
                        <p className="text-xl! text-gray-700">
                            خلاصه سفارش
                        </p>
                    </div>
                </div>
            </Container>


        </div>
    )
}