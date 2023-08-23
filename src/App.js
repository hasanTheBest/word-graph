import { useState } from "react";
import Footer from "./Components/Footer";
import FormInput from "./Components/FormInput";
import Navbar from "./Components/Navbar";
import SearchResultItem from "./Components/SearchResultItem";

function App() {
  const [words, setWords] = useState([]);
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="App">
        <FormInput setWords={setWords} />

        <div className="grid grid-cols-3 shadow">
          {words.map((word) => (
            <SearchResultItem word={word} />
          ))}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
