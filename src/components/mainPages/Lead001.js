import React, { Component } from "react";
import "./SideDrawer.css"
import logo1 from "../asset/images/line.png";
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import logo3 from "../asset/images/upload.png";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { Checkbox } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import logo53 from "../asset/images/girl.png";
import logo51 from "../asset/images/bell.png";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
export class Lead001 extends Component {
    constructor(props){
        super(props)
        this.state = {
   
        }
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
  <div style={{marginTop:25}}>
      <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:35,alignItems:"center"}}>Manage Leads <NavigateNextIcon  />  Lead001</span>
      </div>
      <div style={{display:"flex",marginLeft:"2%",marginRight:"2%",justifyContent:"space-between",height:680,marginTop:20}}>
      <div style={{height:700,width:"33%"}}>
          <div className="lead-info">
              <div>

                  <span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Lead Information</span>
             <hr/>
              </div>
              <div>

<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Lead Source</span>
</div>
<div style={{display:"flex",padding:5}}>
<div  style={{width:"50%"}}>
<div style={{display:"flex",justifyContent:"flex-start",marginLeft:4}}><span style={{fontWeight:600}}>Chirag Shah</span></div>
     <div style={{display:"flex",justifyContent:"flex-start",marginLeft:4}}><span>cccccc</span></div>
     <div style={{display:"flex",justifyContent:"flex-start",marginLeft:4}}><span>Maharashtra</span></div>
</div>
<div  style={{width:"50%"}}>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:13,fontWeight:600}}>Tenative Payout %</span>
<span style={{display:"flex",justifyContent:"flex-start",marginLeft:12}}>2</span>
</div>
</div>
<hr/>
<div style={{display:"flex",padding:5}}>
<div >
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:13,marginLeft:4}} >Applicant Type</span></div>

</div>
<div style={{marginLeft:15}}>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:13}}>individual type</span></div>

</div>
<div style={{marginLeft:15}}>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:13}}>Gender</span></div>

</div>
</div>

<div style={{display:"flex"}}>

<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:13,marginLeft: 11,fontWeight:600}} >individual</span></div>



<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:13,marginLeft:38,fontWeight:600}}>Salaried</span></div>


<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:13,marginLeft:55,fontWeight:600}}>Female</span></div>


</div>





<div style={{display:"flex",padding:5,marginTop:15}}>
<div  style={{width:"50%"}}>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:4}} >Applicant Detail</span></div>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:4}}>Chirag Shah</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:4}}>cccccc</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:4}}>Maharashtra</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:4}}>1234567890-</span></div>
</div>
<div  style={{width:"50%"}}>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:15}}>Current address</span></div>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:15}}>Chirag Shah</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:15}}>cccccc</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:15}}>Maharashtra</span></div>
     <div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:15}}>1234567890-</span></div>
</div>
</div>
<hr/>
<div>

<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Aditional detail</span>
</div>
<div>

<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Pan:egtwdwhdvgwvdvgv</span>
</div>
<div>

<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Company: wdjhwbhh</span>
</div>
<hr/>
<div>

<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Loan Details</span>
</div>


<div style={{display:"flex",padding:5}}>
<div  style={{width:"50%"}}>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:5}}>loan amount: 9000</span></div>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:5}}>Chirag Shah</span></div>
    
</div>
<div  style={{width:"50%"}}>
<div style={{display:"flex",justifyContent:"flex-start"}}><span style={{fontSize:15,marginLeft:35}} >loan type</span></div>
<div style={{display:"flex",justifyContent:"flex-start"}}><span  style={{fontSize:15,marginLeft:35}}>home loan</span></div>
 
</div>
</div>
              </div>  
      </div>


      <div style={{height:680,width:"33%"}}>
      <div className="lead-info">
      <div>

<span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:10}}>History</span>
<hr/>
</div>  

<div style={{display:"flex"}}>
  <div style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
<div>
<span className="dot"></span>
</div>
<div>
<span className="dot1"></span>
</div>
     </div>
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
    
    <span style={{color:"#C71C8E",marginLeft:15}}>Move to lead</span>
    <span style={{fontSize:12,fontWeight:600,marginLeft:15}}> Jaydeep Patel 12 May 2022 2:00 PM</span>
    </div>
</div>





<div style={{display:"flex",marginTop:15}}>
    <div style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
<div>
<span className="dot"></span>
</div>
<div>
<span className="dot1"></span>
</div>
     </div>
     <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
    
     <span style={{color:"#C71C8E",marginLeft:15}}>Move to Visit</span>
     <span style={{fontSize:12,fontWeight:600,marginLeft:15}}> Jaydeep Patel 12 May 2022 2:00 PM</span>
     </div>
</div>

<div style={{display:"flex",marginTop:15}}>
    <div style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
<div>
<span className="dot"></span>
</div>
<div>
<span className="dot1"></span>
</div>
     </div>
     <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
    
     <span style={{color:"#C71C8E",marginLeft:15}}>Move to Documentation</span>
     <span style={{fontSize:12,fontWeight:600,marginLeft:15}}> Jaydeep Patel 12 May 2022 2:00 PM</span>
     </div>
</div>

<div style={{display:"flex",marginTop:15}}>
    <div style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
<div>
<span className="dot"></span>
</div>
<div>
<span className="dot1"></span>
</div>
     </div>
     <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
    
     <span style={{color:"#C71C8E",marginLeft:15}}>Move to lender selection</span>
     <span style={{fontSize:12,fontWeight:600,marginLeft:15}}> Jaydeep Patel 12 May 2022 2:00 PM</span>
     </div>
</div>
<div style={{display:"flex",marginTop:15}}>
    <div style={{marginLeft:10,display:"flex",flexDirection:"column"}}>
<div>
<span className="dot"></span>
</div>

     </div>
     <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
    
     <span style={{color:"#C71C8E",marginLeft:15}}>Move to Login</span>
     <span style={{fontSize:12,fontWeight:600,marginLeft:15}}> Jaydeep Patel 12 May 2022 2:00 PM</span>
     </div>
</div>
    
              </div>  
      </div>



















      <div style={{height:680,width:"33%"}}>  
      <div className="lead-info">
 <div>
<span style={{fontSize:20,fontWeight:600,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Current Stage </span>
<hr/>
</div>
{/* PAGE1 */}
 <div>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10}}>Visit Page</span>
</div>
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
<div style={{marginTop:10,display:"flex",justifyContent:"flex-end",marginRight:"5%"}}>
<button style={{marginRight:20,backgroundColor:"transparent" , border: "1px solid pink", borderRadius: 10, width: 100, height: 50}}>
  <span style={{color:"pink",fontSize:15}}> skip</span>
  </button>
<button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 160, height: 50,}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button>
</div> 
{/* PAGE2 */}
 {/* <div className='third-page3'>
 <div className='create-new-page3'>
      <span className='create-new-text-page3' >Current Stage </span>
      </div>
      <div>
      <span className='choose-template-page3'>Document</span>
      </div>
     </div> 

     <div style={{marginTop:10}}>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10,fontWeight:600}}>Documentation</span>
</div>

<div style={{display:"flex",marginTop:5,marginLeft:15}}>
        <div style={{backgroundColor:"#C71C8E",width:80,padding:10,outline:"none",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}}>
     <span style={{fontSize:15,color:"white"}}>Current</span> 
    </div>
    <div style={{backgroundColor:"white",width:150,padding:10,border:"1px solid black",borderRadius:20,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:20}}>
     <span style={{fontSize:15,color:"black"}}>Documents Upload</span> 
    </div>
    </div>

    <div style={{height:200}}>
 </div>

    <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
    <button  style={{ border:"none",backgroundColor:"white",width: 230, height: 50, fontSize: 17, fontWeight: 600,display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
 <img src={ logo3} />
  <span style={{color:"blue" ,fontStyle:"italic",fontSize:15}}> Upload new document</span>
  </button>
  </div>


    <textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button>
             
       */}
 {/* PAGE3 */}  
 {/* <div className='third-page3'>
 <div className='create-new-page3'>
      <span className='create-new-text-page3' >Current Stage </span>
      </div>
      <div>
      <span className='choose-template-page3'>Document</span>
      </div>
     </div> 

     <div style={{marginTop:10}}>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10,fontWeight:600}}>Lender Selection</span>
</div>

<div style={{display:"flex",marginTop:5,marginLeft:15}}>
<Box style={{marginTop:5}}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">select lenders</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{ boxShadow:  "1px 1px 9px 1px  grey",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} 
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
    </div>

    <div style={{height:250}}>
        <div style={{display:"flex",alignItems:"center",marginTop:10,marginLeft:10}}>
            <div>  <Checkbox
        label="CheckCircleOutlineIcon"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        style={{borderRadius:50}}
      /></div>
  
      <div style={{display:"flex",flexDirection:"column"}}>
           <span style={{fontSize:16}}>AXIS </span>
       <span style={{fontSize:8}}>Boriwali</span>
       </div>
   
      </div>
      <div style={{display:"flex",alignItems:"center",marginTop:10,marginLeft:10}}>
            <div>  <Checkbox
        label="CheckCircleOutlineIcon"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        style={{borderRadius:50}}
      /></div>
  
  <div style={{display:"flex",flexDirection:"column"}}>
       <span style={{fontSize:16}}>HDFC</span>
       <span style={{fontSize:8}}>Boriwali</span>
       </div>
   
      </div>
      <div style={{display:"flex",alignItems:"center",marginTop:10,marginLeft:10}}>
            <div>  <Checkbox
        label="CheckCircleOutlineIcon"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        style={{borderRadius:50}}
      /></div>
  
  <div style={{display:"flex",flexDirection:"column"}}>
           <span style={{fontSize:16}}>ICICI </span>
       <span style={{fontSize:8}}>Boriwali</span>
       </div>
   
      </div>
 </div>
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button>   */}
   {/* PAGE4 */}   
   {/* <div className='third-page3'>
 <div className='create-new-page3'>
      <span className='create-new-text-page3' >Current Stage </span>
      </div>
      <div>
      <span className='choose-template-page3'>Document</span>
      </div>
     </div> 

     <div style={{marginTop:10}}>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10,fontWeight:600}}>Login</span>
</div>


<div style={{display:"flex",alignItems:"center",marginTop:10,marginLeft:10 ,boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.1)",borderRadius:10}}>
            <div> 
                 <Checkbox
        label="CheckCircleOutlineIcon"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        style={{borderRadius:50}}
      /></div>
  
      <div style={{display:"flex",flexDirection:"column"}}>
           <span style={{fontSize:16}}>AXIS </span>
       <span style={{fontSize:8}}>Boriwali</span>
       </div>
   
      </div>
    
      <div style={{display:"flex",flexDirection:"column",marginTop:10,marginLeft:10 ,boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.1)",borderRadius:10,paddingBottom:10}}>
          <div style={{display:"flex"}}>
            <div> 
                 <Checkbox
        label="CheckCircleOutlineIcon"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        style={{borderRadius:50}}
      />
      </div>
  
      <div style={{display:"flex",flexDirection:"column"}}>
           <span style={{fontSize:16}}>Hdfc </span>
       <span style={{fontSize:8}}>Malad</span>
       </div>
       </div>
       <input type="text"  placeholder="RM Name" style={{ marginLeft:10,border: "1px solid gray",width:240,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
      </div>

      <div style={{display:"flex",alignItems:"center",marginTop:10,marginLeft:10 ,boxShadow: "0px 4px 34px rgba(0, 0, 0, 0.1)",borderRadius:10}}>
            <div> 
                 <Checkbox
        label="CheckCircleOutlineIcon"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        style={{borderRadius:50}}
      /></div>
  
      <div style={{display:"flex",flexDirection:"column"}}>
       <span style={{fontSize:16}}>ICICI </span>
       <span style={{fontSize:8}}>House cross</span>
       </div>
   
      </div>
  
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:110}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button>  */}
  {/* PAGE5 */}
  {/* <div className='third-page3'>
 <div className='create-new-page3'>
      <span className='create-new-text-page3' >Current Stage </span>
      </div>
      <div>
      <span className='choose-template-page3'>Document</span>
      </div>
     </div> 

     <div style={{display:"flex",alignItems:"center",marginTop:10,width:"60%" }}>
        
                 <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Sanctioned</span>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Rejected</span>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Withdrawn</span>
      </div>
    
      <div style={{display:"flex",alignItems:"center",marginTop:10 }}>
<span style={{fontSize:12,fontStyle:"italic",marginLeft:30}}>Lender</span>
<span style={{fontSize:12,fontStyle:"italic",marginLeft:100}}>Amount</span>
</div>
<div style={{display:"flex",alignItems:"center",marginTop:5,justifyContent:"space-around" }}>
<span style={{fontSize:15}}>Axis</span>
<input type="text"   style={{ marginLeft:10,border: "1px solid gray",width:120,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
</div>
<div style={{display:"flex",alignItems:"center",marginTop:5,justifyContent:"space-around" }}>
<span style={{fontSize:15}}>HDFC</span>
<input type="text"   style={{ marginLeft:10,border: "1px solid gray",width:120,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
</div>
<div style={{display:"flex",alignItems:"center",marginTop:5,justifyContent:"space-around" }}>
<span style={{fontSize:15}}>ICICI</span>
<input type="text"   style={{ marginLeft:10,border: "1px solid gray",width:120,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
</div>
<input type="text"  placeholder="Requested amount" style={{ marginLeft:10,border: "1px solid gray",width:240,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
<input type="text"  placeholder="Approval amount" style={{ marginLeft:10,border: "1px solid gray",width:240,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />

  
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:30}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button>  */}

  {/* PAGE6 */}
{/*   
  <div className='third-page3'>
 <div className='create-new-page3'>
      <span className='create-new-text-page3' >Current Stage </span>
      </div>
      <div>
      <span className='choose-template-page3'>Document</span>
      </div>
     </div> 

     <div style={{display:"flex",alignItems:"center",marginTop:10,width:"60%" }}>
        
                 <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Sanctioned</span>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Rejected</span>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Withdrawn</span>
      </div>
    
      <div style={{display:"flex",alignItems:"center",marginTop:10 }}>
      <Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Select reason</InputLabel>
        <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    style={{ marginLeft:10,width:260,height:35,marginTop:10}}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
      </FormControl>
    </Box>
</div>

  
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:220}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button> */}
  {/* PAGE7 */}
{/*   
  <div className='third-page3'>
 <div className='create-new-page3'>
      <span className='create-new-text-page3' >Current Stage </span>
      </div>
      <div>
      <span className='choose-template-page3'>Document</span>
      </div>
     </div> 

     <div style={{display:"flex",alignItems:"center",marginTop:10,width:"60%" }}>
        
                 <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Sanctioned</span>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Rejected</span>
      <Checkbox
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <span style={{fontSize:12}}>Withdrawn</span>
      </div>

  
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:300}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button> */}
  {/* PAGE 8 */}
  {/********* 
  <div style={{marginTop:10}}>
<span style={{fontSize:15,display:"flex",justifyContent:"flex-start",marginLeft:10,fontWeight:600}}>Disburshed</span>
</div>
<input type="text"  placeholder="Tenative loan amount" style={{border: "1px solid gray",width:260,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
<input type="text"  placeholder="Tenative %" style={{ border: "1px solid gray",width:260,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
<input type="text"  placeholder="Tenative pay amount" style={{ border: "1px solid gray",width:260,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
<div style={{display:"flex",alignItems:"center",marginTop:10 }}>
<span style={{fontSize:12,fontStyle:"italic",marginLeft:30,fontWeight:600}}>Lender</span>
<span style={{fontSize:12,fontStyle:"italic",marginLeft:70,fontWeight:600}}>Disburshed Amount</span>
</div>
<div style={{display:"flex",alignItems:"center",marginTop:5,justifyContent:"space-around" }}>
<span style={{fontSize:15}}>Axis</span>
<input type="text"   style={{ marginLeft:10,border: "1px solid gray",width:120,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
</div>
<div style={{display:"flex",alignItems:"center",marginTop:5,justifyContent:"space-around" }}>
<span style={{fontSize:15}}>HDFC</span>
<input type="text"   style={{ marginLeft:10,border: "1px solid gray",width:120,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
</div>
<div style={{display:"flex",alignItems:"center",marginTop:5,justifyContent:"space-around" }}>
<span style={{fontSize:15}}>ICICI</span>
<input type="text"   style={{ marginLeft:10,border: "1px solid gray",width:120,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
</div>



<input type="text"  placeholder="Total payout % " style={{ border: "1px solid gray",width:260,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />
<input type="text"  placeholder="Total Payout amount" style={{ border: "1px solid gray",width:260,height:35,outline:"none",paddingLeft:5,borderRadius:5,marginTop:5}} />

    

  
<textarea type="text" rows="6" cols="50" placeholder="comment" style={{ boxShadow:  "1px 1px 9px 1px  grey",border: "3px solid #fff",width:260,height:50,outline:"none",paddingLeft:5,borderRadius:5,marginTop:10}} />
    <button style={{backgroundColor:"#273896" , border: "none", borderRadius: 10, width: 260, height: 50,marginTop:15}}>
  <span style={{color:"white",fontSize:15}}> Next stage</span>
  </button>
  */}
         </div> 
       </div>


          </div>


      </div>
    );
  }
}

export default Lead001;