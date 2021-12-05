import { Component } from "react";
import '../App.css';

class Header extends Component
{
    render () {
        return (
            <div class="narbar">
                <ul class="menu">
                    <li><a href="#">Trang chủ</a></li>
                    <li><a href="#">Giới thiệu</a></li>
                    <li><a href="#">Sản phẩm</a></li>
                    <li><a href="#">Quảng cáo</a></li>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
            </div>
        );
    }
}

export default Header;