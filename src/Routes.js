import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';

export default function Routess() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/new" exact element={<NewContact />} />
    </Routes>
  );
}
