
export class API {
    //TODO: implement all fetch to work async 


    static getWorkouts(token){
        return fetch("http://127.0.0.1:8000/workouts/", {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
            }
        }).then( res => res.json())
    }

    static workoutDetails(token, id){
        console.log('Fetching data after updating effort')
        return fetch(`http://127.0.0.1:8000/workouts/${id}`, {
            method: 'GET',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
            }
        }).then( res => res.json())
    }

    //TODO: impplement date update
    static updateWorkout (token, id, date=null, effort=null){
        let body = {effort : effort + 1}
        
        return  fetch(`http://127.0.0.1:8000/workouts/${id}/updateWorkout/`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
            },
            body : JSON.stringify(body)
        }) //TODO: implement .then(resp => resp.json)

    }

    static deletWorkout (token, id, date=null, effort=null){
        let body = {effort : effort + 1}
        
        return  fetch(`http://127.0.0.1:8000/workouts/${id}/updateWorkout/`, {
            method: 'DELETE',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
            },
            body : JSON.stringify(body)
        })

    }
    
    //Authentication methods

    static loginUser (body){        
        return  fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
            },
            body : JSON.stringify(body)
        })
        .then(resp => resp.json())

    }

    //TODO: need to implement user registration api???
    static registerUser (body){        
        return  fetch(`http://127.0.0.1:8000/api/users`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
            },
            body : JSON.stringify(body)
        })
        .then(resp => resp.json())

    }
  
}