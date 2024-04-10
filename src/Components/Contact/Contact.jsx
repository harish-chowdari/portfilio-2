import React, { useState } from "react";
import Design from "./Contact.module.css";
import { TextField, Button } from "@mui/material";
import { blue } from '@mui/material/colors';

function Contact() {
  const textColor = blue[500];
  
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

 

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError("Name is required");
      return;
    }
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!message.trim()) {
      setMessageError("Message is required");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "029a270c-7680-4803-9da2-522dc7fee3df");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className={Design.main}>
     <h1>Contact Form</h1>
    <div className={Design.container}>
   
    <form id="contact" className={Design.contact} onSubmit={onSubmit}>
      
      <div className={Design.TextFields}>
      <TextField
        className={Design.NameField}
        type="text"
        name="name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
        InputProps={{
          style: {
            color: "white" // Change text color
          },
          placeholderTextColor: textColor // Change placeholder color
        }}
        InputLabelProps={{
          style: {
            color: textColor // Change label color
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: textColor // Change border color
            },
            '&:hover fieldset': {
              borderColor: textColor // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: textColor // Change border color when focused
            }
          }
        }}
        error={!!nameError}
        helperText={nameError}
      />

      <TextField
        className={Design.emailField}
        type="email" 
        name="email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
        InputProps={{
          style: {
            color: "white" // Change text color
          },
          placeholderTextColor: textColor // Change placeholder color
        }}
        InputLabelProps={{
          style: {
            color: textColor // Change label color
          }
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: textColor // Change border color
            },
            '&:hover fieldset': {
              borderColor: textColor // Change border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: textColor // Change border color when focused
            }
          }
        }}
        error={!!emailError}
              helperText={emailError}
      />

</div>

      <div className={Design.textAreaWrapper}>
        <textarea
          className={Design.textAreaField}
          name="message"
          placeholder="Message"
          id="outlined-basic"
        label="Email"
        variant="outlined"
        value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError("");
              }}
          style={{
            color: "white", // Change text color
            borderColor: textColor, // Change border color
            borderRadius: "4px", // Add border radius
            padding: "10px", // Add padding
            background: "transparent", // Set background to transparent
            width: "100%", // Set width to 100%
            resize: "vertical" // Allow vertical resizing only
          }}
          error={!!messageError}
              helperText={messageError}
          
        />
      </div>
      {messageError && <p className={Design.errorMessage}>{messageError}</p>}


      <Button className={Design.button} 
          type="submit" 
          variant="contained" 
          sx={{ backgroundColor: textColor }}>
        Submit Form
      </Button>

    </form>

    </div>

    </div>
  );
}

export default Contact;
