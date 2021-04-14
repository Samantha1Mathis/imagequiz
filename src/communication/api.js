let apiHost = "https://samantha1mathis-imagequiz.herokuapp.com"

let getQuizzes = () =>{
    return fetch(apiHost + "/quizzes")
    .then(response => response.json());
};
let getFlowers = () =>{
    return fetch(apiHost + "/flowers")
    .then(response => response.json());
};

let addScores = (score) => {
    return fetch(apiHost + "/score", {
        method: 'post',
        header: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(score)
    });
}
let api = {
    getQuizzes: getQuizzes,
    getFlowers: getFlowers,
    addScores: addScores
};


export default api;
