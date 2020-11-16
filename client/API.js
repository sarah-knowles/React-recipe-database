import request from 'superagent'

const serverURL = 'http:localhost:3000'
const recipeURL = "http://api.edamam.com/search"

export function getRecipes() {
  return request.get(recipeURL + "7b17b79ece859d7ee0461562052bc2c0")
    .then(response => response.body)
}