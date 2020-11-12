import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTaskThunk, fillTaskStatussesThunk } from '../../redux/actions';

function Add(props) {
  const [task, setTask] = useState([{
    title: '',
    text: '',
    status: 0,
    executorId: null,
    userId: null,
  }]);

  const [taskStatusses, setTaskStatusses] = useState();

  useEffect(() => {
    setTask({ ...task, userId: props.userId });
    props.fillTaskStatussesThunk();
  }, []);

  useEffect(() => {
    setTaskStatusses(props.taskStatusses);
  }, [props]);

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
          {/* { props.taskS } */}
          { taskStatusses ? taskStatusses : 111 }
        <br/>
        <button onClick={ () => { props.addTaskThunk(task) } }>login</button>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
      userId: state.authReducer.idLogged,
      taskStatusses: state.tasksReducer.taskStatusses,
  }
}

export default connect(mapStateToProps, { addTaskThunk, fillTaskStatussesThunk })(Add);
