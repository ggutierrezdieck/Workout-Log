//Class component
import React, { Component } from 'react';
import {Effort} from './effort'
import {Workout} from './workout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fab } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Postit extends Component{
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



    saveChanges = wk => {
        // this.setState(prevState => {
        //     const workouts = prevState.workouts.map((item, j) => {
        //         if (j === wk.target.id - 1){
        //             console.log(wk)
        //             console.log(wk.target)
        //             // return wk.target;
        //         }
        //         else {
        //             return item;
        //         }
        //     });
        // return {
        //     workouts,
        // };
        // });
        
    }

    render(){
        return (
       
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 '>
                                <div className="col-12 post-it post-it-color0">
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                    <h2>Workout</h2>
                                    <input id='wkdate' name='workoutDate' value='9999-12-12' type='date' onChange={this.saveChanges}></input>
                                    <input type='text' value='hi' onChange={this.saveChanges}></input>
                                    <h3>Workout effort</h3>
                                    <div className='row justify-content-center'>
                                    <Effort effort='0'></Effort>
                                </div>
                            </div>
                        </div>
                        <Workout workouts={this.state.workouts}></Workout>
                    </div>
                </div>
            </React.Fragment>
            )
    }
}
export default Postit;  
