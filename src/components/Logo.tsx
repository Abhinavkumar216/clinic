import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Font } from "../constants/Fonts";
import { Colors } from "../constants/Colors";

const Logo = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Image
        source={require("@/assets/images/LogoColor.png")}
        style={styles.image}
      />
      <Text style={styles.logoText}>
        Health
        <Text
          style={{
            fontFamily: Font.InterMedium,
            color: Colors.light.Grey900,
          }}
        >
          Pal
        </Text>
      </Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  image: {
    width: 75,
    height: 75,
    marginBottom: 15,
  },
  logoText: {
    fontSize: 18,
    fontFamily: Font.InterRegular,
    color: Colors.light.Grey500,
  },
});
