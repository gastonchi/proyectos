import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importo componentes
import { CompShowBlogs } from './blog/ShowBlogs';
import { CompCreateBlog } from './blog/CreateBlog';
import { CompEditBlog } from './blog/EditBlog';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs />}></Route>
          <Route path='/create' element={<CompCreateBlog />}></Route>
          <Route path='/edit/:id' element={<CompEditBlog />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
