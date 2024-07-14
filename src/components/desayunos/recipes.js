import organicImage from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cutting.jpeg';
import veggImage from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cutting.jpeg';
import gfreeImage from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cutting.jpeg';

const posts = [
  {
    title: 'Chilaquiles',
    href: '/platillos/contacto',
    category: { name: 'Ver Receta', href: '#' },
    description: 'Nuestras receta de chilaquiles esta disponibles en versión roja o verde. Están preparados con suadero de soya o champiñones, acompañados de hojas frescas de lechuga o espinacas, y complementados con nuestra crema casera.',
    imageUrl: organicImage,
  },
  {
    title: 'Enfrijoladas con Papa y Tofu a la Mexicana',
    href: '/platillos/contacto',
    category: { name: 'Ver Receta', href: '#' },
    description: 'Nuestras enfrijoladas están rellenas de papa y tofu a la mexicana, envueltas en tortillas suaves y bañadas en una salsa de frijol deliciosa y aromática.  ',
    imageUrl: veggImage,
  },
  {
    title: 'Tofu A la Mexicana',
    href: '/platillos/contacto',
    category: { name: 'Ver Receta', href: '#' },
    description: 'Nuestro tofu a la mexicana está preparado con trozos de tofu marinado y salteado con tomate, cebolla y chile, asi como pimenton y espinacas, sazonado con especias.',
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
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Empieza con Energia</h2>
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
                    onClick={() => window.location.href = '/contacto'}
                  >
                    Hacer un pedido (CDMX)
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