import React, { Component } from "react";
import "./SideDrawer.css"
import logo1 from "../asset/images/search.png";
import logo2 from "../asset/images/filter.png";
import logo3 from "../asset/images/plus.png";
import logo4 from "../asset/images/view.png";
import logo5 from "../asset/images/edit.png";
import logo6 from "../asset/images/delete.png";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo7 from "../asset/images/banner.png";
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

export class Banner extends Component {
    constructor(props){
        super(props)
        this.state = {
         
        }
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
      <div style={{marginTop:25}}>
      <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:25}}>Banner</span>
      </div>

      <div style={{display:"flex",marginLeft:25,marginTop:15}}>
      <div style={{position:"relative"}}>
<input type="search"  placeholder="Search..." style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:800,height:50,outline:"none",paddingLeft:35,borderRadius:5}} />
<img src={logo1} style={{position:"absolute",height:20,width:20,top:15,left:8}} />
  </div>



</div>

<div style={{width:"85%",padding:18,marginTop:5}}>
 
    

      <table  style={{width:"102%"}}>
<tr>
<th style={{fontsize:15,fontWeight:"normal"}}>Banner</th>
<th style={{fontsize:15,fontWeight:"normal"}}>Title</th>
<th style={{fontsize:15,fontWeight:"normal"}}>Created</th>

            <th style={{fontsize:15,fontWeight:"normal"}}>Status</th>
            <th style={{fontsize:15,fontWeight:"normal"}}>Action</th>
 </tr>
<tr>
<td><img src={logo7} /></td>
              <td style={{fontWeight:600}}> Lorem Ipsum is simply dummy text of the printing a</td>
              <td style={{fontWeight:600}}> 04 May 2022 3:00 PM </td>
              <td style={{textAlign:"center"}}> 
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>
</tr>
<tr>
<td><img src={logo7} /></td>
              <td style={{fontWeight:600}}> Lorem Ipsum is simply dummy text of the printing a</td>
              <td style={{fontWeight:600}}> 04 May 2022 3:00 PM </td>
              <td style={{textAlign:"center"}}> 
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>
</tr>
<tr>
<td><img src={logo7} /></td>
              <td style={{fontWeight:600}}> Lorem Ipsum is simply dummy text of the printing a</td>
              <td style={{fontWeight:600}}> 04 May 2022 3:00 PM </td>
              <td style={{textAlign:"center"}}> 
              <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>
</tr>
      </table>
      </div>

      </div>
    );
  }
}

export default Banner;