import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './Screen/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestScreen from './Screen/GuestScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import AboutScreen from './Screen/AboutScreen';
import TrainDetails from './Screen/TrainDetails';
import PrivateRoute from './components/PrivateRoute';
import PostScreen from './Screen/PostScreen';
import NeedsScreen from './Screen/NeedsScreen';
import AuthContext, {AuthProvider} from './components/AuthContext';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<HomeScreen/>} exact />
        <Route path='/guest' element={<GuestScreen/>} exact />
        <Route path='/login' element={<LoginScreen/>} exact />
        <Route path='/register' element={<RegisterScreen/>} exact />
        <Route path='/about' element={<AboutScreen/>} exact />
        <Route path="/train/details/:train_number" element={<TrainDetails />} />
        <Route path='/login/post' exact element={<PrivateRoute> <PostScreen></PostScreen> </PrivateRoute>} />
        <Route path='/login/needs' exact element={<NeedsScreen/>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App;