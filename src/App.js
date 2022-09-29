import { useState } from 'react';
import ManageReview from './components/ManageReview/ManageReview';
import { ReviewContext } from './context/context';
import availableData from './db/availableData.json';
import reviewData from './db/reviewData.json';
import './App.css';

function App() {
  const availableList = useState(availableData)[0];
  const writtenList = useState(reviewData)[0];

  return (
    <ReviewContext.Provider value={{ availableList, writtenList }}>
      <div className="App">
        <ManageReview />
      </div>
    </ReviewContext.Provider>
  );
}

export default App;
