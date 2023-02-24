import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export default function Home() {

  const {workouts, dispatch} = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios('http://localhost:4000/api/workouts');
  
      if (response.status === 200) {
        dispatch({type: 'SET_WORKOUTS', payload: response.data})
        console.log(response.data);
      }
    };
    
    fetchWorkouts();
  }, []);

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts?.map((workout) => {
           return (
           <WorkoutDetails key={workout._id} workout={workout}/>
           )
        })}
      </div>
      <WorkoutForm />
    </div>
  )
}
