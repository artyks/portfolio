const getStreamName = (domainName: string, entityId: string) => {
  return `${domainName}-${entityId}`;
};

export { getStreamName };
