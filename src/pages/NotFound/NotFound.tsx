import NotFound404 from "./../../assets/images/404 Error.svg"
export default function NotFound() {
    return (
        <div className="pt-16 flex flex-col items-center justify-center">
            <img src={NotFound404} alt="NotFound" className="h-1/4 w-1/4" />
            <h1>404 Error</h1>
            <p className="pt-10">صفحه مورد نظر شما یافت نشد</p>
        </div>
    )
}