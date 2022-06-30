import { useIsFocused } from '@react-navigation/native';
import React, { useState ,useEffect  } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";


const width = Dimensions.get('window').width / 2 - 30;
const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#F1F1F1',
  green: '#00B761',
};


const OenfeningGastenScreen = ({navigation}) => {
  const isFoucesd = useIsFocused();


  const [oefeningData, setOefeningData] = useState([]);

  const getAllOefeningen = async () => {
    try {

      const response = await fetch('http://127.0.0.1:8000/api/oefeningens', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
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

  useEffect(() => {
    if (isFoucesd)
    {
      getAllOefeningen();
    }  
  }, [isFoucesd]);



  const Oefingenview = ({oefening}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("OefeningDetails", oefening)}
      >
        <View style={style.card}>
          
          <View
            style={{
              height: 100,
              alignItems: "center",
            }}
          >
            <Image source={oefening.foto} style={style.Image} />
          </View>

          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
            {oefening.naamoefening}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <Icon
        name="arrow-back"
        size={30}
        color={COLORS.dark}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={oefeningData}
        renderItem={({ item }) => {
          return <Oefingenview oefening={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  Image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginTop: 10,
    flex: 1,
    resizeMode: "contain",
  },
});

export default OenfeningGastenScreen

