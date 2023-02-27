<?php

namespace App\Interfaces\Services;

interface CalculatorServiceInterface
{
    public function getRecentCalculations();
    public function storeCalculation($request);

}
