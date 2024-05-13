import { useCallback, useReducer } from 'react'

type UseToggleValuesT = string | number | boolean

type ToggleActionT =
  | { type: 'TOGGLE' }
  | { type: 'SET_VALUE'; value: UseToggleValuesT }

type ToggleStateT = {
  allValues: UseToggleValuesT[]
  value: UseToggleValuesT
  index: number
}

function toggleReducer(
  state: ToggleStateT,
  action: ToggleActionT
): ToggleStateT {
  switch (action.type) {
    case 'TOGGLE':
      const index = (state.index + 1) % state.allValues.length
      const value = state.allValues[index]
      return {
        ...state,
        value,
        index,
      }
    case 'SET_VALUE':
      return {
        ...state,
        value: action.value,
        index: state.allValues.indexOf(action.value),
      }
    default:
      return state
  }
}

export const useToggle = (
  initialValues: UseToggleValuesT[] = [true, false]
) => {
  const [state, dispatch] = useReducer(toggleReducer, {
    allValues: initialValues,
    value: initialValues[0],
    index: 0,
  })

  console.log(state.allValues)

  const toggle = useCallback((value?: UseToggleValuesT) => {
    if (value !== undefined) {
      dispatch({ type: 'SET_VALUE', value })
    } else {
      dispatch({ type: 'TOGGLE' })
    }
  }, [])

  return [state.value, toggle] as const
}
