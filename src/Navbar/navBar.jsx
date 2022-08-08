import React from "react";
import "./navBar.css"

class NavBar extends React.Component{
    render(){
        return(
            <div>
               <div className="topbarcontainer">
                <div className="topbarline">
                    <div className="topbarlogo">
                        <h1 className="topbarlogohead">Product Admin</h1>
                    </div>
                <div className="menubar"> 
                    <div className="topbarmenu">
                        <div className="menudiv">
                                <img className="dashimg" alt="dasimage" src="https://img.icons8.com/external-prettycons-lineal-prettycons/2x/external-dashboard-essentials-prettycons-lineal-prettycons.png"/>
                            <div className="dashname">
                                <h2 className="dashhead"> Dashboard</h2>
                                <img className="downarrow" src="https://static.thenounproject.com/png/1052646-200.png" alt="down"/>
                            </div>
                        </div>
                        <div className="menudiv">
                            <div>
                                <img className="dashimg" alt="dasimage" src="https://img.icons8.com/external-sbts2018-outline-sbts2018/2x/external-reports-basic-ui-elements-2.3-sbts2018-outline-sbts2018.png"/>
                                <div className="dashname">
                                  <h2 className="dashhead"> Reports</h2>
                                </div>
                            </div>
                        </div>
                        <div className="menudiv">
                            <div>
                                <img className="dashimg" alt="dasimage" src="https://img.icons8.com/sf-regular/2x/shopping-cart.png"/>
                                <div className="dashname">
                                    <h2 className="dashhead"> Products</h2>
                                </div>    
                            </div>
                        </div>
                        <div className="menudiv">
                            <div>
                                <img className="dashimg" alt="dasimage" src="https://img.icons8.com/puffy/2x/experimental-user-puffy.png"/>
                                <div className="dashname">
                                   <h2 className="dashhead"> Accounts</h2>
                                </div>
                            </div>
                        </div>
                        <div className="menudiv">
                            <div>
                                <img className="dashimg" alt="dasimage" src="https://img.icons8.com/sf-regular-filled/2x/settings.png"/>
                                <div className="dashname">
                                <h2 className="dashhead"> Settings</h2>
                                <img className="downarrow" src="https://static.thenounproject.com/png/1052646-200.png" alt="down"/>
                            </div>
                            </div>
                        </div>
                </div>  
                    </div>

                </div>
               </div>



            </div>
        )
    }
}


export default NavBar;