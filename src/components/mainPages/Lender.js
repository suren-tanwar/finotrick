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
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));


export class Lender extends Component {
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
        <span style={{fontSize:20,fontWeight:700,display:"flex",justifyContent:"flex-start",marginLeft:25}}>Manage Lender</span>
    <button onClick={()=>this.openModal()} style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 250, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly",marginLeft:120}}>
        <img src={ logo3} />
         <span style={{color:"white"}}> Add Lender</span>
         </button>
     </div>
        
  <div style={{width:"85%",paddingLeft:50,marginTop:15}}>
   
      
  
  <table  style={{width:"85%"}}>
  <tr>
  <th style={{fontsize:15,fontWeight:"normal"}}>Bank Name</th>
  <th style={{fontsize:15,fontWeight:"normal"}}>Hub</th>
  <th style={{fontsize:15,fontWeight:"normal"}}>Product</th>
  <th style={{fontsize:15,fontWeight:"normal"}}>Status</th>
  <th style={{fontsize:15,fontWeight:"normal"}}>Action</th>
  </tr>
  <tr>
  <td style={{fontWeight:600}}> ICICI</td>
  <td style={{fontWeight:600}}> Boriwali east</td>
  <td style={{fontWeight:600}}> Product loan</td>
  <td> <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
          <td> <img src={logo4}/> <img src={logo5} />  <img src={logo6} /></td>
  </tr>
  <tr>
  <td style={{fontWeight:600}}> ICICI</td>
  <td style={{fontWeight:600}}> Boriwali east</td>
  <td style={{fontWeight:600}}> Product loan</td>
  <td> <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
          <td> <img src={logo4}/> <img src={logo5} />  <img src={logo6} /></td>
  </tr>
  <tr>
  <td style={{fontWeight:600}}> ICICI</td>
  <td style={{fontWeight:600}}> Boriwali east</td>
  <td style={{fontWeight:600}}> Product loan</td>
  <td> <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
          <td> <img src={logo4}/> <img src={logo5} />  <img src={logo6} /></td>
  </tr>
  <tr>
  <td style={{fontWeight:600}}> ICICI</td>
  <td style={{fontWeight:600}}> Boriwali east</td>
  <td style={{fontWeight:600}}> Product loan</td>
  <td> <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
          <td> <img src={logo4}/> <img src={logo5} />  <img src={logo6} /></td>
  </tr>
  </table>
  </div>
  
  
  
  
  {/* MODAL START FROM HERE */}
  <Modal open={this.state.open} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",display:"flex" ,justifyContent:"center"}} >
  <Paper style={{width:"40%" ,height:"55%",marginTop:"8%",borderRadius:20,outline:"none"}}>
  <h1 style={{fontSize:25,fontWeight:740,paddingLeft:30,marginTop:35}}>Add New Lender </h1>
  
  <div style={{display:"flex",marginLeft:35,marginTop:10}}>
  <input type="text"  placeholder="Bank Name" style={{width:480,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} />
  </div>
  <div style={{display:"flex",marginLeft:35,marginTop:10}}>
  <input type="text"  placeholder="Hub" style={{width:480,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} />
  </div>
  <div style={{display:"flex",marginLeft:35,marginTop:10}}>
  <input type="text"  placeholder="Product" style={{width:480,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} />
  </div>
  
  
    
  
  
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

export default Lender