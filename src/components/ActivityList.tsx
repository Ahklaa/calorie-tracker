import { Activity } from "./types"
import { data } from "./db/data"
import { useMemo, Dispatch} from "react"
import {PencilSquareIcon} from '@heroicons/react/24/outline'
import { ActivityAction } from "../reducers/activity-reducer"
type ActivityListProps = {
    activities : Activity[]
    dispatch : Dispatch<ActivityAction>
}
export default function ActivityList({activities, dispatch}: ActivityListProps ) {
    const categoryName = useMemo(()=>(category:Activity['category'])=> data.map(cat => cat.id === category ? cat.name : "")
        ,[activities])
  return (
    <>
        <h2 className="text-2xl font-bold text-slate-600 text-center">Comida y Actividades</h2>
        {activities.map(activity => (
            <div className="px-5 py-10 bg-white mt-5 flex justify-between" key={activity.id}>
                <div className="space-y-5 relative">
                    <p className={`absolute -top-8 -left-8 px-5 py-2 font-bold text-white uppercase ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}> {categoryName(activity.category)}</p>
                    <p className="font-bold pt-5 text-2xl">{activity.name}</p>
                    <p  className="font-black text-4xl text-lime-500">
                        {activity.calories} {""}
                        Calorias
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <PencilSquareIcon 
                    onClick={()=> dispatch({type : "set-activeId", payload: {id: activity.id}})}
                    className="h-8 w-8 text-gray-800 cursor-pointer"
                    />
                </div>
            </div>
        ))}
    </>
  )
}
