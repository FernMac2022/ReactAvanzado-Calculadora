import React, { useReducer } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import CalcButton from '../components/CalcButton';
import { colors } from '../theme/colors';
import { calculatorReducer, initialCalculatorState } from '../utils/calculator';

const keys = [
  [{ label: 'AC', type: 'CLEAR', variant: 'utility' }, { label: '+/−', type: 'SIGN', variant: 'utility' }, { label: '%', type: 'PERCENT', variant: 'utility' }, { label: '÷', type: 'OPERATOR', variant: 'operator' }],
  [{ label: '7' }, { label: '8' }, { label: '9' }, { label: '×', type: 'OPERATOR', variant: 'operator' }],
  [{ label: '4' }, { label: '5' }, { label: '6' }, { label: '−', type: 'OPERATOR', variant: 'operator' }],
  [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '+', type: 'OPERATOR', variant: 'operator' }],
  [{ label: '⌫', type: 'BACKSPACE', variant: 'utility' }, { label: '0' }, { label: '.', type: 'DECIMAL' }, { label: '=', type: 'EQUALS', variant: 'equal' }],
];

export default function CalculatorScreen({ navigation }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialCalculatorState);
  return (
    <View style={styles.screen}>
      <View style={styles.top}><Pressable accessibilityRole="button" onPress={() => navigation.goBack()} style={styles.back}><Text style={styles.backText}>← Volver</Text></Pressable><Text style={styles.heading}>Calculadora</Text></View>
      <View style={styles.spacer} />
      <View style={styles.displayPanel}>
        <Text style={styles.history} numberOfLines={2}>{state.history || 'Lista para calcular'}</Text>
        <ScrollView horizontal contentContainerStyle={styles.scroll} showsHorizontalScrollIndicator={false}><Text accessibilityRole="text" accessibilityLabel={`Resultado ${state.display}`} style={[styles.result, state.error && { color: colors.danger }]}>{state.display}</Text></ScrollView>
      </View>
      <View style={styles.keypad}>
        {keys.map((row, rowIndex) => <View key={rowIndex} style={styles.row}>{row.map(key => (
          <CalcButton key={key.label} label={key.label} variant={key.variant} onPress={() => dispatch({ type: key.type || 'DIGIT', value: key.label })} />
        ))}</View>)}
      </View>
      <Text style={styles.help}>AC borra todo · ⌫ elimina un dígito</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 18, paddingBottom: 20 },
  top: { flexDirection: 'row', alignItems: 'center', gap: 20, paddingTop: 18 },
  back: { paddingVertical: 10 },
  backText: { color: colors.primary, fontWeight: '700', fontSize: 15 },
  heading: { color: colors.text, fontSize: 20, fontWeight: '800' },
  spacer: { flex: 1, minHeight: 18 },
  displayPanel: { minHeight: 142, backgroundColor: colors.surface, borderRadius: 24, padding: 20, justifyContent: 'flex-end', marginBottom: 16, borderWidth: 1, borderColor: colors.border },
  history: { color: colors.muted, fontSize: 15, textAlign: 'right', marginBottom: 15 },
  scroll: { flexGrow: 1, justifyContent: 'flex-end' },
  result: { color: colors.text, fontSize: 44, fontWeight: '800', textAlign: 'right' },
  keypad: { gap: 1 },
  row: { flexDirection: 'row', minHeight: 65 },
  help: { color: colors.muted, fontSize: 11, textAlign: 'center', marginTop: 13 },
});
