interface Container{
    children:React.ReactNode
}
export default function Container({children}:Container) {
    return (
       <div className="px-4 lg:px-10 md:px-6 w-full h-full">
        {
            children
        }
       </div>
    )
}