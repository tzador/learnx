# TypeScript Advanced

- [1. Introduction to TypeScript Advanced](#1-introduction-to-typescript-advanced)
- [2. Type Inference in TypeScript](#2-type-inference-in-typescript)
- [3. Union and Intersection Types](#3-union-and-intersection-types)
- [4. Type Guards and Differentiating Types](#4-type-guards-and-differentiating-types)
- [5. Decorators in TypeScript](#5-decorators-in-typescript)
- [6. Generics in TypeScript](#6-generics-in-typescript)
- [7. Mapped Types and Index Signatures](#7-mapped-types-and-index-signatures)
- [8. Advanced Object Types](#8-advanced-object-types)
- [9. Conditional Types](#9-conditional-types)
- [10. Template Literal Types](#10-template-literal-types)
- [11. TypeScript Utility Types](#11-typescript-utility-types)
- [12. Type Manipulation and Transformation](#12-type-manipulation-and-transformation)
- [13. Augmenting and Extending Existing Types](#13-augmenting-and-extending-existing-types)
- [14. Module Augmentation and Declaration Merging](#14-module-augmentation-and-declaration-merging)
- [15. Advanced Function Types](#15-advanced-function-types)
- [16. Advanced Type Compatibility](#16-advanced-type-compatibility)
- [17. Understanding TypeScript's keyof and Lookup Types](#17-understanding-typescripts-keyof-and-lookup-types)
- [18. TypeScript with JSX and React](#18-typescript-with-jsx-and-react)
- [19. Advanced TypeScript Configuration and Compilation](#19-advanced-typescript-configuration-and-compilation)
- [20. TypeScript Compiler Internals and Custom Transformer](#20-typescript-compiler-internals-and-custom-transformer)

## 1. Introduction to TypeScript Advanced

TypeScript is a powerful extension of JavaScript that introduces static
typing and advanced language features. As your projects grow,
switching from JavaScript to TypeScript can enhance code readability
and maintainability, reduce runtime errors, and streamline the
development process.

In this series, we will delve into advanced aspects of TypeScript,
which will give you the necessary tools to leverage its full
potential. From exploring complex data types to mastering decorators,
you will learn to write better and more efficient TypeScript code.

Here's a brief overview of what we will cover in this series:

- Generics and advanced types
- Decorators
- Type guards
- Mapped types and conditional types
- Utility types
- Advanced configuration and project setup

By the end of this series, you'll have a deep understanding of
TypeScript's advanced features and how they can be applied to create
robust and scalable applications. Prepare yourself to elevate your
programming skills to the next level with TypeScript Advanced.

## 2. Type Inference in TypeScript

TypeScript has a powerful feature called type inference. It helps developers
write cleaner code by automatically determining the data types of expressions.  
This feature reduces the need for excessive manual typings, making the code  
more concise and readable.

### How Type Inference Works

TypeScript infers types when:

- Variables are initialized
- Default parameter values are defined
- Function return types are determined

For example:

```typescript
let message = "Hello, TypeScript!";
// TypeScript infers the type of `message` as string.
```

Without explicit type annotations, TypeScript analyzes the code and infers  
the types based on the values used.

### Benefits of Type Inference

1. **Reduces Boilerplate:** Less need for explicit type annotations.
2. **Enhances Productivity:** Faster coding with automatic type detection.
3. **Improves Code Readability:** Cleaner code with fewer type declarations.

### Good to Know

- Type inference is local, meaning it happens within a single file or module.
- Explicit types can still be used when more control is needed.

Through understanding and leveraging type inference, developers can make the  
most out of TypeScript, maintaining the balance between type safety and code  
conciseness.

## 3. Union and Intersection Types

Union and intersection types are advanced concepts in TypeScript
that enable us to handle multiple types across variables, functions,
and objects, allowing a high degree of flexibility.

### Union Types

A union type variable can store values of multiple types. It's
declared using the `|` (vertical bar) and is beneficial when we
need to work with different types within the same variable scope.

```typescript
let value: string | number;
value = "A string"; // valid
value = 123; // valid
```

In this example, `value` can be either a `string` or a `number`.

### Intersection Types

Intersection types allow you to combine multiple types into
one. This can be particularly useful when you want a value to
satisfy multiple contracts at the same time. It's denoted with
a `&` (ampersand).

```typescript
type A = { a: string };
type B = { b: number };
type C = A & B;

let combined: C = { a: "value", b: 42 };
```

The `combined` object must fulfill both `A` and `B` type
requirements.

### Use Cases

- **Union Types** are great for API data that might return
  different types or handling optional properties where a
  value could be `null` or `undefined`.
- **Intersection Types** are excellent for composing types to
  ensure objects fit strict contractual obligations, often used
  in frameworks and complex libraries.

## 4. Type Guards and Differentiating Types

In TypeScript, type guards are a way to check the type of a variable
at runtime, allowing you to write code that is both safe and
expressive. They are particularly useful when dealing with union types,
where multiple types are possible for a single variable.

### Using `typeof`

The `typeof` operator can be used as a type guard in TypeScript. It is
useful for checking primitive types, such as `string`, `number`, and
`boolean`.

```typescript
function example(x: string | number) {
  if (typeof x === "string") {
    console.log(`string: ${x}`);
  } else {
    console.log(`number: ${x}`);
  }
}
```

In this example, the type of `x` is checked using `typeof`. This
allows us to safely call string methods on `x` if it is a string.

### Using `instanceof`

The `instanceof` operator is useful for checking custom types or class
instances.

```typescript
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function petExample(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  } else if (pet instanceof Cat) {
    pet.meow();
  }
}
```

Here, `instanceof` is leveraged to determine if `pet` is an instance of
`Dog` or `Cat`, and the appropriate method is called.

### Custom Type Guards

Sometimes, it is necessary to define your own type guards. Custom type
guards can be created using user-defined type guard functions.

```typescript
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function petAction(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
```

In this example, `isFish` is a custom type guard that checks if the
`pet` variable is of type `Fish`. If `pet.swim` is defined, then the
pet is a `Fish` and can safely call `swim` method.

Understanding and utilizing type guards thoroughly can pave the way to
writing TypeScript code that is both type-safe and dynamism tolerant.
These concepts are pivotal when dealing with complex data structures
or API responses involving mixed types.

## 5. Decorators in TypeScript

Decorators are a powerful and unique feature of TypeScript, allowing
you to modify classes, methods, accessor, property, or parameter
annotations during runtime. They are typically used in frameworks to
enhance the functionality and to provide additional behavior to
existing code.

To use decorators, you need to enable the `experimentalDecorators`
compiler option or add it in your `tsconfig.json` configuration. This
is because decorators are a stage 2 proposal for ECMAScript and thus
regarded as experimental.

### Types of Decorators

1. **Class Decorators**:

   - Applied to classes, modifying class behavior.
   - Example:

     ```typescript
     function sealed(constructor: Function) {
       Object.seal(constructor);
       Object.seal(constructor.prototype);
     }

     @sealed
     class BugReport {
       type = "report";
       title: string;

       constructor(t: string) {
         this.title = t;
       }
     }
     ```

     Here, `@sealed` is a class decorator that makes the class, along
     with its prototypes, non-extensible (sealed).

2. **Method Decorators**:

   - Applied to methods, often used for logging or authorization.

3. **Accessor Decorators**:

   - Used for properties with accessors (`get` and `set`).

4. **Property Decorators**:

   - Applied to class properties for validation or transformation.

5. **Parameter Decorators**:
   - Modify the metadata of a parameter, useful in dependency
     injection frameworks.

### Using Decorators Effectively

Decorators are helpful for cross-cutting concerns like logging,
data caching, or performance monitoring, offering cleaner and more
concise code. Most decorators will follow a pattern where they take
a configuration object or function, allowing for highly reusable
and modular code.

Start experimenting with decorators to see how they could simplify
your codebase and harness the full power of TypeScript.

## 6. Generics in TypeScript

Generics in TypeScript are a powerful feature that allows developers
to create reusable and flexible components. In essence, they enable
components to work with any data type, while providing complete type
safety.

Generics are used when:

- The same function or class needs to work with multiple data types.
- Type safety is required while maintaining flexibility.

To understand generics better, let's consider a simple identity
function example that returns whatever is passed into it. Without
generics, we'd need to write separate functions to handle each data
type:

```typescript
function identity(arg: number): number {
  return arg;
}
function identity(arg: string): string {
  return arg;
}
```

With generics, we can write a single function that can accept any
data type:

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

In this example, `<T>` is a placeholder for a type that will be
specified later, during function call. Using generics not only
reduces redundancy but also provides flexibility and type safety.

Generics can be used with:

- Functions
- Interfaces
- Classes

By leveraging generics, developers can produce more robust and
scalable code. They are particularly useful in scenarios where
there's a need for reusable components and maintainable code
architecture.

## 7. Mapped Types and Index Signatures

In TypeScript, **Mapped Types** and **Index Signatures** provide
powerful ways to transform and capture the shape of objects.
They help in creating flexible and reusable type definitions.

### Mapped Types

Mapped types allow you to take an object type and transform
its properties in some manner. They are usually used for type
transformations and creating types that represent some kind of
variant of an existing type.

A mapped type is created using the syntax:

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

Here, `Readonly<T>` is a mapped type that makes all properties
of `T` readonly. The `keyof T` is used to map over all the
properties of `T`.

### Index Signatures

Index signatures allow you to define a type for objects
that have dynamic keys, often useful when working with
dictionaries or hash maps.

An index signature is defined using the syntax:

```typescript
type Dictionary = {
  [key: string]: number;
};
```

Here, `Dictionary` is a type for objects that can have
any key of type `string`, with a value of type `number`.

### Combining Mapped Types and Index Signatures

You can combine mapped types and index signatures to model more
complex scenarios. For example, creating a partial subset of an
object wouldn't require explicitly listing out all properties:

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

This `Partial<T>` mapped type creates a type where every
property of type `T` is optional.

### Conclusion

Understanding mapped types and index signatures is crucial for
harnessing the full power of TypeScript's type system. They allow
types to be both expressive and flexible, enabling developers
to write more maintainable and robust code.

## 8. Advanced Object Types

In TypeScript, object types can be more intricate than simple records
with fixed properties. Advanced object types offer a wide range of
capabilities for defining complex relationships between keys and values.

### Index Signatures

Index signatures allow you to define objects with dynamic keys. The
syntax for an index signature looks like this:

```typescript
interface StringArray {
  [index: number]: string;
}
const myArray: StringArray = ["hello", "world"];
```

Here, `StringArray` describes an object that has numeric keys
and string values, essentially similar to the `Array<string>` type.

### Readonly Properties

Properties in an object type can be marked as `readonly`. This means
the property cannot be modified after the object is created:

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x' because it is a read-only
```

Readonly properties are useful for defining immutable data structures.

### Optional Properties

Optional properties are denoted by a `?` after the property name. They
indicate that the property may not be present:

```typescript
interface Point {
  x: number;
  y: number;
  z?: number;
}
```

In the `Point` interface, `z` is optional, and objects conforming to
this type may or may not have it.

### Combining Index Signatures with Static Properties

You can combine static and dynamic properties in the same object type:

```typescript
interface Toggable {
  isEnabled: boolean;
  [key: string]: any;
}
```

This pattern can be useful when you have known fixed properties
and then allow for any kind of additional configuration through
dynamic properties.

### Conclusion

Advanced object types in TypeScript provide flexibility and precision
when defining shapes of objects. Understanding these advanced features
is crucial to leveraging TypeScript's full potential in large
applications.

## 9. Conditional Types

Conditional types offer a powerful feature in TypeScript that allows you
to define a type based on a condition expressed in the type system. This
is analogous to `if` conditional statements in JavaScript, but at the
type level.

A conditional type selects one of two possibilities depending on a
condition: it takes the form of `T extends U ? X : Y`, where:

- `T` is the type to check.
- `U` is the condition type.
- `X` is the type returned if `T` extends `U`.
- `Y` is the type returned if `T` does not extend `U`.

### Basic Usage

Here is a simple example of using conditional types:

```typescript
type TypeName<T> = T extends string
  ? "string"
  : T extends number
    ? "number"
    : T extends boolean
      ? "boolean"
      : "other";

let str: TypeName<string>; // 'string'
let num: TypeName<number>; // 'number'
let bool: TypeName<boolean>; // 'boolean'
```

In this example, `TypeName<T>` evaluates to `'string'`, `'number'`,
`'boolean'`, or `'other'` based on the type of `T`. This is achieved by
nesting conditional types.

### Distributive Conditional Types

Conditional types distribute over union types. This means that if the
condition involves a union type, the conditional type is applied
individually to each member of the union, then results are again unioned
together. Here's an example:

```typescript
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>; // (string[] | number[])
```

Here, `ToArray<string | number>` will result in `(string[] | number[])`
thanks to the distributive nature of conditional types.

### Practical Example

Consider a function that returns different types depending on a
conditional check:

```typescript
function processValue<T>(value: T): T extends string ? string : boolean {
  if (typeof value === "string") {
    return `Processed: ${value}` as T extends string ? string : boolean;
  }
  return true as T extends string ? string : boolean;
}
```

The `processValue` function utilizes conditional types to determine
its return type at compile-time based on the type of `T`.

Conditional types in TypeScript provide a very flexible mechanism for
creating types that adapt based on custom logic, thus enabling advanced
type system capabilities.

## 10. Template Literal Types

Template Literal Types in TypeScript allow for manipulating strings
in a more flexible way by combining literal types with template
literal syntax. This feature opens the door for powerful type
representations and constraints without leaving the type system.

### Basic Usage

This is how you can combine string literals to create new types:

```typescript
type World = "world";
type Greeting = `hello ${World}`; // "hello world"
```

Template Literal Types can construct types by pairing with union
types as follows:

```typescript
type Flavor = "vanilla" | "chocolate";
type Cup = `Cup of ${Flavor}`;
// "Cup of vanilla" | "Cup of chocolate"
```

### Advanced Applications

#### Intricate String Transformations

By using intrinsic string manipulation types like `Uppercase`,
`Lowercase`, `Capitalize`, and `Uncapitalize`, you can transform
strings in a type context:

```typescript
type LowercaseGreeting = Lowercase<Greeting>; // "hello world"
```

#### Mimicking Functionality

You can use inferred types within a mapped type to simulate functions
like concatenations or more complex operations:

```typescript
type Prefixer<T extends string> = `Prefix_${T}`;
type Example = Prefixer<"Test">; // "Prefix_Test"
```

#### Enforcing Patterns

With template literal types, you can enforce specific string patterns
at the type level, which can be helpful in scenarios like validating
identifiers or formats:

```typescript
type Identifier<T extends string> = `${T}_ID`;
let userId: Identifier<"user">;
```

Pattern enforcement ensures that any string assigned to userId
must adhere to the pattern determined, improving software reliability
by catching errors early in the development phase.

Template Literal Types enhance the expressiveness and type safety of
TypeScript, catering to complex string operations and pattern
enforcement within the type system itself.

## 11. TypeScript Utility Types

TypeScript provides built-in utility types that enable you to manipulate
and transform types more efficiently. These utilities simplify common type
transformations and make the code more expressive and easier to manage.

### Partial

The `Partial` utility type allows you to make all properties of a type
optional. It is particularly useful when you need to make modifications
to some fields of an object type without having to specify every field.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

const updateUser = (user: Partial<User>): void => {
  // Implementation to update user
};
```

### Readonly

The `Readonly` utility type makes all properties of a type read-only.
This is useful for preventing modification to an object after its creation,
ensuring immutability.

```typescript
type Product = {
  id: number;
  name: string;
  price: number;
};

const getProduct = (): Readonly<Product> => {
  // Fetch the product data
};
```

### Record

The `Record` utility type creates an object type with specific key-value
pairs. It is useful when you need to specify a structure mapping property
names to their types.

```typescript
type PageInfo = {
  title: string;
};

type Pages = Record<"home" | "about" | "contact", PageInfo>;

const sitePages: Pages = {
  home: { title: "Home Page" },
  about: { title: "About Us" },
  contact: { title: "Contact" },
};
```

### Pick and Omit

The `Pick` utility type allows you to construct a type by picking a set
of properties from another type. Conversely, the `Omit` utility type
allows you to create a type by omitting certain properties from another
type. These are particularly handy when you need to work with a subset of
object properties.

```typescript
type Person = {
  name: string;
  age: number;
  address: string;
};

type NameAge = Pick<Person, "name" | "age">;

type Address = Omit<Person, "name" | "age">;
```

These utility types, among others, enhance your ability to model types
more effectively and concisely in TypeScript.

## 12. Type Manipulation and Transformation

In TypeScript, type manipulation allows developers to transform and adjust
existing types for better code manageability and expressiveness. Type
manipulation is particularly powerful when dealing with complex data structures
and APIs.

### Key Concepts

- **Type Aliases and Interfaces**: These foundational building blocks let you
  define and compose new types. You may often transform an interface by extending
  or combining it with other types, using features like intersection
  (e.g., `type NewType = Type1 & Type2;`).

- **Mapped Types**: Using mapped types, you can create new types by transforming
  properties of an existing type. For instance, using `Partial<Type>` to make all
  properties optional, or `Readonly<Type>` to make them immutable.

- **Conditional Types**: Conditional types (e.g., `T extends U ? X : Y`) allow
  you to create types based on conditions, offering a dynamic type resolution
  mechanism that can adapt based on given inputs.

- **Indexed Access Types**: These allow you to retrieve types using keyof and
  type indices. For instance, `Type['property']` fetches the type of `property`
  in `Type`.

- **Utility Types**: TypeScript comes with utility types such as `Pick`,
  `Omit`, `Exclude`, which can be leveraged to transform existing types according
  to your needs.

### Use Cases

Type manipulation is often necessary when:

- Dealing with API responses where only certain data is relevant.
- Transforming types for component props in large React applications to improve
  maintainability.
- Creating robust data validation and serialization layers.

Through effective type manipulation, developers can craft types that accurately
reflect the domains and constraints of their applications, leading to safer and
more maintainable code.

## 13. Augmenting and Extending Existing Types

One of TypeScript's powerful features is the ability to augment and
extend existing types. This capability allows developers to add new
properties or methods to existing types, making the language highly
flexible and adaptable to various needs.

### Augmenting Global Types

TypeScript allows you to augment global types such as `Window` or other
DOM interfaces. By using declaration merging, you can add properties to
the global `Window` interface.

```typescript
declare global {
  interface Window {
    customProperty: string;
  }
}

window.customProperty = "Hello, world!";
```

Here, we've added a new property `customProperty` to the `Window`
interface. This is useful when you're using third-party scripts that
add properties to global objects.

### Extending Interfaces

Extending interfaces is another common way to create more specific type
descriptions.

```typescript
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Rex",
  age: 5,
  breed: "Golden Retriever",
};
```

The `Dog` interface extends the `Animal` interface, inheriting its
properties while adding a new one, `breed`.

### Adding Properties to Existing Classes

TypeScript supports adding new properties to existing classes through
module augmentation.

```typescript
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

interface Person {
  greet(): void;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John", 25);
john.greet(); // Output: Hello, my name is John
```

Here, we augment the `Person` class by adding a `greet` method to its
prototype.

### Conclusion

Understanding how to augment and extend types can substantially improve
code reusability and flexibility in TypeScript. This capability is
essential for maintaining type safety while extending external libraries
or handling complex application logic. It allows developers to create
more expressive types tailored to their specific application needs.

## 14. Module Augmentation and Declaration Merging

In TypeScript, module augmentation and declaration merging are powerful
features that allow developers to extend existing types and modules,
providing greater flexibility and enabling better code organization.
These features are especially useful when dealing with third-party
libraries.

### Module Augmentation

Module augmentation refers to adding new exports or modifying existing
exports of an external module without editing the original module's
source code. This is typically done using `declare module` syntax.

Here's an example:

```typescript
// Assume we are augmenting a module named 'some-library'
declare module "some-library" {
  export interface SomeType {
    newProperty: string;
  }
}
```

In the example above, we extend the `SomeType` interface from
`some-library` by adding a new property `newProperty`.

### Declaration Merging

Declaration merging occurs when two or more declarations share the same
name. TypeScript merges their properties, functions, or classes into one
single declaration. This can be particularly useful for extending
functionality across multiple files without modifying original
declarations.

For example:

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

const box: Box = { height: 5, width: 10, scale: 1.5 };
```

In this case, the interfaces `Box` are merged resulting in a single
interface with properties: `height`, `width`, and `scale`.

### Combining Both Features

You can utilize both of these features in tandem, allowing you to extend
existing codebases efficiently, especially when dealing with
third-party modules that need customization:

```typescript
// Augmenting a module
import "express";

declare module "express" {
  export interface Request {
    user?: string;
  }
}
```

Above, we augment the `express` module's `Request` interface by adding
a `user` property.

These TypeScript features facilitate easier integration with external
modules and libraries in your projects, helping maintain cleaner and
more maintainable code. Use them wisely to expand and adapt your
codebase to changing requirements without losing safety guaranteed by
TypeScript's rich type system.

## 15. Advanced Function Types

In TypeScript, function types provide a way to represent functions
with specific parameters and return types. Beyond basic function
typing, TypeScript offers capabilities to define complex function
signatures and behaviors. This article explores some advanced function
types and how to leverage them for more sophisticated programming
patterns.

### Function Overloads

Function overloads allow multiple signatures for a single function.
They enable us to define different parameter types and return types
for various use cases of the same function name.

```typescript
type Padding = number | string;

function pad(value: string, padding: number): string;
function pad(value: string, padding: string): string;
function pad(value: string, padding: Padding): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  return value;
}
```

In the example above, the `pad` function is declared with two different
overloads. TypeScript ensures that the correct overload is used
based on the type of the argument passed.

### Callable and Constructible Types

Types in TypeScript can represent functions that can be both called
and constructed (invoked with `new`). These are managed using intersection
types.

```typescript
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

The `CallOrConstruct` interface can be used to define objects that
can be both called like a function and constructed like a class,
allowing significant flexibility.

### Higher-Order Functions

Higher-order functions are functions that either take other functions
as arguments or return a function. TypeScript's type system supports
such patterns, enabling more abstract and reusable components.

```typescript
function higherOrder(fn: (value: number) => number): (value: number) => number {
  return (value: number) => {
    return fn(value) * 2;
  };
}
```

### Conclusion

Using advanced function types effectively requires understanding
and employing these concepts appropriately. Function overloads,
callable and constructible types, and higher-order functions are
powerful tools for advanced TypeScript programming.

In the next articles, we will continue exploring more complex
concepts in TypeScript to enhance your programming skills further.

## 16. Advanced Type Compatibility

In TypeScript, advanced type compatibility addresses how various types
interact and can be assigned with one another, considering both static
and dynamic type checks. Understanding these concepts is crucial for
writing more robust applications using TypeScript, especially when
working with large codebases or integrating with third-party libraries.

### Type Compatibility Basics

TypeScript is a structural type system, meaning that compatibility is
determined based on the structure of the types rather than their name.
This allows types to be compatible if they have the same shape. This
concept is also referred to as duck typing.

#### Example

```typescript
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 1, y: 2, z: 3 };

point2D = point3D; // Compatible due to shape matching
```

In this example, `Point3D` is assignable to `Point2D` because it has all
the properties `Point2D` has, and potentially more. This is known as
**subtype polymorphism**.

### Type Compatibility Rules

The rules of type compatibility in TypeScript are based on relationships
between types. Some of the key rules include:

1. **Any and Unknown**: Any can be assigned to any type, and any type
   can be assigned to unknown.
2. **The Never Type**: Never is a subtype of every type and cannot have
   any value.
3. **Literal and Enum Types**: Literal and enum types are compatible
   with their base types.
4. **Generics**: Compatibility checks are invariant in TypeScript unless
   explicitly expressed as covariant or contravariant.

#### Example

```typescript
type Result<T> = { success: boolean; value: T };

let result1: Result<number> = { success: true, value: 5 };
let result2: Result<string> = { success: true, value: "hello" };

// result1 = result2; // Error, as they are not compatible
```

Here, `Result<number>` and `Result<string>` are not compatible since
they map to separate instances of generic types.

### Impacts on Function Overloads

Type compatibility is particularly important in the context of function
overloads where the most specific overload is selected based on input
arguments.

```typescript
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  return padding + value;
}

padLeft("Hello", 4); // OK
padLeft("Hello", "  "); // OK
padLeft("Hello", true); // Error
```

In this function, `padding` can be a number or a string, and the correct
overload is used to detect the mismatched type for the argument
`true`.

### Summary

Advanced type compatibility is a powerful feature of TypeScript that
supports type safety and program correctness, allowing developers to
write effective and maintainable code. Understanding how TypeScript
evaluates type compatibility ensures smoother integration, better
refactoring capabilities, and ultimately a stronger partnership between
code and types.

## 17. Understanding TypeScript's keyof and Lookup Types

TypeScript provides powerful tools to work with the properties of objects,
among these are `keyof` and lookup types, which allow developers to create
more dynamic and type-safe code.

### `keyof` Operator

The `keyof` operator is used to extract the keys of a given object type as a
union of string literal types. This is particularly useful when you want to
enforce that a value must be one of the keys of a certain interface or object
type.

```typescript
type Person = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "location"
```

In the above example, `PersonKeys` is a union type consisting of the keys of
the `Person` type. This can be very useful when building functions that
operate dynamically based on the keys of an object.

### Lookup Types

Lookup types, also known as indexed access types, allow you to retrieve the
type of a specific property. This is similar to accessing a property using
subscript in JavaScript, but in a type-safe manner.

```typescript
type PersonNameType = Person["name"]; // string
```

In the above example, `PersonNameType` represents the type of the `name`
property from the `Person` type, which is `string`.

### Combining `keyof` and Lookup Types

You can combine `keyof` and lookup types to create powerful patterns where
you enforce both the keys being valid and access type information in a
dynamic manner:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30, location: "Wonderland" };

const age: number = getProperty(person, "age");
```

In the `getProperty` function, `K` is constrained to be one of the keys of
`T`, and the return type `T[K]` dynamically represents the type of the
property at the given key. This ensures that users of the function can only
access valid keys and that the correct type is returned.

## 18. TypeScript with JSX and React

In this article, we'll delve into how TypeScript can be leveraged
with JSX and React to create strongly-typed React applications.
TypeScript enhances React code with type safety and IntelliSense
features.

### Setting up TypeScript with React

To start using TypeScript with React, you can create a new React
project using Create React App with TypeScript template by running
this command:

```
npx create-react-app my-app --template typescript
```

This setup provides a basic scaffold with TypeScript configured.

### TypeScript in JSX

TypeScript supports JSX, which allows you to write HTML-like syntax
inside JavaScript/TypeScript. When using JSX with TypeScript, ensure
files have either a `.tsx` extension.

#### Typing React Props

React components can have typed props, which help prevent runtime
errors by validating prop types at compile time.

```typescript
type Props = {
  title: string;
  isActive: boolean;
};

const MyComponent: React.FC<Props> = ({ title, isActive }) => {
  return <div>{title} is {isActive ? 'active' : 'inactive'}</div>;
};
```

This example shows how you can define prop types using TypeScript's
type annotations.

#### State and Ref typing

Typing state and refs in React components is another common pattern.
State can be typed using generics provided by `useState` hook:

```typescript
const [count, setCount] = useState<number>(0);
```

Refs can be typed using `React.RefObject` type:

```typescript
const inputRef = useRef<HTMLInputElement>(null);
```

### Benefits of TypeScript in React

- **Type Safety**: Helps catch type-related errors during
  development.
- **IDE Support**: Enhanced code completion and navigation.
- **Documentation**: Type annotations serve as live documentation
  for components.

TypeScript, when used with React, offers robust type-checking for
props, state, and other React features, improving code quality and
approachability. Integrating TypeScript in your React projects leads
to easier maintenance and fewer bugs.

## 19. Advanced TypeScript Configuration and Compilation

In advanced TypeScript usage, effectively using and configuring the
`tsconfig.json` file is of utmost importance. This configuration file
controls the way the TypeScript compiler (`tsc`) behaves and can affect
the entire development workflow.

### Key Compiler Options

- **`target`**: Determines which version of JavaScript should be outputted
  (e.g., `ES5`, `ES6`).
- **`module`**: Controls the module code generation (`CommonJS`, `ESNext`).
- **`strict`**: Enables strict type-checking options.
- **`baseUrl` and `paths`**: Useful for path mapping, allowing modules to
  be imported with absolute paths relative to a base URL.
- **`outDir`** and **`rootDir`**: Specify the output directory and the root
  directory of source files respectively.

### Examining Important Flags

- **`allowJs`**: Allows JavaScript files to be compiled alongside
  TypeScript files.
- **`declaration`**: Generates corresponding `.d.ts` files which are
  essential for package authors.
- **`sourceMap`**: Useful in debugging, this option generates source maps
  to map over the compiled code to the TypeScript source.
- **`incremental`**: Enables incremental compilation, speeding up
  subsequent builds.

### Working with Custom Build Strategies

For large, complex projects, employing custom build strategies can enhance
performance and manageability.

- **`Composite Projects`**: Via the `composite` flag, projects are built in
  a piecemeal fashion. Recommended for large codebases to enable
  independent compilation.
- **`Build Mode`**: Utilizing the `--build` flag (or `tsc -b`), this mode
  leverages project references for efficient builds, making it easier to
  manage monorepos.

### Leveraging External Tools

You can integrate TypeScript with bundlers like Webpack, Rollup, or
Parcel. They can enhance the build process by including additional
features like tree shaking, code splitting, and more.

In conclusion, understanding and configuring the TypeScript compilation
process is crucial for harnessing its full power, especially on large
scales. Careful management of configuration options can lead to optimized,
efficient, and manageable applications.

## 20. TypeScript Compiler Internals and Custom Transformer

In this advanced article, we will explore the inner workings of the
TypeScript compiler and learn how to create custom transformers that
allow for additional code transformations during the compilation
process.

### Understanding the TypeScript Compiler

The TypeScript compiler (tsc) is responsible for converting TypeScript
code into JavaScript code. It performs several tasks, including:

- Parsing: Reading the TypeScript code and creating an Abstract Syntax
  Tree (AST).
- Type Checking: Verifying the types and ensuring code conformance to
  the TypeScript type system.
- Emit: Generating JavaScript code based on the TypeScript AST and type
  information.

Understanding these phases is crucial when working with custom
transformers.

### Custom Transformers

Custom transformers allow developers to hook into the compilation
process and apply custom code transformations to the AST. These can be
helpful for:

- Code Analysis: Extracting specific patterns or data from the code.
- Code Modification: Introducing new syntax or changing the existing
  pattern.
- Optimization: Performing optimization strategies tailored for
  specific scenarios.

#### Creating a Custom Transformer

1. **Set Up the Environment**: Ensure you have TypeScript installed and
   configured.

   ```shell
   npm install typescript --save-dev
   ```

2. **Create the Transformer File**: Define a function that implements
   the transformation logic.

   ```typescript
   import * as ts from "typescript";

   function transformer<T extends ts.Node>(): ts.TransformerFactory<T> {
     return (context: ts.TransformationContext) => (rootNode: T) => {
       function visit(node: ts.Node): ts.Node {
         // Example: Add a console log before every function.
         if (ts.isFunctionDeclaration(node)) {
           const newStatement = ts.createStatement(
             ts.createCall(ts.createIdentifier("console.log"), undefined, [
               ts.createLiteral("Function called!"),
             ]),
           );
           return ts.updateFunctionDeclaration(
             node,
             node.decorators,
             node.modifiers,
             node.asteriskToken,
             node.name,
             node.typeParameters,
             node.parameters,
             node.type,
             ts.createBlock([newStatement, ...node.body.statements], true),
           );
         }
         return ts.visitEachChild(node, visit, context);
       }
       return ts.visitNode(rootNode, visit);
     };
   }
   ```

3. **Integrate with the Compiler**: Utilize the transformer's logic
   during the compilation phase.

   Create a `tsc` custom script:

   ```shell
   npx tsc --project tsconfig.json --plugin "<transformer-path>"
   ```

#### tsconfig.json Setup

Ensure that your `tsconfig.json` is set up to allow custom transforms.

```json
{
  "compilerOptions": {
    "plugins": [{ "transform": "<path-to-your-transformer>" }]
  }
}
```

### Conclusion

Understanding and using TypeScript compiler internals and custom
transformers can significantly enhance your ability to manage and
transform code effectively during the compile phase, allowing for
flexibility, custom optimizations, and integration of new syntactical
features specific to your project needs.
