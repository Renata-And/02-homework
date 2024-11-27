import { UserType } from '../HW8'

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      const newState = state.map(user => ({ ...user }))
      if (action.payload === 'up') {
        return newState.sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
      }
      if (action.payload === 'down') {
        return newState.sort((a, b) => {
          return b.name.localeCompare(a.name);
        })
      }
      return state
    }
    case 'check': {
      return state.filter(user => user.age >= 18)
    }
    default:
      return state
  }
}
