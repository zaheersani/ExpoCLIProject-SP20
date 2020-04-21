import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [getFirstName, setFirstName] = useState('First Name Here!');
  const [getLastName, setLastName] = useState('Last Name Here!');



  const buttonClicked = (msg) => {
    alert("Msg: " + msg);
  }

  const updateName = (name) => {
    setFirstName(name);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.text}>{getFirstName}</Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.text}>{getLastName}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ padding: 10 }}>
          <Button title="Update FirstName" onPress={updateName.bind(this, "John")}></Button>
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Update LastName" onPress={() => setLastName("Bengston")}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20
    },
    innerView: {
      padding: 10
    },
    text: {
      fontSize: 24,
    },
    buttonsContainer: {
      flexDirection: "row"
    }
  }
);

export default App;