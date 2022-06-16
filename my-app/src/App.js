import BlogPost from './Pages/BlogPost'
import Categories from './Pages/Category'
import CreatingBlogPost from './Pages/CreatingBlogPost'
import DraftPost from './Pages/DraftPost'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Navigation from './components/Navigation'

import"./sass/nav.scss"
import "./sass/Banner.scss"
import "./sass/homepage.scss"
import "./sass/RecentlyReleasedPost.scss"
import "./sass/Category.scss"
import "./sass/login.scss"

import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/BlogPost" element={<BlogPost />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreatingBlogPost" element={<CreatingBlogPost />} />
        <Route path="/DraftPost" element={<DraftPost />} />
      </Routes>
    </div>
  );
}

export default App;
