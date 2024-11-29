import "./App.css";
import Content from "./contents/Content";
import Header from "./header/Header";

function App() {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <section>
          <Content />
        </section>
      </div>
    </>
  );
}

export default App;
