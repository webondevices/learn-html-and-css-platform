import React from "react";
import "./TaskBox.scss";

class TaskBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: props.currentTask,
      valid: false
    };

    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    this.validate();
  }

  static getDerivedStateFromProps(props, state) {
    const { currentTask } = props;
    if (currentTask.id !== state.currentTask.id) {
      return {
        currentTask,
        valid: false
      };
    }

    return {};
  }

  validate() {
    this.setState({
      currentTask: {
        id: this.state.currentTask.id,
        description: this.state.currentTask.description,
        taskList: this.state.currentTask.taskList.map(task => {
          return {
            description: task.description,
            validation: task.validation,
            done: task.validation(this.props.context)
          };
        })
      },
      valid: this.state.currentTask.taskList.every(task =>
        task.validation(this.props.context)
      )
    });
  }

  render() {
    return (
      <div className={`Editor__task ${this.props.className}`}>
        <span>{this.props.currentTask.description}</span>
        <br />
        <ol>
          {this.state.currentTask.taskList.map(task => (
            <li
              key={task.description}
              className={task.done ? "done" : "pending"}
            >
              {task.description}
            </li>
          ))}
        </ol>
        {!this.state.valid && (
          <button type="button" onClick={this.validate}>
            Check
          </button>
        )}
        {this.state.valid && (
          <button
            className="next-task"
            type="button"
            onClick={this.props.nextStep}
          >
            Next Task
          </button>
        )}
      </div>
    );
  }
}

export default TaskBox;
