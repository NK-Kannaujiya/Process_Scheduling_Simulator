import React from 'react'
import icon from './github.svg'

import 'font-awesome/css/font-awesome.min.css';
import './footer.css'

export default function Footer() {
    return (           
        <div className='footer navbar-fixed-bottom'>

            <div className="pt-4 pb-3 footer">
            <div className="container">
            <div className="row">
                <div className="col-lg-7 col-xs-12 about-company">
                <h2>Process Scheduling Simulator</h2>
                <p className="pr-5 text-white-50">"Process Scheduling Simulator is a web Application designed to mimic the behavior of various process scheduling algorithms used in operating systems." <br></br>
                "It provides a virtual environment where users can simulate and analyze the performance of scheduling algorithms such as FCFS, Round Robin, SJF, and Priority Scheduling."<br></br>
                </p>
                <p>
                    <a href="#"><i className="bi bi-github m-3"></i></a>
                    <a href="#"><i className="bi bi-linkedin m-3"></i></a>
                    <a href="#"><i className="bi bi-facebook m-3"></i></a>
                    <a href="#"><i className="bi bi-instagram m-3"></i></a>
                </p>
                </div>
                <div className="col-lg-2 col-xs-12 links">
                <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                    <ul className="m-0 p-0">
                    <li>- <a href="/">Jump To Home</a></li>
                    <li>- <a href="Simulator">Simulate Process</a></li>
                    <li>- <a href="Docs">Read Documentation</a></li>
                    <li>- <a href="About">Know The Developers</a></li>
                   
                    </ul>
                </div>
                <div className="col-lg-3 col-xs-12 location">
                <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                <p>Centor For Development In Advance Computing , Electronic City Phase-1 Electronic City Bangaluru, Karnataka, India</p>
                <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
                <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
                </div>
            </div>
            <div className="row">
                <div className="col copyright">
                <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
                </div>
            </div>
            </div>
            </div>
        </div>                
    );
}
