import React, { useEffect, useState, useCallback } from 'react';
import { project } from '../../api/index.js';

export default function Project(props) {

  const {
    match
  } = props

  const getDetail = useCallback(
    () => {
      project.getDetail({
        projectId: match.params.id,
      }).then(res => {

      }).catch(err => {

      })
    },
    [],
  )

  useEffect(() => {
    getDetail()
    return () => {

    }
  }, [])

  return (
    <div className="project-detail">
      <div className="">

      </div>
    </div>
  )
}