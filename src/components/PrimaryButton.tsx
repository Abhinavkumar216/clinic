import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constants/Colors";
import { Font, FontStyle } from "../constants/Fonts";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

const PrimaryButton = ({ title, loading, onPress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {loading == true ? (
        <ActivityIndicator size={"small"} color={"#fff"} />
      ) : (
        <Text style={[FontStyle.Button, styles.buttonText]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.MidnightBlue,
    width: "90%",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 50,
    alignSelf: "center",
  },
  buttonText: {
    color: Colors.light.white,
  },
});
