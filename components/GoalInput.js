import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);


    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='Slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={'course goal'}
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CANCEL' onPress={props.onCancel} color='red' />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>

                </View>

            </View>
        </Modal>

    )

}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderWidth: 1,
        width: '75%',
        padding: 10,
        marginBottom: 10
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        width:'30%'
    },
    button: {
        width: '80%',
        marginLeft:10
    }
})

export default GoalInput;