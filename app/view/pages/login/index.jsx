import React, {useState, useEffect, useCallback} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import * as api from '../../api';
import './index.scss';
import Form from '../../components/form/index.jsx';
import { formList } from './CONST';

export default function Login(props) {

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
            <Form
              formList={formList}
            />
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