import React, { Component } from 'react'
import * as yup from 'yup'
import Typography from '../../component/Typography'
import Input from '../../component/Input'
import CheckBox from '../../component/CheckBox'
import Button from '../../component/Button'
import google from '../../img/google.png';
 class Form extends Component {
    state={email:"",Password:"",RePassword:"",errors:{email:"",Password:"",RePassword:""}}
    
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
        const{email,Password,RePassword}=this.state
        const SignUpSchema =yup.object().shape({
           email:yup.string().required().email(),
           Password:yup.string().required(),
           RePassword:yup.string().required(),
        })
        SignUpSchema.validate({email,Password,RePassword},{abortEarly:false})
        .then(()=>{
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
    const{email,Password,RePassword,errors}=this.state
    return (
        <div className="form">
            <Typography title="Register Individual Account!" subTittle="For the purpose of gamers regulation, your details are required."/>
            <form action="#" onSubmit={this.handleSubmit}>

                <Input value={email} Rechange={this.Rechange} 
                label="Email address*" placeholder="Enter email address"
                htmlFor="email" type="email" name="email" 
                id="email" error={errors.email}/>

                <Input value={Password} Rechange={this.Rechange} 
                label="Create password*" placeholder="Enter Password" 
                htmlFor="Password" type="Password" name="Password" 
                id="Password" error={errors.Password}/>

                <Input value={RePassword} Rechange={this.Rechange} 
                label="Repeat password*" placeholder="Repeat Password" 
                htmlFor="RePassword" type="Password" name="RePassword" 
                id="RePassword" error={errors.RePassword}/>

                <CheckBox text="I agree to terms & conditions"/>

                <Button className="btn1" text="Register Account" to="/"/>
                <span className="orText"> or </span>

                <Button className="btn2" img={<img className="googleBtn" src={google} alt="google"/>} text="Register with Google"/>
            </form>
        </div>
            )
        }
}

export default Form
