import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null); // use null para indicar "sem primeiro número"
  const [operation, setOperation] = useState(null);


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  };


  const handleAddNumber = (num) => {
    setCurrentNumber(prev => (prev === '0' ? num : prev + num));
  };


  const handleDecimal = () => {
    setCurrentNumber(prev => (prev.includes('.') ? prev : prev + '.'));
  };


  const handleOperation = (op) => {
    if (operation && firstNumber !== null) {

      const result = calculate(firstNumber, currentNumber, operation);
      setCurrentNumber(String(result));
      setFirstNumber(result);
    } else {

      setFirstNumber(parseFloat(currentNumber));
    }
    setOperation(op);

    setCurrentNumber('0');
  };


  const calculate = (a, b, op) => {
    const numA = Number(a);
    const numB = Number(b);
    switch (op) {
      case '+': return numA + numB;
      case '-': return numA - numB;
      case '*': return numA * numB;
      case '/':
        if (numB === 0) {
          alert('Divisão por zero não permitida!');
          return 0;
        }
        return numA / numB;
      default: return numB;
    }
  };


  const handleSum = () => handleOperation('+');
  const handleSub = () => handleOperation('-');
  const handleMul = () => handleOperation('*');
  const handleDiv = () => handleOperation('/');


  const handleEquals = () => {
    if (operation && firstNumber !== null) {
      const result = calculate(firstNumber, currentNumber, operation);
      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMul} />
          <Button label="/" onClick={handleDiv} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="." onClick={handleDecimal} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleSub} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;