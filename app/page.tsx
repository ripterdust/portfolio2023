import React from 'react';
import Card from '../components/Card';
import {cards} from './cards';
import {CardInterface} from '@/interfaces/cardList.interface';

export default function Home() {
  return (
    <React.Fragment>
      <div className="cards">
        {cards.map((card: CardInterface, key) => {
          const {component} = card;
          const Component = () => component;

          return (
            <Card key={key}>
              <Component />
            </Card>
          );
        })}
      </div>
    </React.Fragment>
  );
}
