import * as ActionTypes from '../ActionTypes';

const initialState = {
    mssgobj: [
        {
            sender: 'xyz',
            mess: 'HI, HOW ARE YOU?jiudhuhduhejkndjkbsuyjcklfsat8U9IOAKMSBHDGEFYUDISOAKLMHDFYUISAOPKLHFVUIDCOSAPKMJBDISAOKSMNDCBHKLZMKXJNCDBHJCNXZMKLXJCHVBCN XMKLCJFVHBDNCX MKLCMFVHNCMLCJFX',
            time: '02:00 pm'
        },
        {
            sender: 'abc',
            mess: 'HI, HOW ARE YOU?HUSUYDIUEYFIJHFIENFJKBEUIJFLKMNJBCHGYUSDGUYGNbhbjbhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
            time: '02:00 pm'
        },
        {
            sender: 'abc',
            mess: 'HI, HOW ARE YOU?',
            time: '02:00 pm'
        },
        {
            sender: 'abc',
            mess: 'HI, HOW ARE YOU?',
            time: '02:00 pm'
        },
        {
            sender: 'xyz',
            mess: 'HI, HOW ARE YOU?jiudhuhduhejkndjkbsuyjcklfsat8U9IOAKMSBHDGEFYUDISOAKLMHDFYUISAOPKLHFVUIDCOSAPKMJBDISAOKSMNDCBHKLZMKXJNCDBHJCNXZMKLXJCHVBCN XMKLCJFVHBDNCX MKLCMFVHNCMLCJFX',
            time: '02:00 pm'
        },
        {
            sender: 'xyz',
            mess: 'HI, HOW ARE YOU?jiudhuhduhejkndjkbsuyjcklfsat8U9IOAKMSBHDGEFYUDISOAKLMHDFYUISAOPKLHFVUIDCOSAPKMJBDISAOKSMNDCBHKLZMKXJNCDBHJCNXZMKLXJCHVBCN XMKLCJFVHBDNCX MKLCMFVHNCMLCJFX',
            time: '02:00 pm'
        },
    ]
}

export const messages = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.ADD_GROUP_MESSAGE:
            console.log("ADD Message Reducer")
            console.log(action.message)
            return{
                ...state, mssgobj:[...state.mssgobj, action.message]
            }
        default:
            return state;
    }
}