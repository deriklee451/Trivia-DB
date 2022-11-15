import { appState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js";
import { setHTML } from "../Utils/Writer.js";


function _drawCards() {
    let cards = appState.cards
    let template = ''
    cards.forEach(c => template += c.CardTemplate)
    setHTML('cards', template)
}


export class TriviaController {
    constructor() {
        console.log('Controller Loaded');
        this.getCards()
        appState.on('cards', _drawCards)


    }


    async getCards() {
        console.log('Getting cards');
        await triviaService.getTriviaCard()

    }

}