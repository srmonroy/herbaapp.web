export default function FAQ() {
  const faqs = [
    {
      question: '¿En qué áreas entregan?',
      answer: 'Entregamos nuestros productos únicamente en la Ciudad de México (CDMX) Colonias: Roma, Juarez, San Rafael, Condesa, Polanco, Sta. Ma. La Rivera y sus alrededores.',
      border: 'border-green-lettuce'
    },
    {
      question: '¿Cómo funciona el servicio de entrega?',
      answer: 'Nuestro servicio de entrega está sujeto a disponibilidad y horarios. Te recomendamos revisar la disponibilidad al momento de hacer tu pedido.',
      border: 'border-blue-botton'
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Aceptamos pagos en efectivo y transferencias bancarias. Pronto Aceptaremos tarjetas de debito y Crédito.',
      border: 'border-green-lettuce'
    },
    {
      question: '¿Puedo cancelar mi pedido?',
      answer: 'Sí, puedes cancelar tu pedido hasta una hora antes de la hora programada para la entrega. Contáctanos para realizar la cancelación.',
      border: 'border-blue-botton'
    },
    {
      question: '¿Ofrecen opciones sin gluten?',
      answer: 'Sí, contamos con varias opciones sin gluten en nuestro menú. Puedes filtrarlas en nuestra aplicación para ver todas las opciones disponibles.',
      border: 'border-green-lettuce'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">Preguntas Frecuentes</h2>
        </div>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className={`group border-s-4 ${faq.border} bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden`}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h2>
                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
