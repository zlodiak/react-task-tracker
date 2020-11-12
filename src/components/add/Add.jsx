import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTaskThunk } from '../../redux/actions';

function Add(props) {
  const [task, setTask] = useState([{
    title: '',
    text: '',
    status: 0,
    executorId: null,
    userId: null,
  }]);

  return (
    <>
      <div className="add-task-form">
        <input 
            type="text" 
            onChange={ e => setTask({ ...task, title: e.target.value }) } 
            value={ task.title || '' }
            placeholder="login"
        />
        <br />
        <textarea 
          value={ task.text || '' } 
          onChange={ e => setTask({ ...task, text: e.target.value }) } 
          placeholder="text"
        />
        <br/>
        <button onClick={ () => { props.addTaskThunk(task) } }>login</button>
      </div>
    </>
  );
}

export default connect(null, { addTaskThunk })(Add);
