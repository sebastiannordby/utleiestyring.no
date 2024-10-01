import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 w-full">
        <nav className="p-4 flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full md:w-auto">
            <h1 className="font-bold text-xl">Utleiestyring</h1>
            <button onClick={toggleMenu} className="md:hidden">
              <span className="material-icons text-[29px]">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
              <a href="/" className="py-2">
                Hjem
              </a>
              <a href="#discover" className="py-2">
                Oppdag
              </a>
              <a href="#contact" className="py-2">
                Kontakt oss
              </a>
              <a
                href="#login"
                className="bg-utleiestyring_primary text-white rounded-md cursor-pointer px-2 py-1 hover:bg-utleiestyring_accent hover:text-white hover:underline ml-1"
              >
                Logg inn
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="bg-white  overflow-y-auto">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
