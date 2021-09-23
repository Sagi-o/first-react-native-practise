import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput/GoalInput';
import GoalItem, { Goal } from './components/GoalItem/GoalItem';
import Header from './components/UI/Header/Header';

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addButtonHandler = (enteredGoal: string) => {
    if (!enteredGoal?.trim()) {
      return;
    }
    setGoals(state => [...state, { key: Math.random().toString(), value: enteredGoal }]);
  }

  const deleteHandler = (key: string) => {
    setGoals(state => state.filter(goal => goal.key !== key));
  }

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <Header>Goals</Header>
      <GoalInput addButtonHandler={addButtonHandler} />
      {!goals.length && <View style={styles.emptyState}><Text>Nothing to see here</Text></View>}
      <FlatList
        style={styles.goalsContainer}
        keyExtractor={(item, index) => item.key}
        data={goals} renderItem={itemData => (<GoalItem onDelete={deleteHandler} goal={itemData.item}/>)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    marginTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '80%',
  }
});
