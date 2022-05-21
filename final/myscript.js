var chosenWord;

document.getElementById("reset").style.display = "none";

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

function shuffle(s) {
    let arr = s.split('');
    let n = arr.length;

    for (let i = 0; i < n - 1; ++i) {
        let j = getRandomInt(n);

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    s = arr.join('');
    return s;
}

function play(category) {
    let categoriesDetails = [
        ["england", "canada", "india"],
        ["lion", "tiger", "panda"],
        ["apple", "orange", "banana"]
    ];

    if (category == "Countries") {
        let categoryList = categoriesDetails[0];
        let givenWordSection = document.getElementById("givenWord");
        let givenWord = categoryList[getRandomInt(3)];
        givenWordSection.innerHTML = shuffle(givenWord);
        return givenWord;
    }
    if (category == "Animals") {
        let categoryList = categoriesDetails[1];
        let givenWordSection = document.getElementById("givenWord");
        let givenWord = categoryList[getRandomInt(3)];
        givenWordSection.innerHTML = shuffle(givenWord);
        return givenWord;
    }
    if (category == "Fruits") {
        let categoryList = categoriesDetails[2];
        let givenWordSection = document.getElementById("givenWord");
        let givenWord = categoryList[getRandomInt(3)];
        givenWordSection.innerHTML = shuffle(givenWord);
        return givenWord;
    }
}

function checkMatch(givenWord, wordToMatch) {
    if(wordToMatch != "" && givenWord != null) {
        if (wordToMatch == givenWord) {
            let messageHead = document.getElementById("messageHeader");
            messageHead.innerHTML = "Congratulations, the word is correct!";
            document.getElementById("reset").style.display = "block";
        } else {
            let messageHead = document.getElementById("messageHeader");
            messageHead.innerHTML = "Sorry, the word is incorrect!";
        }
    } else {
        if(givenWord == null || givenWord == "") {
            let messageHead = document.getElementById("messageHeader");
            messageHead.innerHTML = "Please select a category";
        } else if (wordToMatch == "") {
            let messageHead = document.getElementById("messageHeader");
            messageHead.innerHTML = "Please input a word";
        }
    }
}

let countriesBtn = document.getElementById("countriesButton");
countriesBtn.addEventListener('click', (e) => {
    let catagoryName = document.getElementById("chosenCategoryP");
    if (catagoryName == null || catagoryName == "") {
        catagoryName.innerHTML = "The chosen category is Countries, guess the word!";
    } else {
        catagoryName.innerHTML = "The chosen category is Countries, guess the word!";
    }
    chosenWord = play("Countries");
    console.log("Countries button clicked");
});

let animalsBtn = document.getElementById("animalsButton");
animalsBtn.addEventListener('click', (e) => {
    let catagoryName = document.getElementById("chosenCategoryP");
    if (catagoryName == null || catagoryName == "") {
        catagoryName.innerHTML = "The chosen category is Animals, guess the word!";
    } else {
        catagoryName.innerHTML = "The chosen category is Animals, guess the word!";
    }
    chosenWord = play("Animals");
    console.log("Animals button clicked");
});

let fruitsBtn = document.getElementById("fruitsButton");
fruitsBtn.addEventListener('click', (e) => {
    let catagoryName = document.getElementById("chosenCategoryP");
    if (catagoryName == null || catagoryName == "") {
        catagoryName.innerHTML = "The chosen category is Fruits, guess the word!";
    } else {
        catagoryName.innerHTML = "The chosen category is Fruits, guess the word!";
    }
    chosenWord = play("Fruits");
    console.log("Fruits button clicked");
});

let submitBtn = document.getElementById("submitButton");
submitBtn.addEventListener('click', (e) => {
    let submittedAnswer = document.getElementById("fname").value;
    checkMatch(chosenWord, submittedAnswer);
});

let resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', (e) => {
    chosenWord = "";
    document.getElementById("fname").value = "";
    document.getElementById("chosenCategoryP").innerHTML = "";
    document.getElementById("givenWord").innerHTML = "";
    document.getElementById("messageHeader").innerHTML = "";
    document.getElementById("reset").style.display = "none";
});
