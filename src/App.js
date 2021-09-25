import { useState } from "react";
import "./App.css";
import { data } from "./data/data";
function App() {
  const categories = Object.keys(data);
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

      <footer>
        <ul>
          <li>
            <a href="https://github.com/Surbhi84">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@subuhikukreti">
              <i class="fab fa-medium-m"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/surbhi-kukreti-a91b0b163">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://surbhikukreti.netlify.app/">
              <i class="fas fa-laptop"></i>
            </a>
          </li>
        </ul>

        <div id="legacyText">© 2021 | Surbhi Kukreti</div>
      </footer>
    </div>
  );
}

export default App;
