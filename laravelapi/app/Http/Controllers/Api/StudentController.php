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
    public function view(){
        $student = Student::get();
        if($student){
            return response()->json([
                'status' => 200,
                'result' => $student,
                'message' => 'Fetch Data Successfully'
            ]);
        }
    }

}
