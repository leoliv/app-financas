import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  customStyle?: "submit" | "link";
}

export const Button = ({ label, customStyle, ...rest }: ButtonProps) => {
  const buttonStyle =
    customStyle === "link" ? styles.link : styles.submitButton;
  const textStyle =
    customStyle === "link" ? styles.linkText : styles.submitText;
  return (
    <TouchableOpacity style={buttonStyle} {...rest}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    width: "90%",
    height: 45,
    borderRadius: 8,
    backgroundColor: "#3b3dbf",
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
