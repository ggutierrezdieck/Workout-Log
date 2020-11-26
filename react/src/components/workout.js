import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fab } from '@fortawesome/free-solid-svg-icons'
import { faMeh, faSadCry, faSadTear, faSurprise, faSmileBeam  } from '@fortawesome/free-solid-svg-icons'

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
            console.log(this.state.workouts); } 
            )  //saving data into state
        .catch(error => console.log(error));
        // console.log(this.state.workouts);  // This line logs empty because it is run before fetch completes
    }

    render(){
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        { this.state.workouts.map(( wk => 
                            <div id={wk.id} className='col-3 '>
                                <div className='col-12 post-it post-it-color0'>
                                    <h2>Workout </h2>
                                    for
                                    <input id='wkdate' default='9999-12-12' type='date'></input>
                                    <input type='text' onChange= {this.fetchData}></input>
                                    <input type='text'></input>
                                    <input type='text'></input>
                                    <h3>Effort</h3>
                                    <div className='row justify-content-center'>
                                        {/* <div className='col'></div> */}
                                        <div className='col-2 effortIcon'><FontAwesomeIcon icon={faSadCry }/></div>
                                        <div className='col-2 effortIcon'><FontAwesomeIcon icon={faSadTear }/></div>
                                        <div className='col-2 effortIcon'><FontAwesomeIcon icon={faMeh }/></div>
                                        <div className='col-2 effortIcon'><FontAwesomeIcon icon={faSurprise }/></div>
                                        <div className='col-2 effortIcon'><FontAwesomeIcon icon={faSmileBeam }/></div>
                                        {/* <div className='col'></div> */}
                                    </div>
                                </div>
                            </div>
                         ))}
                        <div className='col-3'>
                            <div className='col-12 post-it post-it-color1'>
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='col-12 post-it post-it-color2'>
                                <p>Hello</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='col-12 post-it post-it-color3'>
                                    <p>Hello</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='col-12 post-it post-it-color4'>
                                    <p>Hello</p>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='col-12 post-it post-it-color0'>
                                    <p>Hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
    }
}
export default Workout;  

