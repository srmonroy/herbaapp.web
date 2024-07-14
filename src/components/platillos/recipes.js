import organicImage from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cutting.jpeg';
import veggImage from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cutting.jpeg';
import gfreeImage from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cutting.jpeg';

const posts = [
  {
    title: 'Desayunos',
    href: '/platillos/desayunos',
    category: { name: 'Seccion Mix de Frutas', href: '#' },
    description: 'Diseñados para comenzar tu día con energía y bienestar. Encontrarás una variedad de elecciones nutritivas y deliciosas, elaboradas con ingredientes frescos y naturales.',
    imageUrl: organicImage,
  },
  {
    title: 'Comida Mexicana',
    href: '/platillos/c_mexicana',
    category: { name: 'Sección de Tacos', href: '#' },
    description: 'Sumérgete en nuestra sección de comida mexicana, donde celebramos la rica tradición culinaria de México con platillos auténticos y sabores vibrantes.',
    imageUrl: veggImage,
  },
  {
    title: 'Comida Rápida',
    href: '/platillos/fast_food',
    category: { name: 'Burritos y más', href: '#' },
    description: 'Ofrecemos opciones deliciosas y rápidas para satisfacer tus antojos. Cada platillo está diseñado para ofrecerte conveniencia sin comprometer la calidad ni el sabor.',
    imageUrl: gfreeImage,
  },
];

export default function Recipes() {
  return (
    <div className="relative bg-blue-botton px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 rounded-b-xl">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Nuestros Platillos</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4">
            Cada platillo ha sido cuidadosamente creado para ofrecer una experiencia deliciosa y única, libre de productos animales y repleta de ingredientes frescos y naturales.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl"
            >
              <div className="flex-shrink-0">
                <img className="h-full w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-2 text-md text-gray-600">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-around">
                  <button
                    className="rounded-full bg-blue-botton text-white px-4 py-2 hover:bg-[#a0e32d] focus:outline-none focus:bg-green-700"
                    onClick={() => window.location.href = post.href}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}