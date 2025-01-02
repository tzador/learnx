# Advanced TypeScript

- [01. Introduction to Advanced TypeScript](#01-introduction-to-advanced-typescript)
- [02. Type Aliases and Interfaces](#02-type-aliases-and-interfaces)
- [03. Generics in TypeScript](#03-generics-in-typescript)
- [04. Intersection and Union Types](#04-intersection-and-union-types)
- [05. Type Guards and Type Narrowing](#05-type-guards-and-type-narrowing)
- [06. Advanced Types: Mapped Types](#06-advanced-types-mapped-types)
- [07. Utility Types in TypeScript](#07-utility-types-in-typescript)
- [08. Decorators in TypeScript](#08-decorators-in-typescript)
- [09. Modules and Namespaces](#09-modules-and-namespaces)
- [10. Advanced TypeScript: Mixins](#10-advanced-typescript-mixins)
- [11. Type Inference and Contextual Typing](#11-type-inference-and-contextual-typing)
- [12. Advanced Function Types](#12-advanced-function-types)
- [13. Conditional Types in TypeScript](#13-conditional-types-in-typescript)
- [14. Template Literal Types in TypeScript](#14-template-literal-types-in-typescript)
- [15. Recursive Types in TypeScript](#15-recursive-types-in-typescript)
- [16. Advanced TypeScript: Symbol and Unique Symbol](#16-advanced-typescript-symbol-and-unique-symbol)
- [17. Advanced TypeScript: Declaration Merging](#17-advanced-typescript-declaration-merging)
- [18. Advanced TypeScript: Type Manipulation with TypeScript](#18-advanced-typescript-type-manipulation-with-typescript)
- [19. Advanced TypeScript: Type Compatibility and Assignability](#19-advanced-typescript-type-compatibility-and-assignability)
- [20. Advanced TypeScript: Exploring Type-Driven Development](#20-advanced-typescript-exploring-type-driven-development)

## 01. Introduction to Advanced TypeScript

Welcome to the world of Advanced TypeScript! If you're reading this, it 
means you're ready to take your TypeScript skills to the next level. 
TypeScript is a powerful superset of JavaScript that brings static typing 
and advanced language features to the JavaScript ecosystem.

### Why Learn Advanced TypeScript?

As your applications grow, so does the complexity of managing types and ensuring 
robustness. Advanced TypeScript offers tools and concepts such as generics, 
type guards, decorators, and more, to help you write cleaner, more maintainable, 
and scalable code.

### What to Expect?

In this series, we will dive deep into the advanced features of TypeScript 
and explore how they can help you:

- Enhance code reliability by leveraging static types.
- Improve code readability and reusability with advanced type features.
- Incorporate design patterns effectively.
- Interact seamlessly with complex APIs.
- Optimize code maintainability across large teams and projects.

Let's embark on this journey through the intricacies of TypeScript together!
Stay tuned for our next article, where we'll explore TypeScript's 
core types and how to leverage them effectively.

## 02. Type Aliases and Interfaces

In TypeScript, understanding how to utilize type aliases and interfaces 
is vital for code organization and readability. While they are similar, 
each has unique features that can be leveraged based on specific needs.

### Type Aliases

Type aliases allow you to create a new name for a type. They can be used 
to name primitives, unions, tuples, and any other types.

```typescript
type ID = number | string;

function printId(id: ID) {
  console.log("ID: " + id);
}
```

This example demonstrates defining a type alias `ID` that can be a 
`number` or a `string`.

#### When to Use Type Aliases

- For complex types, type aliases can simplify the code 
  by giving them meaningful names.
- They are particularly useful for union and intersection types.
- With type aliases, you can have more flexibility in composing types.

### Interfaces

Interfaces are another way to name and define structures. They are most 
commonly used for defining object shapes, and can be extended, enabling 
duplicate free code and easier maintenance.

```typescript
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Alice"
};
```

Unlike type aliases, interfaces can be merged which offers a powerful 
way for building up the shape of an object gradually.

#### When to Use Interfaces

- Use interfaces when you expect an object's shape to be extended 
  in different parts of the code.
- They are ideal when dealing with objects, as they provide the ability 
  to define methods and properties.
- Choose interfaces to take advantage of declaration merging.

### Key Differences

- Interfaces create a new named type, a unique feature when it comes 
  to dealing with class declaration.
- Type aliases can't be reopened to add new properties, whereas 
  interfaces are open to extension.

By mastering the distinctions and use cases between type aliases 
and interfaces, you ensure cleaner and more maintainable TypeScript code.

## 03. Generics in TypeScript

Generics are a powerful and flexible feature in TypeScript that allow you to 
create reusable code components. They're like functions for types where you 
can pass types as parameters. This is especially useful for creating data 
structures, like lists or trees, where you need to define the type of data 
in a flexible way.

### Why Use Generics?

Consider a function to return the first element of an array:

```typescript
type FirstElement = (arr: any[]) => any;

const getFirstElement: FirstElement = (arr) => arr[0];
```

While this works, it loses type safety since it returns any. Generics allow 
us to preserve the type of the elements:

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

Using `<T>`, we declare a generic type. This makes `getFirstElement` 
more type-safe and reusable.

### Generic Classes

Generics can also be used in classes. Here's a simple example:

```typescript
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
  getValue(): T {
    return this.contents;
  }
}
```

You can create instances of `Box` with specific types:

```typescript
const stringBox = new Box<string>("Hello");
const numberBox = new Box<number>(42);
```

### Conclusion

Generics allow you to create flexible, type-safe classes and functions. They 
are a cornerstone of advanced TypeScript programming, enabling reusable, 
scalable, and maintainable code.

Generics are foundational for understanding other advanced topics such as 
mapped types and conditional types, which we'll cover in subsequent articles.

## 04. Intersection and Union Types

In TypeScript, understanding the concepts of intersection and union
  types is essential for working with complex data structures. It's about
  combining and managing multiple types efficiently.

### Union Types

A union type refers to a variable that can hold multiple different types.
They are defined using the pipe `|` operator:

```typescript
let value: string | number;
value = 'hello'; // valid
value = 123;    // valid
```

Union types are useful when a value naturally could be one of several types.

### Intersection Types

Intersection types are used to combine multiple types into one. They are
created using the `&` operator:

```typescript
type Person = { name: string };
type Employee = { salary: number };
type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: 'Alice',
  salary: 50000
};
```

Intersection types are useful for modeling objects that shared properties
from multiple sources.

### Practical Examples

When working with APIs, often data might come in different forms. Union
and intersection types help manage the possible shapes and combinations
of data effectively:

```typescript
function processInput(input: string | number) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toFixed(2));
  }
}

function combine(person: Person, employee: Employee): EmployeeDetails {
  return { ...person, ...employee };
}
```

In the first function, `processInput`, the input can either be a string
or a number, and we process it accordingly. In `combine`, we merge types
`Person` and `Employee` into an `EmployeeDetails`. These examples show
how flexible and powerful TypeScript can be in managing diverse data
types and structures.

## 05. Type Guards and Type Narrowing

TypeScript provides powerful tools for type safety, among them are type
guards and type narrowing. These help ensure that at runtime, the values
match the expected types, making your code safer and easier to debug.

### Type Guards

Type guards are expressions used to perform runtime checks that ensure a
variable is of a specific type. They are integral to narrowing down
possible types and clarify the flow within conditional blocks.

#### Using `typeof`

The `typeof` operator can be used to create type guards for primitive
types like `string`, `number`, and `boolean`.

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("Your ID: " + id.toUpperCase());
  } else {
    console.log("Your ID: " + id);
  }
}
```

#### Using `instanceof`

The `instanceof` operator is useful for determining the type of objects,
whether they belong to specific classes or not.

```typescript
class Dog {}
class Cat {}

function isDog(pet: Dog | Cat): boolean {
  return pet instanceof Dog;
}
```

### User-defined Type Guards

You can define custom guards using predicates. This involves implementing
a function that returns a boolean value and has a return type of `param is
Type`.

```typescript
function isString(value: any): value is string {
  return typeof value === "string";
}

function example(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

### Type Narrowing

Type narrowing is the process of refining the type of a variable within a
block, using type guards or control flow constructs. This feature enables
smart detection of those types by TypeScript, allowing safer code. It
detects impossible branches and reduces potential runtime errors.

```typescript
function padLeft(value: string, padding: number | string) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
}
```

Type guards and type narrowing enhance TypeScript’s ability, effectively
minimizing errors by ensuring that only correct types are allowed in
certain code blocks. This epitomizes TypeScript’s strong adaptability in
everyday programming scenarios.

## 06. Advanced Types: Mapped Types

Mapped types are one of TypeScript's advanced features that allow you 
to create new types based on existing ones by transforming their keys.
They enable you to iterate over the properties of a type, creating a 
new type by applying some transformation to each property.

### Overview

To create a mapped type, TypeScript provides a built-in construct that 
looks like this:

```typescript
type MappedType<T> = {
  [K in keyof T]: SomeTransformation<T[K]>;
};
```

- `keyof T` extracts the keys of type `T`.
- `[K in keyof T]` iterates over each key of `T`.
- `SomeTransformation<T[K]>` transforms each property type
  using the logic you provide.

### Examples

Consider an example with a basic type:

```typescript
type User = {
  id: number;
  name: string;
  age: number;
};

// Create a readonly version of User:
type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};
```

In this example, `ReadOnlyUser` is a mapped type based on `User`, 
where all properties are changed to be `readonly`.

### Utility Types

TypeScript provides several utility types utilizing mapped types:

- `Readonly<T>`: Transforms all properties of `T` to `readonly`.
- `Partial<T>`: Marks all properties of `T` as optional.
- `Required<T>`: Removes optional flags from properties of `T`.

### Conditional Mapped Types

Mapped types can also leverage conditional types to create complex 
transformations:

```typescript
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

In this example, `Nullable` is a mapped type that transforms each 
property to be `nullable`, allowing its value to be either the original
type or `null`.

Mapped types are powerful tools for defining flexible and reusable
type transformations, integral to advanced TypeScript programming.

## 07. Utility Types in TypeScript

Utility types in TypeScript offer predefined types to facilitate common 
transformations. By leveraging utility types, developers can save time 
and improve code readability. These include features like altering 
property types or making properties optional.

### Common Utility Types

#### 1. Partial<T>

`Partial<T>` constructs a type with all properties from type `T` set to 
optional. It is often used for updating objects when only a subset of 
fields might be provided.

#### 2. Readonly<T>

`Readonly<T>` creates a type with all properties from type `T` set to 
readonly, preventing any modification post-creation.

#### 3. Record<K, T>

`Record<K, T>` builds an object type where every key `K` of a property 
is of type `T`. This is useful when you need a dictionary-like object.

#### 4. Pick<T, K>

`Pick<T, K>` constructs a type by selecting a subset of properties `K` 
from type `T`, which simplifies creating more granular types from larger 
objects.

#### 5. Omit<T, K>

`Omit<T, K>` is the inverse of `Pick`, allowing you to create a type 
that excludes a certain set of properties `K` from type `T`.

### Using Utility Types

These types can drastically reduce boilerplate and enhance TypeScript 
capabilities. Here’s a sample implementation using `Partial<T>`:

```typescript
type User = {
  name: string;
  age: number;
  email: string;
};

function updateUser(id: string, newUserData: Partial<User>) {
  // Implementation here
}
```

By understanding and applying these robust utility types, TypeScript 
users can craft more expressive, flexible, and maintainable code. 

Closing thoughts: Utility types are essential tools that allow 
TypeScript developers to manipulate and transform types effectively, 
addressing varied development needs effortlessly.

## 08. Decorators in TypeScript

Decorators are a powerful feature in TypeScript, introduced as a way to add
annotations and a meta-programming syntax for classes and functions. They
allow developers to modify the behavior of classes or members of a class.
Decorators are often used in frameworks like Angular and React.

### Introduction to Decorators

A decorator is a special kind of declaration that can be attached to a class
deceleration, method, accessor, property, or parameter. Decorators use the
`@expression` syntax, where `expression` is a function that will be called at
design time.

```typescript
function MyDecorator(target: any) {
  // Decorator logic
}

@MyDecorator
class MyClass {
  // Class logic
}
```

In the example above, `MyDecorator` will be called when `MyClass` is defined,
with `MyClass` as the argument.

### Types of Decorators

There are several types of decorators:

- **Class Decorators**: Applied to class constructors and can be used to
  observe, modify, or replace a class definition.

  ```typescript
  function Logging(target: Function) {
    console.log("Logging: ", target);
  }

  @Logging
  class Student {
    constructor() {
      console.log("Creating an instance of Student");
    }
  }
  ```

- **Method Decorators**: Applied to methods and can be used to modify method
definitions or observe method execution.

  ```typescript
  function Log(target: Object, propertyKey: string, description: PropertyDescriptor) {
    console.log(`Method Decorator for: ${propertyKey}`);
  }

  class Teacher {
    @Log
    teach() {
      console.log("Teaching an advanced topic");
    }
  }
  ```

- **Accessor Decorators**: Used on accessors.

- **Property Decorators**: Used on properties.

- **Parameter Decorators**: Applied to method parameters.

## 09. Modules and Namespaces

In advanced TypeScript, organizing your code efficiently becomes crucial.
Modules and namespaces are two primary ways to manage and structure code.

### Modules

Modules are a way to structure code using ES6 module syntax, introduced in
ES6 JavaScript. They enable developers to break down complex systems
into smaller, manageable files.

- **Export:** Use the `export` keyword to make a component available
  outside of the module.
  ```typescript
  // file: mathUtils.ts
  export function add(x: number, y: number): number {
    return x + y;
  }
  ```
- **Import:** Use the `import` keyword to bring components from other
  modules.
  ```typescript
  // file: calculator.ts
  import { add } from './mathUtils';
  console.log(add(3, 4));
  ```

Modules provide clear import and export mechanisms, making a project
scalable and easier to maintain.

### Namespaces

Namespaces, formerly known as internal or "feather" modules, are a way
to organize code in TypeScript uniquely. They are mainly used for legacy
code which does not rely on external module systems.

- **Declare Namespace:**
  ```typescript
  namespace Geometry {
    export function area(radius: number): number {
      return Math.PI * radius * radius;
    }
  }
  console.log(Geometry.area(5));
  ```
Namespaces wrap code, making it available in a larger context without
external imports and exports.

While modules are a preferred choice in modern TypeScript with a better
alignment with JavaScript standards, namespaces can be useful when
working with older codebases or frameworks.

Understanding when and how to use modules and namespaces can enhance the
modularity and effectiveness of TypeScript codebases. In the next
article, we'll explore how to leverage JSX with TypeScript for building
rich user interfaces with React.

## 10. Advanced TypeScript: Mixins

Mixins are an advanced programming concept used to add behaviors or properties to
classes. In TypeScript, mixins provide a flexible mechanism to realize multiple
inheritance, allowing developers to combine behaviors from multiple sources.

### Basic Mixin Pattern

A mixin in TypeScript takes the form of a function that accepts a class as its
parameter and extends it. Here’s a simple example to illustrate:

```typescript
type Constructor<T = {}> = new (...args: any[]) => T;

function Jumpable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    jump() {
      console.log("Jumping");
    }
  };
}

class Animal {
  move() {
    console.log("Moving");
  }
}

const JumpingAnimal = Jumpable(Animal);

const jumpingAnimal = new JumpingAnimal();
jumpingAnimal.move(); // Output: Moving
jumpingAnimal.jump(); // Output: Jumping
```

In this example, a new class `JumpingAnimal` is created using the `Jumpable`
function, which adds a `jump` method to the `Animal` class.

### Combining Multiple Mixins

You can also use multiple mixins to compose a class that possesses abilities
from various source classes.

```typescript
function Swimmable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    swim() {
      console.log("Swimming");
    }
  };
}

const JumpingSwimmingAnimal = Swimmable(Jumpable(Animal));

const animal = new JumpingSwimmingAnimal();
animal.move(); // Output: Moving
animal.jump(); // Output: Jumping
animal.swim(); // Output: Swimming
```

Here, the `Jumpable` and `Swimmable` mixins are used together to create an
animal class that can both jump and swim.

### Using Interfaces with Mixins

Mixins can require certain properties or methods to be implemented in the
base class. In such cases, the base class can implement an interface to
ensure the presence of those members.

```typescript
interface Flyable {
  fly(): void;
}

function Flying<TBase extends Constructor<Flyable>>(Base: TBase) {
  return class extends Base {
    fly() {
      console.log("Flying");
    }
  };
}

class Bird implements Flyable {
  fly() {
    console.log("Bird is flying");
  }
}

const FlyingBird = Flying(Bird);

const bird = new FlyingBird();
bird.fly(); // Output: Bird is flying
```

In conclusion, mixins offer a powerful way to compose classes in TypeScript,
allowing for cleaner and more organized code when dealing with shared
functionality or behaviors.

## 11. Type Inference and Contextual Typing

TypeScript provides powerful type inference, which allows the 
compiler to determine the type of a value based on how it is used. 
This reduces the need for explicit type annotations and can make code 
more readable and concise.

### Basic Type Inference

Basic type inference occurs when initializing variables and setting 
default parameter values. For example:

```typescript
let count = 5; // Inferred as number
```

In this example, TypeScript infers the type of `count` based on the 
assigned value.

### Contextual Typing

Contextual typing occurs when the type of an expression is inferred 
from its context, such as when passing a function as an argument or 
assigning to variables. Consider the following:

```typescript
let greet = (message: string) => console.log(message);
```

When you use `greet`, TypeScript knows the `message` must be a 
string due to the function signature.

### Best Practices

1. **Use Inference Wisely**: While TypeScript is good at inferring 
types, there are scenarios where explicit types are more beneficial for 
code clarity especially in complex expressions.

2. **Consider the Context**: Make sure the inference context is clear 
and precise, especially when using callbacks and higher-order functions.

3. **Verify Inferred Types**: Use TypeScript tools and IDE hints to 
verify that the inferred types match your intentions.

## 12. Advanced Function Types

In TypeScript, functions can be more than simple routines. They can be
manipulated in a variety of advanced ways to improve code efficiency,
readability, and maintainability. This includes understanding function
overloads, higher-order functions, and currying.

### Function Overloads

Function overloads allow a single function to handle different types of
parameters. This enables better type safety and more readable code.
Here's a simple example of how you can define function overloads in
TypeScript:

```typescript
type CustomType = string | number;

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: CustomType, y: CustomType): CustomType {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  throw new Error('Invalid types');
}
```

### Higher-Order Functions

Higher-order functions are functions that take other functions as
arguments or return functions. They are essential for functional
programming patterns like map, filter, and reduce.

- **Map Example**:
  ```typescript
  function mapArray(numbers: number[], transform: (val: number) => number):
  number[] {
    return numbers.map(transform);
  }
  const doubled = mapArray([1, 2, 3], (x) => x * 2);
  // doubled is [2, 4, 6]
  ```

### Currying

Currying is a functional programming technique where a function with
multiple arguments is broken down into a series of functions, each with
a single argument. This allows partial application of functions.

- **Example**:
  ```typescript
  function multiply(a: number): (b: number) => number {
    return (b: number) => a * b;
  }
  const double = multiply(2);
  console.log(double(3));  // Outputs 6
  ```

Understanding these advanced function types in TypeScript can make your
code more robust and flexible, enabling more dynamic and reusable
functions.

## 13. Conditional Types in TypeScript

Conditional types are a powerful feature in TypeScript, providing the ability
for types to be defined based on a condition. This concept allows developers

to model algorithms that require different shapes for different inputs,
making the code more flexible and adaptable.

### Basic Syntax

A conditional type selects one of two possible types based on a condition
expressed as a type relationship test:

```typescript
type SomeType<T> = T extends ConditionType ? TrueType : FalseType;
```

- `T` is the generic type parameter.
- `ConditionType` is the type to check `T` against.
- `TrueType` is the type when the condition is true.
- `FalseType` is the type when the condition is false.

#### Example

```typescript
type IsString<T> = T extends string ? 'string' : 'not string';

const strResult: IsString<string> = 'string'; // Evaluates to 'string'
const numResult: IsString<number> = 'not string'; // Evaluates to 'not string'
```

### Conditional Type Constraints

Conditional types can leverage "distributive conditions" when used in
the context of generic types. This means if the checked type is a union,
TypeScript applies the conditional type separately to each member.

```typescript
type ExcludeNullOrUndefined<T> = T extends null | undefined ? never : T;

type ExampleType = ExcludeNullOrUndefined<string | null | undefined>;
// ExampleType will be 'string'
```

### Infer Keyword

TypeScript's `infer` keyword allows capturing a type "in scope" without
explicitly specifying it, useful within a conditional type to introduce
a new type variable:

```typescript
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function testMethod() {
  return "Hello!";
}

type ReturnTypeOfTestMethod = GetReturnType<typeof testMethod>;
// ReturnTypeOfTestMethod will be 'string'
```

Understanding conditional types and their capabilities in TypeScript provides
an advanced feature set for writing flexible and comprehensive type-safe
code. Using these types effectively allows you to harness TypeScript's
strength in type inference and safety.

## 14. Template Literal Types in TypeScript

Template Literal Types in TypeScript provide a way to work with string
manipulations at the type level. They enable creating new string types
based on patterns that combine fixed parts with variable parts, much
like template literals with actual string values.

### Basics of Template Literal Types

A Template Literal Type is defined similarly to string template
literals, but at the type level. They allow combining literal types
(using `${}` syntax) to produce new string literal types.

```typescript
type World = 'world';
type Greeting = `hello ${World}`; // Produces 'hello world' as a type.
```

### Pattern Matching with Template Literal Types

Template Literal Types can also be used with conditional types to
perform pattern matching.

```typescript
type StartsWithHello<T> = T extends `hello ${infer Rest}` ? true : false;

// Example usage:
const example1: StartsWithHello<'hello world'> = true; // Valid
const example2: StartsWithHello<'goodbye world'> = false; // Valid
```

### Use Cases

1. **Extracting Substrings**: You can infer parts of a string type using
   the `${infer X}` syntax within template literals, which is useful in
   type transformations where you want to extract part of a string.

   ```typescript
   type ExtractWorld<T> = T extends `hello ${infer Rest}` ? Rest : never;
   type Test = ExtractWorld<'hello Typescript world'>; // Results in 'Typescript world'
   ```

2. **Validating String Formats**: You can validate certain patterns,
   ensuring that strings match certain expected formats at compile time.

Template Literal Types increase the power and flexibility of TypeScript
when dealing with string types, allowing type-safe string pattern
matching and manipulation directly in your type definitions. As a
feature, it enhances type safety without sacrificing the flexibility
needed in complex string operations.

## 15. Recursive Types in TypeScript

Recursive types are types that refer to themselves in their definition,
enabling the modeling of complex structures like trees, JSON, or more.
They are especially useful for implementing data structures where a 
node might need a reference to another node of the same type.

#### Example of Recursive Type

An excellent use case for recursive types is representing a tree 
data structure:

```typescript
interface TreeNode {
    value: string;
    children?: TreeNode[]; // An array of TreeNodes
}
```

Here, `TreeNode` has an optional `children` property, consisting of an 
array of `TreeNode` objects, creating a recursive reference. This design 
utilizes TypeScript's ability to express recursive relationships, allowing 
you to define nodes that can have arbitrary depth.

#### Recursive Types and JSON

Recursive types are also helpful in defining complex JSON structures:

```typescript
type JSONValue = string | number | boolean | JSONValue[] | {
    [key: string]: JSONValue;
};
```

This definition allows a `JSONValue` to be any type of value found in JSON 
— primitive types, arrays, or objects — reflecting the recursive nature 
of JSON data structures.

#### Considerations When Using Recursive Types

While recursive types are powerful, they should be used carefully:

- **Complexity**: They can add complexity to your code, making it harder 
  to read and maintain, so use them when they add significant value.
- **Type Inference**: TypeScript's type inference can sometimes struggle 
  with deeply nested recursive structures; developers may need to provide 
  explicit types in such cases.
- **Performance**: Excessively recursive types may affect TypeScript 
  compiler's performance, especially with large codebases or when utilized 
  in conjunction with other advanced types.

Understanding recursive types unlocks powerful ways to express complex 
relationships in TypeScript, improving type safety and expressivity in 
your code.

## 16. Advanced TypeScript: Symbol and Unique Symbol

In this article, we delve into the world of Symbols in TypeScript. 
Symbols are unique and immutable primitive values often used as object 
keys.

### Symbols
Symbols are created using the `Symbol` function. Each symbol is unique, 
even if it has the same description:

```typescript
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false
```

Symbols add a layer of uniqueness to object properties, minimizing the 
risk of property collisions.

### Global Symbols
You can create global symbols using `Symbol.for()` and retrieve them 
using `Symbol.keyFor()`. Global symbols are shared across your entire 
codebase:

```typescript
const sym3 = Symbol.for('globalSymbol');
const sym4 = Symbol.for('globalSymbol');

console.log(sym3 === sym4); // true
console.log(Symbol.keyFor(sym3)); // 'globalSymbol'
```

### Unique Symbols
TypeScript also features unique symbols, created using `const`, ensuring 
TypeScript acknowledges the uniqueness:

```typescript
const uniqueSym: unique symbol = Symbol();
// uniqueSym can only be used as a unique key
```

Unique symbols allow for more precise typing, especially helpful in 
complex APIs.

### Symbols in Class
Symbols can be used as a class method or property keys to secure access:

```typescript
class MyClass {
  private [Symbol('key')]() {
    return 'secret';
  }
}
```

Symbols contribute significantly to the encapsulation and enhancement of 
classes.

In conclusion, symbols offer an advanced mechanism for creating unique 
object keys, supporting better encapsulation and enhancing TypeScript's 
typing capabilities.

## 17. Advanced TypeScript: Declaration Merging

Declaration merging is a feature in TypeScript where the compiler
merges two or more separate declarations with the same name into a
single definition. This can be useful in scenarios where you want to
expand or modify interfaces or types from external libraries without
modifying their original code.

### Declaration Merging with Interfaces

When multiple interface declarations share the same name, TypeScript
compiles them into a single interface. This allows you to extend the
properties of interfaces without needing to extend them explicitly.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// The "User" interface now has both "name" and "age" properties.
```

### Declaration Merging with Namespaces

You can merge namespaces easily by declaring multiple namespaces with
the same name. TypeScript will recognize these as one big combined
namespace.

```typescript
namespace Utilities {
  export function log(message: string): void {
    console.log(message);
  }
}

namespace Utilities {
  export function error(message: string): void {
    console.error(message);
  }
}

// The "Utilities" namespace now has both "log" and "error" functions.
```

### Practical Applications

- **Extending Libraries**: Enhance third-party libraries with additional
  methods or properties.
- **Modularization**: Split interface or namespace functionality into
  multiple files, keeping them organized.

Declaration merging, like any feature, should be used judiciously, but
when employed correctly, it can make TypeScript code more flexible and
manageable.

## 18. Advanced TypeScript: Type Manipulation with TypeScript

TypeScript offers powerful tools for type manipulation, enabling developers 
to create robust and maintainable code. By harnessing these tools, such as 
template literals, mapped types, and conditional types, developers can 
effectively manage complex types and enforce type safety.

### Mapped Types Overview

Mapped types allow you to create new types by transforming properties of an 
existing type. For example, using mapped types, you can make all properties 
of an interface optional or readonly.

```typescript
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

In the above examples, `Optional` and `Readonly` types use the `keyof` and 
`in` operators to transform the input type.

### Conditional Types Recap

Conditional types enable type selection based on a condition represented by 
other types. This mechanism helps in type checks and transformations:

```typescript
type isString<T> = T extends string ? true : false;
```

In this example, `isString` checks if a type `T` extends the `string` type 
and returns `true` or `false` appropriately.

### Template Literal Types

Combining strings and types, template literal types use placeholder synten- 
action to define complex string types:

```typescript
type Greeting<T extends string> = `Hello, ${T}!`;
```

This defines a `Greeting` type that uses template literals to incorporate a 
type parameter `T` into a string.

### Utilizing Type Manipulation

To harness these type manipulation strategies, it's crucial to think of 
types as first-class entities in TypeScript. By building sophisticated 
types, you can enforce stricter contracts in your code and catch errors 
more efficiently at compile time.

Efficient type manipulation can significantly enhance the flexibility and 
robustness of your TypeScript code. Leveraging these techniques allows 
developers to create scalable applications that maintain type safety and 
improve overall code quality.

## 19. Advanced TypeScript: Type Compatibility and Assignability

TypeScript's type compatibility is based on structural subtyping, also known
as "duck typing." This means that if two types have the same shape, they are
considered compatible, regardless of their nominal type. Let's explore how
TypeScript determines compatibility and assignability between different
types.

### Understanding Structural Typing

In structural typing, type compatibility is determined by comparing the
members of two types. If the object or type on the right side of the
assignment has all the members (and of compatible types) that the target
type requires, then the types are compatible.

```typescript
type Point = { x: number; y: number; };
type Coords = { x: number; y: number; };

let p1: Point = { x: 10, y: 20 };
let c1: Coords = { x: 0, y: 0 };

p1 = c1;  // Ok because Coords has all properties of Point
```

### Assignability Rules

Types can be assigned to one another based on their structure. Primitive
types (such as numbers, strings) are assignable to each other only when they
are of the same type.

#### Assigning to Any

Type `any` is the top type in TypeScript. Any type can be assigned to `any`.
Similarly, `any` can be assigned to any other type.

```typescript
let someValue: any;
someValue = { some: "object" };
let str: string = someValue;  // Allowed, but not type safe
```

#### Using Unknown

The `unknown` type is safer than `any`. You must first perform some type
checking before treating it as a specific type.

```typescript
let input: unknown;
input = "Hello";

if (typeof input === 'string') {
  let str: string = input;  // Now it's safe
}
```

### Function Compatibility

Functions are compatible if they have compatible parameters and return types.
For parameter types, they use a contravariant relationship, while return types
use a covariant relationship.

```typescript
type Handler = (event: Event) => void;

let clickHandler: Handler = (event: MouseEvent) => {
  console.log(event.clientX);
};

// This is valid because MouseEvent derives from Event
clickHandler = (event: Event) => {
  alert(event.type);
};
```

Understanding these rules helps in creating flexible TypeScript code that
maintains type safety throughout. This aspect of TypeScript allows you to use
interfaces and types more effectively without being too restrictive.

## 20. Advanced TypeScript: Exploring Type-Driven Development

Type-Driven Development (TDD) in TypeScript is an advanced paradigm that takes
advantage of TypeScript's powerful static type system to enforce constraints
and guide development. It’s a methodology where types play a critical role in
shaping the application design and logic.

### Why Type-Driven Development?

1. **Enhanced Collaboration**: TDD fosters better communication between
developers by providing clear contracts and logical structures, making code
easily understandable.

2. **Error Prevention**: By using TypeScript's compiler in development phases,
many potential runtime errors and logic flaws can be detected early in the
process.

3. **Documentation**: Types act as a form of documentation that describes key
aspects of your system, such as APIs or business rules, helping new team
members quickly acclimate.

### Core Principles of Type-Driven Development

#### 1. Concrete types

Define specific types to represent distinct concepts in your domain, ensuring
that each has a well-defined role. This semantic clarity prevents misuse and
reduces ambiguity.

```typescript
interface User {
  id: string;
  name: string;
  emailAddress: string;
}
```

#### 2. Type constraints

Use advanced types to impose additional logical constraints. This can involve
using union types, discriminated unions, or literal types to establish specific
business rules.

```typescript
type UserRole = 'Admin' | 'User';

interface Admin extends User {
  permissions: string[];
}
```

#### 3. Inspired by behavior

Behavior should help define your types. By understanding what your system
needs to perform, let these behaviors guide the creation of types that meet
these requirements.

#### 4. Testing with Types

Types provide a framework that can outline potential logical inconsistencies
before running your code. They serve as a form of
