import { Component } from 'react'
import Section from 'components/uiComponents/Section'
import UsersList from 'components/UserList'
import Button from 'components/uiComponents/Button.styled'
import Form from 'components/Form/Form'
import { nanoid } from 'nanoid'
import { getUsers } from 'API/users'
import { Loader } from 'components/Loader/Loader'
import { Notify } from 'notiflix'

const LIMIT = 10

class App extends Component {
  state = {
    users: null,
    isShowForm: false,
    isLoading: false,
    page: 1,
  }

  componentDidMount() {
    this.getDataFromApi()
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.getDataFromApi()
    }
  }

  getDataFromApi = async () => {
    let skip = LIMIT * this.state.page - LIMIT
    try {
      this.setState({ isLoading: true })
      const { users } = await getUsers(skip, LIMIT)
      if (this.state.page > 1) {
        this.setState(prev => ({ users: [...prev.users, ...users] }))
      } else {
        this.setState({ users })
      }
    } catch (error) {
      Notify.failure(error.message)
    } finally {
      this.setState({ isLoading: false })
    }
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

  incrementPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }))
  }

  render() {
    const { users, isLoading } = this.state
    console.log(this.state)
    return (
      <Section title={'Users List'}>
        {isLoading && <Loader />}
        {users && (
          <>
            <UsersList
              users={users}
              deleteUsers={this.deleteUsers}
              changeJobStatus={this.changeJobStatus}
            />
            <Button onClick={this.incrementPage}>Load more</Button>
          </>
        )}
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
