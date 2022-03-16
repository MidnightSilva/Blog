import BlogPost from './Pages/BlogPost'
import Categories from './Pages/Category'
import CreatingBlogPost from './Pages/CreatingBlogPost'
import DraftPost from './Pages/DraftPost'
import Home from './Pages/Home'
import Login from './Pages/Login'
function App() {
  return (
    <div className="App">
     <BlogPost/>
     <Categories/>
     <CreatingBlogPost/>
     <DraftPost/>
     <Home/>
     <Login/>
    </div>
  );
}

export default App;
