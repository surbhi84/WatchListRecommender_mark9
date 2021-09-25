import { useState } from "react";
import "./App.css";
import { data } from "./data/data";
function App() {
  const categories = Object.keys(data);
  const [currentCategory, setCurrentCategory] = useState("Horror");
  return (
    <div className="App">
      <header>Watch List Recommendation</header>
      <div className="backcard">
        <section className="section">
          Category:{" "}
          {categories.map((category) => {
            return (
              <span
                style={{
                  color: category == currentCategory ? "white" : "black",
                }}
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
              <div className="block">
                <div className="title">{rec.title}</div>
                <span className="ispan">{rec.description}</span>
                <div>Rating: {rec.rating}/10</div>
              </div>
            ))}
          </section>
        )}
      </div>
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
