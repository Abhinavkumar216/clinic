import { OnboardingItem, Onboardingdata } from "@/assets/Data/Onboardingdata";
import { Colors } from "@/src/constants/Colors";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  Extrapolation,
  FadeInDown,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Font } from "../constants/Fonts";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 500;

interface ViewableItemsChangedProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatlistRef = useRef<FlatList<number>>(null);

  const progress = useSharedValue(0);

  const onViewRef = useRef(({ changed }: ViewableItemsChangedProps) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index ?? 0);
      progress.value = withTiming(changed[0].index ?? 0, { duration: 300 });
    }
  });

  const scrollToIndex = (index: number) => {
    flatlistRef.current?.scrollToIndex({ animated: true, index });
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <FlatList
        ref={flatlistRef}
        data={Onboardingdata}
        pagingEnabled
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 95 }}
        onViewableItemsChanged={onViewRef.current}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index }) => (
          <Card data={item} index={index} scrollToIndex={scrollToIndex} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.indicator}>
        {Onboardingdata.map((_, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            return {
              width: interpolate(
                progress.value,
                [index - 1, index, index + 1],
                [8, 32, 8],
                Extrapolation.EXTEND
              ),
              backgroundColor:
                index === currentIndex
                  ? Colors.light.MidnightBlue
                  : Colors.light.Grey300,
            };
          });
          return (
            <TouchableOpacity key={index} onPress={() => scrollToIndex(index)}>
              <Animated.View style={[styles.indicatorCircle, animatedStyle]} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ marginVertical: 35 }}>
        <Link href={"/signin"} replace asChild>
          <Text style={styles.subHeading}>Skip</Text>
        </Link>
      </View>
    </View>
  );
};

type DataProps = {
  data: OnboardingItem;
  index: number;
  scrollToIndex: (index: number) => void;
};

const Card = ({ data, index, scrollToIndex }: DataProps) => {
  const onPress = () => {
    if (index == 2) {
      router.replace("/signin");
    } else {
      scrollToIndex(index + 1);
    }
  };
  return (
    <View>
      <Image source={data.Image} style={styles.image} />
      <View style={styles.bottomContainer}>
        <Animated.Text entering={FadeInDown} style={styles.heading}>
          {data.title}
        </Animated.Text>
        <Animated.Text entering={FadeInDown} style={styles.subHeading}>
          {data.subtitle}
        </Animated.Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{index == 2 ? "Done" : "Next"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.light.white,
  },
  image: { width, height: IMG_HEIGHT },
  bottomContainer: {
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
    width,
  },
  heading: {
    fontSize: 24,
    fontFamily: Font.InterBold,
    marginTop: 15,
    marginBottom:5,
    color:Colors.light.MidnightBlue
  },
  subHeading: {
    textAlign: "center",
    fontFamily: Font.InterRegular,
    fontSize: 16,
    lineHeight: 26,
    color:Colors.light.Grey500
  },
  button: {
    backgroundColor: "#1C2A3A",
    width: (width * 80) / 100,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 25,
  },
  buttonText: {
    fontFamily: Font.InterMedium,
    fontSize: 16,
    color: Colors.light.white,
  },
  indicator: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
    // borderWidth: 1,
  },
  indicatorCircle: { height: 8, borderRadius: 100, marginRight: 5 },
});
