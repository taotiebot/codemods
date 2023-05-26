'use strict';

const {createTest} = require('@putout/test');
const removeStaticToggles = require('..');

const test = createTest(__dirname, {
    printer: 'putout',
    plugins: [
        ['taotie-remove-static-toggles', removeStaticToggles],
    ],
});

test('plugin-taotie-remove-static-toggles: report', (t) => {
    t.report('simple-if', `Remove status 'if' toggles`);
    t.end();
});

test('plugin-taotie-remove-static-toggles: transform', (t) => {
    t.transform('simple-if');
    t.end();
});
