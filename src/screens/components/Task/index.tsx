import { Text, TouchableOpacity, View, Image } from "react-native";

import { styles } from "./styles";

export interface Task {
  name: string;
  done: boolean;
}

interface TasksListProps {
  taskContext: Task;
  setTaskDone: (name: string) => void;
  removeTask: (name: string) => void;
}

export function TaskElement({
  taskContext,
  setTaskDone,
  removeTask,
}: TasksListProps) {
  return (
    <View style={styles.taskElement}>
      <View>
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.taskButton}
            onPress={() => setTaskDone(taskContext.name)}
          >
            <View
              style={taskContext.done ? styles.taskDone : styles.task}
            >
              {/* {task.done && <Icon name="check" size={12} color="#FFF" />} */}
            </View>

            <Text style={taskContext.done ? styles.taskTextDone : styles.taskText}>
              {taskContext.name}
            </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ marginLeft: 'auto',}}
        onPress={() => removeTask(taskContext.name)}
      >
        <Image source={require('../../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
}