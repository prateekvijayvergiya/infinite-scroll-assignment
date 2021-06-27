import Component from './'
import makeSnapshot from './../../testing/makeSnapshot'

jest.mock('@material-ui/core/Grid', () => 'Grid')
jest.mock('@material-ui/core/TextField', () => 'TextField')
jest.mock('@material-ui/core/Button', () => 'Button')
jest.mock('@material-ui/lab/Alert', () => 'Alert')

describe('Login', () => {
  it('renders correctly', () => {
    makeSnapshot(<Component />)
  })
})
