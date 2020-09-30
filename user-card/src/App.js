import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    console.log("We call constructor")
    super();
    this.state = {
      user:[],
      followers:[]
    };
  }

  componentDidMount(){ //good place to instantiate the network request.
    fetch("https://api.github.com/users/zescanor")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          user: data
        });
        console.log("Component Mounted")
        console.log("the data", this.state.user)
     })
     .catch((err)=> {
       console.log("not Working")
     })
     fetch("https://api.github.com/users/willwearing/followers")
     .then((res) => res.json())
      .then((data) => {
        this.setState({
          followers: data
        });
        console.log("Component Mounted Follow")
        console.log("the data", this.state.followers)
     })
      
   
    
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState !== this.state) {
      console.log("state Change")
      console.log("Old",prevState)
      console.log("New", this.state)
    }
    if(prevProps!== this.props){
      console.log("Prop change")
    }
  }
  render(){

  
  return (
    <div className="App">
      <div className="card">
        <img src={this.state.user.avatar_url} alt="url avatar"/>
        <div className="card-info">
          <h3 className="name">{this.state.user.name}</h3>
          <p>{this.state.user.login}</p>
          <p> Profile: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></p>
          <p>{this.state.user.location}</p>
          <p>{this.state.user.followers}</p>
          <p>{this.state.user.following}</p>
          <p>Bio: {this.state.user.bio}</p>
          Followers:
          {this.state.followers.map((it)=> (
          <div className="card-info">
           <div className="followers"> {it.login}</div>
           <img src={it.avatar_url} alt="url avatar"/>
          <h3>{it.name}</h3>
          <p>{it.login}</p>
      </div>
  ))}
        </div>
      </div>
      <div>
 
    </div>
    </div>
  );
  }
}

export default App;
