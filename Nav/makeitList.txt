import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListScreen = (props) => {
    const showDetailScreen = () => {
        props.navigation.push('stDetails');
    }

    return (
        <View style={styles.container}>
            <Text>ListScreen</Text>
            <Pressable onPress={showDetailScreen}>
                <Text>Press To Show DetailsScreen</Text>
            </Pressable>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });