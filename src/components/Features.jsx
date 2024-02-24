import { features } from "../constants/data";
import Card from "./Card";

const Features = () => {
    return (
        <div className="w-full h-full bg-red-100 mt-10 flex items-center justify-center space-x-6">
            <div className="flex p-4 space-x-5 justify-evenly">
                {
                    features.map((feature) => {
                        return <Card key={feature.id} image={feature?.image} title={feature.title} />
                    })
                }
            </div>
        </div>
    )
}

export default Features;