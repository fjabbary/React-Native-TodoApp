import { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'

const GoalInput = ({ addGoalHandler, visible, closeModal }) => {
  const [goal, setGoal] = useState('')

  function goalInputHandler(text) {
    setGoal(text)
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler} value={goal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Add Goal" color="#b1f080" onPress={() => addGoalHandler(goal)} /></View>
          <View style={styles.button}><Button title="Cancel" color="#f31282" onPress={closeModal}/></View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color:'#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '40%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})