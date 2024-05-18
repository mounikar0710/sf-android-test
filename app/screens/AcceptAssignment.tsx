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

export default function JobIntroduction({ navigation }) {
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
      <View style={styles.acceptQuestion}>Do you accept this assignment?</View>

      <View style={styles.assignmentWrap}>
        <View style={styles.assignment}>assignment</View>
      </View>
      <View style={styles.btnWrap}>
        <Button
          title="Begin assignment"
          style={styles.btn}
          onPress={handleNext}
        />
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
    paddingTop: 100,
  },
  acceptQuestion: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    fontFamily: "sans-serif, Poppins",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 600,
  },
  assignmentWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -150,
  },
  assignment: {
    backgroundColor: "#D9D9D9",
    padding: 20,
    width: 577,
    height: 613,
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
