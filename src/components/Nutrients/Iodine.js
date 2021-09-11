import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/iodine";
import {findByGenderAndAge} from "./Common";

export default function Iodine({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>ヨウ素</Col>
            <Col>（推奨量)</Col>
            <Col>{value} μg/日</Col>
        </Row>
    );
}
