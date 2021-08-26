/* eslint-disable no-param-reassign */
import { User } from '../entities/User';

interface UserInput {
  data: {
    name: string;
    email: string;
    city?: string;
  }
}

const userResolver = {
  Query: {
    users: async () => {
      const users = await User.find();

      return users;
    },

    user: async (_, id: string) => {
      const user = await User.findOne(id);

      return user;
    },
  },

  Mutation: {
    createUser: async (_, { data }: UserInput) => {
      const user = User.create(data);

      await User.save(user);

      return user;
    },
  },
};

export { userResolver };
