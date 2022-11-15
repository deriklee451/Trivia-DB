import { appState } from "../AppState.js";
import { Card } from "../Models/Trivia.js";




class TriviaService {
    async getTriviaCard() {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
        console.log('Card data', response.data);
        appState.cards = response.data.results.map(c => new Card(c))
    }


}




export const triviaService = new TriviaService()