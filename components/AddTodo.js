import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState();
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="New Todo..."
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => {
          submitHandler(text);
        }}
        title="Add todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderBottomColor: "#ddd",
  },
});
