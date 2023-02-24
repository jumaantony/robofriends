import React from 'react';
import Card from './Card';

const CardList = ({robots}) =>{
    const cardcomponent = robots.map((user, i) => (
       <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} image={robots[i].image}/>
    ));

    return (
        <div>
            {cardcomponent}
        </div>
    );
}

export default CardList;
