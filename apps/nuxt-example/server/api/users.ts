import prismaClient from 'db';

export default defineEventHandler(async () => {
  const users = await prismaClient.user.findMany();
  return {
    users,
  };
});
