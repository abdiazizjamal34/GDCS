import React from 'react'

const GroupMember = () => {
    const list = ["Abdiaziz Jemal", "Abdulaziz Mohamed", "Mohammed Ali", "Mohammed Ibrahim", "Mohammed  Jama", "Mohammed mehad"]
  return (
    <div>
        <h1>Group Members</h1>
        <ul>
            {list.map((name, index) => (
            <li key={index}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default GroupMember