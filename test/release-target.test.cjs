const assert = require('node:assert/strict');
const test = require('node:test');

const { GetReleaseTarget } = require('../src/release-target.cjs');

test('Slave source is ready to be released', () =>
{
    assert.deepEqual(GetReleaseTarget(), {
        component: 'core',
        ready: true
    });
});
