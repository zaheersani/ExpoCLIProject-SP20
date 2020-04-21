import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Age extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 20
    }
  }
  render() {
    return (
      <View style={{ flexDirection: "row", width: "60%", justifyContent: "space-between" }}>
        <Text style={ageStyles.text}>Age:</Text>
        <Button title="  -  " onPress={() => this.setState({ age: this.state.age - 1 })} />
        <Text style={ageStyles.text}>{this.state.age}</Text>
        <Button title="  +  " />
      </View>
    );
  }
}

const ageStyles = StyleSheet.create({
  text: {
    fontSize: 24
  }
});

const App = () => {
  const [getName, setName] = useState({ fName: 'FirstName', lName: 'LastName' });

  const updateFirstName = (firstname) => {
    setName({ fName: firstname, lName: getName.lName });
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.text}>{getName.fName}</Text>
      </View>
      <View style={styles.innerView}>
        <Text style={styles.text}>{getName.lName}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ padding: 10 }}>
          <Button title="Update FirstName" onPress={updateFirstName.bind(this, "John2")}></Button>
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Update LastName" onPress={() => setName({ fName: getName.fName, lName: "Bengston2" })}></Button>
        </View>
      </View>
      <Age />
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