import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import lettuce_logo from "assets/images/lettuce.png";
import veggi_gif from "assets/images/vegetable.gif";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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

    return (
        <nav id='navbar' className="w-full py-4 top-0 fixed bg-white shadow-navbar transition duration-300 ease-in-out z-50 shadow-md">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to='/' className="flex-shrink-0">
                    <img
                        src={lettuce_logo}
                        width={30}
                        height={40}
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
                <div className={`md:flex md:items-center md:justify-between ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
                    <div className="ml-4 mt-2 flex flex-col md:flex-row md:items-center md:space-x-6">
                        <NavLink to='/nosotros' className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Sobre Nosotros</NavLink>
                        <NavLink to='/platillos' className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Platillos</NavLink>
                        <NavLink to='/bebidas' className="text-lg font-medium leading-6 text-gray-900 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-600 transition duration-300 ease-in-out mx-2 md:mx-0">Bebidas y Snacks</NavLink>
                        <Link
                            to="/platillos"
                            className="mt-2 md:mt-0 md:ml-12 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                        >
                            Ordenar
                            <img src={veggi_gif} className="w-6 h-6 ml-2" alt="Vegetable GIF" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Navbar);

