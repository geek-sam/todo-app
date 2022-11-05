import React from 'react'

function TaskGroup(props) {
    const {listItem, onClick} = props
  return (
    <li onClick={onClick}>{listItem}</li>
  )
}

export default TaskGroup;