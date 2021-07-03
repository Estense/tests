import { capitalize } from '../src/capitalize.js';
import assert from 'assert';

assert.strictEqual(capitalize('hello'), 'Hello')
assert.strictEqual(capitalize(''), '')

console.log('Все тесты пройдены!');
