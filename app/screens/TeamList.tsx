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
import { Checkbox } from "react-native-paper";
import AppBanner from "../../assets/images/sf-app-banner.png";

export default function TeamList({ navigation }) {
  const [username, setUsername] = useState("");
  const [selectedValue, setSelectedValue] = useState<any>("value1");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleConfirmation = () => {
    navigation.navigate("CheckJobList");
  };

  const [selectedTeam, setSelectedTeam] = useState([]);
  const [members, setMembers] = useState([
    { label: "Alice", value: "Alice" },
    { label: "Jeff", value: "Jeff" },
    { label: "Larry", value: "Larry" },
    { label: "Wallace", value: "Wallace" },
    { label: "Millie", value: "Millie" },
  ]);

  return (
    <ImageBackground style={styles.appContainer} source={AppBanner}>
      <View>
        <Text style={styles.welcomeText}>
          We’re excited to get started for today! Below are your teammates. Be
          sure to welcome them and say good morning!
        </Text>
      </View>

      <View style={styles.checkListWrap}>
        <View>
          {members.map((member) => (
            <View key={member.value} style={styles.checkListItem}>
              <Checkbox
                status={
                  Boolean(selectedTeam?.includes(member?.value))
                    ? "checked"
                    : "unchecked"
                }
                key={member.value}
                onPress={(e) => {
                  if (Boolean(selectedTeam?.includes(member?.value))) {
                    let latestTeam = selectedTeam?.filter(
                      (team) => team !== member?.value
                    );
                    console.log(latestTeam, "latestTeam");
                    setSelectedTeam([...latestTeam]);
                  } else {
                    setSelectedTeam([...selectedTeam, member.value]);
                  }
                }}
              />
              <Text style={styles.memberName}>{member.value}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.btnWrap}>
        <Button
          title="Everyone’s here!"
          style={styles.btn}
          onPress={handleConfirmation}
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
    paddingTop: 95,
    paddingLeft: 105,
    paddingRight: 105,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  welcomeText: {
    color: "#000",
    fontFamily: "sans-serif, Inter",
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: 400,
  },
  memberName: {
    color: "#000",
    fontFamily: "sans-serif, Inter",
    fontSize: 27,
    fontStyle: "normal",
    fontWeight: 400,
  },
  checkListWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -150,
  },
  checkListItem: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  btnWrap: {
    display: "flex",

    marginBottom: 50,
  },
  btn: {
    width: 400,
    backgroundColor: "#000",
  },
});
