<?php

namespace App\Interfaces\Repositories;

interface CalculatorRepositoryInterface
{
    public function getLatestCalculations();
    public function destroyAll();
}
