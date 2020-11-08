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
                <div class="caption"><a class="link" href="meat.html">Meat Dishes</a>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#/PastaDishes">
              <div class="frame">
                <img class="image" src="images/spaghetti.jpg" />
                <div class="caption"><a class="link" href="pasta.html">Pasta</a>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#/Desserts">
              <div class="frame">
                <img class="image" src="/images/cheesecake.jpg" />
                <div class="caption"><a class="link" href="desserts.html">Desserts</a>
                </div>
              </div>
            </a>
          </div>
          <div class="item">
            <a href="#/Drinks">
              <div class="frame">
                <img class="image" src="images/drinks.jpg" />
                <div class="caption"><a class="link" href="drinks.html">Drinks</a>
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