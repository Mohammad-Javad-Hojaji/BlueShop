import BlueShop from "./../../assets/images/BlueShop.png"
export default function Navbar() {
    return (
        <div className="shadow shadow-gray-400 flex items-center h-16 ">
            <div className="flex">
                <img className="h-8" src={BlueShop} alt="BlueShop" />
                <p className="text-xl text-gray-700 font-bold">
                    فروشگاه
                </p>
            </div>
            <div>
                <ul>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}