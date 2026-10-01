import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Counter from './components/Counter';

export default function App() {
  const [dark, setDark] = useState(false);
  const theme = dark ? styles.dark : styles.light;

  return (
    <View style={[styles.container, theme]}>
      <Text style={[styles.title, { color: dark ? '#fff' : '#1e3a8a' }]}>
        Quiz 3 - Expo App
      </Text>
      <Text style={[styles.subtitle, { color: dark ? '#cbd5e1' : '#475569' }]}>
        Updated UI with theme toggle and counter
      </Text>

      <Counter dark={dark} />

      <TouchableOpacity style={styles.toggle} onPress={() => setDark(!dark)}>
        <Text style={styles.toggleText}>
          Switch to {dark ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>

      <StatusBar style={dark ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  light: { backgroundColor: '#eff6ff' },
  dark: { backgroundColor: '#0f172a' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 16, marginBottom: 32, textAlign: 'center' },
  toggle: { marginTop: 32, backgroundColor: '#f59e0b', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 24 },
  toggleText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
