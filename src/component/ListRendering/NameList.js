import React, { Component } from 'react';
import Person from './Person'
class NameList extends Component {
    person = [
        {
            id: 1,
            name: "bruce",
            age: 28,
            skill: "Angular"
        },
        {
            id: 2,
            name: "Clark",
            age: 28,
            skill: "Reactjs"
        },
        {
            id: 3,
            name: "Diana",
            age: 28,
            skill: "Vuejs"
        },
    ]
    render() {
        const NameList = this.person.map(person => <Person key={person.id} personList={person} />);
        return <div>{NameList} </div>
    }
}

export default NameList;