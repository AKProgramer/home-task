import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Counter({ dark }) {
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.card, { backgroundColor: dark ? '#1e293b' : '#fff' }]}>
      <Text style={[styles.count, { color: dark ? '#fff' : '#111827' }]}>{count}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, styles.minus]} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.reset]} onPress={() => setCount(0)}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.plus]} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: '100%', alignItems: 'center', padding: 24, borderRadius: 16, elevation: 4,
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } },
  count: { fontSize: 56, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row', gap: 12 },
  btn: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 },
  minus: { backgroundColor: '#ef4444' },
  reset: { backgroundColor: '#64748b' },
  plus: { backgroundColor: '#22c55e' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
