<?php

namespace App\Repositories;

use App\Interfaces\Repositories\CalculatorRepositoryInterface;
use App\Models\Calculator;

class CalculatorRepository extends BaseRepository implements CalculatorRepositoryInterface
{
    protected $model;

    public function __construct(Calculator $company)
    {
        parent::__construct($company);
    }

    public function getLatestCalculations()
    {
        return $this->model->orderBy('created_at', 'desc')->take(10)->get();
    }

    public function destroyAll()
    {
        return $this->model->where('id', 'like', '%%')->delete();
    }

}
