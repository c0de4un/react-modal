import React from "react";
import { ModalHeader } from "./ModalHeader";

export function Modal(props) {
    return (
        <div className={`modal fade ${props.visible ? 'show' : ''} modal-z-index overflow-auto`}>
            <div onClick={() => props.onHide()} className="modal-backdrop"></div>
            <div className={`modal-dialog ${props.size}`}>
                <div className="modal-content">
                    <ModalHeader
                        title={props.title}
                        onClose={() => props.onHide()}
                    />
                    {props.children}
                </div>
            </div>
        </div>
    );
}
