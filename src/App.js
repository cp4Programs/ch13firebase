import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import CategoryArticles from './pages/CategoryArticles';
import SignUp from './pages/signup/SignUp';
import AddArticle from './pages/addartticle/AddArticle';

function App() {
  const categories = ["Health", "Food", "Travel", "Technology", "Other"];

  return (

    <BrowserRouter>
      <Header categories={categories} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:catName" element={<CategoryArticles />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addarticle" element={<AddArticle categories={categories} />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
