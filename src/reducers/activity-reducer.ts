import type { Activity } from "../components/types"
export type ActivityAction = 
{
 type : 'save-activity', payload : {newActivity : Activity} 
} | 
{
    type : 'set-activeId', payload : {id : Activity['id']}
}
|
{
    type : 'delete-activity', payload : {id : Activity['id']}
}

export type ActivityState = {
    activity : Activity[],
    activeId : Activity['id']
}
export const initialState : ActivityState = {
    activity : [],
    activeId : ""
}

export const activityReduce = (
    state : ActivityState = initialState,
    action : ActivityAction
) => {
    if (action.type === "save-activity"){
        //este codigo maneja la logica paa actualizar el state
        let updateActivities : Activity[] = []
        if(state.activeId){
            updateActivities = state.activity.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        }else{
            updateActivities = [...state.activity, action.payload.newActivity]
        }
        return{
            ...state,
            activity : updateActivities,
            activeId : ""
        }
    }
    if(action.type === 'set-activeId'){
        return {
            ...state,
            activeId : action.payload.id
        }
    }
    if(action.type === "delete-activity"){
        return {
            ...state,
            activity : state.activity.filter(activity => activity.id !== action.payload.id)
        }
    }
    return state
}