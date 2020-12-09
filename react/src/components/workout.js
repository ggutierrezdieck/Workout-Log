//Class component
import React, {useState, useEffect} from 'react';
import {Effort} from './effort'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fab } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Workout(props){
    
    const [workouts, setWorkouts] = useState(null); // creating a state for this functional component
    
    useEffect(() => {  //Correct way to set the state to props, using Effect hook
        setWorkouts(props.workouts); 
    }, [props.workouts])

    const loadEffort = workout =>{
        console.log('Loaing new effort');
        setWorkouts(prevState => {
            const wks = prevState.map((item, j) => {
                if (j === workout.id - 1){
                    return workout;
                }
                else {
                    return item;
                }
            });

        return wks;
        });

    }

    const changeDate = event => {
        let newState = [...workouts]
        newState[event.target.id-1]['workoutDate'] = event.target.value;
        setWorkouts(newState);
        
    }  

    const changeExercise = event => {
        console.log('Loaing new exercise');
        setWorkouts(prevState => {
            const wks = prevState.map((item, j) => {
                if (j === event.target.getAttribute("wkid") - 1){
                    const exs =  item.exercises.map((oldExs, k) => {
                        if (oldExs.id === parseInt(event.target.id)){
                            oldExs.exerciseName = event.target.value
                        }
                        return oldExs;
                    });
                    item.exercises = exs;
                    return item;
                }
                else {
                    return item;
                }
            });

        return wks;
        });
    }

    const changeSets = event => {
        console.log('Loaing new sets');
        setWorkouts(prevState => {
            const wks = prevState.map((item, j) => {
                if (j === event.target.getAttribute("wkid") - 1){
                    const exs =  item.exercises.map((oldExs, k) => {
                        if (oldExs.id === parseInt(event.target.id)){
                            oldExs.sets = event.target.value
                        }
                        return oldExs;
                    });
                    item.exercises = exs;
                    return item;
                }
                else {
                    return item;
                }
            });

        return wks;
        });
    }

    const changeReps = event => {
        console.log('Loaing new exercise');
        setWorkouts(prevState => {
            const wks = prevState.map((item, j) => {
                if (j === event.target.getAttribute("wkid") - 1){
                    const exs =  item.exercises.map((oldExs, k) => {
                        if (oldExs.id === parseInt(event.target.id)){
                            oldExs.reps = event.target.value
                        }
                        return oldExs;
                    });
                    item.exercises = exs;
                    return item;
                }
                else {
                    return item;
                }
            });

        return wks;
        });
    }

    return (
        <React.Fragment>
            { workouts && workouts.map(( wk => 
                        <div id={wk.id} className='col-3 '>
                            <div className={"col-12 post-it post-it-color" + wk.id % 5 }>
                                <h2>Workout</h2>
                                <input id={wk.id} name='workoutDate' value={wk.workoutDate} type='date' onChange={changeDate}></input>
                                {wk.exercises.map(ex => 
                                    <div>
                                        <div className='row exerciseDiv'>
                                            <input id={ex.id} wkid={wk.id} className='inputExercise' type='text' value= {ex.exerciseName} onChange={changeExercise}></input>
                                            <label>Reps</label><input id={ex.id} wkid={wk.id} className='inputSet-Reps' type='text' value= {ex.reps} onChange={changeReps}></input>
                                            <label>Sets</label><input id={ex.id} wkid={wk.id}  className='inputSet-Reps' type='text' value= {ex.sets} onChange={changeSets}></input>
                                        </div>
                                    </div>
                                    )}
                                <h3 value={wk.effort}> {wk.id} Workout effort</h3>
                                <Effort effort={wk.effort} workout={wk.id} updateEffort={loadEffort} ></Effort>
                            </div>
                        </div>
                            ))}
        </React.Fragment>
        )
}
export  {Workout};  

