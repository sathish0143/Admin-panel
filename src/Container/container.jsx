import React,{useState}from "react";
import "./container.css"

 
function Container(){
    const[curStyle,setStyle]=useState("userinput");
    const[curStyle2,setStyle2]=useState("passinput");
  return(
            <div>
                <div className="containLogin">
                    <div className="contain">
                        <div className="loginhead">
                           <h1>Welcome to Dashboard, Login</h1>
                        </div>
                        <div className="usernameinput">
                           <h3 className="inputhead">Username</h3>
                           <input name="username" type="text" onClick={() => setStyle("hovercolor")}  className={curStyle} id="username" value="" required=""></input>
                        </div>
                        <div className="usernameinput">
                           <h3 className="inputhead">Password</h3>
                           <input  name="password" type="password" onClick={() => setStyle2("hovercolor")} className={curStyle2}  id="password" value="" required=""></input>
                        </div>
                        <div className="usernameinput">
                           <button type="submit" className="loginbut">LOGIN</button>
                        </div>
                        <div className="usernameinput">
                           <button  className="forgotbut">FORGOT YOUR PASSWORD?</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Container;