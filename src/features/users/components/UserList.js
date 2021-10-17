import { Grid, Spinner } from '@chakra-ui/react'

import { useGetUsersQuery } from 'features/users/usersAPI'

import { UserCard } from 'features/users/components'

const UserList = () => {
  const { data: usersData, error: usersError, isLoading: isUsersLoading } = useGetUsersQuery()

  return (
    <Grid gap="4" height="fit-content">
      {usersError && 'Oh no, there was an error'}
      {isUsersLoading && <Spinner />}
      {usersData &&
        usersData.map((user) => {
          return (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              website={user.website}
              phone={user.phone}
            />
          )
        })}
    </Grid>
  )
}

export default UserList