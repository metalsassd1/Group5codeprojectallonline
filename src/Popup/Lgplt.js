import React, { useState } from 'react';
import Container from "@mui/material/Container";
import {  Grid, Paper, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import Avatar from '@mui/material/Avatar';



//////Suphapburut
function LGPLT() {
   //ดึงAPIมาเพื่อCREATEข้อมูล
 const handleSubmit = event => {
  event.preventDefault();
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id_card": id_card,
  "firstName": firstName,
  "lastName": lastName,
  "address": address,
  "number": number,
  "password": password
});

var requestOptions = {
method: 'POST',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch("http://localhost:3400/Payment", requestOptions)
.then(response => response.json())
.then(result => {
  alert(result['Message'])
  if (result['Status'] === '200') {
    window.location.href = '/';
  }
})
.catch(error => console.log('error', error));
}
const [id_card, setId_Card] = useState('');
  const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [address, setAddress] = useState('');
const [number, setNumber] = useState('');
const [password, setPassword] = useState('');
  return (
    <div >

  
    <Container maxWidth="xs">
    <Paper sx={{marginTop: 6, p: 2}}>
     
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Avatar
        alt="User Avatar"
        src="https://i.ibb.co/vHSjj4f/truemoneywallet-7eleven-promotion-logo-All-Online.webp"
        sx={{ width: 64, height: 64 }}
      />
    </div>
        <Typography component="h1" variant="h5">    <center> <b>
    PAY LATER </b>  </center> 
        </Typography>
     
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12} >
              <TextField
                autoComplete="id_card"
                name="id_card"
                variant="outlined"
                required
                fullWidth
                id="id_card"
                label="ID Card"
                onChange={(e) => setId_Card(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="FirstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="FirstName"
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="LastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="number"
                label="Number"
                onChange={(e) => setNumber(e.target.value)}
                autoFocus
              />
            </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
          >
            APPLY
          </Button>
          <Link href="/">
          <Button 
            fullWidth
            variant="contained"
            color="error"
            
          >
            Back
          </Button>
          </Link>
        </form>
        </Paper>
    </Container>
    </div>
  );
}

export default LGPLT;