import Component from '.'
import makeSnapshot from '../../testing/makeSnapshot'

jest.mock('@material-ui/core/Grid', () => 'Grid')
jest.mock('@material-ui/core/Typography', () => 'Typography')
jest.mock('@material-ui/core/Button', () => 'Button')
jest.mock('./usersList/index', () => 'UsersList')
jest.mock('../common/spacer', () => 'Spacer')

describe('Home', () => {
  it('renders correctly', () => {
    makeSnapshot(<Component />)
  })
})
