// components/TaxCalculator.js
import { useState } from 'react';

export default function TaxCalculator() {
  const [income, setIncome] = useState(6500);
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [children, setChildren] = useState(0);
  const [childrenInOrphanage, setChildrenInOrphanage] = useState(0);
  const [abortionStatus, setAbortionStatus] = useState('none');
  const [abandonedPartner, setAbandonedPartner] = useState(false);
  
  const baseTaxRate = 0.12; // 12% base tax rate
  
  // Calculate tax
  const calculateTax = () => {
    let taxRate = baseTaxRate;
    let taxDiscount = 0;
    let taxPenalty = 0;
    let finalTaxRate = 0;
    
    // Child tax breaks
    if (maritalStatus === 'married') {
      // 2% discount per child for each spouse (calculated as 4% total in simulation)
      taxDiscount += children * 0.04;
      // 1% discount per child in orphanage only for the mother
      taxDiscount += childrenInOrphanage * 0.01;
    } else {
      // 2% discount per child for single parent
      taxDiscount += children * 0.02;
      // 1% discount per child in orphanage
      taxDiscount += childrenInOrphanage * 0.01;
    }
    
    // Abortion penalties
    if (abortionStatus === 'recent') {
      if (maritalStatus === 'married') {
        // +5% for each spouse for 3 years
        taxPenalty += 0.05;
      } else {
        // +10% for single person for 3 years
        taxPenalty += 0.10;
      }
    }
    
    // Abandoned pregnant partner penalty
    if (abandonedPartner) {
      // +5% for abandoning partner (metaphorical abortion)
      // +10% for 18 years for child support (not shown in this base calculation)
      taxPenalty += 0.05;
    }
    
    // Calculate final tax rate
    finalTaxRate = taxRate - taxDiscount + taxPenalty;
    
    // Ensure tax rate doesn't go below 0%
    if (finalTaxRate < 0) finalTaxRate = 0;
    
    return {
      baseAmount: income * taxRate,
      discountAmount: income * taxDiscount,
      penaltyAmount: income * taxPenalty,
      finalAmount: income * finalTaxRate,
      finalTaxRate: finalTaxRate * 100
    };
  };
  
  const taxResults = calculateTax();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-purple-700">Kalkulator AboTax</h3>
      <p className="text-gray-600 mb-6 text-center">
        Sprawdź, jak system AboTax wpłynie na Twoją sytuację podatkową
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <label htmlFor="income" className="block text-gray-700 font-medium mb-2">
              Miesięczne wynagrodzenie brutto (zł)
            </label>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              min="0"
              step="100"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="maritalStatus" className="block text-gray-700 font-medium mb-2">
              Stan cywilny
            </label>
            <select
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="single">Singiel/Singielka</option>
              <option value="married">Małżeństwo</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="children" className="block text-gray-700 font-medium mb-2">
              Liczba wychowywanych dzieci
            </label>
            <input
              type="number"
              id="children"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              min="0"
              max="10"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="childrenInOrphanage" className="block text-gray-700 font-medium mb-2">
              Liczba dzieci oddanych do domu dziecka
            </label>
            <input
              type="number"
              id="childrenInOrphanage"
              value={childrenInOrphanage}
              onChange={(e) => setChildrenInOrphanage(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              min="0"
              max="10"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <label htmlFor="abortionStatus" className="block text-gray-700 font-medium mb-2">
              Status aborcji
            </label>
            <select
              id="abortionStatus"
              value={abortionStatus}
              onChange={(e) => setAbortionStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="none">Brak aborcji</option>
              <option value="recent">Niedawna aborcja (w ciągu ostatnich 3 lat)</option>
            </select>
          </div>
          
          {maritalStatus === 'married' && (
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={abandonedPartner}
                  onChange={(e) => setAbandonedPartner(e.target.checked)}
                  className="h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700">
                  Opuszczenie ciężarnej partnerki
                </span>
              </label>
            </div>
          )}
          
          <div className="mt-14 bg-purple-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-purple-700">Wynik kalkulacji</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Podstawowy podatek (12%):</span>
                <span className="font-medium">{taxResults.baseAmount.toFixed(2)} zł/mies.</span>
              </div>
              <div className="flex justify-between items-center text-green-700">
                <span>Ulgi za dzieci:</span>
                <span className="font-medium">-{taxResults.discountAmount.toFixed(2)} zł/mies.</span>
              </div>
              <div className="flex justify-between items-center text-red-700">
                <span>Dodatkowe opłaty:</span>
                <span className="font-medium">{taxResults.penaltyAmount.toFixed(2)} zł/mies.</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center font-bold">
                <span>Ostateczny podatek ({taxResults.finalTaxRate.toFixed(1)}%):</span>
                <span>{taxResults.finalAmount.toFixed(2)} zł/mies.</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center font-bold text-purple-700">
                <span>Rocznie:</span>
                <span>{(taxResults.finalAmount * 12).toFixed(2)} zł</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-gray-600 text-sm">
        <p className="text-center">
          * Kalkulator przedstawia uproszczoną symulację. W rzeczywistym systemie mogą istnieć dodatkowe czynniki wpływające na ostateczną wysokość podatku.
        </p>
      </div>
    </div>
  );
}