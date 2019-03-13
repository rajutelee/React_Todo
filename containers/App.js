import React, { Component } from 'react';

const people = ['List item 1', 'List item 2', 'List item 3', 'List item 4', "List item 5"],
    peopleList = people.map( (member, i) =>
            <li key={'memberName_' + i}>{member}</li>
        );

const myDiv = React.createElement(
    'h1',
    null,
    'Create h1 using createElement'
)

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>{peopleList}</ul>
                {myDiv}
            </div>
        )
    }
}