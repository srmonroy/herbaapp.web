import { connect } from "react-redux";
import { NavLink, Link, useLocation } from "react-router-dom";
import lettuce_logo from "assets/images/lettuce.png";
import veggi_gif from "assets/images/vegetable.gif";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.onscroll = function() {
      scrollFunction();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  function scrollFunction() {
    if (document.getElementById('navbar')) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbar').classList.add('shadow-navbar');
        document.getElementById('navbar').classList.add('bg-white');
      } else {
        document.getElementById('navbar').classList.remove('shadow-navbar');
        document.getElementById('navbar').classList.remove('bg-white');
      }
    }
  }

  const getMenuClass = (path) => {
    return location.pathname === path
      ? "border-s-[3px] border-blue-500 bg-blue-50 text-blue-700"
      : "border-s-[3px] border-transparent hover:border-gray-100 hover:bg-gray-50";
  };

  return (
    <nav id="navbar" className="w-full py-4 top-0 fixed bg-white shadow-navbar transition duration-300 ease-in-out z-50 shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img
            src={lettuce_logo}
            width={50}
            height={60}
            className=""
            alt="Logo"
          />
        </Link>
        <div className="-mr-2 flex md:hidden">
          <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:justify-between w-full md:w-auto">
          <ul className="ml-4 mt-2 flex flex-col md:flex-row md:items-center md:space-x-6">
          <li>
              <NavLink to="/" className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Herba</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Sobre Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/platillos" className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Platillos y Recetas</NavLink>
            </li>
            <li>
              <NavLink to="/servicios" className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Servicios</NavLink>
            </li>
            <li>
              <Link
                to="/platillos"
                className="mt-2 md:mt-0 md:ml-12 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
              >
                Contáctanos
                <img src={veggi_gif} className="w-6 h-6 ml-2" alt="Vegetable GIF" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} bg-green-lettuce flex flex-col items-center justify-center`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="space-y-8 text-center">
        <li>
            <NavLink to="/" onClick={toggleMenu} className={`flex items-center gap-2 px-4 py-3 text-2xl font-medium ${getMenuClass('/nosotros')}`}>Herba</NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" onClick={toggleMenu} className={`flex items-center gap-2 px-4 py-3 text-2xl font-medium ${getMenuClass('/nosotros')}`}>Sobre Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/platillos" onClick={toggleMenu} className={`flex items-center gap-2 px-4 py-3 text-2xl font-medium ${getMenuClass('/platillos')}`}>Platillos y Recetas</NavLink>
          </li>
          <li>
            <NavLink to="/servicios" onClick={toggleMenu} className={`flex items-center gap-2 px-4 py-3 text-2xl font-medium ${getMenuClass('/servicios')}`}>Servicios</NavLink>
          </li>
          <li>
            <Link to="/contacto" onClick={toggleMenu} className={`flex items-center gap-2 px-4 py-3 text-2xl font-medium ${getMenuClass('/contacto')}`}>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Navbar);
