// Lógica de negocio independiente de React Native: fácil de probar.
export const initialCalculatorState = {
  display: '0',
  previous: null,
  operator: null,
  waitingForOperand: false,
  history: '',
  error: false,
};

const MAX_LENGTH = 13;

function formatResult(value) {
  if (!Number.isFinite(value)) return 'Error';
  const rounded = Number(value.toPrecision(12));
  const text = String(rounded);
  return text.length > MAX_LENGTH ? rounded.toExponential(6) : text;
}

export function performOperation(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '−': return a - b;
    case '×': return a * b;
    case '÷': return b === 0 ? NaN : a / b;
    default: return b;
  }
}

export function calculatorReducer(state, action) {
  const { type, value } = action;
  if (type === 'CLEAR') return { ...initialCalculatorState };
  if (state.error) {
    if (type === 'DIGIT' || type === 'DECIMAL') {
      return calculatorReducer({ ...initialCalculatorState }, action);
    }
    return state;
  }
  if (type === 'DIGIT') {
    if (!/^[0-9]$/.test(value)) return state;
    if (state.waitingForOperand) return { ...state, display: value, waitingForOperand: false };
    if (state.display.replace(/[-.]/g, '').length >= MAX_LENGTH) return state;
    return { ...state, display: state.display === '0' ? value : state.display + value };
  }
  if (type === 'DECIMAL') {
    if (state.waitingForOperand) return { ...state, display: '0.', waitingForOperand: false };
    return state.display.includes('.') ? state : { ...state, display: state.display + '.' };
  }
  if (type === 'SIGN') {
    if (state.display === '0') return state;
    return { ...state, display: state.display.startsWith('-') ? state.display.slice(1) : '-' + state.display };
  }
  if (type === 'PERCENT') {
    return { ...state, display: formatResult(Number(state.display) / 100), waitingForOperand: false };
  }
  if (type === 'BACKSPACE') {
    if (state.waitingForOperand) return state;
    const next = state.display.slice(0, -1);
    return { ...state, display: !next || next === '-' ? '0' : next };
  }
  if (type === 'OPERATOR') {
    if (!['+', '−', '×', '÷'].includes(value)) return state;
    const current = Number(state.display);
    if (state.operator && state.previous !== null && !state.waitingForOperand) {
      const result = performOperation(state.previous, current, state.operator);
      const formatted = formatResult(result);
      if (formatted === 'Error') return { ...initialCalculatorState, display: 'Error', history: 'No se puede dividir entre cero', error: true };
      return { ...state, previous: Number(formatted), display: formatted, operator: value, waitingForOperand: true, history: `${formatted} ${value}` };
    }
    return { ...state, previous: state.waitingForOperand && state.previous !== null ? state.previous : current, operator: value, waitingForOperand: true, history: `${state.waitingForOperand && state.previous !== null ? state.previous : state.display} ${value}` };
  }
  if (type === 'EQUALS') {
    if (!state.operator || state.previous === null || state.waitingForOperand) return state;
    const current = Number(state.display);
    const result = formatResult(performOperation(state.previous, current, state.operator));
    const history = `${state.previous} ${state.operator} ${state.display} =`;
    if (result === 'Error') return { ...initialCalculatorState, display: 'Error', history: 'No se puede dividir entre cero', error: true };
    return { ...initialCalculatorState, display: result, history, waitingForOperand: true };
  }
  return state;
}
