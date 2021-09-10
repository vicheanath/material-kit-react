import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import UserListToolbar from 'src/components/user/UserListToolbar';
import { getUserData } from 'src/store/actions/userAction';
import { useDispatch } from 'react-redux'
import UserList from 'src/components/user/UserList';
const User = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserData())
  }, [])
  return <>
    <Helmet>
      <title>User</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ pt: 3 }}>
          <UserList />
        </Box>
      </Container>
    </Box>
  </>
};

export default User;
