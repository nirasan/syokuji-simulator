import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/protein";
import {findByGenderAndAge} from "./Common";

export default function Protein({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float: 0;

    return (
        <Row>
            <Col>タンパク質</Col>
            <Col>（推奨量)</Col>
            <Col>{value} g/日</Col>
        </Row>
    );
}
