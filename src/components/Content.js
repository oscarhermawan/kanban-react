import React from 'react'
import { connect } from 'react-redux'
import { delete_Task, change_Status, edit_Task } from '../actions'


class Content extends React.Component {
  constructor(){
    super()
    this.state = {
      modalEdit : "modal",
      tema:{
        id:"",
        title:"",
        status:"",
        description:"",
      }
    }
  }

  editButton(title, description, status, id){
    this.setState({tema:
      {
        id:id,
        title:title,
        status:status,
        description:description,
      }
    })
    this.setState({modalEdit:"modal is-active"})
  }

  setTitle(e){
    this.setState({ tema:{...this.state.tema, title:e.target.value}});
  }

  setDescription(e){
    this.setState({ tema:{...this.state.tema, description:e.target.value}});
  }

  render(){
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
                    <a className="card-footer-item" onClick={() => this.editButton(task.title, task.description, task.status, task.id)}>Edit</a>
                    <a className="card-footer-item" onClick={() => this.deleteCondition(task)}>Delete</a>
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
                      <a className="card-footer-item" onClick={() => this.editButton(task.title, task.description, task.status, task.id)}>Edit</a>
                      <a className="card-footer-item" onClick={() => this.deleteCondition(task)}>Delete</a>
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
                      <a className="card-footer-item" onClick={() => this.editButton(task.title, task.description, task.status, task.id)}>Edit</a>
                      <a className="card-footer-item" onClick={() => this.deleteCondition(task)}>Delete</a>
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
                      <a className="card-footer-item" onClick={() => this.editButton(task.title, task.description, task.status, task.id)}>Edit</a>
                      <a className="card-footer-item" onClick={() => this.deleteCondition(task)}>Delete</a>
                    </footer>
                  </div>
                  <br/>
                </div>
              )
            }) }
          </div>
        </div>



        <div className={this.state.modalEdit}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" onClick={() => this.setState({modalEdit:'modal'})}></button>
            </header>
            <section className="modal-card-body">
              <label className="label">Title</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input" ref="title" value={this.state.tema.title} onChange={(e) =>{this.setTitle(e)}}/>
              </p>

              <label className="label">Description</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input" ref="title" value={this.state.tema.description} onChange={(e) =>{this.setDescription(e)}}/>
              </p>
            </section>

            <footer className="modal-card-foot">
              <a className="button is-success"
                onClick={()=>{
                  this.props.editTask(this.state.tema)
                  this.setState({tema:{
                    id:"",
                    title:"",
                    status:"",
                    description:"",
                  }})
                  this.setState({modalEdit:"modal"})
                }}>Save changes</a>
              <a className="button" onClick={() => this.setState({modalEdit:'modal'})}>Cancel</a>
            </footer>
          </div>
        </div>
      </div>
    )
  }

  deleteCondition(task){
    alert('Data akan dihapus')
    this.props.deleteTask(task)
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
    editTask:(task)=>dispatch(edit_Task(task)),
    deleteTask:(task)=>dispatch(delete_Task(task)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Content)
