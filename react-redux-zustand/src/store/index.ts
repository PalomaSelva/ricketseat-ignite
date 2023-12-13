import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
// pequenas fatias do estado gigantão
const toDoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer Café', 'Estudar Redux', 'Estudar Angular'],
  reducers: {
    // ações do reducer
    add: (state, action) => {
      console.log(state, action)
      state.push(action.payload)
    },
  },
})

export const store = configureStore({
  // informações que vamos compartilhar entre todos os componentes da aplicação
  // Um objeto com todas as fatias do estado gigantão
  reducer: { todo: toDoSlice.reducer },
})

export const { add } = toDoSlice.actions
// tipando os reducers
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
