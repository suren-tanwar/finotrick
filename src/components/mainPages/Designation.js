import React, { Component } from 'react'
import logo2 from "../asset/images/filter.png";
import logo3 from "../asset/images/plus.png";
import logo4 from "../asset/images/view.png";
import logo5 from "../asset/images/edit.png";
import logo6 from "../asset/images/delete.png";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
export class Designation extends Component {
    constructor(props){
        super(props)
        this.state = {
          lead:"",
          open:false
        }
    }
    openModal = () =>{
      this.setState({
         open:true

      })
  }
  render() {
    return (
        <div>
        <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",marginTop:15}}>
        <div style={{marginRight:10,borderRadius:15,boxShadow:  "1px 1px 4px 1px  grey",border: "1px solid #fff",width:25,height:25}}>
        <img src={logo51} />
        </div>
         <div style={{marginRight:30}}>
        <Chip
        avatar={<Avatar alt="Natacha" src={logo53} />}
        label="Leselie A.."
        variant="outlined"
        style={{ boxShadow:  "1px 1px 4px 1px  grey",border: "1px solid #fff"}}
      />
      </div>
      </div>
        <div style={{display:"flex",justifyContent:"space-between",marginRight:"5%",marginLeft:"3%",marginTop:25}}>
        <span style={{fontSize:20,fontWeight:700,display:"flex",justifyContent:"flex-start",marginLeft:25}}>Manage Designation</span>
    <button onClick={()=>this.openModal()} style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 250, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly",marginLeft:120}}>
        <img src={ logo3} />
         <span style={{color:"white"}}> Add Designation</span>
         </button>
     </div>
        
  <div style={{width:"85%",paddingLeft:50,marginTop:5}}>
   
      
  
  <table  style={{width:"40%"}}>
  <tr>
  <th style={{fontsize:15,fontWeight:"normal"}}>Type</th>
  <th style={{fontsize:15,fontWeight:"normal"}}></th>

  </tr>
  <tr>
  <td style={{fontsize:15,fontWeight:600}}> Manager</td>


 <td><img src={logo5} />  <img src={logo6} /></td>
  </tr>
  <tr>
  <td style={{fontsize:15,fontWeight:600}}> Sr Manager</td>


 <td><img src={logo5} />  <img src={logo6} /></td>
  </tr>
  <tr>
  <td style={{fontsize:15,fontWeight:600}}> Account Manager</td>


 <td><img src={logo5} />  <img src={logo6} /></td>
  </tr>
  <tr>
  <td style={{fontsize:15,fontWeight:600}}> Manager</td>


 <td><img src={logo5} />  <img src={logo6} /></td>
  </tr>
  </table>
  </div>
  
  
  
  
  {/* MODAL START FROM HERE */}
  <Modal open={this.state.open} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",display:"flex" ,justifyContent:"center"}} >
  <Paper style={{width:"40%" ,height:"55%",marginTop:"8%",borderRadius:20,outline:"none"}}>
  <h1 style={{fontSize:25,fontWeight:740,paddingLeft:30,marginTop:35}}>Add New Designation </h1>
  
  <select placeholder="select department" style={{marginLeft:35,width:475,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} >
  <option>select department</option>
 
  </select>
  

  <div style={{display:"flex",marginLeft:35,marginTop:10}}>
  <input type="text"  placeholder="Designation Name" style={{width:470,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} />
  </div>
 
  <select placeholder="Report to" style={{marginLeft:35,marginTop:10,width:475,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} >
 <option>Report to</option>
 
  </select>
  
    
  
  
  <div style={{marginTop:15,display:"flex",justifyContent:"flex-end",marginRight:"5%"}}>
  <button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 140, height: 50}}>
    <span style={{color:"pink",fontSize:15}}> Clear</span>
    </button>
  <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 180, height: 50,}}>
    <span style={{color:"white",fontSize:15}}> Add</span>
    </button>
  
  </div>
  
  </Paper>
  
  
  </Modal>
        </div>
    )
  }
}

export default Designation