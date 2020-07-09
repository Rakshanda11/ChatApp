import React, { Component } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.username}>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1,margin:10, width:'90%',borderRadius:10,paddingLeft:120 }}
                placeholder="USERNAME"
                value = {this.state.username}
                onChangeText = {val=> this.setState({username: val})}
                />
                <Button
                title="Next"
                onPress = {()=>navigate('ChatProfile',{username:this.state.username})}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    username: {
        flex: 1,
        alignContent: 'center',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default FirstPage;