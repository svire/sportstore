//actions are processed by data store reducers that are FUNCTIONS that receive the current contents of the data store
//and an action object and use them to make changes

import {ActionTypes,DataTypes} from "./Types";

export const ShopReducer=(storeData,action)=>{
    switch(action.type){

        case ActionTypes.DATA_LOAD:
            return{
                ...storeData,
                [action.payload.dataType]:action.payload.data,
                [`${action.payload.dataType}_total`]:action.payload.total,
                [`${action.payload.dataType}_params`]:action.payload.params
            };



        
        case ActionTypes.DATA_SET_PAGESIZE:
            return {...storeData,pageSize:action.payload}
        
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return {...storeData,sortKey:action.payload}
        
        case ActionTypes.DATA_STORE:
            if(action.payload.dataType===DataTypes.ORDERS){
                return {storeData,order:action.payload.data}
            }
            break;

        default:
            return storeData||{};

    }

}

//Reducers are required to create and return new objects that incorporate any required changes. If the
//action type isn’t recognized, the reducer must return the data store object it received unchanged.