// components/ComparativeTable.js
import { useState } from 'react';

export default function ComparativeTable() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Wszystkie aspekty' },
    { id: 'legal', name: 'Aspekty prawne' },
    { id: 'social', name: 'Aspekty społeczne' },
    { id: 'economic', name: 'Aspekty ekonomiczne' },
    { id: 'medical', name: 'Aspekty medyczne' },
  ];
  
  const comparisons = [
    {
      aspect: 'Legalność aborcji',
      proLife: 'Nielegalna (z wyjątkami)',
      proChoice: 'Legalna, refundowana',
      aboTax: 'Legalna, ale obciążona podatkiem w przypadku decyzji "na życzenie"',
      category: 'legal'
    },
    {
      aspect: 'Społeczny efekt zakazu/dostępności',
      proLife: 'Zakaz nie eliminuje aborcji, tylko przenosi ją do podziemia',
      proChoice: 'Liberalizacja prowadzi do wzrostu liczby aborcji jako metody antykoncepcyjnej',
      aboTax: 'Wprowadzenie kosztu redukuje liczbę aborcji, ale nie odbiera wolności wyboru',
      category: 'social'
    },
    {
      aspect: 'Bezpieczeństwo kobiet',
      proLife: 'Nielegalne aborcje zwiększają ryzyko zdrowotne',
      proChoice: 'Bezpieczeństwo medyczne zapewnione, ale brak refleksji społecznej',
      aboTax: 'Kobiety mają wybór, ale świadomość konsekwencji ekonomicznych',
      category: 'medical'
    },
    {
      aspect: 'Wpływ na dzietność',
      proLife: 'Nie ma wpływu na zwiększenie dzietności – liczba aborcji rośnie mimo zakazu',
      proChoice: 'Dzietność drastycznie spada, traktowanie dziecka jako przeszkody',
      aboTax: 'Dzietność stabilizuje się, bo system zachęt ekonomicznych równoważy decyzje',
      category: 'social'
    },
    {
      aspect: 'Wpływ na społeczeństwo',
      proLife: 'Silna polaryzacja społeczna, napięcia, protesty',
      proChoice: 'Brak zachęt do rodzicielstwa, rozluźnienie więzi społecznych',
      aboTax: 'Społeczeństwo szanuje życie, bo każda decyzja niesie za sobą koszt',
      category: 'social'
    },
    {
      aspect: 'Kwestia eugeniczna',
      proLife: 'Nie ma regulacji – aborcja w podziemiu często odbywa się z powodów ekonomicznych lub selekcyjnych',
      proChoice: 'Selekcja eugeniczna (np. aborcja dzieci z wadami) staje się społecznie akceptowana',
      aboTax: 'Redukuje aborcje eugeniczne – decyzje przestają być "łatwe" finansowo',
      category: 'social'
    },
    {
      aspect: 'Mechanizm kontrolny',
      proLife: 'Kryminalizacja i represje, słaby nadzór nad rzeczywistą liczbą aborcji',
      proChoice: 'Brak regulacji – aborcja traktowana jak każda inna procedura medyczna',
      aboTax: 'Automatyczne rozliczenia przez system podatkowy, brak kryminalizacji',
      category: 'legal'
    },
    {
      aspect: 'Konsekwencje psychologiczne dla kobiet po aborcji',
      proLife: 'Psychologiczny efekt ukrywania aborcji, brak wsparcia poaborcyjnego',
      proChoice: 'Psychologiczne skutki ignorowane – normalizacja może zwiększać poczucie winy, nasilać depresje poaborcyjną',
      aboTax: 'Podatek aborcyjny daje poczucie rekompensaty dla "innego życia" – zmniejsza psychologiczny ciężar',
      category: 'medical'
    },
    {
      aspect: 'Konsekwencje dla ojca dziecka',
      proLife: 'Ojciec nie ma żadnego wpływu na decyzję, ale jeśli dziecko się urodzi, może zostać obciążony alimentami',
      proChoice: 'Ojciec nie ma żadnych praw do decyzji – kobieta może przerwać ciążę niezależnie od jego opinii',
      aboTax: 'Ojciec może ponosić część kosztów, otrzymać rekompensatę przy aborcji wbrew jego woli, a jeśli porzuci partnerkę - płaci dodatkowy podatek',
      category: 'legal'
    },
    {
      aspect: 'Koszty sądowe i administracyjne',
      proLife: 'Bardzo wysokie – sprawy karne o aborcję, długie procesy o alimenty',
      proChoice: 'Publiczne pieniądze są wydawane na kampanie proaborcyjne oraz finansowanie aborcji',
      aboTax: 'Obniża koszty biurokracji – brak procesów sądowych o alimenty, bo system automatycznie pobiera podatek',
      category: 'economic'
    },
    {
      aspect: 'Definicja życia',
      proLife: 'Życie zaczyna się od poczęcia i ma wartość absolutną, niezależną od warunków zewnętrznych',
      proChoice: 'Życie zaczyna się dopiero po narodzinach lub w późnym stadium ciąży',
      aboTax: 'Życie nienarodzone to potencjalne życie, ale nie jedno konkretne - jego tożsamość kształtuje się w procesie życia',
      category: 'social'
    },
    {
      aspect: 'Moralność aborcji',
      proLife: 'Zawsze niemoralna – aborcja jest równoznaczna z zabiciem osoby ludzkiej',
      proChoice: 'Nie ma moralnego ciężaru – decyzja należy wyłącznie do kobiety',
      aboTax: 'Aborcja ma konsekwencje, ale państwo nie ocenia moralnie – obciąża ją finansowo, by podkreślić wartość życia',
      category: 'social'
    },
    {
      aspect: 'Los dzieci w domach dziecka',
      proLife: 'Nakazuje rodzenie wszystkich dzieci, ale nie zapewnia im odpowiednich warunków po urodzeniu',
      proChoice: 'W ogóle nie daje dzieciom szansy na życie, nawet jeśli mogłyby odnaleźć sens i szczęście',
      aboTax: 'Podnosi standard domów dziecka, finansując je z opłat aborcyjnych oraz ulg podatkowych',
      category: 'economic'
    },
  ];
  
  // Filter comparisons based on selected category
  const filteredComparisons = selectedCategory === 'all'
    ? comparisons
    : comparisons.filter(comp => comp.category === selectedCategory);
  
  return (
    <div className="overflow-x-auto">
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="rounded-lg overflow-hidden shadow-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="px-4 py-3 text-left font-semibold w-1/4">Aspekt</th>
              <th className="px-4 py-3 text-left font-semibold w-1/4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Pro-Life (Zakaz aborcji)
                </div>
              </th>
              <th className="px-4 py-3 text-left font-semibold w-1/4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Pro-Choice (Pełna legalność)
                </div>
              </th>
              <th className="px-4 py-3 text-left font-semibold w-1/4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  AboTax (System podatkowy)
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredComparisons.map((comparison, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-4 font-medium border-b border-gray-200">{comparison.aspect}</td>
                <td className="px-4 py-4 text-sm border-b border-gray-200 bg-red-50">{comparison.proLife}</td>
                <td className="px-4 py-4 text-sm border-b border-gray-200 bg-blue-50">{comparison.proChoice}</td>
                <td className="px-4 py-4 text-sm border-b border-gray-200 bg-green-50">{comparison.aboTax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}