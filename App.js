import React, { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    

  }

  //when the user presses the button we want to use the entered goal

  const addGoalHandler = () => {
    console.log('entered goal', enteredGoal)
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'course goal'}
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      <View> 
        {courseGoals.map((courseGoal, index) => {
          return (
            <Text key={index}> {courseGoal}</Text>
          )
        })}
      </View>
    </View>
  );
}

//creates a javascript object to hold styles
//might get additional performance optimizations in the future

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderWidth: 1,
    width: 200,
    padding: 10
  },
  inputContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' }
});
