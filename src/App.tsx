import { useReducer,useEffect, useMemo } from 'react'
import Form from './components/Form'
import { activityReduce,initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'
import CalorieTracker from './components/CalorieTracker'
function App() {

    const [state,dispatch] = useReducer(activityReduce,initialState)
    useEffect(()=> {
      localStorage.setItem('activities',JSON.stringify(state.activity))
    },[state])
    const canRestartActivities = useMemo(()=> state.activity.length,[state.activity])

  return (
    <>
      <header className="bg-lime-600 py-3 ">
        <div className="max-w-4xl mx-auto flex justify-between ">
            <h1 className="font-bold text-lg  text-white uppercase text-center">
                  Contador de Calorias
            </h1>
            <button
            className='bg-gray-800 font-bold text-sm rounded-lg text-white hover:bg-gray-900 disabled:opacity-10 p-2'
              disabled = {!canRestartActivities}
              onClick={()=> dispatch({type: "restart-activities"})}
            >Reiniciar App</button>
        </div>
      </header>
      <section className='bg-lime-500 py-20 px-5'>
        <div className='max-w-4xl mx-auto'>
          <Form
            dispatch = {dispatch}
            state = {state}
          />
        </div>
      </section>
      <section className='bg-gray-800 py-10'>
        <div className='max-w-4xl mx-auto'>
          <CalorieTracker
          activities = {state.activity}
          />
        </div>

      </section>
      
      <section className='p-10 mx-auto max-w-4xl'>
        <ActivityList
          activities ={state.activity}   
          dispatch = {dispatch}     
        />
      </section>
    </>
  )
}

export default App
