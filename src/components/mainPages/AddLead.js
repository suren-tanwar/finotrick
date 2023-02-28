import React, { Component } from "react";
import "./SideDrawer.css"
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import logo1 from "../asset/images/search.png";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
export class AddLead extends Component {
    constructor(props){
        super(props)
        this.state = {
      
        }
    }

 
  render() {
      console.log(this.state)
    return (
      <div >
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
      <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:35}}>Add Lead</span>
      </div>
      <div style={{display:"flex",marginLeft:"2%",marginRight:"2%",justifyContent:"space-between",height:680}}>
       
       {/* Div 1 */}
          <div style={{height:680,width:"33%"}}>  
          <div className="step">
          <span style={{fontWeight:700}}>Step 1</span>  

          </div>
      

        <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600}}>Loan Type</span>
        </div>
        
      
      <div style={{display:"flex",flexDirection:"column"}}>
       <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <Radio sx={{color: pink[800],'&.Mui-checked': { color: pink[600],}}}/>
      <span>Home Loan</span>
      </div>
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <Radio sx={{color: pink[800],'&.Mui-checked': { color: pink[600],}}}/>
      <span>Loan Against Property</span>
      </div>
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <Radio sx={{color: pink[800],'&.Mui-checked': { color: pink[600],}}}/>
      <span>Business Installment Loan</span>
      </div>
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <Radio sx={{color: pink[800],'&.Mui-checked': { color: pink[600],}}}/>
      <span>Personal Loan</span>
      </div>
<div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <Radio sx={{color: pink[800],'&.Mui-checked': { color: pink[600],}}}/>
      <span>Working Capital/ Overdraft</span>
      </div>
      <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
        <Radio sx={{color: pink[800],'&.Mui-checked': { color: pink[600],}}}/>
      <span>Supply Chain Finance</span>
      </div>
      </div>



  <div className='third-page2'>
      <div>
      <span className='choose-template-page2'>Self</span>
      </div>
      <div className='create-new-page2'>
      <span className='create-new-text-page2' >Connector</span>
      </div>
      </div> 

  <div style={{position:"relative",marginTop:15,marginRight:70}}>
<input type="search"  placeholder="Search..." style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:275,height:50,outline:"none",paddingLeft:5,borderRadius:5}} />
<img src={logo1} style={{position:"absolute",height:20,width:20,top:15,right:20}} />
  </div>

 
        
   <div className="chirag-shah">
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontWeight:600}}>Chirag Shah</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span>cccccc</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span>Maharashtra</span></div>
</div>
    
<div style={{marginTop:10}}>
  <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600}}>Tenative Payout %</span>
   </div>
   <input type="text"  placeholder="2" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "1px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5,marginRight:70}} />

            </div>







{/* Div2 */}
          <div style={{height:690,width:"33%",borderLeft:"1px solid gray"}}>
          <div className="step">
          <span style={{fontWeight:700}}>Step 2</span>  
</div>
<div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:30,fontWeight:600}}>Applicant Type</span>
        </div>
        <div style={{display:"flex",marginTop:5,marginLeft:25}}>
        <div style={{backgroundColor:"#C71C8E",width:90,padding:10,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:15,color:"white"}}>Individual</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
     <span style={{fontSize:15,color:"black"}}>Entity</span> 
    </div>
    </div>

    <div style={{marginTop:10,marginLeft:25}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600}}>Individual Type</span>
        </div>
        <div style={{display:"flex",marginTop:5,marginLeft:25}}>
        <div style={{backgroundColor:"#C71C8E",width:90,padding:10,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:15,color:"white"}}>Salaried</span> 
    </div>
    <div style={{backgroundColor:"white",width:110,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
     <span style={{fontSize:15,color:"black"}}>Self employed</span> 
    </div>
    </div>

    <div style={{marginTop:10,marginLeft:25}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600}}>Gender</span>
        </div>
        <div style={{display:"flex",marginTop:5,marginLeft:25}}>
        <div style={{backgroundColor:"#C71C8E",width:90,padding:5,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:15,color:"white"}}>Male</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:5,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:10}}>
     <span style={{fontSize:15,color:"black"}}>Female</span> 
    </div>
    <div style={{backgroundColor:"white",width:90,padding:5,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:10}}>
     <span style={{fontSize:15,color:"black"}}>Others</span> 
    </div>
    </div>
    <div style={{marginTop:10,marginLeft:25}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600}}>Personal Details</span>
        </div>
        <input type="text"  placeholder="name" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:290,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:8}} />
        <input type="text"  placeholder="mobile" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:290,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:8}} />
        <input type="text"  placeholder="email" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:290,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:8}} />
        <input type="text"  placeholder="dob" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:290,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:8}} />
        <input type="text"  placeholder="pan" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:290,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:8}} /> 
          </div>
          {/* Div 3 */}
<div style={{height:690,width:"33%",borderLeft:"1px solid gray"}}>
<div className="step">
          <span style={{fontWeight:700}}>Step 3</span>  
 </div>
 <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600,marginLeft:25}}>Current Address</span>
        </div>
        <input type="text"  placeholder="Pin" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="address" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="city" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <input type="text"  placeholder="state" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        
        <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600,marginLeft:25}}>Employer Details</span>
        </div>
        <input type="text"  placeholder="Employer name" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        
        <div style={{marginTop:10}}>
         <span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600,marginLeft:25}}>Loan Details</span>
        </div>
        <input type="text"  placeholder="Loan amount" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        <Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Loan Tenitre years</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{ boxShadow:  "1px 1px 9px 1px  grey",width:320,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} 
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
     
        <textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:310,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
        
</div>


      </div>
      <hr/>
      <div style={{marginTop:5,display:"flex",justifyContent:"flex-end",marginRight:"5%"}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 100, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> Cancel</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Continue</span>
  </button>

</div>
      </div>
    );
  }
}

export default AddLead;