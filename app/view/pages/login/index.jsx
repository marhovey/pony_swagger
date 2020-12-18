import React, {useState, useEffect, useCallback} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import * as api from '../../api';

import './index.scss';

export default function Login(props) {

  const [form, setForm] = useState({})

  const handleLogin = useCallback(() => {
    api.user.login({
      data: {
        username: 'pony',
        password: '123456'
      }
    }).then(res => {

    })
  }, [])

  return (
    <div className="login">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            这是logo
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            这是slogan
          </Typography>
          <div className="">
            <FormControl
              required
              size="small"
              fullWidth
              variant="outlined">
              <InputLabel htmlFor="username">用户名</InputLabel>
              <OutlinedInput
                id="username"
                labelWidth={50}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleOutlinedIcon fontSize="small" color="disabled" />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              error
              required
              size="small"
              fullWidth
              variant="outlined">
              <InputLabel htmlFor="password">密码</InputLabel>
              <OutlinedInput
                id="password"
                labelWidth={50}
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon fontSize="small" color="error" />
                  </InputAdornment>
                }
              />
              <FormHelperText id="password-text">Error</FormHelperText>
            </FormControl>
            <FormControl size="small" fullWidth>
              <Button onClick={() => handleLogin()} variant="contained" color="primary" disableElevation>
                登录/注册
              </Button>
            </FormControl>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}