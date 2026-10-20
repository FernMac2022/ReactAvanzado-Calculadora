import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

export default function CalcButton({ label, onPress, variant = 'number', accessibilityLabel }) {
  const bg = variant === 'equal' ? colors.primaryDark : variant === 'operator' ? colors.operation : variant === 'utility' ? colors.surfaceLight : colors.number;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      onPress={onPress}
      style={({ pressed }) => [styles.button, { backgroundColor: bg, opacity: pressed ? 0.72 : 1 }]}
    >
      <Text style={[styles.label, variant === 'operator' && styles.operationText]}>{label}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: { flex: 1, minHeight: 61, margin: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 20 },
  label: { color: colors.text, fontWeight: '700', fontSize: 25 },
  operationText: { color: '#DFD5FF' },
});
