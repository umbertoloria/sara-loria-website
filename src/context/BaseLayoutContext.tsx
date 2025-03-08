import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

const BaseLayerContext = createContext<{
  value: string
  setValue: (value: string) => void
}>({
  value: '',
  setValue() {},
})

export const BaseLayoutContextProvider: FC<PropsWithChildren> = props => {
  const [value, setValue] = useState('')
  return (
    <BaseLayerContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {props.children}
    </BaseLayerContext.Provider>
  )
}

export const useBaseLayoutContext = () => {
  return useContext(BaseLayerContext)
}
