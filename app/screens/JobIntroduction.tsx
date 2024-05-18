import { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AppBanner from "../../assets/images/sf-app-banner.png";

export default function AcceptAssignment({ navigation }) {
  const [username, setUsername] = useState("");
  const [selectedValue, setSelectedValue] = useState<any>("value1");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNext = () => {
    navigation.navigate("TeamList");
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Item 1", value: "value1" },
    { label: "Item 2", value: "value2" },
    { label: "Item 3", value: "value3" },
  ]);

  return (
    <ImageBackground style={styles.appContainer} source={AppBanner}>
      <View style={styles.quoteWrap}>
        <View style={styles.greetingText}>Good morning, Jimmy!</View>
        <View style={styles.quote}>
          "Safety is something that happens between your ears, not something you
          hold in your hands." - Jeff Cooper
        </View>
      </View>

      <View style={styles.jobTodayWrap}>
        <Text style={styles.jobToday}>
          Your job for today is a “Single right lane closure in the town of
          Holly Springs”
        </Text>
      </View>
      <View style={styles.btnWrap}>
        <Button title="Get Started" style={styles.btn} onPress={handleNext} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: "auto",
    flex: 1,
    resizeMode: "cover", // Adjusts the image to fit the container
    objectFit: "cover",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  quoteWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 215,
  },
  jobTodayWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // marginTop: 215,
  },
  greetingText: {
    fontFamily: "Ink Free",
    fontSize: 48,
    fontWeight: 400,
    textAlign: "center",
    width: 565,
  },
  jobToday: {
    width: 565,
    // marginTop: 50,
    textAlign: "center",
    fontFamily: "sans-serif, Inter",
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: 500,
    color: "black",
  },
  quote: {
    width: 565,
    marginTop: 50,
    textAlign: "center",
    fontFamily: "sans-serif, Poppins",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 400,
    color: "black",
  },
  btnWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
  },
  btn: {
    width: 400,
    backgroundColor: "#000",
  },
});
