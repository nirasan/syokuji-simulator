import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/calcium";
import {findByGenderAndAge} from "./Common";

export default function Calcium({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>カルシウム</Col>
            <Col>（推奨量)</Col>
            <Col>{value} μg/日</Col>
        </Row>
    );
}
