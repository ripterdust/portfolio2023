'use client';
import React from 'react';
import Card from '@/components/Card';
import {cards} from './cards';

export default function Home() {
  return (
    <React.Fragment>
      asd
      <div className="cards">
        {cards.map((card, key) => {
          const {component, classes} = card;

          const Component = () => component;

          return (
            <Card key={key} keyName={key} classes={classes}>
              <Component />
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
}
