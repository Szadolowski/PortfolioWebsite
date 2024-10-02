import Header from "./components/Header";
// import ArticleTitle from "./components/ArticleTitle";
// import Paragraph from "./components/Paragraph";
// import ServiceTitle from "./components/ServiceTitle";
import About from "./components/About";
function App() {
  return (
    <section className="bg-black p-4 text-text font-webFont space-y-4 min-h-screen">
      <Header />
      <main className="flex flex-col w-full bg-grayBackground p-4 rounded-2xl border border-elementBorder space-y-4">
        <About></About>
      </main>
    </section>
  );
}

export default App;
