import {MjmlDivider} from 'mjml-react';
import * as React from 'react';
import {borderColor} from '../commons/attributes';

export function Divider(): JSX.Element {
  return <MjmlDivider borderWidth="1px" borderColor={borderColor} />;
}
