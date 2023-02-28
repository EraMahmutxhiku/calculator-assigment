<?php

namespace App\Services;

use App\Interfaces\Domains\CalculatorDomainInterface;
use App\Interfaces\Services\CalculatorServiceInterface;
use App\Interfaces\Repositories\CalculatorRepositoryInterface;

class CalculatorService implements CalculatorServiceInterface
{
    protected $calculatorRepository;

    public function __construct(
        CalculatorRepositoryInterface $calculatorRepository,
    )
    {
        $this->calculatorRepository = $calculatorRepository;
    }

    public function getRecentCalculations()
    {
        return $this->calculatorRepository->getLatestCalculations();
    }

    public function storeCalculation($calculation, $result)
    {

        $data = [
            'operation' => $calculation,
            'result' => $result,
            'updated_date' => today(),
        ];

        return $this->calculatorRepository->create($data);
    }

    public function deleteCalculation($calculationId)
    {
        return $this->calculatorRepository->delete($calculationId);
    }

    public function destroyAllCalculations()
    {
        return $this->calculatorRepository->destroyAll();
    }

}
