<?php

namespace App\Services;

use App\Interfaces\Domains\CalculatorDomainInterface;
use App\Interfaces\Services\CalculatorServiceInterface;
use App\Interfaces\Repositories\CalculatorRepositoryInterface;

class CalculatorService implements CalculatorServiceInterface
{
    protected $calculatorRepository;
    protected $calculatorDomain;

    public function __construct(
        CalculatorRepositoryInterface $calculatorRepository,
        CalculatorDomainInterface $calculatorDomain
    )
    {
        $this->calculatorRepository = $calculatorRepository;
        $this->calculatorDomain = $calculatorDomain;
    }

    public function getRecentCalculations()
    {
        return $this->calculatorRepository->getLatestCalculations();
    }

    public function storeCalculation($calculation)
    {
        $result = '34';
//        $result = $this->getResultFromOperation($operationToExecute);

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
