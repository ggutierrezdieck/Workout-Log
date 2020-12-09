//Functional component
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fab } from '@fortawesome/free-solid-svg-icons'
import { faMeh, faSadCry, faSadTear, faSurprise, faSmileBeam  } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Effort(props){
    const icons = [ faSadCry , faSadTear,  faMeh, faSurprise, faSmileBeam];
    let effort = props.effort;
    let workout = props.workout;
    
    // Using stars for effort
    const [effortStar, setEffortStar] = useState(effort) // creating a state for this functional component

    const highlight = h => event => {
        setEffortStar(h)
    }

    const effortClicked = n => event => {
        fetch(`http://127.0.0.1:8000/workouts/${workout}/updateWorkout/`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 34df1068b220105e40451b251e02040a2467e3e8',
            },
            body : JSON.stringify({effort : n + 1})
        })
        // TODO: better will be to use the return message from post method to get the update data
        .then(() => getDetails()) //Calling getDetails function after updating the data
        .catch(error => console.log(error));
    }

    const getDetails = () => {
        console.log('Fetching data after updating effort')
        fetch(`http://127.0.0.1:8000/workouts/${workout}`, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 34df1068b220105e40451b251e02040a2467e3e8',
            }
        })
        .then( res => res.json())
        .then( data => {
            props.updateEffort(data);
        })  //Creating props after fetching data to pass to parent
        .catch(error => console.log(error));
    }

    return(
        
        <div className='row justify-content-center'>
            {
            // [...Array(5)].map( (e, i) => {
            //     return <div id={i} className={ effort === i + 1 ? 'col-2 effortIcon effort' :  'col-2 effortIcon' } ><FontAwesomeIcon icon={icons[i] }/></div>
            // })
            [...Array(5)].map( (e, i) => {
                return (
                        // <div id={i}>
                            <FontAwesomeIcon id={i} icon={faStar }  className={ effortStar > i ? 'col-2 effortIcon effort' :  'col-2 effortIcon'}
                            onMouseEnter={highlight(i)} onMouseLeave={highlight(effort)} onClick={effortClicked(i)}/>
                        // </div>
                            )
            })
            //  <div id='0' className={ effort == 1 ? 'col-2 effortIcon effort' :  'col-2 effortIcon' }><FontAwesomeIcon icon={faSadCry}/></div>
            // <div id='1' className={ effort == 2 ? 'col-2 effortIcon effort' :  'col-2 effortIcon' }><FontAwesomeIcon icon={faSadTear}/></div>
            // <div id='2' className={ effort == 3 ? 'col-2 effortIcon effort' :  'col-2 effortIcon' }><FontAwesomeIcon icon={faMeh}/></div>
            // <div id='3' className={ effort == 4 ? 'col-2 effortIcon effort' :  'col-2 effortIcon' }><FontAwesomeIcon icon={faSurprise}/></div>
            // <div id='4' className={ effort == 5 ? 'col-2 effortIcon effort' :  'col-2 effortIcon' }><FontAwesomeIcon icon={faSmileBeam}/></div> */
            }
        </div>
    )}

export {Effort}