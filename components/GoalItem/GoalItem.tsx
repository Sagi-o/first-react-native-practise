import React, { FunctionComponent } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export type Goal = { key: string, value: string };

interface GoalItemProps {
    goal: Goal;
    onDelete: (key: string) => void;
}

const GoalItem: FunctionComponent<GoalItemProps> = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.35} onPress={props.onDelete.bind(null, props.goal.key)}>
            <View style={styles.goal}>
                <Text>{props.goal?.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goal: {
        padding: 8,
        marginBottom: 4,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 4,
    },
});
