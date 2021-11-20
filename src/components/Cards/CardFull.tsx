import React from 'react';
import './Card.scss';
import '../Button/button.scss';
import {useTypedSelector} from "../../store/modules/pokemon";

interface ISkill {
    title: string;
    grade: number;
}

export const CardFull: React.FC = () => {

    const cardInfo = useTypedSelector(state => state.pokemon.pokemonList);

    const skills: ISkill[] = [
        {
            title: 'skill 1',
            grade: 555555
        },
        {
            title: 'skill 2',
            grade: 3333
        },
    ]

    const trList = skills.map(skill => {
        return (
            <tr key={skill.title}>
                <td scope="row">{ skill.title }</td>
                <td> { skill.grade } </td>
            </tr>
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
            <h4 className={"card__title"}> name </h4>
            <table>
                <tbody>
                { trList }
                </tbody>
            </table>
        </div>
    );
};
