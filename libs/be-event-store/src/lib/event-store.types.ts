type DomainEvent<Type extends string, Data extends Record<string, unknown>> = {
  type: Type;
  data: Data;
};

export type { DomainEvent };
