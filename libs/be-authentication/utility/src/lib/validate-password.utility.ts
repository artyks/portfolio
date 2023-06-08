import * as bcrypt from 'bcrypt';

const validatePassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export { validatePassword };
