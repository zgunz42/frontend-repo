import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import CardItem, { CardItemProps } from './CardItem';

export type CardListProps = {
    users: CardItemProps[]
};

export default function CardList({users}: CardListProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {users.map((user, k) => (
            <>
          <CardItem key={user.name} {...user} />
          {k !== users.length - 1 && <Divider variant="inset" component="li" />}
          </>
        ))}
    </List>
  );
}
