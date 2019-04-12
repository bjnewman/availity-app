import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


// fields are username, NPI, address, phone number, email
class RegisterForm extends Component {
  constructor(props) {
	super(props);
	this.state = {
		fields: {username: '', NPI: '', email: '', phoneNumber: '', address: ''},
		errors: {username: '', NPI: '', email: '', phoneNumber: '', address: ''}
	}

	this.handleChange = this.handleChange.bind(this);
	this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
  }

  handleChange(e) {
	  let fields = this.state.fields;
	  fields[e.target.name] = e.target.value;
	  this.setState({
	    fields
	  });
  }

  submitRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields.username = "";
          fields.NPI = ""
          fields.email = "";
          fields.phoneNumber = "";
          fields.address = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

  }
  
  validateForm() {
  	let {fields} = this.state;
  	let errors = {};
    let formIsValid = true

    // name validation 
    if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "Please enter your full name.";
    }
    
    if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "Please enter alphabetic characters only.";
        }
    }
    
    // email validation 
    if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Please enter your email";
    }

    if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "Please enter a valid email address.";
        }
      }
    
    // phone validation 10 digits ignore all else
    if (!fields["phoneNumber"]) {
        formIsValid = false;
        errors["phoneNumber"] = "Please enter your phone number";
    }

    if (typeof fields["phoneNumber"] !== "undefined") {
        if (! (fields["phoneNumber"].match(/\d/g) && fields["phoneNumber"].match(/\d/g).length === 10)) {
          formIsValid = false;
          errors["phoneNumber"] = "Please enter a valid 10 digit phone number.";
        }
    }

    // NPI validation uses the luhn algorithm for a 10 digit number with the final digit as a check digit, see https://www.cms.gov/Regulations-and-Guidance/Administrative-Simplification/NationalProvIdentStand/Downloads/NPIcheckdigit.pdf
    // for this naive implementation we can just check for 10 digits
    if (!fields["NPI"]) {
    	formIsValid = false
    	errors["NPI"] = "Please enter your NPI number"
    }
    
    if (typeof fields["NPI"] !== "undefined") {
        if (!(fields["NPI"].match(/\d/g) && fields["NPI"].match(/\d/g).length === 10)) {
          formIsValid = false;
          errors["NPI"] = "Please enter a valid NPI number.";
        }
    }

    // street address validation is complex and in production use cases should use a specialized library, here we can just check for invalid characters
    if (!fields["address"]) {
    	formIsValid = false
    	errors["NPI"] = "Please enter your business address";
    }

    this.setState({
        errors: errors
      });
    return formIsValid;


  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Availity Registration"
           />
	          <form method="post"  name="userRegistrationForm"  onSubmit={this.submitRegistrationForm}>
		           <TextField
		             placeholder="Enter your First and Last Name"
		             label="Full Name"
		             onChange ={this.handleChange}
		             name='username'
		             value={this.state.fields.username}
		             />
		           <div className="errorMsg">{this.state.errors.username}</div>
		           <br/>
		           <TextField
		             placeholder="Enter your NPI Number"
		             label="NPI Number"
		             onChange ={this.handleChange}
		             name='NPI'
		             value={this.state.fields.NPI}
		             />
		           <div className="errorMsg">{this.state.errors.NPI}</div>
		           <br/>
		           <TextField
		             placeholder="Enter your Business Address"
		             label="Business Address"
		             name='address'
		             onChange ={this.handleChange}
		             value={this.state.fields.address}
		             />
		           <div className="errorMsg">{this.state.errors.address}</div>
		           <br/>
		           <TextField
		             type = "tel"
		             placeholder="Enter your Phone Number"
		             label="Phone Number"
		             name='phoneNumber'
		             onChange ={this.handleChange}
		             value={this.state.fields.phoneNumber}
		             />
		           <div className="errorMsg">{this.state.errors.phoneNumber}</div>
		           <br/>
		           <TextField
		             type = "email"
		             placeholder="Enter your email address"
		             label="Email address"
		             name='email'
		             onChange ={this.handleChange}
		             value={this.state.fields.email}
		             />
		           <div className="errorMsg">{this.state.errors.email}</div>
		           <RaisedButton label="Register" primary={true} style={style} onClick={this.submitRegistrationForm}/>
		         </form>
	         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};


export default RegisterForm;