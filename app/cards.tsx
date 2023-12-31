import Clock from '@/components/Clock';
import {DateHelpers} from '@/helpers/date';
import {CardInterface} from '@/interfaces/cardList.interface';
import Image from 'next/image';

export const cards: CardInterface[] = [
  {
    component: <></>
  },
  {component: <Clock />, classes: 'clock'},
  {
    component: (
      <a href="" target="_blank">
        <Image alt="image" src="/linkedin.png" width={100} height={100} />
      </a>
    ),
    classes: 'link'
  },
  {
    component: (
      <div className="vertical">
        <div>Age</div>
        <div>{DateHelpers.getAge()}</div>
        <div>Years old</div>
      </div>
    )
  }
];
