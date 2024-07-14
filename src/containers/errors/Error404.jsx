function Error404() {
  return (
    <div>
      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-blue-botton">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">Seguimos trabajando.</p>

          <a
            href="/"
            className="mt-6 inline-block rounded bg-[#a0e32d] px-5 py-3 text-sm font-medium text-black hover:bg-[#a0e32d] focus:outline-none focus:ring"
          >
            Regresar al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Error404;
