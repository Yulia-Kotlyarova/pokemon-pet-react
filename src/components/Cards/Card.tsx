import React from 'react';
import './Card.scss';
import '../Button/button.scss';
import {IPokemonListItem} from "../../store/modules/pokemon/types";

export interface ICardProps {
    name: string
    url: string
}

export const Card: React.FC<ICardProps> = ({ name, url }: ICardProps) => {
    const tags = ['aaa', 'bbb', 'ccc']

    const tagList = tags.map((tag, i) => {
        return (
            <button key={i} className={"btn__tag"} type={"button"}> {tag} </button>
        )
    })

    return (
        <div className='card__wrapper'>
            <div className='card__img-box'>
                <img className='card__img'
                     src="/"
                     alt={"img"}
                />
            </div>
            <h4 className={"card__title"}> { name } </h4>
            <div className={"tags-box"}>
                { tagList }
            </div>
        </div>
    );
};
