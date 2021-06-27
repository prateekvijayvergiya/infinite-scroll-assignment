import Component from './'
import makeSnapshot from './../../testing/makeSnapshot'

jest.mock('@material-ui/lab/Skeleton', () => 'Skeleton')
jest.mock('@material-ui/core/Card', () => 'Card')
jest.mock('@material-ui/core/CardActionArea', () => 'CardActionArea')
jest.mock('@material-ui/core/CardContent', () => 'CardContent')

describe('LoadingSkeleton', () => {
  it('renders correctly', () => {
    makeSnapshot(<Component />)
  })
})
