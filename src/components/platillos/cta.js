
export default function Cta() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Tienes hambre?</span>
                    <span className="block text-blue-botton">Ordena tu primer platillo</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="/platillos"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-botton px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                        >
                            Ordenar en CDMX
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            Mas Información
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}