import { useState } from "react";
import "./App.css";
import { data } from "./data/data";
function App() {
  const categories = ["Horror", "Comedy", "Romantic", "Fiction", "Action"];
  const [currentCategory, setCurrentCategory] = useState();
  return (
    <div className="App">
      <header>Watch List Recommendation</header>
      <section>
        Category:{" "}
        {categories.map((category) => {
          return (
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {" "}
              {category}
            </span>
          );
        })}
      </section>
      {currentCategory && (
        <section>
          {data[currentCategory].map((rec) => (
            <div>
              <div>{rec.title}</div>
              <span>{rec.description}</span>
              <span>{rec.rating}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default App;
