# C Modern

- [01. Introduction to C Modern](#01-introduction-to-c-modern)
- [02. Key Features of Modern C](#02-key-features-of-modern-c)
- [03. Use of `auto` Keyword in C Modern](#03-use-of-auto-keyword-in-c-modern)
- [04. NULL Pointers in Modern C](#04-null-pointers-in-modern-c)
- [05. Type Inference using `decltype` in Modern C](#05-type-inference-using-decltype-in-modern-c)
- [06. Lambda Expressions in Modern C](#06-lambda-expressions-in-modern-c)
- [07. Smart Pointers in C Modern](#07-smart-pointers-in-c-modern)
- [08. Understanding RAII in C Modern](#08-understanding-raii-in-c-modern)
- [09. Move Semantics in Modern C](#09-move-semantics-in-modern-c)
- [10. Concurrency and Multithreading in Modern C](#10-concurrency-and-multithreading-in-modern-c)
- [11. Introduction to Parallel Algorithms in C Modern](#11-introduction-to-parallel-algorithms-in-c-modern)
- [12. Understanding Concepts in Modern C](#12-understanding-concepts-in-modern-c)
- [13. Error Handling with Exceptions in Modern C](#13-error-handling-with-exceptions-in-modern-c)
- [14. Understanding Modules in Modern C](#14-understanding-modules-in-modern-c)
- [15. Understanding Ranges in Modern C](#15-understanding-ranges-in-modern-c)
- [16. Understanding Coroutines in Modern C](#16-understanding-coroutines-in-modern-c)
- [17. Using `std::variant` in Modern C](#17-using-stdvariant-in-modern-c)
- [18. The Filesystem Library in Modern C](#18-the-filesystem-library-in-modern-c)
- [19. Understanding Networking in Modern C](#19-understanding-networking-in-modern-c)
- [20. Understanding Memory Management in Modern C](#20-understanding-memory-management-in-modern-c)

## 01. Introduction to C Modern

C Modern refers to the recent developments and enhancements in the
C programming language designed to meet contemporary programming
needs. The language, known for its efficient performance and near-universal
compatibility, has evolved over decades. However, modern C standards
have introduced advanced features and improvements that allow more
straightforward, safer, and more efficient code writing.

This series will explore these modern enhancements, starting from
safety improvements like bounds checking, and moving onto advanced
topics such as threading, atomics, and the latest library additions.
Whether you're an experienced C programmer or a beginner, this series
will provide valuable insights into leveraging modern C features for
writing robust and efficient code.

Let's embark on a journey through C's evolution to its modern
iteration, where we will explore features that align with today's
software development paradigms. Stay tuned as we delve into various
facets of C Modern in the following articles.

## 02. Key Features of Modern C

Modern C brings several important features that have made the language 
easier to use and more powerful. These advancements primarily come from 
the C11 standard, with some features introduced in C99.

### Key Features

1. **Static Assertions**: Improved compile-time error checking with 
   `_Static_assert` to ensure conditions are met at compile-time.

2. **Anonymous Structures and Unions**: This facilitates easier 
definition and management of nested structure and union members without 
explicit names.

3. **Type-generic Macros**: Using `_Generic`, you can create type 
independent standard macros, making APIs simpler to use.

4. **Multithreading Support**: C11 introduced library functions for 
multithreading, including threads and mutexes, increasing the language's
 versatility for concurrency.

5. **Atomic Operations**: With the `_Atomic` keyword, atomic operations 
are supported, allowing operations to be performed directly in memory 
without data races in a multithreaded environment.

6. **Improved Unicode Support**: Better support for Unicode characters 
with added char types like `char16_t` and `char32_t` for portability.

7. **Variable Length Arrays (VLAs)**: Although introduced in C99, 
VLAs are an important feature providing more flexible data structures.

Modern C aims to enhance reliability, performance, and functionality in 
software development while maintaining backward compatibility with 
legacy code.

## 03. Use of `auto` Keyword in C Modern

In modern C, the `auto` keyword has gained popularity for its ability to 
facilitate type inference. While traditionally associated with stack 
allocation (which is the default for local variables), `auto` in C has been 
reimagined similar to its C++ counterpart to infer the type of a variable based 
on the assigned value.

Here's an example demonstrating `auto` usage:

```c
##include <stdio.h>

int main() {
    auto int a = 5;  // Type is explicitly specified
    auto b = 5;     // Type inferred as int
    printf("a: %d, b: %d\n", a, b);
    return 0;
}
```

This modern approach simplifies the code by reducing redundancy, but it's worth 
nothing that `auto` in C is not as widely adopted as in C++ due in part to 
compatibility considerations. This feature is more about consistency across 
similar languages and improving readability.

Future standards might expand its functionality in C, leaning into 
adopting more type inference paradigms from languages like C++ or others.

## 04. NULL Pointers in Modern C

Handling pointers has always been a crucial part of C programming. Modern C 
has brought about enhancements in dealing with `NULL` pointers, which help 
improve the understanding and usage of pointers in C programs.

A `NULL` pointer is used to signify that a pointer is not pointing to any 
valid memory address. In Modern C, better practices are encouraged to ensure 
pointers are properly initialized to `NULL`, and checks are added before 
dereferencing them. Here are some general practices:

- **Initialization to NULL**: Whenever a pointer is declared, it is a best 
  practice to initialize it with `NULL`.

  ```c
  int *ptr = NULL;
  ```

- **Checking Before Dereference**: Before dereferencing a pointer, its 
  validity can be checked with conditions.

  ```c
  if (ptr != NULL) {
      // Safe to dereference
      *ptr = 10;
  }
  else {
      // Handle the NULL case
  }
  ```

### Improvements in Modern C

While the concept of `NULL` has not changed, Modern C improves the consistency 
and safety by strongly adhering to best practices, warning against unnecessary 
use, and providing better compiler diagnostics.

## 05. Type Inference using `decltype` in Modern C

Type inference is a powerful feature in modern C programming that simplifies
coding and enhances readability. `decltype` is a keyword introduced to support
this feature by enabling the detection of types of expressions at compile-time.

### Usage

The `decltype` keyword inspects the declared type of an entity or an expression
without needing explicit declaration. This is particularly helpful in templates,
where knowing the type of an expression is crucial.

#### Basic Example
```c
int a = 42;
decltype(a) b = a;  // b is deduced to be of type int
```

In this example, `b` will have the same type as `a`, which is `int`. This makes
code maintenance easier, as any change made to the type of `a` will automati‐
cally be reflected in `b` without additional modification.

#### In Expressions

`decltype` can also deduce the type of complex expressions.
```c
auto sum = [](int x, int y) { return x + y; };
decltype(sum(1, 2)) result;  // result is of type int
```
Here, `result` is inferred to be of the same type as the expression `sum(1, 2)`.

#### With Functions
`decltype` assists with return types, ensuring functions can auto-deduct types
when returning expressions.

```c
##include <iostream>

int square(int n) {
    return n * n;
}
delctype(square(4)) area = square(4);  // area is of type int
```

Overall, `decltype` is critical for writing flexible and robust modern C code,
allowing developers to safely work with inferred types while maintaining
type safety and enhancing compile-time checks.

## 06. Lambda Expressions in Modern C

Lambda expressions are not natively supported in C the way they are in C++ or  
other languages like Python. However, with Modern C, programmers often look for  
ways to emulate this feature, mainly using function pointers and inline  
functions. Although not as straightforward or elegant as C++, these techniques  
support advanced usage scenarios that can mimic lambda functionalities.

### Emulating Lambdas

One common method to emulate lambda expressions is by defining inline functions  
that handle specific tasks and can be passed around similarly to function  
pointers. Below is a basic example:

```c
##include <stdio.h>

// Inline function to mimic a lambda expression
inline int add(int a, int b) {
    return a + b;
}

void applyFunction(int (*func)(int, int), int x, int y) {
    printf("Result: %d\n", func(x, y));
}

int main() {
    applyFunction(add, 5, 3);  // Output: Result: 8
    return 0;
}
```

#### Explanation
- The `add` function serves as an inline function mimicking a lambda.
- `applyFunction` takes a function pointer, `func`, and applies it to integers.
- This method allows passing functionalities similar to lambda expressions.

### Limitations

Emulating lambda expressions in C has its limitations:
- Lack of lexical scoping: Variables outside the function cannot easily be  
captured.
- Verbosity: Inline definitions can make the code more verbose compared to  
compact lambda syntax in higher-level languages.

Despite these limitations, function pointers and inline functions in Modern C  
provide powerful tools suitable for situations necessitating flexibility in  
function behaviors.

## 07. Smart Pointers in C Modern

In modern C programming, managing dynamic memory has always been a crucial part.
Traditional pointers can lead to issues such as memory leaks, dangling pointers,
or double deletions. Smart pointers, inspired by C++ methodologies, are not
fully native in C but can be mimicked to a degree in C Modern practices. They
aid in automatic memory management by encapsulating raw pointers and handling
their lifetime using mechanisms akin to reference counting or owning one
reference.

#### Mimicking Smart Pointers

Smart pointers can be implemented in C through structures and helper
functions. Common practices involve creating a struct that holds the pointer
and the associated metadata, such as reference count.

**Example Structure for a Reference-Counted Smart Pointer**

```c
##include <stdlib.h>

typedef struct {
    void* ptr;
    int ref_count;
} SmartPtr;

SmartPtr* createSmartPtr(void* p) {
    SmartPtr* sptr = (SmartPtr*)malloc(sizeof(SmartPtr));
    sptr->ptr = p;
    sptr->ref_count = 1; // Initial reference count
    return sptr;
}

void addRef(SmartPtr* sptr) {
    if (sptr) {
        sptr->ref_count++;
    }
}

void releaseRef(SmartPtr* sptr) {
    if (sptr && --sptr->ref_count == 0) {
        free(sptr->ptr);
        free(sptr);
    }
}
```

#### Limitations and Advantages

- **Advantages**
  - Helps in avoiding common pointer-related errors.
  - Simplifies memory management, reducing the risk of memory leaks.

- **Limitations**
  - Manual implementation can be error-prone.
  - Not inherently supported by the C language, unlike C++.

Smart pointers in C Modern are more about mimicking functionality for best
practices in memory management, showcasing a transition towards utilizing
features that focus on safe programming techniques.

## 08. Understanding RAII in C Modern

Resource Acquisition Is Initialization (RAII) is a programming idiom
used to manage resources in C++. Its principles can be applied to C
Modern with custom designs. In RAII, resource allocation is tied to
the object lifetime, leading to automatic cleanup.

RAII ensures that a resource is properly released when the object goes
out of scope. This is particularly useful for managing dynamic memory,
file handles, and locks.

### Implementing RAII in C Modern

While C does not have native support for RAII like C++, we can mimic
this behavior using structures and a convention of writing cleanup
functions. Here’s a simple way to implement RAII in C:

```c
##include <stdio.h>
##include <stdlib.h>

struct RAII_File {
    FILE *file;
};

void open_file(struct RAII_File *raii_file, const char *filename, const char *mode) {
    raii_file->file = fopen(filename, mode);
    if (raii_file->file == NULL) {
        perror("Failed to open file");
        exit(EXIT_FAILURE);
    }
}

void close_file(struct RAII_File *raii_file) {
    if (raii_file->file != NULL) {
        fclose(raii_file->file);
    }
}

int main() {
    struct RAII_File my_file;
    open_file(&my_file, "example.txt", "w");
    fprintf(my_file.file, "Hello, RAII!");
    close_file(&my_file);
    return 0;
}
```

In this example, `RAII_File` is a struct that manages a file pointer.
The `open_file` function initializes the `RAII_File`, and `close_file`
handles cleanup, ensuring that the file is always closed properly.

## 09. Move Semantics in Modern C

Move semantics is an essential feature in modern C++ (C++11 onward), designed to
optimally transfer resources from temporary objects rather than copying them.
While technically rooted in C++ features, understanding the concept can benefit
C programmers when dealing with interoperability or considering transitioning.

### What Are Move Semantics?
Move semantics allows the resources owned by a temporary object (like heap
memory) to be transferred to another object. It is especially beneficial for
optimizing performance since it avoids costly deep copies.

### Move Constructor and Move Assignment Operator
The move constructor and move assignment operator are the two key mechanisms

- **Move Constructor:** Transfers resources in initialization
  ```cpp
  ClassName(ClassName&& other) noexcept;
  ```
- **Move Assignment Operator:** Transfers resources in assignment
  ```cpp
  ClassName& operator=(ClassName&& other) noexcept;
  ```

### Benefits of Move Semantics
- **Efficiency in Resource Management:** Reduces unnecessary memory allocation
  and copying, boosting performance.
- **RVA Optimization:** Return Value Optimization is naturally enhanced,
  particularly for temporary objects.

### When to Use Move Semantics?
Move semantics shine in classes managing resources like dynamic arrays,
file handles, or network connections, where the cost of copying resources
is high compared to the move.

### Conclusion
While move semantics is primarily a C++ feature, its understanding can offer
C programmers insights into efficient resource management and optimal
application performance.

Incorporating such strategies ensures that C code, especially when mixed with
C++, remains robust and runs efficiently in modern applications.

## 10. Concurrency and Multithreading in Modern C

Modern C, though not as inherently equipped for concurrency as some other
languages, has seen incremental improvements with each C standard.
Developers can actively utilize threading capabilities using libraries and
techniques available in the ecosystem.

The ISO C11 standard introduced with threading capabilities constitutes
 an essential move towards built-in concurrency. With C11, the Language
offers a standardized approach to creating and managing threads, handling
mutexes (locks), and defining condition variables.

The `<threads.h>` library in C11 introduces several fundamental tools:

- `thrd_create`: Initializes a new thread.
- `thrd_join`: Waits for a specified thread to finish execution.
- `mtx_lock` and `mtx_unlock`: Handle mutex locks for critical sections.
- `cnd_wait` and `cnd_signal`: Condition variables for blocking threads.

Programs utilizing concurrency can now be designed to make the most of
multi-core processor capabilities, handling tasks in parallel and potentially
improving performance dramatically.

By mastering concurrency and multithreading in Modern C, developers can write
more efficient and powerful applications capable of leveraging today's hardware.

## 11. Introduction to Parallel Algorithms in C Modern

Parallel algorithms leverage multiple processing elements simultaneously to
solve problems faster and more efficiently. With multicore processors becoming
standard, the ability to write parallel code is crucial.

Modern C provides several libraries and features that support parallel
programming. Understanding how to utilize these capabilities can enhance
performance in computationally intensive applications.

In this article, we will cover the fundamental concepts of parallel algorithms
and how Modern C aids in implementing them.

### Parallel Programming Models

1. **Data Parallelism**: Spreading data across multiple cores for concurrent
   operations.

2. **Task Parallelism**: Performing different operations simultaneously on
the cores.

3. **Hybrid Parallelism**: Combining both data and task parallelism for
   complex operations.

### Tools in Modern C

- **OpenMP**: A powerful API for parallel programming in C.
- **C11 Threads**: Native threading introduced in C11 for better multi-threading
  support.
- **Pthreads**: The classic POSIX threads for traditional multi-threaded
  applications.

With this foundation in place, you can dive deeper into writing efficient
parallel algorithms using Modern C. The ensuing articles will offer more
in-depth exploration of these tools and techniques.

## 12. Understanding Concepts in Modern C

In C Modern, concepts act as a form of constraint validation for
templates, allowing you to specify that a template parameter must meet
certain requirements. This follows the nature of compile-time concepts,
similar to interfaces in other programming languages, but checked at
compile-time for C++.

### What are Concepts?

Concepts are named sets of requirements that a template's parameters
must satisfy. They help in making template programming more robust and
understandable by providing clearer error messages and enforcing design
intents earlier in the compilation process.

Concepts are incorporated into the language through the keyword
`concept`. With this, you can define the rules or interfaces that a
type must fulfill to be used in certain contexts.

### Example of a Concept Definition

Let's consider a simple example of a concept definition in C Modern:

```c
##include <concepts>

// Define a concept to check for integral types
concept bool Integral = std::is_integral_v<T>;

// Usage in a function template
void exampleFunction(Integral auto value) {
    // Function implementation
}
```

In the above example, `Integral` is a concept that checks if a given
type is integral using `std::is_integral_v`. The `exampleFunction` uses
this concept to restrict its parameter to only integral types.

### Using Concepts Wisely

1. **Clarity:** Concepts increase code clarity by explicitly stating
   the requirements of template parameters.
2. **Error Messages:** Provide clearer compile-time error messages.
3. **Optimization:** Helps the compiler optimize the code more
   efficiently by understanding the intent and constraints early.

### Conclusion

Concepts in C Modern offer a cleaner, more readable and manageable
template programming paradigm that catches errors early and enforces
proper design structures. Utilizing concepts correctly can make your
code not only safer but also easier to maintain and reason about.

## 13. Error Handling with Exceptions in Modern C

Modern C provides robust mechanisms for error handling that are more flexible
and maintainable than traditional error codes. Using exceptions, programmers
can separate error handling code from the main logic, enhancing readability
and maintainability.

### Advantages of Using Exceptions

1. **Separation of Concerns**: Isolates error handling from normal logic.
2. **Stack Unwinding**: Automatically cleans up resources via RAII, reducing
   memory leaks.
3. **Propagation**: Easily propagate errors up the call stack without
   cluttering functions with return values or error flags.

### Basics of Exception Handling

In languages that support exceptions, such as C++, exception handling is often
managed by three primary keywords: `try`, `catch`, and `throw`.

#### try

The `try` block contains the code that may generate an exception. It allows
you to specify a block of code to monitor exceptions.

```c
try {
    // Code that might throw an exception
}
```

#### catch

The `catch` block handles the exceptions. You can define multiple `catch`
blocks to handle different types of exceptions.

```c
catch (const std::exception& e) {
    // Exception handling code
}
```

#### throw

Use `throw` to signal that an error has occurred. You can throw any
expression or object in C++.

```c
throw std::runtime_error("An error occurred");
```

#### Example

Here is a simple example of using exceptions in Modern C.

```c
##include <iostream>
##include <stdexcept>

void process(int value) {
    if (value < 0) {
        throw std::invalid_argument("Negative value not allowed.");
    }
    std::cout << "Processing value: " << value << std::endl;
}

int main() {
    try {
        process(-1);
    } catch (const std::invalid_argument& e) {
        std::cerr << "Caught exception: " << e.what() << std::endl;
    }
    return 0;
}
```

This example demonstrates how you can use exceptions to gracefully handle
errors, maintaining a clean separation between error handling and
application logic.

In conclusion, using exceptions in Modern C can improve your code structure,
making programs easier to debug and maintain. As you incorporate exceptions
into your C programs, remember that they should be used judiciously, as
excessive use can lead to complex control flows.

## 14. Understanding Modules in Modern C

Modern C has introduced modules as a better way to manage program 
organization and dependencies. Modules aim to eliminate the problems 
arising from traditional header files and enhance compile-time speed 
by improving encapsulation and semantic clarity.

### Introduction to Modules

A module in Modern C essentially represents a translation unit and 
consists of:

1. Module-interface: The part of the module designed to be exposed 
   and used by other translation units.
2. Module-implementation: The part that contains internal logic not 
   exposed to other modules.

### Benefits of Using Modules

- **Encapsulation**: Modules allow better organization of code, 
  reducing external dependencies and preventing name pollution.
- **Faster Compilation**: They improve compile times because once a 
  module is compiled, it doesn’t need to be parsed or compiled again.
- **Clear Dependencies**: Modules provide a clear indication of 
  dependencies between different parts of the program.

### Declaration of a Module

Creating a module involves:

- Using `export` keyword to define functions and variables that 
  should be accessible outside the module.
- Specifying the module name with `module [name];` syntax.

#### Example:

```c
// module_header.c
export module math;
export int add(int a, int b) {
    return a + b;
}

// main.c
import math;
##include <iostream>

int main() {
    std::cout << "Sum: " << add(5, 3) << std::endl;
    return 0;
}
```

### Conclusion

Modules in Modern C provide a robust alternative to the traditional 
include mechanism by enhancing encapsulation and compile-time 
efficiency. Leveraging modules can lead to cleaner, more efficient 
codebases.

## 15. Understanding Ranges in Modern C

Ranges in Modern C offer a unified interface for algorithms to iterate over 
sequences of elements. Introduced as part of the ongoing modernization efforts 
in C++, ranges aim to provide easier and more secure manipulation of collections.
While not inherent to C, C developers can adopt similar paradigms for better 
collection handling.

### Background

Traditionally, handling collections in C required direct manipulation of arrays 
or pointers, often leading to complex and error-prone code. By abstracting 
these operations through the use of ranges, code becomes more intuitive and 
easier to maintain.

### Key Concepts of Ranges

#### Iterator and Sentinel

A range is defined by an iterator and a sentinel. The iterator points to the 
beginning of the range, while the sentinel marks its end. This separation allows 
for flexible iteration mechanisms.

#### Views and Actions

- **Views**: These are lightweight objects transforming elements within a 
  range without owning the actual data. Examples include filtering and 
  mapping.
- **Actions**: Actions are operations applied to ranges that may modify the 
  data, like sorting or shuffling.

### Benefits of Using Ranges

- **Readability**: Code using ranges tends to be more readable due to 
  abstracted operations.
- **Safety**: Reduces the risks of common errors such as buffer overruns by 
  handling collection boundaries implicitly.

### Implementing Ranges in C

While C lacks built-in support for ranges like C++, developers can structure 
their code using similar paradigms by defining:

- A custom iterator and sentinel pair.
- Functions to operate on these iterators similarly to views and actions.

This pseudo-range approach can simplify complex collection operations in C, 
making the code base more maintainable and robust.

## 16. Understanding Coroutines in Modern C

Coroutines are an advanced feature offered by Modern C.
They represent generalized routines that can be paused and
resumed during execution. Coroutines provide enhanced support
for asynchronous programming and can help streamline the use of async
operations in a more efficient and readable manner.

### Basics of Coroutines

A coroutine is defined using the `co_await`, `co_yield`, and
`co_return` keywords. Unlike functions, coroutines do not
terminate upon returning a value. Instead, they resume execution
from where they left off, thus requiring support for saving and
restoring state.

#### `co_await`

The `co_await` keyword is used when calling an operation that
requires waiting, thereby allowing other operations to proceed
while waiting.

#### `co_yield`

The `co_yield` keyword provides values temporarily and then
resumes processing when requested.

#### `co_return`

The `co_return` keyword finally allows a coroutine to complete
and return a value to the caller. Coroutines can enhance
performance, especially in scenarios with heavy I/O operations
or where concurrent execution is needed.

### Implementing Coroutines

Implementing coroutines involves writing classes or functions
that handle the suspended state. Modern C allows specification of
return objects to streamline coroutine usage.

```cpp
##include <iostream>
##include <coroutine>

struct CoroutineExample {
  struct promise_type {
    CoroutineExample get_return_object() { return {}; }
    std::suspend_never initial_suspend() { return {}; }
    std::suspend_always final_suspend() noexcept { return {}; }
    void unhandled_exception() {}
    void return_void() {}
  };
};

CoroutineExample myCoroutine() {
  std::cout << "Coroutine started\n";
  co_await std::suspend_always{};
  std::cout << "Coroutine resumed\n";
}

int main() {
  auto cor = myCoroutine();
  // Handle coroutine state etc.
}
```

In this example, a coroutine is defined with handlers for initial
and final suspend states. The coroutine can be paused using
`suspend_always` and resumed by the calling code.

Coroutines provide a structured approach to managing
asynchronous operations effectively in concurrent applications,
introducing efficient techniques to enrich real-time programming.

## 17. Using `std::variant` in Modern C

In Modern C, managing multiple types within a single variable can often be a 
requirement. The `std::variant` template from the C++17 standard library offers a 
solution by allowing us to define a type-safe union of several possible types. 
It's a flexible and powerful construct for scenarios where a variable can have 
multiple types.

### Defining a `std::variant`

To use a `std::variant`, you need to specify its possible types when declaring 
it. Here's an example:

```cpp
##include <variant>
##include <string>

int main() {
    std::variant<int, float, std::string> myVariant;
    return 0;
}
```

In this example, `myVariant` can hold an `int`, `float`, or `std::string`. 

### Assigning Values

Assigning a value to a `std::variant` is straightforward. You can treat it like 
a regular assignment, and it will hold the correct type:

```cpp
myVariant = 10; // Holds an integer
myVariant = 10.5f; // Now holds a float
myVariant = "Hello, World!"; // Now holds a string
```

### Accessing Values

Accessing the value stored in a `std::variant` requires using `std::get` or 
`std::visit`. These functions provide a type-safe way to retrieve or act on the 
value:

```cpp
##include <iostream>

// Getting value directly
int i = std::get<int>(myVariant);

// Using std::visit
std::visit([](auto&& arg){std::cout << arg;}, myVariant);
```

If you attempt to retrieve a type that is not currently held by the `std::variant`,
`std::get` will throw a `std::bad_variant_access` exception.

### Alternative Access: `std::get_if`

For safer access, `std::get_if` provides a pointer to the value if the variant 
currently holds the requested type, otherwise it returns `nullptr`:

```cpp
if (auto val = std::get_if<int>(&myVariant)) {
    std::cout << *val << std::endl;
} else {
    std::cout << "Not an int!" << std::endl;
}
```

`std::variant` enhances type safety and flexibility within your programs by 
allowing several types to be used interchangeably, simplifying the management 
of variant types and associated behavior in Modern C programs.

## 18. The Filesystem Library in Modern C

The C++17 standard introduced the Filesystem Library as part of Modern C++.
This library provides functionalities to perform queries and manipulations on
file systems, directory paths, and other file inputs and outputs.

The library is under the namespace `std::filesystem` and includes a variety of
useful tools for file handling, path manipulations, and accessing file
metadata.

### Key Components

#### 1. `std::filesystem::path`

`std::filesystem::path` is a class that represents paths in a filesystem. It
takes care of issues like path separators (`/` or `\`) and helps in
constructing, comparing, and querying paths.

**Example:**

```cpp
##include <iostream>
##include <filesystem>

int main() {
    std::filesystem::path path = "/usr/local/bin";
    std::cout << "Parent path: " << path.parent_path() << '\n';
    std::cout << "Filename: " << path.filename() << '\n';
}
```

#### 2. File Operations

The library provides tools to perform file operations such as creating,
moving, deleting files or directories, and checking file statuses.

**Example:**

```cpp
##include <filesystem>

int main() {
    std::filesystem::create_directory("new_directory");
    if (std::filesystem::exists("new_directory")) {
        std::cout << "Directory created successfully." << std::endl;
    }
    std::filesystem::remove("new_directory");
}
```

#### 3. Iterations over Directories

The Filesystem library supports directory iteration through iterators.

- `directory_iterator`: For iterating over files in a directory (shallow).
- `recursive_directory_iterator`: For recursive file listing.

**Example:**

```cpp
##include <iostream>
##include <filesystem>

int main() {
    for (auto& file : std::filesystem::directory_iterator(".")) {
        std::cout << file.path() << std::endl;
    }
}
```

#### 4. File Metadata

Using `std::filesystem`, it's easy to acquire file metadata details like file
size, last modified time, etc.

**Example:**

```cpp
##include <iostream>
##include <filesystem>

int main() {
    auto filesize = std::filesystem::file_size("example.txt");
    std::cout << "File size: " << filesize << " bytes" << std::endl;
}
```

### Conclusion

The Filesystem Library in Modern C++, starting from C++17, provides a robust
and efficient way to handle all sorts of filesystem-related tasks. It abstracts
many platform-specific quirks and gives developers straightforward methods for
common file manipulations across varied operating systems.

## 19. Understanding Networking in Modern C

The networking library in Modern C provides a standardized way to perform 
networking operations, making it easier to write portable networked 
applications.

### Asio Library in C Modern

#### Overview
The Asio library is a cross-platform C++ library for network and other 
low-level I/O programming. It provides a consistent asynchronous model 
using modern C++ features.

#### Basic Concepts
- **IO Context**: Handles all asynchronous operations.
- **Sockets**: Provides the endpoint for sending and receiving data.
- **Buffers**: Stores data to be sent or received.
- **Completion Handlers**: Functions called when an operation is complete.

#### Example Usage
Here's a simple example of an Asio TCP synchronous operation to connect 
and send a message:

```cpp
##include <iostream>
##include <asio.hpp>

int main() {
    asio::io_context ioContext;
    asio::ip::tcp::resolver resolver(ioContext);
    asio::ip::tcp::socket socket(ioContext);

    asio::connect(socket, resolver.resolve("httpbin.org", "80"));

    std::string request = "GET / HTTP/1.1\r\nHost: httpbin.org\r\n\r\n";
    asio::write(socket, asio::buffer(request));

    std::array<char, 1024> response;
    size_t len = socket.read_some(asio::buffer(response));

    std::cout.write(response.data(), len);

    return 0;
}
```

In this code, a TCP connection is established to a server, and a simple 
HTTP GET request is sent, showcasing the basic operation of Asio in a 
networking context.

### Advantages of Using Modern C for Networking
- **Portability**: Code can run on various platforms without modification.
- **Performance**: Leveraging C++ efficiency features for low-latency 
  networking.
- **Abstraction**: Cleaner and more maintainable code by hiding platform-
  specific details.

Networking in Modern C applications is both powerful and complex, but 
leveraging libraries like Asio simplifies many of these complexities while 
also providing robust and efficient solutions for network communication.

## 20. Understanding Memory Management in Modern C

Memory management is a critical aspect of programming in C. Let's delve into 
modern practices that enhance the safety and efficiency of memory usage.

### Principles of Memory Management

#### Automatic vs Dynamic Memory

- **Automatic Memory**: Memory allocated automatically, such as local 
  variables within a function. Managed by the system with scope.
- **Dynamic Memory**: Allocated during runtime using functions like `malloc`, 
  `calloc`, and `realloc`. Must be manually managed and deallocated.

#### Smart Pointers

Modern C introduces smart pointers like `std::unique_ptr` and `std::shared_ptr`.
These relieve the programmer from manual memory deallocation and prevent 
common errors like memory leaks and dangling pointers.

#### RAII Principle

Resource Acquisition Is Initialization (RAII) is a paradigm that binds 
resource management to object lifetime. This ensures resources are 
automatically freed when they go out of scope.

#### Garbage Collection

Though not typically a feature of C, some modern compilers and environments 
support garbage collection, automating memory management to an extent.

### Tools and Techniques

#### Valgrind and ASAN

Tools like Valgrind and AddressSanitizer (ASAN) help detect memory leaks, 
invalid access, and other memory-related issues by analyzing runtime behavior.

#### Coding Practices

Adopt practices such as:
- Avoiding raw pointers when possible.
- Regularly checking for memory leaks.
- Documenting dynamic memory allocations.

### Conclusion

Modern C offers several mechanisms and tools to improve memory management. 
By utilizing smart pointers, adhering to RAII, and leveraging tools, you 
can write safer and more robust programs.

Understanding and applying these principles can significantly reduce 
memory-related bugs and improve program stability.
