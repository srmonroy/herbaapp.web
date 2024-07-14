import Cta from "components/Home/cta";
import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import PrivacyPolicyPage from "components/navigation/policy";
import WhatsAppCTA from "components/nosotros/cta_what";
import Layout from "hocs/layouts/layout";

function PolicyPage(){
    return(

        <><div>
            <Layout/>,
            <Navbar/>,
            <PrivacyPolicyPage />,
        </div>
        <Footer /></>
    )
}
export default PolicyPage