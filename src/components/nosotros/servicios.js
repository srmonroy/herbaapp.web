import deliveryIcon from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/box.png';
import recipeIcon from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/vegetables.png';
import mealPlanIcon from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/cooking.png';

const services = [
  {
    title: 'Entrega a Domicilio',
    description: 'Disfruta de nuestros platillos saludables y deliciosos desde la comodidad de tu hogar. Ofrecemos entrega rápida y segura en la Ciudad de México (Validar Zonas).',
    benefits: 'Comodidad, rapidez y la tranquilidad de saber que estás comiendo de manera saludable y ética.',
    steps: [
      'Elige tus platillos favoritos en nuestra aplicación.',
      'Realiza tu pedido y selecciona la hora de entrega.',
      'Disfruta de una comida deliciosa entregada directamente a tu puerta.'
    ],
    icon: deliveryIcon
  },
  {
    title: 'Recetas Detalladas',
    description: 'Para aquellos que prefieren cocinar en casa, ofrecemos recetas detalladas paso a paso que te guiarán en la preparación de nuestros platillos.',
    benefits: 'Aprende nuevas técnicas culinarias, explora ingredientes frescos y naturales, y disfruta del placer de cocinar.',
    steps: [
      'Navega por nuestras recetas en la aplicación.',
      'Sigue las instrucciones detalladas y nuestros consejos .',
      'Comparte tus creaciones con nuestra comunidad.'
    ],
    icon: recipeIcon
  },
  {
    title: 'Planes de Comidas Personalizados',
    description: 'Te ayudamos a mantener una dieta equilibrada y saludable con nuestros planes de comidas personalizados, adaptados a tus necesidades y objetivos.',
    benefits: 'Obtén un plan de comidas nutritivo y delicioso, diseñado para tu estilo de vida.',
    steps: [
      'Completa un breve cuestionario sobre tus preferencias y objetivos alimenticios.',
      'Recibe un plan de comidas personalizado cada semana.',
      'Disfruta de platillos variados y balanceados que se ajustan a tus necesidades.'
    ],
    icon: mealPlanIcon
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 bg-green-lettuce rounded-3xl">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Nuestros Servicios</h2>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center mb-4">
                <img src={service.icon} alt={service.title} className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-2">{service.title}</h3>
              <p className="text-gray-700 text-center mb-4">{service.description}</p>
              <h4 className="text-lg font-medium text-grau-900 mb-2">Beneficios</h4>
              <p className="text-gray-700 mb-4">{service.benefits}</p>
              <h4 className="text-lg font-medium text-blue-botton mb-2">Cómo Funciona</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {service.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
