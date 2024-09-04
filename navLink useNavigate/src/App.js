import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPass from './components/ForgotPass';
import PageNotFound from './components/PageNotFound';
// import Dashboard from './components/dashboard';
import HomePage from './components/HomePage';
// import brnLogo from './images/brn-logo.png'

function App() {
  return (
    <div className='div'>
    <div className="App">
       <div className='formComponentsDiv'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path='/signUp' element={<SignUp/>}></Route>
          <Route path='/forgotPassword' element={<ForgotPass/>}></Route>
          <Route path='/homePage' element={<HomePage/>}></Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    </div>

    </div>
  );
}

export default App;
