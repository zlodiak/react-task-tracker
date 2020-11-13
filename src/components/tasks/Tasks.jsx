import React, { memo } from 'react';
import { connect } from 'react-redux';

function Tasks(props) {
    function renderTaskTable() {
        return props.tasks.map((task, i) => {
            return (
                <>
                    <div className="line" key={ i }>
                        <div>id: { task.id }</div>
                        <div>заголовок: { task.title }</div>
                        <div>текст: { task.text }</div>
                        <div>статус: { task.status }</div>
                        <div>постановщик: { task.userId }</div>
                        <div>исполнитель: { task.executorId }</div>
                    </div>
                    <br/>                
                </>
            );
        });
    }

    return (
        <>
            { props.tasks.length && renderTaskTable() }
        </>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
    }
}

export default connect(mapStateToProps, {  })(memo(Tasks));
