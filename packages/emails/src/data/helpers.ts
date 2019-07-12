import {readFileSync} from 'fs';
import {resolve} from 'path';

const root = resolve(__dirname, '..', '..');
const dataDir = resolve(root, 'src', 'data');

interface DataProps {
  firstName: string;
  username: string;
  password: string;
  pin: string | number;
}

export function getData(): DataProps {
  const data = readFileSync(resolve(dataDir, 'mock.json')).toString();
  return JSON.parse(data);
}
