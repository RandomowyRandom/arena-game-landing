import AnimatedText from 'react-animated-text-content';
function FAQ() {
  return (
    <div>
      <div className="h-96"></div>

      <div className="mb-14 ml-24 text-left text-gray-600">
        <p className="text-5xl font-bold">
          <AnimatedText
            type="chars"
            interval={0.05}
            duration={0.6}
            animation={{
              y: '100px',
              ease: 'ease',
            }}
          >
            Czy mój kot zostanie dostarczony pocztą?
          </AnimatedText>
        </p>
        <p className="ml-6 mt-6 text-3xl">
          <AnimatedText
            type="chars"
            interval={0.05}
            duration={0.6}
            animation={{
              y: '100px',
              ease: 'ease',
            }}
          >
            Nie, koty wysyłamy kurierem InPost.
          </AnimatedText>
        </p>
      </div>

      <div className="ml-24 mb-14 text-left text-gray-600">
        <p className="text-5xl font-bold">
          <AnimatedText
            type="chars"
            interval={0.05}
            duration={0.6}
            animation={{
              y: '100px',
              ease: 'ease',
            }}
          >
            Czy wnuczkowi spodoba się kotek?
          </AnimatedText>
        </p>
        <p className="ml-6 mt-6 text-3xl">
          <AnimatedText
            type="chars"
            interval={0.05}
            duration={0.6}
            animation={{
              y: '100px',
              ease: 'ease',
            }}
          >
            Tak, kotek z pewnością spodoba sie wnuczkom :)
          </AnimatedText>
        </p>
      </div>

      <div className="ml-24 mb-14 text-left text-gray-600">
        <p className="text-5xl font-bold">
          <AnimatedText
            type="chars"
            interval={0.05}
            duration={0.6}
            animation={{
              y: '100px',
              ease: 'ease',
            }}
          >
            Czy oferujecie zwroty wadliwego kota?
          </AnimatedText>
        </p>
        <p className="ml-6 mt-6 text-3xl">
          <AnimatedText
            type="chars"
            interval={0.05}
            duration={0.6}
            animation={{
              y: '100px',
              ease: 'ease',
            }}
          >
            Na każdego kota udzielamy dwa tygodnie gwarancji rozruchowej :)
          </AnimatedText>
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
