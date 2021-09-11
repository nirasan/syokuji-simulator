import React from 'react';
import {Row, Col} from 'react-bootstrap'
import data from "../../data/zinc";
import {findByGenderAndAge} from "./Common";

export default function Zinc({gender, age}) {
    const v = findByGenderAndAge(data, gender, age);
    const value = v ? v.RDA.Float : 0;

    return (
        <Row>
            <Col>亜鉛</Col>
            <Col>（推奨量)</Col>
            <Col>{value} mg/日</Col>
        </Row>
    );
}
