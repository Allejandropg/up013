import React from 'react';
import { Input } from '@rocketseat/unform';

// import { Container } from './styles';

import { strengthIndicator, strengthColor } from '~/utils/strong-password';

export default function PassInput(props) {
  const strength = strengthIndicator(props.value);
  const color = strengthColor(strength);

  return (
    <Input
      type="password"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handleChanges}
      style={{
        borderColor: color,
      }}
      name={props.name}
    />
  );
}
