import React from 'react'
import { View, StyleSheet, Text, Pressable } from 'react-native'

const GoalItem = ({ itemData, onDeleteItem }) => {
  return (
    <Pressable android_ripple={{color: '#aaa'}} 
          onPress={() => onDeleteItem(itemData.item.id)}
          style={ ({pressed}) => pressed && styles.pressedItem}
          >
      <View key={itemData.index} style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.goal}</Text>
      </View>
    </Pressable>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: '#fff'
  },
  pressedItem: {
    opacity: 0.5
  }
})