import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                id: this.props.match.params.id,
                employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id)
            .then(res => {
                    this.setState({employee: res.data});
            })
    }
    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div>
                    <br></br>
                        <div className = "card col-md-6 offset-md-3">
                             <h3>View Employee Page</h3>
                             <div className="card-body">
                                 <div className="row">
                                     <label> Employee First Name: </label>
                                     <div> {this.state.employee.firstName}</div>
                                 </div>
                                 <div className="row">
                                     <label> Employee Last Name: </label>
                                     <div> {this.state.employee.lastName}</div>
                                 </div>
                                 <div className="row">
                                     <label> Employee Email Id: </label>
                                     <div> {this.state.employee.emailId}</div>
                                 </div>

                             </div>
                        </div>
                        <button className = "btn btn-danger push-right" onClick = {this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                       
                </div>
            </div>
        )
    }
}

export default  ViewEmployeeComponent
