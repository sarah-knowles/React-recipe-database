import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div class="wrapper">
          <div class="item">
            <a href="#/MeatDishes">
              <div class="frame">
                <img class="image" src="images/meatloaf.jpg" />
                <div class="caption"><a class="link" href="#/MeatDishes">Meat Dishes</a>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#/PastaDishes">
              <div class="frame">
                <img class="image" src="images/spaghetti.jpg" />
                <div class="caption"><a class="link" href="#/PastaDishes">Pasta</a>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#/Desserts">
              <div class="frame">
                <img class="image" src="/images/cheesecake.jpg" />
                <div class="caption"><a class="link" href="#/Desserts">Desserts</a>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#/Drinks">
              <div class="frame">
                <img class="image" src="images/drinks.jpg" />
                <div class="caption"><a class="link" href="#/Drinks">Drinks</a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Home