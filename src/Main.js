import React from "react";
import { Switch, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import TentangSaya from "./pages/TentangSaya";
import Karya from "./pages/Karya";
import Kontak from "./pages/Kontak";
import Gallery from "./pages/Gallery";
import Cart from "./pages/Cart";

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} />
        <Route path="/kontak" component={Kontak} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/cart" component={Cart} />
    </Switch>
)

export default Utama;