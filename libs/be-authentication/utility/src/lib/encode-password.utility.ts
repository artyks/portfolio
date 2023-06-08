import * as bcrypt from 'bcrypt';

const encodePassword = (password: string) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
};

export { encodePassword };
