//Class component

import React, { Component } from 'react';
import {Effort} from './effort'

class Workout extends Component{
    constructor(props){
        super(props);
        this.state = {
            workouts : [],
            todayDate: new Date(),
        };
    }

    componentDidMount() {
        console.log('Fetching data')
        fetch("http://127.0.0.1:8000/workouts/", {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 34df1068b220105e40451b251e02040a2467e3e8',
            }
        })
        .then( res => res.json())
        .then( data => { 
            this.setState({ workouts: data }); 
            console.log("Data fetched")
                } 
            )  //saving data into state
        .catch(error => console.log(error));
        // console.log(this.state.workouts);  // This line logs empty because it is run before fetch completes
    }

    saveChanges = e => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        this.setState( prevState => {
            const workouts = prevState.workouts.map((item, j ) => {
                if (j == e.target.id) {
                    console.log(e.target.id)
                    return 0 //{[e.target.name]:e.taget.value};
                }
                else {
                    return item;
                }
          });
        return {
            workouts,
        };
        });
    }

    render(){
        return (
       
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 '>
                                <div className="col-12 post-it post-it-color0">
                                    <h2>Workout</h2>
                                    <input id='wkdate' name='workoutDate' value='9999-12-12' type='date' onChange={this.saveChanges}></input>
                                    <input type='text' value='hi' onChange={this.saveChanges}></input>
                                    <h3>Workout effort</h3>
                                    <div className='row justify-content-center'>
                                        <Effort effort='0'></Effort>
                                    </div>
                                </div>
                            </div>
                        { this.state.workouts.map(( wk => 
                            <div id={wk.id} className='col-3 '>
                                <div className={"col-12 post-it post-it-color" + wk.id % 5 }>
                                    <h2>Workout</h2>
                                    <input id={wk.id} name='workoutDate' value={wk.workoutDate} type='date' onChange={this.saveChanges}></input>
                                    {wk.exercises.map(ex => 
                                        <div>
                                            <div className='row exerciseDiv'>
                                                <input id={ex.id} className='inputExercise' type='text' value= {ex.exerciseName} onChange={this.saveChanges}></input>
                                                <label>Reps</label><input id={ex.id} className='inputSet-Reps' type='text' value= {ex.reps} onChange={this.saveChanges}></input>
                                                <label>Sets</label><input id={ex.id} className='inputSet-Reps' type='text' value= {ex.sets} onChange={this.saveChanges}></input>
                                            </div>
                                        </div>
                                        )}
                                    <h3> Workout effort</h3>
                                    <Effort></Effort>
                                </div>
                            </div>
                             ))}
                    </div>
                </div>
            </React.Fragment>
            )
    }
}
export default Workout;  

