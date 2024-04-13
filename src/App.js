import Filter from "./Components/Filter/Filter";
import PrimarySearchAppBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="container">
        <main className="main">
          <Filter />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
