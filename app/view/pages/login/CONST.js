import { formItemType } from "../../components/form/CONST";

export const formList = [
  {
    label: '用户名',
    itemKey: 'username',
    required: true
  },
  {
    label: '密码',
    itemKey: 'password',
    required: true,
    type: formItemType.PASSWORD
  }
]