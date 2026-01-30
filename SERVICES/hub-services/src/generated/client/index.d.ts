
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model RevenueTracking
 * 
 */
export type RevenueTracking = $Result.DefaultSelection<Prisma.$RevenueTrackingPayload>
/**
 * Model UserGrowth
 * 
 */
export type UserGrowth = $Result.DefaultSelection<Prisma.$UserGrowthPayload>
/**
 * Model ProductMetric
 * 
 */
export type ProductMetric = $Result.DefaultSelection<Prisma.$ProductMetricPayload>
/**
 * Model RoadmapItem
 * 
 */
export type RoadmapItem = $Result.DefaultSelection<Prisma.$RoadmapItemPayload>
/**
 * Model ChangelogEntry
 * 
 */
export type ChangelogEntry = $Result.DefaultSelection<Prisma.$ChangelogEntryPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model PortfolioItem
 * 
 */
export type PortfolioItem = $Result.DefaultSelection<Prisma.$PortfolioItemPayload>
/**
 * Model AnalyticsEvent
 * 
 */
export type AnalyticsEvent = $Result.DefaultSelection<Prisma.$AnalyticsEventPayload>
/**
 * Model UserProductInteraction
 * 
 */
export type UserProductInteraction = $Result.DefaultSelection<Prisma.$UserProductInteractionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProductCategory: {
  EDUCATION: 'EDUCATION',
  HEALTH: 'HEALTH',
  NEWS: 'NEWS',
  PRODUCTIVITY: 'PRODUCTIVITY',
  SOCIAL: 'SOCIAL',
  FINANCE: 'FINANCE',
  AI: 'AI',
  ECOMMERCE: 'ECOMMERCE',
  SECURITY: 'SECURITY',
  OTHER: 'OTHER'
};

export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory]


export const ProductStatus: {
  LIVE: 'LIVE',
  BUILDING: 'BUILDING',
  PLANNED: 'PLANNED',
  CONCEPT: 'CONCEPT',
  PAUSED: 'PAUSED',
  ARCHIVED: 'ARCHIVED'
};

export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus]


export const MetricType: {
  PAGE_VIEWS: 'PAGE_VIEWS',
  SIGN_UPS: 'SIGN_UPS',
  CONVERSIONS: 'CONVERSIONS',
  FEATURE_USAGE: 'FEATURE_USAGE',
  API_CALLS: 'API_CALLS',
  ERRORS: 'ERRORS',
  RESPONSE_TIME: 'RESPONSE_TIME',
  UPTIME: 'UPTIME',
  CUSTOMER_SATISFACTION: 'CUSTOMER_SATISFACTION',
  NPS: 'NPS',
  REVENUE_PER_USER: 'REVENUE_PER_USER',
  LIFETIME_VALUE: 'LIFETIME_VALUE'
};

export type MetricType = (typeof MetricType)[keyof typeof MetricType]


export const RoadmapCategory: {
  FEATURE: 'FEATURE',
  IMPROVEMENT: 'IMPROVEMENT',
  BUG_FIX: 'BUG_FIX',
  INTEGRATION: 'INTEGRATION',
  PERFORMANCE: 'PERFORMANCE',
  SECURITY: 'SECURITY'
};

export type RoadmapCategory = (typeof RoadmapCategory)[keyof typeof RoadmapCategory]


export const RoadmapPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type RoadmapPriority = (typeof RoadmapPriority)[keyof typeof RoadmapPriority]


export const RoadmapStatus: {
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  ON_HOLD: 'ON_HOLD'
};

export type RoadmapStatus = (typeof RoadmapStatus)[keyof typeof RoadmapStatus]


export const ChangeType: {
  MAJOR: 'MAJOR',
  MINOR: 'MINOR',
  PATCH: 'PATCH',
  HOTFIX: 'HOTFIX'
};

export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType]


export const FeedbackType: {
  BUG: 'BUG',
  FEATURE_REQUEST: 'FEATURE_REQUEST',
  IMPROVEMENT: 'IMPROVEMENT',
  QUESTION: 'QUESTION',
  PRAISE: 'PRAISE',
  COMPLAINT: 'COMPLAINT'
};

export type FeedbackType = (typeof FeedbackType)[keyof typeof FeedbackType]


export const FeedbackSeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type FeedbackSeverity = (typeof FeedbackSeverity)[keyof typeof FeedbackSeverity]


export const FeedbackStatus: {
  NEW: 'NEW',
  REVIEWING: 'REVIEWING',
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  WONT_FIX: 'WONT_FIX',
  DUPLICATE: 'DUPLICATE'
};

export type FeedbackStatus = (typeof FeedbackStatus)[keyof typeof FeedbackStatus]


export const AnnouncementType: {
  INFO: 'INFO',
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  UPDATE: 'UPDATE',
  PROMOTION: 'PROMOTION'
};

export type AnnouncementType = (typeof AnnouncementType)[keyof typeof AnnouncementType]


export const InteractionType: {
  VIEW: 'VIEW',
  CLICK: 'CLICK',
  FAVORITE: 'FAVORITE',
  SHARE: 'SHARE',
  FEEDBACK: 'FEEDBACK',
  PURCHASE_INTENT: 'PURCHASE_INTENT'
};

export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType]

}

export type ProductCategory = $Enums.ProductCategory

export const ProductCategory: typeof $Enums.ProductCategory

export type ProductStatus = $Enums.ProductStatus

export const ProductStatus: typeof $Enums.ProductStatus

export type MetricType = $Enums.MetricType

export const MetricType: typeof $Enums.MetricType

export type RoadmapCategory = $Enums.RoadmapCategory

export const RoadmapCategory: typeof $Enums.RoadmapCategory

export type RoadmapPriority = $Enums.RoadmapPriority

export const RoadmapPriority: typeof $Enums.RoadmapPriority

export type RoadmapStatus = $Enums.RoadmapStatus

export const RoadmapStatus: typeof $Enums.RoadmapStatus

export type ChangeType = $Enums.ChangeType

export const ChangeType: typeof $Enums.ChangeType

export type FeedbackType = $Enums.FeedbackType

export const FeedbackType: typeof $Enums.FeedbackType

export type FeedbackSeverity = $Enums.FeedbackSeverity

export const FeedbackSeverity: typeof $Enums.FeedbackSeverity

export type FeedbackStatus = $Enums.FeedbackStatus

export const FeedbackStatus: typeof $Enums.FeedbackStatus

export type AnnouncementType = $Enums.AnnouncementType

export const AnnouncementType: typeof $Enums.AnnouncementType

export type InteractionType = $Enums.InteractionType

export const InteractionType: typeof $Enums.InteractionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revenueTracking`: Exposes CRUD operations for the **RevenueTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevenueTrackings
    * const revenueTrackings = await prisma.revenueTracking.findMany()
    * ```
    */
  get revenueTracking(): Prisma.RevenueTrackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGrowth`: Exposes CRUD operations for the **UserGrowth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGrowths
    * const userGrowths = await prisma.userGrowth.findMany()
    * ```
    */
  get userGrowth(): Prisma.UserGrowthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productMetric`: Exposes CRUD operations for the **ProductMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMetrics
    * const productMetrics = await prisma.productMetric.findMany()
    * ```
    */
  get productMetric(): Prisma.ProductMetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadmapItem`: Exposes CRUD operations for the **RoadmapItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoadmapItems
    * const roadmapItems = await prisma.roadmapItem.findMany()
    * ```
    */
  get roadmapItem(): Prisma.RoadmapItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.changelogEntry`: Exposes CRUD operations for the **ChangelogEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChangelogEntries
    * const changelogEntries = await prisma.changelogEntry.findMany()
    * ```
    */
  get changelogEntry(): Prisma.ChangelogEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioItem`: Exposes CRUD operations for the **PortfolioItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioItems
    * const portfolioItems = await prisma.portfolioItem.findMany()
    * ```
    */
  get portfolioItem(): Prisma.PortfolioItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analyticsEvent`: Exposes CRUD operations for the **AnalyticsEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalyticsEvents
    * const analyticsEvents = await prisma.analyticsEvent.findMany()
    * ```
    */
  get analyticsEvent(): Prisma.AnalyticsEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProductInteraction`: Exposes CRUD operations for the **UserProductInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProductInteractions
    * const userProductInteractions = await prisma.userProductInteraction.findMany()
    * ```
    */
  get userProductInteraction(): Prisma.UserProductInteractionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    RevenueTracking: 'RevenueTracking',
    UserGrowth: 'UserGrowth',
    ProductMetric: 'ProductMetric',
    RoadmapItem: 'RoadmapItem',
    ChangelogEntry: 'ChangelogEntry',
    Feedback: 'Feedback',
    Announcement: 'Announcement',
    PortfolioItem: 'PortfolioItem',
    AnalyticsEvent: 'AnalyticsEvent',
    UserProductInteraction: 'UserProductInteraction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "revenueTracking" | "userGrowth" | "productMetric" | "roadmapItem" | "changelogEntry" | "feedback" | "announcement" | "portfolioItem" | "analyticsEvent" | "userProductInteraction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      RevenueTracking: {
        payload: Prisma.$RevenueTrackingPayload<ExtArgs>
        fields: Prisma.RevenueTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevenueTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevenueTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>
          }
          findFirst: {
            args: Prisma.RevenueTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevenueTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>
          }
          findMany: {
            args: Prisma.RevenueTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>[]
          }
          create: {
            args: Prisma.RevenueTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>
          }
          createMany: {
            args: Prisma.RevenueTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevenueTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>[]
          }
          delete: {
            args: Prisma.RevenueTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>
          }
          update: {
            args: Prisma.RevenueTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>
          }
          deleteMany: {
            args: Prisma.RevenueTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevenueTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevenueTrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>[]
          }
          upsert: {
            args: Prisma.RevenueTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevenueTrackingPayload>
          }
          aggregate: {
            args: Prisma.RevenueTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevenueTracking>
          }
          groupBy: {
            args: Prisma.RevenueTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevenueTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevenueTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<RevenueTrackingCountAggregateOutputType> | number
          }
        }
      }
      UserGrowth: {
        payload: Prisma.$UserGrowthPayload<ExtArgs>
        fields: Prisma.UserGrowthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGrowthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGrowthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>
          }
          findFirst: {
            args: Prisma.UserGrowthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGrowthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>
          }
          findMany: {
            args: Prisma.UserGrowthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>[]
          }
          create: {
            args: Prisma.UserGrowthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>
          }
          createMany: {
            args: Prisma.UserGrowthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGrowthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>[]
          }
          delete: {
            args: Prisma.UserGrowthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>
          }
          update: {
            args: Prisma.UserGrowthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>
          }
          deleteMany: {
            args: Prisma.UserGrowthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGrowthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGrowthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>[]
          }
          upsert: {
            args: Prisma.UserGrowthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrowthPayload>
          }
          aggregate: {
            args: Prisma.UserGrowthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGrowth>
          }
          groupBy: {
            args: Prisma.UserGrowthGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGrowthGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGrowthCountArgs<ExtArgs>
            result: $Utils.Optional<UserGrowthCountAggregateOutputType> | number
          }
        }
      }
      ProductMetric: {
        payload: Prisma.$ProductMetricPayload<ExtArgs>
        fields: Prisma.ProductMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>
          }
          findFirst: {
            args: Prisma.ProductMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>
          }
          findMany: {
            args: Prisma.ProductMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>[]
          }
          create: {
            args: Prisma.ProductMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>
          }
          createMany: {
            args: Prisma.ProductMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>[]
          }
          delete: {
            args: Prisma.ProductMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>
          }
          update: {
            args: Prisma.ProductMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>
          }
          deleteMany: {
            args: Prisma.ProductMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>[]
          }
          upsert: {
            args: Prisma.ProductMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetricPayload>
          }
          aggregate: {
            args: Prisma.ProductMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMetric>
          }
          groupBy: {
            args: Prisma.ProductMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMetricCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMetricCountAggregateOutputType> | number
          }
        }
      }
      RoadmapItem: {
        payload: Prisma.$RoadmapItemPayload<ExtArgs>
        fields: Prisma.RoadmapItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadmapItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadmapItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          findFirst: {
            args: Prisma.RoadmapItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadmapItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          findMany: {
            args: Prisma.RoadmapItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>[]
          }
          create: {
            args: Prisma.RoadmapItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          createMany: {
            args: Prisma.RoadmapItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoadmapItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>[]
          }
          delete: {
            args: Prisma.RoadmapItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          update: {
            args: Prisma.RoadmapItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          deleteMany: {
            args: Prisma.RoadmapItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadmapItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoadmapItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>[]
          }
          upsert: {
            args: Prisma.RoadmapItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadmapItemPayload>
          }
          aggregate: {
            args: Prisma.RoadmapItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadmapItem>
          }
          groupBy: {
            args: Prisma.RoadmapItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadmapItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadmapItemCountArgs<ExtArgs>
            result: $Utils.Optional<RoadmapItemCountAggregateOutputType> | number
          }
        }
      }
      ChangelogEntry: {
        payload: Prisma.$ChangelogEntryPayload<ExtArgs>
        fields: Prisma.ChangelogEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChangelogEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChangelogEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>
          }
          findFirst: {
            args: Prisma.ChangelogEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChangelogEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>
          }
          findMany: {
            args: Prisma.ChangelogEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>[]
          }
          create: {
            args: Prisma.ChangelogEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>
          }
          createMany: {
            args: Prisma.ChangelogEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChangelogEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>[]
          }
          delete: {
            args: Prisma.ChangelogEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>
          }
          update: {
            args: Prisma.ChangelogEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>
          }
          deleteMany: {
            args: Prisma.ChangelogEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChangelogEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChangelogEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>[]
          }
          upsert: {
            args: Prisma.ChangelogEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangelogEntryPayload>
          }
          aggregate: {
            args: Prisma.ChangelogEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChangelogEntry>
          }
          groupBy: {
            args: Prisma.ChangelogEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChangelogEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChangelogEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ChangelogEntryCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      PortfolioItem: {
        payload: Prisma.$PortfolioItemPayload<ExtArgs>
        fields: Prisma.PortfolioItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findFirst: {
            args: Prisma.PortfolioItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findMany: {
            args: Prisma.PortfolioItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          create: {
            args: Prisma.PortfolioItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          createMany: {
            args: Prisma.PortfolioItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          delete: {
            args: Prisma.PortfolioItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          update: {
            args: Prisma.PortfolioItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          aggregate: {
            args: Prisma.PortfolioItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioItem>
          }
          groupBy: {
            args: Prisma.PortfolioItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioItemCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemCountAggregateOutputType> | number
          }
        }
      }
      AnalyticsEvent: {
        payload: Prisma.$AnalyticsEventPayload<ExtArgs>
        fields: Prisma.AnalyticsEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          findMany: {
            args: Prisma.AnalyticsEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          create: {
            args: Prisma.AnalyticsEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          createMany: {
            args: Prisma.AnalyticsEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalyticsEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          delete: {
            args: Prisma.AnalyticsEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          update: {
            args: Prisma.AnalyticsEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>[]
          }
          upsert: {
            args: Prisma.AnalyticsEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsEventPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalyticsEvent>
          }
          groupBy: {
            args: Prisma.AnalyticsEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalyticsEventCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsEventCountAggregateOutputType> | number
          }
        }
      }
      UserProductInteraction: {
        payload: Prisma.$UserProductInteractionPayload<ExtArgs>
        fields: Prisma.UserProductInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProductInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProductInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>
          }
          findFirst: {
            args: Prisma.UserProductInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProductInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>
          }
          findMany: {
            args: Prisma.UserProductInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>[]
          }
          create: {
            args: Prisma.UserProductInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>
          }
          createMany: {
            args: Prisma.UserProductInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProductInteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>[]
          }
          delete: {
            args: Prisma.UserProductInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>
          }
          update: {
            args: Prisma.UserProductInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>
          }
          deleteMany: {
            args: Prisma.UserProductInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProductInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProductInteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>[]
          }
          upsert: {
            args: Prisma.UserProductInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductInteractionPayload>
          }
          aggregate: {
            args: Prisma.UserProductInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProductInteraction>
          }
          groupBy: {
            args: Prisma.UserProductInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProductInteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProductInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<UserProductInteractionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    revenueTracking?: RevenueTrackingOmit
    userGrowth?: UserGrowthOmit
    productMetric?: ProductMetricOmit
    roadmapItem?: RoadmapItemOmit
    changelogEntry?: ChangelogEntryOmit
    feedback?: FeedbackOmit
    announcement?: AnnouncementOmit
    portfolioItem?: PortfolioItemOmit
    analyticsEvent?: AnalyticsEventOmit
    userProductInteraction?: UserProductInteractionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    revenueTracking: number
    userGrowth: number
    metrics: number
    roadmapItems: number
    changelogEntries: number
    feedback: number
    interactions: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revenueTracking?: boolean | ProductCountOutputTypeCountRevenueTrackingArgs
    userGrowth?: boolean | ProductCountOutputTypeCountUserGrowthArgs
    metrics?: boolean | ProductCountOutputTypeCountMetricsArgs
    roadmapItems?: boolean | ProductCountOutputTypeCountRoadmapItemsArgs
    changelogEntries?: boolean | ProductCountOutputTypeCountChangelogEntriesArgs
    feedback?: boolean | ProductCountOutputTypeCountFeedbackArgs
    interactions?: boolean | ProductCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRevenueTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueTrackingWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserGrowthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrowthWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMetricWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRoadmapItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountChangelogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChangelogEntryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductInteractionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    monthlyRevenue: Decimal | null
    totalUsers: number | null
    activeUsers: number | null
    priority: number | null
  }

  export type ProductSumAggregateOutputType = {
    monthlyRevenue: Decimal | null
    totalUsers: number | null
    activeUsers: number | null
    priority: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    slug: string | null
    description: string | null
    tagline: string | null
    category: $Enums.ProductCategory | null
    status: $Enums.ProductStatus | null
    version: string | null
    monthlyRevenue: Decimal | null
    totalUsers: number | null
    activeUsers: number | null
    priority: number | null
    logoUrl: string | null
    coverUrl: string | null
    launchedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    slug: string | null
    description: string | null
    tagline: string | null
    category: $Enums.ProductCategory | null
    status: $Enums.ProductStatus | null
    version: string | null
    monthlyRevenue: Decimal | null
    totalUsers: number | null
    activeUsers: number | null
    priority: number | null
    logoUrl: string | null
    coverUrl: string | null
    launchedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    slug: number
    description: number
    tagline: number
    category: number
    status: number
    version: number
    monthlyRevenue: number
    totalUsers: number
    activeUsers: number
    priority: number
    techStack: number
    tags: number
    features: number
    challenges: number
    opportunities: number
    links: number
    logoUrl: number
    coverUrl: number
    screenshots: number
    launchedAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    monthlyRevenue?: true
    totalUsers?: true
    activeUsers?: true
    priority?: true
  }

  export type ProductSumAggregateInputType = {
    monthlyRevenue?: true
    totalUsers?: true
    activeUsers?: true
    priority?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    slug?: true
    description?: true
    tagline?: true
    category?: true
    status?: true
    version?: true
    monthlyRevenue?: true
    totalUsers?: true
    activeUsers?: true
    priority?: true
    logoUrl?: true
    coverUrl?: true
    launchedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    slug?: true
    description?: true
    tagline?: true
    category?: true
    status?: true
    version?: true
    monthlyRevenue?: true
    totalUsers?: true
    activeUsers?: true
    priority?: true
    logoUrl?: true
    coverUrl?: true
    launchedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    slug?: true
    description?: true
    tagline?: true
    category?: true
    status?: true
    version?: true
    monthlyRevenue?: true
    totalUsers?: true
    activeUsers?: true
    priority?: true
    techStack?: true
    tags?: true
    features?: true
    challenges?: true
    opportunities?: true
    links?: true
    logoUrl?: true
    coverUrl?: true
    screenshots?: true
    launchedAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    productId: string
    name: string
    slug: string
    description: string | null
    tagline: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version: string | null
    monthlyRevenue: Decimal
    totalUsers: number
    activeUsers: number
    priority: number
    techStack: string[]
    tags: string[]
    features: JsonValue | null
    challenges: JsonValue | null
    opportunities: JsonValue | null
    links: JsonValue | null
    logoUrl: string | null
    coverUrl: string | null
    screenshots: string[]
    launchedAt: Date | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    tagline?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    monthlyRevenue?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    priority?: boolean
    techStack?: boolean
    tags?: boolean
    features?: boolean
    challenges?: boolean
    opportunities?: boolean
    links?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    screenshots?: boolean
    launchedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revenueTracking?: boolean | Product$revenueTrackingArgs<ExtArgs>
    userGrowth?: boolean | Product$userGrowthArgs<ExtArgs>
    metrics?: boolean | Product$metricsArgs<ExtArgs>
    roadmapItems?: boolean | Product$roadmapItemsArgs<ExtArgs>
    changelogEntries?: boolean | Product$changelogEntriesArgs<ExtArgs>
    feedback?: boolean | Product$feedbackArgs<ExtArgs>
    interactions?: boolean | Product$interactionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    tagline?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    monthlyRevenue?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    priority?: boolean
    techStack?: boolean
    tags?: boolean
    features?: boolean
    challenges?: boolean
    opportunities?: boolean
    links?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    screenshots?: boolean
    launchedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    tagline?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    monthlyRevenue?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    priority?: boolean
    techStack?: boolean
    tags?: boolean
    features?: boolean
    challenges?: boolean
    opportunities?: boolean
    links?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    screenshots?: boolean
    launchedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    tagline?: boolean
    category?: boolean
    status?: boolean
    version?: boolean
    monthlyRevenue?: boolean
    totalUsers?: boolean
    activeUsers?: boolean
    priority?: boolean
    techStack?: boolean
    tags?: boolean
    features?: boolean
    challenges?: boolean
    opportunities?: boolean
    links?: boolean
    logoUrl?: boolean
    coverUrl?: boolean
    screenshots?: boolean
    launchedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "slug" | "description" | "tagline" | "category" | "status" | "version" | "monthlyRevenue" | "totalUsers" | "activeUsers" | "priority" | "techStack" | "tags" | "features" | "challenges" | "opportunities" | "links" | "logoUrl" | "coverUrl" | "screenshots" | "launchedAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    revenueTracking?: boolean | Product$revenueTrackingArgs<ExtArgs>
    userGrowth?: boolean | Product$userGrowthArgs<ExtArgs>
    metrics?: boolean | Product$metricsArgs<ExtArgs>
    roadmapItems?: boolean | Product$roadmapItemsArgs<ExtArgs>
    changelogEntries?: boolean | Product$changelogEntriesArgs<ExtArgs>
    feedback?: boolean | Product$feedbackArgs<ExtArgs>
    interactions?: boolean | Product$interactionsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      revenueTracking: Prisma.$RevenueTrackingPayload<ExtArgs>[]
      userGrowth: Prisma.$UserGrowthPayload<ExtArgs>[]
      metrics: Prisma.$ProductMetricPayload<ExtArgs>[]
      roadmapItems: Prisma.$RoadmapItemPayload<ExtArgs>[]
      changelogEntries: Prisma.$ChangelogEntryPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      interactions: Prisma.$UserProductInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      name: string
      slug: string
      description: string | null
      tagline: string | null
      category: $Enums.ProductCategory
      status: $Enums.ProductStatus
      version: string | null
      monthlyRevenue: Prisma.Decimal
      totalUsers: number
      activeUsers: number
      priority: number
      techStack: string[]
      tags: string[]
      features: Prisma.JsonValue | null
      challenges: Prisma.JsonValue | null
      opportunities: Prisma.JsonValue | null
      links: Prisma.JsonValue | null
      logoUrl: string | null
      coverUrl: string | null
      screenshots: string[]
      launchedAt: Date | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    revenueTracking<T extends Product$revenueTrackingArgs<ExtArgs> = {}>(args?: Subset<T, Product$revenueTrackingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userGrowth<T extends Product$userGrowthArgs<ExtArgs> = {}>(args?: Subset<T, Product$userGrowthArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrics<T extends Product$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Product$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roadmapItems<T extends Product$roadmapItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$roadmapItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    changelogEntries<T extends Product$changelogEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$changelogEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends Product$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Product$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends Product$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Product$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly productId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly tagline: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'ProductCategory'>
    readonly status: FieldRef<"Product", 'ProductStatus'>
    readonly version: FieldRef<"Product", 'String'>
    readonly monthlyRevenue: FieldRef<"Product", 'Decimal'>
    readonly totalUsers: FieldRef<"Product", 'Int'>
    readonly activeUsers: FieldRef<"Product", 'Int'>
    readonly priority: FieldRef<"Product", 'Int'>
    readonly techStack: FieldRef<"Product", 'String[]'>
    readonly tags: FieldRef<"Product", 'String[]'>
    readonly features: FieldRef<"Product", 'Json'>
    readonly challenges: FieldRef<"Product", 'Json'>
    readonly opportunities: FieldRef<"Product", 'Json'>
    readonly links: FieldRef<"Product", 'Json'>
    readonly logoUrl: FieldRef<"Product", 'String'>
    readonly coverUrl: FieldRef<"Product", 'String'>
    readonly screenshots: FieldRef<"Product", 'String[]'>
    readonly launchedAt: FieldRef<"Product", 'DateTime'>
    readonly metadata: FieldRef<"Product", 'Json'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.revenueTracking
   */
  export type Product$revenueTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    where?: RevenueTrackingWhereInput
    orderBy?: RevenueTrackingOrderByWithRelationInput | RevenueTrackingOrderByWithRelationInput[]
    cursor?: RevenueTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevenueTrackingScalarFieldEnum | RevenueTrackingScalarFieldEnum[]
  }

  /**
   * Product.userGrowth
   */
  export type Product$userGrowthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    where?: UserGrowthWhereInput
    orderBy?: UserGrowthOrderByWithRelationInput | UserGrowthOrderByWithRelationInput[]
    cursor?: UserGrowthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGrowthScalarFieldEnum | UserGrowthScalarFieldEnum[]
  }

  /**
   * Product.metrics
   */
  export type Product$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    where?: ProductMetricWhereInput
    orderBy?: ProductMetricOrderByWithRelationInput | ProductMetricOrderByWithRelationInput[]
    cursor?: ProductMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMetricScalarFieldEnum | ProductMetricScalarFieldEnum[]
  }

  /**
   * Product.roadmapItems
   */
  export type Product$roadmapItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    where?: RoadmapItemWhereInput
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    cursor?: RoadmapItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }

  /**
   * Product.changelogEntries
   */
  export type Product$changelogEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    where?: ChangelogEntryWhereInput
    orderBy?: ChangelogEntryOrderByWithRelationInput | ChangelogEntryOrderByWithRelationInput[]
    cursor?: ChangelogEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChangelogEntryScalarFieldEnum | ChangelogEntryScalarFieldEnum[]
  }

  /**
   * Product.feedback
   */
  export type Product$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Product.interactions
   */
  export type Product$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    where?: UserProductInteractionWhereInput
    orderBy?: UserProductInteractionOrderByWithRelationInput | UserProductInteractionOrderByWithRelationInput[]
    cursor?: UserProductInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProductInteractionScalarFieldEnum | UserProductInteractionScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model RevenueTracking
   */

  export type AggregateRevenueTracking = {
    _count: RevenueTrackingCountAggregateOutputType | null
    _avg: RevenueTrackingAvgAggregateOutputType | null
    _sum: RevenueTrackingSumAggregateOutputType | null
    _min: RevenueTrackingMinAggregateOutputType | null
    _max: RevenueTrackingMaxAggregateOutputType | null
  }

  export type RevenueTrackingAvgAggregateOutputType = {
    revenue: Decimal | null
    newUsers: number | null
    activeUsers: number | null
    churnedUsers: number | null
    mrr: Decimal | null
    churnRate: Decimal | null
    trials: number | null
    conversions: number | null
    conversionRate: Decimal | null
  }

  export type RevenueTrackingSumAggregateOutputType = {
    revenue: Decimal | null
    newUsers: number | null
    activeUsers: number | null
    churnedUsers: number | null
    mrr: Decimal | null
    churnRate: Decimal | null
    trials: number | null
    conversions: number | null
    conversionRate: Decimal | null
  }

  export type RevenueTrackingMinAggregateOutputType = {
    id: string | null
    productId: string | null
    date: Date | null
    revenue: Decimal | null
    newUsers: number | null
    activeUsers: number | null
    churnedUsers: number | null
    mrr: Decimal | null
    churnRate: Decimal | null
    trials: number | null
    conversions: number | null
    conversionRate: Decimal | null
    createdAt: Date | null
  }

  export type RevenueTrackingMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    date: Date | null
    revenue: Decimal | null
    newUsers: number | null
    activeUsers: number | null
    churnedUsers: number | null
    mrr: Decimal | null
    churnRate: Decimal | null
    trials: number | null
    conversions: number | null
    conversionRate: Decimal | null
    createdAt: Date | null
  }

  export type RevenueTrackingCountAggregateOutputType = {
    id: number
    productId: number
    date: number
    revenue: number
    newUsers: number
    activeUsers: number
    churnedUsers: number
    mrr: number
    churnRate: number
    trials: number
    conversions: number
    conversionRate: number
    createdAt: number
    _all: number
  }


  export type RevenueTrackingAvgAggregateInputType = {
    revenue?: true
    newUsers?: true
    activeUsers?: true
    churnedUsers?: true
    mrr?: true
    churnRate?: true
    trials?: true
    conversions?: true
    conversionRate?: true
  }

  export type RevenueTrackingSumAggregateInputType = {
    revenue?: true
    newUsers?: true
    activeUsers?: true
    churnedUsers?: true
    mrr?: true
    churnRate?: true
    trials?: true
    conversions?: true
    conversionRate?: true
  }

  export type RevenueTrackingMinAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    revenue?: true
    newUsers?: true
    activeUsers?: true
    churnedUsers?: true
    mrr?: true
    churnRate?: true
    trials?: true
    conversions?: true
    conversionRate?: true
    createdAt?: true
  }

  export type RevenueTrackingMaxAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    revenue?: true
    newUsers?: true
    activeUsers?: true
    churnedUsers?: true
    mrr?: true
    churnRate?: true
    trials?: true
    conversions?: true
    conversionRate?: true
    createdAt?: true
  }

  export type RevenueTrackingCountAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    revenue?: true
    newUsers?: true
    activeUsers?: true
    churnedUsers?: true
    mrr?: true
    churnRate?: true
    trials?: true
    conversions?: true
    conversionRate?: true
    createdAt?: true
    _all?: true
  }

  export type RevenueTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenueTracking to aggregate.
     */
    where?: RevenueTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueTrackings to fetch.
     */
    orderBy?: RevenueTrackingOrderByWithRelationInput | RevenueTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevenueTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevenueTrackings
    **/
    _count?: true | RevenueTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RevenueTrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RevenueTrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevenueTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevenueTrackingMaxAggregateInputType
  }

  export type GetRevenueTrackingAggregateType<T extends RevenueTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateRevenueTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevenueTracking[P]>
      : GetScalarType<T[P], AggregateRevenueTracking[P]>
  }




  export type RevenueTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevenueTrackingWhereInput
    orderBy?: RevenueTrackingOrderByWithAggregationInput | RevenueTrackingOrderByWithAggregationInput[]
    by: RevenueTrackingScalarFieldEnum[] | RevenueTrackingScalarFieldEnum
    having?: RevenueTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevenueTrackingCountAggregateInputType | true
    _avg?: RevenueTrackingAvgAggregateInputType
    _sum?: RevenueTrackingSumAggregateInputType
    _min?: RevenueTrackingMinAggregateInputType
    _max?: RevenueTrackingMaxAggregateInputType
  }

  export type RevenueTrackingGroupByOutputType = {
    id: string
    productId: string
    date: Date
    revenue: Decimal
    newUsers: number
    activeUsers: number
    churnedUsers: number
    mrr: Decimal
    churnRate: Decimal
    trials: number
    conversions: number
    conversionRate: Decimal
    createdAt: Date
    _count: RevenueTrackingCountAggregateOutputType | null
    _avg: RevenueTrackingAvgAggregateOutputType | null
    _sum: RevenueTrackingSumAggregateOutputType | null
    _min: RevenueTrackingMinAggregateOutputType | null
    _max: RevenueTrackingMaxAggregateOutputType | null
  }

  type GetRevenueTrackingGroupByPayload<T extends RevenueTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevenueTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevenueTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevenueTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], RevenueTrackingGroupByOutputType[P]>
        }
      >
    >


  export type RevenueTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    revenue?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    churnedUsers?: boolean
    mrr?: boolean
    churnRate?: boolean
    trials?: boolean
    conversions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueTracking"]>

  export type RevenueTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    revenue?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    churnedUsers?: boolean
    mrr?: boolean
    churnRate?: boolean
    trials?: boolean
    conversions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueTracking"]>

  export type RevenueTrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    revenue?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    churnedUsers?: boolean
    mrr?: boolean
    churnRate?: boolean
    trials?: boolean
    conversions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revenueTracking"]>

  export type RevenueTrackingSelectScalar = {
    id?: boolean
    productId?: boolean
    date?: boolean
    revenue?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    churnedUsers?: boolean
    mrr?: boolean
    churnRate?: boolean
    trials?: boolean
    conversions?: boolean
    conversionRate?: boolean
    createdAt?: boolean
  }

  export type RevenueTrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "date" | "revenue" | "newUsers" | "activeUsers" | "churnedUsers" | "mrr" | "churnRate" | "trials" | "conversions" | "conversionRate" | "createdAt", ExtArgs["result"]["revenueTracking"]>
  export type RevenueTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RevenueTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RevenueTrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RevenueTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevenueTracking"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      date: Date
      revenue: Prisma.Decimal
      newUsers: number
      activeUsers: number
      churnedUsers: number
      mrr: Prisma.Decimal
      churnRate: Prisma.Decimal
      trials: number
      conversions: number
      conversionRate: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["revenueTracking"]>
    composites: {}
  }

  type RevenueTrackingGetPayload<S extends boolean | null | undefined | RevenueTrackingDefaultArgs> = $Result.GetResult<Prisma.$RevenueTrackingPayload, S>

  type RevenueTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevenueTrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevenueTrackingCountAggregateInputType | true
    }

  export interface RevenueTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevenueTracking'], meta: { name: 'RevenueTracking' } }
    /**
     * Find zero or one RevenueTracking that matches the filter.
     * @param {RevenueTrackingFindUniqueArgs} args - Arguments to find a RevenueTracking
     * @example
     * // Get one RevenueTracking
     * const revenueTracking = await prisma.revenueTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevenueTrackingFindUniqueArgs>(args: SelectSubset<T, RevenueTrackingFindUniqueArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevenueTracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevenueTrackingFindUniqueOrThrowArgs} args - Arguments to find a RevenueTracking
     * @example
     * // Get one RevenueTracking
     * const revenueTracking = await prisma.revenueTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevenueTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, RevenueTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenueTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingFindFirstArgs} args - Arguments to find a RevenueTracking
     * @example
     * // Get one RevenueTracking
     * const revenueTracking = await prisma.revenueTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevenueTrackingFindFirstArgs>(args?: SelectSubset<T, RevenueTrackingFindFirstArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevenueTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingFindFirstOrThrowArgs} args - Arguments to find a RevenueTracking
     * @example
     * // Get one RevenueTracking
     * const revenueTracking = await prisma.revenueTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevenueTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, RevenueTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevenueTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevenueTrackings
     * const revenueTrackings = await prisma.revenueTracking.findMany()
     * 
     * // Get first 10 RevenueTrackings
     * const revenueTrackings = await prisma.revenueTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revenueTrackingWithIdOnly = await prisma.revenueTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevenueTrackingFindManyArgs>(args?: SelectSubset<T, RevenueTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevenueTracking.
     * @param {RevenueTrackingCreateArgs} args - Arguments to create a RevenueTracking.
     * @example
     * // Create one RevenueTracking
     * const RevenueTracking = await prisma.revenueTracking.create({
     *   data: {
     *     // ... data to create a RevenueTracking
     *   }
     * })
     * 
     */
    create<T extends RevenueTrackingCreateArgs>(args: SelectSubset<T, RevenueTrackingCreateArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevenueTrackings.
     * @param {RevenueTrackingCreateManyArgs} args - Arguments to create many RevenueTrackings.
     * @example
     * // Create many RevenueTrackings
     * const revenueTracking = await prisma.revenueTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevenueTrackingCreateManyArgs>(args?: SelectSubset<T, RevenueTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevenueTrackings and returns the data saved in the database.
     * @param {RevenueTrackingCreateManyAndReturnArgs} args - Arguments to create many RevenueTrackings.
     * @example
     * // Create many RevenueTrackings
     * const revenueTracking = await prisma.revenueTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevenueTrackings and only return the `id`
     * const revenueTrackingWithIdOnly = await prisma.revenueTracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevenueTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, RevenueTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevenueTracking.
     * @param {RevenueTrackingDeleteArgs} args - Arguments to delete one RevenueTracking.
     * @example
     * // Delete one RevenueTracking
     * const RevenueTracking = await prisma.revenueTracking.delete({
     *   where: {
     *     // ... filter to delete one RevenueTracking
     *   }
     * })
     * 
     */
    delete<T extends RevenueTrackingDeleteArgs>(args: SelectSubset<T, RevenueTrackingDeleteArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevenueTracking.
     * @param {RevenueTrackingUpdateArgs} args - Arguments to update one RevenueTracking.
     * @example
     * // Update one RevenueTracking
     * const revenueTracking = await prisma.revenueTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevenueTrackingUpdateArgs>(args: SelectSubset<T, RevenueTrackingUpdateArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevenueTrackings.
     * @param {RevenueTrackingDeleteManyArgs} args - Arguments to filter RevenueTrackings to delete.
     * @example
     * // Delete a few RevenueTrackings
     * const { count } = await prisma.revenueTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevenueTrackingDeleteManyArgs>(args?: SelectSubset<T, RevenueTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenueTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevenueTrackings
     * const revenueTracking = await prisma.revenueTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevenueTrackingUpdateManyArgs>(args: SelectSubset<T, RevenueTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevenueTrackings and returns the data updated in the database.
     * @param {RevenueTrackingUpdateManyAndReturnArgs} args - Arguments to update many RevenueTrackings.
     * @example
     * // Update many RevenueTrackings
     * const revenueTracking = await prisma.revenueTracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevenueTrackings and only return the `id`
     * const revenueTrackingWithIdOnly = await prisma.revenueTracking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevenueTrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, RevenueTrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevenueTracking.
     * @param {RevenueTrackingUpsertArgs} args - Arguments to update or create a RevenueTracking.
     * @example
     * // Update or create a RevenueTracking
     * const revenueTracking = await prisma.revenueTracking.upsert({
     *   create: {
     *     // ... data to create a RevenueTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevenueTracking we want to update
     *   }
     * })
     */
    upsert<T extends RevenueTrackingUpsertArgs>(args: SelectSubset<T, RevenueTrackingUpsertArgs<ExtArgs>>): Prisma__RevenueTrackingClient<$Result.GetResult<Prisma.$RevenueTrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevenueTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingCountArgs} args - Arguments to filter RevenueTrackings to count.
     * @example
     * // Count the number of RevenueTrackings
     * const count = await prisma.revenueTracking.count({
     *   where: {
     *     // ... the filter for the RevenueTrackings we want to count
     *   }
     * })
    **/
    count<T extends RevenueTrackingCountArgs>(
      args?: Subset<T, RevenueTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevenueTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevenueTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevenueTrackingAggregateArgs>(args: Subset<T, RevenueTrackingAggregateArgs>): Prisma.PrismaPromise<GetRevenueTrackingAggregateType<T>>

    /**
     * Group by RevenueTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevenueTrackingGroupByArgs} args - Group by arguments.
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
      T extends RevenueTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevenueTrackingGroupByArgs['orderBy'] }
        : { orderBy?: RevenueTrackingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevenueTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevenueTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevenueTracking model
   */
  readonly fields: RevenueTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevenueTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevenueTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RevenueTracking model
   */
  interface RevenueTrackingFieldRefs {
    readonly id: FieldRef<"RevenueTracking", 'String'>
    readonly productId: FieldRef<"RevenueTracking", 'String'>
    readonly date: FieldRef<"RevenueTracking", 'DateTime'>
    readonly revenue: FieldRef<"RevenueTracking", 'Decimal'>
    readonly newUsers: FieldRef<"RevenueTracking", 'Int'>
    readonly activeUsers: FieldRef<"RevenueTracking", 'Int'>
    readonly churnedUsers: FieldRef<"RevenueTracking", 'Int'>
    readonly mrr: FieldRef<"RevenueTracking", 'Decimal'>
    readonly churnRate: FieldRef<"RevenueTracking", 'Decimal'>
    readonly trials: FieldRef<"RevenueTracking", 'Int'>
    readonly conversions: FieldRef<"RevenueTracking", 'Int'>
    readonly conversionRate: FieldRef<"RevenueTracking", 'Decimal'>
    readonly createdAt: FieldRef<"RevenueTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevenueTracking findUnique
   */
  export type RevenueTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * Filter, which RevenueTracking to fetch.
     */
    where: RevenueTrackingWhereUniqueInput
  }

  /**
   * RevenueTracking findUniqueOrThrow
   */
  export type RevenueTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * Filter, which RevenueTracking to fetch.
     */
    where: RevenueTrackingWhereUniqueInput
  }

  /**
   * RevenueTracking findFirst
   */
  export type RevenueTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * Filter, which RevenueTracking to fetch.
     */
    where?: RevenueTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueTrackings to fetch.
     */
    orderBy?: RevenueTrackingOrderByWithRelationInput | RevenueTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenueTrackings.
     */
    cursor?: RevenueTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueTrackings.
     */
    distinct?: RevenueTrackingScalarFieldEnum | RevenueTrackingScalarFieldEnum[]
  }

  /**
   * RevenueTracking findFirstOrThrow
   */
  export type RevenueTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * Filter, which RevenueTracking to fetch.
     */
    where?: RevenueTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueTrackings to fetch.
     */
    orderBy?: RevenueTrackingOrderByWithRelationInput | RevenueTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevenueTrackings.
     */
    cursor?: RevenueTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevenueTrackings.
     */
    distinct?: RevenueTrackingScalarFieldEnum | RevenueTrackingScalarFieldEnum[]
  }

  /**
   * RevenueTracking findMany
   */
  export type RevenueTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * Filter, which RevenueTrackings to fetch.
     */
    where?: RevenueTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevenueTrackings to fetch.
     */
    orderBy?: RevenueTrackingOrderByWithRelationInput | RevenueTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevenueTrackings.
     */
    cursor?: RevenueTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevenueTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevenueTrackings.
     */
    skip?: number
    distinct?: RevenueTrackingScalarFieldEnum | RevenueTrackingScalarFieldEnum[]
  }

  /**
   * RevenueTracking create
   */
  export type RevenueTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a RevenueTracking.
     */
    data: XOR<RevenueTrackingCreateInput, RevenueTrackingUncheckedCreateInput>
  }

  /**
   * RevenueTracking createMany
   */
  export type RevenueTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevenueTrackings.
     */
    data: RevenueTrackingCreateManyInput | RevenueTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RevenueTracking createManyAndReturn
   */
  export type RevenueTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * The data used to create many RevenueTrackings.
     */
    data: RevenueTrackingCreateManyInput | RevenueTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenueTracking update
   */
  export type RevenueTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a RevenueTracking.
     */
    data: XOR<RevenueTrackingUpdateInput, RevenueTrackingUncheckedUpdateInput>
    /**
     * Choose, which RevenueTracking to update.
     */
    where: RevenueTrackingWhereUniqueInput
  }

  /**
   * RevenueTracking updateMany
   */
  export type RevenueTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevenueTrackings.
     */
    data: XOR<RevenueTrackingUpdateManyMutationInput, RevenueTrackingUncheckedUpdateManyInput>
    /**
     * Filter which RevenueTrackings to update
     */
    where?: RevenueTrackingWhereInput
    /**
     * Limit how many RevenueTrackings to update.
     */
    limit?: number
  }

  /**
   * RevenueTracking updateManyAndReturn
   */
  export type RevenueTrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * The data used to update RevenueTrackings.
     */
    data: XOR<RevenueTrackingUpdateManyMutationInput, RevenueTrackingUncheckedUpdateManyInput>
    /**
     * Filter which RevenueTrackings to update
     */
    where?: RevenueTrackingWhereInput
    /**
     * Limit how many RevenueTrackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevenueTracking upsert
   */
  export type RevenueTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the RevenueTracking to update in case it exists.
     */
    where: RevenueTrackingWhereUniqueInput
    /**
     * In case the RevenueTracking found by the `where` argument doesn't exist, create a new RevenueTracking with this data.
     */
    create: XOR<RevenueTrackingCreateInput, RevenueTrackingUncheckedCreateInput>
    /**
     * In case the RevenueTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevenueTrackingUpdateInput, RevenueTrackingUncheckedUpdateInput>
  }

  /**
   * RevenueTracking delete
   */
  export type RevenueTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
    /**
     * Filter which RevenueTracking to delete.
     */
    where: RevenueTrackingWhereUniqueInput
  }

  /**
   * RevenueTracking deleteMany
   */
  export type RevenueTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevenueTrackings to delete
     */
    where?: RevenueTrackingWhereInput
    /**
     * Limit how many RevenueTrackings to delete.
     */
    limit?: number
  }

  /**
   * RevenueTracking without action
   */
  export type RevenueTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevenueTracking
     */
    select?: RevenueTrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevenueTracking
     */
    omit?: RevenueTrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevenueTrackingInclude<ExtArgs> | null
  }


  /**
   * Model UserGrowth
   */

  export type AggregateUserGrowth = {
    _count: UserGrowthCountAggregateOutputType | null
    _avg: UserGrowthAvgAggregateOutputType | null
    _sum: UserGrowthSumAggregateOutputType | null
    _min: UserGrowthMinAggregateOutputType | null
    _max: UserGrowthMaxAggregateOutputType | null
  }

  export type UserGrowthAvgAggregateOutputType = {
    totalUsers: number | null
    newUsers: number | null
    activeUsers: number | null
    sessions: number | null
    avgSessionDuration: number | null
    dau: number | null
    wau: number | null
    mau: number | null
  }

  export type UserGrowthSumAggregateOutputType = {
    totalUsers: number | null
    newUsers: number | null
    activeUsers: number | null
    sessions: number | null
    avgSessionDuration: number | null
    dau: number | null
    wau: number | null
    mau: number | null
  }

  export type UserGrowthMinAggregateOutputType = {
    id: string | null
    productId: string | null
    date: Date | null
    totalUsers: number | null
    newUsers: number | null
    activeUsers: number | null
    sessions: number | null
    avgSessionDuration: number | null
    dau: number | null
    wau: number | null
    mau: number | null
    createdAt: Date | null
  }

  export type UserGrowthMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    date: Date | null
    totalUsers: number | null
    newUsers: number | null
    activeUsers: number | null
    sessions: number | null
    avgSessionDuration: number | null
    dau: number | null
    wau: number | null
    mau: number | null
    createdAt: Date | null
  }

  export type UserGrowthCountAggregateOutputType = {
    id: number
    productId: number
    date: number
    totalUsers: number
    newUsers: number
    activeUsers: number
    sessions: number
    avgSessionDuration: number
    dau: number
    wau: number
    mau: number
    createdAt: number
    _all: number
  }


  export type UserGrowthAvgAggregateInputType = {
    totalUsers?: true
    newUsers?: true
    activeUsers?: true
    sessions?: true
    avgSessionDuration?: true
    dau?: true
    wau?: true
    mau?: true
  }

  export type UserGrowthSumAggregateInputType = {
    totalUsers?: true
    newUsers?: true
    activeUsers?: true
    sessions?: true
    avgSessionDuration?: true
    dau?: true
    wau?: true
    mau?: true
  }

  export type UserGrowthMinAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    totalUsers?: true
    newUsers?: true
    activeUsers?: true
    sessions?: true
    avgSessionDuration?: true
    dau?: true
    wau?: true
    mau?: true
    createdAt?: true
  }

  export type UserGrowthMaxAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    totalUsers?: true
    newUsers?: true
    activeUsers?: true
    sessions?: true
    avgSessionDuration?: true
    dau?: true
    wau?: true
    mau?: true
    createdAt?: true
  }

  export type UserGrowthCountAggregateInputType = {
    id?: true
    productId?: true
    date?: true
    totalUsers?: true
    newUsers?: true
    activeUsers?: true
    sessions?: true
    avgSessionDuration?: true
    dau?: true
    wau?: true
    mau?: true
    createdAt?: true
    _all?: true
  }

  export type UserGrowthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGrowth to aggregate.
     */
    where?: UserGrowthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrowths to fetch.
     */
    orderBy?: UserGrowthOrderByWithRelationInput | UserGrowthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGrowthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrowths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrowths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGrowths
    **/
    _count?: true | UserGrowthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGrowthAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGrowthSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGrowthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGrowthMaxAggregateInputType
  }

  export type GetUserGrowthAggregateType<T extends UserGrowthAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGrowth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGrowth[P]>
      : GetScalarType<T[P], AggregateUserGrowth[P]>
  }




  export type UserGrowthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrowthWhereInput
    orderBy?: UserGrowthOrderByWithAggregationInput | UserGrowthOrderByWithAggregationInput[]
    by: UserGrowthScalarFieldEnum[] | UserGrowthScalarFieldEnum
    having?: UserGrowthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGrowthCountAggregateInputType | true
    _avg?: UserGrowthAvgAggregateInputType
    _sum?: UserGrowthSumAggregateInputType
    _min?: UserGrowthMinAggregateInputType
    _max?: UserGrowthMaxAggregateInputType
  }

  export type UserGrowthGroupByOutputType = {
    id: string
    productId: string
    date: Date
    totalUsers: number
    newUsers: number
    activeUsers: number
    sessions: number
    avgSessionDuration: number
    dau: number
    wau: number
    mau: number
    createdAt: Date
    _count: UserGrowthCountAggregateOutputType | null
    _avg: UserGrowthAvgAggregateOutputType | null
    _sum: UserGrowthSumAggregateOutputType | null
    _min: UserGrowthMinAggregateOutputType | null
    _max: UserGrowthMaxAggregateOutputType | null
  }

  type GetUserGrowthGroupByPayload<T extends UserGrowthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGrowthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGrowthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGrowthGroupByOutputType[P]>
            : GetScalarType<T[P], UserGrowthGroupByOutputType[P]>
        }
      >
    >


  export type UserGrowthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    totalUsers?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    sessions?: boolean
    avgSessionDuration?: boolean
    dau?: boolean
    wau?: boolean
    mau?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrowth"]>

  export type UserGrowthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    totalUsers?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    sessions?: boolean
    avgSessionDuration?: boolean
    dau?: boolean
    wau?: boolean
    mau?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrowth"]>

  export type UserGrowthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    date?: boolean
    totalUsers?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    sessions?: boolean
    avgSessionDuration?: boolean
    dau?: boolean
    wau?: boolean
    mau?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrowth"]>

  export type UserGrowthSelectScalar = {
    id?: boolean
    productId?: boolean
    date?: boolean
    totalUsers?: boolean
    newUsers?: boolean
    activeUsers?: boolean
    sessions?: boolean
    avgSessionDuration?: boolean
    dau?: boolean
    wau?: boolean
    mau?: boolean
    createdAt?: boolean
  }

  export type UserGrowthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "date" | "totalUsers" | "newUsers" | "activeUsers" | "sessions" | "avgSessionDuration" | "dau" | "wau" | "mau" | "createdAt", ExtArgs["result"]["userGrowth"]>
  export type UserGrowthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserGrowthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserGrowthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserGrowthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGrowth"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      date: Date
      totalUsers: number
      newUsers: number
      activeUsers: number
      sessions: number
      avgSessionDuration: number
      dau: number
      wau: number
      mau: number
      createdAt: Date
    }, ExtArgs["result"]["userGrowth"]>
    composites: {}
  }

  type UserGrowthGetPayload<S extends boolean | null | undefined | UserGrowthDefaultArgs> = $Result.GetResult<Prisma.$UserGrowthPayload, S>

  type UserGrowthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGrowthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGrowthCountAggregateInputType | true
    }

  export interface UserGrowthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGrowth'], meta: { name: 'UserGrowth' } }
    /**
     * Find zero or one UserGrowth that matches the filter.
     * @param {UserGrowthFindUniqueArgs} args - Arguments to find a UserGrowth
     * @example
     * // Get one UserGrowth
     * const userGrowth = await prisma.userGrowth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGrowthFindUniqueArgs>(args: SelectSubset<T, UserGrowthFindUniqueArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGrowth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGrowthFindUniqueOrThrowArgs} args - Arguments to find a UserGrowth
     * @example
     * // Get one UserGrowth
     * const userGrowth = await prisma.userGrowth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGrowthFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGrowthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGrowth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthFindFirstArgs} args - Arguments to find a UserGrowth
     * @example
     * // Get one UserGrowth
     * const userGrowth = await prisma.userGrowth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGrowthFindFirstArgs>(args?: SelectSubset<T, UserGrowthFindFirstArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGrowth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthFindFirstOrThrowArgs} args - Arguments to find a UserGrowth
     * @example
     * // Get one UserGrowth
     * const userGrowth = await prisma.userGrowth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGrowthFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGrowthFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGrowths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGrowths
     * const userGrowths = await prisma.userGrowth.findMany()
     * 
     * // Get first 10 UserGrowths
     * const userGrowths = await prisma.userGrowth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGrowthWithIdOnly = await prisma.userGrowth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGrowthFindManyArgs>(args?: SelectSubset<T, UserGrowthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGrowth.
     * @param {UserGrowthCreateArgs} args - Arguments to create a UserGrowth.
     * @example
     * // Create one UserGrowth
     * const UserGrowth = await prisma.userGrowth.create({
     *   data: {
     *     // ... data to create a UserGrowth
     *   }
     * })
     * 
     */
    create<T extends UserGrowthCreateArgs>(args: SelectSubset<T, UserGrowthCreateArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGrowths.
     * @param {UserGrowthCreateManyArgs} args - Arguments to create many UserGrowths.
     * @example
     * // Create many UserGrowths
     * const userGrowth = await prisma.userGrowth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGrowthCreateManyArgs>(args?: SelectSubset<T, UserGrowthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGrowths and returns the data saved in the database.
     * @param {UserGrowthCreateManyAndReturnArgs} args - Arguments to create many UserGrowths.
     * @example
     * // Create many UserGrowths
     * const userGrowth = await prisma.userGrowth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGrowths and only return the `id`
     * const userGrowthWithIdOnly = await prisma.userGrowth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGrowthCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGrowthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGrowth.
     * @param {UserGrowthDeleteArgs} args - Arguments to delete one UserGrowth.
     * @example
     * // Delete one UserGrowth
     * const UserGrowth = await prisma.userGrowth.delete({
     *   where: {
     *     // ... filter to delete one UserGrowth
     *   }
     * })
     * 
     */
    delete<T extends UserGrowthDeleteArgs>(args: SelectSubset<T, UserGrowthDeleteArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGrowth.
     * @param {UserGrowthUpdateArgs} args - Arguments to update one UserGrowth.
     * @example
     * // Update one UserGrowth
     * const userGrowth = await prisma.userGrowth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGrowthUpdateArgs>(args: SelectSubset<T, UserGrowthUpdateArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGrowths.
     * @param {UserGrowthDeleteManyArgs} args - Arguments to filter UserGrowths to delete.
     * @example
     * // Delete a few UserGrowths
     * const { count } = await prisma.userGrowth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGrowthDeleteManyArgs>(args?: SelectSubset<T, UserGrowthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGrowths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGrowths
     * const userGrowth = await prisma.userGrowth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGrowthUpdateManyArgs>(args: SelectSubset<T, UserGrowthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGrowths and returns the data updated in the database.
     * @param {UserGrowthUpdateManyAndReturnArgs} args - Arguments to update many UserGrowths.
     * @example
     * // Update many UserGrowths
     * const userGrowth = await prisma.userGrowth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGrowths and only return the `id`
     * const userGrowthWithIdOnly = await prisma.userGrowth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGrowthUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGrowthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGrowth.
     * @param {UserGrowthUpsertArgs} args - Arguments to update or create a UserGrowth.
     * @example
     * // Update or create a UserGrowth
     * const userGrowth = await prisma.userGrowth.upsert({
     *   create: {
     *     // ... data to create a UserGrowth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGrowth we want to update
     *   }
     * })
     */
    upsert<T extends UserGrowthUpsertArgs>(args: SelectSubset<T, UserGrowthUpsertArgs<ExtArgs>>): Prisma__UserGrowthClient<$Result.GetResult<Prisma.$UserGrowthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGrowths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthCountArgs} args - Arguments to filter UserGrowths to count.
     * @example
     * // Count the number of UserGrowths
     * const count = await prisma.userGrowth.count({
     *   where: {
     *     // ... the filter for the UserGrowths we want to count
     *   }
     * })
    **/
    count<T extends UserGrowthCountArgs>(
      args?: Subset<T, UserGrowthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGrowthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGrowth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGrowthAggregateArgs>(args: Subset<T, UserGrowthAggregateArgs>): Prisma.PrismaPromise<GetUserGrowthAggregateType<T>>

    /**
     * Group by UserGrowth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrowthGroupByArgs} args - Group by arguments.
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
      T extends UserGrowthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGrowthGroupByArgs['orderBy'] }
        : { orderBy?: UserGrowthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGrowthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGrowthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGrowth model
   */
  readonly fields: UserGrowthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGrowth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGrowthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGrowth model
   */
  interface UserGrowthFieldRefs {
    readonly id: FieldRef<"UserGrowth", 'String'>
    readonly productId: FieldRef<"UserGrowth", 'String'>
    readonly date: FieldRef<"UserGrowth", 'DateTime'>
    readonly totalUsers: FieldRef<"UserGrowth", 'Int'>
    readonly newUsers: FieldRef<"UserGrowth", 'Int'>
    readonly activeUsers: FieldRef<"UserGrowth", 'Int'>
    readonly sessions: FieldRef<"UserGrowth", 'Int'>
    readonly avgSessionDuration: FieldRef<"UserGrowth", 'Int'>
    readonly dau: FieldRef<"UserGrowth", 'Int'>
    readonly wau: FieldRef<"UserGrowth", 'Int'>
    readonly mau: FieldRef<"UserGrowth", 'Int'>
    readonly createdAt: FieldRef<"UserGrowth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGrowth findUnique
   */
  export type UserGrowthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * Filter, which UserGrowth to fetch.
     */
    where: UserGrowthWhereUniqueInput
  }

  /**
   * UserGrowth findUniqueOrThrow
   */
  export type UserGrowthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * Filter, which UserGrowth to fetch.
     */
    where: UserGrowthWhereUniqueInput
  }

  /**
   * UserGrowth findFirst
   */
  export type UserGrowthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * Filter, which UserGrowth to fetch.
     */
    where?: UserGrowthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrowths to fetch.
     */
    orderBy?: UserGrowthOrderByWithRelationInput | UserGrowthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGrowths.
     */
    cursor?: UserGrowthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrowths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrowths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGrowths.
     */
    distinct?: UserGrowthScalarFieldEnum | UserGrowthScalarFieldEnum[]
  }

  /**
   * UserGrowth findFirstOrThrow
   */
  export type UserGrowthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * Filter, which UserGrowth to fetch.
     */
    where?: UserGrowthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrowths to fetch.
     */
    orderBy?: UserGrowthOrderByWithRelationInput | UserGrowthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGrowths.
     */
    cursor?: UserGrowthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrowths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrowths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGrowths.
     */
    distinct?: UserGrowthScalarFieldEnum | UserGrowthScalarFieldEnum[]
  }

  /**
   * UserGrowth findMany
   */
  export type UserGrowthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * Filter, which UserGrowths to fetch.
     */
    where?: UserGrowthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrowths to fetch.
     */
    orderBy?: UserGrowthOrderByWithRelationInput | UserGrowthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGrowths.
     */
    cursor?: UserGrowthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrowths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrowths.
     */
    skip?: number
    distinct?: UserGrowthScalarFieldEnum | UserGrowthScalarFieldEnum[]
  }

  /**
   * UserGrowth create
   */
  export type UserGrowthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGrowth.
     */
    data: XOR<UserGrowthCreateInput, UserGrowthUncheckedCreateInput>
  }

  /**
   * UserGrowth createMany
   */
  export type UserGrowthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGrowths.
     */
    data: UserGrowthCreateManyInput | UserGrowthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGrowth createManyAndReturn
   */
  export type UserGrowthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * The data used to create many UserGrowths.
     */
    data: UserGrowthCreateManyInput | UserGrowthCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGrowth update
   */
  export type UserGrowthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGrowth.
     */
    data: XOR<UserGrowthUpdateInput, UserGrowthUncheckedUpdateInput>
    /**
     * Choose, which UserGrowth to update.
     */
    where: UserGrowthWhereUniqueInput
  }

  /**
   * UserGrowth updateMany
   */
  export type UserGrowthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGrowths.
     */
    data: XOR<UserGrowthUpdateManyMutationInput, UserGrowthUncheckedUpdateManyInput>
    /**
     * Filter which UserGrowths to update
     */
    where?: UserGrowthWhereInput
    /**
     * Limit how many UserGrowths to update.
     */
    limit?: number
  }

  /**
   * UserGrowth updateManyAndReturn
   */
  export type UserGrowthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * The data used to update UserGrowths.
     */
    data: XOR<UserGrowthUpdateManyMutationInput, UserGrowthUncheckedUpdateManyInput>
    /**
     * Filter which UserGrowths to update
     */
    where?: UserGrowthWhereInput
    /**
     * Limit how many UserGrowths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGrowth upsert
   */
  export type UserGrowthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGrowth to update in case it exists.
     */
    where: UserGrowthWhereUniqueInput
    /**
     * In case the UserGrowth found by the `where` argument doesn't exist, create a new UserGrowth with this data.
     */
    create: XOR<UserGrowthCreateInput, UserGrowthUncheckedCreateInput>
    /**
     * In case the UserGrowth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGrowthUpdateInput, UserGrowthUncheckedUpdateInput>
  }

  /**
   * UserGrowth delete
   */
  export type UserGrowthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
    /**
     * Filter which UserGrowth to delete.
     */
    where: UserGrowthWhereUniqueInput
  }

  /**
   * UserGrowth deleteMany
   */
  export type UserGrowthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGrowths to delete
     */
    where?: UserGrowthWhereInput
    /**
     * Limit how many UserGrowths to delete.
     */
    limit?: number
  }

  /**
   * UserGrowth without action
   */
  export type UserGrowthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrowth
     */
    select?: UserGrowthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrowth
     */
    omit?: UserGrowthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrowthInclude<ExtArgs> | null
  }


  /**
   * Model ProductMetric
   */

  export type AggregateProductMetric = {
    _count: ProductMetricCountAggregateOutputType | null
    _avg: ProductMetricAvgAggregateOutputType | null
    _sum: ProductMetricSumAggregateOutputType | null
    _min: ProductMetricMinAggregateOutputType | null
    _max: ProductMetricMaxAggregateOutputType | null
  }

  export type ProductMetricAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type ProductMetricSumAggregateOutputType = {
    value: Decimal | null
  }

  export type ProductMetricMinAggregateOutputType = {
    id: string | null
    productId: string | null
    metricType: $Enums.MetricType | null
    value: Decimal | null
    date: Date | null
    createdAt: Date | null
  }

  export type ProductMetricMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    metricType: $Enums.MetricType | null
    value: Decimal | null
    date: Date | null
    createdAt: Date | null
  }

  export type ProductMetricCountAggregateOutputType = {
    id: number
    productId: number
    metricType: number
    value: number
    date: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ProductMetricAvgAggregateInputType = {
    value?: true
  }

  export type ProductMetricSumAggregateInputType = {
    value?: true
  }

  export type ProductMetricMinAggregateInputType = {
    id?: true
    productId?: true
    metricType?: true
    value?: true
    date?: true
    createdAt?: true
  }

  export type ProductMetricMaxAggregateInputType = {
    id?: true
    productId?: true
    metricType?: true
    value?: true
    date?: true
    createdAt?: true
  }

  export type ProductMetricCountAggregateInputType = {
    id?: true
    productId?: true
    metricType?: true
    value?: true
    date?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ProductMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMetric to aggregate.
     */
    where?: ProductMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricOrderByWithRelationInput | ProductMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMetrics
    **/
    _count?: true | ProductMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMetricMaxAggregateInputType
  }

  export type GetProductMetricAggregateType<T extends ProductMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMetric[P]>
      : GetScalarType<T[P], AggregateProductMetric[P]>
  }




  export type ProductMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMetricWhereInput
    orderBy?: ProductMetricOrderByWithAggregationInput | ProductMetricOrderByWithAggregationInput[]
    by: ProductMetricScalarFieldEnum[] | ProductMetricScalarFieldEnum
    having?: ProductMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMetricCountAggregateInputType | true
    _avg?: ProductMetricAvgAggregateInputType
    _sum?: ProductMetricSumAggregateInputType
    _min?: ProductMetricMinAggregateInputType
    _max?: ProductMetricMaxAggregateInputType
  }

  export type ProductMetricGroupByOutputType = {
    id: string
    productId: string
    metricType: $Enums.MetricType
    value: Decimal
    date: Date
    metadata: JsonValue | null
    createdAt: Date
    _count: ProductMetricCountAggregateOutputType | null
    _avg: ProductMetricAvgAggregateOutputType | null
    _sum: ProductMetricSumAggregateOutputType | null
    _min: ProductMetricMinAggregateOutputType | null
    _max: ProductMetricMaxAggregateOutputType | null
  }

  type GetProductMetricGroupByPayload<T extends ProductMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMetricGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMetricGroupByOutputType[P]>
        }
      >
    >


  export type ProductMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    metricType?: boolean
    value?: boolean
    date?: boolean
    metadata?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMetric"]>

  export type ProductMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    metricType?: boolean
    value?: boolean
    date?: boolean
    metadata?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMetric"]>

  export type ProductMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    metricType?: boolean
    value?: boolean
    date?: boolean
    metadata?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMetric"]>

  export type ProductMetricSelectScalar = {
    id?: boolean
    productId?: boolean
    metricType?: boolean
    value?: boolean
    date?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ProductMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "metricType" | "value" | "date" | "metadata" | "createdAt", ExtArgs["result"]["productMetric"]>
  export type ProductMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMetric"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      metricType: $Enums.MetricType
      value: Prisma.Decimal
      date: Date
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["productMetric"]>
    composites: {}
  }

  type ProductMetricGetPayload<S extends boolean | null | undefined | ProductMetricDefaultArgs> = $Result.GetResult<Prisma.$ProductMetricPayload, S>

  type ProductMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductMetricCountAggregateInputType | true
    }

  export interface ProductMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMetric'], meta: { name: 'ProductMetric' } }
    /**
     * Find zero or one ProductMetric that matches the filter.
     * @param {ProductMetricFindUniqueArgs} args - Arguments to find a ProductMetric
     * @example
     * // Get one ProductMetric
     * const productMetric = await prisma.productMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMetricFindUniqueArgs>(args: SelectSubset<T, ProductMetricFindUniqueArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductMetricFindUniqueOrThrowArgs} args - Arguments to find a ProductMetric
     * @example
     * // Get one ProductMetric
     * const productMetric = await prisma.productMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricFindFirstArgs} args - Arguments to find a ProductMetric
     * @example
     * // Get one ProductMetric
     * const productMetric = await prisma.productMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMetricFindFirstArgs>(args?: SelectSubset<T, ProductMetricFindFirstArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricFindFirstOrThrowArgs} args - Arguments to find a ProductMetric
     * @example
     * // Get one ProductMetric
     * const productMetric = await prisma.productMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMetrics
     * const productMetrics = await prisma.productMetric.findMany()
     * 
     * // Get first 10 ProductMetrics
     * const productMetrics = await prisma.productMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productMetricWithIdOnly = await prisma.productMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductMetricFindManyArgs>(args?: SelectSubset<T, ProductMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductMetric.
     * @param {ProductMetricCreateArgs} args - Arguments to create a ProductMetric.
     * @example
     * // Create one ProductMetric
     * const ProductMetric = await prisma.productMetric.create({
     *   data: {
     *     // ... data to create a ProductMetric
     *   }
     * })
     * 
     */
    create<T extends ProductMetricCreateArgs>(args: SelectSubset<T, ProductMetricCreateArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductMetrics.
     * @param {ProductMetricCreateManyArgs} args - Arguments to create many ProductMetrics.
     * @example
     * // Create many ProductMetrics
     * const productMetric = await prisma.productMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMetricCreateManyArgs>(args?: SelectSubset<T, ProductMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMetrics and returns the data saved in the database.
     * @param {ProductMetricCreateManyAndReturnArgs} args - Arguments to create many ProductMetrics.
     * @example
     * // Create many ProductMetrics
     * const productMetric = await prisma.productMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMetrics and only return the `id`
     * const productMetricWithIdOnly = await prisma.productMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductMetric.
     * @param {ProductMetricDeleteArgs} args - Arguments to delete one ProductMetric.
     * @example
     * // Delete one ProductMetric
     * const ProductMetric = await prisma.productMetric.delete({
     *   where: {
     *     // ... filter to delete one ProductMetric
     *   }
     * })
     * 
     */
    delete<T extends ProductMetricDeleteArgs>(args: SelectSubset<T, ProductMetricDeleteArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductMetric.
     * @param {ProductMetricUpdateArgs} args - Arguments to update one ProductMetric.
     * @example
     * // Update one ProductMetric
     * const productMetric = await prisma.productMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMetricUpdateArgs>(args: SelectSubset<T, ProductMetricUpdateArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductMetrics.
     * @param {ProductMetricDeleteManyArgs} args - Arguments to filter ProductMetrics to delete.
     * @example
     * // Delete a few ProductMetrics
     * const { count } = await prisma.productMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMetricDeleteManyArgs>(args?: SelectSubset<T, ProductMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMetrics
     * const productMetric = await prisma.productMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMetricUpdateManyArgs>(args: SelectSubset<T, ProductMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMetrics and returns the data updated in the database.
     * @param {ProductMetricUpdateManyAndReturnArgs} args - Arguments to update many ProductMetrics.
     * @example
     * // Update many ProductMetrics
     * const productMetric = await prisma.productMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductMetrics and only return the `id`
     * const productMetricWithIdOnly = await prisma.productMetric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductMetric.
     * @param {ProductMetricUpsertArgs} args - Arguments to update or create a ProductMetric.
     * @example
     * // Update or create a ProductMetric
     * const productMetric = await prisma.productMetric.upsert({
     *   create: {
     *     // ... data to create a ProductMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMetric we want to update
     *   }
     * })
     */
    upsert<T extends ProductMetricUpsertArgs>(args: SelectSubset<T, ProductMetricUpsertArgs<ExtArgs>>): Prisma__ProductMetricClient<$Result.GetResult<Prisma.$ProductMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricCountArgs} args - Arguments to filter ProductMetrics to count.
     * @example
     * // Count the number of ProductMetrics
     * const count = await prisma.productMetric.count({
     *   where: {
     *     // ... the filter for the ProductMetrics we want to count
     *   }
     * })
    **/
    count<T extends ProductMetricCountArgs>(
      args?: Subset<T, ProductMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductMetricAggregateArgs>(args: Subset<T, ProductMetricAggregateArgs>): Prisma.PrismaPromise<GetProductMetricAggregateType<T>>

    /**
     * Group by ProductMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetricGroupByArgs} args - Group by arguments.
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
      T extends ProductMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMetricGroupByArgs['orderBy'] }
        : { orderBy?: ProductMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMetric model
   */
  readonly fields: ProductMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductMetric model
   */
  interface ProductMetricFieldRefs {
    readonly id: FieldRef<"ProductMetric", 'String'>
    readonly productId: FieldRef<"ProductMetric", 'String'>
    readonly metricType: FieldRef<"ProductMetric", 'MetricType'>
    readonly value: FieldRef<"ProductMetric", 'Decimal'>
    readonly date: FieldRef<"ProductMetric", 'DateTime'>
    readonly metadata: FieldRef<"ProductMetric", 'Json'>
    readonly createdAt: FieldRef<"ProductMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductMetric findUnique
   */
  export type ProductMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetric to fetch.
     */
    where: ProductMetricWhereUniqueInput
  }

  /**
   * ProductMetric findUniqueOrThrow
   */
  export type ProductMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetric to fetch.
     */
    where: ProductMetricWhereUniqueInput
  }

  /**
   * ProductMetric findFirst
   */
  export type ProductMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetric to fetch.
     */
    where?: ProductMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricOrderByWithRelationInput | ProductMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMetrics.
     */
    cursor?: ProductMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMetrics.
     */
    distinct?: ProductMetricScalarFieldEnum | ProductMetricScalarFieldEnum[]
  }

  /**
   * ProductMetric findFirstOrThrow
   */
  export type ProductMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetric to fetch.
     */
    where?: ProductMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricOrderByWithRelationInput | ProductMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMetrics.
     */
    cursor?: ProductMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMetrics.
     */
    distinct?: ProductMetricScalarFieldEnum | ProductMetricScalarFieldEnum[]
  }

  /**
   * ProductMetric findMany
   */
  export type ProductMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetrics to fetch.
     */
    where?: ProductMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetrics to fetch.
     */
    orderBy?: ProductMetricOrderByWithRelationInput | ProductMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMetrics.
     */
    cursor?: ProductMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetrics.
     */
    skip?: number
    distinct?: ProductMetricScalarFieldEnum | ProductMetricScalarFieldEnum[]
  }

  /**
   * ProductMetric create
   */
  export type ProductMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMetric.
     */
    data: XOR<ProductMetricCreateInput, ProductMetricUncheckedCreateInput>
  }

  /**
   * ProductMetric createMany
   */
  export type ProductMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMetrics.
     */
    data: ProductMetricCreateManyInput | ProductMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductMetric createManyAndReturn
   */
  export type ProductMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * The data used to create many ProductMetrics.
     */
    data: ProductMetricCreateManyInput | ProductMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMetric update
   */
  export type ProductMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMetric.
     */
    data: XOR<ProductMetricUpdateInput, ProductMetricUncheckedUpdateInput>
    /**
     * Choose, which ProductMetric to update.
     */
    where: ProductMetricWhereUniqueInput
  }

  /**
   * ProductMetric updateMany
   */
  export type ProductMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMetrics.
     */
    data: XOR<ProductMetricUpdateManyMutationInput, ProductMetricUncheckedUpdateManyInput>
    /**
     * Filter which ProductMetrics to update
     */
    where?: ProductMetricWhereInput
    /**
     * Limit how many ProductMetrics to update.
     */
    limit?: number
  }

  /**
   * ProductMetric updateManyAndReturn
   */
  export type ProductMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * The data used to update ProductMetrics.
     */
    data: XOR<ProductMetricUpdateManyMutationInput, ProductMetricUncheckedUpdateManyInput>
    /**
     * Filter which ProductMetrics to update
     */
    where?: ProductMetricWhereInput
    /**
     * Limit how many ProductMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMetric upsert
   */
  export type ProductMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMetric to update in case it exists.
     */
    where: ProductMetricWhereUniqueInput
    /**
     * In case the ProductMetric found by the `where` argument doesn't exist, create a new ProductMetric with this data.
     */
    create: XOR<ProductMetricCreateInput, ProductMetricUncheckedCreateInput>
    /**
     * In case the ProductMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMetricUpdateInput, ProductMetricUncheckedUpdateInput>
  }

  /**
   * ProductMetric delete
   */
  export type ProductMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
    /**
     * Filter which ProductMetric to delete.
     */
    where: ProductMetricWhereUniqueInput
  }

  /**
   * ProductMetric deleteMany
   */
  export type ProductMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMetrics to delete
     */
    where?: ProductMetricWhereInput
    /**
     * Limit how many ProductMetrics to delete.
     */
    limit?: number
  }

  /**
   * ProductMetric without action
   */
  export type ProductMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetric
     */
    select?: ProductMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetric
     */
    omit?: ProductMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetricInclude<ExtArgs> | null
  }


  /**
   * Model RoadmapItem
   */

  export type AggregateRoadmapItem = {
    _count: RoadmapItemCountAggregateOutputType | null
    _avg: RoadmapItemAvgAggregateOutputType | null
    _sum: RoadmapItemSumAggregateOutputType | null
    _min: RoadmapItemMinAggregateOutputType | null
    _max: RoadmapItemMaxAggregateOutputType | null
  }

  export type RoadmapItemAvgAggregateOutputType = {
    votes: number | null
  }

  export type RoadmapItemSumAggregateOutputType = {
    votes: number | null
  }

  export type RoadmapItemMinAggregateOutputType = {
    id: string | null
    productId: string | null
    title: string | null
    description: string | null
    category: $Enums.RoadmapCategory | null
    priority: $Enums.RoadmapPriority | null
    status: $Enums.RoadmapStatus | null
    votes: number | null
    quarter: string | null
    estimatedDate: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadmapItemMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    title: string | null
    description: string | null
    category: $Enums.RoadmapCategory | null
    priority: $Enums.RoadmapPriority | null
    status: $Enums.RoadmapStatus | null
    votes: number | null
    quarter: string | null
    estimatedDate: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadmapItemCountAggregateOutputType = {
    id: number
    productId: number
    title: number
    description: number
    category: number
    priority: number
    status: number
    votes: number
    quarter: number
    estimatedDate: number
    completedAt: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoadmapItemAvgAggregateInputType = {
    votes?: true
  }

  export type RoadmapItemSumAggregateInputType = {
    votes?: true
  }

  export type RoadmapItemMinAggregateInputType = {
    id?: true
    productId?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    votes?: true
    quarter?: true
    estimatedDate?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadmapItemMaxAggregateInputType = {
    id?: true
    productId?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    votes?: true
    quarter?: true
    estimatedDate?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadmapItemCountAggregateInputType = {
    id?: true
    productId?: true
    title?: true
    description?: true
    category?: true
    priority?: true
    status?: true
    votes?: true
    quarter?: true
    estimatedDate?: true
    completedAt?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoadmapItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapItem to aggregate.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoadmapItems
    **/
    _count?: true | RoadmapItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoadmapItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoadmapItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadmapItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadmapItemMaxAggregateInputType
  }

  export type GetRoadmapItemAggregateType<T extends RoadmapItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadmapItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadmapItem[P]>
      : GetScalarType<T[P], AggregateRoadmapItem[P]>
  }




  export type RoadmapItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadmapItemWhereInput
    orderBy?: RoadmapItemOrderByWithAggregationInput | RoadmapItemOrderByWithAggregationInput[]
    by: RoadmapItemScalarFieldEnum[] | RoadmapItemScalarFieldEnum
    having?: RoadmapItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadmapItemCountAggregateInputType | true
    _avg?: RoadmapItemAvgAggregateInputType
    _sum?: RoadmapItemSumAggregateInputType
    _min?: RoadmapItemMinAggregateInputType
    _max?: RoadmapItemMaxAggregateInputType
  }

  export type RoadmapItemGroupByOutputType = {
    id: string
    productId: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status: $Enums.RoadmapStatus
    votes: number
    quarter: string | null
    estimatedDate: Date | null
    completedAt: Date | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: RoadmapItemCountAggregateOutputType | null
    _avg: RoadmapItemAvgAggregateOutputType | null
    _sum: RoadmapItemSumAggregateOutputType | null
    _min: RoadmapItemMinAggregateOutputType | null
    _max: RoadmapItemMaxAggregateOutputType | null
  }

  type GetRoadmapItemGroupByPayload<T extends RoadmapItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadmapItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadmapItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadmapItemGroupByOutputType[P]>
            : GetScalarType<T[P], RoadmapItemGroupByOutputType[P]>
        }
      >
    >


  export type RoadmapItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    votes?: boolean
    quarter?: boolean
    estimatedDate?: boolean
    completedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapItem"]>

  export type RoadmapItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    votes?: boolean
    quarter?: boolean
    estimatedDate?: boolean
    completedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapItem"]>

  export type RoadmapItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    votes?: boolean
    quarter?: boolean
    estimatedDate?: boolean
    completedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadmapItem"]>

  export type RoadmapItemSelectScalar = {
    id?: boolean
    productId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    votes?: boolean
    quarter?: boolean
    estimatedDate?: boolean
    completedAt?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoadmapItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "title" | "description" | "category" | "priority" | "status" | "votes" | "quarter" | "estimatedDate" | "completedAt" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["roadmapItem"]>
  export type RoadmapItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RoadmapItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type RoadmapItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $RoadmapItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoadmapItem"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      title: string
      description: string
      category: $Enums.RoadmapCategory
      priority: $Enums.RoadmapPriority
      status: $Enums.RoadmapStatus
      votes: number
      quarter: string | null
      estimatedDate: Date | null
      completedAt: Date | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roadmapItem"]>
    composites: {}
  }

  type RoadmapItemGetPayload<S extends boolean | null | undefined | RoadmapItemDefaultArgs> = $Result.GetResult<Prisma.$RoadmapItemPayload, S>

  type RoadmapItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadmapItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadmapItemCountAggregateInputType | true
    }

  export interface RoadmapItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoadmapItem'], meta: { name: 'RoadmapItem' } }
    /**
     * Find zero or one RoadmapItem that matches the filter.
     * @param {RoadmapItemFindUniqueArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadmapItemFindUniqueArgs>(args: SelectSubset<T, RoadmapItemFindUniqueArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoadmapItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadmapItemFindUniqueOrThrowArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadmapItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadmapItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadmapItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemFindFirstArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadmapItemFindFirstArgs>(args?: SelectSubset<T, RoadmapItemFindFirstArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadmapItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemFindFirstOrThrowArgs} args - Arguments to find a RoadmapItem
     * @example
     * // Get one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadmapItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadmapItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoadmapItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoadmapItems
     * const roadmapItems = await prisma.roadmapItem.findMany()
     * 
     * // Get first 10 RoadmapItems
     * const roadmapItems = await prisma.roadmapItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadmapItemWithIdOnly = await prisma.roadmapItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoadmapItemFindManyArgs>(args?: SelectSubset<T, RoadmapItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoadmapItem.
     * @param {RoadmapItemCreateArgs} args - Arguments to create a RoadmapItem.
     * @example
     * // Create one RoadmapItem
     * const RoadmapItem = await prisma.roadmapItem.create({
     *   data: {
     *     // ... data to create a RoadmapItem
     *   }
     * })
     * 
     */
    create<T extends RoadmapItemCreateArgs>(args: SelectSubset<T, RoadmapItemCreateArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoadmapItems.
     * @param {RoadmapItemCreateManyArgs} args - Arguments to create many RoadmapItems.
     * @example
     * // Create many RoadmapItems
     * const roadmapItem = await prisma.roadmapItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadmapItemCreateManyArgs>(args?: SelectSubset<T, RoadmapItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoadmapItems and returns the data saved in the database.
     * @param {RoadmapItemCreateManyAndReturnArgs} args - Arguments to create many RoadmapItems.
     * @example
     * // Create many RoadmapItems
     * const roadmapItem = await prisma.roadmapItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoadmapItems and only return the `id`
     * const roadmapItemWithIdOnly = await prisma.roadmapItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoadmapItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RoadmapItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoadmapItem.
     * @param {RoadmapItemDeleteArgs} args - Arguments to delete one RoadmapItem.
     * @example
     * // Delete one RoadmapItem
     * const RoadmapItem = await prisma.roadmapItem.delete({
     *   where: {
     *     // ... filter to delete one RoadmapItem
     *   }
     * })
     * 
     */
    delete<T extends RoadmapItemDeleteArgs>(args: SelectSubset<T, RoadmapItemDeleteArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoadmapItem.
     * @param {RoadmapItemUpdateArgs} args - Arguments to update one RoadmapItem.
     * @example
     * // Update one RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadmapItemUpdateArgs>(args: SelectSubset<T, RoadmapItemUpdateArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoadmapItems.
     * @param {RoadmapItemDeleteManyArgs} args - Arguments to filter RoadmapItems to delete.
     * @example
     * // Delete a few RoadmapItems
     * const { count } = await prisma.roadmapItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadmapItemDeleteManyArgs>(args?: SelectSubset<T, RoadmapItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoadmapItems
     * const roadmapItem = await prisma.roadmapItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadmapItemUpdateManyArgs>(args: SelectSubset<T, RoadmapItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadmapItems and returns the data updated in the database.
     * @param {RoadmapItemUpdateManyAndReturnArgs} args - Arguments to update many RoadmapItems.
     * @example
     * // Update many RoadmapItems
     * const roadmapItem = await prisma.roadmapItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoadmapItems and only return the `id`
     * const roadmapItemWithIdOnly = await prisma.roadmapItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoadmapItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RoadmapItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoadmapItem.
     * @param {RoadmapItemUpsertArgs} args - Arguments to update or create a RoadmapItem.
     * @example
     * // Update or create a RoadmapItem
     * const roadmapItem = await prisma.roadmapItem.upsert({
     *   create: {
     *     // ... data to create a RoadmapItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoadmapItem we want to update
     *   }
     * })
     */
    upsert<T extends RoadmapItemUpsertArgs>(args: SelectSubset<T, RoadmapItemUpsertArgs<ExtArgs>>): Prisma__RoadmapItemClient<$Result.GetResult<Prisma.$RoadmapItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoadmapItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemCountArgs} args - Arguments to filter RoadmapItems to count.
     * @example
     * // Count the number of RoadmapItems
     * const count = await prisma.roadmapItem.count({
     *   where: {
     *     // ... the filter for the RoadmapItems we want to count
     *   }
     * })
    **/
    count<T extends RoadmapItemCountArgs>(
      args?: Subset<T, RoadmapItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadmapItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoadmapItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoadmapItemAggregateArgs>(args: Subset<T, RoadmapItemAggregateArgs>): Prisma.PrismaPromise<GetRoadmapItemAggregateType<T>>

    /**
     * Group by RoadmapItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadmapItemGroupByArgs} args - Group by arguments.
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
      T extends RoadmapItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadmapItemGroupByArgs['orderBy'] }
        : { orderBy?: RoadmapItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoadmapItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadmapItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoadmapItem model
   */
  readonly fields: RoadmapItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoadmapItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadmapItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoadmapItem model
   */
  interface RoadmapItemFieldRefs {
    readonly id: FieldRef<"RoadmapItem", 'String'>
    readonly productId: FieldRef<"RoadmapItem", 'String'>
    readonly title: FieldRef<"RoadmapItem", 'String'>
    readonly description: FieldRef<"RoadmapItem", 'String'>
    readonly category: FieldRef<"RoadmapItem", 'RoadmapCategory'>
    readonly priority: FieldRef<"RoadmapItem", 'RoadmapPriority'>
    readonly status: FieldRef<"RoadmapItem", 'RoadmapStatus'>
    readonly votes: FieldRef<"RoadmapItem", 'Int'>
    readonly quarter: FieldRef<"RoadmapItem", 'String'>
    readonly estimatedDate: FieldRef<"RoadmapItem", 'DateTime'>
    readonly completedAt: FieldRef<"RoadmapItem", 'DateTime'>
    readonly metadata: FieldRef<"RoadmapItem", 'Json'>
    readonly createdAt: FieldRef<"RoadmapItem", 'DateTime'>
    readonly updatedAt: FieldRef<"RoadmapItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoadmapItem findUnique
   */
  export type RoadmapItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where: RoadmapItemWhereUniqueInput
  }

  /**
   * RoadmapItem findUniqueOrThrow
   */
  export type RoadmapItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where: RoadmapItemWhereUniqueInput
  }

  /**
   * RoadmapItem findFirst
   */
  export type RoadmapItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapItems.
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapItems.
     */
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }

  /**
   * RoadmapItem findFirstOrThrow
   */
  export type RoadmapItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItem to fetch.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadmapItems.
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadmapItems.
     */
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }

  /**
   * RoadmapItem findMany
   */
  export type RoadmapItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter, which RoadmapItems to fetch.
     */
    where?: RoadmapItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadmapItems to fetch.
     */
    orderBy?: RoadmapItemOrderByWithRelationInput | RoadmapItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoadmapItems.
     */
    cursor?: RoadmapItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadmapItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadmapItems.
     */
    skip?: number
    distinct?: RoadmapItemScalarFieldEnum | RoadmapItemScalarFieldEnum[]
  }

  /**
   * RoadmapItem create
   */
  export type RoadmapItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RoadmapItem.
     */
    data: XOR<RoadmapItemCreateInput, RoadmapItemUncheckedCreateInput>
  }

  /**
   * RoadmapItem createMany
   */
  export type RoadmapItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoadmapItems.
     */
    data: RoadmapItemCreateManyInput | RoadmapItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoadmapItem createManyAndReturn
   */
  export type RoadmapItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * The data used to create many RoadmapItems.
     */
    data: RoadmapItemCreateManyInput | RoadmapItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoadmapItem update
   */
  export type RoadmapItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RoadmapItem.
     */
    data: XOR<RoadmapItemUpdateInput, RoadmapItemUncheckedUpdateInput>
    /**
     * Choose, which RoadmapItem to update.
     */
    where: RoadmapItemWhereUniqueInput
  }

  /**
   * RoadmapItem updateMany
   */
  export type RoadmapItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoadmapItems.
     */
    data: XOR<RoadmapItemUpdateManyMutationInput, RoadmapItemUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapItems to update
     */
    where?: RoadmapItemWhereInput
    /**
     * Limit how many RoadmapItems to update.
     */
    limit?: number
  }

  /**
   * RoadmapItem updateManyAndReturn
   */
  export type RoadmapItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * The data used to update RoadmapItems.
     */
    data: XOR<RoadmapItemUpdateManyMutationInput, RoadmapItemUncheckedUpdateManyInput>
    /**
     * Filter which RoadmapItems to update
     */
    where?: RoadmapItemWhereInput
    /**
     * Limit how many RoadmapItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoadmapItem upsert
   */
  export type RoadmapItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RoadmapItem to update in case it exists.
     */
    where: RoadmapItemWhereUniqueInput
    /**
     * In case the RoadmapItem found by the `where` argument doesn't exist, create a new RoadmapItem with this data.
     */
    create: XOR<RoadmapItemCreateInput, RoadmapItemUncheckedCreateInput>
    /**
     * In case the RoadmapItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadmapItemUpdateInput, RoadmapItemUncheckedUpdateInput>
  }

  /**
   * RoadmapItem delete
   */
  export type RoadmapItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
    /**
     * Filter which RoadmapItem to delete.
     */
    where: RoadmapItemWhereUniqueInput
  }

  /**
   * RoadmapItem deleteMany
   */
  export type RoadmapItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadmapItems to delete
     */
    where?: RoadmapItemWhereInput
    /**
     * Limit how many RoadmapItems to delete.
     */
    limit?: number
  }

  /**
   * RoadmapItem without action
   */
  export type RoadmapItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadmapItem
     */
    select?: RoadmapItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadmapItem
     */
    omit?: RoadmapItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadmapItemInclude<ExtArgs> | null
  }


  /**
   * Model ChangelogEntry
   */

  export type AggregateChangelogEntry = {
    _count: ChangelogEntryCountAggregateOutputType | null
    _min: ChangelogEntryMinAggregateOutputType | null
    _max: ChangelogEntryMaxAggregateOutputType | null
  }

  export type ChangelogEntryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    version: string | null
    title: string | null
    description: string | null
    type: $Enums.ChangeType | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChangelogEntryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    version: string | null
    title: string | null
    description: string | null
    type: $Enums.ChangeType | null
    isPublished: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChangelogEntryCountAggregateOutputType = {
    id: number
    productId: number
    version: number
    title: number
    description: number
    changes: number
    type: number
    isPublished: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChangelogEntryMinAggregateInputType = {
    id?: true
    productId?: true
    version?: true
    title?: true
    description?: true
    type?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChangelogEntryMaxAggregateInputType = {
    id?: true
    productId?: true
    version?: true
    title?: true
    description?: true
    type?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChangelogEntryCountAggregateInputType = {
    id?: true
    productId?: true
    version?: true
    title?: true
    description?: true
    changes?: true
    type?: true
    isPublished?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChangelogEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChangelogEntry to aggregate.
     */
    where?: ChangelogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangelogEntries to fetch.
     */
    orderBy?: ChangelogEntryOrderByWithRelationInput | ChangelogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChangelogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangelogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangelogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChangelogEntries
    **/
    _count?: true | ChangelogEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChangelogEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChangelogEntryMaxAggregateInputType
  }

  export type GetChangelogEntryAggregateType<T extends ChangelogEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateChangelogEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChangelogEntry[P]>
      : GetScalarType<T[P], AggregateChangelogEntry[P]>
  }




  export type ChangelogEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChangelogEntryWhereInput
    orderBy?: ChangelogEntryOrderByWithAggregationInput | ChangelogEntryOrderByWithAggregationInput[]
    by: ChangelogEntryScalarFieldEnum[] | ChangelogEntryScalarFieldEnum
    having?: ChangelogEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChangelogEntryCountAggregateInputType | true
    _min?: ChangelogEntryMinAggregateInputType
    _max?: ChangelogEntryMaxAggregateInputType
  }

  export type ChangelogEntryGroupByOutputType = {
    id: string
    productId: string
    version: string
    title: string
    description: string
    changes: JsonValue
    type: $Enums.ChangeType
    isPublished: boolean
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChangelogEntryCountAggregateOutputType | null
    _min: ChangelogEntryMinAggregateOutputType | null
    _max: ChangelogEntryMaxAggregateOutputType | null
  }

  type GetChangelogEntryGroupByPayload<T extends ChangelogEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChangelogEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChangelogEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChangelogEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ChangelogEntryGroupByOutputType[P]>
        }
      >
    >


  export type ChangelogEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    version?: boolean
    title?: boolean
    description?: boolean
    changes?: boolean
    type?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["changelogEntry"]>

  export type ChangelogEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    version?: boolean
    title?: boolean
    description?: boolean
    changes?: boolean
    type?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["changelogEntry"]>

  export type ChangelogEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    version?: boolean
    title?: boolean
    description?: boolean
    changes?: boolean
    type?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["changelogEntry"]>

  export type ChangelogEntrySelectScalar = {
    id?: boolean
    productId?: boolean
    version?: boolean
    title?: boolean
    description?: boolean
    changes?: boolean
    type?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChangelogEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "version" | "title" | "description" | "changes" | "type" | "isPublished" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["changelogEntry"]>
  export type ChangelogEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ChangelogEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ChangelogEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ChangelogEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChangelogEntry"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      version: string
      title: string
      description: string
      changes: Prisma.JsonValue
      type: $Enums.ChangeType
      isPublished: boolean
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["changelogEntry"]>
    composites: {}
  }

  type ChangelogEntryGetPayload<S extends boolean | null | undefined | ChangelogEntryDefaultArgs> = $Result.GetResult<Prisma.$ChangelogEntryPayload, S>

  type ChangelogEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChangelogEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChangelogEntryCountAggregateInputType | true
    }

  export interface ChangelogEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChangelogEntry'], meta: { name: 'ChangelogEntry' } }
    /**
     * Find zero or one ChangelogEntry that matches the filter.
     * @param {ChangelogEntryFindUniqueArgs} args - Arguments to find a ChangelogEntry
     * @example
     * // Get one ChangelogEntry
     * const changelogEntry = await prisma.changelogEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChangelogEntryFindUniqueArgs>(args: SelectSubset<T, ChangelogEntryFindUniqueArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChangelogEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChangelogEntryFindUniqueOrThrowArgs} args - Arguments to find a ChangelogEntry
     * @example
     * // Get one ChangelogEntry
     * const changelogEntry = await prisma.changelogEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChangelogEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChangelogEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChangelogEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryFindFirstArgs} args - Arguments to find a ChangelogEntry
     * @example
     * // Get one ChangelogEntry
     * const changelogEntry = await prisma.changelogEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChangelogEntryFindFirstArgs>(args?: SelectSubset<T, ChangelogEntryFindFirstArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChangelogEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryFindFirstOrThrowArgs} args - Arguments to find a ChangelogEntry
     * @example
     * // Get one ChangelogEntry
     * const changelogEntry = await prisma.changelogEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChangelogEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChangelogEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChangelogEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChangelogEntries
     * const changelogEntries = await prisma.changelogEntry.findMany()
     * 
     * // Get first 10 ChangelogEntries
     * const changelogEntries = await prisma.changelogEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const changelogEntryWithIdOnly = await prisma.changelogEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChangelogEntryFindManyArgs>(args?: SelectSubset<T, ChangelogEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChangelogEntry.
     * @param {ChangelogEntryCreateArgs} args - Arguments to create a ChangelogEntry.
     * @example
     * // Create one ChangelogEntry
     * const ChangelogEntry = await prisma.changelogEntry.create({
     *   data: {
     *     // ... data to create a ChangelogEntry
     *   }
     * })
     * 
     */
    create<T extends ChangelogEntryCreateArgs>(args: SelectSubset<T, ChangelogEntryCreateArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChangelogEntries.
     * @param {ChangelogEntryCreateManyArgs} args - Arguments to create many ChangelogEntries.
     * @example
     * // Create many ChangelogEntries
     * const changelogEntry = await prisma.changelogEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChangelogEntryCreateManyArgs>(args?: SelectSubset<T, ChangelogEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChangelogEntries and returns the data saved in the database.
     * @param {ChangelogEntryCreateManyAndReturnArgs} args - Arguments to create many ChangelogEntries.
     * @example
     * // Create many ChangelogEntries
     * const changelogEntry = await prisma.changelogEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChangelogEntries and only return the `id`
     * const changelogEntryWithIdOnly = await prisma.changelogEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChangelogEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChangelogEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChangelogEntry.
     * @param {ChangelogEntryDeleteArgs} args - Arguments to delete one ChangelogEntry.
     * @example
     * // Delete one ChangelogEntry
     * const ChangelogEntry = await prisma.changelogEntry.delete({
     *   where: {
     *     // ... filter to delete one ChangelogEntry
     *   }
     * })
     * 
     */
    delete<T extends ChangelogEntryDeleteArgs>(args: SelectSubset<T, ChangelogEntryDeleteArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChangelogEntry.
     * @param {ChangelogEntryUpdateArgs} args - Arguments to update one ChangelogEntry.
     * @example
     * // Update one ChangelogEntry
     * const changelogEntry = await prisma.changelogEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChangelogEntryUpdateArgs>(args: SelectSubset<T, ChangelogEntryUpdateArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChangelogEntries.
     * @param {ChangelogEntryDeleteManyArgs} args - Arguments to filter ChangelogEntries to delete.
     * @example
     * // Delete a few ChangelogEntries
     * const { count } = await prisma.changelogEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChangelogEntryDeleteManyArgs>(args?: SelectSubset<T, ChangelogEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChangelogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChangelogEntries
     * const changelogEntry = await prisma.changelogEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChangelogEntryUpdateManyArgs>(args: SelectSubset<T, ChangelogEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChangelogEntries and returns the data updated in the database.
     * @param {ChangelogEntryUpdateManyAndReturnArgs} args - Arguments to update many ChangelogEntries.
     * @example
     * // Update many ChangelogEntries
     * const changelogEntry = await prisma.changelogEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChangelogEntries and only return the `id`
     * const changelogEntryWithIdOnly = await prisma.changelogEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChangelogEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChangelogEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChangelogEntry.
     * @param {ChangelogEntryUpsertArgs} args - Arguments to update or create a ChangelogEntry.
     * @example
     * // Update or create a ChangelogEntry
     * const changelogEntry = await prisma.changelogEntry.upsert({
     *   create: {
     *     // ... data to create a ChangelogEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChangelogEntry we want to update
     *   }
     * })
     */
    upsert<T extends ChangelogEntryUpsertArgs>(args: SelectSubset<T, ChangelogEntryUpsertArgs<ExtArgs>>): Prisma__ChangelogEntryClient<$Result.GetResult<Prisma.$ChangelogEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChangelogEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryCountArgs} args - Arguments to filter ChangelogEntries to count.
     * @example
     * // Count the number of ChangelogEntries
     * const count = await prisma.changelogEntry.count({
     *   where: {
     *     // ... the filter for the ChangelogEntries we want to count
     *   }
     * })
    **/
    count<T extends ChangelogEntryCountArgs>(
      args?: Subset<T, ChangelogEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChangelogEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChangelogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChangelogEntryAggregateArgs>(args: Subset<T, ChangelogEntryAggregateArgs>): Prisma.PrismaPromise<GetChangelogEntryAggregateType<T>>

    /**
     * Group by ChangelogEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangelogEntryGroupByArgs} args - Group by arguments.
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
      T extends ChangelogEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChangelogEntryGroupByArgs['orderBy'] }
        : { orderBy?: ChangelogEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChangelogEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChangelogEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChangelogEntry model
   */
  readonly fields: ChangelogEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChangelogEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChangelogEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChangelogEntry model
   */
  interface ChangelogEntryFieldRefs {
    readonly id: FieldRef<"ChangelogEntry", 'String'>
    readonly productId: FieldRef<"ChangelogEntry", 'String'>
    readonly version: FieldRef<"ChangelogEntry", 'String'>
    readonly title: FieldRef<"ChangelogEntry", 'String'>
    readonly description: FieldRef<"ChangelogEntry", 'String'>
    readonly changes: FieldRef<"ChangelogEntry", 'Json'>
    readonly type: FieldRef<"ChangelogEntry", 'ChangeType'>
    readonly isPublished: FieldRef<"ChangelogEntry", 'Boolean'>
    readonly publishedAt: FieldRef<"ChangelogEntry", 'DateTime'>
    readonly createdAt: FieldRef<"ChangelogEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"ChangelogEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChangelogEntry findUnique
   */
  export type ChangelogEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChangelogEntry to fetch.
     */
    where: ChangelogEntryWhereUniqueInput
  }

  /**
   * ChangelogEntry findUniqueOrThrow
   */
  export type ChangelogEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChangelogEntry to fetch.
     */
    where: ChangelogEntryWhereUniqueInput
  }

  /**
   * ChangelogEntry findFirst
   */
  export type ChangelogEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChangelogEntry to fetch.
     */
    where?: ChangelogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangelogEntries to fetch.
     */
    orderBy?: ChangelogEntryOrderByWithRelationInput | ChangelogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChangelogEntries.
     */
    cursor?: ChangelogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangelogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangelogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChangelogEntries.
     */
    distinct?: ChangelogEntryScalarFieldEnum | ChangelogEntryScalarFieldEnum[]
  }

  /**
   * ChangelogEntry findFirstOrThrow
   */
  export type ChangelogEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChangelogEntry to fetch.
     */
    where?: ChangelogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangelogEntries to fetch.
     */
    orderBy?: ChangelogEntryOrderByWithRelationInput | ChangelogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChangelogEntries.
     */
    cursor?: ChangelogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangelogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangelogEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChangelogEntries.
     */
    distinct?: ChangelogEntryScalarFieldEnum | ChangelogEntryScalarFieldEnum[]
  }

  /**
   * ChangelogEntry findMany
   */
  export type ChangelogEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChangelogEntries to fetch.
     */
    where?: ChangelogEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangelogEntries to fetch.
     */
    orderBy?: ChangelogEntryOrderByWithRelationInput | ChangelogEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChangelogEntries.
     */
    cursor?: ChangelogEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangelogEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangelogEntries.
     */
    skip?: number
    distinct?: ChangelogEntryScalarFieldEnum | ChangelogEntryScalarFieldEnum[]
  }

  /**
   * ChangelogEntry create
   */
  export type ChangelogEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChangelogEntry.
     */
    data: XOR<ChangelogEntryCreateInput, ChangelogEntryUncheckedCreateInput>
  }

  /**
   * ChangelogEntry createMany
   */
  export type ChangelogEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChangelogEntries.
     */
    data: ChangelogEntryCreateManyInput | ChangelogEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChangelogEntry createManyAndReturn
   */
  export type ChangelogEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * The data used to create many ChangelogEntries.
     */
    data: ChangelogEntryCreateManyInput | ChangelogEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChangelogEntry update
   */
  export type ChangelogEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChangelogEntry.
     */
    data: XOR<ChangelogEntryUpdateInput, ChangelogEntryUncheckedUpdateInput>
    /**
     * Choose, which ChangelogEntry to update.
     */
    where: ChangelogEntryWhereUniqueInput
  }

  /**
   * ChangelogEntry updateMany
   */
  export type ChangelogEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChangelogEntries.
     */
    data: XOR<ChangelogEntryUpdateManyMutationInput, ChangelogEntryUncheckedUpdateManyInput>
    /**
     * Filter which ChangelogEntries to update
     */
    where?: ChangelogEntryWhereInput
    /**
     * Limit how many ChangelogEntries to update.
     */
    limit?: number
  }

  /**
   * ChangelogEntry updateManyAndReturn
   */
  export type ChangelogEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * The data used to update ChangelogEntries.
     */
    data: XOR<ChangelogEntryUpdateManyMutationInput, ChangelogEntryUncheckedUpdateManyInput>
    /**
     * Filter which ChangelogEntries to update
     */
    where?: ChangelogEntryWhereInput
    /**
     * Limit how many ChangelogEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChangelogEntry upsert
   */
  export type ChangelogEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChangelogEntry to update in case it exists.
     */
    where: ChangelogEntryWhereUniqueInput
    /**
     * In case the ChangelogEntry found by the `where` argument doesn't exist, create a new ChangelogEntry with this data.
     */
    create: XOR<ChangelogEntryCreateInput, ChangelogEntryUncheckedCreateInput>
    /**
     * In case the ChangelogEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChangelogEntryUpdateInput, ChangelogEntryUncheckedUpdateInput>
  }

  /**
   * ChangelogEntry delete
   */
  export type ChangelogEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
    /**
     * Filter which ChangelogEntry to delete.
     */
    where: ChangelogEntryWhereUniqueInput
  }

  /**
   * ChangelogEntry deleteMany
   */
  export type ChangelogEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChangelogEntries to delete
     */
    where?: ChangelogEntryWhereInput
    /**
     * Limit how many ChangelogEntries to delete.
     */
    limit?: number
  }

  /**
   * ChangelogEntry without action
   */
  export type ChangelogEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangelogEntry
     */
    select?: ChangelogEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangelogEntry
     */
    omit?: ChangelogEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangelogEntryInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    upvotes: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    upvotes: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    type: $Enums.FeedbackType | null
    title: string | null
    description: string | null
    email: string | null
    severity: $Enums.FeedbackSeverity | null
    status: $Enums.FeedbackStatus | null
    upvotes: number | null
    response: string | null
    respondedBy: string | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    userId: string | null
    type: $Enums.FeedbackType | null
    title: string | null
    description: string | null
    email: string | null
    severity: $Enums.FeedbackSeverity | null
    status: $Enums.FeedbackStatus | null
    upvotes: number | null
    response: string | null
    respondedBy: string | null
    respondedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    productId: number
    userId: number
    type: number
    title: number
    description: number
    email: number
    severity: number
    status: number
    upvotes: number
    response: number
    respondedBy: number
    respondedAt: number
    browserInfo: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    upvotes?: true
  }

  export type FeedbackSumAggregateInputType = {
    upvotes?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    type?: true
    title?: true
    description?: true
    email?: true
    severity?: true
    status?: true
    upvotes?: true
    response?: true
    respondedBy?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    type?: true
    title?: true
    description?: true
    email?: true
    severity?: true
    status?: true
    upvotes?: true
    response?: true
    respondedBy?: true
    respondedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    productId?: true
    userId?: true
    type?: true
    title?: true
    description?: true
    email?: true
    severity?: true
    status?: true
    upvotes?: true
    response?: true
    respondedBy?: true
    respondedAt?: true
    browserInfo?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    productId: string
    userId: string | null
    type: $Enums.FeedbackType
    title: string | null
    description: string
    email: string | null
    severity: $Enums.FeedbackSeverity
    status: $Enums.FeedbackStatus
    upvotes: number
    response: string | null
    respondedBy: string | null
    respondedAt: Date | null
    browserInfo: JsonValue | null
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    email?: boolean
    severity?: boolean
    status?: boolean
    upvotes?: boolean
    response?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    browserInfo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    email?: boolean
    severity?: boolean
    status?: boolean
    upvotes?: boolean
    response?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    browserInfo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    email?: boolean
    severity?: boolean
    status?: boolean
    upvotes?: boolean
    response?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    browserInfo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    productId?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    email?: boolean
    severity?: boolean
    status?: boolean
    upvotes?: boolean
    response?: boolean
    respondedBy?: boolean
    respondedAt?: boolean
    browserInfo?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "userId" | "type" | "title" | "description" | "email" | "severity" | "status" | "upvotes" | "response" | "respondedBy" | "respondedAt" | "browserInfo" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      userId: string | null
      type: $Enums.FeedbackType
      title: string | null
      description: string
      email: string | null
      severity: $Enums.FeedbackSeverity
      status: $Enums.FeedbackStatus
      upvotes: number
      response: string | null
      respondedBy: string | null
      respondedAt: Date | null
      browserInfo: Prisma.JsonValue | null
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly productId: FieldRef<"Feedback", 'String'>
    readonly userId: FieldRef<"Feedback", 'String'>
    readonly type: FieldRef<"Feedback", 'FeedbackType'>
    readonly title: FieldRef<"Feedback", 'String'>
    readonly description: FieldRef<"Feedback", 'String'>
    readonly email: FieldRef<"Feedback", 'String'>
    readonly severity: FieldRef<"Feedback", 'FeedbackSeverity'>
    readonly status: FieldRef<"Feedback", 'FeedbackStatus'>
    readonly upvotes: FieldRef<"Feedback", 'Int'>
    readonly response: FieldRef<"Feedback", 'String'>
    readonly respondedBy: FieldRef<"Feedback", 'String'>
    readonly respondedAt: FieldRef<"Feedback", 'DateTime'>
    readonly browserInfo: FieldRef<"Feedback", 'Json'>
    readonly metadata: FieldRef<"Feedback", 'Json'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
    readonly updatedAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    priority: number | null
    viewCount: number | null
    clickCount: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    priority: number | null
    viewCount: number | null
    clickCount: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    type: $Enums.AnnouncementType | null
    priority: number | null
    isDismissible: boolean | null
    publishedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    viewCount: number | null
    clickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    type: $Enums.AnnouncementType | null
    priority: number | null
    isDismissible: boolean | null
    publishedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    viewCount: number | null
    clickCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    type: number
    targetProducts: number
    targetUsers: number
    priority: number
    isDismissible: number
    publishedAt: number
    expiresAt: number
    isActive: number
    viewCount: number
    clickCount: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    priority?: true
    viewCount?: true
    clickCount?: true
  }

  export type AnnouncementSumAggregateInputType = {
    priority?: true
    viewCount?: true
    clickCount?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    priority?: true
    isDismissible?: true
    publishedAt?: true
    expiresAt?: true
    isActive?: true
    viewCount?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    priority?: true
    isDismissible?: true
    publishedAt?: true
    expiresAt?: true
    isActive?: true
    viewCount?: true
    clickCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    targetProducts?: true
    targetUsers?: true
    priority?: true
    isDismissible?: true
    publishedAt?: true
    expiresAt?: true
    isActive?: true
    viewCount?: true
    clickCount?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    type: $Enums.AnnouncementType
    targetProducts: string[]
    targetUsers: string[]
    priority: number
    isDismissible: boolean
    publishedAt: Date | null
    expiresAt: Date | null
    isActive: boolean
    viewCount: number
    clickCount: number
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    targetProducts?: boolean
    targetUsers?: boolean
    priority?: boolean
    isDismissible?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    viewCount?: boolean
    clickCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    targetProducts?: boolean
    targetUsers?: boolean
    priority?: boolean
    isDismissible?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    viewCount?: boolean
    clickCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    targetProducts?: boolean
    targetUsers?: boolean
    priority?: boolean
    isDismissible?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    viewCount?: boolean
    clickCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    targetProducts?: boolean
    targetUsers?: boolean
    priority?: boolean
    isDismissible?: boolean
    publishedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    viewCount?: boolean
    clickCount?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "type" | "targetProducts" | "targetUsers" | "priority" | "isDismissible" | "publishedAt" | "expiresAt" | "isActive" | "viewCount" | "clickCount" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      type: $Enums.AnnouncementType
      targetProducts: string[]
      targetUsers: string[]
      priority: number
      isDismissible: boolean
      publishedAt: Date | null
      expiresAt: Date | null
      isActive: boolean
      viewCount: number
      clickCount: number
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly type: FieldRef<"Announcement", 'AnnouncementType'>
    readonly targetProducts: FieldRef<"Announcement", 'String[]'>
    readonly targetUsers: FieldRef<"Announcement", 'String[]'>
    readonly priority: FieldRef<"Announcement", 'Int'>
    readonly isDismissible: FieldRef<"Announcement", 'Boolean'>
    readonly publishedAt: FieldRef<"Announcement", 'DateTime'>
    readonly expiresAt: FieldRef<"Announcement", 'DateTime'>
    readonly isActive: FieldRef<"Announcement", 'Boolean'>
    readonly viewCount: FieldRef<"Announcement", 'Int'>
    readonly clickCount: FieldRef<"Announcement", 'Int'>
    readonly metadata: FieldRef<"Announcement", 'Json'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
  }


  /**
   * Model PortfolioItem
   */

  export type AggregatePortfolioItem = {
    _count: PortfolioItemCountAggregateOutputType | null
    _avg: PortfolioItemAvgAggregateOutputType | null
    _sum: PortfolioItemSumAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  export type PortfolioItemAvgAggregateOutputType = {
    viewCount: number | null
    likeCount: number | null
    order: number | null
  }

  export type PortfolioItemSumAggregateOutputType = {
    viewCount: number | null
    likeCount: number | null
    order: number | null
  }

  export type PortfolioItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    coverImage: string | null
    liveUrl: string | null
    githubUrl: string | null
    viewCount: number | null
    likeCount: number | null
    isFeatured: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    coverImage: string | null
    liveUrl: string | null
    githubUrl: string | null
    viewCount: number | null
    likeCount: number | null
    isFeatured: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    coverImage: number
    images: number
    liveUrl: number
    githubUrl: number
    techStack: number
    viewCount: number
    likeCount: number
    isFeatured: number
    order: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioItemAvgAggregateInputType = {
    viewCount?: true
    likeCount?: true
    order?: true
  }

  export type PortfolioItemSumAggregateInputType = {
    viewCount?: true
    likeCount?: true
    order?: true
  }

  export type PortfolioItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    coverImage?: true
    liveUrl?: true
    githubUrl?: true
    viewCount?: true
    likeCount?: true
    isFeatured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    coverImage?: true
    liveUrl?: true
    githubUrl?: true
    viewCount?: true
    likeCount?: true
    isFeatured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    coverImage?: true
    images?: true
    liveUrl?: true
    githubUrl?: true
    techStack?: true
    viewCount?: true
    likeCount?: true
    isFeatured?: true
    order?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItem to aggregate.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioItems
    **/
    _count?: true | PortfolioItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type GetPortfolioItemAggregateType<T extends PortfolioItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioItem[P]>
      : GetScalarType<T[P], AggregatePortfolioItem[P]>
  }




  export type PortfolioItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithAggregationInput | PortfolioItemOrderByWithAggregationInput[]
    by: PortfolioItemScalarFieldEnum[] | PortfolioItemScalarFieldEnum
    having?: PortfolioItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioItemCountAggregateInputType | true
    _avg?: PortfolioItemAvgAggregateInputType
    _sum?: PortfolioItemSumAggregateInputType
    _min?: PortfolioItemMinAggregateInputType
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type PortfolioItemGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    coverImage: string | null
    images: string[]
    liveUrl: string | null
    githubUrl: string | null
    techStack: string[]
    viewCount: number
    likeCount: number
    isFeatured: boolean
    order: number
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PortfolioItemCountAggregateOutputType | null
    _avg: PortfolioItemAvgAggregateOutputType | null
    _sum: PortfolioItemSumAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  type GetPortfolioItemGroupByPayload<T extends PortfolioItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    coverImage?: boolean
    images?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    techStack?: boolean
    viewCount?: boolean
    likeCount?: boolean
    isFeatured?: boolean
    order?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    coverImage?: boolean
    images?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    techStack?: boolean
    viewCount?: boolean
    likeCount?: boolean
    isFeatured?: boolean
    order?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    coverImage?: boolean
    images?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    techStack?: boolean
    viewCount?: boolean
    likeCount?: boolean
    isFeatured?: boolean
    order?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    coverImage?: boolean
    images?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    techStack?: boolean
    viewCount?: boolean
    likeCount?: boolean
    isFeatured?: boolean
    order?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "coverImage" | "images" | "liveUrl" | "githubUrl" | "techStack" | "viewCount" | "likeCount" | "isFeatured" | "order" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolioItem"]>

  export type $PortfolioItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      coverImage: string | null
      images: string[]
      liveUrl: string | null
      githubUrl: string | null
      techStack: string[]
      viewCount: number
      likeCount: number
      isFeatured: boolean
      order: number
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioItem"]>
    composites: {}
  }

  type PortfolioItemGetPayload<S extends boolean | null | undefined | PortfolioItemDefaultArgs> = $Result.GetResult<Prisma.$PortfolioItemPayload, S>

  type PortfolioItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioItemCountAggregateInputType | true
    }

  export interface PortfolioItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioItem'], meta: { name: 'PortfolioItem' } }
    /**
     * Find zero or one PortfolioItem that matches the filter.
     * @param {PortfolioItemFindUniqueArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioItemFindUniqueArgs>(args: SelectSubset<T, PortfolioItemFindUniqueArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortfolioItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioItemFindUniqueOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioItemFindFirstArgs>(args?: SelectSubset<T, PortfolioItemFindFirstArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortfolioItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany()
     * 
     * // Get first 10 PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioItemFindManyArgs>(args?: SelectSubset<T, PortfolioItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortfolioItem.
     * @param {PortfolioItemCreateArgs} args - Arguments to create a PortfolioItem.
     * @example
     * // Create one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.create({
     *   data: {
     *     // ... data to create a PortfolioItem
     *   }
     * })
     * 
     */
    create<T extends PortfolioItemCreateArgs>(args: SelectSubset<T, PortfolioItemCreateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortfolioItems.
     * @param {PortfolioItemCreateManyArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioItemCreateManyArgs>(args?: SelectSubset<T, PortfolioItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioItems and returns the data saved in the database.
     * @param {PortfolioItemCreateManyAndReturnArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortfolioItem.
     * @param {PortfolioItemDeleteArgs} args - Arguments to delete one PortfolioItem.
     * @example
     * // Delete one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.delete({
     *   where: {
     *     // ... filter to delete one PortfolioItem
     *   }
     * })
     * 
     */
    delete<T extends PortfolioItemDeleteArgs>(args: SelectSubset<T, PortfolioItemDeleteArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortfolioItem.
     * @param {PortfolioItemUpdateArgs} args - Arguments to update one PortfolioItem.
     * @example
     * // Update one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioItemUpdateArgs>(args: SelectSubset<T, PortfolioItemUpdateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortfolioItems.
     * @param {PortfolioItemDeleteManyArgs} args - Arguments to filter PortfolioItems to delete.
     * @example
     * // Delete a few PortfolioItems
     * const { count } = await prisma.portfolioItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioItemDeleteManyArgs>(args?: SelectSubset<T, PortfolioItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioItemUpdateManyArgs>(args: SelectSubset<T, PortfolioItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems and returns the data updated in the database.
     * @param {PortfolioItemUpdateManyAndReturnArgs} args - Arguments to update many PortfolioItems.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortfolioItem.
     * @param {PortfolioItemUpsertArgs} args - Arguments to update or create a PortfolioItem.
     * @example
     * // Update or create a PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.upsert({
     *   create: {
     *     // ... data to create a PortfolioItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioItem we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioItemUpsertArgs>(args: SelectSubset<T, PortfolioItemUpsertArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemCountArgs} args - Arguments to filter PortfolioItems to count.
     * @example
     * // Count the number of PortfolioItems
     * const count = await prisma.portfolioItem.count({
     *   where: {
     *     // ... the filter for the PortfolioItems we want to count
     *   }
     * })
    **/
    count<T extends PortfolioItemCountArgs>(
      args?: Subset<T, PortfolioItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioItemAggregateArgs>(args: Subset<T, PortfolioItemAggregateArgs>): Prisma.PrismaPromise<GetPortfolioItemAggregateType<T>>

    /**
     * Group by PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemGroupByArgs} args - Group by arguments.
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
      T extends PortfolioItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioItemGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioItem model
   */
  readonly fields: PortfolioItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioItem model
   */
  interface PortfolioItemFieldRefs {
    readonly id: FieldRef<"PortfolioItem", 'String'>
    readonly title: FieldRef<"PortfolioItem", 'String'>
    readonly description: FieldRef<"PortfolioItem", 'String'>
    readonly category: FieldRef<"PortfolioItem", 'String'>
    readonly coverImage: FieldRef<"PortfolioItem", 'String'>
    readonly images: FieldRef<"PortfolioItem", 'String[]'>
    readonly liveUrl: FieldRef<"PortfolioItem", 'String'>
    readonly githubUrl: FieldRef<"PortfolioItem", 'String'>
    readonly techStack: FieldRef<"PortfolioItem", 'String[]'>
    readonly viewCount: FieldRef<"PortfolioItem", 'Int'>
    readonly likeCount: FieldRef<"PortfolioItem", 'Int'>
    readonly isFeatured: FieldRef<"PortfolioItem", 'Boolean'>
    readonly order: FieldRef<"PortfolioItem", 'Int'>
    readonly metadata: FieldRef<"PortfolioItem", 'Json'>
    readonly createdAt: FieldRef<"PortfolioItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioItem findUnique
   */
  export type PortfolioItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findUniqueOrThrow
   */
  export type PortfolioItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findFirst
   */
  export type PortfolioItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findFirstOrThrow
   */
  export type PortfolioItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findMany
   */
  export type PortfolioItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Filter, which PortfolioItems to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem create
   */
  export type PortfolioItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data needed to create a PortfolioItem.
     */
    data: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
  }

  /**
   * PortfolioItem createMany
   */
  export type PortfolioItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioItem createManyAndReturn
   */
  export type PortfolioItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioItem update
   */
  export type PortfolioItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data needed to update a PortfolioItem.
     */
    data: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
    /**
     * Choose, which PortfolioItem to update.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem updateMany
   */
  export type PortfolioItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to update.
     */
    limit?: number
  }

  /**
   * PortfolioItem updateManyAndReturn
   */
  export type PortfolioItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to update.
     */
    limit?: number
  }

  /**
   * PortfolioItem upsert
   */
  export type PortfolioItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The filter to search for the PortfolioItem to update in case it exists.
     */
    where: PortfolioItemWhereUniqueInput
    /**
     * In case the PortfolioItem found by the `where` argument doesn't exist, create a new PortfolioItem with this data.
     */
    create: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
    /**
     * In case the PortfolioItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
  }

  /**
   * PortfolioItem delete
   */
  export type PortfolioItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Filter which PortfolioItem to delete.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem deleteMany
   */
  export type PortfolioItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItems to delete
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to delete.
     */
    limit?: number
  }

  /**
   * PortfolioItem without action
   */
  export type PortfolioItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
  }


  /**
   * Model AnalyticsEvent
   */

  export type AggregateAnalyticsEvent = {
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  export type AnalyticsEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    productSlug: string | null
    eventName: string | null
    pageUrl: string | null
    referrer: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    productSlug: string | null
    eventName: string | null
    pageUrl: string | null
    referrer: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AnalyticsEventCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    productSlug: number
    eventName: number
    eventData: number
    pageUrl: number
    referrer: number
    userAgent: number
    ipAddress: number
    location: number
    createdAt: number
    _all: number
  }


  export type AnalyticsEventMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    productSlug?: true
    eventName?: true
    pageUrl?: true
    referrer?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AnalyticsEventMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    productSlug?: true
    eventName?: true
    pageUrl?: true
    referrer?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AnalyticsEventCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    productSlug?: true
    eventName?: true
    eventData?: true
    pageUrl?: true
    referrer?: true
    userAgent?: true
    ipAddress?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type AnalyticsEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvent to aggregate.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalyticsEvents
    **/
    _count?: true | AnalyticsEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type GetAnalyticsEventAggregateType<T extends AnalyticsEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalyticsEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
      : GetScalarType<T[P], AggregateAnalyticsEvent[P]>
  }




  export type AnalyticsEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsEventWhereInput
    orderBy?: AnalyticsEventOrderByWithAggregationInput | AnalyticsEventOrderByWithAggregationInput[]
    by: AnalyticsEventScalarFieldEnum[] | AnalyticsEventScalarFieldEnum
    having?: AnalyticsEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsEventCountAggregateInputType | true
    _min?: AnalyticsEventMinAggregateInputType
    _max?: AnalyticsEventMaxAggregateInputType
  }

  export type AnalyticsEventGroupByOutputType = {
    id: string
    userId: string | null
    sessionId: string | null
    productSlug: string
    eventName: string
    eventData: JsonValue | null
    pageUrl: string | null
    referrer: string | null
    userAgent: string | null
    ipAddress: string | null
    location: JsonValue | null
    createdAt: Date
    _count: AnalyticsEventCountAggregateOutputType | null
    _min: AnalyticsEventMinAggregateOutputType | null
    _max: AnalyticsEventMaxAggregateOutputType | null
  }

  type GetAnalyticsEventGroupByPayload<T extends AnalyticsEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsEventGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    productSlug?: boolean
    eventName?: boolean
    eventData?: boolean
    pageUrl?: boolean
    referrer?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    productSlug?: boolean
    eventName?: boolean
    eventData?: boolean
    pageUrl?: boolean
    referrer?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    productSlug?: boolean
    eventName?: boolean
    eventData?: boolean
    pageUrl?: boolean
    referrer?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analyticsEvent"]>

  export type AnalyticsEventSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    productSlug?: boolean
    eventName?: boolean
    eventData?: boolean
    pageUrl?: boolean
    referrer?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type AnalyticsEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sessionId" | "productSlug" | "eventName" | "eventData" | "pageUrl" | "referrer" | "userAgent" | "ipAddress" | "location" | "createdAt", ExtArgs["result"]["analyticsEvent"]>

  export type $AnalyticsEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalyticsEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      sessionId: string | null
      productSlug: string
      eventName: string
      eventData: Prisma.JsonValue | null
      pageUrl: string | null
      referrer: string | null
      userAgent: string | null
      ipAddress: string | null
      location: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["analyticsEvent"]>
    composites: {}
  }

  type AnalyticsEventGetPayload<S extends boolean | null | undefined | AnalyticsEventDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsEventPayload, S>

  type AnalyticsEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsEventCountAggregateInputType | true
    }

  export interface AnalyticsEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalyticsEvent'], meta: { name: 'AnalyticsEvent' } }
    /**
     * Find zero or one AnalyticsEvent that matches the filter.
     * @param {AnalyticsEventFindUniqueArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsEventFindUniqueArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalyticsEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsEventFindUniqueOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsEventFindFirstArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalyticsEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindFirstOrThrowArgs} args - Arguments to find a AnalyticsEvent
     * @example
     * // Get one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalyticsEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany()
     * 
     * // Get first 10 AnalyticsEvents
     * const analyticsEvents = await prisma.analyticsEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsEventFindManyArgs>(args?: SelectSubset<T, AnalyticsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalyticsEvent.
     * @param {AnalyticsEventCreateArgs} args - Arguments to create a AnalyticsEvent.
     * @example
     * // Create one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.create({
     *   data: {
     *     // ... data to create a AnalyticsEvent
     *   }
     * })
     * 
     */
    create<T extends AnalyticsEventCreateArgs>(args: SelectSubset<T, AnalyticsEventCreateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalyticsEvents.
     * @param {AnalyticsEventCreateManyArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsEventCreateManyArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalyticsEvents and returns the data saved in the database.
     * @param {AnalyticsEventCreateManyAndReturnArgs} args - Arguments to create many AnalyticsEvents.
     * @example
     * // Create many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalyticsEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalyticsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalyticsEvent.
     * @param {AnalyticsEventDeleteArgs} args - Arguments to delete one AnalyticsEvent.
     * @example
     * // Delete one AnalyticsEvent
     * const AnalyticsEvent = await prisma.analyticsEvent.delete({
     *   where: {
     *     // ... filter to delete one AnalyticsEvent
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsEventDeleteArgs>(args: SelectSubset<T, AnalyticsEventDeleteArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalyticsEvent.
     * @param {AnalyticsEventUpdateArgs} args - Arguments to update one AnalyticsEvent.
     * @example
     * // Update one AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsEventUpdateArgs>(args: SelectSubset<T, AnalyticsEventUpdateArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalyticsEvents.
     * @param {AnalyticsEventDeleteManyArgs} args - Arguments to filter AnalyticsEvents to delete.
     * @example
     * // Delete a few AnalyticsEvents
     * const { count } = await prisma.analyticsEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsEventDeleteManyArgs>(args?: SelectSubset<T, AnalyticsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsEventUpdateManyArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalyticsEvents and returns the data updated in the database.
     * @param {AnalyticsEventUpdateManyAndReturnArgs} args - Arguments to update many AnalyticsEvents.
     * @example
     * // Update many AnalyticsEvents
     * const analyticsEvent = await prisma.analyticsEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalyticsEvents and only return the `id`
     * const analyticsEventWithIdOnly = await prisma.analyticsEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalyticsEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalyticsEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalyticsEvent.
     * @param {AnalyticsEventUpsertArgs} args - Arguments to update or create a AnalyticsEvent.
     * @example
     * // Update or create a AnalyticsEvent
     * const analyticsEvent = await prisma.analyticsEvent.upsert({
     *   create: {
     *     // ... data to create a AnalyticsEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalyticsEvent we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsEventUpsertArgs>(args: SelectSubset<T, AnalyticsEventUpsertArgs<ExtArgs>>): Prisma__AnalyticsEventClient<$Result.GetResult<Prisma.$AnalyticsEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalyticsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventCountArgs} args - Arguments to filter AnalyticsEvents to count.
     * @example
     * // Count the number of AnalyticsEvents
     * const count = await prisma.analyticsEvent.count({
     *   where: {
     *     // ... the filter for the AnalyticsEvents we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsEventCountArgs>(
      args?: Subset<T, AnalyticsEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsEventAggregateArgs>(args: Subset<T, AnalyticsEventAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsEventAggregateType<T>>

    /**
     * Group by AnalyticsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsEventGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsEventGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalyticsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalyticsEvent model
   */
  readonly fields: AnalyticsEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalyticsEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalyticsEvent model
   */
  interface AnalyticsEventFieldRefs {
    readonly id: FieldRef<"AnalyticsEvent", 'String'>
    readonly userId: FieldRef<"AnalyticsEvent", 'String'>
    readonly sessionId: FieldRef<"AnalyticsEvent", 'String'>
    readonly productSlug: FieldRef<"AnalyticsEvent", 'String'>
    readonly eventName: FieldRef<"AnalyticsEvent", 'String'>
    readonly eventData: FieldRef<"AnalyticsEvent", 'Json'>
    readonly pageUrl: FieldRef<"AnalyticsEvent", 'String'>
    readonly referrer: FieldRef<"AnalyticsEvent", 'String'>
    readonly userAgent: FieldRef<"AnalyticsEvent", 'String'>
    readonly ipAddress: FieldRef<"AnalyticsEvent", 'String'>
    readonly location: FieldRef<"AnalyticsEvent", 'Json'>
    readonly createdAt: FieldRef<"AnalyticsEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalyticsEvent findUnique
   */
  export type AnalyticsEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findUniqueOrThrow
   */
  export type AnalyticsEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent findFirst
   */
  export type AnalyticsEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findFirstOrThrow
   */
  export type AnalyticsEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvent to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalyticsEvents.
     */
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent findMany
   */
  export type AnalyticsEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter, which AnalyticsEvents to fetch.
     */
    where?: AnalyticsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalyticsEvents to fetch.
     */
    orderBy?: AnalyticsEventOrderByWithRelationInput | AnalyticsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalyticsEvents.
     */
    cursor?: AnalyticsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalyticsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalyticsEvents.
     */
    skip?: number
    distinct?: AnalyticsEventScalarFieldEnum | AnalyticsEventScalarFieldEnum[]
  }

  /**
   * AnalyticsEvent create
   */
  export type AnalyticsEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
  }

  /**
   * AnalyticsEvent createMany
   */
  export type AnalyticsEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent createManyAndReturn
   */
  export type AnalyticsEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to create many AnalyticsEvents.
     */
    data: AnalyticsEventCreateManyInput | AnalyticsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalyticsEvent update
   */
  export type AnalyticsEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalyticsEvent.
     */
    data: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
    /**
     * Choose, which AnalyticsEvent to update.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent updateMany
   */
  export type AnalyticsEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent updateManyAndReturn
   */
  export type AnalyticsEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The data used to update AnalyticsEvents.
     */
    data: XOR<AnalyticsEventUpdateManyMutationInput, AnalyticsEventUncheckedUpdateManyInput>
    /**
     * Filter which AnalyticsEvents to update
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to update.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent upsert
   */
  export type AnalyticsEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalyticsEvent to update in case it exists.
     */
    where: AnalyticsEventWhereUniqueInput
    /**
     * In case the AnalyticsEvent found by the `where` argument doesn't exist, create a new AnalyticsEvent with this data.
     */
    create: XOR<AnalyticsEventCreateInput, AnalyticsEventUncheckedCreateInput>
    /**
     * In case the AnalyticsEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsEventUpdateInput, AnalyticsEventUncheckedUpdateInput>
  }

  /**
   * AnalyticsEvent delete
   */
  export type AnalyticsEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
    /**
     * Filter which AnalyticsEvent to delete.
     */
    where: AnalyticsEventWhereUniqueInput
  }

  /**
   * AnalyticsEvent deleteMany
   */
  export type AnalyticsEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalyticsEvents to delete
     */
    where?: AnalyticsEventWhereInput
    /**
     * Limit how many AnalyticsEvents to delete.
     */
    limit?: number
  }

  /**
   * AnalyticsEvent without action
   */
  export type AnalyticsEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalyticsEvent
     */
    select?: AnalyticsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalyticsEvent
     */
    omit?: AnalyticsEventOmit<ExtArgs> | null
  }


  /**
   * Model UserProductInteraction
   */

  export type AggregateUserProductInteraction = {
    _count: UserProductInteractionCountAggregateOutputType | null
    _avg: UserProductInteractionAvgAggregateOutputType | null
    _sum: UserProductInteractionSumAggregateOutputType | null
    _min: UserProductInteractionMinAggregateOutputType | null
    _max: UserProductInteractionMaxAggregateOutputType | null
  }

  export type UserProductInteractionAvgAggregateOutputType = {
    duration: number | null
  }

  export type UserProductInteractionSumAggregateOutputType = {
    duration: number | null
  }

  export type UserProductInteractionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    productSlug: string | null
    type: $Enums.InteractionType | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProductInteractionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    productSlug: string | null
    type: $Enums.InteractionType | null
    duration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProductInteractionCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    productSlug: number
    type: number
    data: number
    duration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProductInteractionAvgAggregateInputType = {
    duration?: true
  }

  export type UserProductInteractionSumAggregateInputType = {
    duration?: true
  }

  export type UserProductInteractionMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    productSlug?: true
    type?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProductInteractionMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    productSlug?: true
    type?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProductInteractionCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    productSlug?: true
    type?: true
    data?: true
    duration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProductInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProductInteraction to aggregate.
     */
    where?: UserProductInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductInteractions to fetch.
     */
    orderBy?: UserProductInteractionOrderByWithRelationInput | UserProductInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProductInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProductInteractions
    **/
    _count?: true | UserProductInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProductInteractionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProductInteractionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProductInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProductInteractionMaxAggregateInputType
  }

  export type GetUserProductInteractionAggregateType<T extends UserProductInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProductInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProductInteraction[P]>
      : GetScalarType<T[P], AggregateUserProductInteraction[P]>
  }




  export type UserProductInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductInteractionWhereInput
    orderBy?: UserProductInteractionOrderByWithAggregationInput | UserProductInteractionOrderByWithAggregationInput[]
    by: UserProductInteractionScalarFieldEnum[] | UserProductInteractionScalarFieldEnum
    having?: UserProductInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProductInteractionCountAggregateInputType | true
    _avg?: UserProductInteractionAvgAggregateInputType
    _sum?: UserProductInteractionSumAggregateInputType
    _min?: UserProductInteractionMinAggregateInputType
    _max?: UserProductInteractionMaxAggregateInputType
  }

  export type UserProductInteractionGroupByOutputType = {
    id: string
    userId: string
    productId: string
    productSlug: string
    type: $Enums.InteractionType
    data: JsonValue | null
    duration: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserProductInteractionCountAggregateOutputType | null
    _avg: UserProductInteractionAvgAggregateOutputType | null
    _sum: UserProductInteractionSumAggregateOutputType | null
    _min: UserProductInteractionMinAggregateOutputType | null
    _max: UserProductInteractionMaxAggregateOutputType | null
  }

  type GetUserProductInteractionGroupByPayload<T extends UserProductInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProductInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProductInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProductInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], UserProductInteractionGroupByOutputType[P]>
        }
      >
    >


  export type UserProductInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    productSlug?: boolean
    type?: boolean
    data?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | UserProductInteraction$productArgs<ExtArgs>
  }, ExtArgs["result"]["userProductInteraction"]>

  export type UserProductInteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    productSlug?: boolean
    type?: boolean
    data?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | UserProductInteraction$productArgs<ExtArgs>
  }, ExtArgs["result"]["userProductInteraction"]>

  export type UserProductInteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    productSlug?: boolean
    type?: boolean
    data?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | UserProductInteraction$productArgs<ExtArgs>
  }, ExtArgs["result"]["userProductInteraction"]>

  export type UserProductInteractionSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    productSlug?: boolean
    type?: boolean
    data?: boolean
    duration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProductInteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "productSlug" | "type" | "data" | "duration" | "createdAt" | "updatedAt", ExtArgs["result"]["userProductInteraction"]>
  export type UserProductInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | UserProductInteraction$productArgs<ExtArgs>
  }
  export type UserProductInteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | UserProductInteraction$productArgs<ExtArgs>
  }
  export type UserProductInteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | UserProductInteraction$productArgs<ExtArgs>
  }

  export type $UserProductInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProductInteraction"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      productSlug: string
      type: $Enums.InteractionType
      data: Prisma.JsonValue | null
      duration: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProductInteraction"]>
    composites: {}
  }

  type UserProductInteractionGetPayload<S extends boolean | null | undefined | UserProductInteractionDefaultArgs> = $Result.GetResult<Prisma.$UserProductInteractionPayload, S>

  type UserProductInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProductInteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProductInteractionCountAggregateInputType | true
    }

  export interface UserProductInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProductInteraction'], meta: { name: 'UserProductInteraction' } }
    /**
     * Find zero or one UserProductInteraction that matches the filter.
     * @param {UserProductInteractionFindUniqueArgs} args - Arguments to find a UserProductInteraction
     * @example
     * // Get one UserProductInteraction
     * const userProductInteraction = await prisma.userProductInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProductInteractionFindUniqueArgs>(args: SelectSubset<T, UserProductInteractionFindUniqueArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProductInteraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProductInteractionFindUniqueOrThrowArgs} args - Arguments to find a UserProductInteraction
     * @example
     * // Get one UserProductInteraction
     * const userProductInteraction = await prisma.userProductInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProductInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProductInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProductInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionFindFirstArgs} args - Arguments to find a UserProductInteraction
     * @example
     * // Get one UserProductInteraction
     * const userProductInteraction = await prisma.userProductInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProductInteractionFindFirstArgs>(args?: SelectSubset<T, UserProductInteractionFindFirstArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProductInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionFindFirstOrThrowArgs} args - Arguments to find a UserProductInteraction
     * @example
     * // Get one UserProductInteraction
     * const userProductInteraction = await prisma.userProductInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProductInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProductInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProductInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProductInteractions
     * const userProductInteractions = await prisma.userProductInteraction.findMany()
     * 
     * // Get first 10 UserProductInteractions
     * const userProductInteractions = await prisma.userProductInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProductInteractionWithIdOnly = await prisma.userProductInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProductInteractionFindManyArgs>(args?: SelectSubset<T, UserProductInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProductInteraction.
     * @param {UserProductInteractionCreateArgs} args - Arguments to create a UserProductInteraction.
     * @example
     * // Create one UserProductInteraction
     * const UserProductInteraction = await prisma.userProductInteraction.create({
     *   data: {
     *     // ... data to create a UserProductInteraction
     *   }
     * })
     * 
     */
    create<T extends UserProductInteractionCreateArgs>(args: SelectSubset<T, UserProductInteractionCreateArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProductInteractions.
     * @param {UserProductInteractionCreateManyArgs} args - Arguments to create many UserProductInteractions.
     * @example
     * // Create many UserProductInteractions
     * const userProductInteraction = await prisma.userProductInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProductInteractionCreateManyArgs>(args?: SelectSubset<T, UserProductInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProductInteractions and returns the data saved in the database.
     * @param {UserProductInteractionCreateManyAndReturnArgs} args - Arguments to create many UserProductInteractions.
     * @example
     * // Create many UserProductInteractions
     * const userProductInteraction = await prisma.userProductInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProductInteractions and only return the `id`
     * const userProductInteractionWithIdOnly = await prisma.userProductInteraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProductInteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProductInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProductInteraction.
     * @param {UserProductInteractionDeleteArgs} args - Arguments to delete one UserProductInteraction.
     * @example
     * // Delete one UserProductInteraction
     * const UserProductInteraction = await prisma.userProductInteraction.delete({
     *   where: {
     *     // ... filter to delete one UserProductInteraction
     *   }
     * })
     * 
     */
    delete<T extends UserProductInteractionDeleteArgs>(args: SelectSubset<T, UserProductInteractionDeleteArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProductInteraction.
     * @param {UserProductInteractionUpdateArgs} args - Arguments to update one UserProductInteraction.
     * @example
     * // Update one UserProductInteraction
     * const userProductInteraction = await prisma.userProductInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProductInteractionUpdateArgs>(args: SelectSubset<T, UserProductInteractionUpdateArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProductInteractions.
     * @param {UserProductInteractionDeleteManyArgs} args - Arguments to filter UserProductInteractions to delete.
     * @example
     * // Delete a few UserProductInteractions
     * const { count } = await prisma.userProductInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProductInteractionDeleteManyArgs>(args?: SelectSubset<T, UserProductInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProductInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProductInteractions
     * const userProductInteraction = await prisma.userProductInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProductInteractionUpdateManyArgs>(args: SelectSubset<T, UserProductInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProductInteractions and returns the data updated in the database.
     * @param {UserProductInteractionUpdateManyAndReturnArgs} args - Arguments to update many UserProductInteractions.
     * @example
     * // Update many UserProductInteractions
     * const userProductInteraction = await prisma.userProductInteraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProductInteractions and only return the `id`
     * const userProductInteractionWithIdOnly = await prisma.userProductInteraction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProductInteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProductInteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProductInteraction.
     * @param {UserProductInteractionUpsertArgs} args - Arguments to update or create a UserProductInteraction.
     * @example
     * // Update or create a UserProductInteraction
     * const userProductInteraction = await prisma.userProductInteraction.upsert({
     *   create: {
     *     // ... data to create a UserProductInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProductInteraction we want to update
     *   }
     * })
     */
    upsert<T extends UserProductInteractionUpsertArgs>(args: SelectSubset<T, UserProductInteractionUpsertArgs<ExtArgs>>): Prisma__UserProductInteractionClient<$Result.GetResult<Prisma.$UserProductInteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProductInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionCountArgs} args - Arguments to filter UserProductInteractions to count.
     * @example
     * // Count the number of UserProductInteractions
     * const count = await prisma.userProductInteraction.count({
     *   where: {
     *     // ... the filter for the UserProductInteractions we want to count
     *   }
     * })
    **/
    count<T extends UserProductInteractionCountArgs>(
      args?: Subset<T, UserProductInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProductInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProductInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProductInteractionAggregateArgs>(args: Subset<T, UserProductInteractionAggregateArgs>): Prisma.PrismaPromise<GetUserProductInteractionAggregateType<T>>

    /**
     * Group by UserProductInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductInteractionGroupByArgs} args - Group by arguments.
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
      T extends UserProductInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProductInteractionGroupByArgs['orderBy'] }
        : { orderBy?: UserProductInteractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProductInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProductInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProductInteraction model
   */
  readonly fields: UserProductInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProductInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProductInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends UserProductInteraction$productArgs<ExtArgs> = {}>(args?: Subset<T, UserProductInteraction$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProductInteraction model
   */
  interface UserProductInteractionFieldRefs {
    readonly id: FieldRef<"UserProductInteraction", 'String'>
    readonly userId: FieldRef<"UserProductInteraction", 'String'>
    readonly productId: FieldRef<"UserProductInteraction", 'String'>
    readonly productSlug: FieldRef<"UserProductInteraction", 'String'>
    readonly type: FieldRef<"UserProductInteraction", 'InteractionType'>
    readonly data: FieldRef<"UserProductInteraction", 'Json'>
    readonly duration: FieldRef<"UserProductInteraction", 'Int'>
    readonly createdAt: FieldRef<"UserProductInteraction", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProductInteraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProductInteraction findUnique
   */
  export type UserProductInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserProductInteraction to fetch.
     */
    where: UserProductInteractionWhereUniqueInput
  }

  /**
   * UserProductInteraction findUniqueOrThrow
   */
  export type UserProductInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserProductInteraction to fetch.
     */
    where: UserProductInteractionWhereUniqueInput
  }

  /**
   * UserProductInteraction findFirst
   */
  export type UserProductInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserProductInteraction to fetch.
     */
    where?: UserProductInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductInteractions to fetch.
     */
    orderBy?: UserProductInteractionOrderByWithRelationInput | UserProductInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProductInteractions.
     */
    cursor?: UserProductInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProductInteractions.
     */
    distinct?: UserProductInteractionScalarFieldEnum | UserProductInteractionScalarFieldEnum[]
  }

  /**
   * UserProductInteraction findFirstOrThrow
   */
  export type UserProductInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserProductInteraction to fetch.
     */
    where?: UserProductInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductInteractions to fetch.
     */
    orderBy?: UserProductInteractionOrderByWithRelationInput | UserProductInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProductInteractions.
     */
    cursor?: UserProductInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProductInteractions.
     */
    distinct?: UserProductInteractionScalarFieldEnum | UserProductInteractionScalarFieldEnum[]
  }

  /**
   * UserProductInteraction findMany
   */
  export type UserProductInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserProductInteractions to fetch.
     */
    where?: UserProductInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProductInteractions to fetch.
     */
    orderBy?: UserProductInteractionOrderByWithRelationInput | UserProductInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProductInteractions.
     */
    cursor?: UserProductInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProductInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProductInteractions.
     */
    skip?: number
    distinct?: UserProductInteractionScalarFieldEnum | UserProductInteractionScalarFieldEnum[]
  }

  /**
   * UserProductInteraction create
   */
  export type UserProductInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProductInteraction.
     */
    data: XOR<UserProductInteractionCreateInput, UserProductInteractionUncheckedCreateInput>
  }

  /**
   * UserProductInteraction createMany
   */
  export type UserProductInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProductInteractions.
     */
    data: UserProductInteractionCreateManyInput | UserProductInteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProductInteraction createManyAndReturn
   */
  export type UserProductInteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * The data used to create many UserProductInteractions.
     */
    data: UserProductInteractionCreateManyInput | UserProductInteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProductInteraction update
   */
  export type UserProductInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProductInteraction.
     */
    data: XOR<UserProductInteractionUpdateInput, UserProductInteractionUncheckedUpdateInput>
    /**
     * Choose, which UserProductInteraction to update.
     */
    where: UserProductInteractionWhereUniqueInput
  }

  /**
   * UserProductInteraction updateMany
   */
  export type UserProductInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProductInteractions.
     */
    data: XOR<UserProductInteractionUpdateManyMutationInput, UserProductInteractionUncheckedUpdateManyInput>
    /**
     * Filter which UserProductInteractions to update
     */
    where?: UserProductInteractionWhereInput
    /**
     * Limit how many UserProductInteractions to update.
     */
    limit?: number
  }

  /**
   * UserProductInteraction updateManyAndReturn
   */
  export type UserProductInteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * The data used to update UserProductInteractions.
     */
    data: XOR<UserProductInteractionUpdateManyMutationInput, UserProductInteractionUncheckedUpdateManyInput>
    /**
     * Filter which UserProductInteractions to update
     */
    where?: UserProductInteractionWhereInput
    /**
     * Limit how many UserProductInteractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProductInteraction upsert
   */
  export type UserProductInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProductInteraction to update in case it exists.
     */
    where: UserProductInteractionWhereUniqueInput
    /**
     * In case the UserProductInteraction found by the `where` argument doesn't exist, create a new UserProductInteraction with this data.
     */
    create: XOR<UserProductInteractionCreateInput, UserProductInteractionUncheckedCreateInput>
    /**
     * In case the UserProductInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProductInteractionUpdateInput, UserProductInteractionUncheckedUpdateInput>
  }

  /**
   * UserProductInteraction delete
   */
  export type UserProductInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
    /**
     * Filter which UserProductInteraction to delete.
     */
    where: UserProductInteractionWhereUniqueInput
  }

  /**
   * UserProductInteraction deleteMany
   */
  export type UserProductInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProductInteractions to delete
     */
    where?: UserProductInteractionWhereInput
    /**
     * Limit how many UserProductInteractions to delete.
     */
    limit?: number
  }

  /**
   * UserProductInteraction.product
   */
  export type UserProductInteraction$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * UserProductInteraction without action
   */
  export type UserProductInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProductInteraction
     */
    select?: UserProductInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProductInteraction
     */
    omit?: UserProductInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInteractionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    tagline: 'tagline',
    category: 'category',
    status: 'status',
    version: 'version',
    monthlyRevenue: 'monthlyRevenue',
    totalUsers: 'totalUsers',
    activeUsers: 'activeUsers',
    priority: 'priority',
    techStack: 'techStack',
    tags: 'tags',
    features: 'features',
    challenges: 'challenges',
    opportunities: 'opportunities',
    links: 'links',
    logoUrl: 'logoUrl',
    coverUrl: 'coverUrl',
    screenshots: 'screenshots',
    launchedAt: 'launchedAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const RevenueTrackingScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    date: 'date',
    revenue: 'revenue',
    newUsers: 'newUsers',
    activeUsers: 'activeUsers',
    churnedUsers: 'churnedUsers',
    mrr: 'mrr',
    churnRate: 'churnRate',
    trials: 'trials',
    conversions: 'conversions',
    conversionRate: 'conversionRate',
    createdAt: 'createdAt'
  };

  export type RevenueTrackingScalarFieldEnum = (typeof RevenueTrackingScalarFieldEnum)[keyof typeof RevenueTrackingScalarFieldEnum]


  export const UserGrowthScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    date: 'date',
    totalUsers: 'totalUsers',
    newUsers: 'newUsers',
    activeUsers: 'activeUsers',
    sessions: 'sessions',
    avgSessionDuration: 'avgSessionDuration',
    dau: 'dau',
    wau: 'wau',
    mau: 'mau',
    createdAt: 'createdAt'
  };

  export type UserGrowthScalarFieldEnum = (typeof UserGrowthScalarFieldEnum)[keyof typeof UserGrowthScalarFieldEnum]


  export const ProductMetricScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    metricType: 'metricType',
    value: 'value',
    date: 'date',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ProductMetricScalarFieldEnum = (typeof ProductMetricScalarFieldEnum)[keyof typeof ProductMetricScalarFieldEnum]


  export const RoadmapItemScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    title: 'title',
    description: 'description',
    category: 'category',
    priority: 'priority',
    status: 'status',
    votes: 'votes',
    quarter: 'quarter',
    estimatedDate: 'estimatedDate',
    completedAt: 'completedAt',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoadmapItemScalarFieldEnum = (typeof RoadmapItemScalarFieldEnum)[keyof typeof RoadmapItemScalarFieldEnum]


  export const ChangelogEntryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    version: 'version',
    title: 'title',
    description: 'description',
    changes: 'changes',
    type: 'type',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChangelogEntryScalarFieldEnum = (typeof ChangelogEntryScalarFieldEnum)[keyof typeof ChangelogEntryScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    type: 'type',
    title: 'title',
    description: 'description',
    email: 'email',
    severity: 'severity',
    status: 'status',
    upvotes: 'upvotes',
    response: 'response',
    respondedBy: 'respondedBy',
    respondedAt: 'respondedAt',
    browserInfo: 'browserInfo',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    type: 'type',
    targetProducts: 'targetProducts',
    targetUsers: 'targetUsers',
    priority: 'priority',
    isDismissible: 'isDismissible',
    publishedAt: 'publishedAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    viewCount: 'viewCount',
    clickCount: 'clickCount',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const PortfolioItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    coverImage: 'coverImage',
    images: 'images',
    liveUrl: 'liveUrl',
    githubUrl: 'githubUrl',
    techStack: 'techStack',
    viewCount: 'viewCount',
    likeCount: 'likeCount',
    isFeatured: 'isFeatured',
    order: 'order',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioItemScalarFieldEnum = (typeof PortfolioItemScalarFieldEnum)[keyof typeof PortfolioItemScalarFieldEnum]


  export const AnalyticsEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    productSlug: 'productSlug',
    eventName: 'eventName',
    eventData: 'eventData',
    pageUrl: 'pageUrl',
    referrer: 'referrer',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type AnalyticsEventScalarFieldEnum = (typeof AnalyticsEventScalarFieldEnum)[keyof typeof AnalyticsEventScalarFieldEnum]


  export const UserProductInteractionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    productSlug: 'productSlug',
    type: 'type',
    data: 'data',
    duration: 'duration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProductInteractionScalarFieldEnum = (typeof UserProductInteractionScalarFieldEnum)[keyof typeof UserProductInteractionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProductCategory'
   */
  export type EnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory'>
    


  /**
   * Reference to a field of type 'ProductCategory[]'
   */
  export type ListEnumProductCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCategory[]'>
    


  /**
   * Reference to a field of type 'ProductStatus'
   */
  export type EnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus'>
    


  /**
   * Reference to a field of type 'ProductStatus[]'
   */
  export type ListEnumProductStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MetricType'
   */
  export type EnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType'>
    


  /**
   * Reference to a field of type 'MetricType[]'
   */
  export type ListEnumMetricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetricType[]'>
    


  /**
   * Reference to a field of type 'RoadmapCategory'
   */
  export type EnumRoadmapCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoadmapCategory'>
    


  /**
   * Reference to a field of type 'RoadmapCategory[]'
   */
  export type ListEnumRoadmapCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoadmapCategory[]'>
    


  /**
   * Reference to a field of type 'RoadmapPriority'
   */
  export type EnumRoadmapPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoadmapPriority'>
    


  /**
   * Reference to a field of type 'RoadmapPriority[]'
   */
  export type ListEnumRoadmapPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoadmapPriority[]'>
    


  /**
   * Reference to a field of type 'RoadmapStatus'
   */
  export type EnumRoadmapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoadmapStatus'>
    


  /**
   * Reference to a field of type 'RoadmapStatus[]'
   */
  export type ListEnumRoadmapStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoadmapStatus[]'>
    


  /**
   * Reference to a field of type 'ChangeType'
   */
  export type EnumChangeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChangeType'>
    


  /**
   * Reference to a field of type 'ChangeType[]'
   */
  export type ListEnumChangeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChangeType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FeedbackType'
   */
  export type EnumFeedbackTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackType'>
    


  /**
   * Reference to a field of type 'FeedbackType[]'
   */
  export type ListEnumFeedbackTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackType[]'>
    


  /**
   * Reference to a field of type 'FeedbackSeverity'
   */
  export type EnumFeedbackSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackSeverity'>
    


  /**
   * Reference to a field of type 'FeedbackSeverity[]'
   */
  export type ListEnumFeedbackSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackSeverity[]'>
    


  /**
   * Reference to a field of type 'FeedbackStatus'
   */
  export type EnumFeedbackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackStatus'>
    


  /**
   * Reference to a field of type 'FeedbackStatus[]'
   */
  export type ListEnumFeedbackStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackStatus[]'>
    


  /**
   * Reference to a field of type 'AnnouncementType'
   */
  export type EnumAnnouncementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementType'>
    


  /**
   * Reference to a field of type 'AnnouncementType[]'
   */
  export type ListEnumAnnouncementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementType[]'>
    


  /**
   * Reference to a field of type 'InteractionType'
   */
  export type EnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType'>
    


  /**
   * Reference to a field of type 'InteractionType[]'
   */
  export type ListEnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    productId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    tagline?: StringNullableFilter<"Product"> | string | null
    category?: EnumProductCategoryFilter<"Product"> | $Enums.ProductCategory
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    version?: StringNullableFilter<"Product"> | string | null
    monthlyRevenue?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFilter<"Product"> | number
    activeUsers?: IntFilter<"Product"> | number
    priority?: IntFilter<"Product"> | number
    techStack?: StringNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    features?: JsonNullableFilter<"Product">
    challenges?: JsonNullableFilter<"Product">
    opportunities?: JsonNullableFilter<"Product">
    links?: JsonNullableFilter<"Product">
    logoUrl?: StringNullableFilter<"Product"> | string | null
    coverUrl?: StringNullableFilter<"Product"> | string | null
    screenshots?: StringNullableListFilter<"Product">
    launchedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    metadata?: JsonFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    revenueTracking?: RevenueTrackingListRelationFilter
    userGrowth?: UserGrowthListRelationFilter
    metrics?: ProductMetricListRelationFilter
    roadmapItems?: RoadmapItemListRelationFilter
    changelogEntries?: ChangelogEntryListRelationFilter
    feedback?: FeedbackListRelationFilter
    interactions?: UserProductInteractionListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    tagline?: SortOrderInput | SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrderInput | SortOrder
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
    techStack?: SortOrder
    tags?: SortOrder
    features?: SortOrderInput | SortOrder
    challenges?: SortOrderInput | SortOrder
    opportunities?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    screenshots?: SortOrder
    launchedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revenueTracking?: RevenueTrackingOrderByRelationAggregateInput
    userGrowth?: UserGrowthOrderByRelationAggregateInput
    metrics?: ProductMetricOrderByRelationAggregateInput
    roadmapItems?: RoadmapItemOrderByRelationAggregateInput
    changelogEntries?: ChangelogEntryOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
    interactions?: UserProductInteractionOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    tagline?: StringNullableFilter<"Product"> | string | null
    category?: EnumProductCategoryFilter<"Product"> | $Enums.ProductCategory
    status?: EnumProductStatusFilter<"Product"> | $Enums.ProductStatus
    version?: StringNullableFilter<"Product"> | string | null
    monthlyRevenue?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFilter<"Product"> | number
    activeUsers?: IntFilter<"Product"> | number
    priority?: IntFilter<"Product"> | number
    techStack?: StringNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    features?: JsonNullableFilter<"Product">
    challenges?: JsonNullableFilter<"Product">
    opportunities?: JsonNullableFilter<"Product">
    links?: JsonNullableFilter<"Product">
    logoUrl?: StringNullableFilter<"Product"> | string | null
    coverUrl?: StringNullableFilter<"Product"> | string | null
    screenshots?: StringNullableListFilter<"Product">
    launchedAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    metadata?: JsonFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    revenueTracking?: RevenueTrackingListRelationFilter
    userGrowth?: UserGrowthListRelationFilter
    metrics?: ProductMetricListRelationFilter
    roadmapItems?: RoadmapItemListRelationFilter
    changelogEntries?: ChangelogEntryListRelationFilter
    feedback?: FeedbackListRelationFilter
    interactions?: UserProductInteractionListRelationFilter
  }, "id" | "productId" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    tagline?: SortOrderInput | SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrderInput | SortOrder
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
    techStack?: SortOrder
    tags?: SortOrder
    features?: SortOrderInput | SortOrder
    challenges?: SortOrderInput | SortOrder
    opportunities?: SortOrderInput | SortOrder
    links?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    screenshots?: SortOrder
    launchedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    productId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    tagline?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: EnumProductCategoryWithAggregatesFilter<"Product"> | $Enums.ProductCategory
    status?: EnumProductStatusWithAggregatesFilter<"Product"> | $Enums.ProductStatus
    version?: StringNullableWithAggregatesFilter<"Product"> | string | null
    monthlyRevenue?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    totalUsers?: IntWithAggregatesFilter<"Product"> | number
    activeUsers?: IntWithAggregatesFilter<"Product"> | number
    priority?: IntWithAggregatesFilter<"Product"> | number
    techStack?: StringNullableListFilter<"Product">
    tags?: StringNullableListFilter<"Product">
    features?: JsonNullableWithAggregatesFilter<"Product">
    challenges?: JsonNullableWithAggregatesFilter<"Product">
    opportunities?: JsonNullableWithAggregatesFilter<"Product">
    links?: JsonNullableWithAggregatesFilter<"Product">
    logoUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    screenshots?: StringNullableListFilter<"Product">
    launchedAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"Product">
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type RevenueTrackingWhereInput = {
    AND?: RevenueTrackingWhereInput | RevenueTrackingWhereInput[]
    OR?: RevenueTrackingWhereInput[]
    NOT?: RevenueTrackingWhereInput | RevenueTrackingWhereInput[]
    id?: UuidFilter<"RevenueTracking"> | string
    productId?: UuidFilter<"RevenueTracking"> | string
    date?: DateTimeFilter<"RevenueTracking"> | Date | string
    revenue?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    newUsers?: IntFilter<"RevenueTracking"> | number
    activeUsers?: IntFilter<"RevenueTracking"> | number
    churnedUsers?: IntFilter<"RevenueTracking"> | number
    mrr?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    trials?: IntFilter<"RevenueTracking"> | number
    conversions?: IntFilter<"RevenueTracking"> | number
    conversionRate?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RevenueTracking"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type RevenueTrackingOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type RevenueTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: Date | string
    productId_date?: RevenueTrackingProductIdDateCompoundUniqueInput
    AND?: RevenueTrackingWhereInput | RevenueTrackingWhereInput[]
    OR?: RevenueTrackingWhereInput[]
    NOT?: RevenueTrackingWhereInput | RevenueTrackingWhereInput[]
    productId?: UuidFilter<"RevenueTracking"> | string
    revenue?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    newUsers?: IntFilter<"RevenueTracking"> | number
    activeUsers?: IntFilter<"RevenueTracking"> | number
    churnedUsers?: IntFilter<"RevenueTracking"> | number
    mrr?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    trials?: IntFilter<"RevenueTracking"> | number
    conversions?: IntFilter<"RevenueTracking"> | number
    conversionRate?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RevenueTracking"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "date" | "productId_date">

  export type RevenueTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
    _count?: RevenueTrackingCountOrderByAggregateInput
    _avg?: RevenueTrackingAvgOrderByAggregateInput
    _max?: RevenueTrackingMaxOrderByAggregateInput
    _min?: RevenueTrackingMinOrderByAggregateInput
    _sum?: RevenueTrackingSumOrderByAggregateInput
  }

  export type RevenueTrackingScalarWhereWithAggregatesInput = {
    AND?: RevenueTrackingScalarWhereWithAggregatesInput | RevenueTrackingScalarWhereWithAggregatesInput[]
    OR?: RevenueTrackingScalarWhereWithAggregatesInput[]
    NOT?: RevenueTrackingScalarWhereWithAggregatesInput | RevenueTrackingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RevenueTracking"> | string
    productId?: UuidWithAggregatesFilter<"RevenueTracking"> | string
    date?: DateTimeWithAggregatesFilter<"RevenueTracking"> | Date | string
    revenue?: DecimalWithAggregatesFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    newUsers?: IntWithAggregatesFilter<"RevenueTracking"> | number
    activeUsers?: IntWithAggregatesFilter<"RevenueTracking"> | number
    churnedUsers?: IntWithAggregatesFilter<"RevenueTracking"> | number
    mrr?: DecimalWithAggregatesFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalWithAggregatesFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    trials?: IntWithAggregatesFilter<"RevenueTracking"> | number
    conversions?: IntWithAggregatesFilter<"RevenueTracking"> | number
    conversionRate?: DecimalWithAggregatesFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"RevenueTracking"> | Date | string
  }

  export type UserGrowthWhereInput = {
    AND?: UserGrowthWhereInput | UserGrowthWhereInput[]
    OR?: UserGrowthWhereInput[]
    NOT?: UserGrowthWhereInput | UserGrowthWhereInput[]
    id?: UuidFilter<"UserGrowth"> | string
    productId?: UuidFilter<"UserGrowth"> | string
    date?: DateTimeFilter<"UserGrowth"> | Date | string
    totalUsers?: IntFilter<"UserGrowth"> | number
    newUsers?: IntFilter<"UserGrowth"> | number
    activeUsers?: IntFilter<"UserGrowth"> | number
    sessions?: IntFilter<"UserGrowth"> | number
    avgSessionDuration?: IntFilter<"UserGrowth"> | number
    dau?: IntFilter<"UserGrowth"> | number
    wau?: IntFilter<"UserGrowth"> | number
    mau?: IntFilter<"UserGrowth"> | number
    createdAt?: DateTimeFilter<"UserGrowth"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserGrowthOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type UserGrowthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_date?: UserGrowthProductIdDateCompoundUniqueInput
    AND?: UserGrowthWhereInput | UserGrowthWhereInput[]
    OR?: UserGrowthWhereInput[]
    NOT?: UserGrowthWhereInput | UserGrowthWhereInput[]
    productId?: UuidFilter<"UserGrowth"> | string
    date?: DateTimeFilter<"UserGrowth"> | Date | string
    totalUsers?: IntFilter<"UserGrowth"> | number
    newUsers?: IntFilter<"UserGrowth"> | number
    activeUsers?: IntFilter<"UserGrowth"> | number
    sessions?: IntFilter<"UserGrowth"> | number
    avgSessionDuration?: IntFilter<"UserGrowth"> | number
    dau?: IntFilter<"UserGrowth"> | number
    wau?: IntFilter<"UserGrowth"> | number
    mau?: IntFilter<"UserGrowth"> | number
    createdAt?: DateTimeFilter<"UserGrowth"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId_date">

  export type UserGrowthOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
    createdAt?: SortOrder
    _count?: UserGrowthCountOrderByAggregateInput
    _avg?: UserGrowthAvgOrderByAggregateInput
    _max?: UserGrowthMaxOrderByAggregateInput
    _min?: UserGrowthMinOrderByAggregateInput
    _sum?: UserGrowthSumOrderByAggregateInput
  }

  export type UserGrowthScalarWhereWithAggregatesInput = {
    AND?: UserGrowthScalarWhereWithAggregatesInput | UserGrowthScalarWhereWithAggregatesInput[]
    OR?: UserGrowthScalarWhereWithAggregatesInput[]
    NOT?: UserGrowthScalarWhereWithAggregatesInput | UserGrowthScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserGrowth"> | string
    productId?: UuidWithAggregatesFilter<"UserGrowth"> | string
    date?: DateTimeWithAggregatesFilter<"UserGrowth"> | Date | string
    totalUsers?: IntWithAggregatesFilter<"UserGrowth"> | number
    newUsers?: IntWithAggregatesFilter<"UserGrowth"> | number
    activeUsers?: IntWithAggregatesFilter<"UserGrowth"> | number
    sessions?: IntWithAggregatesFilter<"UserGrowth"> | number
    avgSessionDuration?: IntWithAggregatesFilter<"UserGrowth"> | number
    dau?: IntWithAggregatesFilter<"UserGrowth"> | number
    wau?: IntWithAggregatesFilter<"UserGrowth"> | number
    mau?: IntWithAggregatesFilter<"UserGrowth"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserGrowth"> | Date | string
  }

  export type ProductMetricWhereInput = {
    AND?: ProductMetricWhereInput | ProductMetricWhereInput[]
    OR?: ProductMetricWhereInput[]
    NOT?: ProductMetricWhereInput | ProductMetricWhereInput[]
    id?: UuidFilter<"ProductMetric"> | string
    productId?: UuidFilter<"ProductMetric"> | string
    metricType?: EnumMetricTypeFilter<"ProductMetric"> | $Enums.MetricType
    value?: DecimalFilter<"ProductMetric"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"ProductMetric"> | Date | string
    metadata?: JsonNullableFilter<"ProductMetric">
    createdAt?: DateTimeFilter<"ProductMetric"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductMetricOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    date?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId_metricType_date?: ProductMetricProductIdMetricTypeDateCompoundUniqueInput
    AND?: ProductMetricWhereInput | ProductMetricWhereInput[]
    OR?: ProductMetricWhereInput[]
    NOT?: ProductMetricWhereInput | ProductMetricWhereInput[]
    productId?: UuidFilter<"ProductMetric"> | string
    metricType?: EnumMetricTypeFilter<"ProductMetric"> | $Enums.MetricType
    value?: DecimalFilter<"ProductMetric"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"ProductMetric"> | Date | string
    metadata?: JsonNullableFilter<"ProductMetric">
    createdAt?: DateTimeFilter<"ProductMetric"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId_metricType_date">

  export type ProductMetricOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    date?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductMetricCountOrderByAggregateInput
    _avg?: ProductMetricAvgOrderByAggregateInput
    _max?: ProductMetricMaxOrderByAggregateInput
    _min?: ProductMetricMinOrderByAggregateInput
    _sum?: ProductMetricSumOrderByAggregateInput
  }

  export type ProductMetricScalarWhereWithAggregatesInput = {
    AND?: ProductMetricScalarWhereWithAggregatesInput | ProductMetricScalarWhereWithAggregatesInput[]
    OR?: ProductMetricScalarWhereWithAggregatesInput[]
    NOT?: ProductMetricScalarWhereWithAggregatesInput | ProductMetricScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProductMetric"> | string
    productId?: UuidWithAggregatesFilter<"ProductMetric"> | string
    metricType?: EnumMetricTypeWithAggregatesFilter<"ProductMetric"> | $Enums.MetricType
    value?: DecimalWithAggregatesFilter<"ProductMetric"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"ProductMetric"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"ProductMetric">
    createdAt?: DateTimeWithAggregatesFilter<"ProductMetric"> | Date | string
  }

  export type RoadmapItemWhereInput = {
    AND?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    OR?: RoadmapItemWhereInput[]
    NOT?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    id?: UuidFilter<"RoadmapItem"> | string
    productId?: UuidFilter<"RoadmapItem"> | string
    title?: StringFilter<"RoadmapItem"> | string
    description?: StringFilter<"RoadmapItem"> | string
    category?: EnumRoadmapCategoryFilter<"RoadmapItem"> | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFilter<"RoadmapItem"> | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFilter<"RoadmapItem"> | $Enums.RoadmapStatus
    votes?: IntFilter<"RoadmapItem"> | number
    quarter?: StringNullableFilter<"RoadmapItem"> | string | null
    estimatedDate?: DateTimeNullableFilter<"RoadmapItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"RoadmapItem"> | Date | string | null
    metadata?: JsonFilter<"RoadmapItem">
    createdAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type RoadmapItemOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    votes?: SortOrder
    quarter?: SortOrderInput | SortOrder
    estimatedDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type RoadmapItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    OR?: RoadmapItemWhereInput[]
    NOT?: RoadmapItemWhereInput | RoadmapItemWhereInput[]
    productId?: UuidFilter<"RoadmapItem"> | string
    title?: StringFilter<"RoadmapItem"> | string
    description?: StringFilter<"RoadmapItem"> | string
    category?: EnumRoadmapCategoryFilter<"RoadmapItem"> | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFilter<"RoadmapItem"> | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFilter<"RoadmapItem"> | $Enums.RoadmapStatus
    votes?: IntFilter<"RoadmapItem"> | number
    quarter?: StringNullableFilter<"RoadmapItem"> | string | null
    estimatedDate?: DateTimeNullableFilter<"RoadmapItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"RoadmapItem"> | Date | string | null
    metadata?: JsonFilter<"RoadmapItem">
    createdAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type RoadmapItemOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    votes?: SortOrder
    quarter?: SortOrderInput | SortOrder
    estimatedDate?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoadmapItemCountOrderByAggregateInput
    _avg?: RoadmapItemAvgOrderByAggregateInput
    _max?: RoadmapItemMaxOrderByAggregateInput
    _min?: RoadmapItemMinOrderByAggregateInput
    _sum?: RoadmapItemSumOrderByAggregateInput
  }

  export type RoadmapItemScalarWhereWithAggregatesInput = {
    AND?: RoadmapItemScalarWhereWithAggregatesInput | RoadmapItemScalarWhereWithAggregatesInput[]
    OR?: RoadmapItemScalarWhereWithAggregatesInput[]
    NOT?: RoadmapItemScalarWhereWithAggregatesInput | RoadmapItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"RoadmapItem"> | string
    productId?: UuidWithAggregatesFilter<"RoadmapItem"> | string
    title?: StringWithAggregatesFilter<"RoadmapItem"> | string
    description?: StringWithAggregatesFilter<"RoadmapItem"> | string
    category?: EnumRoadmapCategoryWithAggregatesFilter<"RoadmapItem"> | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityWithAggregatesFilter<"RoadmapItem"> | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusWithAggregatesFilter<"RoadmapItem"> | $Enums.RoadmapStatus
    votes?: IntWithAggregatesFilter<"RoadmapItem"> | number
    quarter?: StringNullableWithAggregatesFilter<"RoadmapItem"> | string | null
    estimatedDate?: DateTimeNullableWithAggregatesFilter<"RoadmapItem"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"RoadmapItem"> | Date | string | null
    metadata?: JsonWithAggregatesFilter<"RoadmapItem">
    createdAt?: DateTimeWithAggregatesFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoadmapItem"> | Date | string
  }

  export type ChangelogEntryWhereInput = {
    AND?: ChangelogEntryWhereInput | ChangelogEntryWhereInput[]
    OR?: ChangelogEntryWhereInput[]
    NOT?: ChangelogEntryWhereInput | ChangelogEntryWhereInput[]
    id?: UuidFilter<"ChangelogEntry"> | string
    productId?: UuidFilter<"ChangelogEntry"> | string
    version?: StringFilter<"ChangelogEntry"> | string
    title?: StringFilter<"ChangelogEntry"> | string
    description?: StringFilter<"ChangelogEntry"> | string
    changes?: JsonFilter<"ChangelogEntry">
    type?: EnumChangeTypeFilter<"ChangelogEntry"> | $Enums.ChangeType
    isPublished?: BoolFilter<"ChangelogEntry"> | boolean
    publishedAt?: DateTimeNullableFilter<"ChangelogEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"ChangelogEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ChangelogEntry"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ChangelogEntryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    description?: SortOrder
    changes?: SortOrder
    type?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ChangelogEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChangelogEntryWhereInput | ChangelogEntryWhereInput[]
    OR?: ChangelogEntryWhereInput[]
    NOT?: ChangelogEntryWhereInput | ChangelogEntryWhereInput[]
    productId?: UuidFilter<"ChangelogEntry"> | string
    version?: StringFilter<"ChangelogEntry"> | string
    title?: StringFilter<"ChangelogEntry"> | string
    description?: StringFilter<"ChangelogEntry"> | string
    changes?: JsonFilter<"ChangelogEntry">
    type?: EnumChangeTypeFilter<"ChangelogEntry"> | $Enums.ChangeType
    isPublished?: BoolFilter<"ChangelogEntry"> | boolean
    publishedAt?: DateTimeNullableFilter<"ChangelogEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"ChangelogEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ChangelogEntry"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ChangelogEntryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    description?: SortOrder
    changes?: SortOrder
    type?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChangelogEntryCountOrderByAggregateInput
    _max?: ChangelogEntryMaxOrderByAggregateInput
    _min?: ChangelogEntryMinOrderByAggregateInput
  }

  export type ChangelogEntryScalarWhereWithAggregatesInput = {
    AND?: ChangelogEntryScalarWhereWithAggregatesInput | ChangelogEntryScalarWhereWithAggregatesInput[]
    OR?: ChangelogEntryScalarWhereWithAggregatesInput[]
    NOT?: ChangelogEntryScalarWhereWithAggregatesInput | ChangelogEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChangelogEntry"> | string
    productId?: UuidWithAggregatesFilter<"ChangelogEntry"> | string
    version?: StringWithAggregatesFilter<"ChangelogEntry"> | string
    title?: StringWithAggregatesFilter<"ChangelogEntry"> | string
    description?: StringWithAggregatesFilter<"ChangelogEntry"> | string
    changes?: JsonWithAggregatesFilter<"ChangelogEntry">
    type?: EnumChangeTypeWithAggregatesFilter<"ChangelogEntry"> | $Enums.ChangeType
    isPublished?: BoolWithAggregatesFilter<"ChangelogEntry"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"ChangelogEntry"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChangelogEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChangelogEntry"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: UuidFilter<"Feedback"> | string
    productId?: UuidFilter<"Feedback"> | string
    userId?: UuidNullableFilter<"Feedback"> | string | null
    type?: EnumFeedbackTypeFilter<"Feedback"> | $Enums.FeedbackType
    title?: StringNullableFilter<"Feedback"> | string | null
    description?: StringFilter<"Feedback"> | string
    email?: StringNullableFilter<"Feedback"> | string | null
    severity?: EnumFeedbackSeverityFilter<"Feedback"> | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFilter<"Feedback"> | $Enums.FeedbackStatus
    upvotes?: IntFilter<"Feedback"> | number
    response?: StringNullableFilter<"Feedback"> | string | null
    respondedBy?: UuidNullableFilter<"Feedback"> | string | null
    respondedAt?: DateTimeNullableFilter<"Feedback"> | Date | string | null
    browserInfo?: JsonNullableFilter<"Feedback">
    metadata?: JsonFilter<"Feedback">
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrder
    email?: SortOrderInput | SortOrder
    severity?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    response?: SortOrderInput | SortOrder
    respondedBy?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    browserInfo?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    productId?: UuidFilter<"Feedback"> | string
    userId?: UuidNullableFilter<"Feedback"> | string | null
    type?: EnumFeedbackTypeFilter<"Feedback"> | $Enums.FeedbackType
    title?: StringNullableFilter<"Feedback"> | string | null
    description?: StringFilter<"Feedback"> | string
    email?: StringNullableFilter<"Feedback"> | string | null
    severity?: EnumFeedbackSeverityFilter<"Feedback"> | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFilter<"Feedback"> | $Enums.FeedbackStatus
    upvotes?: IntFilter<"Feedback"> | number
    response?: StringNullableFilter<"Feedback"> | string | null
    respondedBy?: UuidNullableFilter<"Feedback"> | string | null
    respondedAt?: DateTimeNullableFilter<"Feedback"> | Date | string | null
    browserInfo?: JsonNullableFilter<"Feedback">
    metadata?: JsonFilter<"Feedback">
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrder
    email?: SortOrderInput | SortOrder
    severity?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    response?: SortOrderInput | SortOrder
    respondedBy?: SortOrderInput | SortOrder
    respondedAt?: SortOrderInput | SortOrder
    browserInfo?: SortOrderInput | SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Feedback"> | string
    productId?: UuidWithAggregatesFilter<"Feedback"> | string
    userId?: UuidNullableWithAggregatesFilter<"Feedback"> | string | null
    type?: EnumFeedbackTypeWithAggregatesFilter<"Feedback"> | $Enums.FeedbackType
    title?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    description?: StringWithAggregatesFilter<"Feedback"> | string
    email?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    severity?: EnumFeedbackSeverityWithAggregatesFilter<"Feedback"> | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusWithAggregatesFilter<"Feedback"> | $Enums.FeedbackStatus
    upvotes?: IntWithAggregatesFilter<"Feedback"> | number
    response?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    respondedBy?: UuidNullableWithAggregatesFilter<"Feedback"> | string | null
    respondedAt?: DateTimeNullableWithAggregatesFilter<"Feedback"> | Date | string | null
    browserInfo?: JsonNullableWithAggregatesFilter<"Feedback">
    metadata?: JsonWithAggregatesFilter<"Feedback">
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: UuidFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeFilter<"Announcement"> | $Enums.AnnouncementType
    targetProducts?: StringNullableListFilter<"Announcement">
    targetUsers?: StringNullableListFilter<"Announcement">
    priority?: IntFilter<"Announcement"> | number
    isDismissible?: BoolFilter<"Announcement"> | boolean
    publishedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    viewCount?: IntFilter<"Announcement"> | number
    clickCount?: IntFilter<"Announcement"> | number
    metadata?: JsonFilter<"Announcement">
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    targetProducts?: SortOrder
    targetUsers?: SortOrder
    priority?: SortOrder
    isDismissible?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeFilter<"Announcement"> | $Enums.AnnouncementType
    targetProducts?: StringNullableListFilter<"Announcement">
    targetUsers?: StringNullableListFilter<"Announcement">
    priority?: IntFilter<"Announcement"> | number
    isDismissible?: BoolFilter<"Announcement"> | boolean
    publishedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    isActive?: BoolFilter<"Announcement"> | boolean
    viewCount?: IntFilter<"Announcement"> | number
    clickCount?: IntFilter<"Announcement"> | number
    metadata?: JsonFilter<"Announcement">
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    targetProducts?: SortOrder
    targetUsers?: SortOrder
    priority?: SortOrder
    isDismissible?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    type?: EnumAnnouncementTypeWithAggregatesFilter<"Announcement"> | $Enums.AnnouncementType
    targetProducts?: StringNullableListFilter<"Announcement">
    targetUsers?: StringNullableListFilter<"Announcement">
    priority?: IntWithAggregatesFilter<"Announcement"> | number
    isDismissible?: BoolWithAggregatesFilter<"Announcement"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Announcement"> | boolean
    viewCount?: IntWithAggregatesFilter<"Announcement"> | number
    clickCount?: IntWithAggregatesFilter<"Announcement"> | number
    metadata?: JsonWithAggregatesFilter<"Announcement">
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type PortfolioItemWhereInput = {
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    id?: UuidFilter<"PortfolioItem"> | string
    title?: StringFilter<"PortfolioItem"> | string
    description?: StringFilter<"PortfolioItem"> | string
    category?: StringFilter<"PortfolioItem"> | string
    coverImage?: StringNullableFilter<"PortfolioItem"> | string | null
    images?: StringNullableListFilter<"PortfolioItem">
    liveUrl?: StringNullableFilter<"PortfolioItem"> | string | null
    githubUrl?: StringNullableFilter<"PortfolioItem"> | string | null
    techStack?: StringNullableListFilter<"PortfolioItem">
    viewCount?: IntFilter<"PortfolioItem"> | number
    likeCount?: IntFilter<"PortfolioItem"> | number
    isFeatured?: BoolFilter<"PortfolioItem"> | boolean
    order?: IntFilter<"PortfolioItem"> | number
    metadata?: JsonFilter<"PortfolioItem">
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
  }

  export type PortfolioItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    images?: SortOrder
    liveUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    techStack?: SortOrder
    viewCount?: SortOrder
    likeCount?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    title?: StringFilter<"PortfolioItem"> | string
    description?: StringFilter<"PortfolioItem"> | string
    category?: StringFilter<"PortfolioItem"> | string
    coverImage?: StringNullableFilter<"PortfolioItem"> | string | null
    images?: StringNullableListFilter<"PortfolioItem">
    liveUrl?: StringNullableFilter<"PortfolioItem"> | string | null
    githubUrl?: StringNullableFilter<"PortfolioItem"> | string | null
    techStack?: StringNullableListFilter<"PortfolioItem">
    viewCount?: IntFilter<"PortfolioItem"> | number
    likeCount?: IntFilter<"PortfolioItem"> | number
    isFeatured?: BoolFilter<"PortfolioItem"> | boolean
    order?: IntFilter<"PortfolioItem"> | number
    metadata?: JsonFilter<"PortfolioItem">
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
  }, "id">

  export type PortfolioItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    images?: SortOrder
    liveUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    techStack?: SortOrder
    viewCount?: SortOrder
    likeCount?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioItemCountOrderByAggregateInput
    _avg?: PortfolioItemAvgOrderByAggregateInput
    _max?: PortfolioItemMaxOrderByAggregateInput
    _min?: PortfolioItemMinOrderByAggregateInput
    _sum?: PortfolioItemSumOrderByAggregateInput
  }

  export type PortfolioItemScalarWhereWithAggregatesInput = {
    AND?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    OR?: PortfolioItemScalarWhereWithAggregatesInput[]
    NOT?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PortfolioItem"> | string
    title?: StringWithAggregatesFilter<"PortfolioItem"> | string
    description?: StringWithAggregatesFilter<"PortfolioItem"> | string
    category?: StringWithAggregatesFilter<"PortfolioItem"> | string
    coverImage?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    images?: StringNullableListFilter<"PortfolioItem">
    liveUrl?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    techStack?: StringNullableListFilter<"PortfolioItem">
    viewCount?: IntWithAggregatesFilter<"PortfolioItem"> | number
    likeCount?: IntWithAggregatesFilter<"PortfolioItem"> | number
    isFeatured?: BoolWithAggregatesFilter<"PortfolioItem"> | boolean
    order?: IntWithAggregatesFilter<"PortfolioItem"> | number
    metadata?: JsonWithAggregatesFilter<"PortfolioItem">
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
  }

  export type AnalyticsEventWhereInput = {
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    id?: UuidFilter<"AnalyticsEvent"> | string
    userId?: UuidNullableFilter<"AnalyticsEvent"> | string | null
    sessionId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    productSlug?: StringFilter<"AnalyticsEvent"> | string
    eventName?: StringFilter<"AnalyticsEvent"> | string
    eventData?: JsonNullableFilter<"AnalyticsEvent">
    pageUrl?: StringNullableFilter<"AnalyticsEvent"> | string | null
    referrer?: StringNullableFilter<"AnalyticsEvent"> | string | null
    userAgent?: StringNullableFilter<"AnalyticsEvent"> | string | null
    ipAddress?: StringNullableFilter<"AnalyticsEvent"> | string | null
    location?: JsonNullableFilter<"AnalyticsEvent">
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }

  export type AnalyticsEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    productSlug?: SortOrder
    eventName?: SortOrder
    eventData?: SortOrderInput | SortOrder
    pageUrl?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    OR?: AnalyticsEventWhereInput[]
    NOT?: AnalyticsEventWhereInput | AnalyticsEventWhereInput[]
    userId?: UuidNullableFilter<"AnalyticsEvent"> | string | null
    sessionId?: StringNullableFilter<"AnalyticsEvent"> | string | null
    productSlug?: StringFilter<"AnalyticsEvent"> | string
    eventName?: StringFilter<"AnalyticsEvent"> | string
    eventData?: JsonNullableFilter<"AnalyticsEvent">
    pageUrl?: StringNullableFilter<"AnalyticsEvent"> | string | null
    referrer?: StringNullableFilter<"AnalyticsEvent"> | string | null
    userAgent?: StringNullableFilter<"AnalyticsEvent"> | string | null
    ipAddress?: StringNullableFilter<"AnalyticsEvent"> | string | null
    location?: JsonNullableFilter<"AnalyticsEvent">
    createdAt?: DateTimeFilter<"AnalyticsEvent"> | Date | string
  }, "id">

  export type AnalyticsEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    productSlug?: SortOrder
    eventName?: SortOrder
    eventData?: SortOrderInput | SortOrder
    pageUrl?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalyticsEventCountOrderByAggregateInput
    _max?: AnalyticsEventMaxOrderByAggregateInput
    _min?: AnalyticsEventMinOrderByAggregateInput
  }

  export type AnalyticsEventScalarWhereWithAggregatesInput = {
    AND?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    OR?: AnalyticsEventScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsEventScalarWhereWithAggregatesInput | AnalyticsEventScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AnalyticsEvent"> | string
    userId?: UuidNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    sessionId?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    productSlug?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    eventName?: StringWithAggregatesFilter<"AnalyticsEvent"> | string
    eventData?: JsonNullableWithAggregatesFilter<"AnalyticsEvent">
    pageUrl?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AnalyticsEvent"> | string | null
    location?: JsonNullableWithAggregatesFilter<"AnalyticsEvent">
    createdAt?: DateTimeWithAggregatesFilter<"AnalyticsEvent"> | Date | string
  }

  export type UserProductInteractionWhereInput = {
    AND?: UserProductInteractionWhereInput | UserProductInteractionWhereInput[]
    OR?: UserProductInteractionWhereInput[]
    NOT?: UserProductInteractionWhereInput | UserProductInteractionWhereInput[]
    id?: UuidFilter<"UserProductInteraction"> | string
    userId?: UuidFilter<"UserProductInteraction"> | string
    productId?: UuidFilter<"UserProductInteraction"> | string
    productSlug?: StringFilter<"UserProductInteraction"> | string
    type?: EnumInteractionTypeFilter<"UserProductInteraction"> | $Enums.InteractionType
    data?: JsonNullableFilter<"UserProductInteraction">
    duration?: IntNullableFilter<"UserProductInteraction"> | number | null
    createdAt?: DateTimeFilter<"UserProductInteraction"> | Date | string
    updatedAt?: DateTimeFilter<"UserProductInteraction"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type UserProductInteractionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    productSlug?: SortOrder
    type?: SortOrder
    data?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type UserProductInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_productId_type_createdAt?: UserProductInteractionUserIdProductIdTypeCreatedAtCompoundUniqueInput
    AND?: UserProductInteractionWhereInput | UserProductInteractionWhereInput[]
    OR?: UserProductInteractionWhereInput[]
    NOT?: UserProductInteractionWhereInput | UserProductInteractionWhereInput[]
    userId?: UuidFilter<"UserProductInteraction"> | string
    productId?: UuidFilter<"UserProductInteraction"> | string
    productSlug?: StringFilter<"UserProductInteraction"> | string
    type?: EnumInteractionTypeFilter<"UserProductInteraction"> | $Enums.InteractionType
    data?: JsonNullableFilter<"UserProductInteraction">
    duration?: IntNullableFilter<"UserProductInteraction"> | number | null
    createdAt?: DateTimeFilter<"UserProductInteraction"> | Date | string
    updatedAt?: DateTimeFilter<"UserProductInteraction"> | Date | string
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id" | "userId_productId_type_createdAt">

  export type UserProductInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    productSlug?: SortOrder
    type?: SortOrder
    data?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProductInteractionCountOrderByAggregateInput
    _avg?: UserProductInteractionAvgOrderByAggregateInput
    _max?: UserProductInteractionMaxOrderByAggregateInput
    _min?: UserProductInteractionMinOrderByAggregateInput
    _sum?: UserProductInteractionSumOrderByAggregateInput
  }

  export type UserProductInteractionScalarWhereWithAggregatesInput = {
    AND?: UserProductInteractionScalarWhereWithAggregatesInput | UserProductInteractionScalarWhereWithAggregatesInput[]
    OR?: UserProductInteractionScalarWhereWithAggregatesInput[]
    NOT?: UserProductInteractionScalarWhereWithAggregatesInput | UserProductInteractionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"UserProductInteraction"> | string
    userId?: UuidWithAggregatesFilter<"UserProductInteraction"> | string
    productId?: UuidWithAggregatesFilter<"UserProductInteraction"> | string
    productSlug?: StringWithAggregatesFilter<"UserProductInteraction"> | string
    type?: EnumInteractionTypeWithAggregatesFilter<"UserProductInteraction"> | $Enums.InteractionType
    data?: JsonNullableWithAggregatesFilter<"UserProductInteraction">
    duration?: IntNullableWithAggregatesFilter<"UserProductInteraction"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserProductInteraction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProductInteraction"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueTrackingCreateInput = {
    id?: string
    date: Date | string
    revenue?: Decimal | DecimalJsLike | number | string
    newUsers?: number
    activeUsers?: number
    churnedUsers?: number
    mrr?: Decimal | DecimalJsLike | number | string
    churnRate?: Decimal | DecimalJsLike | number | string
    trials?: number
    conversions?: number
    conversionRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutRevenueTrackingInput
  }

  export type RevenueTrackingUncheckedCreateInput = {
    id?: string
    productId: string
    date: Date | string
    revenue?: Decimal | DecimalJsLike | number | string
    newUsers?: number
    activeUsers?: number
    churnedUsers?: number
    mrr?: Decimal | DecimalJsLike | number | string
    churnRate?: Decimal | DecimalJsLike | number | string
    trials?: number
    conversions?: number
    conversionRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RevenueTrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRevenueTrackingNestedInput
  }

  export type RevenueTrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueTrackingCreateManyInput = {
    id?: string
    productId: string
    date: Date | string
    revenue?: Decimal | DecimalJsLike | number | string
    newUsers?: number
    activeUsers?: number
    churnedUsers?: number
    mrr?: Decimal | DecimalJsLike | number | string
    churnRate?: Decimal | DecimalJsLike | number | string
    trials?: number
    conversions?: number
    conversionRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RevenueTrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueTrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrowthCreateInput = {
    id?: string
    date: Date | string
    totalUsers?: number
    newUsers?: number
    activeUsers?: number
    sessions?: number
    avgSessionDuration?: number
    dau?: number
    wau?: number
    mau?: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutUserGrowthInput
  }

  export type UserGrowthUncheckedCreateInput = {
    id?: string
    productId: string
    date: Date | string
    totalUsers?: number
    newUsers?: number
    activeUsers?: number
    sessions?: number
    avgSessionDuration?: number
    dau?: number
    wau?: number
    mau?: number
    createdAt?: Date | string
  }

  export type UserGrowthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutUserGrowthNestedInput
  }

  export type UserGrowthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrowthCreateManyInput = {
    id?: string
    productId: string
    date: Date | string
    totalUsers?: number
    newUsers?: number
    activeUsers?: number
    sessions?: number
    avgSessionDuration?: number
    dau?: number
    wau?: number
    mau?: number
    createdAt?: Date | string
  }

  export type UserGrowthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrowthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricCreateInput = {
    id?: string
    metricType: $Enums.MetricType
    value: Decimal | DecimalJsLike | number | string
    date: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutMetricsInput
  }

  export type ProductMetricUncheckedCreateInput = {
    id?: string
    productId: string
    metricType: $Enums.MetricType
    value: Decimal | DecimalJsLike | number | string
    date: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type ProductMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricCreateManyInput = {
    id?: string
    productId: string
    metricType: $Enums.MetricType
    value: Decimal | DecimalJsLike | number | string
    date: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status?: $Enums.RoadmapStatus
    votes?: number
    quarter?: string | null
    estimatedDate?: Date | string | null
    completedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutRoadmapItemsInput
  }

  export type RoadmapItemUncheckedCreateInput = {
    id?: string
    productId: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status?: $Enums.RoadmapStatus
    votes?: number
    quarter?: string | null
    estimatedDate?: Date | string | null
    completedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRoadmapItemsNestedInput
  }

  export type RoadmapItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemCreateManyInput = {
    id?: string
    productId: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status?: $Enums.RoadmapStatus
    votes?: number
    quarter?: string | null
    estimatedDate?: Date | string | null
    completedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangelogEntryCreateInput = {
    id?: string
    version: string
    title: string
    description: string
    changes: JsonNullValueInput | InputJsonValue
    type: $Enums.ChangeType
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutChangelogEntriesInput
  }

  export type ChangelogEntryUncheckedCreateInput = {
    id?: string
    productId: string
    version: string
    title: string
    description: string
    changes: JsonNullValueInput | InputJsonValue
    type: $Enums.ChangeType
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChangelogEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutChangelogEntriesNestedInput
  }

  export type ChangelogEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangelogEntryCreateManyInput = {
    id?: string
    productId: string
    version: string
    title: string
    description: string
    changes: JsonNullValueInput | InputJsonValue
    type: $Enums.ChangeType
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChangelogEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangelogEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    userId?: string | null
    type: $Enums.FeedbackType
    title?: string | null
    description: string
    email?: string | null
    severity?: $Enums.FeedbackSeverity
    status?: $Enums.FeedbackStatus
    upvotes?: number
    response?: string | null
    respondedBy?: string | null
    respondedAt?: Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    productId: string
    userId?: string | null
    type: $Enums.FeedbackType
    title?: string | null
    description: string
    email?: string | null
    severity?: $Enums.FeedbackSeverity
    status?: $Enums.FeedbackStatus
    upvotes?: number
    response?: string | null
    respondedBy?: string | null
    respondedAt?: Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    productId: string
    userId?: string | null
    type: $Enums.FeedbackType
    title?: string | null
    description: string
    email?: string | null
    severity?: $Enums.FeedbackSeverity
    status?: $Enums.FeedbackStatus
    upvotes?: number
    response?: string | null
    respondedBy?: string | null
    respondedAt?: Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    type: $Enums.AnnouncementType
    targetProducts?: AnnouncementCreatetargetProductsInput | string[]
    targetUsers?: AnnouncementCreatetargetUsersInput | string[]
    priority?: number
    isDismissible?: boolean
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    viewCount?: number
    clickCount?: number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    type: $Enums.AnnouncementType
    targetProducts?: AnnouncementCreatetargetProductsInput | string[]
    targetUsers?: AnnouncementCreatetargetUsersInput | string[]
    priority?: number
    isDismissible?: boolean
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    viewCount?: number
    clickCount?: number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    targetProducts?: AnnouncementUpdatetargetProductsInput | string[]
    targetUsers?: AnnouncementUpdatetargetUsersInput | string[]
    priority?: IntFieldUpdateOperationsInput | number
    isDismissible?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    clickCount?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    targetProducts?: AnnouncementUpdatetargetProductsInput | string[]
    targetUsers?: AnnouncementUpdatetargetUsersInput | string[]
    priority?: IntFieldUpdateOperationsInput | number
    isDismissible?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    clickCount?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    type: $Enums.AnnouncementType
    targetProducts?: AnnouncementCreatetargetProductsInput | string[]
    targetUsers?: AnnouncementCreatetargetUsersInput | string[]
    priority?: number
    isDismissible?: boolean
    publishedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    viewCount?: number
    clickCount?: number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    targetProducts?: AnnouncementUpdatetargetProductsInput | string[]
    targetUsers?: AnnouncementUpdatetargetUsersInput | string[]
    priority?: IntFieldUpdateOperationsInput | number
    isDismissible?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    clickCount?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: EnumAnnouncementTypeFieldUpdateOperationsInput | $Enums.AnnouncementType
    targetProducts?: AnnouncementUpdatetargetProductsInput | string[]
    targetUsers?: AnnouncementUpdatetargetUsersInput | string[]
    priority?: IntFieldUpdateOperationsInput | number
    isDismissible?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    clickCount?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    coverImage?: string | null
    images?: PortfolioItemCreateimagesInput | string[]
    liveUrl?: string | null
    githubUrl?: string | null
    techStack?: PortfolioItemCreatetechStackInput | string[]
    viewCount?: number
    likeCount?: number
    isFeatured?: boolean
    order?: number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    coverImage?: string | null
    images?: PortfolioItemCreateimagesInput | string[]
    liveUrl?: string | null
    githubUrl?: string | null
    techStack?: PortfolioItemCreatetechStackInput | string[]
    viewCount?: number
    likeCount?: number
    isFeatured?: boolean
    order?: number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PortfolioItemUpdateimagesInput | string[]
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: PortfolioItemUpdatetechStackInput | string[]
    viewCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PortfolioItemUpdateimagesInput | string[]
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: PortfolioItemUpdatetechStackInput | string[]
    viewCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    coverImage?: string | null
    images?: PortfolioItemCreateimagesInput | string[]
    liveUrl?: string | null
    githubUrl?: string | null
    techStack?: PortfolioItemCreatetechStackInput | string[]
    viewCount?: number
    likeCount?: number
    isFeatured?: boolean
    order?: number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PortfolioItemUpdateimagesInput | string[]
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: PortfolioItemUpdatetechStackInput | string[]
    viewCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    images?: PortfolioItemUpdateimagesInput | string[]
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    techStack?: PortfolioItemUpdatetechStackInput | string[]
    viewCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateInput = {
    id?: string
    userId?: string | null
    sessionId?: string | null
    productSlug: string
    eventName: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: string | null
    referrer?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUncheckedCreateInput = {
    id?: string
    userId?: string | null
    sessionId?: string | null
    productSlug: string
    eventName: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: string | null
    referrer?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productSlug?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productSlug?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventCreateManyInput = {
    id?: string
    userId?: string | null
    sessionId?: string | null
    productSlug: string
    eventName: string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: string | null
    referrer?: string | null
    userAgent?: string | null
    ipAddress?: string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalyticsEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productSlug?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    productSlug?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventData?: NullableJsonNullValueInput | InputJsonValue
    pageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductInteractionCreateInput = {
    id?: string
    userId: string
    productSlug: string
    type: $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product?: ProductCreateNestedOneWithoutInteractionsInput
  }

  export type UserProductInteractionUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    productSlug: string
    type: $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProductInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutInteractionsNestedInput
  }

  export type UserProductInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductInteractionCreateManyInput = {
    id?: string
    userId: string
    productId: string
    productSlug: string
    type: $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProductInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProductCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryFilter<$PrismaModel> | $Enums.ProductCategory
  }

  export type EnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RevenueTrackingListRelationFilter = {
    every?: RevenueTrackingWhereInput
    some?: RevenueTrackingWhereInput
    none?: RevenueTrackingWhereInput
  }

  export type UserGrowthListRelationFilter = {
    every?: UserGrowthWhereInput
    some?: UserGrowthWhereInput
    none?: UserGrowthWhereInput
  }

  export type ProductMetricListRelationFilter = {
    every?: ProductMetricWhereInput
    some?: ProductMetricWhereInput
    none?: ProductMetricWhereInput
  }

  export type RoadmapItemListRelationFilter = {
    every?: RoadmapItemWhereInput
    some?: RoadmapItemWhereInput
    none?: RoadmapItemWhereInput
  }

  export type ChangelogEntryListRelationFilter = {
    every?: ChangelogEntryWhereInput
    some?: ChangelogEntryWhereInput
    none?: ChangelogEntryWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type UserProductInteractionListRelationFilter = {
    every?: UserProductInteractionWhereInput
    some?: UserProductInteractionWhereInput
    none?: UserProductInteractionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RevenueTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGrowthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoadmapItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChangelogEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProductInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
    techStack?: SortOrder
    tags?: SortOrder
    features?: SortOrder
    challenges?: SortOrder
    opportunities?: SortOrder
    links?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    screenshots?: SortOrder
    launchedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    launchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    tagline?: SortOrder
    category?: SortOrder
    status?: SortOrder
    version?: SortOrder
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
    logoUrl?: SortOrder
    coverUrl?: SortOrder
    launchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    monthlyRevenue?: SortOrder
    totalUsers?: SortOrder
    activeUsers?: SortOrder
    priority?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProductCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>
  }

  export type EnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type RevenueTrackingProductIdDateCompoundUniqueInput = {
    productId: string
    date: Date | string
  }

  export type RevenueTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
  }

  export type RevenueTrackingAvgOrderByAggregateInput = {
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
  }

  export type RevenueTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
  }

  export type RevenueTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
    createdAt?: SortOrder
  }

  export type RevenueTrackingSumOrderByAggregateInput = {
    revenue?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    churnedUsers?: SortOrder
    mrr?: SortOrder
    churnRate?: SortOrder
    trials?: SortOrder
    conversions?: SortOrder
    conversionRate?: SortOrder
  }

  export type UserGrowthProductIdDateCompoundUniqueInput = {
    productId: string
    date: Date | string
  }

  export type UserGrowthCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGrowthAvgOrderByAggregateInput = {
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
  }

  export type UserGrowthMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGrowthMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    date?: SortOrder
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGrowthSumOrderByAggregateInput = {
    totalUsers?: SortOrder
    newUsers?: SortOrder
    activeUsers?: SortOrder
    sessions?: SortOrder
    avgSessionDuration?: SortOrder
    dau?: SortOrder
    wau?: SortOrder
    mau?: SortOrder
  }

  export type EnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type ProductMetricProductIdMetricTypeDateCompoundUniqueInput = {
    productId: string
    metricType: $Enums.MetricType
    date: Date | string
  }

  export type ProductMetricCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    date?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMetricAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type ProductMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMetricMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    metricType?: SortOrder
    value?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductMetricSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type EnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type EnumRoadmapCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapCategory | EnumRoadmapCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapCategoryFilter<$PrismaModel> | $Enums.RoadmapCategory
  }

  export type EnumRoadmapPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapPriority | EnumRoadmapPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapPriorityFilter<$PrismaModel> | $Enums.RoadmapPriority
  }

  export type EnumRoadmapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapStatus | EnumRoadmapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapStatusFilter<$PrismaModel> | $Enums.RoadmapStatus
  }

  export type RoadmapItemCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    votes?: SortOrder
    quarter?: SortOrder
    estimatedDate?: SortOrder
    completedAt?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapItemAvgOrderByAggregateInput = {
    votes?: SortOrder
  }

  export type RoadmapItemMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    votes?: SortOrder
    quarter?: SortOrder
    estimatedDate?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapItemMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    votes?: SortOrder
    quarter?: SortOrder
    estimatedDate?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadmapItemSumOrderByAggregateInput = {
    votes?: SortOrder
  }

  export type EnumRoadmapCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapCategory | EnumRoadmapCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RoadmapCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoadmapCategoryFilter<$PrismaModel>
    _max?: NestedEnumRoadmapCategoryFilter<$PrismaModel>
  }

  export type EnumRoadmapPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapPriority | EnumRoadmapPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RoadmapPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoadmapPriorityFilter<$PrismaModel>
    _max?: NestedEnumRoadmapPriorityFilter<$PrismaModel>
  }

  export type EnumRoadmapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapStatus | EnumRoadmapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoadmapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoadmapStatusFilter<$PrismaModel>
    _max?: NestedEnumRoadmapStatusFilter<$PrismaModel>
  }

  export type EnumChangeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChangeType | EnumChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChangeTypeFilter<$PrismaModel> | $Enums.ChangeType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChangelogEntryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    description?: SortOrder
    changes?: SortOrder
    type?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChangelogEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChangelogEntryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    version?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChangeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChangeType | EnumChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChangeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChangeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChangeTypeFilter<$PrismaModel>
    _max?: NestedEnumChangeTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumFeedbackTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeFilter<$PrismaModel> | $Enums.FeedbackType
  }

  export type EnumFeedbackSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityFilter<$PrismaModel> | $Enums.FeedbackSeverity
  }

  export type EnumFeedbackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackStatusFilter<$PrismaModel> | $Enums.FeedbackStatus
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    email?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    response?: SortOrder
    respondedBy?: SortOrder
    respondedAt?: SortOrder
    browserInfo?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    upvotes?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    email?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    response?: SortOrder
    respondedBy?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    email?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    upvotes?: SortOrder
    response?: SortOrder
    respondedBy?: SortOrder
    respondedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    upvotes?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumFeedbackTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackTypeFilter<$PrismaModel>
    _max?: NestedEnumFeedbackTypeFilter<$PrismaModel>
  }

  export type EnumFeedbackSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
    _max?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
  }

  export type EnumFeedbackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackStatusFilter<$PrismaModel>
    _max?: NestedEnumFeedbackStatusFilter<$PrismaModel>
  }

  export type EnumAnnouncementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeFilter<$PrismaModel> | $Enums.AnnouncementType
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    targetProducts?: SortOrder
    targetUsers?: SortOrder
    priority?: SortOrder
    isDismissible?: SortOrder
    publishedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    priority?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isDismissible?: SortOrder
    publishedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    isDismissible?: SortOrder
    publishedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    priority?: SortOrder
    viewCount?: SortOrder
    clickCount?: SortOrder
  }

  export type EnumAnnouncementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
  }

  export type PortfolioItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    images?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    techStack?: SortOrder
    viewCount?: SortOrder
    likeCount?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemAvgOrderByAggregateInput = {
    viewCount?: SortOrder
    likeCount?: SortOrder
    order?: SortOrder
  }

  export type PortfolioItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    viewCount?: SortOrder
    likeCount?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    coverImage?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    viewCount?: SortOrder
    likeCount?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemSumOrderByAggregateInput = {
    viewCount?: SortOrder
    likeCount?: SortOrder
    order?: SortOrder
  }

  export type AnalyticsEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    productSlug?: SortOrder
    eventName?: SortOrder
    eventData?: SortOrder
    pageUrl?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    productSlug?: SortOrder
    eventName?: SortOrder
    pageUrl?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalyticsEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    productSlug?: SortOrder
    eventName?: SortOrder
    pageUrl?: SortOrder
    referrer?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type UserProductInteractionUserIdProductIdTypeCreatedAtCompoundUniqueInput = {
    userId: string
    productId: string
    type: $Enums.InteractionType
    createdAt: Date | string
  }

  export type UserProductInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    productSlug?: SortOrder
    type?: SortOrder
    data?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProductInteractionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type UserProductInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    productSlug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProductInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    productSlug?: SortOrder
    type?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProductInteractionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductCreatetechStackInput = {
    set: string[]
  }

  export type ProductCreatetagsInput = {
    set: string[]
  }

  export type ProductCreatescreenshotsInput = {
    set: string[]
  }

  export type RevenueTrackingCreateNestedManyWithoutProductInput = {
    create?: XOR<RevenueTrackingCreateWithoutProductInput, RevenueTrackingUncheckedCreateWithoutProductInput> | RevenueTrackingCreateWithoutProductInput[] | RevenueTrackingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RevenueTrackingCreateOrConnectWithoutProductInput | RevenueTrackingCreateOrConnectWithoutProductInput[]
    createMany?: RevenueTrackingCreateManyProductInputEnvelope
    connect?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
  }

  export type UserGrowthCreateNestedManyWithoutProductInput = {
    create?: XOR<UserGrowthCreateWithoutProductInput, UserGrowthUncheckedCreateWithoutProductInput> | UserGrowthCreateWithoutProductInput[] | UserGrowthUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserGrowthCreateOrConnectWithoutProductInput | UserGrowthCreateOrConnectWithoutProductInput[]
    createMany?: UserGrowthCreateManyProductInputEnvelope
    connect?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
  }

  export type ProductMetricCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMetricCreateWithoutProductInput, ProductMetricUncheckedCreateWithoutProductInput> | ProductMetricCreateWithoutProductInput[] | ProductMetricUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetricCreateOrConnectWithoutProductInput | ProductMetricCreateOrConnectWithoutProductInput[]
    createMany?: ProductMetricCreateManyProductInputEnvelope
    connect?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
  }

  export type RoadmapItemCreateNestedManyWithoutProductInput = {
    create?: XOR<RoadmapItemCreateWithoutProductInput, RoadmapItemUncheckedCreateWithoutProductInput> | RoadmapItemCreateWithoutProductInput[] | RoadmapItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutProductInput | RoadmapItemCreateOrConnectWithoutProductInput[]
    createMany?: RoadmapItemCreateManyProductInputEnvelope
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
  }

  export type ChangelogEntryCreateNestedManyWithoutProductInput = {
    create?: XOR<ChangelogEntryCreateWithoutProductInput, ChangelogEntryUncheckedCreateWithoutProductInput> | ChangelogEntryCreateWithoutProductInput[] | ChangelogEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChangelogEntryCreateOrConnectWithoutProductInput | ChangelogEntryCreateOrConnectWithoutProductInput[]
    createMany?: ChangelogEntryCreateManyProductInputEnvelope
    connect?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutProductInput = {
    create?: XOR<FeedbackCreateWithoutProductInput, FeedbackUncheckedCreateWithoutProductInput> | FeedbackCreateWithoutProductInput[] | FeedbackUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutProductInput | FeedbackCreateOrConnectWithoutProductInput[]
    createMany?: FeedbackCreateManyProductInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type UserProductInteractionCreateNestedManyWithoutProductInput = {
    create?: XOR<UserProductInteractionCreateWithoutProductInput, UserProductInteractionUncheckedCreateWithoutProductInput> | UserProductInteractionCreateWithoutProductInput[] | UserProductInteractionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductInteractionCreateOrConnectWithoutProductInput | UserProductInteractionCreateOrConnectWithoutProductInput[]
    createMany?: UserProductInteractionCreateManyProductInputEnvelope
    connect?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
  }

  export type RevenueTrackingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RevenueTrackingCreateWithoutProductInput, RevenueTrackingUncheckedCreateWithoutProductInput> | RevenueTrackingCreateWithoutProductInput[] | RevenueTrackingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RevenueTrackingCreateOrConnectWithoutProductInput | RevenueTrackingCreateOrConnectWithoutProductInput[]
    createMany?: RevenueTrackingCreateManyProductInputEnvelope
    connect?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
  }

  export type UserGrowthUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserGrowthCreateWithoutProductInput, UserGrowthUncheckedCreateWithoutProductInput> | UserGrowthCreateWithoutProductInput[] | UserGrowthUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserGrowthCreateOrConnectWithoutProductInput | UserGrowthCreateOrConnectWithoutProductInput[]
    createMany?: UserGrowthCreateManyProductInputEnvelope
    connect?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
  }

  export type ProductMetricUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMetricCreateWithoutProductInput, ProductMetricUncheckedCreateWithoutProductInput> | ProductMetricCreateWithoutProductInput[] | ProductMetricUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetricCreateOrConnectWithoutProductInput | ProductMetricCreateOrConnectWithoutProductInput[]
    createMany?: ProductMetricCreateManyProductInputEnvelope
    connect?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
  }

  export type RoadmapItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<RoadmapItemCreateWithoutProductInput, RoadmapItemUncheckedCreateWithoutProductInput> | RoadmapItemCreateWithoutProductInput[] | RoadmapItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutProductInput | RoadmapItemCreateOrConnectWithoutProductInput[]
    createMany?: RoadmapItemCreateManyProductInputEnvelope
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
  }

  export type ChangelogEntryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ChangelogEntryCreateWithoutProductInput, ChangelogEntryUncheckedCreateWithoutProductInput> | ChangelogEntryCreateWithoutProductInput[] | ChangelogEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChangelogEntryCreateOrConnectWithoutProductInput | ChangelogEntryCreateOrConnectWithoutProductInput[]
    createMany?: ChangelogEntryCreateManyProductInputEnvelope
    connect?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FeedbackCreateWithoutProductInput, FeedbackUncheckedCreateWithoutProductInput> | FeedbackCreateWithoutProductInput[] | FeedbackUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutProductInput | FeedbackCreateOrConnectWithoutProductInput[]
    createMany?: FeedbackCreateManyProductInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type UserProductInteractionUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserProductInteractionCreateWithoutProductInput, UserProductInteractionUncheckedCreateWithoutProductInput> | UserProductInteractionCreateWithoutProductInput[] | UserProductInteractionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductInteractionCreateOrConnectWithoutProductInput | UserProductInteractionCreateOrConnectWithoutProductInput[]
    createMany?: UserProductInteractionCreateManyProductInputEnvelope
    connect?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumProductCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ProductCategory
  }

  export type EnumProductStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProductStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdatescreenshotsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RevenueTrackingUpdateManyWithoutProductNestedInput = {
    create?: XOR<RevenueTrackingCreateWithoutProductInput, RevenueTrackingUncheckedCreateWithoutProductInput> | RevenueTrackingCreateWithoutProductInput[] | RevenueTrackingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RevenueTrackingCreateOrConnectWithoutProductInput | RevenueTrackingCreateOrConnectWithoutProductInput[]
    upsert?: RevenueTrackingUpsertWithWhereUniqueWithoutProductInput | RevenueTrackingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RevenueTrackingCreateManyProductInputEnvelope
    set?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    disconnect?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    delete?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    connect?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    update?: RevenueTrackingUpdateWithWhereUniqueWithoutProductInput | RevenueTrackingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RevenueTrackingUpdateManyWithWhereWithoutProductInput | RevenueTrackingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RevenueTrackingScalarWhereInput | RevenueTrackingScalarWhereInput[]
  }

  export type UserGrowthUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserGrowthCreateWithoutProductInput, UserGrowthUncheckedCreateWithoutProductInput> | UserGrowthCreateWithoutProductInput[] | UserGrowthUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserGrowthCreateOrConnectWithoutProductInput | UserGrowthCreateOrConnectWithoutProductInput[]
    upsert?: UserGrowthUpsertWithWhereUniqueWithoutProductInput | UserGrowthUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserGrowthCreateManyProductInputEnvelope
    set?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    disconnect?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    delete?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    connect?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    update?: UserGrowthUpdateWithWhereUniqueWithoutProductInput | UserGrowthUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserGrowthUpdateManyWithWhereWithoutProductInput | UserGrowthUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserGrowthScalarWhereInput | UserGrowthScalarWhereInput[]
  }

  export type ProductMetricUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMetricCreateWithoutProductInput, ProductMetricUncheckedCreateWithoutProductInput> | ProductMetricCreateWithoutProductInput[] | ProductMetricUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetricCreateOrConnectWithoutProductInput | ProductMetricCreateOrConnectWithoutProductInput[]
    upsert?: ProductMetricUpsertWithWhereUniqueWithoutProductInput | ProductMetricUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMetricCreateManyProductInputEnvelope
    set?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    disconnect?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    delete?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    connect?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    update?: ProductMetricUpdateWithWhereUniqueWithoutProductInput | ProductMetricUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMetricUpdateManyWithWhereWithoutProductInput | ProductMetricUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMetricScalarWhereInput | ProductMetricScalarWhereInput[]
  }

  export type RoadmapItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<RoadmapItemCreateWithoutProductInput, RoadmapItemUncheckedCreateWithoutProductInput> | RoadmapItemCreateWithoutProductInput[] | RoadmapItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutProductInput | RoadmapItemCreateOrConnectWithoutProductInput[]
    upsert?: RoadmapItemUpsertWithWhereUniqueWithoutProductInput | RoadmapItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RoadmapItemCreateManyProductInputEnvelope
    set?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    disconnect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    delete?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    update?: RoadmapItemUpdateWithWhereUniqueWithoutProductInput | RoadmapItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RoadmapItemUpdateManyWithWhereWithoutProductInput | RoadmapItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
  }

  export type ChangelogEntryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ChangelogEntryCreateWithoutProductInput, ChangelogEntryUncheckedCreateWithoutProductInput> | ChangelogEntryCreateWithoutProductInput[] | ChangelogEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChangelogEntryCreateOrConnectWithoutProductInput | ChangelogEntryCreateOrConnectWithoutProductInput[]
    upsert?: ChangelogEntryUpsertWithWhereUniqueWithoutProductInput | ChangelogEntryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ChangelogEntryCreateManyProductInputEnvelope
    set?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    disconnect?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    delete?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    connect?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    update?: ChangelogEntryUpdateWithWhereUniqueWithoutProductInput | ChangelogEntryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ChangelogEntryUpdateManyWithWhereWithoutProductInput | ChangelogEntryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ChangelogEntryScalarWhereInput | ChangelogEntryScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutProductNestedInput = {
    create?: XOR<FeedbackCreateWithoutProductInput, FeedbackUncheckedCreateWithoutProductInput> | FeedbackCreateWithoutProductInput[] | FeedbackUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutProductInput | FeedbackCreateOrConnectWithoutProductInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutProductInput | FeedbackUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FeedbackCreateManyProductInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutProductInput | FeedbackUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutProductInput | FeedbackUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserProductInteractionUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserProductInteractionCreateWithoutProductInput, UserProductInteractionUncheckedCreateWithoutProductInput> | UserProductInteractionCreateWithoutProductInput[] | UserProductInteractionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductInteractionCreateOrConnectWithoutProductInput | UserProductInteractionCreateOrConnectWithoutProductInput[]
    upsert?: UserProductInteractionUpsertWithWhereUniqueWithoutProductInput | UserProductInteractionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserProductInteractionCreateManyProductInputEnvelope
    set?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    disconnect?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    delete?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    connect?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    update?: UserProductInteractionUpdateWithWhereUniqueWithoutProductInput | UserProductInteractionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserProductInteractionUpdateManyWithWhereWithoutProductInput | UserProductInteractionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserProductInteractionScalarWhereInput | UserProductInteractionScalarWhereInput[]
  }

  export type RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RevenueTrackingCreateWithoutProductInput, RevenueTrackingUncheckedCreateWithoutProductInput> | RevenueTrackingCreateWithoutProductInput[] | RevenueTrackingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RevenueTrackingCreateOrConnectWithoutProductInput | RevenueTrackingCreateOrConnectWithoutProductInput[]
    upsert?: RevenueTrackingUpsertWithWhereUniqueWithoutProductInput | RevenueTrackingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RevenueTrackingCreateManyProductInputEnvelope
    set?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    disconnect?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    delete?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    connect?: RevenueTrackingWhereUniqueInput | RevenueTrackingWhereUniqueInput[]
    update?: RevenueTrackingUpdateWithWhereUniqueWithoutProductInput | RevenueTrackingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RevenueTrackingUpdateManyWithWhereWithoutProductInput | RevenueTrackingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RevenueTrackingScalarWhereInput | RevenueTrackingScalarWhereInput[]
  }

  export type UserGrowthUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserGrowthCreateWithoutProductInput, UserGrowthUncheckedCreateWithoutProductInput> | UserGrowthCreateWithoutProductInput[] | UserGrowthUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserGrowthCreateOrConnectWithoutProductInput | UserGrowthCreateOrConnectWithoutProductInput[]
    upsert?: UserGrowthUpsertWithWhereUniqueWithoutProductInput | UserGrowthUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserGrowthCreateManyProductInputEnvelope
    set?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    disconnect?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    delete?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    connect?: UserGrowthWhereUniqueInput | UserGrowthWhereUniqueInput[]
    update?: UserGrowthUpdateWithWhereUniqueWithoutProductInput | UserGrowthUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserGrowthUpdateManyWithWhereWithoutProductInput | UserGrowthUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserGrowthScalarWhereInput | UserGrowthScalarWhereInput[]
  }

  export type ProductMetricUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMetricCreateWithoutProductInput, ProductMetricUncheckedCreateWithoutProductInput> | ProductMetricCreateWithoutProductInput[] | ProductMetricUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetricCreateOrConnectWithoutProductInput | ProductMetricCreateOrConnectWithoutProductInput[]
    upsert?: ProductMetricUpsertWithWhereUniqueWithoutProductInput | ProductMetricUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMetricCreateManyProductInputEnvelope
    set?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    disconnect?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    delete?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    connect?: ProductMetricWhereUniqueInput | ProductMetricWhereUniqueInput[]
    update?: ProductMetricUpdateWithWhereUniqueWithoutProductInput | ProductMetricUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMetricUpdateManyWithWhereWithoutProductInput | ProductMetricUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMetricScalarWhereInput | ProductMetricScalarWhereInput[]
  }

  export type RoadmapItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<RoadmapItemCreateWithoutProductInput, RoadmapItemUncheckedCreateWithoutProductInput> | RoadmapItemCreateWithoutProductInput[] | RoadmapItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: RoadmapItemCreateOrConnectWithoutProductInput | RoadmapItemCreateOrConnectWithoutProductInput[]
    upsert?: RoadmapItemUpsertWithWhereUniqueWithoutProductInput | RoadmapItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: RoadmapItemCreateManyProductInputEnvelope
    set?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    disconnect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    delete?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    connect?: RoadmapItemWhereUniqueInput | RoadmapItemWhereUniqueInput[]
    update?: RoadmapItemUpdateWithWhereUniqueWithoutProductInput | RoadmapItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: RoadmapItemUpdateManyWithWhereWithoutProductInput | RoadmapItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
  }

  export type ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ChangelogEntryCreateWithoutProductInput, ChangelogEntryUncheckedCreateWithoutProductInput> | ChangelogEntryCreateWithoutProductInput[] | ChangelogEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChangelogEntryCreateOrConnectWithoutProductInput | ChangelogEntryCreateOrConnectWithoutProductInput[]
    upsert?: ChangelogEntryUpsertWithWhereUniqueWithoutProductInput | ChangelogEntryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ChangelogEntryCreateManyProductInputEnvelope
    set?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    disconnect?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    delete?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    connect?: ChangelogEntryWhereUniqueInput | ChangelogEntryWhereUniqueInput[]
    update?: ChangelogEntryUpdateWithWhereUniqueWithoutProductInput | ChangelogEntryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ChangelogEntryUpdateManyWithWhereWithoutProductInput | ChangelogEntryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ChangelogEntryScalarWhereInput | ChangelogEntryScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FeedbackCreateWithoutProductInput, FeedbackUncheckedCreateWithoutProductInput> | FeedbackCreateWithoutProductInput[] | FeedbackUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutProductInput | FeedbackCreateOrConnectWithoutProductInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutProductInput | FeedbackUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FeedbackCreateManyProductInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutProductInput | FeedbackUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutProductInput | FeedbackUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserProductInteractionCreateWithoutProductInput, UserProductInteractionUncheckedCreateWithoutProductInput> | UserProductInteractionCreateWithoutProductInput[] | UserProductInteractionUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductInteractionCreateOrConnectWithoutProductInput | UserProductInteractionCreateOrConnectWithoutProductInput[]
    upsert?: UserProductInteractionUpsertWithWhereUniqueWithoutProductInput | UserProductInteractionUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserProductInteractionCreateManyProductInputEnvelope
    set?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    disconnect?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    delete?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    connect?: UserProductInteractionWhereUniqueInput | UserProductInteractionWhereUniqueInput[]
    update?: UserProductInteractionUpdateWithWhereUniqueWithoutProductInput | UserProductInteractionUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserProductInteractionUpdateManyWithWhereWithoutProductInput | UserProductInteractionUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserProductInteractionScalarWhereInput | UserProductInteractionScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutRevenueTrackingInput = {
    create?: XOR<ProductCreateWithoutRevenueTrackingInput, ProductUncheckedCreateWithoutRevenueTrackingInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRevenueTrackingInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutRevenueTrackingNestedInput = {
    create?: XOR<ProductCreateWithoutRevenueTrackingInput, ProductUncheckedCreateWithoutRevenueTrackingInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRevenueTrackingInput
    upsert?: ProductUpsertWithoutRevenueTrackingInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRevenueTrackingInput, ProductUpdateWithoutRevenueTrackingInput>, ProductUncheckedUpdateWithoutRevenueTrackingInput>
  }

  export type ProductCreateNestedOneWithoutUserGrowthInput = {
    create?: XOR<ProductCreateWithoutUserGrowthInput, ProductUncheckedCreateWithoutUserGrowthInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserGrowthInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutUserGrowthNestedInput = {
    create?: XOR<ProductCreateWithoutUserGrowthInput, ProductUncheckedCreateWithoutUserGrowthInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserGrowthInput
    upsert?: ProductUpsertWithoutUserGrowthInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserGrowthInput, ProductUpdateWithoutUserGrowthInput>, ProductUncheckedUpdateWithoutUserGrowthInput>
  }

  export type ProductCreateNestedOneWithoutMetricsInput = {
    create?: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMetricsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumMetricTypeFieldUpdateOperationsInput = {
    set?: $Enums.MetricType
  }

  export type ProductUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMetricsInput
    upsert?: ProductUpsertWithoutMetricsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMetricsInput, ProductUpdateWithoutMetricsInput>, ProductUncheckedUpdateWithoutMetricsInput>
  }

  export type ProductCreateNestedOneWithoutRoadmapItemsInput = {
    create?: XOR<ProductCreateWithoutRoadmapItemsInput, ProductUncheckedCreateWithoutRoadmapItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRoadmapItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumRoadmapCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RoadmapCategory
  }

  export type EnumRoadmapPriorityFieldUpdateOperationsInput = {
    set?: $Enums.RoadmapPriority
  }

  export type EnumRoadmapStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoadmapStatus
  }

  export type ProductUpdateOneRequiredWithoutRoadmapItemsNestedInput = {
    create?: XOR<ProductCreateWithoutRoadmapItemsInput, ProductUncheckedCreateWithoutRoadmapItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRoadmapItemsInput
    upsert?: ProductUpsertWithoutRoadmapItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRoadmapItemsInput, ProductUpdateWithoutRoadmapItemsInput>, ProductUncheckedUpdateWithoutRoadmapItemsInput>
  }

  export type ProductCreateNestedOneWithoutChangelogEntriesInput = {
    create?: XOR<ProductCreateWithoutChangelogEntriesInput, ProductUncheckedCreateWithoutChangelogEntriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChangelogEntriesInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumChangeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChangeType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateOneRequiredWithoutChangelogEntriesNestedInput = {
    create?: XOR<ProductCreateWithoutChangelogEntriesInput, ProductUncheckedCreateWithoutChangelogEntriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChangelogEntriesInput
    upsert?: ProductUpsertWithoutChangelogEntriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutChangelogEntriesInput, ProductUpdateWithoutChangelogEntriesInput>, ProductUncheckedUpdateWithoutChangelogEntriesInput>
  }

  export type ProductCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<ProductCreateWithoutFeedbackInput, ProductUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFeedbackInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumFeedbackTypeFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackType
  }

  export type EnumFeedbackSeverityFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackSeverity
  }

  export type EnumFeedbackStatusFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackStatus
  }

  export type ProductUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<ProductCreateWithoutFeedbackInput, ProductUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ProductCreateOrConnectWithoutFeedbackInput
    upsert?: ProductUpsertWithoutFeedbackInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutFeedbackInput, ProductUpdateWithoutFeedbackInput>, ProductUncheckedUpdateWithoutFeedbackInput>
  }

  export type AnnouncementCreatetargetProductsInput = {
    set: string[]
  }

  export type AnnouncementCreatetargetUsersInput = {
    set: string[]
  }

  export type EnumAnnouncementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AnnouncementType
  }

  export type AnnouncementUpdatetargetProductsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AnnouncementUpdatetargetUsersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PortfolioItemCreateimagesInput = {
    set: string[]
  }

  export type PortfolioItemCreatetechStackInput = {
    set: string[]
  }

  export type PortfolioItemUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PortfolioItemUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<ProductCreateWithoutInteractionsInput, ProductUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInteractionsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumInteractionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InteractionType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneWithoutInteractionsNestedInput = {
    create?: XOR<ProductCreateWithoutInteractionsInput, ProductUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInteractionsInput
    upsert?: ProductUpsertWithoutInteractionsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInteractionsInput, ProductUpdateWithoutInteractionsInput>, ProductUncheckedUpdateWithoutInteractionsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProductCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryFilter<$PrismaModel> | $Enums.ProductCategory
  }

  export type NestedEnumProductStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusFilter<$PrismaModel> | $Enums.ProductStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCategory | EnumProductCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCategory[] | ListEnumProductCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumProductCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ProductCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductCategoryFilter<$PrismaModel>
    _max?: NestedEnumProductCategoryFilter<$PrismaModel>
  }

  export type NestedEnumProductStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductStatus | EnumProductStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductStatus[] | ListEnumProductStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProductStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProductStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductStatusFilter<$PrismaModel>
    _max?: NestedEnumProductStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMetricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeFilter<$PrismaModel> | $Enums.MetricType
  }

  export type NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetricType | EnumMetricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetricType[] | ListEnumMetricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMetricTypeWithAggregatesFilter<$PrismaModel> | $Enums.MetricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetricTypeFilter<$PrismaModel>
    _max?: NestedEnumMetricTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoadmapCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapCategory | EnumRoadmapCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapCategoryFilter<$PrismaModel> | $Enums.RoadmapCategory
  }

  export type NestedEnumRoadmapPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapPriority | EnumRoadmapPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapPriorityFilter<$PrismaModel> | $Enums.RoadmapPriority
  }

  export type NestedEnumRoadmapStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapStatus | EnumRoadmapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapStatusFilter<$PrismaModel> | $Enums.RoadmapStatus
  }

  export type NestedEnumRoadmapCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapCategory | EnumRoadmapCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapCategory[] | ListEnumRoadmapCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapCategoryWithAggregatesFilter<$PrismaModel> | $Enums.RoadmapCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoadmapCategoryFilter<$PrismaModel>
    _max?: NestedEnumRoadmapCategoryFilter<$PrismaModel>
  }

  export type NestedEnumRoadmapPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapPriority | EnumRoadmapPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapPriority[] | ListEnumRoadmapPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RoadmapPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoadmapPriorityFilter<$PrismaModel>
    _max?: NestedEnumRoadmapPriorityFilter<$PrismaModel>
  }

  export type NestedEnumRoadmapStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoadmapStatus | EnumRoadmapStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoadmapStatus[] | ListEnumRoadmapStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoadmapStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoadmapStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoadmapStatusFilter<$PrismaModel>
    _max?: NestedEnumRoadmapStatusFilter<$PrismaModel>
  }

  export type NestedEnumChangeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChangeType | EnumChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChangeTypeFilter<$PrismaModel> | $Enums.ChangeType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumChangeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChangeType | EnumChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChangeType[] | ListEnumChangeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumChangeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChangeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChangeTypeFilter<$PrismaModel>
    _max?: NestedEnumChangeTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumFeedbackTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeFilter<$PrismaModel> | $Enums.FeedbackType
  }

  export type NestedEnumFeedbackSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityFilter<$PrismaModel> | $Enums.FeedbackSeverity
  }

  export type NestedEnumFeedbackStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackStatusFilter<$PrismaModel> | $Enums.FeedbackStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackType | EnumFeedbackTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackType[] | ListEnumFeedbackTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackTypeFilter<$PrismaModel>
    _max?: NestedEnumFeedbackTypeFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackSeverity | EnumFeedbackSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackSeverity[] | ListEnumFeedbackSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackSeverityWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
    _max?: NestedEnumFeedbackSeverityFilter<$PrismaModel>
  }

  export type NestedEnumFeedbackStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackStatus | EnumFeedbackStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackStatus[] | ListEnumFeedbackStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackStatusWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackStatusFilter<$PrismaModel>
    _max?: NestedEnumFeedbackStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnnouncementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeFilter<$PrismaModel> | $Enums.AnnouncementType
  }

  export type NestedEnumAnnouncementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementType | EnumAnnouncementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementType[] | ListEnumAnnouncementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementTypeFilter<$PrismaModel>
  }

  export type NestedEnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RevenueTrackingCreateWithoutProductInput = {
    id?: string
    date: Date | string
    revenue?: Decimal | DecimalJsLike | number | string
    newUsers?: number
    activeUsers?: number
    churnedUsers?: number
    mrr?: Decimal | DecimalJsLike | number | string
    churnRate?: Decimal | DecimalJsLike | number | string
    trials?: number
    conversions?: number
    conversionRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RevenueTrackingUncheckedCreateWithoutProductInput = {
    id?: string
    date: Date | string
    revenue?: Decimal | DecimalJsLike | number | string
    newUsers?: number
    activeUsers?: number
    churnedUsers?: number
    mrr?: Decimal | DecimalJsLike | number | string
    churnRate?: Decimal | DecimalJsLike | number | string
    trials?: number
    conversions?: number
    conversionRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type RevenueTrackingCreateOrConnectWithoutProductInput = {
    where: RevenueTrackingWhereUniqueInput
    create: XOR<RevenueTrackingCreateWithoutProductInput, RevenueTrackingUncheckedCreateWithoutProductInput>
  }

  export type RevenueTrackingCreateManyProductInputEnvelope = {
    data: RevenueTrackingCreateManyProductInput | RevenueTrackingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserGrowthCreateWithoutProductInput = {
    id?: string
    date: Date | string
    totalUsers?: number
    newUsers?: number
    activeUsers?: number
    sessions?: number
    avgSessionDuration?: number
    dau?: number
    wau?: number
    mau?: number
    createdAt?: Date | string
  }

  export type UserGrowthUncheckedCreateWithoutProductInput = {
    id?: string
    date: Date | string
    totalUsers?: number
    newUsers?: number
    activeUsers?: number
    sessions?: number
    avgSessionDuration?: number
    dau?: number
    wau?: number
    mau?: number
    createdAt?: Date | string
  }

  export type UserGrowthCreateOrConnectWithoutProductInput = {
    where: UserGrowthWhereUniqueInput
    create: XOR<UserGrowthCreateWithoutProductInput, UserGrowthUncheckedCreateWithoutProductInput>
  }

  export type UserGrowthCreateManyProductInputEnvelope = {
    data: UserGrowthCreateManyProductInput | UserGrowthCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductMetricCreateWithoutProductInput = {
    id?: string
    metricType: $Enums.MetricType
    value: Decimal | DecimalJsLike | number | string
    date: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductMetricUncheckedCreateWithoutProductInput = {
    id?: string
    metricType: $Enums.MetricType
    value: Decimal | DecimalJsLike | number | string
    date: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProductMetricCreateOrConnectWithoutProductInput = {
    where: ProductMetricWhereUniqueInput
    create: XOR<ProductMetricCreateWithoutProductInput, ProductMetricUncheckedCreateWithoutProductInput>
  }

  export type ProductMetricCreateManyProductInputEnvelope = {
    data: ProductMetricCreateManyProductInput | ProductMetricCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RoadmapItemCreateWithoutProductInput = {
    id?: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status?: $Enums.RoadmapStatus
    votes?: number
    quarter?: string | null
    estimatedDate?: Date | string | null
    completedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemUncheckedCreateWithoutProductInput = {
    id?: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status?: $Enums.RoadmapStatus
    votes?: number
    quarter?: string | null
    estimatedDate?: Date | string | null
    completedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadmapItemCreateOrConnectWithoutProductInput = {
    where: RoadmapItemWhereUniqueInput
    create: XOR<RoadmapItemCreateWithoutProductInput, RoadmapItemUncheckedCreateWithoutProductInput>
  }

  export type RoadmapItemCreateManyProductInputEnvelope = {
    data: RoadmapItemCreateManyProductInput | RoadmapItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ChangelogEntryCreateWithoutProductInput = {
    id?: string
    version: string
    title: string
    description: string
    changes: JsonNullValueInput | InputJsonValue
    type: $Enums.ChangeType
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChangelogEntryUncheckedCreateWithoutProductInput = {
    id?: string
    version: string
    title: string
    description: string
    changes: JsonNullValueInput | InputJsonValue
    type: $Enums.ChangeType
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChangelogEntryCreateOrConnectWithoutProductInput = {
    where: ChangelogEntryWhereUniqueInput
    create: XOR<ChangelogEntryCreateWithoutProductInput, ChangelogEntryUncheckedCreateWithoutProductInput>
  }

  export type ChangelogEntryCreateManyProductInputEnvelope = {
    data: ChangelogEntryCreateManyProductInput | ChangelogEntryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutProductInput = {
    id?: string
    userId?: string | null
    type: $Enums.FeedbackType
    title?: string | null
    description: string
    email?: string | null
    severity?: $Enums.FeedbackSeverity
    status?: $Enums.FeedbackStatus
    upvotes?: number
    response?: string | null
    respondedBy?: string | null
    respondedAt?: Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackUncheckedCreateWithoutProductInput = {
    id?: string
    userId?: string | null
    type: $Enums.FeedbackType
    title?: string | null
    description: string
    email?: string | null
    severity?: $Enums.FeedbackSeverity
    status?: $Enums.FeedbackStatus
    upvotes?: number
    response?: string | null
    respondedBy?: string | null
    respondedAt?: Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutProductInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutProductInput, FeedbackUncheckedCreateWithoutProductInput>
  }

  export type FeedbackCreateManyProductInputEnvelope = {
    data: FeedbackCreateManyProductInput | FeedbackCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserProductInteractionCreateWithoutProductInput = {
    id?: string
    userId: string
    productSlug: string
    type: $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProductInteractionUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    productSlug: string
    type: $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProductInteractionCreateOrConnectWithoutProductInput = {
    where: UserProductInteractionWhereUniqueInput
    create: XOR<UserProductInteractionCreateWithoutProductInput, UserProductInteractionUncheckedCreateWithoutProductInput>
  }

  export type UserProductInteractionCreateManyProductInputEnvelope = {
    data: UserProductInteractionCreateManyProductInput | UserProductInteractionCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type RevenueTrackingUpsertWithWhereUniqueWithoutProductInput = {
    where: RevenueTrackingWhereUniqueInput
    update: XOR<RevenueTrackingUpdateWithoutProductInput, RevenueTrackingUncheckedUpdateWithoutProductInput>
    create: XOR<RevenueTrackingCreateWithoutProductInput, RevenueTrackingUncheckedCreateWithoutProductInput>
  }

  export type RevenueTrackingUpdateWithWhereUniqueWithoutProductInput = {
    where: RevenueTrackingWhereUniqueInput
    data: XOR<RevenueTrackingUpdateWithoutProductInput, RevenueTrackingUncheckedUpdateWithoutProductInput>
  }

  export type RevenueTrackingUpdateManyWithWhereWithoutProductInput = {
    where: RevenueTrackingScalarWhereInput
    data: XOR<RevenueTrackingUpdateManyMutationInput, RevenueTrackingUncheckedUpdateManyWithoutProductInput>
  }

  export type RevenueTrackingScalarWhereInput = {
    AND?: RevenueTrackingScalarWhereInput | RevenueTrackingScalarWhereInput[]
    OR?: RevenueTrackingScalarWhereInput[]
    NOT?: RevenueTrackingScalarWhereInput | RevenueTrackingScalarWhereInput[]
    id?: UuidFilter<"RevenueTracking"> | string
    productId?: UuidFilter<"RevenueTracking"> | string
    date?: DateTimeFilter<"RevenueTracking"> | Date | string
    revenue?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    newUsers?: IntFilter<"RevenueTracking"> | number
    activeUsers?: IntFilter<"RevenueTracking"> | number
    churnedUsers?: IntFilter<"RevenueTracking"> | number
    mrr?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    trials?: IntFilter<"RevenueTracking"> | number
    conversions?: IntFilter<"RevenueTracking"> | number
    conversionRate?: DecimalFilter<"RevenueTracking"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RevenueTracking"> | Date | string
  }

  export type UserGrowthUpsertWithWhereUniqueWithoutProductInput = {
    where: UserGrowthWhereUniqueInput
    update: XOR<UserGrowthUpdateWithoutProductInput, UserGrowthUncheckedUpdateWithoutProductInput>
    create: XOR<UserGrowthCreateWithoutProductInput, UserGrowthUncheckedCreateWithoutProductInput>
  }

  export type UserGrowthUpdateWithWhereUniqueWithoutProductInput = {
    where: UserGrowthWhereUniqueInput
    data: XOR<UserGrowthUpdateWithoutProductInput, UserGrowthUncheckedUpdateWithoutProductInput>
  }

  export type UserGrowthUpdateManyWithWhereWithoutProductInput = {
    where: UserGrowthScalarWhereInput
    data: XOR<UserGrowthUpdateManyMutationInput, UserGrowthUncheckedUpdateManyWithoutProductInput>
  }

  export type UserGrowthScalarWhereInput = {
    AND?: UserGrowthScalarWhereInput | UserGrowthScalarWhereInput[]
    OR?: UserGrowthScalarWhereInput[]
    NOT?: UserGrowthScalarWhereInput | UserGrowthScalarWhereInput[]
    id?: UuidFilter<"UserGrowth"> | string
    productId?: UuidFilter<"UserGrowth"> | string
    date?: DateTimeFilter<"UserGrowth"> | Date | string
    totalUsers?: IntFilter<"UserGrowth"> | number
    newUsers?: IntFilter<"UserGrowth"> | number
    activeUsers?: IntFilter<"UserGrowth"> | number
    sessions?: IntFilter<"UserGrowth"> | number
    avgSessionDuration?: IntFilter<"UserGrowth"> | number
    dau?: IntFilter<"UserGrowth"> | number
    wau?: IntFilter<"UserGrowth"> | number
    mau?: IntFilter<"UserGrowth"> | number
    createdAt?: DateTimeFilter<"UserGrowth"> | Date | string
  }

  export type ProductMetricUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductMetricWhereUniqueInput
    update: XOR<ProductMetricUpdateWithoutProductInput, ProductMetricUncheckedUpdateWithoutProductInput>
    create: XOR<ProductMetricCreateWithoutProductInput, ProductMetricUncheckedCreateWithoutProductInput>
  }

  export type ProductMetricUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductMetricWhereUniqueInput
    data: XOR<ProductMetricUpdateWithoutProductInput, ProductMetricUncheckedUpdateWithoutProductInput>
  }

  export type ProductMetricUpdateManyWithWhereWithoutProductInput = {
    where: ProductMetricScalarWhereInput
    data: XOR<ProductMetricUpdateManyMutationInput, ProductMetricUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductMetricScalarWhereInput = {
    AND?: ProductMetricScalarWhereInput | ProductMetricScalarWhereInput[]
    OR?: ProductMetricScalarWhereInput[]
    NOT?: ProductMetricScalarWhereInput | ProductMetricScalarWhereInput[]
    id?: UuidFilter<"ProductMetric"> | string
    productId?: UuidFilter<"ProductMetric"> | string
    metricType?: EnumMetricTypeFilter<"ProductMetric"> | $Enums.MetricType
    value?: DecimalFilter<"ProductMetric"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"ProductMetric"> | Date | string
    metadata?: JsonNullableFilter<"ProductMetric">
    createdAt?: DateTimeFilter<"ProductMetric"> | Date | string
  }

  export type RoadmapItemUpsertWithWhereUniqueWithoutProductInput = {
    where: RoadmapItemWhereUniqueInput
    update: XOR<RoadmapItemUpdateWithoutProductInput, RoadmapItemUncheckedUpdateWithoutProductInput>
    create: XOR<RoadmapItemCreateWithoutProductInput, RoadmapItemUncheckedCreateWithoutProductInput>
  }

  export type RoadmapItemUpdateWithWhereUniqueWithoutProductInput = {
    where: RoadmapItemWhereUniqueInput
    data: XOR<RoadmapItemUpdateWithoutProductInput, RoadmapItemUncheckedUpdateWithoutProductInput>
  }

  export type RoadmapItemUpdateManyWithWhereWithoutProductInput = {
    where: RoadmapItemScalarWhereInput
    data: XOR<RoadmapItemUpdateManyMutationInput, RoadmapItemUncheckedUpdateManyWithoutProductInput>
  }

  export type RoadmapItemScalarWhereInput = {
    AND?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
    OR?: RoadmapItemScalarWhereInput[]
    NOT?: RoadmapItemScalarWhereInput | RoadmapItemScalarWhereInput[]
    id?: UuidFilter<"RoadmapItem"> | string
    productId?: UuidFilter<"RoadmapItem"> | string
    title?: StringFilter<"RoadmapItem"> | string
    description?: StringFilter<"RoadmapItem"> | string
    category?: EnumRoadmapCategoryFilter<"RoadmapItem"> | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFilter<"RoadmapItem"> | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFilter<"RoadmapItem"> | $Enums.RoadmapStatus
    votes?: IntFilter<"RoadmapItem"> | number
    quarter?: StringNullableFilter<"RoadmapItem"> | string | null
    estimatedDate?: DateTimeNullableFilter<"RoadmapItem"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"RoadmapItem"> | Date | string | null
    metadata?: JsonFilter<"RoadmapItem">
    createdAt?: DateTimeFilter<"RoadmapItem"> | Date | string
    updatedAt?: DateTimeFilter<"RoadmapItem"> | Date | string
  }

  export type ChangelogEntryUpsertWithWhereUniqueWithoutProductInput = {
    where: ChangelogEntryWhereUniqueInput
    update: XOR<ChangelogEntryUpdateWithoutProductInput, ChangelogEntryUncheckedUpdateWithoutProductInput>
    create: XOR<ChangelogEntryCreateWithoutProductInput, ChangelogEntryUncheckedCreateWithoutProductInput>
  }

  export type ChangelogEntryUpdateWithWhereUniqueWithoutProductInput = {
    where: ChangelogEntryWhereUniqueInput
    data: XOR<ChangelogEntryUpdateWithoutProductInput, ChangelogEntryUncheckedUpdateWithoutProductInput>
  }

  export type ChangelogEntryUpdateManyWithWhereWithoutProductInput = {
    where: ChangelogEntryScalarWhereInput
    data: XOR<ChangelogEntryUpdateManyMutationInput, ChangelogEntryUncheckedUpdateManyWithoutProductInput>
  }

  export type ChangelogEntryScalarWhereInput = {
    AND?: ChangelogEntryScalarWhereInput | ChangelogEntryScalarWhereInput[]
    OR?: ChangelogEntryScalarWhereInput[]
    NOT?: ChangelogEntryScalarWhereInput | ChangelogEntryScalarWhereInput[]
    id?: UuidFilter<"ChangelogEntry"> | string
    productId?: UuidFilter<"ChangelogEntry"> | string
    version?: StringFilter<"ChangelogEntry"> | string
    title?: StringFilter<"ChangelogEntry"> | string
    description?: StringFilter<"ChangelogEntry"> | string
    changes?: JsonFilter<"ChangelogEntry">
    type?: EnumChangeTypeFilter<"ChangelogEntry"> | $Enums.ChangeType
    isPublished?: BoolFilter<"ChangelogEntry"> | boolean
    publishedAt?: DateTimeNullableFilter<"ChangelogEntry"> | Date | string | null
    createdAt?: DateTimeFilter<"ChangelogEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ChangelogEntry"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutProductInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutProductInput, FeedbackUncheckedUpdateWithoutProductInput>
    create: XOR<FeedbackCreateWithoutProductInput, FeedbackUncheckedCreateWithoutProductInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutProductInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutProductInput, FeedbackUncheckedUpdateWithoutProductInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutProductInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutProductInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: UuidFilter<"Feedback"> | string
    productId?: UuidFilter<"Feedback"> | string
    userId?: UuidNullableFilter<"Feedback"> | string | null
    type?: EnumFeedbackTypeFilter<"Feedback"> | $Enums.FeedbackType
    title?: StringNullableFilter<"Feedback"> | string | null
    description?: StringFilter<"Feedback"> | string
    email?: StringNullableFilter<"Feedback"> | string | null
    severity?: EnumFeedbackSeverityFilter<"Feedback"> | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFilter<"Feedback"> | $Enums.FeedbackStatus
    upvotes?: IntFilter<"Feedback"> | number
    response?: StringNullableFilter<"Feedback"> | string | null
    respondedBy?: UuidNullableFilter<"Feedback"> | string | null
    respondedAt?: DateTimeNullableFilter<"Feedback"> | Date | string | null
    browserInfo?: JsonNullableFilter<"Feedback">
    metadata?: JsonFilter<"Feedback">
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    updatedAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type UserProductInteractionUpsertWithWhereUniqueWithoutProductInput = {
    where: UserProductInteractionWhereUniqueInput
    update: XOR<UserProductInteractionUpdateWithoutProductInput, UserProductInteractionUncheckedUpdateWithoutProductInput>
    create: XOR<UserProductInteractionCreateWithoutProductInput, UserProductInteractionUncheckedCreateWithoutProductInput>
  }

  export type UserProductInteractionUpdateWithWhereUniqueWithoutProductInput = {
    where: UserProductInteractionWhereUniqueInput
    data: XOR<UserProductInteractionUpdateWithoutProductInput, UserProductInteractionUncheckedUpdateWithoutProductInput>
  }

  export type UserProductInteractionUpdateManyWithWhereWithoutProductInput = {
    where: UserProductInteractionScalarWhereInput
    data: XOR<UserProductInteractionUpdateManyMutationInput, UserProductInteractionUncheckedUpdateManyWithoutProductInput>
  }

  export type UserProductInteractionScalarWhereInput = {
    AND?: UserProductInteractionScalarWhereInput | UserProductInteractionScalarWhereInput[]
    OR?: UserProductInteractionScalarWhereInput[]
    NOT?: UserProductInteractionScalarWhereInput | UserProductInteractionScalarWhereInput[]
    id?: UuidFilter<"UserProductInteraction"> | string
    userId?: UuidFilter<"UserProductInteraction"> | string
    productId?: UuidFilter<"UserProductInteraction"> | string
    productSlug?: StringFilter<"UserProductInteraction"> | string
    type?: EnumInteractionTypeFilter<"UserProductInteraction"> | $Enums.InteractionType
    data?: JsonNullableFilter<"UserProductInteraction">
    duration?: IntNullableFilter<"UserProductInteraction"> | number | null
    createdAt?: DateTimeFilter<"UserProductInteraction"> | Date | string
    updatedAt?: DateTimeFilter<"UserProductInteraction"> | Date | string
  }

  export type ProductCreateWithoutRevenueTrackingInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRevenueTrackingInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRevenueTrackingInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRevenueTrackingInput, ProductUncheckedCreateWithoutRevenueTrackingInput>
  }

  export type ProductUpsertWithoutRevenueTrackingInput = {
    update: XOR<ProductUpdateWithoutRevenueTrackingInput, ProductUncheckedUpdateWithoutRevenueTrackingInput>
    create: XOR<ProductCreateWithoutRevenueTrackingInput, ProductUncheckedCreateWithoutRevenueTrackingInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRevenueTrackingInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRevenueTrackingInput, ProductUncheckedUpdateWithoutRevenueTrackingInput>
  }

  export type ProductUpdateWithoutRevenueTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRevenueTrackingInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutUserGrowthInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserGrowthInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserGrowthInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserGrowthInput, ProductUncheckedCreateWithoutUserGrowthInput>
  }

  export type ProductUpsertWithoutUserGrowthInput = {
    update: XOR<ProductUpdateWithoutUserGrowthInput, ProductUncheckedUpdateWithoutUserGrowthInput>
    create: XOR<ProductCreateWithoutUserGrowthInput, ProductUncheckedCreateWithoutUserGrowthInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserGrowthInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserGrowthInput, ProductUncheckedUpdateWithoutUserGrowthInput>
  }

  export type ProductUpdateWithoutUserGrowthInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserGrowthInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutMetricsInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMetricsInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMetricsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
  }

  export type ProductUpsertWithoutMetricsInput = {
    update: XOR<ProductUpdateWithoutMetricsInput, ProductUncheckedUpdateWithoutMetricsInput>
    create: XOR<ProductCreateWithoutMetricsInput, ProductUncheckedCreateWithoutMetricsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMetricsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMetricsInput, ProductUncheckedUpdateWithoutMetricsInput>
  }

  export type ProductUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutRoadmapItemsInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRoadmapItemsInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRoadmapItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRoadmapItemsInput, ProductUncheckedCreateWithoutRoadmapItemsInput>
  }

  export type ProductUpsertWithoutRoadmapItemsInput = {
    update: XOR<ProductUpdateWithoutRoadmapItemsInput, ProductUncheckedUpdateWithoutRoadmapItemsInput>
    create: XOR<ProductCreateWithoutRoadmapItemsInput, ProductUncheckedCreateWithoutRoadmapItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRoadmapItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRoadmapItemsInput, ProductUncheckedUpdateWithoutRoadmapItemsInput>
  }

  export type ProductUpdateWithoutRoadmapItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRoadmapItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutChangelogEntriesInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutChangelogEntriesInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutChangelogEntriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutChangelogEntriesInput, ProductUncheckedCreateWithoutChangelogEntriesInput>
  }

  export type ProductUpsertWithoutChangelogEntriesInput = {
    update: XOR<ProductUpdateWithoutChangelogEntriesInput, ProductUncheckedUpdateWithoutChangelogEntriesInput>
    create: XOR<ProductCreateWithoutChangelogEntriesInput, ProductUncheckedCreateWithoutChangelogEntriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutChangelogEntriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutChangelogEntriesInput, ProductUncheckedUpdateWithoutChangelogEntriesInput>
  }

  export type ProductUpdateWithoutChangelogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutChangelogEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutFeedbackInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFeedbackInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    interactions?: UserProductInteractionUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFeedbackInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFeedbackInput, ProductUncheckedCreateWithoutFeedbackInput>
  }

  export type ProductUpsertWithoutFeedbackInput = {
    update: XOR<ProductUpdateWithoutFeedbackInput, ProductUncheckedUpdateWithoutFeedbackInput>
    create: XOR<ProductCreateWithoutFeedbackInput, ProductUncheckedCreateWithoutFeedbackInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutFeedbackInput, ProductUncheckedUpdateWithoutFeedbackInput>
  }

  export type ProductUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    interactions?: UserProductInteractionUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutInteractionsInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthCreateNestedManyWithoutProductInput
    metrics?: ProductMetricCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryCreateNestedManyWithoutProductInput
    feedback?: FeedbackCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInteractionsInput = {
    id?: string
    productId: string
    name: string
    slug: string
    description?: string | null
    tagline?: string | null
    category: $Enums.ProductCategory
    status: $Enums.ProductStatus
    version?: string | null
    monthlyRevenue?: Decimal | DecimalJsLike | number | string
    totalUsers?: number
    activeUsers?: number
    priority?: number
    techStack?: ProductCreatetechStackInput | string[]
    tags?: ProductCreatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: string | null
    coverUrl?: string | null
    screenshots?: ProductCreatescreenshotsInput | string[]
    launchedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    revenueTracking?: RevenueTrackingUncheckedCreateNestedManyWithoutProductInput
    userGrowth?: UserGrowthUncheckedCreateNestedManyWithoutProductInput
    metrics?: ProductMetricUncheckedCreateNestedManyWithoutProductInput
    roadmapItems?: RoadmapItemUncheckedCreateNestedManyWithoutProductInput
    changelogEntries?: ChangelogEntryUncheckedCreateNestedManyWithoutProductInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInteractionsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInteractionsInput, ProductUncheckedCreateWithoutInteractionsInput>
  }

  export type ProductUpsertWithoutInteractionsInput = {
    update: XOR<ProductUpdateWithoutInteractionsInput, ProductUncheckedUpdateWithoutInteractionsInput>
    create: XOR<ProductCreateWithoutInteractionsInput, ProductUncheckedCreateWithoutInteractionsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInteractionsInput, ProductUncheckedUpdateWithoutInteractionsInput>
  }

  export type ProductUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tagline?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProductCategoryFieldUpdateOperationsInput | $Enums.ProductCategory
    status?: EnumProductStatusFieldUpdateOperationsInput | $Enums.ProductStatus
    version?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyRevenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    techStack?: ProductUpdatetechStackInput | string[]
    tags?: ProductUpdatetagsInput | string[]
    features?: NullableJsonNullValueInput | InputJsonValue
    challenges?: NullableJsonNullValueInput | InputJsonValue
    opportunities?: NullableJsonNullValueInput | InputJsonValue
    links?: NullableJsonNullValueInput | InputJsonValue
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    screenshots?: ProductUpdatescreenshotsInput | string[]
    launchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revenueTracking?: RevenueTrackingUncheckedUpdateManyWithoutProductNestedInput
    userGrowth?: UserGrowthUncheckedUpdateManyWithoutProductNestedInput
    metrics?: ProductMetricUncheckedUpdateManyWithoutProductNestedInput
    roadmapItems?: RoadmapItemUncheckedUpdateManyWithoutProductNestedInput
    changelogEntries?: ChangelogEntryUncheckedUpdateManyWithoutProductNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutProductNestedInput
  }

  export type RevenueTrackingCreateManyProductInput = {
    id?: string
    date: Date | string
    revenue?: Decimal | DecimalJsLike | number | string
    newUsers?: number
    activeUsers?: number
    churnedUsers?: number
    mrr?: Decimal | DecimalJsLike | number | string
    churnRate?: Decimal | DecimalJsLike | number | string
    trials?: number
    conversions?: number
    conversionRate?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type UserGrowthCreateManyProductInput = {
    id?: string
    date: Date | string
    totalUsers?: number
    newUsers?: number
    activeUsers?: number
    sessions?: number
    avgSessionDuration?: number
    dau?: number
    wau?: number
    mau?: number
    createdAt?: Date | string
  }

  export type ProductMetricCreateManyProductInput = {
    id?: string
    metricType: $Enums.MetricType
    value: Decimal | DecimalJsLike | number | string
    date: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type RoadmapItemCreateManyProductInput = {
    id?: string
    title: string
    description: string
    category: $Enums.RoadmapCategory
    priority: $Enums.RoadmapPriority
    status?: $Enums.RoadmapStatus
    votes?: number
    quarter?: string | null
    estimatedDate?: Date | string | null
    completedAt?: Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChangelogEntryCreateManyProductInput = {
    id?: string
    version: string
    title: string
    description: string
    changes: JsonNullValueInput | InputJsonValue
    type: $Enums.ChangeType
    isPublished?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateManyProductInput = {
    id?: string
    userId?: string | null
    type: $Enums.FeedbackType
    title?: string | null
    description: string
    email?: string | null
    severity?: $Enums.FeedbackSeverity
    status?: $Enums.FeedbackStatus
    upvotes?: number
    response?: string | null
    respondedBy?: string | null
    respondedAt?: Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProductInteractionCreateManyProductInput = {
    id?: string
    userId: string
    productSlug: string
    type: $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevenueTrackingUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueTrackingUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevenueTrackingUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    revenue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    churnedUsers?: IntFieldUpdateOperationsInput | number
    mrr?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    churnRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trials?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    conversionRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrowthUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrowthUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrowthUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalUsers?: IntFieldUpdateOperationsInput | number
    newUsers?: IntFieldUpdateOperationsInput | number
    activeUsers?: IntFieldUpdateOperationsInput | number
    sessions?: IntFieldUpdateOperationsInput | number
    avgSessionDuration?: IntFieldUpdateOperationsInput | number
    dau?: IntFieldUpdateOperationsInput | number
    wau?: IntFieldUpdateOperationsInput | number
    mau?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetricUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    metricType?: EnumMetricTypeFieldUpdateOperationsInput | $Enums.MetricType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadmapItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumRoadmapCategoryFieldUpdateOperationsInput | $Enums.RoadmapCategory
    priority?: EnumRoadmapPriorityFieldUpdateOperationsInput | $Enums.RoadmapPriority
    status?: EnumRoadmapStatusFieldUpdateOperationsInput | $Enums.RoadmapStatus
    votes?: IntFieldUpdateOperationsInput | number
    quarter?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangelogEntryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangelogEntryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangelogEntryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    changes?: JsonNullValueInput | InputJsonValue
    type?: EnumChangeTypeFieldUpdateOperationsInput | $Enums.ChangeType
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFeedbackTypeFieldUpdateOperationsInput | $Enums.FeedbackType
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: EnumFeedbackSeverityFieldUpdateOperationsInput | $Enums.FeedbackSeverity
    status?: EnumFeedbackStatusFieldUpdateOperationsInput | $Enums.FeedbackStatus
    upvotes?: IntFieldUpdateOperationsInput | number
    response?: NullableStringFieldUpdateOperationsInput | string | null
    respondedBy?: NullableStringFieldUpdateOperationsInput | string | null
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    browserInfo?: NullableJsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductInteractionUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductInteractionUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductInteractionUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productSlug?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    data?: NullableJsonNullValueInput | InputJsonValue
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}