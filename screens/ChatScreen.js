import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { messages } from '../redux/Reducers/ChatReducer';
import { connect } from 'react-redux';
import { addGroupMessage } from '../redux/ChatActions';


const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => ({
    addGroupMessage: (mssg, groupName) => dispatch(addGroupMessage(mssg, groupName))
})

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_mess: '',
            username: props.route.params.username,
        }
    }
    render() {
        const index= this.props.route.params.index;
        console.log(this.props);
        console.log(this.state.username)
        const user = this.state.username;
        function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }

        function Message({ message }) {
            return (
                <View >
                    {user !== message.sender
                        ? <View style={[styles.message, { alignSelf: 'flex-start', marginLeft: 10 }]}>
                            <Text style={{ fontWeight: 'bold', color: 'red', alignSelf: 'flex-start' }} >{message.sender}</Text>
                            <Text >{message.mess}</Text>
                            <Text style={{ color: 'gray' }}>{message.time}</Text>

                        </View>
                        : <View style={[styles.message, { backgroundColor: 'lightgreen', alignSelf: 'flex-end' }]}>
                            <Text style={{ fontWeight: 'bold', color: 'red', alignSelf: 'flex-start' }} >{message.sender}</Text>
                            <Text style={{ alignSelf: 'flex-start' }}>{message.mess}</Text>
                            <Text style={{ color: 'gray' }}>{message.time}</Text>
                        </View>
                    }

                </View>
            );
        }
        return (
            <SafeAreaView style={styles.chatArea}>
                <View style={{ borderWidth: 2, borderColor: 'black', flex: 0.9 }}>
                    <KeyboardAvoidingView style={{ flex: 1 }} >
                        <FlatList
                            inverted={true}
                            data={this.props.messages.groups[index].mssgObjects}
                            renderItem={({ item }) => <Message message={item} />}
                            keyExtractor={item => item.id}
                        />
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.chatbox}>
                    <View style={{ flex: 0.85 }}>
                        <TextInput
                            style={{ backgroundColor: 'white', borderRadius: 10, height: 50, paddingLeft: 20, borderColor: 'black', borderWidth: 1 }}
                            multiline
                            placeholder="Type the message"
                            value={this.state.current_mess}
                            onChangeText={val => this.setState({ current_mess: val })}
                        />
                    </View>
                    <View style={{ flex: 0.15 }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={() => { console.log('button') }}>
                            <View style={{ alignItems: 'center' }}>
                                <Feather name="send" size={30} color="black"
                                    onPress={() => {
                                        console.log(this.state.current_mess);
                                        const messageObject = {
                                            sender: user,
                                            mess: this.state.current_mess,
                                            time: formatAMPM(new Date())
                                        }
                                        const conversationName = this.props.messages.groups[index].groupName;
                                        this.props.addGroupMessage(messageObject, conversationName)
                                        // [...mssgobj, {mess:this.state.current_mess, sender: user, time: new Date().getHours() +" : " + new Date().getMinutes }];
                                        // this.setState({mssgobj:
                                        //     [...this.state.mssgobj, {sender: user, 
                                        //             mess: this.state.current_mess,
                                        //                 time: new Date().getHours() +":" + new Date().getMinutes()}]});
                                        // this.props.messages.mssgobj.unshift({sender: user, 
                                        //     mess: this.state.current_mess,
                                        //     time:   formatAMPM(new Date())  
                                        //     });

                                        this.setState({
                                            current_mess: ''
                                        })
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
const styles = StyleSheet.create({
    chatArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    message: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'flex-end',
        marginTop: 10,
        marginEnd: 10,
        alignSelf: 'flex-end',
        borderRightWidth: 3,
        maxWidth: '80%',
        borderColor: 'black',
        borderWidth: 1
    },
    chatbox: {
        flex: 0.1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 5,
        paddingLeft: 10
    }
})