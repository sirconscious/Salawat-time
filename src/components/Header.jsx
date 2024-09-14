import React from 'react';

export default function Header(props) {
    const { data , city} = props;

    const { date } = data?.data;

    return (
        <header>
            <h1>{city}</h1>
            <h3>{date?.gregorian?.date}</h3>
        </header>
    );
}
