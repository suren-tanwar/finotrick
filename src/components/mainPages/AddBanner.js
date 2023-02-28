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
import logo8 from "../asset/images/upload.png";
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
export class AddBanner extends Component {
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
      <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:35,alignItems:"center"}}>Banners <NavigateNextIcon  /> Add New Banner</span>
      </div>

      <div style={{display:"flex",marginTop:30}}>
    <button  style={{ border:"1px dashed blue",borderRadius:10,backgroundColor:"rgba(39, 56, 150, 0.13)",width: 230, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly",marginLeft:35}}>
 <img src={ logo8} />
  <span style={{color:"blue" ,fontStyle:"italic",fontSize:12}}> Upload mobile banner</span>
  </button>
  <button  style={{ border:"1px dashed blue",borderRadius:10,backgroundColor:"rgba(39, 56, 150, 0.13)",width: 230, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly",marginLeft:35}}>
 <img src={ logo8} />
  <span style={{color:"blue" ,fontStyle:"italic",fontSize:12}}> Upload web banner</span>
  </button>
  </div>








      <div style={{display:"flex",marginLeft:35,marginTop:15}}>

<input type="text"  placeholder="Title" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:900,height:50,outline:"none",borderRadius:5}} />
  </div>

  <div style={{display:"flex",marginLeft:35,marginTop:15}}>

<textarea type="text" row="30" cols="90" placeholder="Title" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:900,height:250,outline:"none",borderRadius:5}} />
  </div>
  <div style={{marginTop:5,display:"flex",justifyContent:"flex-end",marginRight:"15%",marginTop:30}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 140, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> Cancel</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Submit</span>
  </button>

</div>




      </div>
    );
  }
}

export default AddBanner;