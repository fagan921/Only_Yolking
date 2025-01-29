import { User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';
import { GraphQLError } from 'graphql';

const resolvers = {
  Query: {
    
    getSingleUser: async (_parent: any, _args: any, context: any) => {
      if (context?.user) {
        const foundUser = await User.findOne({ _id: context.user._id });
        if (!foundUser) {
          throw new GraphQLError("User does not exist!")
        }
        return foundUser;
      } else {
        throw new AuthenticationError('Could not authenticate user.');
        throw new GraphQLError("auth error")
      }
    },
  },

  Mutation: {
    createUser: async (
      _parent: any,
      args: { username: string; email: string; password: string },
      _context: any
    ) => {
      const user = await User.create(args);
      if (!user) {
        return null;
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },

    login: async (
      _parent: any,
      args: { email: string; password: string },
      _context: any
    ) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new GraphQLError("User does not exist!")
      }
      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) {
        return null;
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },

    // addThought: async (_parent: any, { input }: AddThoughtArgs, context: any) => {
    //   if (context.user) {
    //     const thought = await Thought.create({ ...input });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { thoughts: thought._id } }
    //     );

    //     return thought;
    //   }
    //   throw AuthenticationError;
    //   ('You need to be logged in!');
    // },
  },
};

export default resolvers;