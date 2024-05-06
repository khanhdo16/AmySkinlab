import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import Locations from "@/components/Home/Locations";
import MainSlider from "@/components/Home/MainSlider";
import ResultGallery from "@/components/Home/ResultGallery";
import Services from "@/components/Home/Services";

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen max-w-my-screen flex-col items-center p-primary-mobile pt-0 lg:p-primary lg:pt-0">
            <MainSlider />
            <Services />
            <Blog />
            <ResultGallery />
            <About />
            <Locations />
        </main>
    );
}
