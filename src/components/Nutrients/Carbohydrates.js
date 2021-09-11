import React from 'react';
import {Row, Col} from 'react-bootstrap'
import energy from "../../data/energy";
import carbohydrates from "../../data/carbohydrates";
import {findByGenderAndAge, findByGenderAndAgeAndLevel} from "./Common";

export default function Carbohydrates({gender, age, level}) {
    const e = findByGenderAndAgeAndLevel(energy, gender, age, level);
    const ev = e ? e.Value.Float: 0;

    const c = findByGenderAndAge(carbohydrates, gender, age);
    const min = c ? c.DG.Min.Float : 0;
    const max = c ? c.DG.Max.Float : 0;
    let minG = 0;
    if (min > 0) {
        minG = ev * min / 100 / 9;
    }
    let maxG = 0;
    if (max > 0) {
        maxG = ev * max / 100 / 9;
    }

    return (
        <Row>
            <Col>炭水化物</Col>
            <Col>（目標量)</Col>
            <Col>{minG.toFixed(1)}〜{maxG.toFixed(1)} g/日</Col>
            <Col>{min}〜{max} %エネルギー/日</Col>
        </Row>
    );
}
