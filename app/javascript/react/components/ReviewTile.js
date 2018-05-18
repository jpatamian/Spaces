import React from 'react'

const ReviewTile = (props) => {
  let email = props.userEmail.split("@")[0]
  let date = Date(props.createdAt)

  return(
    <table className = "review-container">
      <tbody>
        <tr>
        <td width="200">{props.body}</td>
        <td width="100">{email}</td>
        </tr>
    </tbody>
  </table>
  )
}

export default ReviewTile
