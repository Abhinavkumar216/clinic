import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../components/InputBox";
import Logo from "../components/Logo";
import PrimaryButton from "../components/PrimaryButton";
import Authgreetings from "../components/authgreetings";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { Font, FontStyle } from "../constants/Fonts";

const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Authgreetings
        title="Hi, Welcome Back!"
        subTitle="Hope you're doing fine."
      />
      <View style={{ marginTop: 50 }}>
        <InputBox placeholder="Your Email" iconName="envelope-o" />
      </View>
      <View style={{ marginVertical: 15 }}>
        <InputBox placeholder="Password" iconName="lock" isSecureText={true} />
      </View>
      <View style={{ marginTop: 15 }}>
        <PrimaryButton title="Sign in" onPress={() => {}} loading={false} />
      </View>

      <View style={styles.orContainer}>
        <View style={styles.orline} />
        <Text style={{ color: Colors.light.Grey600, fontSize: 16 }}>or</Text>
        <View style={styles.orline} />
      </View>

      <TouchableOpacity style={styles.socialbutton}>
        <Ionicons name="logo-google" size={18} />
        <Text style={FontStyle.bodySMedium}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialbutton}>
        <Ionicons name="logo-facebook" size={18} />
        <Text style={FontStyle.bodySMedium}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.forgotContainer}>
        <Text style={[FontStyle.bodySMedium, { color: Colors.light.Blue }]}>
          Forgot password?
        </Text>
      </View>
      <View style={styles.forgotContainer}>
        <Text style={[FontStyle.bodySRegular, { color: Colors.light.Grey500 }]}>
          Don't have an account yet?{" "}
          <Text
            style={{ fontFamily: Font.InterMedium, color: Colors.light.Blue }}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  forgotContainer: {
    // borderWidth:1,
    marginTop: 25,
    alignItems: "center",
  },
  orline: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.light.Grey400,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 25,
    marginHorizontal: 16,
  },
  socialbutton: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 10,
    marginHorizontal: 16,
    borderRadius: 10,
    borderColor: Colors.light.Grey300,
    marginTop:15
  },
});
