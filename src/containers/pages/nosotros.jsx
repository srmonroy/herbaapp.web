import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Faq from "components/nosotros/faq"
import Features from "components/nosotros/features"
import Header from "components/nosotros/header"
import Incentives from "components/Home/incentives"
import NuestraHistoria from "components/nosotros/n_historia"
import Mission from "components/nosotros/ourmission"
import Services from "components/nosotros/servicios"
import Servicios from "components/nosotros/servicios"
import Cta from "components/platillos/cta"
import Layout from "hocs/layouts/layout"

function Nosotros(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
            <Header/>
            <NuestraHistoria/>
            <Mission/>
            <Incentives/>
            <Services/>
            <Cta/>
            <Features/>
            <Faq/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Nosotros