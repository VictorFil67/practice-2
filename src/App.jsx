import { Component } from 'react'
import Section from 'components/uiComponents/Section'
import UsersList from 'components/UserList'
import dataJson from './users.json'
import Button from 'components/uiComponents/Button.styled'
import Form from 'components/Form/Form'
import { nanoid } from 'nanoid'
const KEY ='users';


class App extends Component {
  state = {
    users: null,
    isShowForm: false,
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
    }), () => localStorage.setItem(KEY, JSON.stringify(this.state.users)))
  }

  handleClick = () => {
    this.setState({ isShowForm: true })
  }

  createUser = user => {
    const newUser = {
      ...user,
      id: nanoid(),
      hasJob: false,
    }
    this.setState(prev => ({ users: [...prev.users, newUser], isShowForm: false }))
  }

componentDidMount() {
  const dataFromLS = localStorage.getItem(KEY);
  // if (!dataFromLS)  {
  //   this.setState({users: dataJson})
  // } else if (JSON.parse(dataFromLS).length === 0) {
  //   this.setState({users: dataJson})
  // } else if(dataFromLS) {
  //   this.setState({users: JSON.parse(dataFromLS)})
  // } 
  if (dataFromLS && JSON.parse(dataFromLS).length) {
    this.setState({users: JSON.parse(dataFromLS)})
  } else {
    this.setState({users: dataJson})
  }
}

// componentDidUpdate(_, prevState) {
//   if (this.state.users !== prevState.users) {
//     localStorage.setItem(KEY, JSON.stringify(this.state.users))
//     console.log('saved')
//   }
// }

componentDidUpdate(_, prevState) {
  console.log( prevState.users)
  if (this.state.users.length !== prevState.users?.length) {
    localStorage.setItem(KEY, JSON.stringify(this.state.users))
    console.log('saved')
  }
}



  render() {
    const { users } = this.state
    console.log('render')
    return (
      <Section title={'Users List'}>
      { users && (
        <UsersList
          users={users}
          deleteUsers={this.deleteUsers}
          changeJobStatus={this.changeJobStatus}
        />
      )
      }
        {this.state.isShowForm ? (
          <Form createUser={this.createUser} />
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
