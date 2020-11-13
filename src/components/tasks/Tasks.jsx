import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fillTaskStatussesThunk } from '../../redux/actions';

function Tasks(props) {
    const [allTasksDisplay, setAllTasksDisplay] = useState(true);

    useEffect(() => {
        props.fillTaskStatussesThunk();
      }, []);    

    function renderAllTaskTable() {
        return props.tasks.map((task, i) => {
            const jsx = (
                <tr className="line" key={ i }>
                    <td>{ task.id }</td>
                    <td>{ task.title }</td>
                    <td>{ task.text }</td>
                    <td>{ props.taskStatusses[task.status] }</td>
                    <td>{ props.usersLogins[task.userId] }</td>
                    <td>{ props.usersLogins[task.executorId] }</td>
                </tr>       
            );
            return !allTasksDisplay && task.executorId != props.idLogged ? null : jsx;
        });
    }

    return (
        <>
            <table border="1" cellPadding="10">
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>title</td>
                        <td>text</td>
                        <td>status</td>
                        <td>creator</td>
                        <td>executor</td>
                    </tr>
                    { props.tasks.length && renderAllTaskTable() }                    
                </tbody>
            </table>
            <br/>  
            <input type="checkbox" checked={ allTasksDisplay } onChange={ () => setAllTasksDisplay(!allTasksDisplay) }/>   
            display all tasks          
        </>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        taskStatusses: state.tasksReducer.taskStatusses,
        usersLogins: state.optionsReducer.usersLogins || [],
        idLogged: state.authReducer.idLogged,
    }
}

export default connect(mapStateToProps, { fillTaskStatussesThunk })(memo(Tasks));
