import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Header from "components/c_mexicana/header"
import Layout from "hocs/layouts/layout"
import Recipes from "components/c_mexicana/recipes"
import WhatsAppCTA from "components/nosotros/cta_what"

function C_mexicana(){
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

export default C_mexicana