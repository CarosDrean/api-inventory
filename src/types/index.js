import { mergeTypes } from 'merge-graphql-schemas'

import Category from './category'
import Movement from './movement'
import Product from './product'
import User from './user'
import Inventory from './inventory'

const typeDefs = [Category, Movement, Product, User, Inventory]

export default mergeTypes(typeDefs, { all: true })