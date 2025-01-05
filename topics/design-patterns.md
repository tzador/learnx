# Design Patterns

- [01. Introduction to Design Patterns](#01-introduction-to-design-patterns)
- [02. Benefits of Using Design Patterns](#02-benefits-of-using-design-patterns)
- [03. Creational Design Patterns](#03-creational-design-patterns)
- [04. Singleton Pattern](#04-singleton-pattern)
- [05. Factory Method Pattern](#05-factory-method-pattern)
- [06. Abstract Factory Pattern](#06-abstract-factory-pattern)
- [07. Builder Pattern](#07-builder-pattern)
- [08. Prototype Pattern](#08-prototype-pattern)
- [09. Structural Design Patterns](#09-structural-design-patterns)
- [10. Adapter Pattern](#10-adapter-pattern)
- [11. Bridge Pattern](#11-bridge-pattern)
- [12. Composite Pattern](#12-composite-pattern)
- [13. Decorator Pattern](#13-decorator-pattern)
- [14. Facade Pattern](#14-facade-pattern)
- [15. Flyweight Pattern](#15-flyweight-pattern)
- [16. Proxy Pattern](#16-proxy-pattern)
- [17. Behavioral Design Patterns](#17-behavioral-design-patterns)
- [18. Observer Pattern](#18-observer-pattern)
- [19. Chain of Responsibility Pattern](#19-chain-of-responsibility-pattern)
- [20. Advanced Design Patterns](#20-advanced-design-patterns)

## 01. Introduction to Design Patterns

Design patterns are typical solutions to common problems in software design. 
They are like blueprints that can be reused in various situations. Each 
pattern is like a tool that can be used to solve recurring design problems.  
These patterns help you enhance your software design by promoting code 
reusability and scalability.

The concept of design patterns gained prominence with the book "Design 
Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, 
Richard Helm, Ralph Johnson, and John Vlissides, commonly known as the "Gang 
of Four" (GoF). They introduced 23 classic design patterns, categorized into 
three groups: creational, structural, and behavioral patterns.

### Benefits of Using Design Patterns
- **Reusability:** Patterns provide reusable solutions.
- **Efficiency:** They enhance design efficiency by providing proven methods.
- **Communication:** They offer a common vocabulary to describe solutions.
- **Maintainability:** Improve the readability and maintainability of code.

In the upcoming articles, we will delve into these patterns, exploring each 
one with clear examples and applications. This series will cater to both 
beginners and those looking to refine their understanding of software design 
patterns.

## 02. Benefits of Using Design Patterns

Design patterns provide a structured solution to commonly occurring problems in
software design. By utilizing design patterns, developers can achieve several
benefits in their software projects:

### 1. Reusability

Design patterns offer templates that can be reused in various projects, thereby
reducing the need to write code from scratch for common functionalities.

### 2. Scalability

They help create a scalable architecture by offering proven practices, making it
easier to extend software applications as they grow.

### 3. Efficiency

Using design patterns can speed up the development process since they are based
on best practices and have been refined over time.

### 4. Maintainability

Patterns lead to cleaner, more understandability code, which simplifies code
maintenance and decreases the number of bugs.

### 5. Communication

A common language emerges with patterns, improving communication between team
members, as each pattern has a name and a well-defined purpose.

In summary, design patterns are indispensable tools in a developer's toolkit,
facilitating the creation of quality software that is easy to manage, extend,
and scale. In the subsequent articles, we will explore commonly used design
patterns and how to implement them effectively in various programming
scenarios.

## 03. Creational Design Patterns

Creational design patterns are focused on the instantiation of objects. These 
patterns help make a system independent of how its objects are created, 
composed, and represented. They work on object creation mechanisms, trying to 
create objects in a manner suitable to the situation. Additionally, 
creational patterns offer ways to structure class instantiation decisions. 

Some of the most prominent creational design patterns include:

1. **Singleton Pattern**: Ensures a class has only one instance and provides a 
global point of access to it.

2. **Factory Method Pattern**: Defines an interface for creating objects but
allows subclasses to alter the type of objects that will be created.

3. **Abstract Factory Pattern**: Provides an interface for creating families of
related or dependent objects without specifying their concrete classes.

4. **Builder Pattern**: Separates the construction of a complex object from its 
representation, enabling the same construction process to create different 
representations.

5. **Prototype Pattern**: Involves creating new objects by copying an existing 
object, known as the prototype. It allows the creation of objects based on a 
template of an existing object through cloning.

Each of these patterns provides a different approach to controlling how objects
are created within a system, contributing to flexibility and reuse.

## 04. Singleton Pattern

The Singleton Pattern is a design pattern that restricts the instantiation of a 
class to a single instance. This is useful when exactly one object is needed to 
coordinate actions across a system. The pattern ensures that a class has only 
one instance and provides a global point of access to this instance.

### Intent

The main intent of the Singleton Pattern is to provide a way to ensure that a 
class has only one instance and to provide a global point of access to it.

### Structure

In the Singleton Pattern, a class contains a method that creates an instance of 
the class, but it also stores the instance in a variable. If the instance exists, 
it returns the existing instance. Otherwise, it creates a new instance and returns it.

### Applicability

- Use the Singleton Pattern when there must be exactly one instance of a class, 
and it must be accessible from a well-known access point.
- Use the pattern when the sole instance should be extensible by subclassing, 
and clients should be able to use an extended instance without modifying their code.

### Examples

- Logging systems often use the Singleton Pattern, as they need a single point of 
contact for logging messages to consistently handle application logs.
- Configuration settings where a single set of configurations is needed to be 
shared across multiple components in a system.

### Implementation

To implement a Singleton Pattern, follow these steps:

1. Ensure that the class cannot be instantiated from outside by declaring its 
constructor as private.
2. Create a static method that acts as an access point to get the single instance 
of the class.
3. Create a static variable to hold the single instance of the class.

By following these steps, you can ensure that a single instance of a class is 
created and accessible globally.

## 05. Factory Method Pattern

The Factory Method Pattern is a creational design pattern that provides an 
interface for creating objects in a superclass, but allows subclasses to alter 
the type of objects that will be created.

### Purpose

The main purpose of the Factory Method Pattern is to delegate the responsibility
of instantiating objects to subclasses. This promotes loose coupling by reducing
the dependency of client code on concrete implementations.

### Structure

- **Product**: Defines the interface of objects the factory method creates.
- **ConcreteProduct**: Implements the Product interface.
- **Creator**: Declares the factory method that returns an object of type
  Product.
- **ConcreteCreator**: Overrides the factory method to return an instance of a
  ConcreteProduct.

### How it Works

In this pattern, a class delegates the responsibility of object creation to its 
subclasses. The superclass has a method to return the object of the Product 
interface, while subclasses override this method to create and return different 
products.

### Example

Imagine a logistics application where the main process class relies on different
modes of transport (truck, ship). Instead of hardcoding these in the main class,
we can use the Factory Method Pattern, allowing each transport method to be 
instantiated by a specific class using the factory method.

```python

class Transport:
    def deliver(self):
        pass

class Truck(Transport):
    def deliver(self):
        return "Deliver by land in a box."

class Ship(Transport):
    def deliver(self):
        return "Deliver by sea in a container."

class Logistics:
    def create_transport(self):
        pass

class RoadLogistics(Logistics):
    def create_transport(self):
        return Truck()

class SeaLogistics(Logistics):
    def create_transport(self):
        return Ship()

logistics = RoadLogistics()
transport = logistics.create_transport()
print(transport.deliver())  # Output: Deliver by land in a box.
```

### When to Use

Use the Factory Method Pattern when:

- There's a need for flexibility in object creation.
- A class can't anticipate the class of objects it needs to create.
- To avoid tight coupling between the client and the concrete classes.
- To provide a hook for subclasses to control which objects are created.

By using the Factory Method Pattern, you keep your design flexible and extendable
with minimal changes to the existing code structure.

## 06. Abstract Factory Pattern

The Abstract Factory Pattern is a creational design pattern that provides an
interface for creating families of related or dependent objects without
specifying their concrete classes. This pattern is particularly useful when a
system needs to be independent of how its objects are created.

In essence, the Abstract Factory Pattern encapsulates a group of individual
factories with a common theme. It is considered one level of abstraction higher
than the Factory Method Pattern.

### Structure

The structure of the Abstract Factory Pattern involves:

- **Abstract Factory**: Declares an interface for operations to create abstract
  products.
- **Concrete Factory**: Implements operations to create concrete product objects.
- **Abstract Product**: Declares interfaces for a set of products.
- **Concrete Product**: Implements the abstract product interface, creating actual
  product instances.
- **Client**: Uses only interfaces provided by the Abstract Factory and Abstract
  Products.

### Example

Suppose we have a system that requires creating different variants of cars and
motorcycles. Using the Abstract Factory Pattern, we define an abstract factory
interface that declares methods for creating abstract products like "createCar"
and "createMotorcycle". Different concrete factories, such as "ElectricVehicleFactory"
and "GasolineVehicleFactory", implement the interface to produce a family of
concrete products.

### Benefits

- **Isolates Clients from Concrete Classes**: Clients can work with any of the
  factories defined, abstracting product creation.
- **Product Variations**: Facilitates adding new families of products without
  modifying existing code.

### Drawbacks

- **Complexity**: Can lead to a proliferation of classes and added complexity,
  especially with many product variations.

In summary, the Abstract Factory Pattern is an invaluable tool for situations
where a system must be independent of the product creation process and many
families of products are designed to be worked with interchangeably.

## 07. Builder Pattern

The Builder Pattern is a creational design pattern that provides a way to
construct complex objects step-by-step. It separates the construction
of a complex object from its representation, allowing the same
construction process to create various representations.

### Problem

Sometimes an object needs to be constructed from different parts or
steps. However, this process can become cumbersome if the object has a
large number of optional parameters, especially when combining them
leads to a complex initialization.

### Solution

The Builder Pattern tackles this problem by allowing the clear
construction of an object step-by-step. It lets the construction
process be hidden from the final user and reduces the chances of
errors in the object creation process.

### Structure

1. **Builder**: Specifies an interface for creating the parts of a
   Product object.

2. **ConcreteBuilder**: Constructs and assembles parts of the product by
   implementing the Builder interface. It also defines and tracks the
   representation it creates.

3. **Director**: Constructs an object using the Builder interface.

4. **Product**: Represents the complex object that is being constructed.

### Example

Here is a simple example in pseudo-code to illustrate the Builder
Pattern:

```pseudo
class Product {
    // Complex product
}

interface Builder {
    method buildPartA()
    method buildPartB()
    method getResult(): Product
}

class ConcreteBuilder implements Builder {
    var product = new Product()

    method buildPartA() {
        // build part A of product
    }

    method buildPartB() {
        // build part B of product
    }

    method getResult() return product
}

class Director {
    var builder: Builder

    method construct() {
        builder.buildPartA()
        builder.buildPartB()
    }
}

var builder = new ConcreteBuilder()
var director = new Director(builder)
director.construct()
var product = builder.getResult()
```

### When to Use

The Builder Pattern is particularly useful when:

- You need to control the construction process of complex objects.
- You want to construct different representations using the same builder
  logic.
- The construction process should be independent of the parts that make
  up the object.

The pattern enhances flexibility and makes the code easier to extend
and maintain by discretizing the construction process into manageable
and reusable steps. Additionally, it supports different
assembly patterns, allowing for varied complex objects to be
constructed in a unified way.

## 08. Prototype Pattern

The Prototype Pattern is a creational design pattern that allows you 
to create new objects by copying or cloning an existing object, known 
as the prototype. This pattern is particularly useful when the object 
creation process is costly in terms of time or resources, or when an 
object should not have its underlying structure exposed.

### Key Concepts

- **Cloning**: The fundamental concept of the Prototype Pattern is 
  cloning an existing object to produce new objects.
- **Prototype Interface**: This defines a method for cloning itself.
- **Prototype Instance**: An instance of the object that supports 
  cloning through the prototype interface.

### Applicability

Use the Prototype Pattern when:

- A system should be independent of how its products are created.
- The cost of creating an object is expensive or complex.
- You need to reduce the subclasses of an object by 
  allowing multiple configurations.

### Implementation Steps

1. Define a prototype interface that declares a method for cloning.
2. Create concrete classes that implement this interface and 
   define the method to clone itself.
3. Utilize the prototype manager to maintain a set of the 
   available prototypes or clones.
4. Leverage the clone method to create new objects based on a 
   prototype instance.

### Pros

- Reduces the repetitive creation of similar objects.
- Eliminates the need for class instantiation directly, improving 
  abstraction.
- Aids in simplifying the creation process of complex objects.

### Cons

- The implementation and usage might be complex with 
  long prototype chains.
- Cloning might involve deep or shallow copies depending 
  on the desired level of copying.

The Prototype Pattern is very adaptable for situations requiring 
the replication of complex objects and is beneficial in scenarios 
where objects are dynamically modified or instantiated.

## 09. Structural Design Patterns

Structural design patterns are concerned with composing classes or objects
into larger structures. These patterns simplify the design by identifying
a simple way to realize relationships among entities. They help ensure that
if one part of a structure changes, the entire system stays intact.

One common principle among structural patterns is "composition over
inheritance." This principle suggests using object composition to achieve
flexibility, by composing objects to get new functionality, rather than
through inheritance.

Some of the most popular structural design patterns include:

1. **Adapter Pattern**: Allows the interface of an existing class to be
   used as another interface. It's often called "Wrapper."

2. **Bridge Pattern**: Separates an object’s abstraction from its
   implementation, allowing them to be developed independently.

3. **Composite Pattern**: Composes objects into tree structures to
   represent part-whole hierarchies. It lets clients treat individual
   objects and compositions of objects uniformly.

4. **Decorator Pattern**: Adds responsibilities to objects dynamically
   and provides a flexible alternative to subclassing for extending
   functionality.

5. **Facade Pattern**: Provides a simplified interface to a complex
   subsystem, by sorting out the interface to all the components in
   a system.

6. **Flyweight Pattern**: Reduces the cost of creating and using a large
   number of similar objects. It achieves this by sharing objects that
   are similar in some way.

7. **Proxy Pattern**: Provides a surrogate or placeholder for another
   object to control access to it.

Understanding and applying these structural patterns can greatly
enhance the performance, flexibility, and scalability of your software,
and they play a crucial role in software design.

## 10. Adapter Pattern

The Adapter Pattern is a structural design pattern that allows objects 
with incompatible interfaces to work together. By acting as a bridge 
between the interfaces, an adapter converts the interface of a class 
into another interface that a client expects.

### Intent

The primary intent of the Adapter Pattern is to provide a unified 
interface that enables the collaboration of otherwise incompatible 
interfaces. It allows for flexibility and reusability of code by 
encapsulating the details of interfacing and translating calls from 
one interface to another.

### When to Use

- When there is a set of APIs that need to work together but have 
incompatible interfaces.
- To reuse a class that is not compatible with the system.
- To convert one interface into another that can be conveniently used 
by a system's client code.

### Participants

- **Target Interface:** Defines the domain-specific interface that 
Clients use.
- **Client:** Interacts with objects conforming to the Target interface.
- **Adaptee:** Defines an existing interface that needs adapting.
- **Adapter:** Adapts the interface of the Adaptee to the Target 
interface.

### Example

Consider a scenario where a client application needs to interact with 
different payment gateway interfaces. In this case, each payment 
gateway might have a unique API which a client cannot directly interact 
with. By employing the Adapter Pattern, the client application can 
use a unified payment method interface by implementing an adapter 
that interfaces with the specific payment gateway APIs.

The Adapter Pattern is invaluable in situations where you need to 
integrate components that are likely to have conflicting interfaces, 
providing an effective way to decrease the coupling between systems.

## 11. Bridge Pattern

The Bridge Pattern is a structural design pattern that separates the abstraction
from its implementation so that the two can vary independently. This pattern
involves an interface or abstract class that defines the operations, and a
separate concrete class to implement these operations. Bridging the interface
and implementation allows them to evolve separately, making the system more
maintainable and scalable.

### Key Components

1. **Abstraction**: Contains a reference to the implementor and defines
   the interface for controlling the implementor.

2. **Implementor**: Provides an interface for the implementation classes.

3. **Concrete Implementor**: Implements the Implementor interface and
defines the concrete implementation.

### When to Use the Bridge Pattern

- When you want to avoid a permanent binding between abstraction and its
  implementation.
- When you need to share an implementation among multiple objects and
the abstraction and implementation should be independently extendable
  through subclasses.
- When changes to the implementation should not affect the interface
  or abstraction.

### Example

Consider a drawing application that uses various graphics APIs (like DirectX
or OpenGL).

```cpp
class DrawingImplementor {
  virtual void drawCircle(float x, float y, float radius) = 0;
};

class OpenGLImplementor : public DrawingImplementor {
  void drawCircle(float x, float y, float radius) override {
    // OpenGL specific implementation
  }
};

class Shape {
protected:
  DrawingImplementor* implementor;
public:
  virtual void draw() = 0;
};

class Circle : public Shape {
  float x, y, radius;
public:
  Circle(float x, float y, float radius, DrawingImplementor* impl)
   : x(x), y(y), radius(radius), implementor(impl) {}
  void draw() override {
    implementor->drawCircle(x, y, radius);
  }
};
```

This pattern encourages cleaner code and reduces the complexity involved in
changing or managing both abstractions and their corresponding implementations.

## 12. Composite Pattern

In the realm of software design, the Composite Pattern is a structural 
design pattern that allows you to compose objects into tree structures 
to represent part-whole hierarchies. The pattern facilitates treating 
both individual objects and compositions of objects uniformly.

The Composite Pattern typically involves three main participants:
1. **Component**: An abstract class that declares the interface for 
components in the composition.
2. **Leaf**: Represents leaf objects in the composition. A leaf has no 
children.
3. **Composite**: Defines a branch node in the tree structure. 
It maintains a collection of child components.

### Intent
The purpose of the Composite Pattern is to:
- Compose objects into tree structures to represent hierarchies.
- Let clients treat individual objects and compositions uniformly.

### Applicability
Use the Composite Pattern when you:
- Need to represent part-whole hierarchies of objects.
- Want clients to be able to ignore the difference between compositions 
of objects and individual objects.

### Example
Imagine a drawing application where you need to manage different types 
of graphic objects (e.g., circles, squares). Using the Composite 
Pattern, you can create a complex drawing consisting of different 
shapes and group them into a single object.

```cpp
class Graphic {
public:
    virtual void draw() = 0; // Interface for drawing
};

class Circle : public Graphic {
public:
    void draw() override {
        // Draw a circle
    }
};

class Square : public Graphic {
public:
    void draw() override {
        // Draw a square
    }
};

class CompositeGraphic : public Graphic {
private:
    std::vector<Graphic*> children;
public:
    void draw() override {
        for(auto& child : children) {
            child->draw();
        }
    }
    void add(Graphic* g) {
        children.push_back(g);
    }
};
```

In this example, `CompositeGraphic` holds children of type `Graphic`, 
allowing both individual graphics and compositions to be treated 
uniformly as graphics, thereby streamlining operations across 
elements in the structure.

## 13. Decorator Pattern

The Decorator Pattern is a structural design pattern that allows behavior 

or responsibilities to be added to individual objects, either statically 

or dynamically, without affecting the behavior of other objects from the 

same class. In essence, it provides a flexible alternative to subclassing 

for extending functionality.

### Key Concepts

1. **Component Interface**: Defines the interface for objects that can 

   have responsibilities added to them dynamically.

2. **Concrete Component**: This is the original object to which additional 

   responsibilities can be attached.

3. **Decorator Class**: Maintains a reference to a component object and 

   defines an interface that conforms to the component's interface.

4. **Concrete Decorators**: Extends the functionality of the component 

   by implementing additional behavior.

### Example

Consider a text editor that allows you to add functionality to a text 

element such as borders or scrollbars. Instead of creating new classes 

for each combination of features, the Decorator Pattern allows you to 

add features dynamically using a decorator.

#### Real-world Scenario

Imagine a simple coffee shop application. You start with a basic coffee 

class, and then use decorators to dynamically add ingredients like 

milk, sugar, and whipped cream without creating complex subclass trees.

### Advantages

- **Flexibility**: Achieves behavior combinations at runtime.
- **Reusability**: Decorators add responsibilities to objects without 

  touching the actual object code.

### Use Cases

- When you need to add responsibilities to individual objects 

  dynamically without affecting other objects.
- When subclassing for every possible combination of features would 

  result in an explosion of subclasses.

## 14. Facade Pattern

The Facade Pattern is a structural design pattern that provides a simplified 
interface to a complex subsystem. It aims to reduce the complexity of 
interacting with classes by providing a single interface to client classes, 
making it easier for users to work with the subsystem without needing to 
understand its complexities.

The Facade Pattern is beneficial when dealing with legacy systems, 
as it allows the introduction of a new interface without changing the 
existing code. It also enhances readability and reduces interaction 
between clients and the complex subsystem, which can help maintain 
decoupling in software applications.

### Example

Consider a scenario where you have a complex library for handling video 
conversion. By using a Facade, you can provide a simple interface that 
lets clients perform video conversions without diving into the complexity 
of the underlying library code.

#### Structure
- **Facade**: Offers high-level methods that internally use complex parts 
of the subsystems.
- **Subsystem classes**: Perform the actual work assigned by the Facade. 
Each subsystem may know the others but it should not expose its details 
outside.

#### Applicability
- Use the Facade pattern when you need to simplify the interaction with a 
complex subsystem.
- When you want to create a layer that decouples your client from the 
complex implementation of the subsystem.

#### Benefits
- **Simplified Interface**: Provides a higher-level interface for easier 
client interaction.
- **Decoupling**: Clients are less dependent on the details of internal 
subsystems.
- **Flexibility**: Changes in a subsystem don’t affect the client as long 
as the interface remains unchanged.

#### Downsides
- **Limited control**: Clients might lose access to some powerful 
operations if they are only interacting through a Facade.
- **Potential Overhead**: Introducing a facade might lead to minimal 
performance overhead due to the additional layer.

The Facade Pattern is a great way to provide a simplified interface 
to external systems, making it easier to manage and understand complex 
subsystems.

## 15. Flyweight Pattern

The Flyweight Pattern is a structural design pattern that allows programs to 
manage large numbers of similar objects efficiently. By sharing common state 
among multiple objects, it reduces memory usage and improves performance. 
Commonly, the Flyweight Pattern is used in scenarios where an application 
creates substantial numbers of identical or similar objects.

### Overview

In the Flyweight Pattern, objects are split into intrinsic (shared) and 
extrinsic (unique) states. The intrinsic state is shared across all instances 
of the object, while the extrinsic state varies with each instance.

#### Components

1. **Flyweight Interface**: Defines operations that can be performed on shared 
objects.

2. **ConcreteFlyweight**: Implements the Flyweight interface and stores the 
intrinsic state.

3. **UnsharedConcreteFlyweight**: Represents flyweight objects that can't be 
shared. It operates exclusively on extrinsic states.

4. **FlyweightFactory**: It manages and creates Flyweight objects, ensuring 
that shared objects are used efficiently.

### Example

Consider a text editor, where each character may be considered an object. 
Instead of creating a new object for every individual character, a 
character's glyph (part of its appearance) becomes the intrinsic state, 
shared amongst all similar characters.

The editor only varies the extrinsic state, such as position and color, 
reducing memory overhead.

#### Advantages and Disadvantages

**Advantages:**
- Reduced memory overhead.
- Improved performance by reusing common parts of the state.

**Disadvantages:**
- Increased complexity in code.
- Involves extrinsic state management, which can lead to errors.

In conclusion, the Flyweight Pattern is instrumental in reducing memory 
loads by sharing objects and managing state, making it invaluable in high-performance and resource-constrained applications.

## 16. Proxy Pattern

The proxy pattern is a structural design pattern that provides a surrogate 
or placeholder for another object to control access to it. A proxy object 
acts as an intermediary, forwarding requests to the original object and 
optionally adding additional functionality, such as lazy initialization, 
access control, logging, or caching.

### Key Concepts

- **Subject Interface:** The common interface implemented by the Real Subject
  and Proxy objects, ensuring consistency in requests.
- **Real Subject:** The actual object being represented and controlled.
- **Proxy:** The intermediary object that contains a reference to the real
  subject and implements the same interface to ensure transparency.

### Use Cases

- **Remote Proxy:** Manages interactions for objects in different address 
  spaces, typically used in network connections.
- **Virtual Proxy:** Delays resource-intensive object creation, or 
  initialization until needed. 
- **Protection Proxy:** Controls access to a critical object based on access 
  rights.
- **Smart Proxy:** Provides additional functionalities like caching, 
  referencing counting, etc.

### Example

Consider a virtual proxy to delay the loading of a large image file until it 
is actually needed. This can reduce memory usage and improve performance.

![Example Diagram](https://example.com/proxy-pattern-diagram)

1. **Subject Interface:** Defines common methods for both the proxy and real 
   image.
2. **Real Image:** Contains the concrete implementation needed to load and 
   display the image.
3. **Proxy Image:** Implements the same subject interface but loads the image
   when display is called for the first time.

The proxy pattern is useful when there's a need to control the access to an 
object while ensuring transparency. This makes it a versatile tool for 
resolving various structural problems within software design.

## 17. Behavioral Design Patterns

Behavioral design patterns are patterns that focus on communication between
objects and the way they interact and fulfill their responsibilities. These
patterns help in designing solutions for defining complex flows within a
system, understanding how processes can be modeled, and managing interactions
between interacting objects in a manageable and scalable way.

In this article, we'll explore the following key aspects of behavioral design
patterns:

1. **Purpose**: To manage object collaboration, define clear interaction flows,
and optimize the distribution of responsibilities between objects.

2. **Common Patterns**: Includes well-known patterns like Strategy, Observer,
Mediator, and Command, among others.

3. **Key Characteristics**: Behavioral patterns often deal with immutable
patterns, object state changes, and collaboration dynamics. Primarily, they
are concerned with identifying common boundaries for behavior encapsulation.

4. **Benefits**: Simplified communication between objects, enhanced scalability
and flexibility through well-defined interfaces, improved readability and
maintenance of code due to clear communication paths between components.

#### Example Patterns Overview

- **Strategy Pattern**: Enables an algorithm's behavior to be selected at
runtime. It's particularly useful for defining a family of algorithms,
encapsulating each one, and making them interchangeable.
  
- **Observer Pattern**: A subscription model where an object, known as the
subject, maintains a list of objects depending on it (observers) and notifies
them of any changes.

- **Mediator Pattern**: Centralizes complex communications and control among
related objects. It simplifies maintenance by localizing the behavior
that otherwise would be distributed across several objects.

- **Command Pattern**: Encapsulates a request as an object, thereby allowing
for parameterizing clients with queues, requests, and operations.

#### Use Cases

Behavioral patterns are used in numerous scenarios, such as GUI toolkits where
the Strategy pattern is used for rendering engines, or in event handling
systems, which often employ the Observer pattern. These patterns facilitate
robust system architectures by enhancing communication flow and ensuring better
interaction management.

## 18. Observer Pattern

The Observer Pattern is a behavioral design pattern that establishes a
one-to-many dependency between objects, ensuring that when one object changes
state, all its dependents are notified automatically. This pattern is
particularly useful for scenarios where the state of one object must be
reflected across multiple other objects.

### Key Components

- **Subject (Observable)**: The object being observed. Maintains a list of
dependents (observers) and provides methods to attach, detach, and notify
observers of any state changes.

- **Observer**: The object that needs to be informed of state changes in
the subject. It defines an updating interface for objects that should be
notified of changes in a subject.

- **ConcreteSubject**: Extends Subject and stores state that should be
monitored. When this state changes, the ConcreteSubject sends notifications to
all registered observers.

- **ConcreteObserver**: Implements the updating interface to keep its state
consistent with subjects. It observes the ConcreteSubject and reflects any
state changes accordingly.

### Practical Examples

- In a user interface, buttons, sliders, and fields need to be updated when
the corresponding data model changes.

- Stock market tickers that update clients' displays when stock values
change.

- Email subscription services where users receive updates on new content
published.

### Conclusion

The Observer Pattern is a powerful tool that decouples objects in such a way
that their dependencies are managed dynamically at runtime. By removing
deriving classes' dependencies on complex classes, this pattern helps
maintain code that is organized and maintainable. It promotes the idea of
programming to interfaces, not implementations.

## 19. Chain of Responsibility Pattern

In software development, the Chain of Responsibility pattern allows a
request to be processed by multiple handlers, one after another, until
it has been handled. This design pattern decouples sender and receiver
of a request, enabling multiple objects to potentially handle the
request.

### Intent

The primary aim of the Chain of Responsibility is to pass the request
along a chain of potential handlers until one of them handles it.
Creating a chain of loosely coupled handlers allows requests to be
processed in a dynamic and flexible manner without hard coding them
to any handler.

### Structure

Here is a basic structure of the Chain of Responsibility Pattern:
- **Handler**: Defines an interface for handling requests and
  optionally implements the successor link.
- **Concrete Handler**: Handles requests it is responsible for and
  forwards requests along the chain.
- **Client**: Initiates the request to a chain of handlers.

```
interface Handler {
    handleRequest(): void;
    setNext(handler: Handler): void;
}

class ConcreteHandler implements Handler {
    private next: Handler;

    public handleRequest(): void {
        // Process request or pass it to the next handler
        if (this.canHandleRequest()) {
            // Handle the request
        } else if (this.next) {
            this.next.handleRequest();
        }
    }

    public setNext(handler: Handler): void {
        this.next = handler;
    }
}
```

### Example Use Cases

- **UI Event Handling**: Many systems use this pattern for menu or
button event handling.
- **Logging Systems**: Chain of Responsibility is useful when
implementing logging systems with different responsibility levels.
- **Task Processing Pipelines**: Similar concepts are used in
pipelines where tasks need processing through several stages.

### Advantages

- Promotes loose coupling: Enhances flexibility adding/removing
responsibilities.
- Chain can be configured dynamically at runtime.

### Disadvantages

- If not managed properly, chains can become hard to track and
debug.
- Request processing might suffer if chain grows too long.

The Chain of Responsibility is especially useful in situations where a
request must be handled by one at a time in a dynamic way.

## 20. Advanced Design Patterns

As we venture into the realm of advanced design patterns, there are several
patterns that stand out for their specialized applications in software
design. These patterns often address complex or unconventional problems,
making them invaluable tools for experienced software architects.

### 1. Model-View-Controller (MVC)

The Model-View-Controller pattern is widely used in designing user interfaces.
It divides an application into three interconnected components:

- **Model**: Manages data and business logic.
- **View**: Handles the presentation layer and user interface.
- **Controller**: Acts as an interface between Model and View, processing user
  input and updating the Model.

### 2. Model-View-ViewModel (MVVM)

MVVM is another UI-centric pattern, resembling MVC but with a focus on
binding. It separates:

- **Model**: Business logic and data representation.
- **View**: User interface and visual representation.
- **ViewModel**: Serves as a link, binding the View and Model, managing UI
  state.

### 3. Presentation Model

Similar to MVVM, this pattern separates the view from the business logic
to facilitate unit testing and flexibility.

### 4. Dependency Injection (DI)

DI is not a pattern per se but a technique often employed for decoupling
dependencies. It allows for better testability and manageability by
injecting dependencies at runtime.

### 5. Event Sourcing

Event Sourcing is a pattern where state changes are captured as a sequence
of events. This provides a comprehensive history of changes, enhancing
auditing and rollback capabilities.

### 6. CQRS (Command Query Responsibility Segregation)

CQRS separates reading and updating data in a system, optimizing for
read-heavy applications, enhancing performance, and scalability.

Explore these patterns to gain a deeper understanding of sophisticated
software architecture, and discover which solutions align best with
your needs in different scenarios.
