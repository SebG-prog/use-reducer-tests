export const initialValues = {
  name: 'Bob',
  loading: false
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'startGettingName':
      return { ...state, loading: true }
    case 'endGettingName':
      return { ...state, name: action.name, loading: false }
    default:
      return state
  }
}