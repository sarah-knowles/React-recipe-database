import React from "react";
import recipedata from "../../Data/recipes";

class Search extends React.Component {
  handleClick(e) {
    //e.preventdefault()
    let mysearch = document.getElementById("searchterm").value.toLowerCase();
    let results = [];
    if (mysearch.length == 0) return;

    for (let i = 0; i < recipedata.length; ++i) {
      let title = recipedata[i].title.toLowerCase();
      if (title.search(mysearch) >= 0) {
        console.log("search match: " + title);
        //add it to the list of search results
        results.push(title);
      } else {
        console.log("search NO match: " + title);
      }
    }
  }

  render() {
    return (
      <div>
        <h3 className="search-title">What Do You Feel Like?</h3>

        <form>
          <div class="search-box">
            <input
              id="searchterm"
              type="text"
              class="search"
              name="name"
              placeholder="Search"
            />
            <button
              onClick={this.handleClick}
              class="search-button"
              type="submit"
            >
              Find Food!
            </button>
          </div>
        </form>
        <ul>
          <li class="recipe-list-li">
            <a class="recipe-li" href="#/DisplayRecipe/10303">
              Lemon Gelato
            </a>
          </li>

          <li class="recipe-list-li">
            <a class="recipe-li" href="#/DisplayRecipe/10301">
              Bailey's Cheesecake
            </a>
          </li>
        </ul>
        {/* <ul>
          {results.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Search;
