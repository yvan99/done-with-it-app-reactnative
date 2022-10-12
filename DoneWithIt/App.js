import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* safe area view helps to bundle our app in the screen container so that
      it won't have to be bothered with top notches */}
      <Text numberOfLines={1}>Hello React Native</Text>
 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
