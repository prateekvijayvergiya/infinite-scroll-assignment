import Component from './'
import makeSnapshot from './../../../testing/makeSnapshot'

jest.mock('@material-ui/core/Grid', () => 'Grid')
jest.mock('@material-ui/core/Typography', () => 'Typography')

jest.mock('./userCard', () => 'UserCard')
jest.mock('../../skeleton', () => 'LoadingSkeleton')
jest.mock('../../common/spacer', () => 'Spacer')

describe('UsersList', () => {
  it('renders correctly', () => {
    makeSnapshot(<Component />)
  })
})
