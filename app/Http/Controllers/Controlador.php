<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class Controlador extends Controller
{

    public function registro(Request $request){
        $request->validate([
            ''=> 'required',
            'usuario'=> 'required|unique:users',
            'password'=> 'required|min:6'
        ]);nombre
        $user=User::create([
            'nombre'=> $request->nombre,
            'usuario'=> $request->usuario,
            'password'=> Hash::make($request->password)
        ]);
        $user->save();
        $token = $user->createToken($user->usuario.'-'.now());

        return response()->json(['user'=>$user,'token'=>$token->accessToken]);
    }

    public function login(Request $request)
    {
        $request->validate([
        'usuario'=>'required|exists:users,usuario',
        'password'=> 'required|min:6'
        ]);

        if(Auth::attempt(['usuario'=>$request->usuario,'password'=>$request->password]))
        {
            $user=Auth::user();
            $token = $user->createToken($user->usuario.'-'.now());
            return response()->json([
                'token'=>$token->accessToken,
                'user'=>$user
            ]);
        }
        else{
            return response()->json([
                'error'=>"unauthorized"
            ]);
        }
    }

    public function usesr(Request $request){
        return response()->json($request->user());
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
