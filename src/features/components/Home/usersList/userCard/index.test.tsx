import Component from './'
import makeSnapshot from './../../../../testing/makeSnapshot';

jest.mock('@material-ui/core/Card', () => 'Card')
jest.mock('@material-ui/core/CardActionArea', () => 'CardActionArea')
jest.mock('@material-ui/core/CardContent', () => 'CardContent')
jest.mock('@material-ui/core/CardMedia', () => 'CardMedia')
jest.mock('@material-ui/core/Typography', () => 'Typography')

describe('UserCard', () => {
  it('renders correctly', () => {
    const props = {
      id:'1',
      firstName: 'Alan',
      lastName: 'Walker',
      picture: 'test'
    }
    makeSnapshot(<Component {...props}/>)
  })
})
