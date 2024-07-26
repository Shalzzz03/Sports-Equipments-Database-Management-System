import React from 'react'

function UserData({tableData}) {
  return (
    <>{
        tableData.map((currUser)=>{
            const {regi_no} = currUser;
            return(
                <tr>
                    <td>{regi_no}</td>
                </tr>
            )
        })
    }
    
    </>
  )
}

export default UserData
