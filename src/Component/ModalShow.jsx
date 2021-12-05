import React, {Component} from "react";
import Modal from "./Modal/Modal";

class ModalShow extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <div>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Hi. I'm Modal!</p>
                </Modal>
                <button type="button" onClick={this.showModal}>
                    Show Modal
                </button>
            </div>
        );
    }
}

export default ModalShow;