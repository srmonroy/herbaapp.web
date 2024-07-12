import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Header from "components/nosotros/header"
import Layout from "hocs/layouts/layout"

function Nosotros(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24">
            <Header/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Nosotros