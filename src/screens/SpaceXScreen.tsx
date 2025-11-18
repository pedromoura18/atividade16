import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import LaunchCard from '../components/LaunchCard';
import { Launch } from '../types/Launch';

export default function SpaceXScreen() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLaunches = async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v4/launches');
      const data = await response.json();
      setLaunches(data);
    } catch (error) {
      console.log('Erro ao buscar dados da API:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lançamentos da SpaceX 🚀</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={launches}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LaunchCard item={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
  },
});
