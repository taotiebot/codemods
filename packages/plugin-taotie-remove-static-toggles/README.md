# [plugin-taotie-remove-static-toggles](https://github.com/taotiebot/codemods/tree/develop/packages/plugin-taotie-remove-static-toggles) ![Package version](https://img.shields.io/github/package-json/v/taotiebot/codemods?filename=packages%2Fplugin-taotie-remove-static-toggles%2Fpackage.json\&label=%20\&color=0080FF) [![NPM version](https://img.shields.io/npm/v/putout-plugin-taotie-remove-static-toggles?label=\&logo=npm\&color=CB0001)](https://www.npmjs.com/package/putout-plugin-taotie-remove-static-toggles)

> 🐊 Putout plugin for removing simple static file based feature toggles

Taotie Proof of concept plugin for static toggles removal.

## Installation

Install static toggle removal plugin `putout-plugin-taotie-remove-static-toggles`:

```sh
yarn add -D putout-plugin-taotie-remove-static-toggles
```

## Usage

Specify the toggle name when running plugins `TAOTIE_FEATURE_TOGGLE_NAME`

## Development

Run the following to test with the `test/fixtures`,

```sh
TAOTIE_FEATURE_TOGGLE_NAME="featureFlag" putout test/fixtures/remove-simple-if-flags.ts --rulesdir packages/plugin-taotie-remove-static-toggles/lib --fix
```
