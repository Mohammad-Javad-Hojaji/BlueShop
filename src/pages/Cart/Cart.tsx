import Button from "../../components/_UI_/Button/button"
import CartItem from "../../components/CartItem/CartItem"
import Container from "../../components/Container/Container"
import { useShoppingCartContext } from "../../context/ShoppingCartItems"
import CartPageImg from "./../../assets/images/cartPage.png"
export default function Cart() {
    const { cartItems, totalQty, deleteAll, totalPrices } = useShoppingCartContext()
    const formatter = new Intl.NumberFormat('en-US');
    return (
        <div className="pt-18">
            <Container>
                <img src={CartPageImg} alt="CartPage" className="rounded-2xl" />
                <h1 className="p-0! text-xl!">
                    محصولات سبد خرید({totalQty})
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 pt-5">
                    <div className="col-span-2 shadow shadow-gray-400">

                        <div className="px-4">

                        </div>
                        <div>
                            {
                                cartItems.length !== 0 ?
                                    cartItems.map((item) => (
                                        <CartItem {...item} key={item.id} />
                                    )) :
                                    <div className="h-48 flex justify-center items-center text-xl text-red-400">
                                        سبد خرید شما خالی می باشد
                                    </div>
                            }

                        </div>
                    </div>
                    <div className="shadow  shadow-gray-400 col-span-1 p-2 mt-10 lg:mt-0 lg:mr-6 rounded border-b h-fit">
                        <p className="text-xl! text-gray-700 p-4">
                            خلاصه سفارش
                        </p>
                        <div className="px-4 mt-2 flex justify-between ">
                            <p>
                                تعداد کل محصولات
                            </p>
                            <p className="text-sm">
                                {
                                    totalQty
                                }
                            </p>
                        </div>
                        <div className="px-4 mt-2 flex justify-between">
                            <p>
                                قیمت کل اجناس
                            </p>
                            <p className="text-xs">
                                {formatter.format(totalPrices)} تومان
                            </p>
                        </div>
                        <div className="px-4 mt-2 flex justify-between">
                            <p>
                                تخفیف
                            </p>
                            <p className="text-sm">
                                0 تومان
                            </p>
                        </div>
                        <div className="px-4 mt-2 flex justify-between border-b-sky-200 border-b pb-8">
                            <p>
                                هزینه ارسال
                            </p>
                            {
                                cartItems.length !== 0 ?
                                    <p className="text-sm">
                                        50,000 تومان
                                    </p>
                                    :
                                    <p className="text-sm">
                                        0 تومان
                                    </p>
                            }

                        </div>
                        <div className="px-4 mt-2 flex justify-between">
                            <p className="font-black text-xl">
                                مبلغ نهایی
                            </p>

                            {
                                cartItems.length !== 0 ?
                                    (
                                        <p className="text-blue-500">
                                            {formatter.format(totalPrices + 50000) } تومان 
                                        </p>
                                    ) :
                                    <p className="text-blue-500">
                                        0 تومان
                                    </p>
                            }


                        </div>
                        <Button variant="primary" className="p-0! w-full mt-10 py-2! rounded-2xl">
                            ادامه فرایند خرید
                        </Button>
                        <Button variant="danger" className="p-0! w-full py-2! rounded-2xl my-4" onClick={() => deleteAll()}>
                            خالی کردن سبد خرید
                        </Button>
                    </div>
                </div>
            </Container>


        </div>
    )
}