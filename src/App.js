import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import CategoryArticles from './pages/CategoryArticles';
import SignUp from './pages/signup/SignUp';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:catName" element={<CategoryArticles />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
