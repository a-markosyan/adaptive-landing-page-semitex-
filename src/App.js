import FlipInvertBottom from "./components/flipInvertBottom/FlipInvertBottom";
import NoFlipNoInvertTop from "./components/noFlipNoInvertTop/NoFlipNoInvertTop";

function App() {
  return (
    <div>
      <header style={{ background: "#07086c", height: "200px" }}>Header</header>
      <NoFlipNoInvertTop />
      <section style={{ height: "300px" }}>mama mia</section>
      <FlipInvertBottom />
      <section
        style={{
          background: "#07086c",
          height: "300px",
          outline: "2px solid #07086c",
        }}
      >
        mama mia
      </section>
      <NoFlipNoInvertTop />
      <section style={{ height: "300px" }}>mama mia</section>
      <FlipInvertBottom />
      <section
        style={{
          background: "#07086c",
          height: "300px",
          outline: "2px solid #07086c",
        }}
      >
        mama mia
      </section>
      <footer style={{ background: "#333333", height: "50px" }}>footer</footer>
    </div>
  );
}

export default App;
