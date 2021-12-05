import './App.css';
import {Component} from 'react';
import Title from './Component/Title';
import Header from './Component/Header';
import Footer from './Component/Footer';
import SideBar from './Component/SideBar';
import Body from './Component/Body';
import Search from "./Component/Search";
import TableEat from "./Component/TableEat";
import ModalShow from "./Component/ModalShow";

function App() {
    return (
        <div className="App">
            <div class="header">
                <Title/>
                <Header/>
                <SideBar/>
                <Search/>
            </div>
            <div class="container">
                <ModalShow/>
                <Body/>
                <TableEat/>
            </div>
            <div class="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
