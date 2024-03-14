import React from 'react';
import { Card } from '@manulife/mux';

const CardWrapper = ({ children, maxWidth = '320px', title }) => (
  <Card customStyle={{ cardStyle: { maxWidth } }}>
    {title && (
      <>
        <Card.Header>{title}</Card.Header>
        <Card.Separator />
      </>
    )}
    <Card.Content>{children}</Card.Content>
  </Card>
);

export default CardWrapper;
