import React from 'react';
import {AuthProvider} from "./context/AuthContext";
import MainPage from "./pages/Main";
import './App.css';
import './style.css';


function App() {
  return (
    <AuthProvider>
      <MainPage/>
    </AuthProvider>
  );
}

export default App;
