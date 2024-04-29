<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;


class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ruta = $request->route()->getName();

        $method = $request->method();

    
       
        $permissions = Auth::user()->load('role.permissions')->role->permissions->pluck('route')->toArray();
        

        
        if (!in_array($ruta, $permissions)) {
           

            if($method == 'GET'){
                return redirect()->route('AccessDenied');
            }else{
                return response()->json(['message' => 'No tienes permisos para realizar esta acción'], 403);
            }
            
        }
    
        return $next($request);

    }
}
