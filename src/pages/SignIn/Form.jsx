import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'

import axios from "axios"
import * as yup from "yup"
import Typography from '../../component/Typography'
import Icon from '../../component/Icon'
import Input from '../../component/Input'
import Button from '../../component/Button'
import "./style.css"

 class Form extends Component {
    state={email:"",password:"",errors:{},error:""}
    Rechange=(e)=>{
        const{name,value,}=e.target
        this.setState=({[name]:value})
    }

    Rechange=(e)=>{
        const{name,value}=e.target
         this.setState({[name]:value})
     }
    
      goHome=(e)=> {
        this.props.history.push("/home")
     }
    handleSubmit=(e)=>{
         e.preventDefault();
        const{email,password,error}=this.state
        const SignInSchema = yup.object().shape({
            email:yup.string().required().email(),
            password:yup.string().required(),
        })
        SignInSchema.validate({email,password,},{abortEarly:false})
        .then(() => { 
            const errors={};
            this.setState({errors,error:""});
        })
        .catch((err)=>{
           const errors={};
           err.inner.forEach(({message,params}) => {
               errors[params.path]=message;
           });
           this.setState({errors,error:"check the filed above"});
        });
        if(!error){
            axios.post("https://fake-api-ahmed.herokuapp.com/v1/auth/login",
            {email,password,})
            .then((res)=>{
                const user =res.data
                console.log(user)
                this.props.handleLogeIn();  
                this.goHome();             
            })

            .catch((err)=>{
                let error=err.response.data.error
                if (error.includes("duplicate")){
                    error = "email is already exists"
                }
                this.setState({error : error})
                 // this.setState({error }) بنفع هيك برضو 
            });
        }
    }

render() {
    const{email,password,errors,error}=this.state
    return (
        <div className="SignIn-form">
            <Typography title="Join the game!" subTittle="Go inside the best gamers social network!"/>
            <Icon />
            <form action="#" onSubmit={this.handleSubmit}>
                
                <Input value={email} Rechange={this.Rechange}
                label="Your email" placeholder="Enter email address"
                htmlFor="email" type="email" name="email" 
                id="email" error={errors.email}/>

                <Input value={password} Rechange={this.Rechange}
                label="Your password" placeholder="Enter password"
                htmlFor="password" type="password" name="password"
                id="password" error={errors.password}/>

            <Button className="btn1" text="Sign IN" />
            {error&&<div>{error}</div>}            
            <span className="orText">are you new in our site?<Link to="/SignUp">Register</Link> </span>
            </form>
        </div>
            )
        }
}

export default withRouter(Form)
