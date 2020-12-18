import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import EditIcon from '@material-ui/icons/Edit';
import './index.scss';

function ProjectItem(props) {
  const {name, id, desc} = props
  return (
    <Grid item sm={3}>
      <Card className="group-item">
        <CardHeader
          avatar={
            <Avatar>
              <FolderIcon />
            </Avatar>
          }
          title={name}
        />
        <CardContent>
          <Typography noWrap variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="编辑">
            <IconButton color="primary">
              <EditIcon fontSize="small"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="复制">
            <IconButton >
              <FileCopyIcon fontSize="small"/>
            </IconButton>
          </Tooltip>
          <Tooltip title="删除">
            <IconButton color="secondary">
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default function ProjectList(props) {

  const [list, setList] = useState([])

  useEffect(() => {
    setList([1, 2, 3, 4].map((v) => {
      return {
        name: `name${v}`,
        id: v,
        desc: `这是描述${v}`
      }
    }))
    return () => {
      setList([])
    }
  }, [])

  return (
    <div className="group-list">
      <Grid container spacing={3} >
        {
          list.map((v) => {
            return (
              <ProjectItem key={v.id} {...v} />
            )
          })
        }
        <Grid item sm={3}>
          <Card className="group-item">
            <Button color="primary" className="add-item">
              <CreateNewFolderIcon className="add-item-icon" />
              添加项目
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}