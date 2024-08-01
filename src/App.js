import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard';
import LoginPage from './Components/LoginPage';
import SignUp from './Components/SignUp';
import Home from './Components/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Dashboard />} />
      <Route path='home' element={<Home />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

