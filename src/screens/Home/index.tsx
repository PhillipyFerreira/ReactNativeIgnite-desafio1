import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image} from "react-native";

import { TaskElement, Task } from "../components/Task";

import { styles } from "./style";

export function Home() {
  const [createdTasks, setCreatedTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');
  const [createdCount, setCreatedCount] = useState<number>(0);
  const [finishedCount, setFinishedCount] = useState<number>(0);
  
  function handleTaskAdd() {
    
    if ((createdTasks.findIndex(task => task.name === taskName)) !== -1) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
    setCreatedTasks(prevState => [
      ...prevState, 
      {
        name: taskName,
        done: false,
      },
    ]);
    setCreatedCount(createdTasks.length+1)
    setTaskName('');
  }

  function handleTaskRemove(name: string) {
    
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setCreatedTasks(prevState => prevState.filter(item => item.name !== name))
          setCreatedCount(createdTasks.length-1)
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTaskDone(name: string) {
    const index = createdTasks.findIndex(task => task.name === name)
    createdTasks[index].done = !createdTasks[index].done
    setCreatedTasks(createdTasks)
    setFinishedCount((createdTasks[index].done) ? finishedCount+1 : finishedCount-1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.eventTitle}>
        <Image
          style={styles.logo}
          source={require('../../../assets/todo_title.png')}
        />
      </View>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        {/* onPress={handleTaskAdd} */}
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Image
          style={styles.addButtonImage}
          source={require('../../../assets/addButton.png')}
        />
        </TouchableOpacity>
      </View>

      <View style={styles.listHeader}>
        <View style={styles.listHeaderCreated}>
          <Text style={styles.listHeaderTextCreated}> Criadas</Text>
          <View style={styles.countStyle}>
            <Text style={styles.countText}>
              {createdCount}
            </Text>
          </View>
        </View>
        <View style={styles.listHeaderFinished}>
          <Text style={styles.listHeaderTextFinished}> Concluídas</Text>
          <View style={styles.countStyle}>
            <Text style={styles.countText}>
              {finishedCount}
            </Text>
          </View>
          
        </View>
      </View>

      <FlatList style={{width: '100%'}}
        data={createdTasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TaskElement 
            key={item.name}
            taskContext={item}
            setTaskDone={() => handleTaskDone(item.name)} 
            removeTask={() => handleTaskRemove(item.name)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image
              style={styles.clipboardLogo}
              source={require('../../../assets/clipboard.png')}
            />
            <Text style={styles.listEmptyTextBold}>
            Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}