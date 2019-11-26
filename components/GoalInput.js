import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);


    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={'course goal'}
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )

}

const styles = StyleSheet.create({
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
        alignItems: 'center'
    },
})

export default GoalInput;