import { motion } from 'framer-motion';
import { useState } from 'react';

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case '×': return firstValue * secondValue;
      case '÷': return firstValue / secondValue;
      default: return secondValue;
    }
  };

  const handleEquals = () => {
    if (!previousValue || !operation) return;

    const inputValue = parseFloat(display);
    const newValue = calculate(previousValue, inputValue, operation);
    setDisplay(String(newValue));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const buttons = [
    { label: 'AC', action: clear, className: 'bg-red-500 hover:bg-red-600 text-white' },
    { label: '±', action: () => setDisplay(String(-parseFloat(display))), className: 'bg-gray-600 hover:bg-gray-500 text-gray-100' },
    { label: '%', action: () => setDisplay(String(parseFloat(display) / 100)), className: 'bg-gray-600 hover:bg-gray-500 text-gray-100' },
    { label: '÷', action: () => performOperation('÷'), className: 'bg-orange-500 hover:bg-orange-600 text-white' },
    { label: '7', action: () => inputDigit('7'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '8', action: () => inputDigit('8'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '9', action: () => inputDigit('9'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '×', action: () => performOperation('×'), className: 'bg-orange-500 hover:bg-orange-600 text-white' },
    { label: '4', action: () => inputDigit('4'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '5', action: () => inputDigit('5'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '6', action: () => inputDigit('6'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '-', action: () => performOperation('-'), className: 'bg-orange-500 hover:bg-orange-600 text-white' },
    { label: '1', action: () => inputDigit('1'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '2', action: () => inputDigit('2'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '3', action: () => inputDigit('3'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '+', action: () => performOperation('+'), className: 'bg-orange-500 hover:bg-orange-600 text-white' },
    { label: '0', action: () => inputDigit('0'), className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600 col-span-2' },
    { label: '.', action: inputDecimal, className: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600' },
    { label: '=', action: handleEquals, className: 'bg-orange-500 hover:bg-orange-600 text-white' },
  ];

  return (
    <motion.div
      className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-sm"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-100 mb-2">Calculator</h3>
        <div className="bg-gray-700 rounded-lg p-4 mb-4 border border-gray-600">
          <div className="text-right text-gray-100 text-2xl font-mono min-h-[2rem]">
            {display}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          <motion.button
            key={button.label}
            onClick={button.action}
            className={`${button.className} font-bold text-lg rounded-lg p-4 transition-colors duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {button.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
} 