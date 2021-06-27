import React from 'react'
import MaterialClassNameProvider from './materialClassNameProvider'
import renderer from 'react-test-renderer'

const makeSnapshot = (node: React.ReactNode) => {
  const tree = renderer
    .create(
      <MaterialClassNameProvider>
        {node}
      </MaterialClassNameProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
}

export default makeSnapshot
