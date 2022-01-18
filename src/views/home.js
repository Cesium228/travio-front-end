import Header from "../components/header";
import Benefits from "../components/benefits";
import CreateOrder from "../components/create-order";
import OurPartners from "../components/our-pertners";
import News from "../components/news";
import Footer from "../components/footer";

function HomePage() {
    return (
        <div className={"page-wrapper"}>
            <Header/>
            <Benefits/>
            <CreateOrder/>
            <OurPartners/>
            <News/>
            <Footer/>
        </div>
    );
}

export default HomePage;