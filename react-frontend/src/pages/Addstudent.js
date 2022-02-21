import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Addstudent extends Component{
    state = { 
        name :'',
        course :'',
        email : '',
        phone : ''
    }
    handleInput = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    saveStudent = (e) =>{
        e.preventDefault();
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add Student</h4>
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'> Back </Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.saveStudent}>
                                    <div className='form-group mb-3'>
                                        <label for='Name'>Name:</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label for='Course'>Course:</label>
                                        <input type='text' name='course' onChange={this.handleInput} value={this.state.course} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label for='Email'>Email:</label>
                                        <input type='text' name='email' onChange={this.handleInput} value={this.state.email} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label for='Phone'>Phone:</label>
                                        <input type='text' name='phone' onChange={this.handleInput} value={this.state.phone} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3 float-end'>
                                        <button type='submit' className='btn btn-primary'>Save</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Addstudent;