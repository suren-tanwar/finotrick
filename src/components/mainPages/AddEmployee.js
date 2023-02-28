import React, { Component } from 'react'
import logo8 from "../asset/images/upload.png";
import logo52 from "../asset/images/down.png";
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export class AddEmployee extends Component {
  render() {
    return (
      <div style={{paddingBottom:10}}>
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
      <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:35,alignItems:"center"}}>Employee <NavigateNextIcon  /> Add New Employees</span>
      </div>
    <div style={{height:150,display:"flex"}}>
    <img src={logo53} style={{marginLeft:30,marginTop:20}} />
    </div>


<div style={{display:"flex",padding:30,justifyContent:"space-between",paddingBottom:20}}>
<div style={{width:"33%"}}>
<input type="text"  placeholder="name" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:340,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
<input type="text"  placeholder="Mobile Number" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:340,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
<input type="text"  placeholder="Email id" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:340,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
<input type="text"  placeholder="date of birth " style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:340,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
<div style={{marginTop:10}}>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10,fontWeight:600}}>Gender</span>
</div>
<div style={{display:"flex",marginTop:5}}>
<div style={{backgroundColor:"#C71C8E",width:80,height:35,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
<span style={{fontSize:15,color:"white"}}>Male</span> 
</div>
<div style={{backgroundColor:"white",width:90,height:35,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
<span style={{fontSize:15,color:"black"}}>Female</span> 
</div>
<div style={{backgroundColor:"white",width:90,height:35,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
<span style={{fontSize:15,color:"black"}}>Other</span> 
</div>
</div>

</div>




<div style={{width:"33%"}}>
<input type="text"  placeholder="Pan" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5,marginLeft:15}} />
<button  style={{ border:"1px dashed blue",borderRadius:10,backgroundColor:"rgba(39, 56, 150, 0.13)",width: 320, height: 100, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"center",marginTop:15,marginLeft:27}}>
<img src={ logo8} />
 <span style={{color:"blue" ,fontStyle:"italic",fontSize:12,marginLeft:15}}> Upload PAN</span>
 </button>
</div>
<div style={{width:"33%"}}>
<input type="text"  placeholder="Aadhar" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:300,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />

</div>
</div>

<hr style={{marginLeft:"3%",marginRight:"3%"}}/>

<div style={{display:"flex",padding:30,justifyContent:"space-between",paddingBottom:20}}>
<div style={{width:"33%"}}>
<select placeholder="Report to" style={{width:360,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} >
<option>Role</option>

 </select>
</div>






<div style={{width:"33%"}}>
<select placeholder="Report to" style={{width:320,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} >
<option>branch</option>

 </select>
</div>
<div style={{width:"33%"}}>
<select placeholder="Report to" style={{width:320,height:50,outline:"none",borderRadius:5,border:"1px solid gray"}} >
<option>Line manager</option>

 </select>

</div>
</div>











<div style={{marginTop:5,display:"flex",justifyContent:"flex-end",marginRight:"5%",marginTop:30}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 150, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> Cancel</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Submit</span>
  </button>

</div>






      </div>
    )
  }
}

export default AddEmployee