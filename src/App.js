import './App.css';
import React, {useState} from 'react';
import List from './List.js';
import Form from './Form.js';

function App() {
  const [newTimestamp,setNewTimestamp] = useState(new Date().getTime());

  const handleAfterChange = ()=>{
    setNewTimestamp(new Date().getTime());
  }

  return (
    <>
      <div id = "App" className="App">
        <h3>Biblioteca</h3>
        <br/>
        <div>
          <Form
            onAfterChange={handleAfterChange}/>
        </div>
        <br/>
        <div>
          <List
            onAfterChange={handleAfterChange}
            newTimestamp={newTimestamp}/>
        </div>
      </div>
    </>
  );
}

export default App;
