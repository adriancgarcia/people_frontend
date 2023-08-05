// the url for our backend server
import { baseUrl } from "./base_url";
// function allows us to redirect to other routes
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
// GET THE DATE FROM THE FORM IN THE REQUEST
const formData = await request.formData()
// setup the objct for our new person
const newPerson = {
    name: formData.get('name'),
    image: formData.get('image'),
    title: formData.get('title')
}
// send the new person to our backend API
    await fetch(`${baseUrl}/people`, {
        // tell fetch to mae a post request
        method:'POST',
        headers: {
            // tells our backend the data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newPerson object
        body: JSON.stringify(newPerson)
    })
        // redirect the usert nback to the frontend index route
        return redirect('/')
}

export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id
    // grab the data from the form
    const formData = await request.formData()
    // buuild out the updated person
const updatePerson = {
    name: formData.get('name'),
    image: formData.get('image'),
    title: formData.get('title')
    }
    // send the updated person to our backend API
    await fetch (`${baseUrl}/people/${id}`, {
        // tell fetch to make a put request
        method:'PUT',
        headers: {
            // tell backend the data is JSON
            "content-Type": "application/json"
        },
        // send the json string of the updatedPerson object
        body: JSON.stringify(updatePerson)
    })
    // redirect back to show page frontend route
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grab the id from the params
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/people/${id}`, {
    // tell fetch to make a delete request
        method: 'DELETE'
         // no headers or body required for delete requests
    })
    // redirect back to the frontend index route
    return redirect('/')
}