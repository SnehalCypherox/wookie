import './App.css';
import Header from './components/Header/Header';
import Listing from './components/Listing';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './components/Details';
import { ListingProps } from './type';
import { useState } from 'react';


function App() {
  const [searchData, setSearchData] = useState<ListingProps[]>()
  return (
    <>
      <Router>
        <Header setSearchData={setSearchData} />
        <Routes>
          <Route path="/" element={<Listing setSearchData={setSearchData} searchData={searchData} />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
