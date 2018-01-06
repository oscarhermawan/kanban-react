import React from 'react'

import { connect } from 'react-redux'
import { active_Modal, unactive_Modal, add_Task} from '../actions'

class Navbar extends React.Component {
  render(){
    return(
      <div>
        <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item is-tab is-hidden-mobile is-active" href="/">Home</a>
              <a className="nav-item is-tab is-hidden-mobile" href="/tasks">Tasks</a>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
            <a className="nav-item is-tab" onClick={() => this.props.activeModal()}>
              Add Task
            </a>
              <a className="nav-item is-tab">
                Profile
              </a>
              <a className="nav-item is-tab">Log out</a>
            </div>
          </div>
        </nav>

        <div className={this.props.modalAdd}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete"></button>
            </header>
            <section className="modal-card-body">
              <label className="label">Title</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input" ref="title"/>
              </p>

              <label className="label">Description</label>
              <p className="control">
                <input className="input" type="text" placeholder="Text input" ref="description"/>
              </p>
            </section>

            <footer className="modal-card-foot">
              <a className="button is-success"
                onClick={()=>
                  {
                    this.props.addTask(this.tambahTask())
                    this.props.unactiveModal()
                  }
                }>Save changes</a>
              <a className="button" onClick={() => this.props.unactiveModal()}>Cancel</a>
            </footer>
          </div>
        </div>

      </div>
    )
  }

  tambahTask(){
    let newTask={
      title:this.refs.title.value,
      description:this.refs.description.value,
      status:'backlog'
    }
    return newTask;
  }
}

const mapStateToProps = (state) =>{
  return{
    modalAdd:state.modal
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addTask:(task)=>dispatch(add_Task(task)),
    activeModal:()=>dispatch(active_Modal()),
    unactiveModal:()=>dispatch(unactive_Modal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbar)
