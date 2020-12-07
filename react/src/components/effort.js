//Functional component
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fab } from '@fortawesome/free-solid-svg-icons'
import { faMeh, faSadCry, faSadTear, faSurprise, faSmileBeam  } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Effort(props){
    let effort = props.effort;
    const icons = [ faSadCry , faSadTear,  faMeh, faSurprise, faSmileBeam];
    
    // Using stars for effort
    const [effortStar, setEffortStar] = useState(-1) // creating a state for this functional component

    const highlight = h => event => {
        setEffortStar(h)
    }
    const starClicked = n => event => {
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
                            onMouseEnter={highlight(i)} onMouseLeave={highlight(-1)} onClick={starClicked(i)}/>
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