import "./App.css";
import { data } from "./data/data";
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
      <section>
        {data["Horror"].map((rec) => (
          <div>
            <div>{rec.title}</div>
            <span>{rec.description}</span>
            <span>{rec.rating}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
