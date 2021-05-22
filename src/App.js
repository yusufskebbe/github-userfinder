import React,{Fragment,Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Layout/Navbar';
import Users from './Users/Users';

import Search from './Users/Search';
import axios from 'axios'
import Alert from './components/Layout/Alert'
import About from './components/Pages/About'
import User from './Users/User';

class  App extends Component {


  state={

    users:[],
    user:{},
    repos:[],
    loading:false,
    alert:null,
   

  };

  componentDidMount(){
/*
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
    

    this.setState({loading:true})
   
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res =>{
    
      this.setState({users:res.data,loading:false})
     
    })
*/
  }
  

  // Search GitHub User

  searchUsers = async(text) =>{

    this.setState({loading:true})

    axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res =>{
    
      this.setState({users:res.data.items,loading:false})
     
    })


  }

  //Get personal user info 

  getUser = async(username) =>{

    this.setState({loading:true})

    axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res =>{
    
      this.setState({user:res.data,loading:false})
     
    })


  }

  // Get user Repos

  getUserRepos = async(username) =>{

    this.setState({loading:true})

    axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`).then(res =>{
    
      this.setState({repos:res.data,loading:false})
     
    })


  }


  // Clear users from State

  clearUsers = () =>{

    this.setState({users:[],loading:false})

  }


  // Set alert 

  setAlert = (msg,type) => {

    this.setState({alert:{msg,type}});

    setTimeout(() =>{

      this.setState({alert:null});

    },3000)

  }
  
  render(){

    return ( 
      <Router> 
      <div className="App">

       
         <Navbar title="Github Finder" icon='fab fa-github'></Navbar>

         <div className='container'>
          <Alert alert={this.state.alert}></Alert>

        <Switch>

        <Route exact path='/' render={props =>(

          <Fragment>


          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0 ? true : false} setAlert={this.setAlert} >  </Search>
         <Users loading={this.state.loading} users={this.state.users}></Users>



          </Fragment>

        )}>

        </Route>



        <Route exact path='/about' component={About}></Route>

        <Route exact path='/user/:login' render={props =>(

          <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={this.state.repos} user={this.state.user} loading={this.state.loading} ></User>

        )} ></Route>

        </Switch>

        
         </div>
          
      
      </div>
      </Router>
    );

  }

  
}

export default App;
