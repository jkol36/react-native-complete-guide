import React, { useState }  from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([])

  

  //when the user presses the button we want to use the entered goal

  const addGoalHandler = (title) => {
    console.log('entered goal', title)
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value:title}]);
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/>} /> 

    </View>
  );
}

//creates a javascript object to hold styles
//might get additional performance optimizations in the future

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
  
});
