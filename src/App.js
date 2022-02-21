import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Details from "./Components/Details/Details";
import Navbar from "./Components/Navbar/Navbar";
import BookDetails from "./Components/BookDetails/BookDetails";
import SearchBar from "./Components/SearchBar/SearchBar";
import Quotation from "./Components/Quotation/Quotation";
import ErrorNotFound from "./Components/ErrorNotFound/ErrorNotFound";

const App = () => {
  return (
    <Router>
      <div className="background">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Hasan" element={<BookDetails />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Contact/:title" element={<Contact />} />
          <Route path="Details/*" element={<Details />}>
            {/* <Route path="bookss" element={<div>salam</div>} /> */}
            <Route path="SearchBar" element={<SearchBar />} />
            <Route path="Quotation" element={<Quotation />} />
            <Route path="Details/:title" element={<Navbar />} />
          </Route>
          <Route path="*" element={<ErrorNotFound/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
