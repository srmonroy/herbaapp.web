import Footer from "components/navigation/footer"
import AboutUs from "components/Home/aboutUs"
import Cta from "components/Home/cta"
import Features from "components/Home/features"
import Header from "components/Home/header"
import Incentives from "components/Home/incentives"
import Recipes from "components/Home/recipes"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"
import Services from "components/nosotros/servicios"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
                <Header/>
                <Incentives/>
                <Recipes/>
                <AboutUs/>
                <Services/>
                <Cta/>
                <Features/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home