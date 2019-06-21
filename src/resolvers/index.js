import { mergeResolvers } from 'merge-graphql-schemas'

import Category from './category'
import Movement from './movement'
import Product from './product'
import User from './user'
import Inventory from './inventory'

const resolvers = [Category, Movement, Product, User, Inventory]

export default mergeResolvers(resolvers)