import {appReducer, InitialAppStateType, setAppStatusAC} from "./app-reducer";




test("correct status message should be set",()=>{

    let startState:InitialAppStateType={
        status: "idle",
        isVisible:false
    }

    const endState=appReducer(startState,setAppStatusAC("loading"))


    expect(endState.status).toBe("loading")

})