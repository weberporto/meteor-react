/**
 * Created by weber on 5/16/18.
 */

import React, { Component } from 'react';

// Task component - represents a single todo item
// Componente Task representa um único item da lista gerado pelo componente App

export default class Task extends Component {

    render() {

        return (

            <li>{this.props.task.text}</li>
        );

    }
}