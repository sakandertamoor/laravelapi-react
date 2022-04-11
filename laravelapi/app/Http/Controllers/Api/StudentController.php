<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Student;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    //
    public function store(Request $request){
        $student = Student::updateorCreate([
            'name' => $request->name,
            'course' => $request->course,
            'phone' => $request->phone,
            'email' => $request->email,
        ]);
        if($student){
            return response()->json([
                'status' => 200,
                'result' => '',
                'message' => 'Added Successfully'
            ]);
        }
    }
    public function index(){
        $student = Student::get();
        if($student){
            return response()->json([
                'status' => 200,
                'result' => $student,
                'message' => 'Fetch Data Successfully'
            ]);
        }
    }
    public function edit(Request $request){
        $student = Student::findOrFail($request->id);
        if($student){
            return response()->json([
                'status' => 200,
                'result' => $student,
                'message' => 'Search Student Successfully'
            ]);
        }
    }
    public function update(Request $request, $id){
        $student = ""; //Student::update($request->id);
        if($student){
            return response()->json([
                'status' => 200,
                'result' => $student,
<<<<<<< Updated upstream
                'message' => 'Student Data Updated Successfully '
=======
                'message' => 'Student Data Update Successfully' 
>>>>>>> Stashed changes
            ]);
        }
    }

}
