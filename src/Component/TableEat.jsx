import {Component} from "react";
import '../App.css';

class TableEat extends Component
{
    render() {
        return (
            <table class="box-table-eat">
                <tr>
                    <th class="eat-title">Món ăn</th>
                    <th>Giá</th>
                    <th>Ảnh minh họa</th>
                </tr>
                <tr>
                    <td>Gà ủ muối hoa tiêu 1/2 con + coca </td>
                    <td>80.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/ga_u_muoi.jpg"/></td>
                </tr>
                <tr>
                    <td>Chân gà rút xương ngâm xả ớt - 5 chân</td>
                    <td>65.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/chan_ga.jpg"/></td>
                </tr>
                <tr>
                    <td>Cơm Rang Cay Dưa Bò- Trứng ốp</td>
                    <td>40.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/com_trung_op_la.jpg"/></td>
                </tr>
                <tr>
                    <td>Bánh tráng trộn</td>
                    <td>25.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/banh_trang_tron.jpg"/></td>
                </tr>
                <tr>
                    <td>Cơm đùi gà chua ngọt</td>
                    <td>40.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/com_dui_ga.jpg"/></td>
                </tr>
                <tr>
                    <td>Cơm sườn chua ngọt</td>
                    <td>40.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/com_tam.jpg"/></td>
                </tr>
                <tr>
                    <td>Phở bò</td>
                    <td>35.000đ</td>
                    <td><img class="img-eat" src="../../images/eat/pho_bo.jpg"/></td>
                </tr>
            </table>
        );
    }
}

export default TableEat;