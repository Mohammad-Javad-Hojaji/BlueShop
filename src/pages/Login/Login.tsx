import { useRef, useState } from "react"
import Button from "../../components/_UI_/Button/button"
import icon from "./../../assets/images/BlueShop.png"
import Alerm from "../../components/Alerm/Alerm"
import { useAccountShop } from "../../context/AccountShop"
export default function Login() {
    const { setIsLogin, setUsername } = useAccountShop()
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    interface Data {
        username: string,
        password: string
    }
    const FieldsLabel: Data = { username: "نام کاربری", password: "رمز عبور" }
    const [alarmShow, setAlarmShow] = useState<boolean>(false)
    const [trueFields, setTrueFields] = useState<boolean>(true)
    const [errorMessages, setErrorMessages] = useState<Data>({ username: "", password: "" })
    const [data, setData] = useState<Data>({ username: "", password: "" })
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === " ") {
            e.preventDefault()
        }
    }
    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const cleanValue = e.target.value.replace(/\s/g, "")
        if (e.target.name == "username") {
            if (usernameRef.current) {
                usernameRef.current.value = cleanValue
            }
        }
        else {
            if (passwordRef.current) {
                passwordRef.current.value = cleanValue
            }
        }
        if (e.target.value.trim() != "") {
            if (e.target.value.trim().length < 8 && e.target.name == "password") {
                setErrorMessages({ ...errorMessages, [e.target.name]: "نباید کمتر از 8 کاراکتر باشد" })
            }
            else if (e.target.value.trim().length < 3 && e.target.name == "username") {
                setErrorMessages({ ...errorMessages, [e.target.name]: "نباید کمتر از 3 کاراکتر باشد" })
            }
            else {
                setErrorMessages({ ...errorMessages, [e.target.name]: "" })
            }
        }
        else {
            setErrorMessages({ ...errorMessages, [e.target.name]: "را وارد کنید" })
        }



        setData({ ...data, [e.target.name]: cleanValue })
    }
    function handleClickButton() {
        for (const [key, value] of Object.entries(data)) {
            if (value.trim() == "") {
                setTrueFields(false)
                setErrorMessages((perview) => ({ ...perview, [key]: "را وارد کنید" }))
            }
            else {
                if (value.trim() != "") {
                    if (data.password.trim().length < 8) {
                        setTrueFields(false)
                    }
                    else if (data.username.trim().length < 3) {
                        setTrueFields(false)
                    }
                    else {
                        setIsLogin(true)
                        setUsername(data.username)
                    }
                }
            }
        }
        setAlarmShow(true)
        setTimeout(() => {
            setAlarmShow(false)
            setTrueFields(true)
        }, 2000);
    }

    return (
        <>
            {
                alarmShow ? (trueFields ? <Alerm variant="success" title="شما با موفقیت وارد شدید" /> : <Alerm variant="danger" title="فرم شما نیاز به اصلاح دارد" />) : (<> </>)
            }
            <div className="h-full w-full flex items-center justify-center md:px-4">
                <div className=" md:w-200  w-full flex  shadow shadow-gray-400 md:rounded-2xl md:p-6 p-2">
                    <div className="w-full">
                        <div className="flex flex-row-reverse pt-5 ">
                            <img src={icon} className="h-8" alt="BlueShop!" />
                            <h3 className="text-xl! text-sky-!text-right">
                                !BlueShop
                            </h3>
                        </div>

                        <h1 className="text-2xl! text-gray-700! py-3! m-0! text-center">
                            ورود به سایت
                        </h1>
                        <div className="w-full">
                            <div className="flex flex-col pt-4 ">
                                <label htmlFor="user">نام کاربری</label>
                                <input ref={usernameRef} onKeyDown={handleKeyDown} onChange={handleInput} className="md:text-sm text-xs border-gray-300 border outline-none p-2 rounded mt-2" type="text" name="username" id="username" placeholder="نام کاربری شما (برای مثال mahdi_12)" />
                            </div>
                            {
                                errorMessages.username ?
                                    (
                                        <p className="text-red-500 text-sm pt-2">{FieldsLabel.username} {errorMessages.username} </p>
                                    )
                                    :
                                    (
                                        <p></p>
                                    )
                            }
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col pt-4 ">
                                <label htmlFor="password">رمز عبور   </label>
                                <input ref={passwordRef} onKeyDown={handleKeyDown} onChange={handleInput} className="md:text-sm text-xs border-gray-300 border outline-none p-2 rounded mt-2" type="password" name="password" id="password" placeholder="رمز عبور " />
                            </div>
                            {
                                errorMessages.password ?
                                    (
                                        <p className="text-red-500 text-sm pt-2">{FieldsLabel.password} {errorMessages.password} </p>
                                    )
                                    :
                                    (
                                        <p></p>
                                    )
                            }
                        </div>
                        {
                            alarmShow ?
                                (
                                    <Button variant="secondary" className="py-2! mt-5 w-full rounded-2xl cursor-not-allowed">
                                        ورود
                                    </Button>
                                ) :
                                (
                                    <Button onClick={handleClickButton} variant="primary" className="py-2! mt-5 cursor-pointer w-full rounded-2xl">
                                        ورود
                                    </Button>
                                )
                        }

                    </div>


                </div>
            </div >
        </>
    )
}