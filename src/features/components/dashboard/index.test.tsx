import Component from './'
import makeSnapshot from './../../testing/makeSnapshot'

describe('Dashboard', () => {
  it('renders correctly', () => {
    makeSnapshot(<Component />)
  })
})
