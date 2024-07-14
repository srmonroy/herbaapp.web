import store from "./store";
import { Provider } from "react-redux";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nosotros from "containers/pages/nosotros";
import Platillos from "containers/pages/bebidas";
import Bebidas from "containers/pages/platillos";
import Desayunos from "containers/pages/desayunos";
import c_Mexicana from "containers/pages/c_mexicana";
import C_mexicana from "containers/pages/c_mexicana";
import FastFood from "containers/pages/fast_food";
import PrivacyPolicyPage from "components/navigation/policy";
import Policy from "containers/pages/privacyPolicy";
import PolicyPage from "containers/pages/privacyPolicy";
import servicios from "containers/pages/servicios";
import Servicios from "containers/pages/servicios";
import Contacto from "containers/pages/contacto";
import { Helmet, HelmetProvider } from "react-helmet-async";


function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Herba| Cocina Conciente</title>
        <meta name="description" content="Cocina Vegana coneciente | Entregamos amor en CDMX y compartimos recetas exquisitas " />
        <meta name="keywords" content="Comida vegana, cocina conciente, recetas, vegetales" />
        <meta name="robots" content="all"/>
        <link rel="" />
      </Helmet>
        <Provider store={store}>

<Router>

  <Routes>
    {/*Error Display*/}
    <Route path="*" element={<Error404 />} />

    {/*Home Display*/}
    <Route path="/" element={<Home />} />
    <Route path="/nosotros" element={<Nosotros/>} />
    <Route path="/platillos" element={<Bebidas/>} />
    <Route path="/bebidas" element={<Platillos/>} />
    <Route path="/platillos/Desayunos" element={<Desayunos/>} />
    <Route path="/platillos/c_mexicana" element={<C_mexicana/>} />
    <Route path="/platillos/fast_food" element={<FastFood/>} />
    <Route path="/privacy_policy" element={<PolicyPage/>} />
    <Route path="/servicios" element={<Servicios/>} />
    <Route path="/contacto" element={<Contacto/>} />
  </Routes>
</Router>
</Provider>
    </HelmetProvider>
  );
}

export default App;
