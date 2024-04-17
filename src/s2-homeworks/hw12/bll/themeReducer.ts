const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        case'SET_THEME_ID' :
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

// types

type initStateType = {
    themeId: number
}
type changeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) // fix any
