// pages/mechanism.js
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Mechanism() {
  return (
    <Layout title="Mechanizm działania AboTax">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Jak działa AboTax?</h1>
          <p className="text-lg mb-8">
            System AboTax to propozycja ekonomicznego podejścia do sporu o aborcję. Poprzez ulgi i kary podatkowe zachęca do wyboru narodzin i wsparcia instytucji opieki.
          </p>

          {/* Główne założenia */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Ulgi podatkowe</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>2% ulgi dla matki i 2% dla ojca za każde dziecko (łącznie 4%).</li>
                <li>Dodatkowe bonusy przy urodzeniu bliźniąt lub wieloraczków.</li>
                <li>Możliwość odroczenia płatności dla studentek, osób niepełnoletnich i bezrobotnych.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Kary podatkowe</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>+5% podatku za aborcję za zgodą matki.</li>
                <li>+10% podatku przez 18 lat na rzecz dziecka w przypadku "metaforycznej aborcji" (porzucenia partnerki w ciąży).</li>
                <li>Odpowiedzialność podatkowa dla osób pomagających w organizacji aborcji.</li>
              </ul>
            </div>
          </div>

          {/* Dodatkowe regulacje */}
          <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Regulacje specjalne</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Oddanie do domu dziecka</h3>
                  <p className="text-gray-700 mb-4">
                    Matka może urodzić i oddać dziecko, otrzymując 1% ulgi zamiast 2%, z możliwością powrotu do pełnej ulgi przez 6 miesięcy.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Aborcja za granicą</h3>
                  <p className="text-gray-700 mb-4">
                    Próba uniknięcia AboTax przez aborcję za granicą traktowana jest jako oszustwo podatkowe.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Poronienie naturalne</h3>
                  <p className="text-gray-700 mb-4">
                    Poronienia są weryfikowane medycznie i nie wiążą się z karami podatkowymi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mechanizm płatności */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
              <h2 className="text-3xl font-bold text-center mb-12">Płatności i rozliczenia</h2>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:pr-8">
                  <p className="text-lg mb-4">
                    Płatności realizowane są przez elektroniczny portfel w aplikacji mObywatel. System automatycznie nalicza ulgi i kary.
                  </p>
                  <p className="text-lg">
                    Rozliczenia online redukują biurokrację i przyspieszają przepływ środków do odpowiednich instytucji.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/api/placeholder/600/400"
                    alt="Portfel elektroniczny"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}