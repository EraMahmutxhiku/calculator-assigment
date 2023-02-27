<?php

namespace App\Providers;

use App\Domains\CalculatorDomain;
use App\Interfaces\Domains\CalculatorDomainInterface;
use App\Interfaces\Services\CalculatorServiceInterface;
use App\Repositories\CalculatorRepository;
use App\Interfaces\Repositories\CalculatorRepositoryInterface;
use App\Services\CalculatorService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //Services
        $this->app->bind(CalculatorServiceInterface::class, CalculatorService::class);

        //Domains
        $this->app->bind(CalculatorDomainInterface::class, CalculatorDomain::class);

        //Repositories
        $this->app->bind(CalculatorRepositoryInterface::class, CalculatorRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
