import Cta from "components/Home/cta"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Header from "components/platillos/header"
import Layout from "hocs/layouts/layout"
import Recepies2 from 'components/platillos/recipes'
import Features from "components/Home/features"
import Services from "components/platillos/servicios"
import FAQ from "components/nosotros/faq"
import WhatsAppCTA from "components/nosotros/cta_what"
import Recipes from "components/platillos/recipes"

function Platillos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
                <Header/>
                <Recipes/>
                <Features/>
                <Services/>
                <WhatsAppCTA/>
                <FAQ/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Platillos