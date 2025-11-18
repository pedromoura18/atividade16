import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Launch } from '../types/Launch';

interface Props {
  item: Launch;
}

export default function LaunchCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.date}>
        Data: {new Date(item.date_utc).toLocaleDateString('pt-BR')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    backgroundColor: '#1a1a1a',
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  date: {
    color: '#ccc',
    fontSize: 14,
  },
});
