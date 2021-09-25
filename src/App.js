import logo from "./logo.svg";
import "./App.css";

function App() {
  const categories = ["Horror", "Comedy", "Romantic", "Fiction", "Action"];
  return (
    <div className="App">
      <header>Watch List Recommendation</header>
      <section>
        Category:{" "}
        {categories.map((category) => {
          return <span> {category}</span>;
        })}
      </section>
      <section></section>
    </div>
  );
}

export default App;
