
export class Card {
    constructor(data) {
        this.question = data.question
        this.right = data.correct_answer
        this.wrong = data.incorrect_answers
    }

    get CardTemplate() {
        return /*html*/`
    <div class="col-9 mx-auto">
        <div class="bg-light elevation-2 rounded text-center">
            <h1>${this.question}</h1>
            <div class="h3">${this.right}</div>
            <div class="h3">${this.wrong[0]}</div>
            <div class="h3">${this.wrong[1]}</div>
            <div class="h3">${this.wrong[2]}</div>
            </div>
            </div>
    `

    }
}


