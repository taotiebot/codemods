'use strict'

const featureFlag = process.env.TAOTIE_FEATURE_TOGGLE_NAME

if (!featureFlag) {
  throw Error(
    `No feature toggle name found. Specify the toggle name using 'TAOTIE_FEATURE_TOGGLE_NAME' env variable.`
  )
}

module.exports.report = () => `Remove status 'if' toggles`

module.exports.match = () => ({
  'if (!__a) __b; else __c': featureFlagIdentifier,
  'if (__a) __b; else __c': featureFlagIdentifier
})

module.exports.replace = () => ({
  'if (!__a) __b; else __c': '__c',
  'if (__a) __b; else __c': '__b'
})

const featureFlagIdentifier = ({ __a }, path) => {
  // Don't replace complex logical expressions
  if (__a.type === 'LogicalExpression') return

  // Replace context expression
  // context.fflag.<featureFlag>
  if (__a.type === 'MemberExpression' && __a.property.name !== featureFlag)
    return

  // Skip flags which is not the specified feature flag
  if (__a.type === 'Identifier' && __a.name !== featureFlag) return

  return path
}
