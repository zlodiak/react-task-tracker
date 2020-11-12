import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addTaskThunk, fillTaskStatussesThunk } from '../../redux/actions';

function Add(props) {
  const [task, setTask] = useState({
    title: '',
    text: '',
    status: 0,
    executorId: null,
    userId: null,
  });

  const [taskStatusses, setTaskStatusses] = useState();

  useEffect(() => {
    setTask({ ...task, userId: props.userId });
    props.fillTaskStatussesThunk();
  }, []);

  useEffect(() => {
    setTaskStatusses(props.taskStatusses);
  }, [props]);

  function renderTaskStatussesOptions() {
    return (
      props.taskStatusses.map((status, i) => {
        return <option value={ i } key={ i }>{ props.taskStatusses[i] }</option>
      })
    );
  }

  function renderTaskStatussesSelect() {
    return (
      <select value={ task.status } onChange={ e => setTask({ ...task, status: e.target.value }) }>
        { renderTaskStatussesOptions() }
      </select>
    );
  }  

  function submit() {
    console.log(task, typeof task)
    if(task.title.trim() && task.text.trim()) {
      console.log('ok')
      props.addTaskThunk(task, () => setTask({ ...task, title: '', text: '', status: 0 }));
    }
  }

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
          { props.taskStatusses && renderTaskStatussesSelect() }
        <br/>
        <button onClick={ submit }>login</button>
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
