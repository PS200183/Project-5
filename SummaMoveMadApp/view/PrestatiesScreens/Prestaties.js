import React, { useEffect, useState, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { GebuikerContest } from "../../localData/gebruikergegevens";

const COLORS = {
  white: "#fff",
  dark: "#000",
  red: "#F52A2A",
  light: "#F1F1F1",
  green: "#00B761",
};

const Prestaties = ({ navigation }) => {
    const isFocused = useIsFocused();
  const { Gebuiker } = useContext(GebuikerContest);
  const [PrestatiesData, setPrestatiesData] = useState([]);
  const getAllePrestaties = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/Prestaties?User=" + Gebuiker.user.id,
        {
          method: "GET",
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
        const data = json.data;

        setPrestatiesData(data);
      } else {
        alert(json.message);
      }
    } catch (error) {
      alert("Er is een fout opgetreden");
      Alert.alert("Er is een fout opgetreden");
      console.error(error);
    }
  };
  console.log(PrestatiesData);

  useEffect(() => {
    if (isFocused) {
      getAllePrestaties();
    }
  }, [isFocused]);


  const Prestatiesview = ({ prestatie }) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          padding: 5,
        }}
      >
        <TouchableOpacity onPress={() => alert("Update")}>
          <Text style={{ fontWeight: "bold", height: 30 }}>
            {prestatie.naamoefening}
          </Text>
        </TouchableOpacity>
        <Button
          title="Delete"
          color="#24126E"
          onPress={() => alert("Delete")}
        ></Button>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       

        <View>
          <TouchableOpacity
            onPress={() =>  alert("Create")}
          >
            <Icon name="add" size={18} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={PrestatiesData}
        renderItem={({ item }) => {
          return <Prestatiesview prestatie={item} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Prestaties;
