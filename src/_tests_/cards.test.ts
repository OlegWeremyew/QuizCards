import {
    cardsReducer,
    changeCurrentPageCardsAC,
    InitialStateType,
    setFilterReducerAC,
    sortCardsAC
} from "../main/bll/cardsReducer";

let startState: InitialStateType

beforeEach(() => {
    startState = {
        cards: [],
        cardsTotalCount: 0,
        maxGrade: 0,
        minGrade: 0,
        page: 1,
        pageCount: 8,
        searchCard: '',
        sortCards: '0updated',
        packUserId: '',
        token: '',
        tokenDeathTime: 0,
        cardAnswer: "",
        cardQuestion: '',
        grade: 0,
    }
})

test('correct change sortCards', () => {

    const value:string = '1updated';

    const endState = cardsReducer(startState, sortCardsAC(value))
    expect(endState.sortCards).toBe(value);
});

test('correct changeCurrentPage', () => {

    const value:number = 3;

    const endState = cardsReducer(startState, changeCurrentPageCardsAC(value))
    expect(endState.page).toBe(value);
});

test('correct search', () => {

    const value:string = 'new';

    const endState = cardsReducer(startState, setFilterReducerAC(value))
    expect(endState.cardQuestion).toBe(value);
});
