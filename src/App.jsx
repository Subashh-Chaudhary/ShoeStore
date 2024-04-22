import {
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import Home from "./sections/Home";

export default function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        <Home />
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}
