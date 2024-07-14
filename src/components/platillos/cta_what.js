import what_logo from 'assets/images/whatsapp.png'
export default function WhatsAppCTA() {
    return (
      <div className="bg-green-lettuce py-8 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">¿Tienes alguna pregunta?</h2>
          <p className="mt-4 text-xl text-gray-700">
            Estamos aquí para ayudarte. ¡Inicia un chat con nosotros en WhatsApp!
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/5538350910"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-botton px-5 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:bg-green-800 transition duration-300"
            >
              <img src={what_logo} className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              </img>
              Inicia Chat
            </a>
          </div>
        </div>
      </div>
    );
  }
  