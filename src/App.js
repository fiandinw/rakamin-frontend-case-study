import HelloWorld from "./Components/HelloWorld";
import CounterExample from "./Components/CounterExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Products from "./Views/Products";
import Home from "./Views/Home";

function App() {
  return (
    <div>
      <div className="relative pb-10 min-h-screen">
        <Header />
        {/* React Component */}
        {/* <HelloWorld name="alifiandi" /> */}

        {/* State Hooks */}
        {/* <CounterExample /> */}

        <div className="p-3">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Products />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;
