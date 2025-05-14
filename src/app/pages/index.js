// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>AboTax - Ekonomiczne rozwiązanie polaryzującego sporu społecznego</title>
        <meta name="description" content="AboTax to propozycja rozwiązania problemu polaryzacji społecznej wokół tematu aborcji w Polsce poprzez system ekonomiczno-podatkowy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                AboTax
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ekonomiczne rozwiązanie polaryzującego sporu społecznego
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/mechanism" passHref>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 mr-4">
                    Poznaj propozycję
                  </button>
                </Link>
                <Link href="/support" passHref>
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
                    Popieram
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-64 h-64 md:w-80 md:h-80"
              >
                <Image 
                  src="/images/logo.png" 
                  alt="Logo AboTax - waga sprawiedliwości symbolizująca równowagę pomiędzy prawami kobiet i ochroną życia"
                  width={300}
                  height={300}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Problem section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Polski spór o aborcję - dwie skrajności bez rozwiązania</h2>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  Obecna sytuacja w Polsce jest niesatysfakcjonująca dla wszystkich stron. Mimo zaostrzenia prawa w 2020 r., aborcja nadal istnieje w podziemiu i za granicą (szacunkowo 50 tys. rocznie).
                </p>
                <p className="text-lg mb-6">
                  Rozczarowanie polityczne dotyczy wszystkich stron - obietnice liberalizacji prawa aborcyjnego pozostają niespełnione, a obecne regulacje nie są skutecznie egzekwowane.
                </p>
                <p className="text-lg">
                  Zarówno środowiska pro-choice jak i pro-life dostrzegają niedoskonałości obecnego systemu. Rośnie polaryzacja społeczna, która dzieli Polaków.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="Grafika ilustrująca polaryzację społeczną w Polsce"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main assumptions section */}
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">AboTax: Ekonomiczne podejście do trudnego problemu</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Legalna, ale opodatkowana aborcja</h3>
                <p className="text-gray-600">
                  Aborcja pozostaje legalna, ale wiąże się z dodatkowymi opłatami podatkowymi, traktując przerwanie ciąży jako stratę potencjalnego obywatela.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">System ulg za wychowywanie dzieci</h3>
                <p className="text-gray-600">
                  2% obniżki podatku za każde żyjące dziecko, zachęcające do posiadania potomstwa i premiujące małżeństwo jako stabilną formę rodziny.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-amber-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Lepsze finansowanie domów dziecka</h3>
                <p className="text-gray-600">
                  Środki z podatku aborcyjnego trafiają do placówek opiekuńczych, podnosząc jakość życia dzieci i tworząc realną alternatywę dla aborcji.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Odpowiedzialność kobiet i mężczyzn</h3>
                <p className="text-gray-600">
                  System uwzględnia odpowiedzialność obu płci, nakładając konsekwencje również na mężczyzn porzucających ciężarne partnerki.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/mechanism" passHref>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
                  Jak AboTax proponuje rozwiązanie?
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Korzyści dla różnych grup</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Women */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Dla kobiet</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Zachowanie prawa wyboru z odpowiedzialnością</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bezpieczny dostęp do procedur medycznych</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Realna alternatywa (oddanie dziecka do dobrze finansowanej placówki)</span>
                  </li>
                </ul>
              </div>

              {/* Children */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Dla dzieci</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Lepsze warunki w domach dziecka</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Zwiększone szanse na przeżycie</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Więcej środków na opiekę i programy rozwojowe</span>
                  </li>
                </ul>
              </div>

              {/* Society */}
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Dla społeczeństwa</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Zmniejszenie polaryzacji społecznej</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Przejrzysty system podatkowy zamiast kryminalizacji</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mniej nielegalnych procedur, większe bezpieczeństwo zdrowotne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expert opinions section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Co mówią eksperci?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Expert card - placeholder */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold text-lg">Dr hab. Anna Kowalska</h3>
                    <p className="text-gray-600">Ekonomistka, Uniwersytet Warszawski</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  "System AboTax to innowacyjne podejście ekonomiczne, które może znacząco zmniejszyć polaryzację społeczną, jednocześnie szanując podstawowe prawa jednostki."
                </blockquote>
              </div>

              {/* Expert card - placeholder */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-bold text-lg">Prof. Jan Nowak</h3>
                    <p className="text-gray-600">Etyk społeczny, Uniwersytet Jagielloński</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  "Propozycja AboTax przenosi debatę z płaszczyzny stricte moralnej na ekonomiczną, co może pomóc zbudować przestrzeń do dialogu między skrajnymi stanowiskami."
                </blockquote>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/contact" passHref>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
                  Dołącz do dyskusji
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Support counter section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-8">Poparcie dla projektu AboTax</h2>
            <div className="text-6xl font-bold mb-10">10,467</div>
            <p className="text-xl mb-8">osób już poparło naszą inicjatywę</p>
            <Link href="/support" passHref>
              <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300">
                Dołącz do nas
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}