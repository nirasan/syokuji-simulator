import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/sodium";
import {findByGenderAndAge} from "./Common";

export default function Sodium({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.DGSalt.Float : 0;

    return (
        <Row>
            <Col>ナトリウム</Col>
            <Col>（目標量）（食塩相当量)</Col>
            <Col>〜{value} g/日</Col>
        </Row>
    );
}
