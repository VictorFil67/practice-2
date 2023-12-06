import { Component } from 'react'
import Section from 'components/uiComponents/Section'
import UsersList from 'components/UserList'
import dataJson from './users.json'
import Button from 'components/uiComponents/Button.styled'
import Form from 'components/Form/Form'

class App extends Component {
  state = {
    users: dataJson,
    isShowText: false,
  }

  deleteUsers = userId => {
    this.setState(prev => ({
      users: prev.users.filter(({ id }) => id !== userId),
    }))
  }

  changeJobStatus = userId => {
    this.setState(prev => ({
      users: prev.users.map(user =>
        user.id === userId ? { ...user, hasJob: !user.hasJob } : user
      ),
    }))
  }

  handleClick = () => {
    this.setState({ isShowText: true })
  }

  render() {
    const { users } = this.state
    return (
      <Section title={'Users List'}>
        <UsersList
          users={users}
          deleteUsers={this.deleteUsers}
          changeJobStatus={this.changeJobStatus}
        />
        {this.state.isShowText ? (
          <Form />
        ) : (
          <Button onClick={this.handleClick} $bgColor="grey">
            Show form
          </Button>
        )}
      </Section>
    )
  }
}

export default App
