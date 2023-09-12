import React from 'react';
import {useState} from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Header from '';
import Footer from '';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <PortfolioContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer/>
    </div>
  );
};

export default App;
