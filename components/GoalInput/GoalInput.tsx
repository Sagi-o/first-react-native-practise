import React, { FunctionComponent, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, Modal } from 'react-native';

interface GoalInputProps {
    addButtonHandler: (enteredGoal: string) => void;
}

const GoalInput: FunctionComponent<GoalInputProps> = (props) => {
    const [enteredGoal, setEnteredGoal] = useState<string>();

    const addButtonHandler = () => {
        if (!enteredGoal?.trim()) {
          return;
        }
        props.addButtonHandler(enteredGoal);
        setEnteredGoal('');
      }
    
      const textInputHandler = (value: string) => {
        setEnteredGoal(value);
      }

    return (
        <View style={styles.inputContainer}>
            <TextInput onChangeText={textInputHandler} style={styles.input} value={enteredGoal} placeholder="Add a goal" />
            <Button onPress={addButtonHandler} title="Add" />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      padding: 8,
      marginRight: 8,
      flex: 11
    },
    addButton: {
      width: 32,
      flex: 1,
    },
  });
  