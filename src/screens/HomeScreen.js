import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.brand}><Text style={styles.brandText}>RN · PROYECTO FINAL</Text></View>
      <View style={styles.center}>
        <View style={styles.iconWrap}><Text style={styles.icon}>⌗</Text></View>
        <Text style={styles.title}>Calculadora{ '\n' }inteligente</Text>
        <Text style={styles.description}>Operaciones esenciales, una interfaz sencilla y resultados al instante.</Text>
        <Pressable accessibilityRole="button" accessibilityLabel="Abrir calculadora" onPress={() => navigation.navigate('Calculadora')} style={({ pressed }) => [styles.button, pressed && { opacity: 0.75 }]}>
          <Text style={styles.buttonText}>Abrir calculadora   →</Text>
        </Pressable>
      </View>
      <Text style={styles.footer}>React Native · JavaScript · Android / iOS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: 28, justifyContent: 'space-between' },
  brand: { flexDirection: 'row', paddingTop: 18 },
  brandText: { color: colors.primary, fontSize: 12, fontWeight: '700', letterSpacing: 2 },
  center: { alignItems: 'center', justifyContent: 'center' },
  iconWrap: { width: 112, height: 112, borderRadius: 34, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', marginBottom: 34, borderWidth: 1, borderColor: colors.border },
  icon: { fontSize: 68, color: colors.primary },
  title: { color: colors.text, textAlign: 'center', fontSize: 38, fontWeight: '800', lineHeight: 46 },
  description: { color: colors.muted, textAlign: 'center', fontSize: 16, lineHeight: 25, marginTop: 16, marginBottom: 36, maxWidth: 340 },
  button: { backgroundColor: colors.primaryDark, borderRadius: 18, paddingVertical: 19, paddingHorizontal: 28, alignSelf: 'stretch', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  footer: { color: colors.muted, textAlign: 'center', fontSize: 12, paddingBottom: 12 },
});
