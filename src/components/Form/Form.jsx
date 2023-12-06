import { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
    email: '',
  }
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createUser(this.state)
  }

  render() {
    const { name, email } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={this.handleChange} id="name" name="name" type="text" value={name} />
        <label htmlFor="email">E-mail</label>
        <input onChange={this.handleChange} id="email" name="email" type="email" value={email} />
        <button type="submit">Create</button>
      </form>
    )
  }
}
export default Form
