import { useState } from 'react';
import Activity from '../components/Activity';
import AddActivity from '../components/AddActivity';
import { useSelector } from 'react-redux';

const Workout = () => {
    const [add, setadd] = useState(false);
    const allActivity = useSelector((state)=> state);
    const handleClick = () =>{
        setadd(!add);
    }
    
  return (
    <div className='workout-wrapper'>
        <h2> Workout </h2>
        <button onClick={handleClick}>Add Activity </button>
        {add && <AddActivity />}

            {allActivity.map((activity)=>{
                return(
                    < Activity 
                    key={activity.id} 
                    id={activity.id} 
                    name={activity.name}    
                    duration={activity.duration}
                     />
                )
            })
        }
    </div>
  )
}

export default Workout;