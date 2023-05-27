import {featureFlag, f1, f2} from './common';

const context = {
    featureFlag: true,
    fflag: {
        featureFlag: true,
    },
};

// If feature flag is true
{
    f1();
}
// If feature flag is false
{
    f2();
}
// If conditional doesn't have a block wrapper
f1();

// if and else without block wrapper
f2();

// If there are multiple statements inside the block
{
    f1();
    f2();
    f1();
}
// If there are multiple statements inside the block (inverse)
{
    f2();
    f1();
}
// If feature flag within context
{
    f1();
}
// If feature flag within multiple context
{
    f1();
}
// If feature flag within context (inverse)
{
    f2();
}
// If feature flag within multiple context (inverse)
{
    f2();
}
