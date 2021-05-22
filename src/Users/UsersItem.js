import React from 'react'
import PropTypes from 'prop-types'
import {Link } from 'react-router-dom';


 const  UsersItem  = (props) =>  {

 /*   constructor(){ // while we using constructor we should also use the super() method we use them in the class base componenet 

        super();
        this.state={
    
          id:'id',
          login:'octocat',
          avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
          html_url:'https://github.com/octocat'
    
        }
    
      }
      */
    

        const {login,avatar_url,html_url} = props.user; // we use "this" word key when we have class base component

        return (
            <div className='card text-center'>

                <img src={avatar_url}
                alt="" className='round-img'
                style={{width:'60px', height:'60px'}} ></img>

                <h3>{login}</h3>
                <div>
                    
                    <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>

                </div>                
            </div>
        )
    
}

UsersItem.prototype = {

    user:PropTypes.object.isRequired,

}

export default UsersItem
