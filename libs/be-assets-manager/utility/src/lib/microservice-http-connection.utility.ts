const getAssetsManagerHTTPConnectionURLString = () => {
  if (!process.env.BE_ASSETS_MANAGER_HOST) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_HOST' env variable");
  }
  if (!process.env.BE_ASSETS_MANAGER_HTTP_PORT) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_HTTP_PORT' env variable");
  }
  const url = new URL(`${process.env.BE_ASSETS_MANAGER_HOST}:${process.env.BE_ASSETS_MANAGER_HTTP_PORT}`);
  return url.toString();
};

export { getAssetsManagerHTTPConnectionURLString };
