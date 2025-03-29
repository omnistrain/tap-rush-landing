import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-white font-sans">
      <header className="text-center py-10">
        <h1 className="text-5xl font-extrabold tracking-widest drop-shadow-lg">🎯 Tap Rush 80’s!</h1>
        <p className="text-xl mt-4">Tape, vibre, deviens une légende rétro !</p>
        <div className="mt-6 space-x-4">
          <a href="#" className="bg-white text-black font-bold py-2 px-4 rounded shadow-lg">Télécharger sur Google Play</a>
          <a href="#" className="bg-black text-white font-bold py-2 px-4 rounded shadow-lg">Télécharger sur App Store</a>
        </div>
      </header>

      <section className="px-4 md:px-20 py-12 bg-opacity-20 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6">Pourquoi tu vas adorer ?</h2>
        <ul className="space-y-4 text-lg">
          <li>⚡ Gameplay ultra rapide et fun</li>
          <li>🎶 Sons 8-bit et visuels néon rétro</li>
          <li>🏆 Score illimité, tape plus vite pour grimper !</li>
          <li>🕹️ Jeu gratuit avec pubs (ou sans avec le mode premium)</li>
          <li>📴 Fonctionne même sans connexion</li>
        </ul>
      </section>

      <section className="bg-purple-950 bg-opacity-80 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">🕹️ Prêt à entrer dans la légende ?</h2>
        <a href="#" className="bg-pink-600 hover:bg-pink-700 transition-all px-6 py-3 rounded text-xl font-bold">Télécharger maintenant</a>
      </section>

      <footer className="bg-black text-center text-sm py-6 opacity-70">
        © 2025 Tap Rush Studio — <a href="#" className="underline">Mentions légales</a> — <a href="#" className="underline">Politique de confidentialité</a>
      </footer>
    </div>
  );
}

export default App;
