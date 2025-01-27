import { useMemo } from "react"
import type { Activity } from "./types"
type CalorieTrackerProps = {
    activities : Activity[]
}
export default function CalorieTracker({activities} : CalorieTrackerProps) {
    const caloriesConsumed = useMemo(()=>activities.reduce((total,activity) => activity.category === 1 ? total + activity.calories : total, 0 ),[activities])
  return (
    <>
        <h2 className="text-center text-4xl font-black text-white">Resumen de Calorias</h2>   
        <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <p className="grid grid-cols-1 justify-center text-white font-bold rounded-lg gap-3 mt-10">
                <span className="font-black text-6xl text-orange-500">{caloriesConsumed}</span>
                Consumidas
            </p>
        </div>
    </>
  )
}
