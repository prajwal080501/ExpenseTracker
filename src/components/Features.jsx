import { features } from "../constants/data";
import Card from "./Card";

const Features = () => {
    return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center space-x-6">
            {
                features.map((feature)=>{
                    <Card key={feature.id} title={feature.title} />
                })
            }
        </div>
    )
}

export default Features;