import React from 'react';
import FormItem from './formItem.jsx';

export default function Form(props) {
  const {
    formList = []
  } = props

  return (
    <div className="form">
      {
        formList.map((v) => {
          return (
            <FormItem key={v.itemKey} {...v} />
          )
        })
      }
    </div>
  )
}