//Class component
import React, { Component } from 'react';
import {Effort} from './effort'
import {Workout} from './workout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fab } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {API} from '../api-service'
import { instanceOf } from 'prop-types';
import{ withCookies, Cookies} from 'react-cookie'

class Postit extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

    constructor(props){
        super(props);
        this.state = {
            workouts : [],
            todayDate: new Date(),
            token: this.props.cookies.get('mr-token'),
        };
    }

    componentDidMount() {
        if(this.state.token === "undefined" && this.state.token != null)  window.location.href = '/';
        console.log('Fetching data')
        API.getWorkouts(this.state.token)
        .then( data => { 
            this.setState({ workouts: data }); 
            console.log("Data fetched")
                } 
            )  //saving data into state
        .catch(error => console.log(error));
        // console.log(this.state.workouts);  // This line logs empty because it is run before fetch completes
    }

    render(){
        return (
       
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3 '>
                            {/* TODO: implement refactor of  this empty postin into the component */}
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
export default withCookies(Postit);  

