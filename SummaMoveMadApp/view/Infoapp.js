import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
const height = Dimensions.get("window").height / 2 - 30;
const startscherm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text>
          Dit is de app van tegenwoordig voor de enige echte summa studenten.
          Wil jij graag sporten maar weet je niet precies hoe?! Op deze app kun
          je meerdere verschillende oefeningen vinden, ook kun je hier je
          prestaties per keer toevoegen. Verbeter je zelf of je mede studenten
          en word fit!
        </Text>
{/*         
        <Text>Versie: - SummaMove v1.01</Text>
       
        <Text>
          <tr>Laatste update: - Inlog mogelijkheid</tr>
          <tr> - Informatie scherm</tr>
        </Text> */}

        <TouchableOpacity
          style={styles.tekstmiddel}
          onPress={() => navigation.navigate("StartScherm")}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            {" "}
            Terug
          </Text>
        </TouchableOpacity>
      </SafeAreaView>

      <StatusBar barStyle="light-content" />
    </View>
  );
};

export default startscherm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  tekstmiddel: {
    backgroundColor: "#24126E",
    height: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
