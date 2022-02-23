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
    saveStudent = async (e) =>{
        e.preventDefault();
        try {
            const studentDataResult = await axios.post('http://127.0.0.1:8000/api/add-student', this.state);
            if(studentDataResult.data.status === 200){
                this.setState({name:'',course:'',email:'',phone:''})
                alert(studentDataResult.data.message);
            }

        } catch (e) {
            alert(e);
        }
        
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
                                        <label htmlFor='Name'>Name:</label>
                                        <input type='text' name='name' onChange={this.handleInput} value={this.state.name} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='Course'>Course:</label>
                                        <input type='text' name='course' onChange={this.handleInput} value={this.state.course} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='Email'>Email:</label>
                                        <input type='text' name='email' onChange={this.handleInput} value={this.state.email} className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='Phone'>Phone:</label>
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