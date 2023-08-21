import {MjmlColumn, MjmlSection} from '@faire/mjml-react';
import type {FC} from 'react';
import {BG_COLOR, PRIMARY_COLOR} from '../shared';
import {Text} from './text';

interface PanelProps {
  source: {
    key: string;
    value: string;
  };
}

export const Panel: FC<PanelProps> = ({source}) => (
  <MjmlSection
    paddingTop={10}
    paddingRight={25}
    paddingBottom={10}
    paddingLeft={25}
    backgroundColor={BG_COLOR}
    borderLeft={`4px solid ${PRIMARY_COLOR}`}
  >
    <MjmlColumn>
      <Text type="caption" padding={0}>
        {source.key}
      </Text>

      <Text type="paragraph" padding={0} fontWeight="700">
        {source.value}
      </Text>
    </MjmlColumn>
  </MjmlSection>
);
