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

const Prestatiesaanmaken = ({ navigation }) => {
  const [choosenValue, setChoosenValue] = useState(1);
  const [choosenIndex, setChoosenIndex] = useState(1);
  const [prestatie, setprestatie] = useState({
    eindtijd: "",
    aantal: "",
    begintijd: "",
    oefening_id: "",
  });
  const [loading, setLoading] = useState(false);
  const [oefeningData, setOefeningData] = useState([]);

  const onChangeeindtijd = (value) => {
    setprestatie({ ...prestatie, eindtijd: value });
  };

  const onChangebegintijd = (value) => {
    setprestatie({ ...prestatie, begintijd: value });
  };

  const onChangeaantal = (value) => {
    setprestatie({ ...prestatie, aantal: value });
  };
  const { Gebuiker } = useContext(GebuikerContest);

  console.log(Gebuiker);
  const getAllOefeningen = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/oefeningens", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      console.log(json);
      if (json.success == true) {
        const data = json.data;

        setOefeningData(data);
      } else {
        alert(json.message);
      }
    } catch (error) {
      alert("Er is een fout opgetreden");
      Alert.alert("Er is een fout opgetreden");
      console.error(error);
    }
  };

  const saveData = async () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + Gebuiker.access_token,
      },
      body: JSON.stringify({
        begintijd: prestatie.begintijd,
        eindtijd: prestatie.eindtijd,
        aantal: parseInt(prestatie.aantal),
        oefening_id: prestatie.oefening_id,
        user_id: parseInt(Gebuiker.user.id),
      }),
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/Prestaties",
        requestOptions
      );
      const json = await response.json();
      console.log(json);
      if (json.success == true) {
        setLoading(false);
        //  navigation.navigate("Home");
        navigation.goBack();
      } else {
        setLoading(false);
        alert("Er is een fout opgetreden probeer het opnieuw");
        Alert.alert("Er is een fout opgetreden probeer het opnieuw");
      }
    } catch (error) {
      alert("Er is een fout opgetreden");
      Alert.alert("Er is een fout opgetreden");
      console.error(error);
    }
  };

  useEffect(() => {
    getAllOefeningen();
  }, []);
  const Opslaan = () => {
    if (
      prestatie.eindtijd == "" ||
      prestatie.begintijd == "" ||
      prestatie.aantal == "" ||
      prestatie.oefening_id == ""
    ) {
      alert("Vul alle velden in");
      Alert.alert("Vul alle velden in");
    } else {
      saveData();
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <Text style={{ fontWeight: "bold", height: 30 }}>Begin tijd:</Text>
      <TextInput
        onChangeText={(value) => onChangebegintijd(value)}
        style={styles.input}
      />
      <Text style={{ fontWeight: "bold", height: 30 }}>Eindtijd:</Text>
      <TextInput
        onChangeText={(value) => onChangeeindtijd(value)}
        style={styles.input}
      />

      <Text style={{ fontWeight: "bold", height: 30 }}>Aantal: </Text>
      <TextInput
        onChangeText={(value) => onChangeaantal(value)}
        style={styles.input}
      />
      <Text style={{ fontWeight: "bold", height: 30 }}>Naam oefening:</Text>
      <Picker
        onValueChange={(itemValue, itemIndex) => {
          setChoosenValue(itemValue);
          setChoosenIndex(itemIndex);

          setprestatie({ ...prestatie, oefening_id: itemValue });
        }}
      >
        <Picker.Item value={0} label="" />
        {oefeningData.map((item) => {
          return <Picker.Item value={item.id} label={item.naamoefening} />;
        })}
      </Picker>

      <TouchableOpacity onPress={Opslaan}>
        <View
          style={{ backgroundColor: "#24126E", padding: 15, marginTop: 10 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "Creating..." : "Create"}
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

export default Prestatiesaanmaken;
