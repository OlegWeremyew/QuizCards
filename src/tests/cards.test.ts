import {cardsAction, cardsReducer} from "../Redux/cardsReducer";
import {InitialCardStateType} from "../Redux/cardsReducer/types";
import {EMPTY_STRING} from "../constants";

let startState: InitialCardStateType

beforeEach(() => {
    startState = {
        cards: [],
        cardsTotalCount: 0,
        maxGrade: 0,
        minGrade: 0,
        page: 1,
        pageCount: 8,
        searchCard: EMPTY_STRING,
        sortCards: '0updated',
        packUserId: EMPTY_STRING,
        token: EMPTY_STRING,
        tokenDeathTime: 0,
        cardAnswer: EMPTY_STRING,
        cardQuestion: EMPTY_STRING,
        grade: 0,
    }
})

test('correct change sortCards', () => {

    const value: string = '1updated';

    const endState = cardsReducer(startState, cardsAction.sortCardsAC(value))
    expect(endState.sortCards).toBe(value);
});

test('correct changeCurrentPage', () => {

    const value: number = 3;

    const endState = cardsReducer(startState, cardsAction.changeCurrentPageCardsAC(value))
    expect(endState.page).toBe(value);
});

test('correct search', () => {

    const value: string = 'new';

    const endState = cardsReducer(startState, cardsAction.setFilterReducerAC(value))
    expect(endState.cardQuestion).toBe(value);
});
