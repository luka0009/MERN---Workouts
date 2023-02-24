import axios from "axios";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import {RiChatDeleteLine} from 'react-icons/ri';
import { formatDistanceToNow } from 'date-fns';

export default function WorkoutDetails({ workout }) {
  
  const {dispatch} = useWorkoutsContext();

  const handleClick = async () => {
    const response = await axios.delete(`http://localhost:4000/api/workouts/${workout._id}`);
  
    if (response.status >= 200 && response.status < 300) {
      dispatch({type: 'DELETE_WORKOUT', payload: response.data});
    } 
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p style={{marginTop: '8px'}}>Added {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
        <span onClick={handleClick}>Delete <RiChatDeleteLine className="icon"/> </span>
    </div>
  )
}
