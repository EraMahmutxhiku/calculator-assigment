<?php

namespace App\Domains;

use App\Enums\PercentageValue;
use App\Interfaces\Domains\CalculatorDomainInterface;
use Illuminate\Http\Request;

class CalculatorDomain implements CalculatorDomainInterface
{

    public function calculation(Request $request)
    {
        $expression = $request->calculation;
        $expression = str_replace(' ', '', $expression);
        $result = $this->containsInvalidCharacters($expression);

        $result = eval("die();");

        return response()->json([
            'result' => $result
        ]);

    }

    private function containsInvalidCharacters($formula)
    {
        return preg_match('/[^0-9+\-\/\*\(\)]/', $formula);
    }

    public function calculati(Request $request) {
        $expression = '3+4*5-(1+2)*3';
        $result = null;
        $operator = null;
        $operands = [];

        for ($i = 0; $i < strlen($expression); $i++) {
            $char = $expression[$i];

            if (is_numeric($char)) {
                $operands[] = (int)$char;
            } elseif (in_array($char, array('+', '-', '*', '/'))) {
                $operator = $char;
            } elseif ($char === '(') {
                $j = strpos($expression, ')', $i);
                $operands[] = $this->calculation(substr($expression, $i + 1, $j - $i - 1));
                $i = $j;
            }

            if (count($operands) === 2 && $operator) {

                switch ($operator) {
                    case '+':
                        $result = $operands[0] + $operands[1];
                        break;
                    case '-':
                        $result = $operands[0] - $operands[1];
                        break;
                    case '*':
                        $result = $operands[0] * $operands[1];
                        break;
                    case '/':
                        $result = $operands[0] / $operands[1];
                        break;
                }

                $operands = array($result);

                $operator = null;
//                dd('era', $operands, $operator);
            }
        }

        return $result ?? $operands[0];
    }

    public function calculatieeeon(Request $request)
    {
        $formula = $request->calculation;
        // Remove any spaces from the formula
        $formula = str_replace(' ', '', $formula);

        // Check if the formula is empty
        if (empty($formula)) {
            return response()->json([
                'error' => 'Formula is empty'
            ], 400);
        }

        // Check if the formula contains any characters that are not digits, operators, or brackets
        if (!preg_match('/^[\d+\-\/\*\(\)]+$/', $formula)) {
            return response()->json([
                'error' => 'Invalid characters in formula'
            ], 400);
        }

        // Evaluate the formula
        $result = $this->evaluateFormula($formula);
        dd($result);

        // Return the result as a JSON response
        return response()->json([
            'result' => $result
        ]);

    }

    private function evaluateFormula($formula)
    {
        // Replace all occurrences of "--" with "+"
        $formula = str_replace('--', '+', $formula);

        // Evaluate any brackets in the formula recursively
        while (preg_match('/\(([^\(\)]+)\)/', $formula, $matches)) {
            $result = $this->evaluateFormula($matches[1]);
            $formula = str_replace($matches[0], $result, $formula);
        }

        // Evaluate multiplication and division operators from left to right
        $pattern = '/([\d\.]+)([\*\/])([\d\.]+)/';
        while (preg_match($pattern, $formula, $matches)) {
            $result = $matches[2] == '*' ? $matches[1] * $matches[3] : $matches[1] / $matches[3];
            $formula = str_replace($matches[0], $result, $formula);
        }

        // Evaluate addition and subtraction operators from left to right
        $pattern = '/([\d\.]+)([\+\-])([\d\.]+)/';
        while (preg_match($pattern, $formula, $matches)) {
            $result = $matches[2] == '+' ? $matches[1] + $matches[3] : $matches[1] - $matches[3];
            $formula = str_replace($matches[0], $result, $formula);
        }

        // Return the final result
        return $formula;
    }

}
