import React from 'react'

class Home extends React.Component {
  render() {
   return (
     <div>

   

        <div class="wrapper">
          <div class="item">
            <div class="frame">
              <img class="image" src="images/meatloaf.jpg"/>
                <div class="caption"><a class="link" href="meat.html">Meat Dishes</a>
                </div>
            </div>
          </div>
          <div class="item">
            <div class="frame">
              <img class="image" src="images/spaghetti.jpg"/>
                <div class="caption"><a class="link" href="pasta.html">Pasta</a>
                </div>
            </div>
          </div>
          <div class="item">
            <div class="frame">
              <img class="image" src="/images/cheesecake.jpg"/>
                <div class="caption"><a class="link" href="desserts.html">Desserts</a>
                </div>
            </div>
          </div>
          <div class="item">
            <div class="frame">
              <img class="image" src="images/drinks.jpg"/>
                 <div class="caption"><a class="link" href="drinks.html">Drinks</a>
                 </div>
            </div>
          </div>
        </div>



      </div>
    )
  }
}
export default Home