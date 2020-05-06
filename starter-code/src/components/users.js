import React from 'react'

const users = (props) => {

      return (
        <tr>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.campus}</td>
        <td>{props.role}</td>
        </tr>
        );
    };
    
    export default users;