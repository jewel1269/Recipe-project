
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { data } from 'autoprefixer';
import Chefs from './Chefs';
import './chefs.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [chefs, setChefs] = useState([]);
  const [name, setName] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [count, setCount] = useState(0);
  const [preparingCount, setPreparingCount] = useState(0)


  

  const handleButtonClick = (p) => {
    const isExist = name.find(item => item.id === p.id);
    if (!isExist) {
      setName([...name, p]);
      setCount(prevCount => prevCount + 1);
    } else {
      toast("Recipe Already Selected")
    }
  };
  




  const handleRemoveClick = (clickedItem) => {
    const updatedName = name.filter(item => item.id !== clickedItem.id);
    setCount(minus => minus - 1)
    setName(updatedName);
  };


  const handlePrepareClick = (preparedItem) => {
    setCurrentlyCooking([...currentlyCooking, preparedItem]);
    setPreparingCount(prepCount => prepCount + 1);
    handleRemoveClick(preparedItem);
  }


  useEffect(() => {
    fetch('./Chefs.json')
      .then(res => res.json())
      .then(data => setChefs(data))
  }, [])


  return (
    <div className='ml-[8%] mr-[8%]'>
<ToastContainer></ToastContainer>
<div className="navbar w-full bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold text-xl lg:text-3xl">RECIPE CALORIES</a>
  </div>
  <div className="lg:hidden gap-4">
    <button className="btn btn-ghost btn-sm text-xl">Menu</button>
  </div>
  <div className="hidden lg:flex gap-6 mr-[18%]">
    <button className="btn btn-ghost btn-sm text-xl">Home</button>
    <button className="btn btn-ghost btn-sm text-xl">Recipes</button>
    <button className="btn btn-ghost btn-sm text-xl">About</button>
    <button className="btn btn-ghost btn-sm text-xl">Search</button>
  </div>
  <div className="flex-none gap-2">
    <label className="input input-bordered rounded-3xl flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      <input type="text" className="grow " placeholder="Search" />
    </label>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-green-400 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>




      <div className="relative  rounded-3xl lg:h-full mt-5 lg:w-full">
        <img id='jewel'
          className="lg:h-full h-[500px] rounded-xl  "
          src="./image.png"
          alt=""
        />
        <div className='relative bottom-[400px] text-center text-white'>
          <h1 className='text-5xl font-semibold'>Discover an exceptional cooking <br /> <br />class
            tailored for you!</h1>
          <p className='text-xl mt-4'>Cooking is the process of preparing food by applying heat to ingredients in various ways, <br /> such as boiling, baking, frying, grilling, steaming, or roasting.</p>
          <br />
          <div className='lg:flex gap-16 lg:ml-[40%]'>
            <button className='btn rounded-3xl btn-success text-xl font-semibold'>Explore Now</button>
            <button className="btn rounded-3xl btn-outline text-xl  text-white">Our Feedback</button>
          </div>
        </div>

      </div>



      <div id='main-container'>
      <div className='relative lg:bottom-36'>
        <div className='text-center'>
          <h1 className='text-5xl  lg:font-semibold'>Our Recipes</h1>
          <p className='text-2xl mt-4'>Welcome to our collection of delicious recipes curated just for you! At Recipe Calories, we believe in <br /> the joy of cooking and the satisfaction of preparing wholesome meals <br /> for yourself and your loved ones </p>

        </div>

        <div className='lg:flex lg:justify-around lg:gap-10 lg:mt-7 ' >

          <div className='lg:grid lg:grid-cols-2 mt-4 lg:gap-12 sm:mt-8'>
            {
              chefs.map((chef) => <Chefs chef={chef} handleButtonClick={handleButtonClick} ></Chefs>)
            }
          </div>

          <div className='lg:h-[920px] sm:h-auto p-4 border-2 shadow-2xl rounded-2xl mt-4 sm:w-[480px] lg:w-[570px] bg-slate-50'>
            <h1 className='text-center mt-4 font-bold text-3xl'>Want to cook: <span id='jewel'>{count}</span></h1>
            <br />
            <hr />


            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr className='text-xl font-bold flex gap-10 ml-10'>
                    <th>Name:</th>
                    <th>Time:</th>
                    <th>Calories:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-base-100">
                    {name.map((item, index) => (
                      <div key={index} className='flex gap-8 border shadow-2xl rounded-3xl p-1 bg-base-200 mt-4 font-bold ml-12 '>
                        <th>{index + 1}. {item.recipe_name}</th>
                        <th>{item.preparing_time} Min</th>
                        <th>{item.calories} Calories</th>
                        <button onClick={() => handlePrepareClick(item)} className='btn btn-success'>Preparing</button>
                      </div>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />

            <div>
              <h1 className='text-center mt-4 font-bold text-3xl'>Currently cooking: <span>{preparingCount}</span></h1>
              <br />
              <hr />
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className='text-xl font-bold flex lg:gap-10 lg:ml-10'>
                      <th>Name:</th>
                      <th>Time:</th>
                      <th>Calories:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-base-100  rounded-3xl">
                      {currentlyCooking.map((item, index) => (
                        <div key={index} className='lg:flex lg:gap-16 border bg-slate-100  p-2 rounded-2xl shadow-2xl text-xl sm:gap-5 mt-4 font-bold lg:ml-12'>
                          <h1>{index + 1}. {item.recipe_name}</h1>
                          <h1>{item.preparing_time} Min</h1>
                          <h1>{item.calories} Calories</h1>
                        </div>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <hr />
              <div className='text-end mt-4 gap-6 text-xl font-semibold'>

                <h1>Total Time = <span>{currentlyCooking.reduce((total, item) => parseInt(total) + parseInt(item.preparing_time), 0)} </span>Min</h1>
                <h1>Total Calories = <span>{currentlyCooking.reduce((total, item) => parseInt(total) + parseInt(item.calories), 0)} </span>Calories</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default App

