import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, Provider as PaperProvider } from 'react-native-paper';


const OefeningListScreen = (props) => {
    const apiOefening = 'http://127.0.0.1:8000/api/oefeningens';
    const [isOefeningAvailable, setOefeningAvailable] = useState(false);
    const [oefeningData, setOefeningData] = useState(null);

    useEffect(() => { GetOefening(); }, []);

    const BehandelFout = (error) => {
      console.log(error);
      setOefeningData(
        { 
          status: true,     
          data: [
            {name: 'Er is een fout opgetreden. Start de applicatie opnieuw op. ' 
                  + 'Blijft het probleem optreden, waarschuw dan de service desk.'
                }
              ]
        }
      )
    }
  
    const GetOefening = () => {
      fetch(apiOefening)
        .then((response) => response.json())
        .then((data) => setOefeningData(data))
        .catch((error) => BehandelFout(error))
        .finally(()=>setOefeningAvailable(true));
    }
      
    const RenderOefening = ({ item, index }) => {
      return (
        <View style={styles.oefeningItem}>
          <Pressable onPress={() => props.navigation.push( 'stackVoetbalDetails', {item})}>
            <Text style={styles.oefeningItemText}>{item.naamoefening}</Text>
          </Pressable>
        </View>
      )
    }

  return (
    <PaperProvider>
    <View style={styles.container}>
      {isOefeningAvailable
        ?
        (
          <View style={styles.container}>
            <Text style={styles.header}>Oefeningen: {oefeningData.count}</Text>
            <FlatList
              style={styles.oefeningList}
              data={oefeningData.data}
              renderItem={RenderOefening}
              keyExtractor={(item, index) => index}
              numColumns={2}
            />
          </View>
        )
        :
        (
          <ActivityIndicator style={styles.activityIndicator} color='purple' size={70} />
        )
      }
    </View>
  </PaperProvider>
  )
}

export default OefeningListScreen

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'lightgreen',
    },
    activityIndicator : { flex: 2, },

    oefeningList: {flexGrow: 2, backgroundColor: 'grey', },

    oefeningItem : { marginHorizontal: 10, width: 175, height: 125, marginVertical: 3, backgroundColor: 'black', },

    oefeningItemText: { fontSize: 15, color: 'wheat', padding: 10},

    navButtons: { flexDirection: 'row', alignSelf: 'center', },

    button: { flexGrow: 2, marginHorizontal: 10, },
  
  });