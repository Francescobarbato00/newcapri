import { useState, useEffect } from 'react';

export default function SubscribeForm({ onClose }) {
  const [accompagnatoriYes, setAccompagnatoriYes] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    qualifica: 'magistrati',
    email: '',
    numero: '',
    parteciperò: '',
    accompagnatori: 'no',
    accompagnatoriNumero: '',
    accompagnatoriNominativi: '',
    note: '',
  });

  // Blocca completamente lo scroll della pagina e conserva la posizione corrente
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Stato per gestire l'animazione di ingresso
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'accompagnatori') {
      setAccompagnatoriYes(value === 'si');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form inviato!');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
      {/* Contenitore della modale con effetto di ingresso */}
      <div
        className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 w-10/12 sm:max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-500 ${
          animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Iscrizione al Convegno
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* NOME */}
            <div>
              <label className="block text-gray-700">NOME:</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
              />
            </div>
            {/* COGNOME */}
            <div>
              <label className="block text-gray-700">COGNOME:</label>
              <input
                type="text"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
              />
            </div>
          </div>

          {/* QUALIFICA */}
          <div>
            <label className="block text-gray-700">QUALIFICA:</label>
            <select
              name="qualifica"
              value={formData.qualifica}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
            >
              <option value="magistrati">Magistrati</option>
              <option value="informatici">Informatici</option>
              <option value="avvocati">Avvocati</option>
              <option value="giuristi">Giuristi</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* EMAIL */}
            <div>
              <label className="block text-gray-700">EMAIL:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
              />
            </div>
            {/* NUMERO */}
            <div>
              <label className="block text-gray-700">NUMERO:</label>
              <input
                type="text"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
              />
            </div>
          </div>

          {/* PARTECIPERO */}
          <div>
            <label className="block text-gray-700">PARTECIPERO:</label>
            <input
              type="text"
              name="parteciperò"
              value={formData.parteciperò}
              onChange={handleChange}
              required
              placeholder="Inserisci se parteciperai"
              className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
            />
          </div>

          {/* ACCOMPAGNATORI */}
          <div>
            <label className="block text-gray-700">ACCOMPAGNATORI:</label>
            <div className="flex space-x-4">
              <label className="flex items-center text-sm sm:text-base">
                <input
                  type="radio"
                  name="accompagnatori"
                  value="si"
                  onChange={handleChange}
                  checked={formData.accompagnatori === 'si'}
                  className="mr-1"
                />
                Si
              </label>
              <label className="flex items-center text-sm sm:text-base">
                <input
                  type="radio"
                  name="accompagnatori"
                  value="no"
                  onChange={handleChange}
                  checked={formData.accompagnatori === 'no'}
                  className="mr-1"
                />
                No
              </label>
            </div>
          </div>

          {accompagnatoriYes && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">
                  Numero di accompagnatori:
                </label>
                <input
                  type="number"
                  name="accompagnatoriNumero"
                  value={formData.accompagnatoriNumero}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Nominativi degli accompagnatori:
                </label>
                <input
                  type="text"
                  name="accompagnatoriNominativi"
                  value={formData.accompagnatoriNominativi}
                  onChange={handleChange}
                  placeholder="Separati da una virgola"
                  className="w-full border rounded px-3 py-2 text-sm sm:text-base text-black"
                />
              </div>
            </div>
          )}

          {/* NOTE */}
          <div>
            <label className="block text-gray-700">NOTE:</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 h-20 text-sm sm:text-base text-black"
            ></textarea>
          </div>

          {/* Pulsante di invio */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-900 text-white font-bold py-2 px-4 sm:px-6 rounded hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
            >
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
