import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler(goal) {
    setGoals(prevState => [...prevState, {goal, id: Date.now()}])
    closeModal()
    // setGoal('')
  }

  function deleteGoalHandler(id) {
    setGoals(goals => {
      return goals.filter(goal => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function closeModal() {
    setModalIsVisible(false)
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#fff" onPress={startAddGoalHandler} />
        <GoalInput addGoalHandler={addGoalHandler} visible={modalIsVisible} closeModal={closeModal}/>
        <View style={styles.goalsContainer}>
          <FlatList data={goals} alwaysBounceVertical={false} bounces={false} renderItem={itemData => {
            return (<GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />) 
          }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    
  },
  goalsContainer: {
    flex: 5
  }
});
