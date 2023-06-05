/**
 * Replace all non-alphanumeric characters and whitespaces with underscores
 * Make codename unique by appending a random string
 */
const generateCodename = (name: string) => {
  const safeName = name.replace(/[^a-zA-Z0-9]/g, '_').replace(/\s/g, '_');
  const randomiser = crypto.randomUUID().substring(-12);
  return `${safeName}_${randomiser}`;
};

export { generateCodename };
