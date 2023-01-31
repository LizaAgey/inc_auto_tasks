import {UserPage} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserPage, action: ActionType): UserPage => { // need to fix any
    let copyState = [...state]
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                copyState.sort((user_1, user_2) => {
                    if (user_1.name > user_2.name) {
                        return 10
                    } else {
                        return -10
                    }
                })
                console.log('up', copyState)

            }

            if (action.payload === 'down') {
                copyState.sort((user_1, user_2) => {
                    if (user_1.name < user_2.name) {
                        return 10
                    } else {
                        return -10
                    }
                })
                console.log('down', copyState)
            }

            return copyState
        }
        case 'check': {

            let result = copyState.filter((user) => user.age >= action.payload)
            console.log('check', result)
            return result
        }
        default:
            return state
    }
}
