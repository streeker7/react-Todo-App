import React, { Component } from 'react';

// class Person extends Component {

//     constructor(props) {
//         super(props)

//     }
//     render() {
//         const { name, age, skill } = this.props.person;

//         return 
//     }
// }

function Person({ personList }) {
    console.log(personList);
    // const { name, age, skill } = this.personList;
    return (
        <div>
            <h2>i am {personList.name} and age {personList.age} and skill in {personList.skill}</h2>
        </div>
    )
}
export default Person;