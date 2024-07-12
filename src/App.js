import store from "./store";
import { Provider } from "react-redux";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nosotros from "containers/pages/nosotros";
import Platillos from "containers/pages/bebidas";
import Bebidas from "containers/pages/platillos";


function App() {
  return (
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
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
