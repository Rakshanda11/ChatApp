import * as ActionTypes from './ActionTypes';

export const addGroupMessage = (message, groupName) =>{
    console.log("ADDGroup")
    console.log(message)
    return{
        type: ActionTypes.ADD_GROUP_MESSAGE,
        message,
        groupName
    }
}