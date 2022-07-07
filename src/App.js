import './App.css';
import List from './List.js';
import Form from './Form.js';

function App() {
  const handleFormAfterPost = ()=>{
    debugger;
  }

  return (
    <div className="App">
      <Form
        onAfterPost={handleFormAfterPost}/>
      <List/>
    </div>
  );
}

export default App;
