import Header from "components/bebidas/header"
import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

function Bebidas(){
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

export default Bebidas