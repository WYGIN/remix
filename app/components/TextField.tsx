import TextField from '@mui/material/TextField'; 
 import React, { useRef, Component } from 'react'; 
  
 export default function TextField(props) { 
   const valueRef = useRef(''); 
   const getValue = () => { 
     return valueRef.current.value; 
   } 
   return( 
     <TextField {...props} variant="outlined" /> 
   ); 
 }
