import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import * as yup from "yup"
import Typography from '../../component/Typography'
import Icon from '../../component/Icon'
import Input from '../../component/Input'
import Button from '../../component/Button'
import "./style.css"

 class Form extends Component {
    state={email:"",Password:"",errors:{},}
    Rechange=(e)=>{
        const{name,value,}=e.target
        this.setState=({[name]:value})
    }

    Rechange=(e)=>{
        const{name,value}=e.target
         this.setState({[name]:value})
     }
    

    handleSubmit=(e)=>{
         e.preventDefault();
        const{email,Password,}=this.state
        const SignInSchema = yup.object().shape({
            email:yup.string().required().email(),
            Password:yup.string().required(),
        })
        SignInSchema.validate({email,Password,},{abortEarly:false})
        .then(() => { 
            const errors={};
            this.setState({errors});
        })
        .catch((err)=>{
           const errors={};
           err.inner.forEach(({message,params}) => {
               errors[params.path]=message;
           });
           this.setState({errors});
        });

    }

render() {
    const{email,Password,errors}=this.state
    return (
        <div className="SignIn-form">
            <Typography title="Join the game!" subTittle="Go inside the best gamers social network!"/>
            <Icon />
            <form action="#" onSubmit={this.handleSubmit}>
                
                <Input value={email} Rechange={this.Rechange}
                label="Your email" placeholder="Enter email address"
                htmlFor="email" type="email" name="email" 
                id="email" error={errors.email}/>

                <Input value={Password} Rechange={this.Rechange}
                label="Your password" placeholder="Enter Password"
                htmlFor="Password" type="Password" name="Password"
                id="Password" error={errors.Password}/>

            <Button  className="btn1" text="Sign IN" />
            <span className="orText">are you new in our site?<Link to="/SignUp">Register</Link> </span>
            </form>
        </div>
            )
        }
}

export default Form
