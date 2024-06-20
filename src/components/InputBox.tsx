import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Font } from "../constants/Fonts";
import { Icon } from "@expo/vector-icons/build/createIconSet";

type InputProps = {
  placeholder: string;
  iconName: keyof typeof FontAwesome.glyphMap;
  isSecureText?: boolean | undefined;
  editable?: boolean;
};

const InputBox = ({ placeholder, iconName, isSecureText , editable}: InputProps) => {
  return (
    <View style={styles.inputWrap}>
      <View style={styles.iconBox}>
        <FontAwesome name={iconName} size={21} color={Colors.light.Grey400} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        cursorColor={Colors.light.MidnightBlue}
        placeholderTextColor={Colors.light.Grey400}
        secureTextEntry={isSecureText}
        editable={editable}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputWrap: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    borderColor: Colors.light.Grey300,
  },
  input: {
    // borderWidth: 1,
    paddingVertical: 5,
    flex: 1,
    paddingHorizontal: 15,
    color: Colors.light.Grey900,
    fontSize: 16,
    fontFamily: Font.InterRegular,
    alignSelf: "center",
  },
  iconBox: {
    width: 30,
    // borderWidth:1,
    alignItems: "center",
  },
});
