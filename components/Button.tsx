import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  colorError?: "#3b3dbf" | "#ff4d4d";
  customStyle?: "submit" | "link";
}

export const Button = ({ label, customStyle, colorError, ...rest }: ButtonProps) => {
  const buttonStyle = customStyle === "link" ? styles.link : styles.submitButton;
  const textStyle = customStyle === "link" ? styles.linkText : styles.submitText;
  const { loadingAuth } = useContext(AuthContext);
  return (
    <TouchableOpacity style={[buttonStyle, { backgroundColor: colorError }]} {...rest}>
      {loadingAuth ? (
        <ActivityIndicator size={20} color={"#fff"} />
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    width: "90%",
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  submitText: {
    color: "#fff",
    fontSize: 17,
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    color: "#171717",
  },
});
