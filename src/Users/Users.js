import React from 'react'
import UsersItem from './UsersItem'
import Spinner from '../components/Layout/Spinner'
import PropTypes from 'prop-types'


const Users = (props) => {

        if (props.loading) {

            return <Spinner></Spinner>
            
        } else {
        
            return(
            <div style={userStyle}>

                    {props.users.map(user =>(

                        <UsersItem key={user.id} user={user}> 

                        </UsersItem>
                
                    ))}
            </div>
            )
    }
}

Users.prototype ={

    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,


}

const userStyle = {

    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)', // even columns
    gridGap:'1rem'


}

export default Users
