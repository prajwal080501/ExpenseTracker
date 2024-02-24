import Features from "../components/Features";
import Hero from "../components/Hero";
import Section from "../components/common/Section";

function LandingPage() {
    return (
        <div className="w-full h-screen">
            <div className="h-full">
                <Hero />
            </div>
            {/* <Section className="bg-gray-100 w-full h-screen" title={'Features'}>
                <Features />
            </Section> */}
        </div>
    )
}

export default LandingPage;