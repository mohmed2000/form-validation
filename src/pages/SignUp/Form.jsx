import React, { Component } from 'react'
import * as yup from 'yup'
import {withRouter} from 'react-router-dom'

import Typography from '../../component/Typography'
import Input from '../../component/Input'
import CheckBox from '../../component/CheckBox'
import Button from '../../component/Button'
import google from '../../img/google.png';
import axios from 'axios'
 class Form extends Component {
    state={email:"",password:"",repassword:"",
    errors:{email:"",password:"",repassword:""},
    error:"" }
    
    Rechange=(e)=>{
        const{name,value,}=e.target
        this.setState=({[name]:value})
    }

    Rechange=(e)=>{
        const{name,value}=e.target
         this.setState({[name]:value})
     }
    
     goSigIn=(e)=> {
        this.props.history.push("/")
     }

    handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password,repassword,error}=this.state
        const SignUpSchema =yup.object().shape({
           email:yup.string().required("enter email").email(),
           password:yup.string().required("enter password"),
           repassword:yup.string().required("match password"),
        })
        SignUpSchema.validate({email,password,repassword},{abortEarly:false})
        .then(()=>{
            const errors={};
            this.setState({errors,error:""});

                  })
                  .catch((err)=>{
                   const errors={};
                   err.inner.forEach(({message,params}) => {
                       errors[params.path]=message;
                   });
                   this.setState({errors,error:"Sorry! there an error"});
                });

                if(!error){
                    axios.post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup",{email,password,repassword})
                    .then((res)=>{
                       const user=res.data
                        console.log(user)
                        this.goSigIn();             

                    })
                    .catch((err)=>{
                       const error = err.response.data.error
                        this.setState({error})
                    })
                }
    }
render() {
    const{email,password,repassword,errors,error}=this.state
    return (
        <div className="form">
            <Typography title="Register Individual Account!" subTittle="For the purpose of gamers regulation, your details are required."/>
            <form action="#" onSubmit={this.handleSubmit}>

                <Input value={email} Rechange={this.Rechange} 
                label="Email address*" placeholder="Enter email address"
                htmlFor="email" type="email" name="email" 
                id="email" error={errors.email}/>

                <Input value={password} Rechange={this.Rechange} 
                label="Create password*" placeholder="Enter password" 
                htmlFor="password" type="password" name="password" 
                id="password" error={errors.password}/>

                <Input value={repassword} Rechange={this.Rechange} 
                label="Repeat password*" placeholder="Repeat password" 
                htmlFor="repassword" type="password" name="repassword" 
                id="repassword" error={errors.repassword}/>

                <CheckBox text="I agree to terms & conditions"/>

                <Button className="btn1" text="Register Account" to="/"/>
                {error && <div>{error}</div>}
                <span className="orText"> or </span>

                <Button className="btn2" img={<img className="googleBtn" src={google} alt="google"/>} text="Register with Google"/>
            </form>
        </div>
            )
        }
}

export default withRouter(Form)
