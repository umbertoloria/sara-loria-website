import { FC, PropsWithChildren } from 'react'
import { BaseLayoutContextProvider } from '../context/BaseLayoutContext.tsx'

export const BaseLayout: FC<PropsWithChildren> = props => {
  return (
    <BaseLayoutContextProvider>
      <InnerComp>{props.children}</InnerComp>
    </BaseLayoutContextProvider>
  )
}

const InnerComp: FC<PropsWithChildren> = props => {
  // const {} = useBaseLayoutContext()
  return <>{props.children}</>
}
