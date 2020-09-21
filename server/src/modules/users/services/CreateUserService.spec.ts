import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createuser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createuser.execute({
      name: 'John Doe',
      email: 'Johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with an email already created', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createuser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createuser.execute({
      name: 'John Doe',
      email: 'Johndoe@example.com',
      password: '123456',
    });

    await expect(
      createuser.execute({
        name: 'John Doe',
        email: 'Johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
