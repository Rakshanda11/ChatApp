import * as ActionTypes from '../ActionTypes';

const initialState = {
    groups:[
        {
            groupName: 'group1',
            description: 'This is a Description.',
            mssgObjects: [
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
        },
        {
            groupName: 'group2',
            description: 'This is a Description.',
            mssgObjects: [
                {
                    sender: 'xyz',
                    mess: 'Group 2',
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
        },
        {
            groupName: 'group3',
            description: 'This is a Description.',
            mssgObjects: [
                {
                    sender: 'xyz',
                    mess: 'Group 3',
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
    ]
}

export const messages = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.ADD_GROUP_MESSAGE:
            console.log("ADD Message Reducer")
            console.log(action)
            
            let groupList = [...state.groups];
            const groupIndex = groupList.findIndex((groupObject)=> groupObject.groupName === action.groupName);
            // console.log(groupIndex);
            let groupObject = groupList[groupIndex];
            groupObject.mssgObjects = [action.message, ...groupObject.mssgObjects];
            groupList[groupIndex] = groupObject;

            return {
                ...state,
                groups: groupList
            }

        default:
            return state;
    }
}



