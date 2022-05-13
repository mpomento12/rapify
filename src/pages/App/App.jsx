import './App.css';
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewRhymePage from '../NewRhymePage/NewRhymePage';
import RhymeHistoryPage from '../RhymeHistoryPage/RhymeHistoryPage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/Navbar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
    { user ?
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
      <Route path="/rhymes/new" element={<NewRhymePage />}/>
      <Route path="/rhymes" element ={<RhymeHistoryPage />}/>
     </Routes>
     </>
      :
      <AuthPage setUser={setUser} />
    }
  </main>
);
}


