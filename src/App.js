import ReviewPage from './components/reviewPage/ReviewPage';

import './App.css';
import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      {/* <Home /> 안에 <ManageReview />, <Form> 가져오기, router-dom*/}
      <ReviewPage />
      <Form />
    </div>
  );
}

export default App;
