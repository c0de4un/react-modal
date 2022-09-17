import React from "react";
import { Row } from "shards-react";

export function ModalFooter(props) {
    return (
        <div className="modal-footer pl-0">
            <Row className={"w-100 justify-content-between"}>
                {props.children}
            </Row>
        </div>
    );
}
