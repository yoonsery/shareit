import { Routes, Route } from 'react-router-dom';
import ReviewPage from './components/reviewPage/ReviewPage';

import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<ReviewPage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
