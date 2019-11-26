import React, { useState }  from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  

  //when the user presses the button we want to use the entered goal

  const addGoalHandler = (title) => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value:title}]);
    setIsAddMode(false)
  }
  const removeGoalHandler = goalId => {
    console.log('removing goal id', goalId)
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })

  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title='Add a goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem id={itemData.item} title={itemData.item.value} onDelete={removeGoalHandler.bind(this, itemData.item.id)}/>} /> 

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
