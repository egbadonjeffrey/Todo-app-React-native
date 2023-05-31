import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Water Plants", key: 1 },
    { text: "Clean Room", key: 2 },
    { text: "Write Code", key: 3 },
    { text: "Eat", key: 4 },
    { text: "Sleep", key: 5 },
    { text: "Rinse and Repeat", key: 6 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "Todos must be more than 3 characters long", [
        {
          text: "Understood",
          onPress: () => console.log("Alert closed"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 50,
  },
});
