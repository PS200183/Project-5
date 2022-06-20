import { StyleSheet, Text, View, TouchableOpacity ,Dimensions ,SafeAreaView , StatusBar} from 'react-native'
import React from 'react'
const height = Dimensions.get("window").height / 2 - 30;
const startscherm = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginStudent")}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              {" "}
              Inloggen
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Gasten")}
          >
            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
              {" "}
              Gasten
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        <StatusBar barStyle="light-content" />
      </View>
    );
}

export default startscherm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      }, whiteSheet: {
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
        backgroundColor: '#24126E',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },

})