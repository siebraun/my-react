import "./../App.css";
import React, {useState, useEffect} from "react";
import { CSSTransition } from "react-transition-group";

export default function AnimLab(){
    const [cards, setCards] = useState([]);

    //on mount
    useEffect(() => {
        //generate cards
        let suits = ["A", "B", "C"];

        let genCards = suits.flatMap((suit) => {
            return [1,2,3,4,5,6,7].map((val) => {
                return {val: suit + val, active: true};
            });
        });
        setCards(genCards);
    }, []);

    //render stuff
    let cardEls = cards.map((card, ind) => {
        let delay = ind * 100;
        return (
        <CSSTransition 
            key={card.val} 
            appear={true} 
            in={card.active} 
            timeout={{enter: delay, exit: 400}} 
            classNames="card"
        >
            <div className="card" style={{transitionDelay: `${delay}ms`}} onClick={() => {
                cards[ind].active = false;
                setCards([...cards]);
            }}>
                {card.val}
            </div>
        </CSSTransition>);
    });

    return (
    <div>
        <div className="cardStack">{cardEls}</div>
    </div>);
}