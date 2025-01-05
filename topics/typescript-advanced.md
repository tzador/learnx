# TypeScript Advanced

- [01. Introduction to TypeScript Advanced](#01-introduction-to-typescript-advanced)
- [02. Understanding TypeScript Generics](#02-understanding-typescript-generics)
- [03. TypeScript Enums](#03-typescript-enums)
- [04. TypeScript Utility Types](#04-typescript-utility-types)
- [05. TypeScript Decorators](#05-typescript-decorators)
- [06. Mapped Types in TypeScript](#06-mapped-types-in-typescript)
- [07. Intersection and Union Types in TypeScript](#07-intersection-and-union-types-in-typescript)
- [08. TypeScript Namespaces](#08-typescript-namespaces)
- [09. Advanced TypeScript Types](#09-advanced-typescript-types)
- [10. TypeScript Module Augmentation](#10-typescript-module-augmentation)
- [11. TypeScript Conditional Types](#11-typescript-conditional-types)
- [12. TypeScript Advanced Functions](#12-typescript-advanced-functions)
- [13. TypeScript keyof and Lookup Types](#13-typescript-keyof-and-lookup-types)
- [14. TypeScript Template Literal Types](#14-typescript-template-literal-types)
- [15. TypeScript Symbols](#15-typescript-symbols)
- [16. TypeScript Iterators and Generators](#16-typescript-iterators-and-generators)
- [17. TypeScript JSX and React](#17-typescript-jsx-and-react)
- [18. TypeScript Mixins](#18-typescript-mixins)
- [19. TypeScript Reflection](#19-typescript-reflection)
- [20. TypeScript Compiler APIs](#20-typescript-compiler-apis)

## 01. Introduction to TypeScript Advanced

Welcome to the series on "TypeScript Advanced"! In this series,
we will dive deep into the advanced features of TypeScript, a
typed superset of JavaScript that compiles to plain JavaScript.
TypeScript builds on JavaScript by adding static type
definitions, which help catch problems early through a powerful
type system and enable robust development tools for JavaScript.

The goal of these articles is to provide you with a comprehensive
guide to understanding and utilizing TypeScript's advanced
features. We will start by establishing a strong foundation in
TypeScript basics before advancing to more complex and powerful
concepts. Topics will include but are not limited to advanced
type manipulation, decorators, generics, and module augmentations.

Whether you're a seasoned JavaScript developer or someone
transitioning from another language, these articles aim to
enhance your skills and help you write cleaner, more
maintainable code using TypeScript's advanced capabilities.

Stay tuned for our next article where we'll cover the basics
that set the stage for understanding advanced concepts.

## 02. Understanding TypeScript Generics

TypeScript generics allow you to create reusable components that can work
with different types. This concept allows you to define functions, classes,
or interfaces with a placeholder for the type.

### Why Use Generics?

Generics provide the ability to create components that can operate on a
variety of types rather than a single one. This conserves code reusability
and type safety across your application.

### Basic Example

A simple example of a generic function entails using the `T` placeholder:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello World");
let output2 = identity<number>(42);
```

Here, `identity` is a generic function with a type parameter `T`, which
represents the type of `arg`. The `identity` function can work with
multiple types, depicted in `output1` and `output2`.

### Generic Classes

Generics in classes allow for dynamic types as well:

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

In this case, `GenericNumber` class uses a generic type parameter `T`.
This ability to specify types makes Generics a powerful feature in
TypeScript for creating robust and maintainable codebases.

## 03. TypeScript Enums

Enums are one of the few features TypeScript adds which are
not a type-level extension of JavaScript. Enums allow
development under a different paradigm, simplifying working
with constant values and ensuring type safety.

Enums come in two flavors in TypeScript:

1. **Numeric Enums**: These enums store numeric values,
   starting from zero by default. They can be initialized
   to any specific number, and TypeScript will auto-increment
   the rest.

   ```typescript
   enum Direction {
     Up = 1,
     Down,
     Left,
     Right,
   }
   ```

   In the example above, `Direction.Up` is set to `1`,
   `Direction.Down` to `2`, and so on.

2. **String Enums**: In these enums, each member has
   to be explicitly initialized with a string value.

   ```typescript
   enum Status {
     SUCCESS = "SUCCESS",
     FAILURE = "FAILURE",
     PENDING = "PENDING",
   }
   ```

### Use Cases of Enums

Enums are useful when you need a set of named constants
for a set of closely related values. They improve code
readability and can help prevent bugs.

For instance, when handling application states or
directions in which a user may navigate, enums help
make the code more intuitive and manageable.

Remember that TypeScript aims to enhance
JavaScript, not to replace it. While enums introduce useful
features for compiling TypeScript to JavaScript,
consider if your case truly necessitates them before
implementing to avoid unnecessary complexity.

## 04. TypeScript Utility Types

TypeScript provides a set of utility types that can help make our code
cleaner and more readable. These types and mapped types help in
transforming the shapes or properties of existing types.

### Partial

The `Partial<T>` utility type constructs a type with all properties of
`T` set to optional. This is useful when you want to make a subset of
a type optional.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const updateUser: Partial<User> = {
  name: "Alice",
};
```

### Readonly

The `Readonly<T>` utility type makes all properties of `T` read-only,
which means you cannot modify the properties of the object once it is
assigned.

```typescript
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "Bob",
  age: 30,
};

// user.age = 31; // Error: Cannot assign to 'age' because it is a
// read-only property.
```

### Record

The `Record<K, T>` utility type constructs an object type whose
property keys are `K` and values are `T`. This is handy for creating
types for dictionaries or key-value mappings.

```typescript
type PageScores = Record<string, number>;

const scores: PageScores = {
  home: 10,
  about: 8,
  contact: 9,
};
```

### Pick

`Pick<T, K>` allows you to create a type by selecting a set of
properties `K` from `T`. This is useful when you need a type with a
subset of properties.

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

type UserContactInfo = Pick<User, "email">;

const contactInfo: UserContactInfo = {
  email: "alice@example.com",
};
```

### Omit

`Omit<T, K>` is the opposite of `Pick`. It allows you to create a type
by excluding a set of properties `K` from `T`.

```typescript
type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = {
  name: "Alice",
  age: 25,
};
```

Understanding and using these utility types effectively can vastly
improve type safety and code maintainability in TypeScript projects.

## 05. TypeScript Decorators

Decorators in TypeScript provide a way to add both annotations and a meta-
programming syntax for class declarations and members. Decorators are special
type of declarations that can be attached to a class, method, accessor,
property, or parameter. They are function expressions that are immediately invoked.

### Enabling Decorators

To use decorators in TypeScript, you need to enable the experimentalDecorators
compiler option in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

### Applying Decorators

Decorators can be applied using `@expression` where `expression` must evaluate
to a function that takes certain arguments depending on what is being decorated.

#### Class Decorators

A class decorator is applied to the class constructor. It can be used to observe,
modify, or replace a class definition. It is declared just before the class
declaration:

```typescript
function logClass(target: Function) {
  console.log(`Class Decorator Applied: ${target.name}`);
}

@logClass
class MyClass {}
```

#### Method Decorators

Method decorators are applied to the method of a class. They can be used to
observe, modify, or replace a method definition:

```typescript
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method Decorator Applied: ${key}`);
}

class MyClass {
  @logMethod
  myMethod() {}
}
```

#### Accessor Decorators

An accessor decorator is applied to a property accessor in a class. It can
observe, modify, or replace an accessor's definitions:

```typescript
function configurable(isConfigurable: boolean) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = isConfigurable;
  };
}

class MyClass {
  private _myProperty: string = "";

  @configurable(false)
  get myProperty(): string {
    return this._myProperty;
  }
}
```

#### Property and Parameter Decorators

These decorators can also be applied similarly to modify properties and parameters;
however, they are more advanced and involve specifics of the TypeScript compiler.

Decorators are a foundational tool in TypeScript allowing for powerful
meta-programming patterns, essential for those building advanced applications.

## 06. Mapped Types in TypeScript

Mapped types in TypeScript provide a way to create new types based on existing
ones. They enable transformations on object types, producing a new type with
properties corresponding to the transformations specified.

### Basic Mapped Types

A mapped type is often created using a combination of the `keyof` operator, which
retrieves all keys from an interface or type, and the `in` keyword to iterate
through each key. To declare a mapped type, define a type and iterate through
the keys of the original type:

```typescript
type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};
```

The example above represents a mapped type that creates a new type by adding
`readonly` to each property of type `T`.

### Mappable Type Operations

You can alter the properties in various ways:

- **readonly**: To make each property readonly.
- **optional**: To make each property optional using `?`.
- **rename**: To add prefixes or suffixes to keys.

#### Example

Using a mapped type to make properties optional:

```typescript
type PartialType<T> = {
  [K in keyof T]?: T[K];
};
```

Here, `PartialType` transforms all properties into optional ones.

### Practical Use Cases

#### Transforming API Responses

Mapped types can adjust API response objects, changing mutability, or typing the
structure returned from APIs which might return variations in field names.

#### Code Maintenance

Consistently apply transformations across types, ensuring controlled, predictable
type modifications without manually adjusting each property.

Mapped types significantly enhance TypeScript's robust type manipulation,
empowering developers to efficiently modify and work with complex types.

## 07. Intersection and Union Types in TypeScript

In TypeScript, intersection and union types provide a powerful way to
combine types, offering more flexibility in defining complex type
structures. These features allow developers to create type compositions
that can cater to more sophisticated use cases.

### Union Types

Union types allow a variable to hold a value of multiple types.
Use the pipe (`|`) symbol to define union types. It essentially
permits a value to be one of a few types. For instance:

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber;

value = "Hello"; // valid
value = 100; // valid
value = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'.
```

Union types enable flexibility by letting values adhere to more
than one specific type.

### Intersection Types

Intersection types allow combining multiple types into one.
They are represented using the ampersand (`&`) symbol. All
properties from the intersected types are required on the resultant
object. For example:

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// Combining Person and Employee
let employeeDetails: Person & Employee;

employeeDetails = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "HR",
};
```

Intersection types are useful when a certain entity needs to
adhere to multiple type definitions simultaneously.

### Combining Union and Intersection

You can also combine union and intersection types to form more
complex type structures:

```typescript
type Car = {
  make: string;
  model: string;
};

type Bike = {
  isMotorized: boolean;
};

type Vehicle = (Car | Bike) & {
  wheels: number;
};

const myVehicle: Vehicle = {
  make: "Tesla",
  model: "Model S",
  wheels: 4,
};

const myBike: Vehicle = {
  isMotorized: false,
  wheels: 2,
};
```

Here, `Vehicle` is an intersection type that must include
properties to determine if it's a `Car` or a `Bike`, along
with the shared `wheels` property.

Intersection and union types in TypeScript are critical tools
for advanced type management, facilitating both flexibility and
precision in type definitions.

## 08. TypeScript Namespaces

Namespaces in TypeScript are a way to organize and group logical code
blocks together. They help in preventing name clashes by providing
scoped access to variables, functions, classes, and interfaces.

### Declaring a Namespace

To declare a namespace, use the `namespace` keyword followed by the
namespace name. Enclose the related code inside curly braces:

```typescript
namespace Utilities {
  export function logMessage(message: string): void {
    console.log(message);
  }
}
```

In the example above, a namespace `Utilities` contains a single
function `logMessage`. The `export` keyword makes the function
available outside the namespace.

### Consuming a Namespace

When you want to use a member of a namespace, you need to prefix it
with the namespace name:

```typescript
Utilities.logMessage("Hello, World!");
```

This ensures that there is no ambiguity even if multiple functions
with the same name exist in different namespaces.

### Nested Namespaces

TypeScript allows nesting of namespaces, which can be useful for
deeper logical separation:

```typescript
namespace Application {
  export namespace Settings {
    export function load(): void {
      console.log("Loading settings...");
    }
  }
}

Application.Settings.load(); // Invoking nested namespace function
```

### Compiling Namespaces

When compiled, namespaces can result in complex code structures.
Ensure that all `export` and `import` statements are handled correctly.

Namespaces can be a powerful tool in TypeScript, especially for
developers coming from other languages where large code bases are
organized similarly.

## 09. Advanced TypeScript Types

TypeScript is a powerful language that adds static types to JavaScript,
enabling the development of large-scale applications while reducing bugs.
In advanced usage, it features several complex types that can refine
and constrain the data structures you use, elevating your code reliability
to another level.

### Literal Types

A literal type is a type that can only have one value. This is opposed
to other types that can have multiple possible values. Literal types allow
you to single out specific strings or numbers:

```typescript
let direction: "north" | "south" | "east" | "west";
direction = "north"; // Valid
direction = "up"; // Error
```

### Discriminated Unions

Discriminated unions, or tagged unions, are a powerful pattern for
modeling complex data structures. They use a common property as the
"discriminant" property, which is something all object types in the
union have in common.

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}
```

### Index Types

Index types allow you to iterate through the keys of an object type,
providing a way to check types dynamically. They are particularly useful
when you want to map types:

```typescript
const dictionary: { [key: string]: string } = {
  apple: "fruit",
  carrot: "vegetable",
};

function getValue(key: string): string {
  return dictionary[key];
}
```

### Conditional Types

Conditional types enable developers to express non-uniform type mappings
which rely on the condition expressed in a
`T extends U ? X : Y` form:

```typescript
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // 'yes'
type B = IsString<number>; // 'no'
```

These advanced types provide a robust mechanism for tailoring your
type definitions even further, allowing more refined control over what
is possible within your TypeScript applications.

## 10. TypeScript Module Augmentation

Module augmentation is a feature in TypeScript that allows you to extend
modules that have been declared. This can be extremely powerful when
dealing with third-party libraries that you want to extend while ensuring
your code stays organized and manageable.

### When to Use Module Augmentation

1. **Extending Existing Modules:** Add additional features or properties
   to methods within third-party libraries without altering the original
   source code.

2. **Improving Library Typings:** Enhance or overwrite the typings of
   a module to better align with your specific use cases.

### How to Perform Module Augmentation

Module augmentation is easy to achieve in TypeScript. Here’s a basic
step-by-step guide:

#### Step 1: Re-open the Module

You can augment a module by reopening it. This involves declaring the
module again and adding additional functionality to it.

Example:

```typescript
// Assume this is a third-party module named "my-module"
// Original Code in my-module
export function greet(name: string): string {
  return `Hello ${name}`;
}
```

#### Step 2: Augment the Module

Now, you can reopen the module and add custom logic or types.

```typescript
// Our Code to augment 'my-module'
declare module "my-module" {
  export function farewell(name: string): string;
}

greet("John");
farewell("John"); // After augmentation, can be added.
```

#### Important Notes

- Ensure you have proper module paths when declaring a module to augment.
- Be careful to avoid potential conflicts with the existing module
  declarations in your project.

### Conclusion

TypeScript's module augmentation feature is highly useful for adapting
third-party libraries to better suit your needs without modifying the
original library files. This capability ensures flexibility and
extensibility in TypeScript projects, especially in large-scale
development scenarios. Apply module augmentation wisely to enhance your
application's capabilities while maintaining type safety.

## 11. TypeScript Conditional Types

TypeScript offers a powerful way to create types based on conditions.
Conditional types enable you to select different types depending on a
condition being met. This is similar to an if/else expression in the
context of types.

```typescript
type Check<T> = T extends string ? boolean : number;
```

In this example, the type `Check<T>` will evaluate to `boolean` if `T`
is a `string`, and `number` otherwise. You can use conditional types
to create versatile and robust type definitions that adapt to
different scenarios.

### Distributive Conditional Types

When conditional types are applied to a union type, they become
distributive. This means they will be applied to each member of the
union individually.

```typescript
type ExtractString<T> = T extends string ? string : never;
type Result = ExtractString<string | number>; // string | never
```

Here, `Result` will resolve to `string` since the `ExtractString`
type only preserves the `string` type from the union.

### Practical Use Case

Conditional types become particularly useful when combined with
utility types or when writing libraries that need to adapt to different
types dynamically. They help in creating APIs that are type-safe and
flexible.

Conditional types are an advanced feature in TypeScript, enhancing its
capabilities to dynamically resolve types based on conditions. Mastering
them can significantly improve how type-safe your TypeScript code can
become in complex scenarios.

## 12. TypeScript Advanced Functions

In TypeScript, functions can be more than simple inputs and outputs.
They can be designed to be flexible and robust, taking advantage of
TypeScript's type system. This article explores some advanced
techniques to take full advantage of TypeScript's capabilities
when working with functions.

### Function Overloading

Function overloading is a feature that allows you to provide multiple
function signatures for a single function. This means you can define
multiple ways a function can be called, with different arguments. The
basic syntax for function overloading is:

```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
```

In this example, two overload signatures are defined, allowing the
`add` function to handle both numbers and strings. The implementation
signature includes the actual logic.

### Optional and Default Parameters

TypeScript allows you to define optional parameters and set default
values for parameters in functions. An optional parameter is specified
with a `?`, and default parameters are assigned with an equal sign `=`.

```typescript
function greet(name?: string, greeting: string = "Hello") {
  console.log(`${greeting}, ${name || "Guest"}`);
}

greet(); // Outputs: "Hello, Guest"
greet("John"); // Outputs: "Hello, John"
greet("Jane", "Hi"); // Outputs: "Hi, Jane"
```

Here, `name` is an optional parameter, and `greeting` has a default
value of "Hello".

### Rest Parameters

Rest parameters allow a function to accept a variable number of
arguments. In TypeScript, this is useful when creating functions
that can work with multiple inputs.

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(10, 20, 30, 40)); // Outputs: 100
```

This `sum` function can accept any number of numeric arguments,
making it versatile.

### Conclusion

Understanding these advanced function features in TypeScript can
greatly enhance your ability to develop scalable and maintainable
code. These tools allow you to write more expressive and flexible
functions that can accommodate a wide range of use cases in your
applications.

## 13. TypeScript keyof and Lookup Types

In this article, we will dive deeper into some of the advanced
features of TypeScript: the `keyof` and lookup types.
These features help in creating flexible and type-safe code.

### `keyof` Operator

The `keyof` operator is used to create a union of string
literal types from the keys of an object type. If you have
an interface or type with certain keys, `keyof` allows you
to extract those keys into a type.

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

// `UserKeys` becomes "id" | "name" | "email"
type UserKeys = keyof User;
```

### Lookup Types

Lookup types, also referred to as "indexed access types,"
allow you to extract a property type from another type using
its key.

```typescript
interface Person {
  age: number;
  address: string;
}

// `PersonAge` is of type `number`
type PersonAge = Person["age"];
```

#### Combining `keyof` with Lookup Types

You can combine `keyof` with lookup types to ensure a certain
key exists in an object type and get its type.

```typescript
type PropertyType<T, K extends keyof T> = T[K];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Alice", email: "alice@example.com" };
const userId = getProperty(user, "id"); // Type `number`
```

### Practical Use Case

Using `keyof` and lookup types allows developers to create flexible
functions or utilities that can work with a variety of object types.
It ensures compile-time safety and reduces the risk of runtime errors.

Overall, the `keyof` and lookup types enhance the robustness and
expressiveness of TypeScript, making it a powerful tool for
JavaScript developers aiming for reliability and maintainability
in complex applications.

## 14. TypeScript Template Literal Types

Template literal types are a powerful addition to TypeScript that
allow you to create complex type constructs by combining string
literal types with template literals, similar to JavaScript's
string template literals. This feature enables more dynamic type
expressions and helps in defining complex APIs.

```typescript
// Basic usage of template literal types

// Define string literal types
type World = "world";

// Combine using template literals
type Greeting = `Hello, ${World}`;

// A variable of type Greeting
const greet: Greeting = "Hello, world";
```

### Features of Template Literal Types

1. **Combination of Literal Types**:

   - You can combine existing string literal types to create new
     ones using template literals.

2. **Dynamic String Construction**:

   - This allows more flexible and parameterized type creation.

3. **Inference on Template Literals**:
   - TypeScript can infer types based on the structure of template
     literals.

### Practical Use Cases

- **Validating APIs**: Creating types that match certain patterns
  for function arguments or configuration settings.
- **Complex Types**: Construct complex types in scenarios where
  dynamic construction of strings is required.

### Example: Pattern Matching with Template Literal Types

```typescript
// Define a pattern-based type

// Possible sizes of T-shirt
type ShirtSize = "small" | "medium" | "large";

// Construct a type for available shirts
type AvailableShirt = `T-shirt-${ShirtSize}`;

// Example usage
const myShirt: AvailableShirt = "T-shirt-medium";
```

In summary, template literal types extend TypeScript's capability
to enforce and validate complex string patterns at compile time,
aiding in the creation of robust, type-safe code bases.

## 15. TypeScript Symbols

In TypeScript, symbols are a unique and immutable data type that can be
used to create private-like properties within objects. They were
introduced in ECMAScript 6 (ES6) and act as unique identifiers for
object properties, ensuring no name collisions occur, even when used
across libraries and programs.

Symbols are created using the `Symbol` function:

```typescript
const mySymbol = Symbol("optional description");
```

The description is optional and is only used for debugging purposes.

### Properties and Uses of Symbols

1.  **Uniqueness**: Each symbol is unique and different from any other
    symbol, even if they have the same description.

        ```typescript
        Symbol('key') === Symbol('key'); // false
        ```

2.  **Immutability**: Once a symbol is created, it's immutable.

3.  **As Object Keys**: Symbols can be used as keys for object
    properties, which allows for non-string keys.

        ```typescript
        const obj = {
          [mySymbol]: 'value',
        };
        console.log(obj[mySymbol]); // 'value'
        ```

Symbols are not enumerated in for-in or for-of loops, nor in
`Object.keys()`, `Object.getOwnPropertyNames()`, and similar methods.
However, they can be accessed using `Object.getOwnPropertySymbols()`
or `Reflect.ownKeys()`.

### Symbol.for() and Symbol.keyFor()

TypeScript provides a way to create global symbols that are shared
between files. This is achieved using `Symbol.for()` and `Symbol.keyFor()`.

- **`Symbol.for(key: string)`**: Checks for the existence of a symbol with
  a given key in the global symbol registry. If found, returns it;
  otherwise, creates a new symbol.

      ```typescript
      const globalSymbol = Symbol.for('sharedKey');
      const sameGlobalSymbol = Symbol.for('sharedKey');
      console.log(globalSymbol === sameGlobalSymbol); // true
      ```

- **`Symbol.keyFor(symbol: symbol)`**: Returns the key associated with a
  global symbol, provided it exists in the global symbol registry.

      ```typescript
      const key = Symbol.keyFor(globalSymbol); // 'sharedKey'
      ```

Symbols add a layer of assurance for property uniqueness and provide a
mechansim to define non-enumerable properties on objects.

## 16. TypeScript Iterators and Generators

Iterators and generators are important aspects of JavaScript that are
supported in TypeScript and allow you to iterate over data structures
like arrays, maps, and sets. They provide more control over the
iteration process, and understanding them is essential for more
advanced TypeScript development.

### Iterators

An iterator is an object which defines a sequence and potentially a
return value upon its termination. An iterator implements a `next`
method which returns an object with properties: `value` and `done`.
The `value` property is the value yielded by the iterator and `done`
is a boolean flag indicating whether the iteration is done.

```typescript
type IterableType = number[];

function makeIterator(array: IterableType) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { value: undefined, done: true };
    },
  };
}

let myArray = [1, 2, 3];
let it = makeIterator(myArray);
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3
```

### Generators

Generators simplify the creation of iterables. A generator is a
special type of function that can pause execution and resume at a
later point. Generators are defined using the function\* syntax.

```typescript
function* generatorFunction(): IterableIterator<number> {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generatorFunction();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
```

#### Key Points

- Use generators for cleaner and more expressive code when creating
  iterables.
- Generators can maintain state between subsequent calls.

Understanding and using iterators and generators allows for creating
more efficient and readable code. Combined with TypeScript's type
system, you can have type-safe iterators and generators for a more
robust application design.

## 17. TypeScript JSX and React

TypeScript enhances the development of React applications by providing
static typing capabilities. This ensures better code quality, especially
in complex React projects. React uses JSX, a syntax extension that allows
you to write HTML elements within JavaScript code, and TypeScript
integrates this seamlessly. Let's explore how TypeScript manages
JSX and works with React.

### Setting Up TypeScript with React

To use TypeScript with React, you need to set up your project
accordingly, often with a tool like Create React App, which supports
TypeScript by adding the `--template typescript` option. Ensure that
your `tsconfig.json` file is properly configured by setting the compiler
options to recognize React's JSX by specifying the JSX setting as
`"react"` or `"react-jsx"`.

```json
{
  "compilerOptions": {
    "jsx": "react",
    "moduleResolution": "node",
    "target": "es5",
    "lib": ["dom", "esnext"],
    "allowSyntheticDefaultImports": true
  }
}
```

### TypeScript and React Components

React components can be written as classes or functions. With TypeScript,
you can add types to props and state (for class components) to ensure
type safety.

#### Functional Components

Use the `React.FC` type to specify a React functional component.

```typescript
import React from 'react';

interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
```

#### Class Components

For class-based components, use generics to type props and state.

```typescript
import React, { Component } from 'react';

interface MyComponentProps {
  title: string;
}

interface MyComponentState {
  count: number;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
  state: MyComponentState = { count: 0 };

  render() {
    return <h1>{this.props.title}: {this.state.count}</h1>;
  }
}
```

### Handling Events

TypeScript provides specific types for handling events in React.
For instance, `React.ChangeEvent<HTMLInputElement>` can be used to
properly type a form event.

```typescript
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
```

### Conclusion

By integrating JSX and React with TypeScript, developers can harness the
power of static typing to catch errors early, write more readable code,
and create robust React applications. In doing so, the combination of
TypeScript and React becomes a powerful tool in modern web development.

## 18. TypeScript Mixins

TypeScript mixins provide a powerful mechanism to achieve multiple
inheritance or reuse class functionality in a more flexible manner.
Traditionally, JavaScript doesn't support multiple inheritance directly;
this limitation is elegantly addressed through mixins.

### What are Mixins?

Mixins are a way to compose classes from reusable component classes.
Instead of inheriting from one single base class, a class can be created
by mixing in behavior from multiple reusable classes. This can help to
avoid complex hierarchies and enhance modularity and reusability of code.

### How to Implement Mixins in TypeScript

To implement mixins in TypeScript, a base class is formed with multiple
additional reusable classes. A common pattern involves using an Object
.assign() that extends the prototype of the base class with the methods
of the mixins.

```typescript
class Disposable {
  isDisposed: boolean = false;
  dispose() {
    this.isDisposed = true;
  }
}

class Activatable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

class SmartObject implements Disposable, Activatable {
  isDisposed: boolean = false;
  dispose: () => void;
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;

  constructor() {
    setInterval(
      () => console.log(this.isActive + " : " + this.isDisposed),
      500,
    );
  }
}

applyMixins(SmartObject, [Disposable, Activatable]);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
```

In this example, `SmartObject` is a composite class that incorporates
the behaviors of both `Disposable` and `Activatable` using the
`applyMixins` utility function.

### Limitations

1. **Name Collisions**: Methods or properties with the same names can
   lead to conflicts.
2. **Design Complexity**: Using mixins can sometimes make the codebase
   harder to follow, as the relationships between classes might not be
   self-evident.

### Conclusion

Mixins offer a flexible way to include behaviors across classes,
helping to keep code DRY (Don't Repeat Yourself) and modular. However,
care should be taken to avoid design complexity and ensure clarity in
codebase.

## 19. TypeScript Reflection

Reflection is a powerful programming concept that enables a program to
examine and modify its own structure and behavior at runtime. In TypeScript,
reflection is not as native as in some other languages, like Java, but it can
be achieved using certain techniques, libraries, and TypeScript's type
system.

Reflection is particularly useful for scenarios like:

- **Serialization/Deserialization:** Automatically converting an object to a
  data format and vice versa.
- **Dependency Injection:** Dynamically injecting dependencies into
  components.
- **Aspect-Oriented Programming:** Implementing cross-cutting concerns
  systematically without a direct impact on business logic.

### Implementing Reflection in TypeScript

#### Using `Reflect` API

The `Reflect` API provides functionalities to perform meta-level operations.
While it's part of ECMAScript, it offers a reflection-oriented approach:

```typescript
class Example {
  greet() {
    console.log("Hello World");
  }
}

const example = Reflect.construct(Example, []);
Reflect.apply(example.greet, example, []);
```

#### Metadata Reflection API

TypeScript's `reflect-metadata` library allows capturing metadata about
entities such as classes and methods.

1. **Install the library:**

   ```bash
   npm install reflect-metadata --save
   ```

2. **Usage:**

   ```typescript
   import "reflect-metadata";

   function logType(target: any, key: string) {
     const type = Reflect.getMetadata("design:type", target, key);
     console.log(`Type of ${key} is ${type.name}`);
   }

   class ReflectionExample {
     @logType
     someValue: string;
   }
   ```

   This captures and logs the type metadata of class properties.

#### Limitations and Considerations

- **Compile Time vs Runtime:** TypeScript primarily offers compile-time
  checks, while reflection often involves runtime metadata manipulation.
- **Performance:** Reflection can introduce overhead due to runtime
  processing, so it should be used judiciously.
- **Security Risks:** Tampering with object properties and methods at
  runtime can be risky; it can accidentally lead to exposing private
  details.

TypeScript reflection, though indirect, offers powerful tools for creating
sophisticated applications. Understanding how to leverage the `Reflect` API
and metadata can help developers harness the full potential of TypeScript in
building dynamic, adaptable systems.

## 20. TypeScript Compiler APIs

TypeScript provides powerful compiler APIs that allow developers to interact
with TypeScript code programmatically. These APIs enable a vast range of
tasks, such as creating custom linters, transpilers, code transformation
tools, and more. In this article, we'll explore the basics of working with
TypeScript Compiler APIs.

### Accessing the Compiler APIs

To get started with the TypeScript Compiler APIs, you'll need to have
TypeScript installed. You can access the APIs via the `typescript` module
by importing `typescript` in your JavaScript/TypeScript file:

```typescript
import * as ts from "typescript";
```

With the `typescript` module imported, you're ready to use its various
exports to interact with the code.

### Program Creation

One of the main entry points into the TypeScript Compiler API is creating
a `Program` object. A `Program` represents a compilation of the source
files and is used to access the AST (Abstract Syntax Tree) for the source
files.

Here's an example:

```typescript
const program = ts.createProgram(["file.ts"], {});
```

This creates a simple `Program` that includes `file.ts` with default
compiler options.

### Navigating the Abstract Syntax Tree

Once you've created a `Program`, you can get the SourceFile object, which
represents the parsed AST of a file.

```typescript
const sourceFile = program.getSourceFile("file.ts");
```

You can then navigate the AST using visitor functions. Visitors allow you
to traverse the nodes of the AST, reacting to different node types as
you encounter them.

```typescript
function visit(node: ts.Node) {
  if (ts.isFunctionDeclaration(node)) {
    console.log(`Function name: ${node.name?.text}`);
  }
  ts.forEachChild(node, visit);
}

if (sourceFile) {
  visit(sourceFile);
}
```

In this example, the visitor function logs the names of all the functions
defined in the source file.

### Transforming Code

The Compiler APIs can be used to transform TypeScript code. Here's a simple
example of a transformation that renames all identifiers with the name
`oldName` to `newName`.

```typescript
function transformer<T extends ts.Node>() {
  return (context: ts.TransformationContext) => {
    const visit: ts.Visitor = (node) => {
      if (ts.isIdentifier(node) && node.text === "oldName") {
        return ts.createIdentifier("newName");
      }
      return ts.visitEachChild(node, visit, context);
    };
    return (node: T) => ts.visitNode(node, visit);
  };
}

const result = ts.transform(sourceFile, [transformer()]);
```

### Emitting Code

After transformations are done, you can emit the final JavaScript code
using the `emit` method on a `Program` object:

```typescript
program.emit();
```

This will save the emitted JavaScript code to the output files specified
by the compiler options.

### Conclusion

The TypeScript Compiler APIs offer a robust platform for creating
sophisticated developer tools. By gaining an understanding of these
APIs, you can automate complex tasks and gain more control over how
TypeScript handles your code. With this foundation, you can dive deeper
into more complex applications and make the most of TypeScript's
sophisticated type system and compiler.
