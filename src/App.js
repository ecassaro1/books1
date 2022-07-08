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
    <div className="App">
      <div>
        <Form
          onAfterChange={handleAfterChange}/>
      </div>
      <div>
        <List
          onAfterChange={handleAfterChange}
          newTimestamp={newTimestamp}/>
      </div>
    </div>
  );
}

export default App;
