<?php

namespace App\Providers;

use App\Providers\GraphHelper;
use Illuminate\Support\ServiceProvider;
use Microsoft\Graph\Graph;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */

     public function register()
     {
        GraphHelper::initializeGraphForAppOnlyAuth();
     }

    
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
