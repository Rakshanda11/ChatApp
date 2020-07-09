import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { messages } from '../redux/Reducers/ChatReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

class ChatProfile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: this.props.route.params.username,
    }
    Profile = (group, index) => {
        return (
            <TouchableOpacity style={{ flex: 1, borderWidth: 2 }} onPress={() => this.props.navigation.navigate('ChatPage', { username: this.state.username, index: index })}>
                <Text style={{ alignSelf: 'center', padding: 20, fontSize: 24, }}>{group.groupName}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.username}>
                <FlatList
                    data={this.props.messages.groups}
                    renderItem={({ item, index }) => this.Profile(item, index)}
                    keyExtractor = {item => item.groupName}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    username: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
export default connect(mapStateToProps)(ChatProfile);