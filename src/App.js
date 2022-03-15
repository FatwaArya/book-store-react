import React from "react";
import Main from "./Main";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div> 
        <Nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand fs-4 ms-4" to="/">
              <img src="" alt="" width={65}></img>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/beranda">Beranda</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/karya">Karya</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/TentangSaya">Tentang Saya</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/kontak">Kontak</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
        <Main/>
      </div>
    );
  }
}

export default App;