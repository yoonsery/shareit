import { Routes, Route } from 'react-router-dom';
import Review from './components/review/Review';

import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Review />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
