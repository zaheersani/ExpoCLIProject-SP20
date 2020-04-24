import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Age extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 20
        }
    }
    render() {
        return (
            <View style={{ flexDirection: "row", width: "50%", justifyContent: "space-between" }}>
                <Text style={ageStyles.text}>Age:</Text>
                <Button color={this.props.btnColor} title="  -  " onPress={() => this.setState({ age: this.state.age - 1 })} />
                <Text style={ageStyles.text}>{this.state.age}</Text>
                <Button color={this.props.btnColor} title="  +  " onPress={() => this.setState({ age: this.state.age + 1 })} />
            </View>
        );
    }
}

const ageStyles = StyleSheet.create({
    text: {
        fontSize: 24
    }
});

export default Age;