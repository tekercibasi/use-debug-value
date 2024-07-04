import React, { useState, useEffect } from 'react';
// import Greet from './Greet';
import ProductTable from './product-table/src/App'
import CurrencyConverter from './currency-converter/src/App'
import ToDoList from './to-do-list/src/App'
// import IdaPeaks from './idapeaks-react/src/index'



// Navigation Komponente
export default function Navigation()  {
  // State für die aktuelle Seite
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  // Funktion zum Navigieren zwischen URLs
  function navigateTo(page) {
    console.log("before:", window.history.state);
    window.history.pushState({test:page}, 'sicko', page);
    setCurrentPage(page); // Aktualisiere den aktuellen Seitenstatus
    console.log("after:", window.history.state);
  };

  // Effekt zum Abhören von Browser-Navigationsereignissen
  useEffect(() => {
    const handlePopState = (e) => {
      console.log("useEffect")
      setCurrentPage(window.location.pathname);
    };

    // Event-Listener für das Zurück- und Vorwärts-Navigieren im Browser
    window.addEventListener('popstate', handlePopState);

    // Cleanup-Funktion
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
      {/* Navigationsleiste mit Buttons für jede Seite */}
      <nav className="navbar border-bottom border-body mb-5">
        <button className='btn btn-outline-secondary' onClick={() => navigateTo('/')}>Home</button>
        <button className='btn btn-outline-secondary' onClick={() => navigateTo('/currencyConverter')}>currencyConverter</button>
        <button className='btn btn-outline-secondary' onClick={() => navigateTo('/productTableBasic')}>productTable</button>
        <button className='btn btn-outline-secondary' onClick={() => navigateTo('/toDoApp')}>toDoList</button>
        <button className='btn btn-outline-secondary' onClick={() => navigateTo('/contact')}>Contact</button>
      </nav>
      {/* Inhalt der aktuellen Seite, basierend auf dem State */}
      <div>
        {currentPage === '/' && <div>Das ist die Startseite</div>}
        {currentPage === '/currencyConverter' && <div><h2>Currency Converter App</h2><div className="mt-3"><CurrencyConverter/></div></div>}
        {currentPage === '/productTableBasic' && <div><h2>Product Table App</h2><div className="mt-3"><ProductTable/></div></div>}
        {currentPage === '/toDoApp' && <div><h2>toDoList App</h2><div className="mt-3"><ToDoList/></div></div>}
        {currentPage === '/contact' && <div>Kontaktiere uns</div>}
      </div>
    </div>
  );
};


