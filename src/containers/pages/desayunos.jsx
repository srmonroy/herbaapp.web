import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Header from "components/desayunos/header"
import Layout from "hocs/layouts/layout"
import Recipes from "components/desayunos/recipes"
import Cta from "components/Home/cta"
import WhatsAppCTA from "components/nosotros/cta_what"

function Desayunos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
            <Header/>
            <Recipes/>
            <WhatsAppCTA/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Desayunos