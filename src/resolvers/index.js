import { mergeResolvers } from 'merge-graphql-schemas'

import Category from './category'
import Compatibility from './compatibility'
import Measure from './measure'
import Movement from './movement'
import Product from './product'
import User from './user'

const resolvers = [Category, Compatibility, Measure, Movement, Product, User]

export default mergeResolvers(resolvers)