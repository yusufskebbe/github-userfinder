
import React, { Component } from 'react'

import PropTypes from 'prop-types'



 class Search extends Component {

    state={

        text:''
        
    }

    static propTypes = {

        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
       // setAlert:PropTypes.func.isRequired,

    }
   
    onChanged = (e) =>{

        this.setState({text:e.target.value})

    }

    onSubmit = (e) =>{

        e.preventDefault();
        if(this.state.text === ''){

            this.props.setAlert('Please enter something','light');

        }else{

            this.props.searchUsers(this.state.text);
            this.setState({test:''});
        }

        

    }


    render() {
        return (
            <div>

                <form onSubmit={this.onSubmit} className="form">

                     <input type='text' name='text' placeholder='Search Users' value={this.state.text} onChange={this.onChanged} ></input>

                     <input type='submit'  value='search' className='btn btn-dark btn-block'></input>
                    
                </form>

                {this.props.showClear &&(



                        <button className='btn btn-light btn-block' onClick={this.props.clearUsers} >Clear</button> 

                )}
                

                
            </div>
        )
    }
}

export default Search
