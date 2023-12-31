import Section from '../uiComponents/Section'
import { Card, InfoContainer, NativeText, Text, Title } from './User.styled'
import { Link, useLocation } from 'react-router-dom'

const User = ({ user: { id, name, avatarUrl, username, website, phone, email, hasJob } }) => {
  const isEndedBiz = email.endsWith('biz')

  const location = useLocation()

  return (
    <Section>
      <Card>
        <div>
          <img src={avatarUrl} alt={'Avatar'} />
          {/* <Button $width="100%" onClick={() => deleteUsers(id)}>
            Delete
          </Button> */}
        </div>
        <InfoContainer>
          <div>
            <Link to={`/search/${id}`} state={location}>
              <Title>
                {username} {name}
              </Title>
            </Link>

            <Text>
              Phone: <NativeText>{phone}</NativeText>
            </Text>
            <Text>
              Email: <NativeText isEndedBiz={isEndedBiz}>{email}</NativeText>
            </Text>
            <a href={website}> {website}</a>
          </div>
          {/* <div>
            <Text>Has Job: {hasJob.toString()}</Text>
            <Button $width="100%" onClick={() => changeJobStatus(id)}>
              Change job Status
            </Button>
          </div> */}
        </InfoContainer>
      </Card>
    </Section>
  )
}

export default User
