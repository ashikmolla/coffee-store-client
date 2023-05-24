
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import DisplayCoffee from './components/DisplayCoffee';
import { useState } from 'react';



function App() {
  const coffee=useLoaderData();
  const [coffees, setcoffees]=useState(coffee)
 
  
  return (
    <>
      
    <Link to='addCoffee'><button className='btn mt-2 me-2'>Add Coffee</button></Link>
    <Link to='updateCoffee'><button className='btn'>Update Coffee</button></Link>
    <Link to='displayCoffee'><button className='btn'>Update Coffee</button></Link>
      
      <h1 className="text-6xl text-purple-600">Vite + React</h1>



      {/* display coffee Cart */}
      <div className='m-20'>

        <div className="w-4/5 m-auto mt-10 mb-10 text-center">
                    <p>--- Sip & Savor ---</p>
                    <h1 className="text-3xl font-extrabold text-center mb-2 ">Our Popular Products</h1>
                    <h1>Add Coffee</h1>
                    <h1>Coffees {coffees.length}</h1>
                 


                </div>
               <div className='grid md:grid-cols-2 gap4 p-2'>
               {
                  coffees.map(coffee=><DisplayCoffee
                  key={coffee._id}
                  coffee={coffee}
                  coffees={coffees}
                  setcoffees={setcoffees}
                  ></DisplayCoffee>)
                }
               </div>
        
      
      </div>
      
     
    </>
  )
}

export default App
