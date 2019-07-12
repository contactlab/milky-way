import {borderColor} from '../commons/attributes';
import {MjmlDivider} from 'mjml-react';
import * as React from 'react';

export function Divider(): JSX.Element {
  return <MjmlDivider borderWidth="1px" borderColor={borderColor} />;
}
