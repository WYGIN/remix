import ChipInput from 'material-ui-chip-input'; 
 import { useState } from "react"; 
  
 class TaxonomyInput extends React.Component { 
   constructor (props) { 
     super(props) 
     this.state = { 
       chips: [] 
     } 
   } 
    
   getTax () { 
     return this.state.chips; 
   } 
    
   handleAdd (chip) { 
     this.setState({ 
       chips: [...this.state.chips, chip] 
     }) 
   } 
    
   handleDelete (deletedChip) { 
     this.setState({ 
         chips: this.state.chips.filter((c) => c !== deletedChip) 
     }) 
   } 
  
   render () { 
     return( 
       <ChipInput 
         {...this.props} 
         value={this.state.chips} 
         fullWidth 
         placeholder="Choose Category" 
         variant="outlined" 
         onAdd={(chip) => this.handleAdd(chip)} 
         onDelete={(deletedChip) => this.handleDelete(deletedChip)} 
       /> 
     ); 
   } 
 } 
  
 export default TaxonomyInput;
