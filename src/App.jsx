import { Routes, Route } from "react-router-dom";
import Details from "./app/components/Details";
import Footer from "./app/components/Footer";
import Form from "./app/components/Form";
import List from "./app/components/List";
import Navbar from "./app/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/:uuid" element={<Form />} />
        <Route path="/details/:uuid" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
