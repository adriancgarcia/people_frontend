import { baseUrl } from "./base_url";

export const peopleLoader = async () =>{
    // make a call to backend iindex router
    const response = await 
    fetch (`${baseUrl}/people`)
    // convert the reponse in a js object
    const people = await response.json()
// return people
    return people
}

export const personLoader = async ({params}) => {
    const id = params.id
    // make a call the backend show rtoute
    const response = await fetch (`${baseUrl}/people/${id}`)
    // convert the response into a js object
    const person = await response.json()
    // return the person
    return person
}