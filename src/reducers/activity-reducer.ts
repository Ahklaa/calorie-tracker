import type { Activity } from "../components/types"
export type ActivityAction = 
{
 type : 'save-activity', payload : {newActivity : Activity} 
} | 
{
    type : 'set-activeId', payload : {id : Activity['id']}
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
        return{
            ...state,
            activity : [...state.activity, action.payload.newActivity]
        }
    }
    if(action.type === 'set-activeId'){
        return {
            ...state,
            activeId : action.payload.id
        }
    }
    return state
}