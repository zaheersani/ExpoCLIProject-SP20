import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.props.value + ''
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
                    <View style={{ flex: 1, padding: 10, backgroundColor: 'green' }}>
                        <Button title="7" onPress={() => this.updateNum("7")} />
                        <Button title="4" onPress={() => this.updateNum("4")} />
                        <Button title="1" onPress={() => this.updateNum("1")} />
                    </View>
                    <View style={{ flex: 1, padding: 10, backgroundColor: 'red' }}>
                        <Button title="8" onPress={() => this.updateNum("8")} />
                        <Button title="5" onPress={() => this.updateNum("5")} />
                        <Button title="2" onPress={() => this.updateNum("2")} />
                    </View>
                    <View style={{ flex: 1, padding: 10, backgroundColor: 'yellow' }}>
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

export default Calc;