/*
File: app.js
Author: Ragány Dávid Gergő
Copyright: 2023, Ragány Dávid Gergő
Group: Szoft I-2-E
Date: 2023.05.07
Github: 
Licenc: GNU GPL 
*/

const doc =  {
    tbody: document.querySelector('#tbody')
};

const state = {
    host: 'http://localhost:8000/',
    ships: []
};

function getDatabase() {
    let url = state.host +'ships';
    fetch(url)
    .then(response => response.json())
    .then(result => {
        state.ships = result;
        render();
        });
}

function render() {
    let rows = '';
    state.ships.forEach( (ship) => {
        //console.log(ship.name);
        rows += `
        <tr>
            <td>${ship.name}</td>
            <td>${ship.length}</td>
            <td>${ship.price}</td>
            <td>${ship.person}</td>
            <td>${ship.trailer}</td>
        </tr>
        `;
    });
    tbody.innerHTML = rows;
}

getDatabase();