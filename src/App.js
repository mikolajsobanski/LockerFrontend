import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from "react-router-dom";
import CopyWrites from './components/CopyWrites'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import AccountSettingsScreen from './screens/AccountSettingsScreen'
import WhatIamUsing from './screens/WhatIamUsingScreen';
import Upfooter from './components/Upfooter'
import SocialPanel from './components/SocialPanel';
import VideoSection from './components/VideoSection';
import Navbar from './components/Navbar';
import FootballCategory from './screens/FootballCategory';
import BasketballCategoryScreen from './screens/BasketballCategoryScreen';


function App() {
  return (
    
      <Router>
        
        <Navbar />
        
        <main>
         
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

            <Route path="/football" element={<FootballCategory />} />
            <Route path="/basketball" element={<BasketballCategoryScreen />} />
            <Route path="/settings" element={<AccountSettingsScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/thanksThem" element={<WhatIamUsing />} />
          </Routes>
          
        </main>
        
        <CopyWrites />
        <SocialPanel />
        <Upfooter />
        
      </Router>
      
  );
}
export default App;
