<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortifolioController extends Controller
{
    /**
     * Show the portifolio session
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('portifolio');
    }
}
