# Design Patterns

- [1. Introduction to Design Patterns](#1-introduction-to-design-patterns)
- [2. The History and Importance of Design Patterns](#2-the-history-and-importance-of-design-patterns)
- [3. Understanding Creational Design Patterns](#3-understanding-creational-design-patterns)
- [4. Understanding Structural Design Patterns](#4-understanding-structural-design-patterns)
- [5. Understanding Behavioral Design Patterns](#5-understanding-behavioral-design-patterns)
- [6. The Singleton Pattern](#6-the-singleton-pattern)
- [7. The Factory Pattern](#7-the-factory-pattern)
- [8. The Builder Pattern](#8-the-builder-pattern)
- [9. The Prototype Pattern](#9-the-prototype-pattern)
- [10. The Adapter Pattern](#10-the-adapter-pattern)
- [11. The Bridge Pattern](#11-the-bridge-pattern)
- [12. The Composite Pattern](#12-the-composite-pattern)
- [13. The Decorator Pattern](#13-the-decorator-pattern)
- [14. The Facade Pattern](#14-the-facade-pattern)
- [15. The Flyweight Pattern](#15-the-flyweight-pattern)
- [16. The Proxy Pattern](#16-the-proxy-pattern)
- [17. The Chain of Responsibility Pattern](#17-the-chain-of-responsibility-pattern)
- [18. The Command Pattern](#18-the-command-pattern)
- [19. The Interpreter Pattern](#19-the-interpreter-pattern)
- [20. The Iterator Pattern](#20-the-iterator-pattern)

## 1. Introduction to Design Patterns

Software design patterns are standardized solutions to common problems in software
architecture. Patterns represent best practices refined over time and are used to
improve code readability and reusability. They provide a common vocabulary for
software designers, enabling better communication and understanding among teams.

Design patterns can be broadly categorized into three types:

1. **Creational Patterns**: Deal with object creation mechanisms, trying to create
   objects in a manner suitable to the situation.
2. **Structural Patterns**: Ease the design by identifying a simple way to realize
   relationships between entities.
3. **Behavioral Patterns**: Focus on communication between objects, what goes on
   between them.

Understanding and implementing design patterns can significantly enhance coding
flexibility and efficiency, helping developers to solve problems more effectively.
This series of articles will delve into various design patterns, detailing their
concepts, use-cases, and implementation strategies.

## 2. The History and Importance of Design Patterns

Design patterns are a fundamental concept in software engineering, providing
standard solutions to common design problems. But where did they come from,
and why are they so vital to modern software development?

### The Origin of Design Patterns

The concept of design patterns was popularized by the book titled "Design
Patterns: Elements of Reusable Object-Oriented Software," authored by Erich
Gamma, Richard Helm, Ralph Johnson, and John Vlissides, also known as the
"Gang of Four" (GoF). Published in 1994, this book introduced 23 classic
design patterns, categorizing them into creational, structural, and
behavioral patterns.

The idea was influenced by the work of Christopher Alexander, an architect
who used "patterns" in architecture to create designs that are both
functional and aesthetically pleasing. The GoF saw similarities in software
engineering, where reusable solutions could be applied to recurring design
challenges.

### Why Design Patterns Matter

1. **Reusability**: Design patterns promote code reusability, enabling
   developers to avoid redundancy by using proven, adaptable solutions.

2. **Efficiency**: They streamline the development process, reducing the time
   and effort needed to solve common design problems.

3. **Communication**: Design patterns create a shared vocabulary among
   developers, facilitating better communication and collaboration.

4. **Scalability**: Patterns help in designing scalable architectures that
   can accommodate growth without requiring significant redesign.

5. **Best Practices**: They encapsulate best practices refined by experienced
   developers, ensuring high-quality code.

### Conclusion

Understanding the history and importance of design patterns offers valuable
insight into their role in software engineering. They provide a means to
achieve efficient, scalable, and maintainable software, making them an
indispensable part of a developer's toolkit.

## 3. Understanding Creational Design Patterns

Creational design patterns are concerned with the way of creating objects.
They help make a system independent of how its objects are created,
composed, and represented.

Creational patterns are extremely useful in scenarios where the creation
of objects is a complex task that affects system performance. Instead of
having the client code create objects directly, these patterns provide
ways to create objects while hiding the creation logic, making the
process more scalable and advisable in various situations.

The main types of creational design patterns include:

1. **Singleton Pattern**: Ensures that a class has only one instance
   and provides a global point of access to it.
2. **Factory Method Pattern**: Defines an interface for creating
   an object, but lets subclasses alter the type of objects that will be
   created.
3. **Abstract Factory Pattern**: Provides an interface for creating
   families of related or dependent objects without specifying their
   concrete classes.
4. **Builder Pattern**: Separates the construction of a complex
   object from its representation so that the same construction process can
   create different representations.
5. **Prototype Pattern**: Creates new objects by copying an existing
   object, known as the prototype.

These patterns become a cornerstone in understanding the architectural
foundation of a software system. By leveraging creational patterns,
developers can write systems that are more flexible, reusable, and
easy to maintain, adapting seamlessly to changes in requirements or
technologies.

## 4. Understanding Structural Design Patterns

Structural design patterns are a category of design patterns
that help in organizing and coordinating relationships between
objects and classes. These patterns focus on how the classes
and objects can be combined to form larger structures. It is
about the composition of classes or objects to obtain new
functionality. They facilitate the design by identifying a
simple way to realize relationships between entities.

Some of the common structural design patterns include:

1. **Adapter Pattern**: Allows otherwise incompatible classes to
   work together by converting the interface of one class into an
   interface expected by the clients.

2. **Bridge Pattern**: It separates an object's abstraction from
   its implementation, allowing them to evolve independently.

3. **Composite Pattern**: It allows you to compose objects into
   tree structures to represent part-whole hierarchies. This
   pattern enables clients to treat individual objects and
   compositions uniformly.

4. **Decorator Pattern**: It attaches additional responsibilities
   to an object dynamically, providing a flexible alternative to
   subclassing for extending functionality.

5. **Facade Pattern**: Provides a simplified interface to a
   complex subsystem, making it easier for clients to interact
   with the system.

6. **Flyweight Pattern**: Reduces the cost of creating and managing
   large numbers of similar objects by sharing resources among them.

7. **Proxy Pattern**: Provides an object representing another
   object, controlling access to it.

These patterns are fundamental in building efficient, scalable
,and reusable code. By utilizing structural design patterns,
software designers can ensure that systems are more tightly
integrated, adaptable, and robust. This provides the flexibility
to structure applications that are easier to maintain and scale
over time.

## 5. Understanding Behavioral Design Patterns

Behavioral design patterns are concerned with the interaction and
responsibility between objects. They help define how objects connect with
and communicate with each other. These patterns are essential when you need
to clearly define the communication strategies and interaction workflows
between objects within your application. By employing behavioral design
patterns, you can enhance communication clarity, improve object interaction
efficiency, and promote code reusability.

### Key Characteristics of Behavioral Patterns:

1. **Communication:** These patterns establish effective communication
   protocols between objects, helping to implement complex control flows.

2. **Flexibility:** You can alter the workflow dynamically, allowing an easy
   change of interaction scenarios.

3. **Object Responsibility:** Clear definition of responsibilities leads to
   better organization and understanding of code.

4. **Reusability:** Encourages reusability of patterns across different parts
   of your code and even across different projects.

### Common Behavioral Design Patterns:

- **Chain of Responsibility:** Passes a request along a chain of handlers.
  Once a handler processes the request, it does not pass it on.

- **Command:** Encapsulates a request as an object, allowing for parameterization
  and instantiation of requests.

- **Interpreter:** Implements a specialized language grammar or expression
  evaluator.

- **Iterator:** Facilitates sequential access to elements of a collection
  without exposing its underlying representation.

- **Mediator:** Defines an object that controls how a set of objects interact
  with each other.

- **Memento:** Lets you capture and restore an object's internal state without
  violating encapsulation.

- **Observer:** Establishes a subscription mechanism to notify multiple objects
  about events occurring within another object.

- **State:** Allows an object to alter its behavior when its internal state
  changes.

- **Strategy:** Defines a family of algorithms and makes them interchangeable.

- **Template Method:** Defines the skeleton of an algorithm, deferring some
  steps to subclasses.

- **Visitor:** Enables adding new operations to an object structure without
  modifying the objects themselves.

Understanding and implementing behavioral design patterns allows for greater
control over how different objects smoothly coordinate actions within
your application, enhancing clarity and efficiency.

## 6. The Singleton Pattern

The Singleton Pattern is one of the simplest and most commonly used design
patterns in software development. It falls under the category of creational
design patterns, and its main intent is to ensure that a class has only one
instance while providing a global point of access to that instance.

### Key Characteristics

- **Single Instance:** The pattern restricts the instantiation of a class to
  a single object. This is useful when only one object is needed to coordinate
  actions across the system.
- **Global Access:** It provides a controlled access point to the sole
  instance of the class.

### Implementation

The Singleton Pattern can be implemented in various programming languages, but
the fundamental concept remains the same. Here is a simple implementation in
Java:

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

#### Explanation

- **Private Constructor:** Prevents instantiation of the class from outside of
  itself.
- **Static Instance:** Holds the sole instance of the class.
- **Synchronized Method:** Ensures thread safety when lazy instantiation is implemented.

### Use Cases of Singleton

#### Centralized Resource Management

Singletons are used for managing resources like database connections, where a
single connection instance is often needed.

#### Logger Classes

Logger classes also benefit from single instance patterns as it centralizes
the logging info and methods.

It's crucial to use Singletons judiciously, as misuse can lead to challenges
in multithreading environments and testing difficulties.

---

## 7. The Factory Pattern

The Factory Pattern is one of the most commonly used creational design
patterns. Its primary objective is to create objects without specifying
the exact class of object that will be created. This pattern is often
implemented in scenarios where the precise types of objects may need to
vary at runtime, or when the instantiation process must be controlled by
a central point.

#### Key Characteristics

1. **Encapsulation of Instantiation Logic:** The pattern encapsulates the
   instantiation logic, allowing for changes in the object creation
   process without modifying the client code.
2. **Interface Implementation:** It often uses interfaces or abstract
   classes to define the contract for objects the factory will create.

3. **Promotes Loose Coupling:** By relying on interfaces or abstract
   classes, the pattern promotes loose coupling between the factory and
   the concrete classes it creates.

#### Implementation

The Factory Pattern can be implemented using various approaches, such as:

- **Simple Factory:** Though not a true design pattern, it encapsulates
  object creation logic.

- **Factory Method:** This involves creating a method in a class
  responsible for creating objects.

- **Abstract Factory:** This is an extension of the Factory Method,
  providing an interface to create families of related objects.

#### Example Use Cases

- **UI Frameworks:** Different operating systems may require
  different UI objects, which can be managed effectively through the
  Factory Pattern.

- **Plugin Development:** It allows for dynamic loading and
  creation of different plugins based on the application's needs.

By using the Factory Pattern, developers can write more modular and
flexible code, allowing for new types and classes to be integrated
seamlessly. This adaptability is particularly valuable in projects
where the types of objects needed might change over time or are often
expanded.

## 8. The Builder Pattern

In the world of software engineering, the Builder Pattern is a Creational
design pattern that allows for the step-by-step construction of complex
objects. Unlike other Creational patterns, which focus on creating objects
in a single step, the Builder Pattern emphasizes the process of constructing
an object in many steps, which can benefit from different configurations.

### Intent

The primary intent of the Builder Pattern is to separate the construction
of a complex object from its representation, allowing the same construction
process to create different representations. This separation enables more
flexibility in designing object creation processes.

### Structure

The Builder Pattern typically involves the following components:

- **Builder**: This abstract interface defines the methods for creating
  different parts of a Product object.

- **ConcreteBuilder**: This class implements the Builder interface, providing
  specific implementations for creating the parts that the complex Product
  requires. It tracks the Products it creates.

- **Director**: This class is responsible for exercising the Builder to
  construct an object.

- **Product**: This is the complex object that is being built.

### Applicability

Use the Builder pattern when:

- The algorithm for creating a complex object should be independent of
  the parts that make up the object and how they're assembled.
- The construction process must allow different representations for the
  object that's being built.

### Example

Consider the construction of a house, where the process can adapt to build
either a wooden house or a brick house, while following the same general
steps. Through the Builder Pattern, different Builders (WoodenHouseBuilder,
BrickHouseBuilder) can follow the Director's instructions to assemble the parts
in specific ways to create different houses.

### Benefits

- **Reusability**: By encapsulating the code for construction and representation,
  builders provide objects with different representations through the same
  construction process.

- **Readability and Management**: It provides a more readable way to manage
  complex object creation, and the process can be reused or modified without
  affecting the client code.

The Builder pattern is particularly useful when dealing with constructions of
complex products that can have various possible representations.

## 9. The Prototype Pattern

The Prototype Pattern is one of the creational design patterns. The central
concept is cloning an existing object to create new objects rather
than instantiating new ones from scratch. This can be particularly useful when
the process of creating an object is costly or complex.

### Motivation

Creating a complex object is typically resource-intensive. By utilizing the
Prototype Pattern, it is possible to clone existing instances to avoid the
cost associated with creating objects similarly. This pattern is especially
useful when the inherent state of the object matters more than its creation
process.

### Implementation

To implement the Prototype Pattern, objects must implement the cloning method.
This can be achieved by including a `clone()` method in the class definition,
allowing objects to be copied efficiently.

Here's a simple example in JavaScript:

```javascript
class Prototype {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return new Prototype(this.name);
  }
}

const original = new Prototype("Original");
const copy = original.clone();
console.log(copy.name); // Outputs: Original
```

### When to Use

- When object creation is costly in terms of resources.
- When generating different configurations of objects.
- When the concrete classes cannot be specified a priori.

### Advantages

- Reduces the cost of creating complex objects.
- Increases the performance of software as new objects don't require expensive
  creation steps.
- Simplifies the addition of new types of objects.

### Disadvantages

- The complexity of cloning complex objects.
- Cloning might result in unintentionally sharing the same state among
  objects, which can lead to complications.

### Conclusion

The Prototype Pattern provides a mechanism to duplicate existing
objects efficiently. While useful, it's necessary to approach its
implementation cautiously, especially in scenarios where mutable
reference types are involved.

## 10. The Adapter Pattern

The Adapter Pattern, also known as the Wrapper Pattern, is a structural
design pattern that allows objects with incompatible interfaces to
collaborate. Essentially, it acts as a bridge between two incompatible
interfaces by converting the interface of a class into another interface
that the client expects.

One of the primary use cases for the Adapter Pattern is when you have
a class that isn't compatible with the interface you need, or if you
want to use an existing class without modifying its source code. The
Adapter Pattern lets you utilize the functionality of the incompatible
class by wrapping it with a new class that exposes the desired interface.

### Example Scenario

Imagine you have a software component that reads data from a JSON
file, but your application requires data input from XML files. You can
create an adapter that takes XML data and converts it into JSON
format, allowing the reading component to process the data seamlessly.

### Types of Adapters

- **Class Adapter**: This adapter relies on multiple inheritance to
  adapt one interface to another. It's less common in languages like
  Java and C# that don't support multiple inheritance.
- **Object Adapter**: It uses composition, with the adapter containing a
  reference to the adapted object. This approach is more flexible and
  more commonly used in languages that don't support multiple
  inheritance.

### Benefits and Drawbacks

#### Benefits

- **Reusability**: Increases reusability of the existing code by
  making new code work with older code that might be incompatible.
- **Flexibility**: Promotes flexibility and interchangeability between
  systems with incompatible interfaces.

#### Drawbacks

- **Complexity**: May add unnecessary complexity to the system if
  not used appropriately.
- **Performance**: Potential for reduced performance due to the
  additional layer of abstraction.

### Conclusion

The Adapter Pattern is incredibly powerful in enabling collaboration
between otherwise incompatible interfaces. It's essential to analyze
when and how to use it properly to avoid unnecessary complexity. By
leveraging the Adapter Pattern, developers can build software systems
that are more modular, flexible, and easier to maintain.

## 11. The Bridge Pattern

The Bridge Pattern is a structural design pattern that divides business logic or
huge class into separate class hierarchies that can be developed independently.
This pattern involves an interface that acts as a bridge, making the concrete
classes independent of interface implementer classes.

### Components of the Bridge Pattern

1. **Abstraction**: This is the top-level interface housing a reference to
   the implementer.
2. **Refined Abstraction**: This extends the Abstraction class and provides
   implementation details.
3. **Implementer**: This interface includes the basic operations that can be
   executed.
4. **Concrete Implementer**: These classes implement the Implementer interface
   and define the proxy for the functionalities.

### When to Use the Bridge Pattern

- When you want to avoid a binding between an abstraction and its
  implementation.
- When both the abstractions and concrete implementations need to independently
  extend through subclassing.
- When you require changes in both abstractions and implementations while
  ensuring such will not affect each other.

### Example

Consider a scenario of a remote control in which the user handle (Abstraction)
can choose different devices like TV, radio (Implementer). Here, the user handle
is unaware of the details of the device, conforming to the Bridge pattern.

This separation means one could add new device types without affecting the user
handle, embodying a key benefit of the Bridge pattern.

By providing flexibility, simultaneously allowing for the modification of
implementations, the Bridge pattern is a significant approach for handling
similar objects, while easing modulation in scale.

## 12. The Composite Pattern

The Composite pattern is a structural design pattern that allows you to compose object
into tree structures to represent part-whole hierarchies. It lets clients treat individual objects
and compositions of objects uniformly.

### Participants in the Composite Pattern:

1. **Component**: This is an abstraction for all components, including composite ones.
   It declares the interface for objects in the composition.

2. **Leaf**: Represents leaf objects that have no children. Leaf nodes define behavior
   for primitive objects in the composition.

3. **Composite**: This defines behaviors for components having children
   and stores child components.

4. **Client**: Manages and manipulates objects in the composition through the
   component interface.

### Intent of the Composite Pattern:

The intent is to allow clients to treat individual objects and compositions
consistently. When using composite structures, the client can use the
same logic to compute the representation irrespective of whether it is a single
object or a group of objects.

### Applicability:

Use the Composite pattern when:

- You want to represent part-whole hierarchies.
- You want clients to be able to ignore the difference between compositions
  of objects and individual objects.

### Benefits:

- Makes it easier to add new kinds of components.
- Simplifies client code as clients can treat composite structures
  and individual objects uniformly.

### Drawbacks:

- Can make the design overly general.
- It becomes difficult to restrict the components of a composite.

### Example:

In a graphical application, shapes can be a composite structure.
For instance, a drawing could consist of both primitive shapes (circles, squares)
and compositions of shapes. The Composite pattern allows a uniform approach to
handle both cases. You can perform operations like move or paint on a single
shape or a group of shapes seamlessly.

The composite pattern is about recursively composing objects so that clients treat
individual objects and compositions uniformly. Understanding this pattern allows
you to create flexible tree structures of objects, making it a valuable tool
in your design pattern arsenal.

## 13. The Decorator Pattern

The Decorator Pattern is a structural design pattern that allows behavior
to be added to individual objects, either statically or dynamically,
without affecting the behavior of other objects from the same class.
It provides a flexible alternative to subclassing for extending
functionality by wrapping objects.

### Key Concepts

- **Component Interface**: This defines the interface for objects that
  can have responsibilities added to them dynamically.

- **Concrete Component**: A class that implements the component
  interface and can have added responsibilities.

- **Decorator**: An abstract class that implements the component
  interface and contains a reference to a component object.

- **Concrete Decorators**: These are classes that extend the decorator
  and add functionalities.

### How It Works

The Decorator Pattern works by creating a set of decorator classes that
are used to wrap concrete components. The core class implements an
interface, and additional functions are added using composition, not
inheritance.

Decorators contain a reference to a component and forward requests
to this component, possibly after adding some functionality.
This pattern allows decorators to be recursively layered, letting
clients dynamically add responsibilities.

### Example

Consider a `Coffee` interface implemented by basic `PlainCoffee`.
You might want to add flavors to your coffee dynamically:

```cpp
class Coffee {
 public:
 virtual double cost() = 0;
};

class PlainCoffee : public Coffee {
 public:
 double cost() override { return 5.0; }
};
```

Now, implement the decorator:

```cpp
class CoffeeDecorator : public Coffee {
 protected:
 Coffee* coffee;
 public:
 CoffeeDecorator(Coffee* c) : coffee(c) {}
};
```

And add a concrete decorator:

```cpp
class MilkDecorator : public CoffeeDecorator {
 public:
 MilkDecorator(Coffee* c) : CoffeeDecorator(c) {}
 double cost() override { return coffee->cost() + 1.5; }
};
```

Usage:

```cpp
Coffee* myCoffee = new MilkDecorator(new PlainCoffee());
std::cout << myCoffee->cost(); // Outputs 6.5
```

### Benefits

- **Flexible**: More flexible than inheritance; can mix and match
  responsibilities.
- **Simplified Code**: Reduces complexity in classes by creating
  simple components.

### Drawbacks

- **Complexity**: May become complicated with many small classes.
- **Performance**: Each layer adds overhead.

The Decorator Pattern is ideal when you need to add behavior
on a per-object basis, allowing for subtler control over
how objects are configured.

## 14. The Facade Pattern

The Facade Pattern is a structural design pattern that provides a simplified
interface to a complex subsystem. The intent is to offer a single interface
to a set of interfaces within a system, making the subsystem easier to use.
This pattern is particularly useful when dealing with complex libraries or
frameworks that expose a large number of methods and functionalities.

One of the main benefits of using the Facade Pattern is that it helps reduce
the dependencies of outside code on internal classes, promoting low coupling
between subsystems. By masking the complexities involved in the subsystem,
the Facade Pattern allows new users to easily interact with the system
without knowing the intricate details of its operation.

### When to Use the Facade Pattern

- **Complex Systems**: When you have a complex subsystem that is difficult
  to understand or use directly.
- **Legacy Code**: When working with legacy code that isn't modular but you
  need to modernize its interface for new clients.
- **Interfacing with Libraries**: When interfacing with third-party
  libraries that include a lot of functionality and need to be simplified.

### Implementing the Facade Pattern

To implement the Facade Pattern, you need to create a Facade class that
wraps the subsystem modules and provides a higher-level interface:

1. Identify the subsystem interfaces and their complexities.
2. Create the Facade class that simplifies these complex interfaces.
3. Implement methods in the Facade class that require the subsystem to
   perform the necessary operations behind the scenes.
4. Ensure the client interacts only with the Facade class to perform
   tasks that require dealing with multiple subsystem interfaces.

Here is a simple example of the Facade Pattern:

```cpp
class SubsystemA {
public:
    void operationA() {
        // Complex original implementation
    }
};

class SubsystemB {
public:
    void operationB() {
        // Complex original implementation
    }
};

class Facade {
private:
    SubsystemA* subsystemA;
    SubsystemB* subsystemB;

public:
    Facade() {
        subsystemA = new SubsystemA();
        subsystemB = new SubsystemB();
    }
    ~Facade() {
        delete subsystemA;
        delete subsystemB;
    }

    void operation() {
        subsystemA->operationA();
        subsystemB->operationB();
    }
};
```

In this example, the `Facade` class consolidates the operations from two
different subsystem classes, `SubsystemA` and `SubsystemB`. The client can
use the simpler `Facade` interface to handle complex internal processes. This
approach minimizes the need for clients to interact directly with the
subsystem classes, shielding them from potentially volatile internal changes.

## 15. The Flyweight Pattern

The Flyweight Pattern is a structural design pattern aimed at optimizing
resource usage by sharing objects. It's particularly effective when you
have a large number of similar objects, like the characters in
a text editor.

### Key Components

1. **Flyweight Interface**: This defines the interface through which flyweights interact.
2. **Concrete Flyweight**: Implements the Flyweight interface and stores
   intrinsic state, which is shared.
3. **Flyweight Factory**: Manages and provides instances of flyweights.
4. **Client**: Maintains the extrinsic state, which is not shared and varies between objects.

### How It Works

The Flyweight Factory creates and manages flyweight objects. When a
client requests a flyweight, the factory checks if it already exists.
If it doesn't, a new flyweight is created and stored for future requests.
Flyweights are often immutable to allow safe sharing.

### Use Cases

- Text Editors: Every character is a flyweight to save memory.
- Graphics Programs: Shapes that use similar data can be flyweights.
- Game Development: Objects like trees in a forest share textures or models using flyweights.

### Example in Code

Here's a simplified example in pseudocode:

```plaintext
class Flyweight:
    def operation(self, extrinsicState):
        pass

class ConcreteFlyweight(Flyweight):
    def __init__(self, intrinsicState):
        self.intrinsicState = intrinsicState

    def operation(self, extrinsicState):
        print(f"Intrinsic: {self.intrinsicState}, Extrinsic: {extrinsicState}")

class FlyweightFactory:
    def __init__(self):
        self.flyweights = {}

    def getFlyweight(self, key):
        if key not in self.flyweights:
            self.flyweights[key] = ConcreteFlyweight(key)
        return self.flyweights[key]

factory = FlyweightFactory()
extrinsicState = 22
flyweight = factory.getFlyweight('a')
flyweight.operation(extrinsicState)
```

### Advantages

- **Reduced Memory Usage**: Efficient storage for large numbers of
  objects.
- **Performance Improvement**: Decreases memory footprint, potentially
  improving performance.

### Limitations

- **Complex Codebase**: Managing both intrinsic and extrinsic states
  can be complicated.
- **Non-unique States**: More complex when objects have slightly
  different but similar states.

The Flyweight pattern is particularly powerful in situations where
applications handle large amounts of similar data, marrying efficiency
with performance.

## 16. The Proxy Pattern

The Proxy Pattern is a structural design pattern that provides an object
representing another object. It acts as an interface to the real object
that a client wants to interact with, thereby adding a layer of control
over the access.

### Intent

The primary intent of the Proxy Pattern is to control the access to an
object. This may involve lazy initialization, access control, logging,
caching, and many other purposes. It serves as a surrogate for another
object, altering the way client objects interact with it.

### Applicability

You can employ the Proxy Pattern whenever there's a need for:

- A placeholder for an expensive object
- Controlled access to an object
- Reducing the memory footprint when dealing with large objects
- Implementing virtual proxies, which create expensive objects on demand
- Protecting the access to real objects via access proxies

### Participants

- **Proxy**: Provides an interface identical to the subject
  and maintains a reference to the real subject. It controls access
  to the real subject and may be responsible for instantiating
  it if needed.
- **Subject**: Defines the common interface for real objects
  and proxies.
- **RealSubject**: Represents the actual object that the proxy
  stands in for.

### Collaborations

- The client interacts with the proxy as it would with the
  real subject.
- The proxy forwards the requests to the real subject
  when necessary, and may perform actions like logging,
  accessibility checks, or delay costly operations
  until they are absolutely needed.

### Consequences

- **Advantages**:

  - Adds functionality to existing code transparently
  - Provides controlled access to an object
  - Can represent a lightweight substitute for costly objects
  - Promotes separation of concerns by segregating the access
    logic from business logic

- **Disadvantages**:
  - Introduces complexity due to additional layers
  - Might mask inefficiencies from clients

The Proxy Pattern is versatile and can be employed in a variety of
situations, making it a fundamental tool in any software architect's
toolkit. Real-world implementations often use the proxy to perform
authentication, caching, and speech transformation amongst other tasks.
This makes it particularly popular in scenarios like virtual proxies
for complex GUIs, protection proxies in secure applications,
and remote proxies in networked applications.

## 17. The Chain of Responsibility Pattern

In software design, the Chain of Responsibility pattern is a behavioral
pattern that allows more than one object to handle a request, without knowing
which object will ultimately process the request. This dynamic passing
of responsibility promotes loose coupling and flexibility when processing
a series of potential handlers.

### How It Works

In a Chain of Responsibility, objects are linked together in a chain.
Each object in the chain has an opportunity to handle the request. If it
can, it processes the request itself; if it can't, it passes the request
to the next object in the chain. This continues until the request is
handled or reaches the end of the chain without being handled.

### When to Use

- When multiple objects may handle a request and the handler isn't
  known a priori.
- To enable adding new responsibilities to objects without altering
  their structure.
- When requests need to be issued to one of several objects dynamically.

### Example

A classic example of the Chain of Responsibility pattern is an
organizational approval hierarchy. For instance, suppose a purchase
order requires multiple levels of approval. Each manager can approve a
certain level of expenditure, and if the amount exceeds their authority,
it is passed up the chain to the next higher manager for approval, and
so on.

By implementing the Chain of Responsibility pattern, the approval system
can be developed in a way that ensures each manager object is responsible
only for the amounts they are authorized to approve, and for passing
any higher amounts along the chain without being tightly coupled to
specific managers, orders, or approval processes.

### Benefits

- **Decoupled Senders and Receivers**: Allows the sender of a request not
  to know which, if any, receiver(s) will handle it.
- **Flexibility in Assigning Responsibilities**: Responsibilities
  can be changed dynamically.
- **Simplified Object Interactions**: Reduces the tight coupling between
  request handlers and the main objects.

The Chain of Responsibility pattern is versatile and used when decoupling
request-passing is a primary goal. It promotes responsibility-sharing
across multiple handlers and makes the system more adaptable to change.

## 18. The Command Pattern

The Command Pattern is a behavioral design pattern that turns a request
into a stand-alone object that contains all information about the
request. This transformation allows for the parameterization of
methods with different requests, queuing of requests, and
logging of the requests. It also provides support for undoable
operations.

### Key Components

1. **Command Interface**: Defines the contract for executing an
   action.
2. **Concrete Command**: Implements the command interface and
   defines the binding between an action and the receiver.
3. **Receiver**: Knows how to perform the work needed for the
   request.
4. **Invoker**: Asks the command to carry out the request.
5. **Client**: Creates a concrete command and sets its receiver.

### How It Works

The client creates a concrete command object and sets a receiver.
The invoker is linked with the command object, which calls execute
method to on the command. If commands are queued or logged by
the invoker, it may save them into a stack, enabling undo
operations.

### When To Use

- You need to parameterize objects by an action to perform
- You want to specify, queue, and execute requests at different times
- You want to support undo operations
- You need reversible transactions or operations in your application

### Example in Code

```python

class Command:
    def execute(self):
        pass

class LightOnCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_on()

class Light:
    def turn_on(self):
        print("Light is On")

class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command):
        self.command = command

    def press_button(self):
        if self.command:
            self.command.execute()

light = Light()
light_on = LightOnCommand(light)
remote = RemoteControl()
remote.set_command(light_on)
remote.press_button()  # Output: Light is On
```

In this example, `LightOnCommand` is used as the command, with `Light`
acting as the receiver. The `RemoteControl` acts as the invoker, and
`light_on` is an instance of the client. The pattern grants flexibility
in usage and makes it simple to add new commands without altering existing
code, aligning with the Open/Closed Principle.

## 19. The Interpreter Pattern

The Interpreter Pattern is a design pattern used to define a grammatical
representation for a language and a mechanism to evaluate expressions
within this language. This pattern is particularly useful when you need
to interpret sentences in a custom language or translate it into an
executable format.

In terms of structure, the Interpreter Pattern uses an Abstract Expression
which declares an `interpret()` operation. The Concrete Expression
implements this operation for terminal and non-terminal symbols. A context
object can hold variable values for symbols defined in the language.

The pattern is often utilized in compilers, expression evaluators, and any
interpreted languages where flexibility and custom language
interpretation are needed.

### Components of the Interpreter Pattern

1. **AbstractExpression**: Declares the 'interpret' operation.
2. **TerminalExpression**: Implements the 'interpret' operation associated
   with terminal symbols.
3. **NonTerminalExpression**: One for each rule in the grammar, these implement,
   the 'interpret' operation for non-terminal symbols.
4. **Context**: Contains information that's globally accessible and needed
   during the interpretation.
5. **Client**: Builds (or is given) an abstract syntax tree representing
   a sentence in the language.

### Pros and Cons

**Pros:**

- Easy to change and extend the grammar.
- Incorporates language evolution in a structured format.
- Easy to implement grammars of languages.

**Cons:**

- Complex grammars are hard to manage and maintain.
- Performance issues for large grammars and sentences.

This design pattern is instrumental when creating custom languages or
translators that require flexibility and ease of extension. When considering
applying the Interpreter Pattern, it's crucial to evaluate the complexity of
the grammar and ensure suitable performance in your application environments.

## 20. The Iterator Pattern

Iterator Pattern is a behavioral design pattern that provides a way to
access the elements of a collection object sequentially without exposing
its underlying representation. With this pattern, you can traverse a
collection without revealing the details of how data is stored.

### Key Concepts

- **Iterator**: The interface or abstract class that defines the methods
  needed for traversing through all elements in a collection. Methods
  typically include `next()`, `hasNext()`, and occasionally `remove()`.

- **Concrete Iterator**: An implementation of the Iterator interface for
  a specific type of collection.

- **Aggregate**: An interface for creating an iterator object.

- **Concrete Aggregate**: The implementation of the Aggregate interface
  and also provides a method for getting an iterator object.

### Advantages

1. **Simplifies Client Code**: Iterators allow access to elements of a
   collection in an orderly manner without exposing the complexities of the
   collection.

2. **Multiple Iterations**: Different iterators can iterate independently
   through the same collection.

3. **Polymorphic Iteration**: Clients can handle collections in some
   consistent way regardless of the actual collection type.

### Implementation Example

```python
class ConcreteIterator:
    """Concrete Iterator that implements the Iterator interface."""
    def __init__(self, collection):
        self._collection = collection
        self._index = 0

    def next(self):
        try:
            item = self._collection[self._index]
            self._index += 1
            return item
        except IndexError:
            raise StopIteration

    def hasNext(self):
        return self._index < len(self._collection)

class ConcreteAggregate:
    def __init__(self):
        self._items = []

    def createIterator(self):
        return ConcreteIterator(self._items)

    def addItem(self, item):
        self._items.append(item)

aggregate = ConcreteAggregate()
aggregate.addItem('Item1')
aggregate.addItem('Item2')
aggregate.addItem('Item3')

iterator = aggregate.createIterator()
while iterator.hasNext():
    item = iterator.next()
    print(item)
```

### Conclusion

The Iterator Pattern is especially important when you need to traverse
different types of collections in a uniform way. It encapsulates the
itinerary of the collection and presents clients with a simple and
driven method of accessing its components.
