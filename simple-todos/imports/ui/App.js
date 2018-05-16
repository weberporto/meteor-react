/**
 * Created by weber on 5/15/18.
 */

import React, { Component } from 'react';

import Task from './Task.js';


// App component - represents the whole app  (representa to do o app)
export default class App extends Component {    //criação de um componente...

    getTasks1(){
        return [                        //retorna um array de vários objetos com valores de propriedades para cada um
            { id: 1, nome: 'Weber'},
            { id: 2, nome: 'Weber Porto'},
            { id: 3, nome: 'Weber Porto Amaral'}
            ]
    }

    getTasks() {                        //getTasks é um método que retorna o array de objetos?

        return [                        //retorna um array de vários objetos com valores de propriedades para cada um
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    renderTasks1(){

        //getTasks1() usa o recurso map porque retorna um array (de objetos), com o map ele mapeia cada objeto dentro do array para tratamento (uso)
        //
        //
        return this.getTasks1().map((task1) => (

            <Task key = {task1.id} task = {task1} />
        ));
    }


    renderTasks() {

        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));

    }

    //responsavel pela renderização do componente e seu conteudo
    //o mapeamento de onde será renderizado é mapeado pelo DOM

    render() {
        return (
            <div className="container">

                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    { this.renderTasks() }
                </ul>

            </div>

            <div className="container2">

                <header>
                    <h1>My List</h1>
                </header>

                <ul>
                    { this.renderTasks1() }
                </ul>

            </div>

        );
    }

}