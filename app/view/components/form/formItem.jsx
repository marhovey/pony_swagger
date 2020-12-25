import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import { formItemType } from './CONST';

export default function FormItem(props) {
  const {
    label,
    errorMsg,
    required,
    ...restProps
  } = props

  return (
    <div className="form-item">
      <FormControl
        required={required}
        size="small"
        fullWidth
        variant="outlined">
        <InputLabel htmlFor={restProps.itemKey}>{label}</InputLabel>
        {renderIptItem(restProps)}
        <FormHelperText id={`${restProps.itemKey}-text`}>{errorMsg}</FormHelperText>
      </FormControl>
    </div>
  )
}

const renderIptItem = (props) => {

  const {
    type = formItemType.DEFAULT,
    itemKey,
    labelWidth = 60,
    startAdornment,
  } = props

  const commonInfo = {
    id: itemKey,
    labelWidth,
    value,
    startAdornment,
    onChange: (e) => setValue(e.target.value)
  }

  const [value, setValue] = useState('')

  switch(type) {
    case formItemType.DEFAULT:
      return (
        <OutlinedInput
          {...commonInfo}
        />
      )
    case formItemType.PASSWORD:
      return (
        <OutlinedInput
          type="password"
          {...commonInfo}
        />
      )
  }
}