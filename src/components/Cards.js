import React from 'react';
import CardItem from './CardItem';
import './Cards.scss';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the members, they are epic</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/RM.jpg"
              text="The Leader of the worldwide known Kpop group BTS"
              label="Kim NamJoon"
              path="/members"
            />
            <CardItem
              src="images/Jin.jpg"
              text="The eldest member of BTS, World Wide Handsome"
              label="Kim SeokJin"
              path="/members"
            />
                  </ul>
                  <ul className="cards__items">
            <CardItem
              src="images/Suga.jpg"
              text="The second eldest and savage rapper of BTS"
              label="Min Yoongi"
              path="/members"
            />
         
          
            <CardItem
              src="images/JHope.jpg"
              text="The Dancer, rapper and sunshine of BTS"
              label="Jung HoSeok"
              path="/members"
            />
            <CardItem
              src="images/Jimin.jpg"
              text="The Hyung of Maknae line and a literal angel of BTS"
              label="Park Jimin"
              path="/members"
                      />
                  </ul>
                  <ul className="cards__items">
            <CardItem
              src="images/V.jpg"
              text="The Baby Bear and Alien of BTS"
              label="Kim TaeHyung"
              path="/members"
            />
          
          
            <CardItem
              src="images/JK.jpg"
              text="The youngest member of BTS popularly known as Golden Maknae"
              label="Jeon JungKook"
              path="/members"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
