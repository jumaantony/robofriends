import React from 'react';

const Card = (props) => {
    return (
        <div class="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow5">
            <img src={props.image} alt="robo_img"></img>
            <div>
                <h2> {props.name} </h2>
                <p> {props.email} </p>
            </div>
        </div>
    );
}

export default Card;