import React, { Component } from "react";
import NewTask from "./component/NewTask";
import TasksList from "./component/TasksList";

export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: {},
            allTasks: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount(){
        console.log('mount')
        // console.log(this.state)
    }
    componentDidUpdate(){
        console.log('update')
        console.log(this.state)
    }
    componentWillUnmount(){
        console.log('unmount')
    }

    handleChange({ target }){
        const { name, value } = target;
        this.setState((prevState) => ({
          ...prevState,
          newTask: {
            ...prevState.newTask,
            [name]: value,
            id: Date.now()
          }
        }));
        
      }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.newTask.title) return;
        console.log(this.state.newTask)
        this.setState((prevState) => (
            this.state.allTasks.push(this.state.newTask)
            
        //     {            
        //     allTasks: [prevState.newTask, ...prevState.allTasks],
        //     newTask: {}
        // }
        ));
        this.setState({newTask: {}})
        console.log(this.state)
    }

    handleDelete(taskIdToRemove) {
        console.log(taskIdToRemove)
        this.setState((prevState) => ({
            ...prevState,
            allTasks: prevState.allTasks.filter((task) => task.id !== taskIdToRemove)
        }));
    }

    render() {
        return (
            <main>
                <h1>Tasks</h1>
                <NewTask
                    newTask={this.state.newTask}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TasksList
                    allTasks={this.state.allTasks}
                    handleDelete={this.handleDelete}
                />
            </main>
        );
    }
}
