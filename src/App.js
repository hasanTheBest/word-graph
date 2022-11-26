import Footer from "./Components/Footer";
import FormInput from "./Components/FormInput";
import Navbar from "./Components/Navbar";
import SearchResultItem from "./Components/SearchResultItem";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="App">
        <FormInput />

        <div className="stats shadow">
          {new Array(6).fill(1).map((item) => (
            <SearchResultItem />
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
