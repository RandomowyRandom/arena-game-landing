function FAQ() {
  return (
    <div>
      <div className="h-96"></div>

      <div className="mb-14 ml-24 text-left text-gray-600">
        <p className="text-5xl font-bold">
          Czy mój kot zostanie dostarczony pocztą?
        </p>
        <p className="ml-6 mt-6 text-3xl">
          Nie, koty wysyłamy kurierem InPost.
        </p>
      </div>

      <div className="ml-24 mb-14 text-left text-gray-600">
        <p className="text-5xl font-bold">Czy wnuczkowi spodoba się kotek?</p>
        <p className="ml-6 mt-6 text-3xl">
          Tak, kotek z pewnością spodoba sie wnuczkom :)
        </p>
      </div>

      <div className="ml-24 mb-14 text-left text-gray-600">
        <p className="text-5xl font-bold">
          Czy oferujecie zwroty wadliwego kota?
        </p>
        <p className="ml-6 mt-6 text-3xl">
          Na każdego kota udzielamy dwa tygodnie gwarancji rozruchowej :)
        </p>
      </div>
      <div className="absolute bottom-0 right-0 mr-6 mb-6 w-40 text-right text-xl text-gray-600">
        <p className="text-3xl font-bold">Autorzy</p>
        <hr className="my-2 ml-0 h-1 w-40 rounded border-0 bg-gray-500" />
        <p>Dominik Konik</p>
        <p>Dawid Pytel</p>
      </div>
    </div>
  );
}

export default FAQ;
