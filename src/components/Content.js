import React from 'react'
import { connect } from 'react-redux'
import { loadData, delete_Task, add_Task, change_Status} from '../actions'


class Content extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    {console.log('hasil = ',this.props)}
    return(
      <div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-one-quarter">
          Backlog
          { this.props.tasks.filter(task => task.status === 'backlog').map((task)=>{
            return(
              <div key={task.id}>
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      {task.title}
                    </p>
                    <a className="card-header-icon">
                      <span className="icon">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {task.description}
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item" onClick={()=> this.props.changeStatus(task)}>Todo</a>
                    <a className="card-footer-item">Edit</a>
                    <a className="card-footer-item" onClick={() => this.props.deleteTask(task)}>Delete</a>
                  </footer>
                </div>
                <br/>
              </div>
            )
          }) }
          </div>

          <div className="column is-one-quarter">
            Todo
            { this.props.tasks.filter(task => task.status === 'todo').map((task)=>{
              return(
                <div key={task.id}>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        {task.title}
                      </p>
                      <a className="card-header-icon">
                        <span className="icon">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {task.description}
                      </div>
                    </div>
                    <footer className="card-footer">
                      <a className="card-footer-item" onClick={()=> this.props.changeStatus(task)}>Doing</a>
                      <a className="card-footer-item">Edit</a>
                      <a className="card-footer-item" onClick={() => this.props.deleteTask(task)}>Delete</a>
                    </footer>
                  </div>
                  <br/>
                </div>
              )
            }) }
          </div>

          <div className="column is-one-quarter">
            Doing
            { this.props.tasks.filter(task => task.status === 'doing').map((task)=>{
              return(
                <div key={task.id}>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        {task.title}
                      </p>
                      <a className="card-header-icon">
                        <span className="icon">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {task.description}
                      </div>
                    </div>
                    <footer className="card-footer">
                      <a className="card-footer-item" onClick={()=> this.props.changeStatus(task)}>Done</a>
                      <a className="card-footer-item">Edit</a>
                      <a className="card-footer-item" onClick={() => this.props.deleteTask(task)}>Delete</a>
                    </footer>
                  </div>
                  <br/>
                </div>
              )
            }) }
          </div>

          <div className="column is-one-quarter">
            Done
            { this.props.tasks.filter(task => task.status === 'done').map((task)=>{
              return(
                <div key={task.id}>
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title">
                        {task.title}
                      </p>
                      <a className="card-header-icon">
                        <span className="icon">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {task.description}
                      </div>
                    </div>
                    <footer className="card-footer">
                      <a className="card-footer-item">Edit</a>
                      <a className="card-footer-item" onClick={() => this.props.deleteTask(task)}>Delete</a>
                    </footer>
                  </div>
                  <br/>
                </div>
              )
            }) }
          </div>
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    tasks: state.tasks,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changeStatus:(task)=>dispatch(change_Status(task)),
    deleteTask:(task)=>dispatch(delete_Task(task)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Content)
