import React from 'react'
import classes from './admin.module.css'

const Admin = ({email}) => {
  return (
    <div className={classes.page}>
        <p>Welcome Admin {email}</p>
    </div>
  )
}

export default Admin