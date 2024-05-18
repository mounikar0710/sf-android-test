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
import DropdownPicker from "react-native-dropdown-picker";
import sfLogo from "../../assets/images/sf-logo.png";
import loginBanner from "../../assets/images/sf-login-banner.png";

export default function SelectLead({ navigation }) {
  const [username, setUsername] = useState("");
  const [selectedValue, setSelectedValue] = useState<any>("value1");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNext = () => {
    navigation.navigate("JobIntroduction");
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Item 1", value: "value1" },
    { label: "Item 2", value: "value2" },
    { label: "Item 3", value: "value3" },
  ]);

  return (
    <ImageBackground style={styles.loginContainer} source={loginBanner}>
      <View style={styles.logoWrap}>
        <Image source={sfLogo} style={styles.logo} />
      </View>

      <View style={styles.selectWrap}>
        <Text style={styles.label}>User name</Text>
        <DropdownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropDown}
        />
      </View>
      <View style={styles.btnWrap}>
        <Button title="Continue" style={styles.btn} onPress={handleNext} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: "auto",
    flex: 1,
    resizeMode: "cover", // Adjusts the image to fit the container
    objectFit: "cover",
    width: "100%",
    padding: 10,
    flexDirection: "column",
    justifyContent: "space-between",

    // justifyContent: "center",
    // alignItems: "center",
  },
  loginTitle: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 100,
    marginBottom: 100,
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "auto",
    marginTop: 200,
  },
  logo: {
    width: 244,
    height: 244,
  },
  container: {},
  selectWrap: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
    width: "100%",
    padding: 20,
    alignItems: "center",
    textAlign: "center",
  },
  label: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
  },
  dropDown: {
    width: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrap: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
    // alignItems: "center",
    // width: 400,
  },
  btn: {
    width: 400,
    backgroundColor: "#000",
  },
});
