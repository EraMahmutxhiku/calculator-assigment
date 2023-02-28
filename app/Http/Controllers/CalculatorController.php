<?php

namespace App\Http\Controllers;

use App\Http\Resources\CalculatorResource;
use App\Interfaces\Services\CalculatorServiceInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    protected $calculatorService;
    protected $expressionLanguage;

    public function __construct
    (
        CalculatorServiceInterface $calculatorService,
        ExpressionLanguage         $expressionLanguage,
    )
    {
        $this->calculatorService = $calculatorService;
        $this->expressionLanguage = $expressionLanguage;
    }

    public function calculate(Request $request)
    {
        $operation = $request->calculation;
        $result = $this->expressionLanguage->evaluate($operation);
        $this->calculatorService->storeCalculation($operation, $result);

        return $this->expressionLanguage->evaluate($operation);
    }

    public function getCalculations()
    {
        $operations = $this->calculatorService->getRecentCalculations();

        return CalculatorResource::collection($operations);
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
