const Section = ({ children, title, className }) => {
    return (
        <section className={`w-full h-full ${className}`}>
            <div className="max-w-7xl mx-auto p-5">
                <div className="w-full h-full">
                    <p className="text-5xl underline decoration-blue-600 decoration-8 font-extrabold text-black">
                        {title}
                    </p>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section;