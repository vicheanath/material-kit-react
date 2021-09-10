import * as React from 'react';
import { Trash2, Eye, Edit2 } from 'react-feather'
import { useSelector } from 'react-redux';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  IconButton,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useDispatch } from 'react-redux'
import { openModal } from 'src/store/actions/uiActiuons';

export default function DataTable() {
  const user = useSelector(state => state.user.data)
  const dispatch = useDispatch()
  return (
    <Card>
      <CardHeader title="User List" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Last Login Time</TableCell>
                <TableCell>Last Login IP</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((user, idx) => (
                <TableRow
                  hover
                  key={idx}
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.full_name}</TableCell>
                  <TableCell>{user.phone_number}</TableCell>
                  <TableCell>{moment(user.last_login).format('LLL')}</TableCell>
                  <TableCell>{user.last_login_ip}</TableCell>
                  <TableCell>
                    <Chip
                      color={user.is_active ? 'primary' : 'secondary'}
                      label={user.is_active ? 'active' : 'inactive'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={()=>dispatch(openModal(user))}>
                      <Edit2 />
                    </IconButton>
                    <IconButton color="secondary">
                      <Trash2 />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
