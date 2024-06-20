import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { FontStyle } from "../constants/Fonts";
import { Colors } from "../constants/Colors";

type GreetingsProp = {
  title: string;
  subTitle: string;
};
const Authgreetings = ({ title, subTitle }: GreetingsProp) => {
  return (
    <View style={styles.container}>
      <Text style={[FontStyle.heading20, { color: Colors.light.MidnightBlue }]}>
        {title}
      </Text>
      <Text
        style={[
          FontStyle.bodySRegular,
          { color: Colors.light.Grey500, marginTop: 5 },
        ]}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export default Authgreetings;

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 25 },
});
