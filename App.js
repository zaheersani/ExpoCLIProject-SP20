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
        <Button title="  +  " onPress={() => this.setState({ age: this.state.age + 1 })} />
      </View>
    );
  }
}

const ageStyles = StyleSheet.create({
  text: {
    fontSize: 24
  }
});

class Calc extends React.Component {
  constructor() {
    super();
    this.state = {
      num: "0"
    }
  }

  updateNum = (n) => {
    if (this.state.num != 0)
      this.setState({ num: this.state.num + n });
    else
      this.setState({ num: n });
  }

  render() {
    return (
      <View style={{ width: '100%', marginTop: 20 }}>
        <View style={{ backgroundColor: 'grey' }}>
          <Text style={calcStyle.text}>{this.state.num}</Text>
        </View>
        <View style={calcStyle.buttonsContainer}>
          <View style={{ flex: 1 }}>
            <Button title="7" onPress={() => this.updateNum("7")} />
            <Button title="4" onPress={() => this.updateNum("4")} />
            <Button title="1" onPress={() => this.updateNum("1")} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="8" onPress={() => this.updateNum("8")} />
            <Button title="5" onPress={() => this.updateNum("5")} />
            <Button title="2" onPress={() => this.updateNum("2")} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="9" onPress={() => this.updateNum("9")} />
            <Button title="6" onPress={() => this.updateNum("6")} />
            <Button title="3" onPress={() => this.updateNum("3")} />
          </View>
          <View style={{ flex: 1 }}>
            <Button title="-" />
            <Button title="+" />
            <Button title="/" />
          </View>
        </View>
      </View>
    );
  }
}

const calcStyle = StyleSheet.create({
  text: {
    fontSize: 34,
    textAlign: "right",
    margin: 10,
    color: 'white'
  },
  buttonsContainer: {
    flexDirection: "row",
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
          <Button title="Update FirstName" onPress={updateFirstName.bind(this, "John")}></Button>
        </View>
        <View style={{ padding: 10 }}>
          <Button title="Update LastName" onPress={() => setName({ fName: getName.fName, lName: "Bengston" })}></Button>
        </View>
      </View>
      <Age />
      <Calc />
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
      // margin: 20
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