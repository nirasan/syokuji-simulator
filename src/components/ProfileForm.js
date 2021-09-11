import React from 'react';
import {Form, FormGroup, Row, Col} from 'react-bootstrap'

export default function ProfileForm({setGender, setAge, setLevel}) {

    const handleGenderChange = (event) => {
        console.log(event.target.value);
        setGender(event.target.value);
    };

    const handleAgeChange = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    };

    const handleLevelChange = (event) => {
        console.log(event.target.value);
        setLevel(event.target.value);
    };

    return (
        <Form>
            <Row>
                <Col>
                    <FormGroup controlId="ProfileForm.Gender" onChange={handleGenderChange}>
                        <Form.Label>性別</Form.Label>
                        <Form.Control as="select" defaultValue={"男性"} custom>
                            <option value="男性">男性</option>
                            <option value="女性">女性</option>
                        </Form.Control>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="ProfileForm.Age" onChange={handleAgeChange}>
                        <Form.Label>年齢</Form.Label>
                        <Form.Control as="select" defaultValue={20} custom>
                            {Array(100).fill(0).map((_, i)=>{
                                return <option value={i} key={i}>{i}</option>
                            })}
                        </Form.Control>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="ProfileForm.Level" onChange={handleLevelChange}>
                        <Form.Label>運動レベル</Form.Label>
                        <Form.Control as="select" defaultValue={"Level2"} custom>
                            <option value="Level1">低い</option>
                            <option value="Level2">普通</option>
                            <option value="Level3">高い</option>
                        </Form.Control>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}
