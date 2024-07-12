import Cta from "components/Home/cta"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Header from "components/platillos/header"
import Layout from "hocs/layouts/layout"
import Recepies2 from 'components/platillos/recipes'
import Features from "components/Home/features"

function Platillos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
                <Header/>
                <Features/>
                <Recepies2/>
                <Cta/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Platillos