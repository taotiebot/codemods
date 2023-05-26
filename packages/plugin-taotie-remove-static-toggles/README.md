# plugin-taotie-remove-static-toggles

> Putout plugin for removing simple static file based feature toggles

## Getting Started

Specify the toggle name when running plugins `TAOTIE_FEATURE_TOGGLE_NAME`

## Testing Locally

Run the following to test with the `test/fixtures`,

```sh
TAOTIE_FEATURE_TOGGLE_NAME="featureFlag" putout test/fixtures/remove-simple-if-flags.ts --rulesdir packages/plugin-taotie-remove-static-toggles/lib --fix
```
