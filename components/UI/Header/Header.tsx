import React, { FunctionComponent } from "react";
import { Text, StyleSheet } from 'react-native';

interface HeaderProps {
    fontSize?: number,
}
 
const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
        <Text style={styles.header}>{props.children}</Text>
    );
}
 
export default Header;

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
