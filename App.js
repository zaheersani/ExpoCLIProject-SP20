import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {

  const buttonClicked = (msg) => {
    alert("Msg: " + msg);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.text}>First Line</Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.text}>Second Line</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ padding: 10 }}>
          <Button title="Press Me" onPress={buttonClicked.bind(this, "Button 1 is Pressed!")}></Button>
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Press Me" onPress={buttonClicked.bind(this, "Button 1 is Pressed!")}></Button>
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