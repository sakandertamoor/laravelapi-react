import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Student from './pages/Student';
import Addstudent from './pages/Addstudent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={Student}/>
        <Route  path='/add-student' element={Addstudent}/>
      </Switch>
    </Router>
  );
}

export default App;
