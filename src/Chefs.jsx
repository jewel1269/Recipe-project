import React, { useState } from 'react';

const Chefs = ({ chef, handleButtonClick }) => {
  




    return (
        <>
            <div className="card lg:w-[480px]  bg-slate-200 border-2 p-3 shadow-2xl">
                <figure><img className='h-60 w-96 rounded-xl' src={chef?.recipe_image} alt="" /></figure>
                <div className="card-body">
                    <h1 className='text-start text-3xl font-bold'>* {chef?.recipe_name}</h1>
                    <p className='text-start  font-semibold'>{chef?.short_description}</p>
                    <hr />
                    <div>
                        <h1 className='text-xl font-bold'>Ingredients: {chef?.ingredients.length}</h1>
                        <ol className='justify-start mt-3 text-start'>
                            {chef?.ingredients.map((item, index) => (
                                <li className=' flex gap-2 text-start font-semibold' key={index + 1}> <ol>{index + 1}. </ol> {item} </li>
                            ))}
                        </ol>
                    </div>

                    <hr />
                    <div className='flex gap-5 '>
                        <div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <p>{chef?.preparing_time} Min</p>
                        </div>
                        <div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            <p>{chef?.calories} Calories</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={() => handleButtonClick(chef)} className="btn btn-success  text-xl rounded-3xl">Want to Cook</button>
                    </div>
                </div>
            </div>




        </>
    );
};

export default Chefs;