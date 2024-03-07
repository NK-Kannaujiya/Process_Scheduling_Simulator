import React from 'react'
import './Nav.css';
export default function Nav() {
    return (
         <>
         <div className='text-light'>
            <nav className="navbar navbar-expand-md sticky-top navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="https://ravipatel1309.github.io/CPUScheduler/" target="_blank" rel="noreferrer">CPU Scheduling</a>
                    <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0 text-light">
                            <li className="nav-item">
                                <a className="nav-link active" href="/" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="Simulator">Simulator</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="Docs">Docs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="About">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
           {/* <div className='position-sticky'>
                    <nav className="navbar bg-dark">
                        <div className="container">
                            <a className="navbar-brand text-light" href="https://ravipatel1309.github.io/CPUScheduler/" target="_blank" rel="noreferrer" >CPU Scheduling</a>

                            <div className="nav-links" id="navLinks" style={{marginRight:"150px"}}>

                                <ul className="text-light " style={{ display: "inline-flex",paddingTop:"15px" }}>
                                    <li style={{ listStyle: "none", marginRight: "15px" }}><a href="/Home">HOME</a></li>
                                    <li style={{ listStyle: "none", marginRight: "15px" }}><a href="#">DOCS</a></li>
                                    <li style={{ listStyle: "none", marginRight: "15px" }}><a href="/Simulator">SIMULATOR</a></li>
                                    <li style={{ listStyle: "none" }}><a href="#">ABOUT</a></li>
                                </ul>
                            </div>

                            <button
                                className="navbar-toggler d-lg-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavId"
                                aria-controls="collapsibleNavId"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>



                        </div>
                    </nav>



                </div> */}

        

            {/* <div>
                <nav
                    class="navbar navbar-expand-sm navbar-light bg-light"
                >
                    <div class="container">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button
                            class="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavId">
                            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#" aria-current="page"
                                        >Home
                                        <span class="visually-hidden">(current)</span></a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="dropdownId"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        >Dropdown</a
                                    >
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownId"
                                    >
                                        <a class="dropdown-item" href="#"
                                            >Action 1</a
                                        >
                                        <a class="dropdown-item" href="#"
                                            >Action 2</a
                                        >
                                    </div>
                                </li>
                            </ul>
                            <form class="d-flex my-2 my-lg-0">
                                <input
                                    class="form-control me-sm-2"
                                    type="text"
                                    placeholder="Search"
                                />
                                <button
                                    class="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                
        </div>  */}



        </> 

        

    )
}


