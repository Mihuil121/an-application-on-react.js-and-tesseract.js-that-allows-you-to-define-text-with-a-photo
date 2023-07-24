import React, { Component } from 'react';

export default class Find extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inpyt: ["техника",
                "машина", "овощи",
                "фрукты", "земля", "трава",
                "вселенная", "космос", "звезда",
                "планета", "компьютер", "телефон", "музыка",
                "кино", "спорт", "футбол", "баскетбол", "хоккей",
                "теннис", "плавание", "бег", "лыжи", "коньки", "горы",
                "море", "озеро", "река", "лес", "пустыня", "степь",
                "тундра", "саванна", "джунгли"
            ],
        }
    }


    render() {

        return (
            <div className="Apps" >

                <div className='find'>
                    <p className='finds'>
                        Найди слово :
                    </p>
                    <p className='findse'><p className='findf'>  {this.state.inpyt[Math.floor(Math.random() * this.state.inpyt.length)]}</p>
                    </p>

                </div>
            </div>
        )
    }
}

