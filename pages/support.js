import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function SupportPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    console.log('Form submitted', { email, name, message });
    setIsSubmitted(true);
  };

  return (
    <Layout>
      {/* Previous sections remain the same */}

      {/* Social Media and Sharing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8">Podziel się projektem</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Pomóż nam dotrzeć do większej liczby osób, które mogą wesprzeć naszą inicjatywę.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 flex items-center"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.989C18.343 21.129 22 16.99 22 12z" clipRule="evenodd" />
              </svg>
              Facebook
            </a>
            
            <a
              href="#"
              className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 flex items-center"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Instagram
            </a>
            
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 flex items-center"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </a>
            
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 flex items-center"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-8">Dołącz do naszego zespołu</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Szukamy zaangażowanych osób, które chcą wspierać naszą inicjatywę i przyczyniać się do pozytywnych zmian społecznych.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Wolontariat organizacyjny</h3>
              <p className="text-gray-700 mb-6">
                Pomóż nam w organizacji wydarzeń, spotkań informacyjnych i kampanii społecznych.
              </p>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Zgłoś się
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Wsparcie merytoryczne</h3>
              <p className="text-gray-700 mb-6">
                Jesteś ekspertem? Pomóż nam w analizach, badaniach i udoskonalaniu projektu.
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Zgłoś się
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Komunikacja i promocja</h3>
              <p className="text-gray-700 mb-6">
                Pomóż nam w promocji projektu, prowadzeniu mediów społecznościowych i komunikacji.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Zgłoś się
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}