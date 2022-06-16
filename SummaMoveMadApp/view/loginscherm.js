import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import React, { useState, useEffect } from "react";

import { useIsFocused } from '@react-navigation/native';
const Login = ({ navigation }) => {
  const [User, setUser] = useState([]);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const isFocused = useIsFocused();

  const LoginStudent = async (email, password) => {

    setPassword("");
    setEmail("");
    try {
      var myHeaders = new Headers();


      myHeaders.append("Content-Type", "application/json");

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          rol: 'Student',
          email: email,
          password: password,
          password_confirmation: password,
        }),
      });
      console.log(response);
      if (response.status == 200) {

        const data = await response.json();
        setUser(data);
        console.log(data);
        
        navigation.navigate("Studenten", {
          screen: 'Home',
          params: { user_id: data.user.id, access_token: data.access_token },
        });
      }
      else {
        setaccess_token(json.access_token);
        alert("Email of wachtwoord is onjuist");
        Alert.alert("Email of wachtwoord is onjuist");
      }
    }
    catch (error) {
      alert("Fout bij aanroepen van api");
      Alert.alert("Fout bij aanroepen van api");
    }



  };

  const login =  () => {
    if (Email == "") {
      alert("Email is niet ingevuld");
      Alert.alert("Email is niet ingevuld");
    }
   else if (Password == "") {
      alert("Password is niet ingevuld");
      Alert.alert("Password is niet ingevuld");

    }
    else{
      
      LoginStudent(Email, Password);
    }
  

  };


  useEffect(() => {

  }, []);
 return (
    <View style={styles.container}>
      
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
         <TextInput
        style={styles.input}
        placeholder="Voer email in"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Voer wachtwoord in"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={Password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Log In</Text>
      </TouchableOpacity>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
        <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Aanmelden")}>
          <Text style={{color: '#009688', fontWeight: '600', fontSize: 14}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
    color: "#009688"
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: 'cover',
  },
  whiteSheet: {
    width: '100%',
    height: '75%',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#009688',
    height: 58,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
export default Login;