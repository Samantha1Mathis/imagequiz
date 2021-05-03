let apiHost = "https://samantha1mathis-imagequiz.herokuapp.com"

let getQuizzes = () =>{
    return fetch(apiHost + "/quizzes")
    .then(response => response.json());
};
let getFlowers = () =>{
    return fetch(apiHost + "/flowers")
    .then(response => response.json());
};

let addScores = (score, username, quizID) => {
    return fetch(apiHost + "/score", {
        method: 'post',
        header: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({score:score, username: username, quizID: quizID})
    });
}

let getQuiz = (id) =>{
    let id_new= parseInt(id) + 1;
    return fetch(apiHost + '/quiz/' +id_new)
    .then(response => response.json())
    .catch(e => console.log("There was an error getting the quiz"));
}

let getCustomers= () =>{
    return fetch(apiHost + "/customers")
    .then(response => response.json());
};

let addCustomers = (username, email, password) =>{
    return fetch(apiHost + "/customers", {
        method: 'post',
        header: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({username: username, email: email, password: password})
    });

}
let api = {
    getQuizzes: getQuizzes,
    getFlowers: getFlowers,
    addScores: addScores,
    addCustomers: addCustomers,
    getCustomers: getCustomers,
    getQuiz: getQuiz
};


export default api;
