// first, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'

import banner from './banner'

//then we give our schema to the builder and provide the result to sanity
export default createSchema({
  // we name our schema
  name: 'default',
  // then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    product,
    banner,
  ]),
})
