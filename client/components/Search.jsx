import React from "react";
import recipedata from "../../Data/recipes";

class Search extends React.Component {
  handleClick(e) {
    let myul = document.getElementById("ulsearchresults");
    myul.innerHTML = "";

    let mysearch = document.getElementById("searchterm").value.toLowerCase();

    if (mysearch.length == 0) return;

    for (let i = 0; i < recipedata.length; ++i) {
      let title = recipedata[i].title.toLowerCase();
      if (title.search(mysearch) >= 0) {

        //add it to the list of search results;
        let myli = document.createElement("li");
        myli.classList.add("recipe-list-li");
        let mya = document.createElement("a");
        mya.classList.add("recipe-li");
        let mytext = document.createTextNode(recipedata[i].title);
        mya.appendChild(mytext);
        mya.href = "#/DisplayRecipe/" + recipedata[i].id;
        myli.appendChild(mya);
        myul.appendChild(myli);
      } else {
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
              type="button"
            >
              Find Food!
            </button>
          </div>
        </form>
        <ul id="ulsearchresults"></ul>
      </div>
    );
  }
}

export default Search;
