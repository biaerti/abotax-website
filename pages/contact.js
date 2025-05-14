
// pages/contact.js
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: obsługa wysyłki formularza
    alert('Dziękujemy za wiadomość!');
  };

  return (
    <Layout title="Kontakt">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl font-bold mb-6 text-center">Skontaktuj się z nami</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2">Imię i nazwisko</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-2">Wiadomość</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 h-40"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
