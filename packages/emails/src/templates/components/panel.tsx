import {MjmlColumn, MjmlSection} from 'mjml-react';
import * as React from 'react';
import {bgColor, panelBorderLeft, panelPadding} from '../commons/attributes';
import {Text} from './text';

interface PanelProps {
  source: {
    key: string;
    value: string;
  };
}

export function Panel(props: PanelProps): JSX.Element {
  const {source} = props;

  return (
    <MjmlSection
      {...panelPadding}
      backgroundColor={bgColor}
      borderLeft={panelBorderLeft}
    >
      <MjmlColumn>
        <Text type="caption" padding={0}>
          {source.key}
        </Text>

        <Text type="paragraph" padding={0} fontWeight={700}>
          {source.value}
        </Text>
      </MjmlColumn>
    </MjmlSection>
  );
}
