import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface CustomInputProps extends TextInputProps {
  label?: string;
}

export const CustomInput = ({ label, ...rest }: CustomInputProps) => {
  return (
    <View style={styles.areaInput}>
      <TextInput style={styles.input} placeholderTextColor={"#999"} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  areaInput: {
    marginBottom: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 10,
    borderRadius: 8,
    fontSize: 17,
    color: "#121212",
  },
});
