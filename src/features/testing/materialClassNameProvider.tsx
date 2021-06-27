import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

const generateClassName = (rule: any, styleSheet: any) => `${styleSheet.options.classNamePrefix}-${rule.key}`

const MaterialClassNameProvider: React.FC = ({ children }) => (
  <StylesProvider generateClassName={generateClassName}>{children}</StylesProvider>
)

export default MaterialClassNameProvider
