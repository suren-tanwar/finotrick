import React, { Component } from "react";
import logo1 from "../asset/images/search.png";
import logo2 from "../asset/images/filter.png";
import logo3 from "../asset/images/plus.png";
import logo4 from "../asset/images/view.png";
import logo5 from "../asset/images/edit.png";
import logo6 from "../asset/images/delete.png";
import Box from '@mui/material/Box';
import "./SideDrawer.css"
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export class Lead extends Component {
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
    changeColor1 = () =>{
      this.setState({
         lead:1

      })
  }
  changeColor2 = () =>{
      this.setState({
  lead:2

      })
  }
  changeColor3 = () =>{
      this.setState({
         lead:3

      })
  }
  changeColor4 = () =>{
      this.setState({
  lead:4

      })
  }
  changeColor5 = () =>{
      this.setState({
         lead:5

      })
  }
  changeColor6 = () =>{
      this.setState({
      lead:6
     })
  }
  changeColor7 = () =>{
      this.setState({
         lead:7

      })
  }
  changeColor8 = () =>{
      this.setState({
  lead:8

      })
  }
  changeColor9 = () =>{
      this.setState({
         lead:9

      })
  }
  changeColor10 = () =>{
      this.setState({
  lead:10

      })
  }
 
  render() {
      console.log(this.state)
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
     <div style={{marginTop:20}}>
      <span style={{fontSize:20,fontWeight:700,display:"flex",justifyContent:"flex-start",marginLeft:25}}>Manage Leads</span>
      </div>

      <div style={{display:"flex",marginLeft:25,marginTop:15}}>
      <div style={{position:"relative"}}>
<input type="search"  placeholder="Search..." style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:500,height:50,outline:"none",paddingLeft:35,borderRadius:5}} />
<img src={logo1} style={{position:"absolute",height:20,width:20,top:15,left:8}} />
  </div>

      <div onClick={()=>this.openModal()} style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:50,height:45,outline:"none",borderRadius:5,display:"flex",justifyContent:"center",alignItems:"center",marginLeft:20}}>
  <img src= {logo2}  style={{height:40,width:25}}/>
</div>


<button  style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 250, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly",marginLeft:120}}>
 <img src={ logo3} />
  <span style={{color:"white"}}> Add Lead</span>
  </button>

 </div>




 <div style={{display:"flex",marginLeft:25,marginTop:25,justifyContent:"space-between",width:"85%"}}>
{this.state.lead === 1 ? 
 <div style={{backgroundColor:"#273896",width:60,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>All(34)</span> 
</div>
: 
 <div  onClick={()=>this.changeColor1()} style={{border: "1px solid black",width:60,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,}}>All(34)</span> 
</div>
  }

  {this.state.lead === 2 ? 
  <div onClick={()=>this.changeColor2()} style={{backgroundColor:"#273896",width:50,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
  <span style={{fontSize:12,color:"white"}}>Lead</span> 
 </div>
 :
<div onClick={()=>this.changeColor2()} style={{border: "1px solid black",width:50,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Lead</span> 
</div>
}

{this.state.lead === 3 ? 
     <div onClick={()=>this.changeColor3()} style={{backgroundColor:"#273896",width:50,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:12,color:"white"}}>Visit</span> 
    </div>
    :
     <div onClick={()=>this.changeColor3()} style={{border: "1px solid black",width:50,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Visit</span> 
</div>
}

{this.state.lead === 4 ? 
  <div onClick={()=>this.changeColor4()} style={{backgroundColor:"#273896",width:110,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Documentation</span> 
</div>
:
<div onClick={()=>this.changeColor4()} style={{border: "1px solid black",width:110,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Documentation</span> 
</div>
}
{this.state.lead === 5 ? 
  <div onClick={()=>this.changeColor5()} style={{backgroundColor:"#273896",width:120,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Lender Selection</span> 
</div>
:
<div onClick={()=>this.changeColor5()} style={{border: "1px solid black",width:120,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Lender Selection</span> 
</div>
}
{this.state.lead === 6 ? 
  <div onClick={()=>this.changeColor6()} style={{backgroundColor:"#273896",width:60,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Log In</span> 
</div>
:
<div onClick={()=>this.changeColor6()} style={{border: "1px solid black",width:60,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Log In</span> 
</div>
}
{this.state.lead === 7 ? 
  <div onClick={()=>this.changeColor7()} style={{backgroundColor:"#273896",width:90,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Sanctioned</span> 
</div>
:
<div onClick={()=>this.changeColor7()} style={{border: "1px solid black",width:90,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Sanctioned</span> 
</div>
}
{this.state.lead === 8 ? 
  <div onClick={()=>this.changeColor8()} style={{backgroundColor:"#273896",width:75,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Rejected</span> 
</div>
:
<div onClick={()=>this.changeColor8()} style={{border: "1px solid black",width:75,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Rejected</span> 
</div>
}
{this.state.lead === 9 ? 
  <div onClick={()=>this.changeColor9()} style={{backgroundColor:"#273896",width:80,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Withdraw</span> 
</div>
:
<div onClick={()=>this.changeColor9()} style={{border: "1px solid black",width:80,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Withdraw</span> 
</div>
}
{this.state.lead === 10 ? 
  <div onClick={()=>this.changeColor10()} style={{backgroundColor:"#273896",width:90,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12,color:"white"}}>Disburshed</span> 
</div>
:
<div onClick={()=>this.changeColor10()} style={{border: "1px solid black",width:90,height:30,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
 <span style={{fontSize:12}}>Disburshed</span> 
</div>
}

 </div>

<div style={{width:"85%",padding:18,marginTop:5}}>
 
    

      <table  style={{width:"102%"}}>
<tr>
<th style={{fontSize:18,fontWeight:400}}>Lead</th>
<th style={{fontSize:18,fontWeight:400}}>Product Type</th>
<th style={{fontSize:18,fontWeight:400}}>Stage</th>
            <th style={{fontSize:18,fontWeight:400}}>Created</th>
            <th style={{fontSize:18,fontWeight:400}}>Days Open</th>
            <th style={{fontSize:18,fontWeight:400}}>Action</th>
 </tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
<tr>
<td>Chirag Shah</td>
              <td>Home Loan</td>
              <td>Visit</td>
              <td>04 May 2022 3:00 PM</td>
              <td style={{textAlign:"center"}}>5</td>
              <td><img src={logo4} /> <img src={logo5} />  <img src={logo6} /></td>

              

</tr>
      </table>
      </div>

{/* MODAL START FROM HERE */}
<Modal open={this.state.open} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.6)",display:"flex" ,justifyContent:"center"}} >
<Paper style={{width:"45%" ,height:"75%",marginTop:"5%",borderRadius:20,outline:"none"}}>
<h1 style={{marginLeft:30}}>Filter By: </h1>

<div style={{display:"flex",flexDirection:"row",marginLeft:"5%",marginRight:"5%",justifyContent:"space-between"}}>

<div  style={{display:"flex",flexDirection:"column"}}>
<span style={{fontWeight:600}}>Heiracy</span>
<Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Regional Head</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Unit Manager</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Sales Manager</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Team leader</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Sales Executive</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>

</div>

<div  style={{display:"flex",flexDirection:"column",marginTop:35}}>
<span style={{fontWeight:600}}>Geography</span>
<div style={{display:"flex",flexDirection:"row",marginTop:5}}>
<Box >
      <FormControl>
        <InputLabel id="demo-simple-select-label">Zonal</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:90,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <Box >
      <FormControl>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:180,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    </div>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Branch</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    <span style={{marginTop:5,fontWeight:600}}>Loan Type</span>
    <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Loan Type</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{width:270,borderRadius:10}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
</div>
</div>

<div style={{marginTop:15,display:"flex",justifyContent:"flex-end",marginRight:"5%"}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 100, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> Clear</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Apply Filter</span>
  </button>

</div>

</Paper>


</Modal>


      </div>
    );
  }
}

export default Lead;