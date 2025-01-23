import type { Activity } from "../components/types"

export type ActivityActions = {

}

type ActivityState = {
    activity : Activity[]
}

export const initialState = {
    activity : []
}

export const activityReducer = (
    state : ActivityState = initialState,
    action : ActivityActions
) => {

}