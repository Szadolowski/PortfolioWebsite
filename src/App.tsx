import Header from "./components/Header";
import Reasume from "./components/Resume";
import About from "./components/About";
function App() {
  return (
    <section className="bg-black p-6 text-text font-webFont space-y-4 min-h-screen">
      <Header />
      <main className="flex flex-col w-full bg-grayBackground p-4 rounded-2xl border border-elementBorder space-y-4">
        <About></About>
      </main>
      <main className="flex flex-col w-full bg-grayBackground p-4 rounded-2xl border border-elementBorder space-y-4">
        <Reasume></Reasume>
      </main>
    </section>
  );
}

export default App;
