import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="/diary/:id" element={<DetailPage />} />
  </Routes>
  );
}

export default App;
