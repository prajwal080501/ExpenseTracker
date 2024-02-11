const Card = ({ title }) => {
    return (
        <div className="w-fit bg-white h-fit px-4 py-6 rounded-lg shadow-lg">
            <div>
                image
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Card;