import React, { Component } from 'react';
import "./style.css";
import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import config from '../../ENVIRONMENT/FirebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import uiConfig from "../../ENVIRONMENT/uiConfig";
app.initializeApp(config);

class LogIn extends Component{
// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');
// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });
// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
state = {signedIn : false}
componentDidMount = () =>{
  firebase.auth().onAuthStateChanged(user =>{
	this.setState({signedIn : ! ! user})
  })
}
render() {

return(
	<div>
	{this.state.signedIn  ? 
        (<a onClick={() => firebase.auth().signOut()}>Sign-out</a>) : 
        (<StyledFirebaseAuth  
          uiConfig = {uiConfig}
          firebaseAuth = {firebase.auth()}
          />)}

	<h2>Meal Suggestion</h2>
	<div className="body">
		<div class="container" id="container">
			<div class="form-container sign-up-container">
				<form action="#">
					<h1>Create Account</h1>
					<div class="social-container">
						<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
						<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
						<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
					</div>
					<span>or use your email for registration</span>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Sign Up</button>
				</form>
			</div>
			<div class="form-container sign-in-container">
				<form action="#">
					<h1>Sign in</h1>
					<div class="social-container">
						<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
						<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
						<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
					</div>
					<span>or use your account</span>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<a href="#">Forgot your password?</a>
					<button>Sign In</button>
				</form>
			</div>
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-left">
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						<button class="ghost" id="signIn">Sign In</button>
					</div>
					<div class="overlay-panel overlay-right">
						<h1>Hello, Friend!</h1>
						<p>Enter your personal details and start journey with us</p>
						<button class="ghost" id="signUp">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
		</div>
		</div>
		)
}
}


export default LogIn;