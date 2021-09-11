import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/magnesium";
import {findByGenderAndAge} from "./Common";

export default function Magnesium({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>マグネシウム</Col>
            <Col>（推奨量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
