import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Header from "components/fast_food/header"
import Layout from "hocs/layouts/layout"
import Recipes from "components/fast_food/recipes"
import WhatsAppCTA from "components/nosotros/cta_what"

function FastFood(){
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

export default FastFood