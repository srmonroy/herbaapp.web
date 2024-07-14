import Features from "components/Home/features";
import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import WhatsAppCTA from "components/nosotros/cta_what";
import Header from "components/nosotros/header";
import Services from "components/nosotros/servicios";
import Layout from "hocs/layouts/layout";


function Servicios(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-24"> 
                <Header/>
                <Services/>
                <WhatsAppCTA/>
                <Features/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Servicios