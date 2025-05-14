// pages/faq.js
import { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestion, setOpenQuestion] = useState(null);
  
  const categories = [
    { id: 'general', name: 'Ogólne' },
    { id: 'tax', name: 'Mechanizm podatkowy' },
    { id: 'legal', name: 'Aspekty prawne' },
    { id: 'medical', name: 'Kwestie medyczne' },
    { id: 'implementation', name: 'Wdrożenie' },
  ];
  
  const faqItems = [
    {
      id: 1,
      question: 'Czy AboTax to kara dla kobiet?',
      answer: 'Nie, to mechanizm odpowiedzialności dla obu płci. Mężczyźni również ponoszą konsekwencje (+5% w małżeństwie, trwała blokada ulg przy porzuceniu ciężarnej, +10% przez 18 lat jako odpowiednik alimentów).',
      category: 'general',
    },
    {
      id: 2,
      question: 'Czy osoby biedne nie będą pokrzywdzone?',
      answer: 'AboTax przewiduje mechanizm odroczonej płatności dla osób o niskich dochodach, studentów i niepełnoletnich. System umożliwia wybór okresu, kiedy podatek będzie aktywowany (np. po znalezieniu pracy).',
      category: 'tax',
    },
    {
      id: 3,
      question: 'Jak odróżnić poronienie od aborcji?',
      answer: 'Lekarz ginekolog wystawia zaświadczenie o naturalnym poronieniu, które zwalnia z konsekwencji podatkowych. Stosuje się zasadę domniemania niewinności - w razie wątpliwości uznaje się, że doszło do naturalnego poronienia.',
      category: 'medical',
    },
    {
      id: 4,
      question: 'Jak wpłynie to na domy dziecka?',
      answer: 'Dzięki znaczącemu dofinansowaniu (0,5-0,7 mld zł rocznie) standard placówek powinien znacząco wzrosnąć: mniejsze grupy, lepiej opłacani opiekunowie, programy psychologiczne i edukacyjne.',
      category: 'implementation',
    },
    {
      id: 5,
      question: 'Czy to narusza prawa reprodukcyjne?',
      answer: 'AboTax nie zakazuje aborcji, lecz wprowadza ekonomiczne konsekwencje. Kobieta nadal ma pełne prawo do decyzji o swoim ciele, ale decyzja ta wiąże się z finansową odpowiedzialnością.',
      category: 'legal',
    },
    {
      id: 6,
      question: 'Co z przypadkami, gdy kobieta nie wiedziała o ciąży?',
      answer: 'System zakłada obowiązkową rejestrację ciąży w ramach standardowej opieki zdrowotnej. Jeśli kobieta nie wiedziała o ciąży i doszło do samoistnego poronienia bez jej wiedzy, żadne konsekwencje podatkowe nie będą stosowane.',
      category: 'medical',
    },
    {
      id: 7,
      question: 'Jak system poradzi sobie z szarą strefą aborcyjną?',
      answer: 'System nie eliminuje całkowicie szarej strefy, ale zmniejsza jej atrakcyjność przez legalizację procedury z jasnymi konsekwencjami podatkowymi. Ponadto, podobnie jak przy innych oszustwach podatkowych, istniałyby mechanizmy kontroli i weryfikacji.',
      category: 'implementation',
    },
    {
      id: 8,
      question: 'Czy AboTax jest zgodny z konstytucją?',
      answer: 'Projekt wymagałby dokładnej analizy konstytucyjnej. Ingeruje on w sferę praw i wolności osobistych, ale nie zakazuje aborcji, a jedynie nakłada na nią opłatę o charakterze podatkowym, co mieści się w kompetencjach regulacyjnych państwa.',
      category: 'legal',
    },
    {
      id: 9,
      question: 'Jak wpłynie na demografię?',
      answer: 'Szacuje się, że AboTax mógłby zmniejszyć liczbę aborcji o około 40%, co przełożyłoby się na około 20 tysięcy więcej urodzeń rocznie. Część tych dzieci trafiłaby do domów dziecka, ale generalnie przyczyniłoby się to do poprawy sytuacji demograficznej.',
      category: 'general',
    },
    {
      id: 10,
      question: 'Jak będzie weryfikowana skuteczność systemu?',
      answer: 'System zakłada regularne badania statystyczne dotyczące liczby aborcji, liczby urodzeń, jakości życia w domach dziecka oraz satysfakcji obywateli. Na podstawie tych danych można byłoby modyfikować parametry systemu.',
      category: 'implementation',
    },
    {
      id: 11,
      question: 'Co z osobami mieszkającymi za granicą, ale będącymi obywatelami Polski?',
      answer: 'Obywatele Polski mieszkający na stałe za granicą, którzy nie podlegają polskiemu systemowi podatkowemu, nie byliby objęci systemem AboTax. System dotyczy tylko osób rozliczających się w polskim systemie podatkowym.',
      category: 'legal',
    },
    {
      id: 12,
      question: 'Jak AboTax odnosi się do kwestii antykoncepcji?',
      answer: 'AboTax zachęca do odpowiedzialnego planowania rodziny i stosowania antykoncepcji, aby unikać niechcianych ciąż. System mógłby nawet zawierać dodatkowe mechanizmy ułatwiające dostęp do środków antykoncepcyjnych jako formę prewencji.',
      category: 'general',
    },
    {
      id: 13,
      question: 'Czy można jednocześnie płacić AboTax i otrzymywać 800+?',
      answer: 'Tak, oba systemy mogłyby funkcjonować równolegle. AboTax to system podatkowy, natomiast 800+ to świadczenie społeczne. Docelowo jednak AboTax mógłby zastąpić 800+ jako bardziej efektywny system wsparcia rodzin i dzieci.',
      category: 'tax',
    },
    {
      id: 14,
      question: 'Czy w przypadku ciąży mnogiej ulgi/kary są zwielokrotnione?',
      answer: 'Tak, zarówno ulgi jak i kary są liczone od liczby dzieci/płodów. W przypadku ciąży mnogiej, gdzie dokonano selektywnej aborcji jednego z płodów, kary dotyczą tylko usuniętego płodu, a ulgi przysługują za urodzone dziecko/dzieci.',
      category: 'tax',
    },
    {
      id: 15,
      question: 'Czy przewiduje się konsultacje społeczne przed wdrożeniem?',
      answer: 'Zdecydowanie tak. AboTax jest propozycją, która wymaga szerokiej debaty społecznej, konsultacji z ekspertami z różnych dziedzin (prawa, ekonomii, medycyny, etyki) oraz dyskusji parlamentarnej przed jakimkolwiek wdrożeniem.',
      category: 'implementation',
    },
  ];
  
  const filteredFAQItems = faqItems.filter(item => item.category === activeCategory);
  
  const toggleQuestion = (id) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
  };
  
  return (
    <Layout title="FAQ - Najczęściej zadawane pytania o AboTax">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Najczęściej Zadawane Pytania
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Odpowiedzi na najczęstsze pytania i wątpliwości dotyczące projektu AboTax
          </motion.p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex overflow-x-auto mb-10 pb-2 hide-scrollbar">
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-colors duration-300 ${
                    activeCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredFAQItems.map(item => (
              <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(item.id)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      openQuestion === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestion === item.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Ask Your Own Question */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Nie znalazłeś odpowiedzi na swoje pytanie?</h3>
            <form className="max-w-2xl mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Twoje imię"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Twój email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
                  Twoje pytanie
                </label>
                <textarea
                  id="question"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Wpisz swoje pytanie..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300"
                >
                  Wyślij pytanie
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}