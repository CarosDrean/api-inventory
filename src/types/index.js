import { mergeTypes } from 'merge-graphql-schemas'

import Category from './category'
import Compatibility from './compatibility'
import Measure from './measure'
import Movement from './movement'
import Product from './product'
import User from './user'
import Inventory from './inventory'

const typeDefs = [Category, Compatibility, Measure, Movement, Product, User, Inventory]

export default mergeTypes(typeDefs, { all: true })