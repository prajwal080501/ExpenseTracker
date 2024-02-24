const Card = ({ title, image }) => {
    return (
        <div className="w-1/2 hover:scale-105 hover:opacity-70 duration-200 cursor-pointer bg-white h-fit px-4 py-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
                <img src={image} alt={title} className="w-36 h-36 mx-auto" />
            </div>
            <div className="mt-5">
                <p className="font-extrabold text-2xl text-center">{title}</p>
            </div>
        </div>
    )
}

export default Card;