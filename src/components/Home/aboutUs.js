export default function AboutUs() {
  return (
    <article class="group mx-auto max-w-lg p-1">
      <h1 class="text-4xl p-4 font-bold tracking-tight text-gray-900 text-center">
        ¿Quienes somos?
      </h1>
      <img
        alt=""
        src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[40%] p-2"
      />

      <div class="p-4">
        <a href="/nosotros">
          <h3 class="mx-auto mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4 text-center">Un proyecto de Humanos, para Humanos</h3>
        </a>

        <p class="mt-2 text-md text-gray-600 text-center">
          "En Herba, estamos comprometidos con el respeto a la vida, promoviendo una alimentación saludable y ofreciendo auténticos sabores caseros. Nuestro objetivo es inspirar a más personas a adoptar un estilo de vida saludable y sostenible."
        </p>
      </div>
    </article>

  )
}