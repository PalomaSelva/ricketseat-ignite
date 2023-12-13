import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  // informações que vamos compartilhar entre todos os componentes da aplicação
  // Um objeto com todas as fatias do estado gigantão
  reducer: {},
})

// tipando os reducers
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
