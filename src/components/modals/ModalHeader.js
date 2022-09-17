import React from "react";

export function ModalHeader(props) {
    return (
        <div className="modal-header">
            <div className="modal-title h4">
                {props.title}
            </div>
            <button onClick={props.onClose} type="button" className="close">
                <span aria-hidden="true">×</span><span className="sr-only">Close</span>
            </button>

            {props.children}
        </div>
    );
}
