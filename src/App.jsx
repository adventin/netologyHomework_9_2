import { useState } from 'react'
import { Navigate, NavLink, Router, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import PostNew from './pages/PostNew'
import PostPage from './pages/PostPage'
import PostPageEdit from './pages/PostPageEdit'
import './App.css'

function App() {

  return (
    <div className="container">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          <Route path="/posts/edit/:postId" element={<PostPageEdit />} />
        </Routes>
    </div>
  )
}

export default App
