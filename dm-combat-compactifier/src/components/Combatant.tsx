import React from 'react';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';

export interface ICombatantProps {
  name: string;
}
export default function Combatant(props: ICombatantProps) {
  return (
    <Card>
      <CardHeader>{props.name}<Button close>&times;</Button></CardHeader>
      <CardBody>
        <CardText>An attack: To hit 13 + 5 = 18. Damage 3d6+2 = 2 + 3 + 5 + 2 = 12 slashing.</CardText>
        <CardText>Another attack: To hit 3 + 5 = 8. Damage d6+4 = 6 + 4 = 10 radiant.</CardText>
      </CardBody>
    </Card>
    );
}
