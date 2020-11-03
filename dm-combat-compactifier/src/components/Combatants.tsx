import React from 'react';
import Select from 'react-select';
import { Button, Col, Row } from 'reactstrap';
import Combatant, { ICombatantProps } from './Combatant';
import Names from '../data/names-en';

type opt = {
  value: string;
  label: string;
};
export interface ICombatantsProps {
  combatants: Array<ICombatantProps>;
}
export default function Combatants(props: ICombatantsProps) {
  const options = Object
    .entries(Names)
    // .sort((a: [string, string], b: [string, string]) => b[1].localeCompare(a[1]))
    .map(([value, label]) => { return { value: value, label: label }; })

  return (
    <>
      <Row>
        <Col><Select options={options} /></Col>
        <Col><Button className="btn-success">Add</Button></Col>
      </Row>
      {props.combatants.map((combatant) => <Combatant name={combatant.name} />)}
    </>
  );
}
