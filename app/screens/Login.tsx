import { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import sfLogo from "../../assets/images/sf-logo.png";
import loginBanner from "../../assets/images/sf-login-banner.png";

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    // Implement your login logic here (e.g., API call, data validation)
    if (username === "valid_user" && password === "valid_password") {
      setError(null); // Clear any previous errors
      navigation.navigate("SelectLead");
    } else {
      setError("Invalid username or password"); // Set an error message
      navigation.navigate("SelectLead");
    }
  };
  return (
    <ImageBackground style={styles.loginContainer} source={loginBanner}>
      <View style={styles.logoWrap}>
        <Image source={sfLogo} style={styles.logo} />
      </View>
      <Text style={styles.loginTitle}>Log In</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Username"
          style={styles.textInput}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
          secureTextEntry
          style={styles.textInput}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Button title="Login" onPress={handleLogin} />
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
    width: "auto",
    padding: 10,

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
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    // Add platform-specific styles here if needed
  },
});
