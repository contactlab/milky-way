import {readFileSync} from 'fs';
import {join} from 'path';
import {DATA_DIR} from '../config';

interface DataProps {
  firstName: string;
  username: string;
  password: string;
  pin: string | number;
}

export function getData(): DataProps {
  const data = readFileSync(join(DATA_DIR, 'mock.json')).toString();
  return JSON.parse(data);
}
