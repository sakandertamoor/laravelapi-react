import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Student extends Component{

   async componentDidMount(){
        try {
            const studentData = await axios.get('http://127.0.0.1:8000/api/get-student');
            console.log(studentData);
        } catch (error) {
            alert(error);
        }
    }
    render(){
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