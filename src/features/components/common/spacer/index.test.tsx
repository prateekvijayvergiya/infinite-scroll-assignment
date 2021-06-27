import Component from './'
import makeSnapshot from './../../../testing/makeSnapshot'

describe('Spacer', () => {
  it('renders correctly', () => {
    const props = {
      spacing: 1,
    }
    makeSnapshot(<Component {...props} />)
  })
})
