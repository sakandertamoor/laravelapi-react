import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Editstudent extends Component{
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
    updateStudent = async (e) =>{
        e.preventDefault();
        const student_id = this.props.match.params.id;
        try {
            const studentUpdated = await axios.put(`http://127.0.0.1:8000/api/update-student/${student_id}`, this.state);
            if(studentUpdated.data.status === 200){
                // this.setState({name:'',course:'',email:'',phone:''})
                // alert(studentDataResult.data.message);
            }

        } catch (e) {
            alert(e);
        }
        
    }
    async componentDidMount(){
        const student_id = this.props.match.params.id;
         try {
            const studentDataResult = await axios.get(`http://127.0.0.1:8000/api/edit-student/${student_id}`);
            if(studentDataResult.data.status === 200){
                this.setState({name:studentDataResult.data.result.name,
                                course:studentDataResult.data.result.course,
                                email:studentDataResult.data.result.email,
                                phone:studentDataResult.data.result.phone});
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
                                <h4>Edit Student</h4>
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'> Back </Link>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.updateStudent}>
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
                                        <button type='submit' className='btn btn-primary'>Update</button>
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
export default Editstudent;