import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Student extends Component{

    state = {
        students:[],
        loading:true
    }
   async componentDidMount(){
        try {
            const studentData = await axios.get('http://127.0.0.1:8000/api/get-student');
            if(studentData.data.status === 200){
                this.setState({
                    students: studentData.data.result,
                    loading: false
                })
            }
        } catch (error) {
            alert(error);
        }
    }

    render(){
        var studentHTML_TABLE='';
        if(this.state.loading){
            studentHTML_TABLE = <tr><td col='7'><h2>Loading..</h2></td></tr>
        }else{
            studentHTML_TABLE = this.state.students.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`edit-student/${item.id}`} className='btn btn-success btn-sm'>Edit </Link>
                        </td>
                        <td>
                            <button type='button' className='btn btn-danger btn-sm'>Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Students Data</h4>
                                    <Link to={'add-student'} className='btn btn-primary btn-sm float-end'> Add Student </Link>
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered table-striped'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Course</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {studentHTML_TABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Student;