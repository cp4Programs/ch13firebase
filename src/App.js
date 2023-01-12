import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import CategoryArticles from './components/CategoryArticles';


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:catName" element={<CategoryArticles />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
