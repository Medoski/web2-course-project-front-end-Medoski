"use strict";

const apiKey = '38f02c16bd3f4b208587775b9c332912'

// Made module for register
async function register(
    firstname,
    lastname,
    email,
    password
) {

    const response = await fetch('https://web2-course-project-medoski.onrender.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        })
    })

    return response
}

// Made module for login
async function login(
    email,
    password
) {
    const response = await fetch(`https://web2-course-project-medoski.onrender.com/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    return response
}

async function fetchAllGames() {
    const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}`);
    const games = await response.json();
    return games;
}

export {
    register,
    login,
    apiKey,
    fetchAllGames
};