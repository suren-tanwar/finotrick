import React, { Component } from "react";
import "./SideDrawer.css"
// import logo111 from "../asset/images/search.png";
// import logo2 from "../asset/images/filter.png";
// import logo3 from "../asset/images/plus.png";
// import logo4 from "../asset/images/view.png";
// import logo5 from "../asset/images/edit.png";
// import logo6 from "../asset/images/delete.png";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo121 from "../asset/images/schedule.png";
import logo81 from "../asset/images/upload.png";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import logo1 from "../asset/images/logo1.png";
import logo3 from "../asset/images/logo3.png";
import logo4 from "../asset/images/sidebar/Home.png";
import logo5 from "../asset/images/sidebar/lead.png";
import logo6 from "../asset/images/sidebar/connector.png";
import logo7 from "../asset/images/sidebar/employees.png";
import logo8 from "../asset/images/sidebar/roles.png";
import logo9 from "../asset/images/sidebar/permission.png";
import logo10 from "../asset/images/sidebar/hieracy.png";
import logo11 from "../asset/images/sidebar/agent.png";
import logo12 from "../asset/images/sidebar/loan.png";
import logo13 from "../asset/images/sidebar/Home.png";
import logo14 from "../asset/images/sidebar/Banner.png";
import logo15 from "../asset/images/sidebar/Document.png";
import logo16 from "../asset/images/sidebar/Bell.png";
import logo17 from "../asset/images/sidebar/appcontent.png";
import logo18 from "../asset/images/sidebar/branches.png";
import logo19 from "../asset/images/sidebar/department.png";
import logo20 from "../asset/images/sidebar/designation.png";
import logo21 from "../asset/images/sidebar/Location.png";
import logo22 from "../asset/images/sidebar/Union.png";

// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export class Notification extends Component {
    constructor(props){
        super(props)
        this.state = {
         
        }
    }
    render() {
    return (
      <div style={{display:"flex",flexDirection:"row"}}>

      <div className="side-drawer">
    <div style={{marginTop:"9%",width:"100%",display:"flex",flexDirection:"row"}}>
      <img style={{ width:"40%",}} src={logo1} alt="" />
      <img style={{  }} src={logo3} alt="" />
     </div>
 
     <div style={{display:"flex",flexDirection:"column" ,marginTop:"6%",}}>
     {this.state.drawer === 1 ?
         <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
         <img src={logo4}/>
         <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Dashboard</span>
         </div>
         :
         <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor1()}>
         <img src={logo4}/>
         <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Dashboard</span>
         </div>
         }
        
        {this.state.drawer === 2 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo5}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lead</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor2()}>
        <img src={logo5}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lead</span>
        </div>
        
          }
        
        {this.state.drawer === 3 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo6}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Connections</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor3()}>
        <img src={logo6}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Connections</span>
        </div>
        
          }
        
        {this.state.drawer === 4 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo7}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Employee</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor4()}>
        <img src={logo7}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Employee</span>
        </div>
        
          }
          {this.state.drawer === 5 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo8}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Roles</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor5()}>
        <img src={logo8}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Roles</span>
        </div>
        
          }
          {this.state.drawer === 6 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo9}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Permissions</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor6()}>
        <img src={logo9}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Permissions</span>
        </div>
        
          }
          {this.state.drawer === 7 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo10}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Hierarcy</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor7()}>
        <img src={logo10}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Hierarcy</span>
        </div>
        
          }
          {this.state.drawer === 8 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo11}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Agent</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor8()}>
        <img src={logo11}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Agent</span>
        </div>
        
          }
          {this.state.drawer === 9 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo12}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Loan Product</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor9()}>
        <img src={logo12}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Loan Product</span>
        </div>
        
          }
          {this.state.drawer === 10 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo13}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lenders</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor10()}>
        <img src={logo13}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Lenders</span>
        </div>
        
          }
          {this.state.drawer === 11 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo14}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Banners</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor11()}>
        <img src={logo14}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Banners</span>
        </div>
        
          }
          {this.state.drawer === 12 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo15}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Report</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor12()}>
        <img src={logo15}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Report</span>
        </div>
        
        
          }
          <a href="/noti"  style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer",backgroundColor:"#191E39"}}>
          <img src={logo16}/>
          <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Notification</span>
          </a>
          {this.state.drawer === 14 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo17}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>App Content</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor14()}>
        <img src={logo17}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>App Content</span>
        </div>
        
          }
          {this.state.drawer === 15 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo18}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Branches</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor15()}>
        <img src={logo18}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Branches</span>
        </div>
        
          }
          {this.state.drawer === 16 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo19}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Department</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor16()}>
        <img src={logo19}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Department</span>
        </div>
        
          }
          {this.state.drawer === 17 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo20}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Designation</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor17()}>
        <img src={logo20}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Designation</span>
        </div>
        
          }
          {this.state.drawer === 18 ?
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",backgroundColor:"#191E39",opacity:1,borderRadius:"50px 0px 0px 50px",cursor:"pointer"}} >
        <img src={logo21}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Location</span>
        </div>
        :
            <div style={{padding:10,display:"flex",alignItems:"center",marginLeft:"5%",cursor:"pointer"}} onClick={()=>this.changeColor18()}>
        <img src={logo21}/>
        <span style={{color:"white",fontSize:15,marginLeft:"4%",fontWeight:600}}>Location</span>
        </div>
        
          }
 </div>
 
  </div>
      <div style={{width:"83%"}}>
      
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
      <div style={{marginTop:25}}>
      <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:35}}>Send Notification</span>
      </div>
<div style={{display:"flex",marginTop:30,alignItems:"center"}}>
    <button  style={{ border:"1px dashed blue",borderRadius:10,backgroundColor:"rgba(39, 56, 150, 0.13)",width: 230, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly",marginLeft:35}}>
 <img src={ logo81} />
  <span style={{color:"blue" ,fontStyle:"italic",fontSize:12}}> Upload banner</span>
  </button>
  <Box style={{marginTop:5,marginLeft:35}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">All Users</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{ width:260,height:55,outline:"none",borderRadius:5}} 
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>

    <div style={{position:"relative"}}>
<input type="text"  placeholder="Schedule" style={{width:260,height:45,outline:"none",borderRadius:5,marginLeft:35,border:"1px solid gray"}} />
<img src={logo121} style={{position:"absolute",height:20,width:20,top:15,right:10}} />
  </div>

  </div>








      <div style={{display:"flex",marginLeft:35,marginTop:15}}>

<input type="text"  placeholder="Title" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:900,height:50,outline:"none",borderRadius:5}} />
  </div>

  <div style={{display:"flex",marginLeft:35,marginTop:15}}>

<textarea type="text" row="30" cols="90" placeholder="Description" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:900,height:150,outline:"none",borderRadius:5}} />
  </div>
  <div style={{marginTop:5,display:"flex",justifyContent:"flex-end",marginRight:"15%",marginTop:30}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 130, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> Cancel</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Submit</span>
  </button>

</div>



</div>
      </div>
    );
  }
}

export default Notification;