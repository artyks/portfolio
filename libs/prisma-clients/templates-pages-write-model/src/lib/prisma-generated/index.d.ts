/**
 * Client
 **/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P;
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends Prisma.PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>;
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;

/**
 * Model Template
 *
 */
export type Template = {
  id: string;
  name: string;
  codename: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model TemplateElement
 *
 */
export type TemplateElement = {
  id: string;
  name: string;
  codename: string;
  type: string;
  templateId: string;
  prevElementId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model Page
 *
 */
export type Page = {
  id: string;
  workflow: string;
  name: string;
  codename: string;
  templateId: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Model PageElement
 *
 */
export type PageElement = {
  id: string;
  templateElementId: string;
  value: string;
  pageId: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Templates
 * const templates = await prisma.template.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  GlobalReject extends
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined = 'rejectOnNotFound' extends keyof T ? T['rejectOnNotFound'] : false,
> {
  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Templates
   * const templates = await prisma.template.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U | 'beforeExit'>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): Promise<UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<this, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>) => Promise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): Promise<R>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Templates
   * const templates = await prisma.template.findMany()
   * ```
   */
  get template(): Prisma.TemplateDelegate<GlobalReject>;

  /**
   * `prisma.templateElement`: Exposes CRUD operations for the **TemplateElement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TemplateElements
   * const templateElements = await prisma.templateElement.findMany()
   * ```
   */
  get templateElement(): Prisma.TemplateElementDelegate<GlobalReject>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Pages
   * const pages = await prisma.page.findMany()
   * ```
   */
  get page(): Prisma.PageDelegate<GlobalReject>;

  /**
   * `prisma.pageElement`: Exposes CRUD operations for the **PageElement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PageElements
   * const pageElements = await prisma.pageElement.findMany()
   * ```
   */
  get pageElement(): Prisma.PageElementDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    Template: 'Template';
    TemplateElement: 'TemplateElement';
    Page: 'Page';
    PageElement: 'PageElement';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  export type DefaultPrismaClient = PrismaClient;
  export type RejectOnNotFound = boolean | ((error: Error) => Error);
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound };
  export type RejectPerOperation = { [P in 'findUnique' | 'findFirst']?: RejectPerModel | RejectOnNotFound };
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False;
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName,
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>;
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    elements: number;
    pages: number;
  };

  export type TemplateCountOutputTypeSelect = {
    elements?: boolean;
    pages?: boolean;
  };

  export type TemplateCountOutputTypeGetPayload<S extends boolean | null | undefined | TemplateCountOutputTypeArgs> =
    S extends { select: any; include: any }
      ? 'Please either choose `select` or `include`'
      : S extends true
      ? TemplateCountOutputType
      : S extends undefined
      ? never
      : S extends { include: any } & TemplateCountOutputTypeArgs
      ? TemplateCountOutputType
      : S extends { select: any } & TemplateCountOutputTypeArgs
      ? {
          [P in TruthyKeys<S['select']>]: P extends keyof TemplateCountOutputType ? TemplateCountOutputType[P] : never;
        }
      : TemplateCountOutputType;

  // Custom InputTypes

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect | null;
  };

  /**
   * Count Type TemplateElementCountOutputType
   */

  export type TemplateElementCountOutputType = {
    pageElement: number;
  };

  export type TemplateElementCountOutputTypeSelect = {
    pageElement?: boolean;
  };

  export type TemplateElementCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TemplateElementCountOutputTypeArgs,
  > = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? TemplateElementCountOutputType
    : S extends undefined
    ? never
    : S extends { include: any } & TemplateElementCountOutputTypeArgs
    ? TemplateElementCountOutputType
    : S extends { select: any } & TemplateElementCountOutputTypeArgs
    ? {
        [P in TruthyKeys<S['select']>]: P extends keyof TemplateElementCountOutputType
          ? TemplateElementCountOutputType[P]
          : never;
      }
    : TemplateElementCountOutputType;

  // Custom InputTypes

  /**
   * TemplateElementCountOutputType without action
   */
  export type TemplateElementCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TemplateElementCountOutputType
     */
    select?: TemplateElementCountOutputTypeSelect | null;
  };

  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    elements: number;
  };

  export type PageCountOutputTypeSelect = {
    elements?: boolean;
  };

  export type PageCountOutputTypeGetPayload<S extends boolean | null | undefined | PageCountOutputTypeArgs> =
    S extends { select: any; include: any }
      ? 'Please either choose `select` or `include`'
      : S extends true
      ? PageCountOutputType
      : S extends undefined
      ? never
      : S extends { include: any } & PageCountOutputTypeArgs
      ? PageCountOutputType
      : S extends { select: any } & PageCountOutputTypeArgs
      ? {
          [P in TruthyKeys<S['select']>]: P extends keyof PageCountOutputType ? PageCountOutputType[P] : never;
        }
      : PageCountOutputType;

  // Custom InputTypes

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect | null;
  };

  /**
   * Models
   */

  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null;
    _min: TemplateMinAggregateOutputType | null;
    _max: TemplateMaxAggregateOutputType | null;
  };

  export type TemplateMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    codename: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TemplateMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    codename: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TemplateCountAggregateOutputType = {
    id: number;
    name: number;
    codename: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TemplateMinAggregateInputType = {
    id?: true;
    name?: true;
    codename?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TemplateMaxAggregateInputType = {
    id?: true;
    name?: true;
    codename?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TemplateCountAggregateInputType = {
    id?: true;
    name?: true;
    codename?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TemplateAggregateArgs = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Templates
     **/
    _count?: true | TemplateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TemplateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TemplateMaxAggregateInputType;
  };

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>;
  };

  export type TemplateGroupByArgs = {
    where?: TemplateWhereInput;
    orderBy?: Enumerable<TemplateOrderByWithAggregationInput>;
    by: TemplateScalarFieldEnum[];
    having?: TemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemplateCountAggregateInputType | true;
    _min?: TemplateMinAggregateInputType;
    _max?: TemplateMaxAggregateInputType;
  };

  export type TemplateGroupByOutputType = {
    id: string;
    name: string;
    codename: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TemplateCountAggregateOutputType | null;
    _min: TemplateMinAggregateOutputType | null;
    _max: TemplateMaxAggregateOutputType | null;
  };

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TemplateGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TemplateGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
          : GetScalarType<T[P], TemplateGroupByOutputType[P]>;
      }
    >
  >;

  export type TemplateSelect = {
    id?: boolean;
    name?: boolean;
    codename?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    elements?: boolean | Template$elementsArgs;
    pages?: boolean | Template$pagesArgs;
    _count?: boolean | TemplateCountOutputTypeArgs;
  };

  export type TemplateInclude = {
    elements?: boolean | Template$elementsArgs;
    pages?: boolean | Template$pagesArgs;
    _count?: boolean | TemplateCountOutputTypeArgs;
  };

  export type TemplateGetPayload<S extends boolean | null | undefined | TemplateArgs> = S extends {
    select: any;
    include: any;
  }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? Template
    : S extends undefined
    ? never
    : S extends { include: any } & (TemplateArgs | TemplateFindManyArgs)
    ? Template & {
        [P in TruthyKeys<S['include']>]: P extends 'elements'
          ? Array<TemplateElementGetPayload<S['include'][P]>>
          : P extends 'pages'
          ? Array<PageGetPayload<S['include'][P]>>
          : P extends '_count'
          ? TemplateCountOutputTypeGetPayload<S['include'][P]>
          : never;
      }
    : S extends { select: any } & (TemplateArgs | TemplateFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'elements'
          ? Array<TemplateElementGetPayload<S['select'][P]>>
          : P extends 'pages'
          ? Array<PageGetPayload<S['select'][P]>>
          : P extends '_count'
          ? TemplateCountOutputTypeGetPayload<S['select'][P]>
          : P extends keyof Template
          ? Template[P]
          : never;
      }
    : Template;

  type TemplateCountArgs = Omit<TemplateFindManyArgs, 'select' | 'include'> & {
    select?: TemplateCountAggregateInputType | true;
  };

  export interface TemplateDelegate<
    GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined,
  > {
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends TemplateFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args: SelectSubset<T, TemplateFindUniqueArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Template'> extends True
      ? Prisma__TemplateClient<TemplateGetPayload<T>>
      : Prisma__TemplateClient<TemplateGetPayload<T> | null, null>;

    /**
     * Find one Template that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TemplateFindUniqueOrThrowArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T>>;

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends TemplateFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args?: SelectSubset<T, TemplateFindFirstArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Template'> extends True
      ? Prisma__TemplateClient<TemplateGetPayload<T>>
      : Prisma__TemplateClient<TemplateGetPayload<T> | null, null>;

    /**
     * Find the first Template that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TemplateFindFirstOrThrowArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T>>;

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     *
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TemplateFindManyArgs>(
      args?: SelectSubset<T, TemplateFindManyArgs>,
    ): Prisma.PrismaPromise<Array<TemplateGetPayload<T>>>;

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     *
     **/
    create<T extends TemplateCreateArgs>(
      args: SelectSubset<T, TemplateCreateArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T>>;

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     *
     **/
    delete<T extends TemplateDeleteArgs>(
      args: SelectSubset<T, TemplateDeleteArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T>>;

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TemplateUpdateArgs>(
      args: SelectSubset<T, TemplateUpdateArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T>>;

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TemplateDeleteManyArgs>(
      args?: SelectSubset<T, TemplateDeleteManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TemplateUpdateManyArgs>(
      args: SelectSubset<T, TemplateUpdateManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     **/
    upsert<T extends TemplateUpsertArgs>(
      args: SelectSubset<T, TemplateUpsertArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T>>;

    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
     **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TemplateAggregateArgs>(
      args: Subset<T, TemplateAggregateArgs>,
    ): Prisma.PrismaPromise<GetTemplateAggregateType<T>>;

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TemplateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    elements<T extends Template$elementsArgs = {}>(
      args?: Subset<T, Template$elementsArgs>,
    ): Prisma.PrismaPromise<Array<TemplateElementGetPayload<T>> | Null>;

    pages<T extends Template$pagesArgs = {}>(
      args?: Subset<T, Template$pagesArgs>,
    ): Prisma.PrismaPromise<Array<PageGetPayload<T>> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Template base type for findUnique actions
   */
  export type TemplateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput;
  };

  /**
   * Template findUnique
   */
  export interface TemplateFindUniqueArgs extends TemplateFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput;
  };

  /**
   * Template base type for findFirst actions
   */
  export type TemplateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Templates.
     */
    distinct?: Enumerable<TemplateScalarFieldEnum>;
  };

  /**
   * Template findFirst
   */
  export interface TemplateFindFirstArgs extends TemplateFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Templates.
     */
    distinct?: Enumerable<TemplateScalarFieldEnum>;
  };

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Templates to fetch.
     */
    orderBy?: Enumerable<TemplateOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Templates.
     */
    skip?: number;
    distinct?: Enumerable<TemplateScalarFieldEnum>;
  };

  /**
   * Template create
   */
  export type TemplateCreateArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>;
  };

  /**
   * Template update
   */
  export type TemplateUpdateArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>;
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput;
  };

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>;
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput;
  };

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput;
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>;
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>;
  };

  /**
   * Template delete
   */
  export type TemplateDeleteArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput;
  };

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput;
  };

  /**
   * Template.elements
   */
  export type Template$elementsArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    where?: TemplateElementWhereInput;
    orderBy?: Enumerable<TemplateElementOrderByWithRelationInput>;
    cursor?: TemplateElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<TemplateElementScalarFieldEnum>;
  };

  /**
   * Template.pages
   */
  export type Template$pagesArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    where?: PageWhereInput;
    orderBy?: Enumerable<PageOrderByWithRelationInput>;
    cursor?: PageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<PageScalarFieldEnum>;
  };

  /**
   * Template without action
   */
  export type TemplateArgs = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateInclude | null;
  };

  /**
   * Model TemplateElement
   */

  export type AggregateTemplateElement = {
    _count: TemplateElementCountAggregateOutputType | null;
    _min: TemplateElementMinAggregateOutputType | null;
    _max: TemplateElementMaxAggregateOutputType | null;
  };

  export type TemplateElementMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    codename: string | null;
    type: string | null;
    templateId: string | null;
    prevElementId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TemplateElementMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    codename: string | null;
    type: string | null;
    templateId: string | null;
    prevElementId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TemplateElementCountAggregateOutputType = {
    id: number;
    name: number;
    codename: number;
    type: number;
    templateId: number;
    prevElementId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TemplateElementMinAggregateInputType = {
    id?: true;
    name?: true;
    codename?: true;
    type?: true;
    templateId?: true;
    prevElementId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TemplateElementMaxAggregateInputType = {
    id?: true;
    name?: true;
    codename?: true;
    type?: true;
    templateId?: true;
    prevElementId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TemplateElementCountAggregateInputType = {
    id?: true;
    name?: true;
    codename?: true;
    type?: true;
    templateId?: true;
    prevElementId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TemplateElementAggregateArgs = {
    /**
     * Filter which TemplateElement to aggregate.
     */
    where?: TemplateElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TemplateElements to fetch.
     */
    orderBy?: Enumerable<TemplateElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TemplateElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TemplateElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TemplateElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TemplateElements
     **/
    _count?: true | TemplateElementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TemplateElementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TemplateElementMaxAggregateInputType;
  };

  export type GetTemplateElementAggregateType<T extends TemplateElementAggregateArgs> = {
    [P in keyof T & keyof AggregateTemplateElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateElement[P]>
      : GetScalarType<T[P], AggregateTemplateElement[P]>;
  };

  export type TemplateElementGroupByArgs = {
    where?: TemplateElementWhereInput;
    orderBy?: Enumerable<TemplateElementOrderByWithAggregationInput>;
    by: TemplateElementScalarFieldEnum[];
    having?: TemplateElementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TemplateElementCountAggregateInputType | true;
    _min?: TemplateElementMinAggregateInputType;
    _max?: TemplateElementMaxAggregateInputType;
  };

  export type TemplateElementGroupByOutputType = {
    id: string;
    name: string;
    codename: string;
    type: string;
    templateId: string;
    prevElementId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TemplateElementCountAggregateOutputType | null;
    _min: TemplateElementMinAggregateOutputType | null;
    _max: TemplateElementMaxAggregateOutputType | null;
  };

  type GetTemplateElementGroupByPayload<T extends TemplateElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TemplateElementGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TemplateElementGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TemplateElementGroupByOutputType[P]>
          : GetScalarType<T[P], TemplateElementGroupByOutputType[P]>;
      }
    >
  >;

  export type TemplateElementSelect = {
    id?: boolean;
    name?: boolean;
    codename?: boolean;
    type?: boolean;
    templateId?: boolean;
    prevElementId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pageElement?: boolean | TemplateElement$pageElementArgs;
    template?: boolean | TemplateArgs;
    prevElement?: boolean | TemplateElementArgs;
    nextElement?: boolean | TemplateElementArgs;
    _count?: boolean | TemplateElementCountOutputTypeArgs;
  };

  export type TemplateElementInclude = {
    pageElement?: boolean | TemplateElement$pageElementArgs;
    template?: boolean | TemplateArgs;
    prevElement?: boolean | TemplateElementArgs;
    nextElement?: boolean | TemplateElementArgs;
    _count?: boolean | TemplateElementCountOutputTypeArgs;
  };

  export type TemplateElementGetPayload<S extends boolean | null | undefined | TemplateElementArgs> = S extends {
    select: any;
    include: any;
  }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? TemplateElement
    : S extends undefined
    ? never
    : S extends { include: any } & (TemplateElementArgs | TemplateElementFindManyArgs)
    ? TemplateElement & {
        [P in TruthyKeys<S['include']>]: P extends 'pageElement'
          ? Array<PageElementGetPayload<S['include'][P]>>
          : P extends 'template'
          ? TemplateGetPayload<S['include'][P]>
          : P extends 'prevElement'
          ? TemplateElementGetPayload<S['include'][P]> | null
          : P extends 'nextElement'
          ? TemplateElementGetPayload<S['include'][P]> | null
          : P extends '_count'
          ? TemplateElementCountOutputTypeGetPayload<S['include'][P]>
          : never;
      }
    : S extends { select: any } & (TemplateElementArgs | TemplateElementFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'pageElement'
          ? Array<PageElementGetPayload<S['select'][P]>>
          : P extends 'template'
          ? TemplateGetPayload<S['select'][P]>
          : P extends 'prevElement'
          ? TemplateElementGetPayload<S['select'][P]> | null
          : P extends 'nextElement'
          ? TemplateElementGetPayload<S['select'][P]> | null
          : P extends '_count'
          ? TemplateElementCountOutputTypeGetPayload<S['select'][P]>
          : P extends keyof TemplateElement
          ? TemplateElement[P]
          : never;
      }
    : TemplateElement;

  type TemplateElementCountArgs = Omit<TemplateElementFindManyArgs, 'select' | 'include'> & {
    select?: TemplateElementCountAggregateInputType | true;
  };

  export interface TemplateElementDelegate<
    GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined,
  > {
    /**
     * Find zero or one TemplateElement that matches the filter.
     * @param {TemplateElementFindUniqueArgs} args - Arguments to find a TemplateElement
     * @example
     * // Get one TemplateElement
     * const templateElement = await prisma.templateElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends TemplateElementFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args: SelectSubset<T, TemplateElementFindUniqueArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TemplateElement'> extends True
      ? Prisma__TemplateElementClient<TemplateElementGetPayload<T>>
      : Prisma__TemplateElementClient<TemplateElementGetPayload<T> | null, null>;

    /**
     * Find one TemplateElement that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {TemplateElementFindUniqueOrThrowArgs} args - Arguments to find a TemplateElement
     * @example
     * // Get one TemplateElement
     * const templateElement = await prisma.templateElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends TemplateElementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TemplateElementFindUniqueOrThrowArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T>>;

    /**
     * Find the first TemplateElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementFindFirstArgs} args - Arguments to find a TemplateElement
     * @example
     * // Get one TemplateElement
     * const templateElement = await prisma.templateElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends TemplateElementFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args?: SelectSubset<T, TemplateElementFindFirstArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TemplateElement'> extends True
      ? Prisma__TemplateElementClient<TemplateElementGetPayload<T>>
      : Prisma__TemplateElementClient<TemplateElementGetPayload<T> | null, null>;

    /**
     * Find the first TemplateElement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementFindFirstOrThrowArgs} args - Arguments to find a TemplateElement
     * @example
     * // Get one TemplateElement
     * const templateElement = await prisma.templateElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends TemplateElementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TemplateElementFindFirstOrThrowArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T>>;

    /**
     * Find zero or more TemplateElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateElements
     * const templateElements = await prisma.templateElement.findMany()
     *
     * // Get first 10 TemplateElements
     * const templateElements = await prisma.templateElement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const templateElementWithIdOnly = await prisma.templateElement.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends TemplateElementFindManyArgs>(
      args?: SelectSubset<T, TemplateElementFindManyArgs>,
    ): Prisma.PrismaPromise<Array<TemplateElementGetPayload<T>>>;

    /**
     * Create a TemplateElement.
     * @param {TemplateElementCreateArgs} args - Arguments to create a TemplateElement.
     * @example
     * // Create one TemplateElement
     * const TemplateElement = await prisma.templateElement.create({
     *   data: {
     *     // ... data to create a TemplateElement
     *   }
     * })
     *
     **/
    create<T extends TemplateElementCreateArgs>(
      args: SelectSubset<T, TemplateElementCreateArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T>>;

    /**
     * Delete a TemplateElement.
     * @param {TemplateElementDeleteArgs} args - Arguments to delete one TemplateElement.
     * @example
     * // Delete one TemplateElement
     * const TemplateElement = await prisma.templateElement.delete({
     *   where: {
     *     // ... filter to delete one TemplateElement
     *   }
     * })
     *
     **/
    delete<T extends TemplateElementDeleteArgs>(
      args: SelectSubset<T, TemplateElementDeleteArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T>>;

    /**
     * Update one TemplateElement.
     * @param {TemplateElementUpdateArgs} args - Arguments to update one TemplateElement.
     * @example
     * // Update one TemplateElement
     * const templateElement = await prisma.templateElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends TemplateElementUpdateArgs>(
      args: SelectSubset<T, TemplateElementUpdateArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T>>;

    /**
     * Delete zero or more TemplateElements.
     * @param {TemplateElementDeleteManyArgs} args - Arguments to filter TemplateElements to delete.
     * @example
     * // Delete a few TemplateElements
     * const { count } = await prisma.templateElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends TemplateElementDeleteManyArgs>(
      args?: SelectSubset<T, TemplateElementDeleteManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TemplateElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateElements
     * const templateElement = await prisma.templateElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends TemplateElementUpdateManyArgs>(
      args: SelectSubset<T, TemplateElementUpdateManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one TemplateElement.
     * @param {TemplateElementUpsertArgs} args - Arguments to update or create a TemplateElement.
     * @example
     * // Update or create a TemplateElement
     * const templateElement = await prisma.templateElement.upsert({
     *   create: {
     *     // ... data to create a TemplateElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateElement we want to update
     *   }
     * })
     **/
    upsert<T extends TemplateElementUpsertArgs>(
      args: SelectSubset<T, TemplateElementUpsertArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T>>;

    /**
     * Count the number of TemplateElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementCountArgs} args - Arguments to filter TemplateElements to count.
     * @example
     * // Count the number of TemplateElements
     * const count = await prisma.templateElement.count({
     *   where: {
     *     // ... the filter for the TemplateElements we want to count
     *   }
     * })
     **/
    count<T extends TemplateElementCountArgs>(
      args?: Subset<T, TemplateElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateElementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TemplateElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TemplateElementAggregateArgs>(
      args: Subset<T, TemplateElementAggregateArgs>,
    ): Prisma.PrismaPromise<GetTemplateElementAggregateType<T>>;

    /**
     * Group by TemplateElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TemplateElementGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateElementGroupByArgs['orderBy'] }
        : { orderBy?: TemplateElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, TemplateElementGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTemplateElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TemplateElementClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    pageElement<T extends TemplateElement$pageElementArgs = {}>(
      args?: Subset<T, TemplateElement$pageElementArgs>,
    ): Prisma.PrismaPromise<Array<PageElementGetPayload<T>> | Null>;

    template<T extends TemplateArgs = {}>(
      args?: Subset<T, TemplateArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T> | Null>;

    prevElement<T extends TemplateElementArgs = {}>(
      args?: Subset<T, TemplateElementArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T> | Null>;

    nextElement<T extends TemplateElementArgs = {}>(
      args?: Subset<T, TemplateElementArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TemplateElement base type for findUnique actions
   */
  export type TemplateElementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * Filter, which TemplateElement to fetch.
     */
    where: TemplateElementWhereUniqueInput;
  };

  /**
   * TemplateElement findUnique
   */
  export interface TemplateElementFindUniqueArgs extends TemplateElementFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * TemplateElement findUniqueOrThrow
   */
  export type TemplateElementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * Filter, which TemplateElement to fetch.
     */
    where: TemplateElementWhereUniqueInput;
  };

  /**
   * TemplateElement base type for findFirst actions
   */
  export type TemplateElementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * Filter, which TemplateElement to fetch.
     */
    where?: TemplateElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TemplateElements to fetch.
     */
    orderBy?: Enumerable<TemplateElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TemplateElements.
     */
    cursor?: TemplateElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TemplateElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TemplateElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TemplateElements.
     */
    distinct?: Enumerable<TemplateElementScalarFieldEnum>;
  };

  /**
   * TemplateElement findFirst
   */
  export interface TemplateElementFindFirstArgs extends TemplateElementFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * TemplateElement findFirstOrThrow
   */
  export type TemplateElementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * Filter, which TemplateElement to fetch.
     */
    where?: TemplateElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TemplateElements to fetch.
     */
    orderBy?: Enumerable<TemplateElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TemplateElements.
     */
    cursor?: TemplateElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TemplateElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TemplateElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TemplateElements.
     */
    distinct?: Enumerable<TemplateElementScalarFieldEnum>;
  };

  /**
   * TemplateElement findMany
   */
  export type TemplateElementFindManyArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * Filter, which TemplateElements to fetch.
     */
    where?: TemplateElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TemplateElements to fetch.
     */
    orderBy?: Enumerable<TemplateElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TemplateElements.
     */
    cursor?: TemplateElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TemplateElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TemplateElements.
     */
    skip?: number;
    distinct?: Enumerable<TemplateElementScalarFieldEnum>;
  };

  /**
   * TemplateElement create
   */
  export type TemplateElementCreateArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * The data needed to create a TemplateElement.
     */
    data: XOR<TemplateElementCreateInput, TemplateElementUncheckedCreateInput>;
  };

  /**
   * TemplateElement update
   */
  export type TemplateElementUpdateArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * The data needed to update a TemplateElement.
     */
    data: XOR<TemplateElementUpdateInput, TemplateElementUncheckedUpdateInput>;
    /**
     * Choose, which TemplateElement to update.
     */
    where: TemplateElementWhereUniqueInput;
  };

  /**
   * TemplateElement updateMany
   */
  export type TemplateElementUpdateManyArgs = {
    /**
     * The data used to update TemplateElements.
     */
    data: XOR<TemplateElementUpdateManyMutationInput, TemplateElementUncheckedUpdateManyInput>;
    /**
     * Filter which TemplateElements to update
     */
    where?: TemplateElementWhereInput;
  };

  /**
   * TemplateElement upsert
   */
  export type TemplateElementUpsertArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * The filter to search for the TemplateElement to update in case it exists.
     */
    where: TemplateElementWhereUniqueInput;
    /**
     * In case the TemplateElement found by the `where` argument doesn't exist, create a new TemplateElement with this data.
     */
    create: XOR<TemplateElementCreateInput, TemplateElementUncheckedCreateInput>;
    /**
     * In case the TemplateElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateElementUpdateInput, TemplateElementUncheckedUpdateInput>;
  };

  /**
   * TemplateElement delete
   */
  export type TemplateElementDeleteArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
    /**
     * Filter which TemplateElement to delete.
     */
    where: TemplateElementWhereUniqueInput;
  };

  /**
   * TemplateElement deleteMany
   */
  export type TemplateElementDeleteManyArgs = {
    /**
     * Filter which TemplateElements to delete
     */
    where?: TemplateElementWhereInput;
  };

  /**
   * TemplateElement.pageElement
   */
  export type TemplateElement$pageElementArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    where?: PageElementWhereInput;
    orderBy?: Enumerable<PageElementOrderByWithRelationInput>;
    cursor?: PageElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<PageElementScalarFieldEnum>;
  };

  /**
   * TemplateElement without action
   */
  export type TemplateElementArgs = {
    /**
     * Select specific fields to fetch from the TemplateElement
     */
    select?: TemplateElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TemplateElementInclude | null;
  };

  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null;
    _min: PageMinAggregateOutputType | null;
    _max: PageMaxAggregateOutputType | null;
  };

  export type PageMinAggregateOutputType = {
    id: string | null;
    workflow: string | null;
    name: string | null;
    codename: string | null;
    templateId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PageMaxAggregateOutputType = {
    id: string | null;
    workflow: string | null;
    name: string | null;
    codename: string | null;
    templateId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PageCountAggregateOutputType = {
    id: number;
    workflow: number;
    name: number;
    codename: number;
    templateId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PageMinAggregateInputType = {
    id?: true;
    workflow?: true;
    name?: true;
    codename?: true;
    templateId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PageMaxAggregateInputType = {
    id?: true;
    workflow?: true;
    name?: true;
    codename?: true;
    templateId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PageCountAggregateInputType = {
    id?: true;
    workflow?: true;
    name?: true;
    codename?: true;
    templateId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PageAggregateArgs = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PageOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Pages
     **/
    _count?: true | PageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PageMaxAggregateInputType;
  };

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
    [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>;
  };

  export type PageGroupByArgs = {
    where?: PageWhereInput;
    orderBy?: Enumerable<PageOrderByWithAggregationInput>;
    by: PageScalarFieldEnum[];
    having?: PageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PageCountAggregateInputType | true;
    _min?: PageMinAggregateInputType;
    _max?: PageMaxAggregateInputType;
  };

  export type PageGroupByOutputType = {
    id: string;
    workflow: string;
    name: string;
    codename: string;
    templateId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PageCountAggregateOutputType | null;
    _min: PageMinAggregateOutputType | null;
    _max: PageMaxAggregateOutputType | null;
  };

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PageGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PageGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PageGroupByOutputType[P]>
          : GetScalarType<T[P], PageGroupByOutputType[P]>;
      }
    >
  >;

  export type PageSelect = {
    id?: boolean;
    workflow?: boolean;
    name?: boolean;
    codename?: boolean;
    templateId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    template?: boolean | TemplateArgs;
    elements?: boolean | Page$elementsArgs;
    _count?: boolean | PageCountOutputTypeArgs;
  };

  export type PageInclude = {
    template?: boolean | TemplateArgs;
    elements?: boolean | Page$elementsArgs;
    _count?: boolean | PageCountOutputTypeArgs;
  };

  export type PageGetPayload<S extends boolean | null | undefined | PageArgs> = S extends { select: any; include: any }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? Page
    : S extends undefined
    ? never
    : S extends { include: any } & (PageArgs | PageFindManyArgs)
    ? Page & {
        [P in TruthyKeys<S['include']>]: P extends 'template'
          ? TemplateGetPayload<S['include'][P]>
          : P extends 'elements'
          ? Array<PageElementGetPayload<S['include'][P]>>
          : P extends '_count'
          ? PageCountOutputTypeGetPayload<S['include'][P]>
          : never;
      }
    : S extends { select: any } & (PageArgs | PageFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'template'
          ? TemplateGetPayload<S['select'][P]>
          : P extends 'elements'
          ? Array<PageElementGetPayload<S['select'][P]>>
          : P extends '_count'
          ? PageCountOutputTypeGetPayload<S['select'][P]>
          : P extends keyof Page
          ? Page[P]
          : never;
      }
    : Page;

  type PageCountArgs = Omit<PageFindManyArgs, 'select' | 'include'> & {
    select?: PageCountAggregateInputType | true;
  };

  export interface PageDelegate<
    GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined,
  > {
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends PageFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args: SelectSubset<T, PageFindUniqueArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Page'> extends True
      ? Prisma__PageClient<PageGetPayload<T>>
      : Prisma__PageClient<PageGetPayload<T> | null, null>;

    /**
     * Find one Page that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PageFindUniqueOrThrowArgs>,
    ): Prisma__PageClient<PageGetPayload<T>>;

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends PageFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args?: SelectSubset<T, PageFindFirstArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Page'> extends True
      ? Prisma__PageClient<PageGetPayload<T>>
      : Prisma__PageClient<PageGetPayload<T> | null, null>;

    /**
     * Find the first Page that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PageFindFirstOrThrowArgs>,
    ): Prisma__PageClient<PageGetPayload<T>>;

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     *
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PageFindManyArgs>(
      args?: SelectSubset<T, PageFindManyArgs>,
    ): Prisma.PrismaPromise<Array<PageGetPayload<T>>>;

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     *
     **/
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs>): Prisma__PageClient<PageGetPayload<T>>;

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     *
     **/
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs>): Prisma__PageClient<PageGetPayload<T>>;

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs>): Prisma__PageClient<PageGetPayload<T>>;

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PageDeleteManyArgs>(
      args?: SelectSubset<T, PageDeleteManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PageUpdateManyArgs>(
      args: SelectSubset<T, PageUpdateManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     **/
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs>): Prisma__PageClient<PageGetPayload<T>>;

    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
     **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PageAggregateArgs>(
      args: Subset<T, PageAggregateArgs>,
    ): Prisma.PrismaPromise<GetPageAggregateType<T>>;

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    template<T extends TemplateArgs = {}>(
      args?: Subset<T, TemplateArgs>,
    ): Prisma__TemplateClient<TemplateGetPayload<T> | Null>;

    elements<T extends Page$elementsArgs = {}>(
      args?: Subset<T, Page$elementsArgs>,
    ): Prisma.PrismaPromise<Array<PageElementGetPayload<T>> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Page base type for findUnique actions
   */
  export type PageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page findUnique
   */
  export interface PageFindUniqueArgs extends PageFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page base type for findFirst actions
   */
  export type PageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PageOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pages.
     */
    distinct?: Enumerable<PageScalarFieldEnum>;
  };

  /**
   * Page findFirst
   */
  export interface PageFindFirstArgs extends PageFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PageOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Pages.
     */
    distinct?: Enumerable<PageScalarFieldEnum>;
  };

  /**
   * Page findMany
   */
  export type PageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Pages to fetch.
     */
    orderBy?: Enumerable<PageOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Pages.
     */
    skip?: number;
    distinct?: Enumerable<PageScalarFieldEnum>;
  };

  /**
   * Page create
   */
  export type PageCreateArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>;
  };

  /**
   * Page update
   */
  export type PageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>;
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>;
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput;
  };

  /**
   * Page upsert
   */
  export type PageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput;
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>;
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>;
  };

  /**
   * Page delete
   */
  export type PageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput;
  };

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput;
  };

  /**
   * Page.elements
   */
  export type Page$elementsArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    where?: PageElementWhereInput;
    orderBy?: Enumerable<PageElementOrderByWithRelationInput>;
    cursor?: PageElementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Enumerable<PageElementScalarFieldEnum>;
  };

  /**
   * Page without action
   */
  export type PageArgs = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageInclude | null;
  };

  /**
   * Model PageElement
   */

  export type AggregatePageElement = {
    _count: PageElementCountAggregateOutputType | null;
    _min: PageElementMinAggregateOutputType | null;
    _max: PageElementMaxAggregateOutputType | null;
  };

  export type PageElementMinAggregateOutputType = {
    id: string | null;
    templateElementId: string | null;
    value: string | null;
    pageId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PageElementMaxAggregateOutputType = {
    id: string | null;
    templateElementId: string | null;
    value: string | null;
    pageId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PageElementCountAggregateOutputType = {
    id: number;
    templateElementId: number;
    value: number;
    pageId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PageElementMinAggregateInputType = {
    id?: true;
    templateElementId?: true;
    value?: true;
    pageId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PageElementMaxAggregateInputType = {
    id?: true;
    templateElementId?: true;
    value?: true;
    pageId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PageElementCountAggregateInputType = {
    id?: true;
    templateElementId?: true;
    value?: true;
    pageId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PageElementAggregateArgs = {
    /**
     * Filter which PageElement to aggregate.
     */
    where?: PageElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PageElements to fetch.
     */
    orderBy?: Enumerable<PageElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PageElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PageElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PageElements
     **/
    _count?: true | PageElementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PageElementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PageElementMaxAggregateInputType;
  };

  export type GetPageElementAggregateType<T extends PageElementAggregateArgs> = {
    [P in keyof T & keyof AggregatePageElement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageElement[P]>
      : GetScalarType<T[P], AggregatePageElement[P]>;
  };

  export type PageElementGroupByArgs = {
    where?: PageElementWhereInput;
    orderBy?: Enumerable<PageElementOrderByWithAggregationInput>;
    by: PageElementScalarFieldEnum[];
    having?: PageElementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PageElementCountAggregateInputType | true;
    _min?: PageElementMinAggregateInputType;
    _max?: PageElementMaxAggregateInputType;
  };

  export type PageElementGroupByOutputType = {
    id: string;
    templateElementId: string;
    value: string;
    pageId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PageElementCountAggregateOutputType | null;
    _min: PageElementMinAggregateOutputType | null;
    _max: PageElementMaxAggregateOutputType | null;
  };

  type GetPageElementGroupByPayload<T extends PageElementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PageElementGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PageElementGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PageElementGroupByOutputType[P]>
          : GetScalarType<T[P], PageElementGroupByOutputType[P]>;
      }
    >
  >;

  export type PageElementSelect = {
    id?: boolean;
    templateElementId?: boolean;
    value?: boolean;
    pageId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    templateElement?: boolean | TemplateElementArgs;
    page?: boolean | PageArgs;
  };

  export type PageElementInclude = {
    templateElement?: boolean | TemplateElementArgs;
    page?: boolean | PageArgs;
  };

  export type PageElementGetPayload<S extends boolean | null | undefined | PageElementArgs> = S extends {
    select: any;
    include: any;
  }
    ? 'Please either choose `select` or `include`'
    : S extends true
    ? PageElement
    : S extends undefined
    ? never
    : S extends { include: any } & (PageElementArgs | PageElementFindManyArgs)
    ? PageElement & {
        [P in TruthyKeys<S['include']>]: P extends 'templateElement'
          ? TemplateElementGetPayload<S['include'][P]>
          : P extends 'page'
          ? PageGetPayload<S['include'][P]>
          : never;
      }
    : S extends { select: any } & (PageElementArgs | PageElementFindManyArgs)
    ? {
        [P in TruthyKeys<S['select']>]: P extends 'templateElement'
          ? TemplateElementGetPayload<S['select'][P]>
          : P extends 'page'
          ? PageGetPayload<S['select'][P]>
          : P extends keyof PageElement
          ? PageElement[P]
          : never;
      }
    : PageElement;

  type PageElementCountArgs = Omit<PageElementFindManyArgs, 'select' | 'include'> & {
    select?: PageElementCountAggregateInputType | true;
  };

  export interface PageElementDelegate<
    GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined,
  > {
    /**
     * Find zero or one PageElement that matches the filter.
     * @param {PageElementFindUniqueArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends PageElementFindUniqueArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args: SelectSubset<T, PageElementFindUniqueArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PageElement'> extends True
      ? Prisma__PageElementClient<PageElementGetPayload<T>>
      : Prisma__PageElementClient<PageElementGetPayload<T> | null, null>;

    /**
     * Find one PageElement that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {PageElementFindUniqueOrThrowArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends PageElementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PageElementFindUniqueOrThrowArgs>,
    ): Prisma__PageElementClient<PageElementGetPayload<T>>;

    /**
     * Find the first PageElement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementFindFirstArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends PageElementFindFirstArgs,
      LocalRejectSettings = T['rejectOnNotFound'] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined,
    >(
      args?: SelectSubset<T, PageElementFindFirstArgs>,
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PageElement'> extends True
      ? Prisma__PageElementClient<PageElementGetPayload<T>>
      : Prisma__PageElementClient<PageElementGetPayload<T> | null, null>;

    /**
     * Find the first PageElement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementFindFirstOrThrowArgs} args - Arguments to find a PageElement
     * @example
     * // Get one PageElement
     * const pageElement = await prisma.pageElement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends PageElementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PageElementFindFirstOrThrowArgs>,
    ): Prisma__PageElementClient<PageElementGetPayload<T>>;

    /**
     * Find zero or more PageElements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageElements
     * const pageElements = await prisma.pageElement.findMany()
     *
     * // Get first 10 PageElements
     * const pageElements = await prisma.pageElement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pageElementWithIdOnly = await prisma.pageElement.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PageElementFindManyArgs>(
      args?: SelectSubset<T, PageElementFindManyArgs>,
    ): Prisma.PrismaPromise<Array<PageElementGetPayload<T>>>;

    /**
     * Create a PageElement.
     * @param {PageElementCreateArgs} args - Arguments to create a PageElement.
     * @example
     * // Create one PageElement
     * const PageElement = await prisma.pageElement.create({
     *   data: {
     *     // ... data to create a PageElement
     *   }
     * })
     *
     **/
    create<T extends PageElementCreateArgs>(
      args: SelectSubset<T, PageElementCreateArgs>,
    ): Prisma__PageElementClient<PageElementGetPayload<T>>;

    /**
     * Delete a PageElement.
     * @param {PageElementDeleteArgs} args - Arguments to delete one PageElement.
     * @example
     * // Delete one PageElement
     * const PageElement = await prisma.pageElement.delete({
     *   where: {
     *     // ... filter to delete one PageElement
     *   }
     * })
     *
     **/
    delete<T extends PageElementDeleteArgs>(
      args: SelectSubset<T, PageElementDeleteArgs>,
    ): Prisma__PageElementClient<PageElementGetPayload<T>>;

    /**
     * Update one PageElement.
     * @param {PageElementUpdateArgs} args - Arguments to update one PageElement.
     * @example
     * // Update one PageElement
     * const pageElement = await prisma.pageElement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PageElementUpdateArgs>(
      args: SelectSubset<T, PageElementUpdateArgs>,
    ): Prisma__PageElementClient<PageElementGetPayload<T>>;

    /**
     * Delete zero or more PageElements.
     * @param {PageElementDeleteManyArgs} args - Arguments to filter PageElements to delete.
     * @example
     * // Delete a few PageElements
     * const { count } = await prisma.pageElement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PageElementDeleteManyArgs>(
      args?: SelectSubset<T, PageElementDeleteManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PageElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageElements
     * const pageElement = await prisma.pageElement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PageElementUpdateManyArgs>(
      args: SelectSubset<T, PageElementUpdateManyArgs>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one PageElement.
     * @param {PageElementUpsertArgs} args - Arguments to update or create a PageElement.
     * @example
     * // Update or create a PageElement
     * const pageElement = await prisma.pageElement.upsert({
     *   create: {
     *     // ... data to create a PageElement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageElement we want to update
     *   }
     * })
     **/
    upsert<T extends PageElementUpsertArgs>(
      args: SelectSubset<T, PageElementUpsertArgs>,
    ): Prisma__PageElementClient<PageElementGetPayload<T>>;

    /**
     * Count the number of PageElements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementCountArgs} args - Arguments to filter PageElements to count.
     * @example
     * // Count the number of PageElements
     * const count = await prisma.pageElement.count({
     *   where: {
     *     // ... the filter for the PageElements we want to count
     *   }
     * })
     **/
    count<T extends PageElementCountArgs>(
      args?: Subset<T, PageElementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageElementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PageElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PageElementAggregateArgs>(
      args: Subset<T, PageElementAggregateArgs>,
    ): Prisma.PrismaPromise<GetPageElementAggregateType<T>>;

    /**
     * Group by PageElement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageElementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PageElementGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageElementGroupByArgs['orderBy'] }
        : { orderBy?: PageElementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, PageElementGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPageElementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageElement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PageElementClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(
      _dmmf: runtime.DMMFClass,
      _queryType: 'query' | 'mutation',
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean,
    );

    templateElement<T extends TemplateElementArgs = {}>(
      args?: Subset<T, TemplateElementArgs>,
    ): Prisma__TemplateElementClient<TemplateElementGetPayload<T> | Null>;

    page<T extends PageArgs = {}>(args?: Subset<T, PageArgs>): Prisma__PageClient<PageGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PageElement base type for findUnique actions
   */
  export type PageElementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * Filter, which PageElement to fetch.
     */
    where: PageElementWhereUniqueInput;
  };

  /**
   * PageElement findUnique
   */
  export interface PageElementFindUniqueArgs extends PageElementFindUniqueArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * PageElement findUniqueOrThrow
   */
  export type PageElementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * Filter, which PageElement to fetch.
     */
    where: PageElementWhereUniqueInput;
  };

  /**
   * PageElement base type for findFirst actions
   */
  export type PageElementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * Filter, which PageElement to fetch.
     */
    where?: PageElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PageElements to fetch.
     */
    orderBy?: Enumerable<PageElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PageElements.
     */
    cursor?: PageElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PageElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PageElements.
     */
    distinct?: Enumerable<PageElementScalarFieldEnum>;
  };

  /**
   * PageElement findFirst
   */
  export interface PageElementFindFirstArgs extends PageElementFindFirstArgsBase {
    /**
     * Throw an Error if query returns no results
     * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
     */
    rejectOnNotFound?: RejectOnNotFound;
  }

  /**
   * PageElement findFirstOrThrow
   */
  export type PageElementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * Filter, which PageElement to fetch.
     */
    where?: PageElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PageElements to fetch.
     */
    orderBy?: Enumerable<PageElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PageElements.
     */
    cursor?: PageElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PageElements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PageElements.
     */
    distinct?: Enumerable<PageElementScalarFieldEnum>;
  };

  /**
   * PageElement findMany
   */
  export type PageElementFindManyArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * Filter, which PageElements to fetch.
     */
    where?: PageElementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PageElements to fetch.
     */
    orderBy?: Enumerable<PageElementOrderByWithRelationInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PageElements.
     */
    cursor?: PageElementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PageElements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PageElements.
     */
    skip?: number;
    distinct?: Enumerable<PageElementScalarFieldEnum>;
  };

  /**
   * PageElement create
   */
  export type PageElementCreateArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * The data needed to create a PageElement.
     */
    data: XOR<PageElementCreateInput, PageElementUncheckedCreateInput>;
  };

  /**
   * PageElement update
   */
  export type PageElementUpdateArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * The data needed to update a PageElement.
     */
    data: XOR<PageElementUpdateInput, PageElementUncheckedUpdateInput>;
    /**
     * Choose, which PageElement to update.
     */
    where: PageElementWhereUniqueInput;
  };

  /**
   * PageElement updateMany
   */
  export type PageElementUpdateManyArgs = {
    /**
     * The data used to update PageElements.
     */
    data: XOR<PageElementUpdateManyMutationInput, PageElementUncheckedUpdateManyInput>;
    /**
     * Filter which PageElements to update
     */
    where?: PageElementWhereInput;
  };

  /**
   * PageElement upsert
   */
  export type PageElementUpsertArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * The filter to search for the PageElement to update in case it exists.
     */
    where: PageElementWhereUniqueInput;
    /**
     * In case the PageElement found by the `where` argument doesn't exist, create a new PageElement with this data.
     */
    create: XOR<PageElementCreateInput, PageElementUncheckedCreateInput>;
    /**
     * In case the PageElement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageElementUpdateInput, PageElementUncheckedUpdateInput>;
  };

  /**
   * PageElement delete
   */
  export type PageElementDeleteArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
    /**
     * Filter which PageElement to delete.
     */
    where: PageElementWhereUniqueInput;
  };

  /**
   * PageElement deleteMany
   */
  export type PageElementDeleteManyArgs = {
    /**
     * Filter which PageElements to delete
     */
    where?: PageElementWhereInput;
  };

  /**
   * PageElement without action
   */
  export type PageElementArgs = {
    /**
     * Select specific fields to fetch from the PageElement
     */
    select?: PageElementSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PageElementInclude | null;
  };

  /**
   * Enums
   */

  export const PageElementScalarFieldEnum: {
    id: 'id';
    templateElementId: 'templateElementId';
    value: 'value';
    pageId: 'pageId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PageElementScalarFieldEnum = (typeof PageElementScalarFieldEnum)[keyof typeof PageElementScalarFieldEnum];

  export const PageScalarFieldEnum: {
    id: 'id';
    workflow: 'workflow';
    name: 'name';
    codename: 'codename';
    templateId: 'templateId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const TemplateElementScalarFieldEnum: {
    id: 'id';
    name: 'name';
    codename: 'codename';
    type: 'type';
    templateId: 'templateId';
    prevElementId: 'prevElementId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type TemplateElementScalarFieldEnum =
    (typeof TemplateElementScalarFieldEnum)[keyof typeof TemplateElementScalarFieldEnum];

  export const TemplateScalarFieldEnum: {
    id: 'id';
    name: 'name';
    codename: 'codename';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum];

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  /**
   * Deep Input Types
   */

  export type TemplateWhereInput = {
    AND?: Enumerable<TemplateWhereInput>;
    OR?: Enumerable<TemplateWhereInput>;
    NOT?: Enumerable<TemplateWhereInput>;
    id?: StringFilter | string;
    name?: StringFilter | string;
    codename?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    elements?: TemplateElementListRelationFilter;
    pages?: PageListRelationFilter;
  };

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    elements?: TemplateElementOrderByRelationAggregateInput;
    pages?: PageOrderByRelationAggregateInput;
  };

  export type TemplateWhereUniqueInput = {
    id?: string;
  };

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TemplateCountOrderByAggregateInput;
    _max?: TemplateMaxOrderByAggregateInput;
    _min?: TemplateMinOrderByAggregateInput;
  };

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TemplateScalarWhereWithAggregatesInput>;
    OR?: Enumerable<TemplateScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<TemplateScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    name?: StringWithAggregatesFilter | string;
    codename?: StringWithAggregatesFilter | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type TemplateElementWhereInput = {
    AND?: Enumerable<TemplateElementWhereInput>;
    OR?: Enumerable<TemplateElementWhereInput>;
    NOT?: Enumerable<TemplateElementWhereInput>;
    id?: StringFilter | string;
    name?: StringFilter | string;
    codename?: StringFilter | string;
    type?: StringFilter | string;
    templateId?: StringFilter | string;
    prevElementId?: StringNullableFilter | string | null;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    pageElement?: PageElementListRelationFilter;
    template?: XOR<TemplateRelationFilter, TemplateWhereInput>;
    prevElement?: XOR<TemplateElementRelationFilter, TemplateElementWhereInput> | null;
    nextElement?: XOR<TemplateElementRelationFilter, TemplateElementWhereInput> | null;
  };

  export type TemplateElementOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    type?: SortOrder;
    templateId?: SortOrder;
    prevElementId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    pageElement?: PageElementOrderByRelationAggregateInput;
    template?: TemplateOrderByWithRelationInput;
    prevElement?: TemplateElementOrderByWithRelationInput;
    nextElement?: TemplateElementOrderByWithRelationInput;
  };

  export type TemplateElementWhereUniqueInput = {
    id?: string;
    prevElementId?: string;
  };

  export type TemplateElementOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    type?: SortOrder;
    templateId?: SortOrder;
    prevElementId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TemplateElementCountOrderByAggregateInput;
    _max?: TemplateElementMaxOrderByAggregateInput;
    _min?: TemplateElementMinOrderByAggregateInput;
  };

  export type TemplateElementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TemplateElementScalarWhereWithAggregatesInput>;
    OR?: Enumerable<TemplateElementScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<TemplateElementScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    name?: StringWithAggregatesFilter | string;
    codename?: StringWithAggregatesFilter | string;
    type?: StringWithAggregatesFilter | string;
    templateId?: StringWithAggregatesFilter | string;
    prevElementId?: StringNullableWithAggregatesFilter | string | null;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type PageWhereInput = {
    AND?: Enumerable<PageWhereInput>;
    OR?: Enumerable<PageWhereInput>;
    NOT?: Enumerable<PageWhereInput>;
    id?: StringFilter | string;
    workflow?: StringFilter | string;
    name?: StringFilter | string;
    codename?: StringFilter | string;
    templateId?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    template?: XOR<TemplateRelationFilter, TemplateWhereInput>;
    elements?: PageElementListRelationFilter;
  };

  export type PageOrderByWithRelationInput = {
    id?: SortOrder;
    workflow?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    templateId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    template?: TemplateOrderByWithRelationInput;
    elements?: PageElementOrderByRelationAggregateInput;
  };

  export type PageWhereUniqueInput = {
    id?: string;
  };

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder;
    workflow?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    templateId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PageCountOrderByAggregateInput;
    _max?: PageMaxOrderByAggregateInput;
    _min?: PageMinOrderByAggregateInput;
  };

  export type PageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PageScalarWhereWithAggregatesInput>;
    OR?: Enumerable<PageScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<PageScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    workflow?: StringWithAggregatesFilter | string;
    name?: StringWithAggregatesFilter | string;
    codename?: StringWithAggregatesFilter | string;
    templateId?: StringWithAggregatesFilter | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type PageElementWhereInput = {
    AND?: Enumerable<PageElementWhereInput>;
    OR?: Enumerable<PageElementWhereInput>;
    NOT?: Enumerable<PageElementWhereInput>;
    id?: StringFilter | string;
    templateElementId?: StringFilter | string;
    value?: StringFilter | string;
    pageId?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    templateElement?: XOR<TemplateElementRelationFilter, TemplateElementWhereInput>;
    page?: XOR<PageRelationFilter, PageWhereInput>;
  };

  export type PageElementOrderByWithRelationInput = {
    id?: SortOrder;
    templateElementId?: SortOrder;
    value?: SortOrder;
    pageId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    templateElement?: TemplateElementOrderByWithRelationInput;
    page?: PageOrderByWithRelationInput;
  };

  export type PageElementWhereUniqueInput = {
    id?: string;
  };

  export type PageElementOrderByWithAggregationInput = {
    id?: SortOrder;
    templateElementId?: SortOrder;
    value?: SortOrder;
    pageId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PageElementCountOrderByAggregateInput;
    _max?: PageElementMaxOrderByAggregateInput;
    _min?: PageElementMinOrderByAggregateInput;
  };

  export type PageElementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PageElementScalarWhereWithAggregatesInput>;
    OR?: Enumerable<PageElementScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<PageElementScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    templateElementId?: StringWithAggregatesFilter | string;
    value?: StringWithAggregatesFilter | string;
    pageId?: StringWithAggregatesFilter | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
  };

  export type TemplateCreateInput = {
    id?: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: TemplateElementCreateNestedManyWithoutTemplateInput;
    pages?: PageCreateNestedManyWithoutTemplateInput;
  };

  export type TemplateUncheckedCreateInput = {
    id?: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: TemplateElementUncheckedCreateNestedManyWithoutTemplateInput;
    pages?: PageUncheckedCreateNestedManyWithoutTemplateInput;
  };

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: TemplateElementUpdateManyWithoutTemplateNestedInput;
    pages?: PageUpdateManyWithoutTemplateNestedInput;
  };

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: TemplateElementUncheckedUpdateManyWithoutTemplateNestedInput;
    pages?: PageUncheckedUpdateManyWithoutTemplateNestedInput;
  };

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TemplateElementCreateInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementCreateNestedManyWithoutTemplateElementInput;
    template: TemplateCreateNestedOneWithoutElementsInput;
    prevElement?: TemplateElementCreateNestedOneWithoutNextElementInput;
    nextElement?: TemplateElementCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementUncheckedCreateInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    templateId: string;
    prevElementId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementUncheckedCreateNestedManyWithoutTemplateElementInput;
    nextElement?: TemplateElementUncheckedCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUpdateManyWithoutTemplateElementNestedInput;
    template?: TemplateUpdateOneRequiredWithoutElementsNestedInput;
    prevElement?: TemplateElementUpdateOneWithoutNextElementNestedInput;
    nextElement?: TemplateElementUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    prevElementId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUncheckedUpdateManyWithoutTemplateElementNestedInput;
    nextElement?: TemplateElementUncheckedUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TemplateElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    prevElementId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageCreateInput = {
    id?: string;
    workflow: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    template: TemplateCreateNestedOneWithoutPagesInput;
    elements?: PageElementCreateNestedManyWithoutPageInput;
  };

  export type PageUncheckedCreateInput = {
    id?: string;
    workflow: string;
    name: string;
    codename: string;
    templateId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: PageElementUncheckedCreateNestedManyWithoutPageInput;
  };

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    template?: TemplateUpdateOneRequiredWithoutPagesNestedInput;
    elements?: PageElementUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: PageElementUncheckedUpdateManyWithoutPageNestedInput;
  };

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementCreateInput = {
    id?: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    templateElement: TemplateElementCreateNestedOneWithoutPageElementInput;
    page: PageCreateNestedOneWithoutElementsInput;
  };

  export type PageElementUncheckedCreateInput = {
    id?: string;
    templateElementId: string;
    value: string;
    pageId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PageElementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    templateElement?: TemplateElementUpdateOneRequiredWithoutPageElementNestedInput;
    page?: PageUpdateOneRequiredWithoutElementsNestedInput;
  };

  export type PageElementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateElementId?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateElementId?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type DateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type TemplateElementListRelationFilter = {
    every?: TemplateElementWhereInput;
    some?: TemplateElementWhereInput;
    none?: TemplateElementWhereInput;
  };

  export type PageListRelationFilter = {
    every?: PageWhereInput;
    some?: PageWhereInput;
    none?: PageWhereInput;
  };

  export type TemplateElementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type StringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableFilter | string | null;
  };

  export type PageElementListRelationFilter = {
    every?: PageElementWhereInput;
    some?: PageElementWhereInput;
    none?: PageElementWhereInput;
  };

  export type TemplateRelationFilter = {
    is?: TemplateWhereInput;
    isNot?: TemplateWhereInput;
  };

  export type TemplateElementRelationFilter = {
    is?: TemplateElementWhereInput;
    isNot?: TemplateElementWhereInput;
  };

  export type PageElementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TemplateElementCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    type?: SortOrder;
    templateId?: SortOrder;
    prevElementId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TemplateElementMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    type?: SortOrder;
    templateId?: SortOrder;
    prevElementId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TemplateElementMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    type?: SortOrder;
    templateId?: SortOrder;
    prevElementId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
  };

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder;
    workflow?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    templateId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder;
    workflow?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    templateId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder;
    workflow?: SortOrder;
    name?: SortOrder;
    codename?: SortOrder;
    templateId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageRelationFilter = {
    is?: PageWhereInput;
    isNot?: PageWhereInput;
  };

  export type PageElementCountOrderByAggregateInput = {
    id?: SortOrder;
    templateElementId?: SortOrder;
    value?: SortOrder;
    pageId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageElementMaxOrderByAggregateInput = {
    id?: SortOrder;
    templateElementId?: SortOrder;
    value?: SortOrder;
    pageId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PageElementMinOrderByAggregateInput = {
    id?: SortOrder;
    templateElementId?: SortOrder;
    value?: SortOrder;
    pageId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TemplateElementCreateNestedManyWithoutTemplateInput = {
    create?: XOR<
      Enumerable<TemplateElementCreateWithoutTemplateInput>,
      Enumerable<TemplateElementUncheckedCreateWithoutTemplateInput>
    >;
    connectOrCreate?: Enumerable<TemplateElementCreateOrConnectWithoutTemplateInput>;
    connect?: Enumerable<TemplateElementWhereUniqueInput>;
  };

  export type PageCreateNestedManyWithoutTemplateInput = {
    create?: XOR<Enumerable<PageCreateWithoutTemplateInput>, Enumerable<PageUncheckedCreateWithoutTemplateInput>>;
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutTemplateInput>;
    connect?: Enumerable<PageWhereUniqueInput>;
  };

  export type TemplateElementUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<
      Enumerable<TemplateElementCreateWithoutTemplateInput>,
      Enumerable<TemplateElementUncheckedCreateWithoutTemplateInput>
    >;
    connectOrCreate?: Enumerable<TemplateElementCreateOrConnectWithoutTemplateInput>;
    connect?: Enumerable<TemplateElementWhereUniqueInput>;
  };

  export type PageUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<Enumerable<PageCreateWithoutTemplateInput>, Enumerable<PageUncheckedCreateWithoutTemplateInput>>;
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutTemplateInput>;
    connect?: Enumerable<PageWhereUniqueInput>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type TemplateElementUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<
      Enumerable<TemplateElementCreateWithoutTemplateInput>,
      Enumerable<TemplateElementUncheckedCreateWithoutTemplateInput>
    >;
    connectOrCreate?: Enumerable<TemplateElementCreateOrConnectWithoutTemplateInput>;
    upsert?: Enumerable<TemplateElementUpsertWithWhereUniqueWithoutTemplateInput>;
    set?: Enumerable<TemplateElementWhereUniqueInput>;
    disconnect?: Enumerable<TemplateElementWhereUniqueInput>;
    delete?: Enumerable<TemplateElementWhereUniqueInput>;
    connect?: Enumerable<TemplateElementWhereUniqueInput>;
    update?: Enumerable<TemplateElementUpdateWithWhereUniqueWithoutTemplateInput>;
    updateMany?: Enumerable<TemplateElementUpdateManyWithWhereWithoutTemplateInput>;
    deleteMany?: Enumerable<TemplateElementScalarWhereInput>;
  };

  export type PageUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<Enumerable<PageCreateWithoutTemplateInput>, Enumerable<PageUncheckedCreateWithoutTemplateInput>>;
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutTemplateInput>;
    upsert?: Enumerable<PageUpsertWithWhereUniqueWithoutTemplateInput>;
    set?: Enumerable<PageWhereUniqueInput>;
    disconnect?: Enumerable<PageWhereUniqueInput>;
    delete?: Enumerable<PageWhereUniqueInput>;
    connect?: Enumerable<PageWhereUniqueInput>;
    update?: Enumerable<PageUpdateWithWhereUniqueWithoutTemplateInput>;
    updateMany?: Enumerable<PageUpdateManyWithWhereWithoutTemplateInput>;
    deleteMany?: Enumerable<PageScalarWhereInput>;
  };

  export type TemplateElementUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<
      Enumerable<TemplateElementCreateWithoutTemplateInput>,
      Enumerable<TemplateElementUncheckedCreateWithoutTemplateInput>
    >;
    connectOrCreate?: Enumerable<TemplateElementCreateOrConnectWithoutTemplateInput>;
    upsert?: Enumerable<TemplateElementUpsertWithWhereUniqueWithoutTemplateInput>;
    set?: Enumerable<TemplateElementWhereUniqueInput>;
    disconnect?: Enumerable<TemplateElementWhereUniqueInput>;
    delete?: Enumerable<TemplateElementWhereUniqueInput>;
    connect?: Enumerable<TemplateElementWhereUniqueInput>;
    update?: Enumerable<TemplateElementUpdateWithWhereUniqueWithoutTemplateInput>;
    updateMany?: Enumerable<TemplateElementUpdateManyWithWhereWithoutTemplateInput>;
    deleteMany?: Enumerable<TemplateElementScalarWhereInput>;
  };

  export type PageUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<Enumerable<PageCreateWithoutTemplateInput>, Enumerable<PageUncheckedCreateWithoutTemplateInput>>;
    connectOrCreate?: Enumerable<PageCreateOrConnectWithoutTemplateInput>;
    upsert?: Enumerable<PageUpsertWithWhereUniqueWithoutTemplateInput>;
    set?: Enumerable<PageWhereUniqueInput>;
    disconnect?: Enumerable<PageWhereUniqueInput>;
    delete?: Enumerable<PageWhereUniqueInput>;
    connect?: Enumerable<PageWhereUniqueInput>;
    update?: Enumerable<PageUpdateWithWhereUniqueWithoutTemplateInput>;
    updateMany?: Enumerable<PageUpdateManyWithWhereWithoutTemplateInput>;
    deleteMany?: Enumerable<PageScalarWhereInput>;
  };

  export type PageElementCreateNestedManyWithoutTemplateElementInput = {
    create?: XOR<
      Enumerable<PageElementCreateWithoutTemplateElementInput>,
      Enumerable<PageElementUncheckedCreateWithoutTemplateElementInput>
    >;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutTemplateElementInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
  };

  export type TemplateCreateNestedOneWithoutElementsInput = {
    create?: XOR<TemplateCreateWithoutElementsInput, TemplateUncheckedCreateWithoutElementsInput>;
    connectOrCreate?: TemplateCreateOrConnectWithoutElementsInput;
    connect?: TemplateWhereUniqueInput;
  };

  export type TemplateElementCreateNestedOneWithoutNextElementInput = {
    create?: XOR<TemplateElementCreateWithoutNextElementInput, TemplateElementUncheckedCreateWithoutNextElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutNextElementInput;
    connect?: TemplateElementWhereUniqueInput;
  };

  export type TemplateElementCreateNestedOneWithoutPrevElementInput = {
    create?: XOR<TemplateElementCreateWithoutPrevElementInput, TemplateElementUncheckedCreateWithoutPrevElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutPrevElementInput;
    connect?: TemplateElementWhereUniqueInput;
  };

  export type PageElementUncheckedCreateNestedManyWithoutTemplateElementInput = {
    create?: XOR<
      Enumerable<PageElementCreateWithoutTemplateElementInput>,
      Enumerable<PageElementUncheckedCreateWithoutTemplateElementInput>
    >;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutTemplateElementInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
  };

  export type TemplateElementUncheckedCreateNestedOneWithoutPrevElementInput = {
    create?: XOR<TemplateElementCreateWithoutPrevElementInput, TemplateElementUncheckedCreateWithoutPrevElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutPrevElementInput;
    connect?: TemplateElementWhereUniqueInput;
  };

  export type PageElementUpdateManyWithoutTemplateElementNestedInput = {
    create?: XOR<
      Enumerable<PageElementCreateWithoutTemplateElementInput>,
      Enumerable<PageElementUncheckedCreateWithoutTemplateElementInput>
    >;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutTemplateElementInput>;
    upsert?: Enumerable<PageElementUpsertWithWhereUniqueWithoutTemplateElementInput>;
    set?: Enumerable<PageElementWhereUniqueInput>;
    disconnect?: Enumerable<PageElementWhereUniqueInput>;
    delete?: Enumerable<PageElementWhereUniqueInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
    update?: Enumerable<PageElementUpdateWithWhereUniqueWithoutTemplateElementInput>;
    updateMany?: Enumerable<PageElementUpdateManyWithWhereWithoutTemplateElementInput>;
    deleteMany?: Enumerable<PageElementScalarWhereInput>;
  };

  export type TemplateUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<TemplateCreateWithoutElementsInput, TemplateUncheckedCreateWithoutElementsInput>;
    connectOrCreate?: TemplateCreateOrConnectWithoutElementsInput;
    upsert?: TemplateUpsertWithoutElementsInput;
    connect?: TemplateWhereUniqueInput;
    update?: XOR<TemplateUpdateWithoutElementsInput, TemplateUncheckedUpdateWithoutElementsInput>;
  };

  export type TemplateElementUpdateOneWithoutNextElementNestedInput = {
    create?: XOR<TemplateElementCreateWithoutNextElementInput, TemplateElementUncheckedCreateWithoutNextElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutNextElementInput;
    upsert?: TemplateElementUpsertWithoutNextElementInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: TemplateElementWhereUniqueInput;
    update?: XOR<TemplateElementUpdateWithoutNextElementInput, TemplateElementUncheckedUpdateWithoutNextElementInput>;
  };

  export type TemplateElementUpdateOneWithoutPrevElementNestedInput = {
    create?: XOR<TemplateElementCreateWithoutPrevElementInput, TemplateElementUncheckedCreateWithoutPrevElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutPrevElementInput;
    upsert?: TemplateElementUpsertWithoutPrevElementInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: TemplateElementWhereUniqueInput;
    update?: XOR<TemplateElementUpdateWithoutPrevElementInput, TemplateElementUncheckedUpdateWithoutPrevElementInput>;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type PageElementUncheckedUpdateManyWithoutTemplateElementNestedInput = {
    create?: XOR<
      Enumerable<PageElementCreateWithoutTemplateElementInput>,
      Enumerable<PageElementUncheckedCreateWithoutTemplateElementInput>
    >;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutTemplateElementInput>;
    upsert?: Enumerable<PageElementUpsertWithWhereUniqueWithoutTemplateElementInput>;
    set?: Enumerable<PageElementWhereUniqueInput>;
    disconnect?: Enumerable<PageElementWhereUniqueInput>;
    delete?: Enumerable<PageElementWhereUniqueInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
    update?: Enumerable<PageElementUpdateWithWhereUniqueWithoutTemplateElementInput>;
    updateMany?: Enumerable<PageElementUpdateManyWithWhereWithoutTemplateElementInput>;
    deleteMany?: Enumerable<PageElementScalarWhereInput>;
  };

  export type TemplateElementUncheckedUpdateOneWithoutPrevElementNestedInput = {
    create?: XOR<TemplateElementCreateWithoutPrevElementInput, TemplateElementUncheckedCreateWithoutPrevElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutPrevElementInput;
    upsert?: TemplateElementUpsertWithoutPrevElementInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: TemplateElementWhereUniqueInput;
    update?: XOR<TemplateElementUpdateWithoutPrevElementInput, TemplateElementUncheckedUpdateWithoutPrevElementInput>;
  };

  export type TemplateCreateNestedOneWithoutPagesInput = {
    create?: XOR<TemplateCreateWithoutPagesInput, TemplateUncheckedCreateWithoutPagesInput>;
    connectOrCreate?: TemplateCreateOrConnectWithoutPagesInput;
    connect?: TemplateWhereUniqueInput;
  };

  export type PageElementCreateNestedManyWithoutPageInput = {
    create?: XOR<Enumerable<PageElementCreateWithoutPageInput>, Enumerable<PageElementUncheckedCreateWithoutPageInput>>;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutPageInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
  };

  export type PageElementUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<Enumerable<PageElementCreateWithoutPageInput>, Enumerable<PageElementUncheckedCreateWithoutPageInput>>;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutPageInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
  };

  export type TemplateUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<TemplateCreateWithoutPagesInput, TemplateUncheckedCreateWithoutPagesInput>;
    connectOrCreate?: TemplateCreateOrConnectWithoutPagesInput;
    upsert?: TemplateUpsertWithoutPagesInput;
    connect?: TemplateWhereUniqueInput;
    update?: XOR<TemplateUpdateWithoutPagesInput, TemplateUncheckedUpdateWithoutPagesInput>;
  };

  export type PageElementUpdateManyWithoutPageNestedInput = {
    create?: XOR<Enumerable<PageElementCreateWithoutPageInput>, Enumerable<PageElementUncheckedCreateWithoutPageInput>>;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutPageInput>;
    upsert?: Enumerable<PageElementUpsertWithWhereUniqueWithoutPageInput>;
    set?: Enumerable<PageElementWhereUniqueInput>;
    disconnect?: Enumerable<PageElementWhereUniqueInput>;
    delete?: Enumerable<PageElementWhereUniqueInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
    update?: Enumerable<PageElementUpdateWithWhereUniqueWithoutPageInput>;
    updateMany?: Enumerable<PageElementUpdateManyWithWhereWithoutPageInput>;
    deleteMany?: Enumerable<PageElementScalarWhereInput>;
  };

  export type PageElementUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<Enumerable<PageElementCreateWithoutPageInput>, Enumerable<PageElementUncheckedCreateWithoutPageInput>>;
    connectOrCreate?: Enumerable<PageElementCreateOrConnectWithoutPageInput>;
    upsert?: Enumerable<PageElementUpsertWithWhereUniqueWithoutPageInput>;
    set?: Enumerable<PageElementWhereUniqueInput>;
    disconnect?: Enumerable<PageElementWhereUniqueInput>;
    delete?: Enumerable<PageElementWhereUniqueInput>;
    connect?: Enumerable<PageElementWhereUniqueInput>;
    update?: Enumerable<PageElementUpdateWithWhereUniqueWithoutPageInput>;
    updateMany?: Enumerable<PageElementUpdateManyWithWhereWithoutPageInput>;
    deleteMany?: Enumerable<PageElementScalarWhereInput>;
  };

  export type TemplateElementCreateNestedOneWithoutPageElementInput = {
    create?: XOR<TemplateElementCreateWithoutPageElementInput, TemplateElementUncheckedCreateWithoutPageElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutPageElementInput;
    connect?: TemplateElementWhereUniqueInput;
  };

  export type PageCreateNestedOneWithoutElementsInput = {
    create?: XOR<PageCreateWithoutElementsInput, PageUncheckedCreateWithoutElementsInput>;
    connectOrCreate?: PageCreateOrConnectWithoutElementsInput;
    connect?: PageWhereUniqueInput;
  };

  export type TemplateElementUpdateOneRequiredWithoutPageElementNestedInput = {
    create?: XOR<TemplateElementCreateWithoutPageElementInput, TemplateElementUncheckedCreateWithoutPageElementInput>;
    connectOrCreate?: TemplateElementCreateOrConnectWithoutPageElementInput;
    upsert?: TemplateElementUpsertWithoutPageElementInput;
    connect?: TemplateElementWhereUniqueInput;
    update?: XOR<TemplateElementUpdateWithoutPageElementInput, TemplateElementUncheckedUpdateWithoutPageElementInput>;
  };

  export type PageUpdateOneRequiredWithoutElementsNestedInput = {
    create?: XOR<PageCreateWithoutElementsInput, PageUncheckedCreateWithoutElementsInput>;
    connectOrCreate?: PageCreateOrConnectWithoutElementsInput;
    upsert?: PageUpsertWithoutElementsInput;
    connect?: PageWhereUniqueInput;
    update?: XOR<PageUpdateWithoutElementsInput, PageUncheckedUpdateWithoutElementsInput>;
  };

  export type NestedStringFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type NestedDateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type NestedStringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string> | string;
    notIn?: Enumerable<string> | string;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    _count?: NestedIntFilter;
    _min?: NestedStringFilter;
    _max?: NestedStringFilter;
  };

  export type NestedIntFilter = {
    equals?: number;
    in?: Enumerable<number> | number;
    notIn?: Enumerable<number> | number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string> | Date | string;
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    _count?: NestedIntFilter;
    _min?: NestedDateTimeFilter;
    _max?: NestedDateTimeFilter;
  };

  export type NestedStringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableFilter | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | string | null;
    notIn?: Enumerable<string> | string | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    _count?: NestedIntNullableFilter;
    _min?: NestedStringNullableFilter;
    _max?: NestedStringNullableFilter;
  };

  export type NestedIntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | number | null;
    notIn?: Enumerable<number> | number | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
  };

  export type TemplateElementCreateWithoutTemplateInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementCreateNestedManyWithoutTemplateElementInput;
    prevElement?: TemplateElementCreateNestedOneWithoutNextElementInput;
    nextElement?: TemplateElementCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementUncheckedCreateWithoutTemplateInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    prevElementId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementUncheckedCreateNestedManyWithoutTemplateElementInput;
    nextElement?: TemplateElementUncheckedCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementCreateOrConnectWithoutTemplateInput = {
    where: TemplateElementWhereUniqueInput;
    create: XOR<TemplateElementCreateWithoutTemplateInput, TemplateElementUncheckedCreateWithoutTemplateInput>;
  };

  export type PageCreateWithoutTemplateInput = {
    id?: string;
    workflow: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: PageElementCreateNestedManyWithoutPageInput;
  };

  export type PageUncheckedCreateWithoutTemplateInput = {
    id?: string;
    workflow: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: PageElementUncheckedCreateNestedManyWithoutPageInput;
  };

  export type PageCreateOrConnectWithoutTemplateInput = {
    where: PageWhereUniqueInput;
    create: XOR<PageCreateWithoutTemplateInput, PageUncheckedCreateWithoutTemplateInput>;
  };

  export type TemplateElementUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateElementWhereUniqueInput;
    update: XOR<TemplateElementUpdateWithoutTemplateInput, TemplateElementUncheckedUpdateWithoutTemplateInput>;
    create: XOR<TemplateElementCreateWithoutTemplateInput, TemplateElementUncheckedCreateWithoutTemplateInput>;
  };

  export type TemplateElementUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateElementWhereUniqueInput;
    data: XOR<TemplateElementUpdateWithoutTemplateInput, TemplateElementUncheckedUpdateWithoutTemplateInput>;
  };

  export type TemplateElementUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateElementScalarWhereInput;
    data: XOR<TemplateElementUpdateManyMutationInput, TemplateElementUncheckedUpdateManyWithoutElementsInput>;
  };

  export type TemplateElementScalarWhereInput = {
    AND?: Enumerable<TemplateElementScalarWhereInput>;
    OR?: Enumerable<TemplateElementScalarWhereInput>;
    NOT?: Enumerable<TemplateElementScalarWhereInput>;
    id?: StringFilter | string;
    name?: StringFilter | string;
    codename?: StringFilter | string;
    type?: StringFilter | string;
    templateId?: StringFilter | string;
    prevElementId?: StringNullableFilter | string | null;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type PageUpsertWithWhereUniqueWithoutTemplateInput = {
    where: PageWhereUniqueInput;
    update: XOR<PageUpdateWithoutTemplateInput, PageUncheckedUpdateWithoutTemplateInput>;
    create: XOR<PageCreateWithoutTemplateInput, PageUncheckedCreateWithoutTemplateInput>;
  };

  export type PageUpdateWithWhereUniqueWithoutTemplateInput = {
    where: PageWhereUniqueInput;
    data: XOR<PageUpdateWithoutTemplateInput, PageUncheckedUpdateWithoutTemplateInput>;
  };

  export type PageUpdateManyWithWhereWithoutTemplateInput = {
    where: PageScalarWhereInput;
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutPagesInput>;
  };

  export type PageScalarWhereInput = {
    AND?: Enumerable<PageScalarWhereInput>;
    OR?: Enumerable<PageScalarWhereInput>;
    NOT?: Enumerable<PageScalarWhereInput>;
    id?: StringFilter | string;
    workflow?: StringFilter | string;
    name?: StringFilter | string;
    codename?: StringFilter | string;
    templateId?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type PageElementCreateWithoutTemplateElementInput = {
    id?: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    page: PageCreateNestedOneWithoutElementsInput;
  };

  export type PageElementUncheckedCreateWithoutTemplateElementInput = {
    id?: string;
    value: string;
    pageId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PageElementCreateOrConnectWithoutTemplateElementInput = {
    where: PageElementWhereUniqueInput;
    create: XOR<PageElementCreateWithoutTemplateElementInput, PageElementUncheckedCreateWithoutTemplateElementInput>;
  };

  export type TemplateCreateWithoutElementsInput = {
    id?: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pages?: PageCreateNestedManyWithoutTemplateInput;
  };

  export type TemplateUncheckedCreateWithoutElementsInput = {
    id?: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pages?: PageUncheckedCreateNestedManyWithoutTemplateInput;
  };

  export type TemplateCreateOrConnectWithoutElementsInput = {
    where: TemplateWhereUniqueInput;
    create: XOR<TemplateCreateWithoutElementsInput, TemplateUncheckedCreateWithoutElementsInput>;
  };

  export type TemplateElementCreateWithoutNextElementInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementCreateNestedManyWithoutTemplateElementInput;
    template: TemplateCreateNestedOneWithoutElementsInput;
    prevElement?: TemplateElementCreateNestedOneWithoutNextElementInput;
  };

  export type TemplateElementUncheckedCreateWithoutNextElementInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    templateId: string;
    prevElementId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementUncheckedCreateNestedManyWithoutTemplateElementInput;
  };

  export type TemplateElementCreateOrConnectWithoutNextElementInput = {
    where: TemplateElementWhereUniqueInput;
    create: XOR<TemplateElementCreateWithoutNextElementInput, TemplateElementUncheckedCreateWithoutNextElementInput>;
  };

  export type TemplateElementCreateWithoutPrevElementInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementCreateNestedManyWithoutTemplateElementInput;
    template: TemplateCreateNestedOneWithoutElementsInput;
    nextElement?: TemplateElementCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementUncheckedCreateWithoutPrevElementInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    templateId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pageElement?: PageElementUncheckedCreateNestedManyWithoutTemplateElementInput;
    nextElement?: TemplateElementUncheckedCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementCreateOrConnectWithoutPrevElementInput = {
    where: TemplateElementWhereUniqueInput;
    create: XOR<TemplateElementCreateWithoutPrevElementInput, TemplateElementUncheckedCreateWithoutPrevElementInput>;
  };

  export type PageElementUpsertWithWhereUniqueWithoutTemplateElementInput = {
    where: PageElementWhereUniqueInput;
    update: XOR<PageElementUpdateWithoutTemplateElementInput, PageElementUncheckedUpdateWithoutTemplateElementInput>;
    create: XOR<PageElementCreateWithoutTemplateElementInput, PageElementUncheckedCreateWithoutTemplateElementInput>;
  };

  export type PageElementUpdateWithWhereUniqueWithoutTemplateElementInput = {
    where: PageElementWhereUniqueInput;
    data: XOR<PageElementUpdateWithoutTemplateElementInput, PageElementUncheckedUpdateWithoutTemplateElementInput>;
  };

  export type PageElementUpdateManyWithWhereWithoutTemplateElementInput = {
    where: PageElementScalarWhereInput;
    data: XOR<PageElementUpdateManyMutationInput, PageElementUncheckedUpdateManyWithoutPageElementInput>;
  };

  export type PageElementScalarWhereInput = {
    AND?: Enumerable<PageElementScalarWhereInput>;
    OR?: Enumerable<PageElementScalarWhereInput>;
    NOT?: Enumerable<PageElementScalarWhereInput>;
    id?: StringFilter | string;
    templateElementId?: StringFilter | string;
    value?: StringFilter | string;
    pageId?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
  };

  export type TemplateUpsertWithoutElementsInput = {
    update: XOR<TemplateUpdateWithoutElementsInput, TemplateUncheckedUpdateWithoutElementsInput>;
    create: XOR<TemplateCreateWithoutElementsInput, TemplateUncheckedCreateWithoutElementsInput>;
  };

  export type TemplateUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pages?: PageUpdateManyWithoutTemplateNestedInput;
  };

  export type TemplateUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pages?: PageUncheckedUpdateManyWithoutTemplateNestedInput;
  };

  export type TemplateElementUpsertWithoutNextElementInput = {
    update: XOR<TemplateElementUpdateWithoutNextElementInput, TemplateElementUncheckedUpdateWithoutNextElementInput>;
    create: XOR<TemplateElementCreateWithoutNextElementInput, TemplateElementUncheckedCreateWithoutNextElementInput>;
  };

  export type TemplateElementUpdateWithoutNextElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUpdateManyWithoutTemplateElementNestedInput;
    template?: TemplateUpdateOneRequiredWithoutElementsNestedInput;
    prevElement?: TemplateElementUpdateOneWithoutNextElementNestedInput;
  };

  export type TemplateElementUncheckedUpdateWithoutNextElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    prevElementId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUncheckedUpdateManyWithoutTemplateElementNestedInput;
  };

  export type TemplateElementUpsertWithoutPrevElementInput = {
    update: XOR<TemplateElementUpdateWithoutPrevElementInput, TemplateElementUncheckedUpdateWithoutPrevElementInput>;
    create: XOR<TemplateElementCreateWithoutPrevElementInput, TemplateElementUncheckedCreateWithoutPrevElementInput>;
  };

  export type TemplateElementUpdateWithoutPrevElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUpdateManyWithoutTemplateElementNestedInput;
    template?: TemplateUpdateOneRequiredWithoutElementsNestedInput;
    nextElement?: TemplateElementUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateElementUncheckedUpdateWithoutPrevElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUncheckedUpdateManyWithoutTemplateElementNestedInput;
    nextElement?: TemplateElementUncheckedUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateCreateWithoutPagesInput = {
    id?: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: TemplateElementCreateNestedManyWithoutTemplateInput;
  };

  export type TemplateUncheckedCreateWithoutPagesInput = {
    id?: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    elements?: TemplateElementUncheckedCreateNestedManyWithoutTemplateInput;
  };

  export type TemplateCreateOrConnectWithoutPagesInput = {
    where: TemplateWhereUniqueInput;
    create: XOR<TemplateCreateWithoutPagesInput, TemplateUncheckedCreateWithoutPagesInput>;
  };

  export type PageElementCreateWithoutPageInput = {
    id?: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    templateElement: TemplateElementCreateNestedOneWithoutPageElementInput;
  };

  export type PageElementUncheckedCreateWithoutPageInput = {
    id?: string;
    templateElementId: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PageElementCreateOrConnectWithoutPageInput = {
    where: PageElementWhereUniqueInput;
    create: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput>;
  };

  export type TemplateUpsertWithoutPagesInput = {
    update: XOR<TemplateUpdateWithoutPagesInput, TemplateUncheckedUpdateWithoutPagesInput>;
    create: XOR<TemplateCreateWithoutPagesInput, TemplateUncheckedCreateWithoutPagesInput>;
  };

  export type TemplateUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: TemplateElementUpdateManyWithoutTemplateNestedInput;
  };

  export type TemplateUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: TemplateElementUncheckedUpdateManyWithoutTemplateNestedInput;
  };

  export type PageElementUpsertWithWhereUniqueWithoutPageInput = {
    where: PageElementWhereUniqueInput;
    update: XOR<PageElementUpdateWithoutPageInput, PageElementUncheckedUpdateWithoutPageInput>;
    create: XOR<PageElementCreateWithoutPageInput, PageElementUncheckedCreateWithoutPageInput>;
  };

  export type PageElementUpdateWithWhereUniqueWithoutPageInput = {
    where: PageElementWhereUniqueInput;
    data: XOR<PageElementUpdateWithoutPageInput, PageElementUncheckedUpdateWithoutPageInput>;
  };

  export type PageElementUpdateManyWithWhereWithoutPageInput = {
    where: PageElementScalarWhereInput;
    data: XOR<PageElementUpdateManyMutationInput, PageElementUncheckedUpdateManyWithoutElementsInput>;
  };

  export type TemplateElementCreateWithoutPageElementInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    template: TemplateCreateNestedOneWithoutElementsInput;
    prevElement?: TemplateElementCreateNestedOneWithoutNextElementInput;
    nextElement?: TemplateElementCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementUncheckedCreateWithoutPageElementInput = {
    id?: string;
    name: string;
    codename: string;
    type: string;
    templateId: string;
    prevElementId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    nextElement?: TemplateElementUncheckedCreateNestedOneWithoutPrevElementInput;
  };

  export type TemplateElementCreateOrConnectWithoutPageElementInput = {
    where: TemplateElementWhereUniqueInput;
    create: XOR<TemplateElementCreateWithoutPageElementInput, TemplateElementUncheckedCreateWithoutPageElementInput>;
  };

  export type PageCreateWithoutElementsInput = {
    id?: string;
    workflow: string;
    name: string;
    codename: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    template: TemplateCreateNestedOneWithoutPagesInput;
  };

  export type PageUncheckedCreateWithoutElementsInput = {
    id?: string;
    workflow: string;
    name: string;
    codename: string;
    templateId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PageCreateOrConnectWithoutElementsInput = {
    where: PageWhereUniqueInput;
    create: XOR<PageCreateWithoutElementsInput, PageUncheckedCreateWithoutElementsInput>;
  };

  export type TemplateElementUpsertWithoutPageElementInput = {
    update: XOR<TemplateElementUpdateWithoutPageElementInput, TemplateElementUncheckedUpdateWithoutPageElementInput>;
    create: XOR<TemplateElementCreateWithoutPageElementInput, TemplateElementUncheckedCreateWithoutPageElementInput>;
  };

  export type TemplateElementUpdateWithoutPageElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    template?: TemplateUpdateOneRequiredWithoutElementsNestedInput;
    prevElement?: TemplateElementUpdateOneWithoutNextElementNestedInput;
    nextElement?: TemplateElementUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateElementUncheckedUpdateWithoutPageElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    prevElementId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    nextElement?: TemplateElementUncheckedUpdateOneWithoutPrevElementNestedInput;
  };

  export type PageUpsertWithoutElementsInput = {
    update: XOR<PageUpdateWithoutElementsInput, PageUncheckedUpdateWithoutElementsInput>;
    create: XOR<PageCreateWithoutElementsInput, PageUncheckedCreateWithoutElementsInput>;
  };

  export type PageUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    template?: TemplateUpdateOneRequiredWithoutPagesNestedInput;
  };

  export type PageUncheckedUpdateWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    templateId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TemplateElementUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUpdateManyWithoutTemplateElementNestedInput;
    prevElement?: TemplateElementUpdateOneWithoutNextElementNestedInput;
    nextElement?: TemplateElementUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateElementUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    prevElementId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pageElement?: PageElementUncheckedUpdateManyWithoutTemplateElementNestedInput;
    nextElement?: TemplateElementUncheckedUpdateOneWithoutPrevElementNestedInput;
  };

  export type TemplateElementUncheckedUpdateManyWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    prevElementId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: PageElementUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    elements?: PageElementUncheckedUpdateManyWithoutPageNestedInput;
  };

  export type PageUncheckedUpdateManyWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    workflow?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    codename?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementUpdateWithoutTemplateElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    page?: PageUpdateOneRequiredWithoutElementsNestedInput;
  };

  export type PageElementUncheckedUpdateWithoutTemplateElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementUncheckedUpdateManyWithoutPageElementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    pageId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    templateElement?: TemplateElementUpdateOneRequiredWithoutPageElementNestedInput;
  };

  export type PageElementUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateElementId?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PageElementUncheckedUpdateManyWithoutElementsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    templateElementId?: StringFieldUpdateOperationsInput | string;
    value?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
