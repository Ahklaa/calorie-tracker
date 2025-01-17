import { useState, ChangeEvent } from "react"
import { Activity } from "./types"
import { data } from "./db/data"
export default function Form() {

    const [activity, setActivity] = useState<Activity>({
        category : 1,
        name : "",
        calories : 0
    })
    const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category','calories'].includes(e.target.id) 
        
        setActivity({
            ...activity,
            [e.target.id] : isNumberField ? +e.target.value : e.target.value
        })
    }
  return (
    <form action="" className="bg-white rounded-lg space-y-5 shadow p-10">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria</label>
            <select
            id="category" 
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            value={activity.category}
            onChange={handleChange}
            >
                {data.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad</label>
            <input 
                type="text" 
                id="name"
                placeholder="Ej. Correr, Ejercicio, Comer Frutas, Almorzar.."
                className="border border-slate-300 rounded-lg p-2 bg-white w-full"
                value={activity.name}
                onChange={handleChange}
               />
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias</label>
            <input 
                type="number" 
                id="calories"
                placeholder="Calorias Ej. 300, 500"
                className="border border-slate-300 rounded-lg p-2 bg-white w-full"
                value={activity.calories}
                onChange={handleChange}
               />
        </div>
        <input 
        type="submit" 
        className="w-full bg-gray-800 text-white p-2 font-bold hover:bg-gray-700 uppercase cursor-pointer"
        value="Guardar Comida o Guardar Ejercicio"/>
    </form>
  )
}
