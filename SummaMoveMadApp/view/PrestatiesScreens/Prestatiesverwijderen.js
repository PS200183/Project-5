import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { GebuikerContest } from "../../localData/gebruikergegevens";

const Prestatiesverwijderen = ({ navigation, route }) => {
 const { Gebuiker } = useContext(GebuikerContest);

 const [loading, setLoading] = useState(false);

  const prestatie = route.params.prestatie;

 const deleteData = async () => {
   try {
     const response = await fetch(
       "http://127.0.0.1:8000/api/Prestaties/" + prestatie.id.toString(),
       {
         method: "DELETE",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
           Authorization: "Bearer " + Gebuiker.access_token,
         },
       }
     );
     const json = await response.json();
     console.log(json);
     if (json.success == true) {
       setLoading(false);
       navigation.navigate("Home");
     } else {
       alert("Er is een fout opgetreden");
       Alert.alert("Er is een fout opgetreden");
     }
   } catch (error) {
     alert("Er is een fout opgetreden");
     Alert.alert("Er is een fout opgetreden");
     console.error(error);
   }
 };




  return (
    <View style={styles.container}>
      <View>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <Text style={{ fontWeight: "bold", height: 30 }}>
        Eindtijd: {prestatie.eindtijd}
      </Text>

      <Text style={{ fontWeight: "bold", height: 30 }}>
        Begintijd: {prestatie.begintijd}
      </Text>

      <Text style={{ fontWeight: "bold", height: 30 }}>
        Aantal: {prestatie.aantal}
      </Text>
      <Text style={{ fontWeight: "bold", height: 30 }}>
        Naam oefening: {prestatie.naamoefening}
      </Text>

      <TouchableOpacity onPress={deleteData}>
        <View style={{ backgroundColor: "#24126E", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "Deleting..." : "Delete"}
            {loading == true ? (
              <Icon name="cached" size={28} color="white" />
            ) : null}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Prestatiesverwijderen;
