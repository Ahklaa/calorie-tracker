import { useReducer } from 'react'
import Form from './components/Form'
import { activityReduce,initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'
function App() {

    const [state,dispatch] = useReducer(activityReduce,initialState)

  return (
    <>
      <header className="bg-lime-600 py-3 ">
        <div className="max-w-4xl mx-auto flex justify-between ">
            <h1 className="font-bold text-lg  text-white uppercase text-center">
                  Contador de Calorias
            </h1>
        </div>
      </header>
      <section className='bg-lime-500 py-20 px-5'>
        <div className='max-w-4xl mx-auto'>
          <Form
            dispatch = {dispatch}
          />
        </div>
      </section>
      
      <section className='p-10 mx-auto max-w-4xl'>
        <ActivityList
          activities ={state.activity}        
        />
      </section>
    </>
  )
}

export default App
