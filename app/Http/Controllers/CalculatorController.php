<?php

namespace App\Http\Controllers;

use App\Http\Resources\CalculatorResource;
use App\Interfaces\Services\CalculatorServiceInterface;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    protected $calculatorService;

    public function __construct(CalculatorServiceInterface $calculatorService)
    {
        $this->calculatorService = $calculatorService;
    }

    public function calculate(Request $request)
    {
        $expression = $request->calculation;

        return response(1);
    }


    public function getCalculations()
    {
        $operations = $this->calculatorService->getRecentCalculations();

        return CalculatorResource::collection($operations);
    }

    public function store(Request $request)
    {
        $operation = $request->calculation;
//        $result = $this->getResultFromOperation($operationToExecute);

        $calculation = $this->calculatorService->storeCalculation($operation);

        return new CalculatorResource($calculation);
    }

    public function destroy($calculationId)
    {
        return $this->calculatorService->deleteCalculation($calculationId);
    }

    public function destroyAll()
    {
        return $this->calculatorService->destroyAllCalculations();
    }
}
