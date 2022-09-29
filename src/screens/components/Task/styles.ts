import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskElement:{
    marginBottom: 8,
    borderRadius: 10,
    width: '100%',
    flexDirection: "row",
    backgroundColor:"#262626"
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B2B2B2",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskText: {
    color: "#666",
  },
  taskDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: "#5E60CE",
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  taskTextDone: {
    color: "#808080",
    textDecorationLine: "line-through"
  }
})