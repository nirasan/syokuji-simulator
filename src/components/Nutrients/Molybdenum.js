import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/molybdenum";
import {findByGenderAndAge} from "./Common";

export default function Molybdenum({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>モリブデン</Col>
            <Col>（推奨量)</Col>
            <Col>{value} μg/日</Col>
        </Row>
    );
}
