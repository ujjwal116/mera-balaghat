import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import CategoryList from './components/CategoryList.jsx'
import ProviderList from './components/ProviderList.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<div>Page not found</div>} >
      <Route index element={<Home />} />
      <Route path="categories" element={<CategoryList />}>
      </Route>
      <Route path="categories/:categoryId" element={<ProviderList />} />
      <Route path="categories/:categoryId/provider/:providerId" element={<ProviderList/>} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
