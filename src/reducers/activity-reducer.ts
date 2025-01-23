import type { Activity } from "../components/types"
export type ActivityAction = 
{
 type : 'save-activity',
 payload : {newActivity : Activity}
}

type ActivityState = {
    activity : Activity[]
}
export const initialState : ActivityState = {
    activity : []
}

export const activityReduce = (
    state : ActivityState = initialState,
    action : ActivityAction
) => {
    if (action.type === "save-activity"){
        //este codigo maneja la logica paa actualizar el state
        console.log("desde el type save-activity");
    }
    return state
}