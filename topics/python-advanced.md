# Python Advanced

- [1. Introduction to Advanced Python](#1-introduction-to-advanced-python)
- [2. Comprehensions in Python](#2-comprehensions-in-python)
- [3. Decorators in Python](#3-decorators-in-python)
- [4. Generators and Iterators](#4-generators-and-iterators)
- [5. Context Managers and the `with` Statement](#5-context-managers-and-the-with-statement)
- [6. Metaclasses in Python](#6-metaclasses-in-python)
- [7. Concurrency with Threads and Processes](#7-concurrency-with-threads-and-processes)
- [8. Asynchronous Programming with Asyncio](#8-asynchronous-programming-with-asyncio)
- [9. Memory Management in Python](#9-memory-management-in-python)
- [10. Python C Extensions: Intro and Basics](#10-python-c-extensions-intro-and-basics)
- [11. Python C Extensions: Advanced Concepts](#11-python-c-extensions-advanced-concepts)
- [12. Network Programming with Sockets](#12-network-programming-with-sockets)
- [13. Python's Descriptor Protocol](#13-pythons-descriptor-protocol)
- [14. Python Packaging and Distribution](#14-python-packaging-and-distribution)
- [15. Python Testing with pytest](#15-python-testing-with-pytest)
- [16. Regular Expressions in Python](#16-regular-expressions-in-python)
- [17. Unicode and Encoding in Python](#17-unicode-and-encoding-in-python)
- [18. Data Classes in Python](#18-data-classes-in-python)
- [19. Advanced Logging Techniques in Python](#19-advanced-logging-techniques-in-python)
- [20. Advanced Debugging Techniques](#20-advanced-debugging-techniques)

## 1. Introduction to Advanced Python

Python is a versatile and widely-used programming language
that is well-known for its simplicity and readability.
The foundational concepts of Python are relatively easy
to grasp for beginners, making it a popular choice for
first-time programmers. However, beyond the basics,
Python offers a rich set of advanced features and
techniques that enable developers to write more efficient,
scalable, and maintainable code.

This series on "Python Advanced" will guide you through
these sophisticated aspects of the language. We will delve
into topics such as:

- Advanced data structures and manipulation techniques.
- Functional programming.
- Object-oriented programming enhancements.
- Meta-programming and decorators.
- Concurrency and parallelism.
- Advanced error handling and debugging.
- Working with libraries and frameworks.

By exploring these topics, you will enhance your coding
skills, enabling you to create more powerful and
innovative solutions. Whether you aim to deepen your
understanding or aspire to apply Python professionally,
this series will provide the tools and knowledge necessary
to advance your coding expertise.

The journey lies ahead, so let's get started with Python
advanced topics and unlock the full potential of the
Python programming language!

## 2. Comprehensions in Python

Python comprehensions provide a concise way to create lists,
dictionaries, and sets. This advanced feature uses an expression
inside a single line of code to generate a new iterable by looping
over another iterable. Comprehensions are more efficient than using
loops to create new collections and help make the code more
readable and expressive.

### List Comprehensions

List comprehensions give a clear and concise way to create lists.
The basic structure of a list comprehension is:

```python
[expression for item in iterable if condition]
```

Example:

```python

squares = [x**2 for x in range(10) if x % 2 == 0]
```

### Dictionary Comprehensions

Similarly, dictionary comprehensions allow for creating dictionaries
using a similar syntax:

```python
{key_expression: value_expression for item in iterable if condition}
```

Example:

```python

squares_dict = {x: x**2 for x in range(5)}
```

### Set Comprehensions

Set comprehensions resemble list and dictionary comprehensions. They
are denoted with curly brackets:

```python
{expression for item in iterable if condition}
```

Example:

```python

evens = {x for x in range(10) if x % 2 == 0}
```

Comprehensions offer an efficient and pythonic way to build new lists,
dictionaries, and sets by iterating over existing ones. By mastering
comprehensions, developers can write more expressive, scalable, and
efficient code.

## 3. Decorators in Python

Decorators are a significant tool in Python which allow you to modify
the behavior of a function or class. They enable you to wrap a function
in another function, and it’s a way to implement a higher-order
function. With decorators, you can dynamically alter the
functionality of your code at runtime.

Decorators are often used for logging, enforcing access control and
permissions, instrumentation and timing functions, and more. In this
article, we will explore how to create and use decorators in Python,
focusing on function decorators initially.

### Creating a Simple Decorator

The basic syntax of a decorator involves defining a function that
returns a wrapper function. Here is an example:

```python

def simple_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@simple_decorator
def say_hello():
    print("Hello!")

say_hello()
```

In this example, `simple_decorator` adds extra behavior around the
function `say_hello`. When you call `say_hello()`, it prints
a message before and after calling the original function.

### Using `functools.wraps`

When creating decorators, it's a good practice to use `functools.wraps`.
This decorator is used to preserve the information of the original
function, such as its docstring and name. Here’s how you can enhance
the previous example:

```python
from functools import wraps

def simple_decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Something is happening before the function call.")
        result = func(*args, **kwargs)
        print("Something is happening after the function call.")
        return result
    return wrapper
```

In this modified version, `simple_decorator` will not only retain the
functionality but also keeps the metadata of the original function
intact.

### Decorators with Arguments

Decorators can also accept arguments. To create such decorators,
add an extra layer of wrapping. Here is an example:

```python
def decorator_with_arguments(arg):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            print(f"Decorator argument: {arg}")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@decorator_with_arguments("Hello")
def greet(name):
    print(f"Greetings, {name}")

greet("World!")
```

In this case, `decorator_with_arguments` demonstrates how to handle
additional parameters while keeping the decorator structure.

Understanding and utilizing decorators is a key aspect of writing clean
and efficient Python code. In subsequent articles, we will delve
further into more complex uses and combinations of decorators in Python.

## 4. Generators and Iterators

Generators and iterators are Python constructs that allow you to
loop over data efficiently.

### Generators

Generators are a simple way to create iterators using a function
that yields items one at a time. You cannot only iterate through
them once unless stored.

#### Creating Generators

```python
def simple_generator():
    yield 1
    yield 2
    yield 3
```

#### Using Generators

```python
for value in simple_generator():
    print(value)
```

### Iterators

Iterators are objects that allow iteration over collections.
They implement two primary methods: `__iter__()` and `__next__()`.

#### Creating Iterators

```python
class Counter:
    def __init__(self, low, high):
        self.current = low
        self.high = high

    def __iter__(self):
        return self

    def __next__(self):
        if self.current > self.high:
            raise StopIteration
        else:
            self.current += 1
            return self.current - 1
```

#### Using Iterators

```python
counter = Counter(1, 5)
for number in counter:
    print(number)
```

Generators and iterators are powerful tools in Python, especially
when handling large datasets and streams of data, as they allow
processing without loading everything into memory at once. This is
essential for writing efficient and performance-oriented programs.

## 5. Context Managers and the `with` Statement

In Python, context managers are a fundamental part of resource management,
allowing developers to allocate and release resources precisely. The `with`
statement simplifies exception handling by encapsulating common pre- and
post-processing logic. Typically, a file operation is the most common example
where `with` statement shines.

### The Basics

The context manager is represented by two methods: `__enter__()` and `__exit__()`.
The `__enter__()` method is executed before the block of the `with` statement
is executed, and `__exit__()` is executed when the block has been completed.

```python
class CustomContextManager:
    def __enter__(self):
        print("Entering the context")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting the context")
        return False

with CustomContextManager() as manager:
    print("Inside the block")
```

In this example, when the block inside the `with` statement starts,
`__enter__()` is called; when leaving, `__exit__()` is called automatically.

### File Handling Example

```python
with open('file.txt', 'w') as f:
    f.write('Hello World!')
```

In this case, the file is automatically closed after the block of code
is executed, reducing the risk of resource leaks.

Context managers can be created using classes or generator functions with
the `contextlib` module, allowing a more Pythonic resource management.

## 6. Metaclasses in Python

Metaclasses are a powerful feature in Python that allows you to customize
the class creation process. In Python, everything is an object, including
classes. A metaclass in Python is a class of a class that defines how a
class behaves.

While we use `class` keyword to define classes, we use `type` to define
metaclasses. Metaclasses can be thought of as "classes for classes"; they
determine the behavior of a class.

### Basic Example of Metaclasses

Consider a basic scenario where we want each new class to automatically
include a read-only `id` attribute:

```python
class Meta(type):
    def __new__(cls, name, bases, attrs):
        attrs['id'] = 'read-only'
        return super(Meta, cls).__new__(cls, name, bases, attrs)

class Base(metaclass=Meta):
    pass

class Derived(Base):
    pass

d = Derived()
print(d.id)  # Outputs: read-only
```

Here, the `Meta` metaclass automatically injects an `id` attribute into
every class that uses it as its metaclass.

### When to Use Metaclasses

- To enforce coding standards
- To log class creation
- To register classes automatically

### Key Points

- Metaclasses are not a common feature for everyday programming.
- They are primarily used for libraries and frameworks.
- Use metaclasses where class behavior needs broad modification.

## 7. Concurrency with Threads and Processes

In Python, dealing with concurrency and parallelism becomes essential when
working with large-scale applications or CPU-bound tasks. In this article,
we'll explore the built-in capabilities of Python to handle concurrency
through threads and processes.

### Threads

Python provides a `threading` module to work with threads. Threads are ideal
for I/O-bound tasks since they share the same memory space. However, due to
the Global Interpreter Lock (GIL), threads are not truly parallel for
CPU-bound processes in Python.

Here's a simple example of using threads:

```python
import threading

def worker(number):
    """Thread worker function"""
    print(f'Worker: {number}')

threads = []
for i in range(5):
    t = threading.Thread(target=worker, args=(i,))
    threads.append(t)
    t.start()

for t in threads:
    t.join()
```

### Processes

For CPU-bound tasks, the `multiprocessing` module is preferred as it creates
separate memory space for each process, thus bypassing the GIL. Here's an
example of using processes:

```python
import multiprocessing

def worker(number):
    """Process worker function"""
    print(f'Process: {number}')

if __name__ == '__main__':
    processes = []
    for i in range(5):
        p = multiprocessing.Process(target=worker, args=(i,))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()
```

### Conclusion

While both threading and multiprocessing allow you to execute tasks
concurrently, it's crucial to choose the correct module based on the nature
of the tasks - whether they are I/O-bound or CPU-bound. Understanding these
tools will significantly enhance your ability to write efficient and
scalable Python applications.

## 8. Asynchronous Programming with Asyncio

Asynchronous programming is a powerful feature in Python that allows you  
to manage many tasks simultaneously without the overhead of traditional  
threading. This article will introduce the `asyncio` library, which is  
Python's standard library for handling such asynchronous tasks.

### What is Asynchronous Programming?

In synchronous programming, tasks are executed one after another. This  
works well when tasks are short and simple. However, blocking operations  
such as I/O can make programs inefficient, as the execution waits for a  
response before continuing.

Asynchronous programming resolves this by allowing a program to execute  
other tasks while waiting for previously requested operations to  
complete. In Python, this is achieved through the `asyncio` library.

### The `asyncio` Library

`asyncio` is a library that allows you to create, manage, and run  
asynchronous I/O-bound programs. It uses `coroutines`, which are similar  
to generators, for declaring asynchronous functions.

#### Key Concepts

- **Event Loop**: The core of every `asyncio` application. It runs  
  coroutines and tasks, handling I/O operations in a non-blocking way.
- **Coroutine**: A function defined with `async def`. Coroutines are  
  suspended and resumed at specific points, allowing other tasks to run.
- **Task**: A wrapper for coroutines created using `asyncio.create_task`,  
  allowing them to run concurrently.
- **Future**: Represents a result of an async operation that may be  
  completed in the future.

#### Example

Here's a simple example of using `asyncio` for asynchronous programming:

```python
import asyncio

async def fetch_data():
    print("Start fetching")
    await asyncio.sleep(2)
    print("Done fetching")
    return "data"

async def main():
    task = asyncio.create_task(fetch_data())
    print("Task created")
    data = await task
    print(f"Received: {data}")

asyncio.run(main())
```

In this example, `fetch_data()` is an asynchronous function that simulates  
a delay using `asyncio.sleep()`. The `main()` function creates a task and  
awaits its completion, allowing other operations to proceed while waiting.

## 9. Memory Management in Python

Python's memory management is crucial for developers working with
large-scale applications or those aiming to optimize performance.
Python uses private heaps to manage memory, meaning all objects and
data structures reside in a private heap space. The interpreter
handles memory allocation.

### The Garbage Collector

Python uses automatic garbage collection (GC) to clear unused objects
from memory, decreasing memory leaks risk. The GC employs
reference counting as its core technique.

#### Reference Counting

Each object contains a reference count, which is increased or
decreased when variables point to or stop pointing to it. When the
count reaches zero, the memory is released.

### The Generational GC

Python's GC also categorizes objects into generations based on their
aging. Younger objects are collected more often than older objects.
This method efficiently recycles memory allocated to short-lived
objects.

### Memory Management Functions

- `gc.collect()`: Forces a garbage collection cycle.
- `gc.get_stats()`: Provides stats about various aspects of the GC
  cycles.

Efficient memory handling ensures that Python applications utilize
available resources without waste. Proper understanding of Python's
memory model helps in building robust and scalable applications.

## 10. Python C Extensions: Intro and Basics

Python allows you to extend its capabilities by interfacing with C code.
This feature can be particularly useful for performance-critical tasks or
when integrating with existing C libraries. In this article, we will cover
the basics of creating Python C extensions.

### Why Use C Extensions?

C extensions can significantly boost the execution speed of Python code
by leveraging the low-level efficiency of C. They also enable access
to hardware and systems features that Python alone cannot handle.

### Building a Simple C Extension

Here's a step-by-step guide to build a basic C extension:

1. **Write the C Code:** Start writing a simple function in C.
   For example:

   ```c
   #include <Python.h>

   static PyObject* helloworld(PyObject* self, PyObject* args) {
       printf("Hello, World from C!\n");
       Py_RETURN_NONE;
   }

   static PyMethodDef HelloMethods[] = {
       {"helloworld", helloworld, METH_VARARGS, "Prints Hello World"},
       {NULL, NULL, 0, NULL}
   };

   static struct PyModuleDef helloworldmodule = {
       PyModuleDef_HEAD_INIT, "helloworld", NULL, -1, HelloMethods
   };

   PyMODINIT_FUNC PyInit_helloworld(void) {
       return PyModule_Create(&helloworldmodule);
   }
   ```

2. **Set Up `setup.py`:** Use `setuptools` to create your build script.

   ```python
   from setuptools import setup, Extension

   setup(name='helloworld',
         version='1.0',
         ext_modules=[Extension('helloworld', ['helloworld.c'])])
   ```

3. **Build the Extension:** Compile the code using:

   ```bash
   python setup.py build_ext --inplace
   ```

4. **Use Your Extension in Python:** Import and use your compiled
   extension within Python:
   ```python
   import helloworld
   helloworld.helloworld()
   ```

### Further Reading

- Python's official documentation on [extending Python with C/C++](https://docs.python.org/3/extending/extending.html).
- Explore advanced topics like using NumPy C API for numerical extensions.

This introduction provides the foundation necessary to start experimenting
with Python C extensions to augment your Python applications.

## 11. Python C Extensions: Advanced Concepts

Python C extensions allow developers to extend the capabilities of
Python by writing portions of a program in C. This can drastically
improve an application's performance. In this article, we will discuss
advanced concepts for developing Python C extensions.

### Structuring Python C Extensions

When designing C extensions, structuring your code cleanly is vital.
The source code should include the following sections:

1. **Header Files:** Include necessary libraries and Python headers.
2. **Module Methods:** Define methods that will be available in Python.
3. **Module Initialization:** Set up the module structure.

### PyMethodDef and PyModuleDef

The `PyMethodDef` struct defines all the methods that the module
exports. This struct contains:

- `ml_name`: The name seen in Python
- `ml_meth`: The C function pointer
- `ml_flags`: For flags like `METH_VARARGS`
- `ml_doc`: For documentation

The `PyModuleDef` struct is essential for initializing the module:

- `m_base`: Always `PyModuleDef_HEAD_INIT`
- `m_name`: Name of the module
- `m_doc`: Documentation string
- `m_size`: The size of the module's state
- `m_methods`: Methods table

### Python C API Usage

##### Reference Counting

Every Python object has a reference count. Function calls that create
new references will generally return the number of new references they
provide. Proper reference counting ensures no leaks occur.

##### Error Handling

Errors in C extensions are usually handled by setting an exception
using `PyErr_SetString()` and returning `NULL` from your function.
Always check for errors after making any API call that might fail.

### Advantages and Challenges

**Advantages:**

- Accelerated computation speed
- Direct access to system calls and library functions

**Challenges:**

- Increased complexity
- Debugging can be more difficult

### Conclusion

Advanced Python C extensions provide performance benefits and extend
reusability by allowing existing C libraries to interface with Python.
However, this also introduces complexities, which require careful
consideration in design and implementation.

## 12. Network Programming with Sockets

Network programming in Python allows you to connect your Python applications with
various network services such as databases, web servers, etc., using the socket
module.

### Understanding Sockets

Sockets are the endpoints in a network used for interprocess communication.
They can be created by opening a network resource using the socket library.
Here's a basic example:

```python
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

mysock.connect(('www.example.com', 80))

request = 'GET / HTTP/1.0\r\nHost: www.example.com\r\n\r\n'
mysock.send(request.encode())

response = mysock.recv(4096)
print(response.decode())
```

### Server and Client in Python

To create a server with Python, you'll bind the socket to an address and port,
and then listen for incoming connections.

#### Server Example:

```python
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_socket.bind(('localhost', 12345))

server_socket.listen(5)

print('Server is listening...')

while True:
    client_socket, addr = server_socket.accept()
    print(f'Connected to {addr}')
    client_socket.send("Welcome to the server!".encode())
    client_socket.close()
```

#### Client Example:

```python
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

client_socket.connect(('localhost', 12345))

message = client_socket.recv(1024)
print(message.decode())

client_socket.close()
```

Understanding and working with sockets is essential for building networked
distributed systems and handling multiple clients in real time.

## 13. Python's Descriptor Protocol

In Python, the descriptor protocol provides a powerful interface
for controlling attribute access. It is a low-level mechanism
that allows you to customize the behavior of getting, setting,
or deleting an attribute directly within classes. Descriptors
are a fundamental tool in Python's data model, playing an
essential role in the implementation of core features such as
properties, methods, constants, and more.

### What is a Descriptor?

A descriptor is any object that implements any of the following
methods: `__get__`, `__set__`, or `__delete__`. These methods
allow an object to define custom behavior when attributes are
accessed:

- `__get__(self, instance, owner)`: Called to get the attribute
  of the owner class (class attribute) or an instance (instance
  attribute).
- `__set__(self, instance, value)`: Called to set the attribute
  on an instance.
- `__delete__(self, instance)`: Called to delete the attribute
  from an instance.

### Types of Descriptors

Descriptors can be broadly classified into:

- **Data descriptors**: Implement both `__get__` and `__set__`
  methods (and optionally `__delete__`).
- **Non-data descriptors**: Implement only the `__get__` method.

### Creating a Descriptor

Let's create a simple descriptor to understand its functionality:

```python
class MyDescriptor:
    def __init__(self, name=""):
        self.name = name

    def __get__(self, instance, owner):
        print(f"Getting {self.name}")
        return instance.__dict__.get(self.name)

    def __set__(self, instance, value):
        print(f"Setting {self.name} to {value}")
        instance.__dict__[self.name] = value

class MyClass:
    attribute = MyDescriptor("attribute")

obj = MyClass()
obj.attribute = 10  # Triggers __set__
print(obj.attribute)  # Triggers __get__
```

### Why Use Descriptors?

Descriptors are used when you need:

- Precise control over how attributes are accessed or modified.
- To share common behavior across multiple classes for specific
  attributes without code duplication.
- For advanced use cases like creating attributes that are
  virtual, computed, or require synchronization.

The descriptor protocol, though advanced, offers incredible
flexibility and power in software design, making it invaluable
for developers seeking in-depth control over Python objects.

## 14. Python Packaging and Distribution

Creating and distributing packages is a crucial part of the Python
ecosystem, allowing developers to share their code with others easily.
Python packages bundle modules and resources together, making them
accessible to others via tools like PyPI (Python Package Index).

### Understanding Python Packaging Structure

A simple Python package structure might look like:

```
my_package/
    setup.py
    README.md
    LICENSE.txt
    my_package/
        __init__.py
        module1.py
        module2.py
```

- **`setup.py`** - The script used to build and distribute the package.
- **`__init__.py`** - Indicates that the directory should be treated as a
  package. It can be an empty file or include initialization code.

### Creating `setup.py`

The `setup.py` file uses the `setuptools` package for creating Python
packages. Here is a basic example:

```python
from setuptools import setup, find_packages

setup(
    name="my_package",
    version="0.1",
    packages=find_packages(),
    install_requires=["requests>=2.20"],
    author="Your Name",
    author_email="your.email@example.com",
    description="A description of your package",
    url="https://github.com/username/my_package"
)
```

### Building and Distributing

1. **Build the Package**: Run `python setup.py sdist bdist_wheel` to create
   a source distribution and a wheel.
2. **Upload to PyPI**: Use `twine upload dist/*` to upload your package to
   PyPI.

By understanding these fundamentals, you can efficiently distribute
and install Python packages, enabling broader code sharing and reuse.
This serves as a foundation for creating robust software solutions that
can be shared in the Python community.

## 15. Python Testing with pytest

Testing is a critical part of software development, and Python offers
various frameworks to facilitate unit testing, integration testing, and more.
One of the most popular testing frameworks for Python is `pytest`. It is
simple, flexible, and allows you to write concise test cases.

### Getting Started

First, install pytest using pip:  
`pip install pytest`

Create a simple function to test:

```python

def add(a, b):
    return a + b
```

Now, create a test file, typically named starting with `test_`:

```python

from sample import add

def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
```

Run your tests using the pytest command:
`pytest test_sample.py`

#### Key Features of pytest

- **Assertions:** Write tests using Python assert statements, easy to read.
- **Fixtures:** Setup code necessary to run tests. Defined using functions
  with the `@pytest.fixture` decorator.
- **Parameterization:** Run a test with multiple sets of data using pytest's
  `@pytest.mark.parametrize`. This enhances test coverage.
- **Helpful Plugins:** Extensible with plugins, for example, pytest-cov for
  measuring code coverage.
- **Better Reporting:** Provides detailed information when tests fail,
  showing variable state etc.

For example:

```python

def multiply(a, b):
    return a * b

@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 6),
    (0, 4, 0),
    (-1, 5, -5)
])
def test_multiply(a, b, expected):
    assert multiply(a, b) == expected
```

#### Best Practices

- Use descriptive function names for tests.
- Keep tests independent of each other to avoid interference.
- Organize tests in a manner that mirrors your application structure.

#### Conclusion

Pytest is a powerful and flexible testing framework that makes writing
and managing tests easy. It fits seamlessly into your workflow and helps
ensure your code runs as expected. Whether you are a beginner or an
experienced developer, incorporating pytest into your projects
facilitates maintaining reliable and bug-free code.

## 16. Regular Expressions in Python

Regular expressions (regex) are powerful tools in Python for searching, replacing,
and parsing textual data. They allow us to define search patterns to locate specific
sequences of characters, making them invaluable for text processing.

### Basics of Regular Expressions

Regular expressions are used through the `re` module in Python. We start by
importing it:

```python
import re
```

#### Common Functions

- `re.match()`: Checks for a match only at the beginning of the string.
- `re.search()`: Scans through a string, looking for any location where the
  regex pattern matches.
- `re.findall()`: Finds all occurrences of a pattern.
- `re.sub()`: Replaces occurrences of a pattern with a specified string.

#### Syntax

- **`.`, `*`, `+`, `?`, `[]`, `^`, `$`**: Meta-characters used for creating
  patterns.
- **Escaping**: Use `\` to escape special characters.

### Examples

#### Matching and Searching

```python
pattern = r"\bfoo\b"
text = "foo bar is not a foobar"
match = re.search(pattern, text)
print(match.group())  # Output: foo
```

#### Finding All Matches

```python
pattern = r"\d+"
text = "There are 24 hours in a day."
matches = re.findall(pattern, text)
print(matches)  # Output: ['24']
```

#### Replacing

```python
pattern = r"dog"
replacement = "cat"
text = "dog is a faithful animal"
new_text = re.sub(pattern, replacement, text)
print(new_text)  # Output: cat is a faithful animal
```

Regular expressions are versatile, yet complex, and mastering them empowers you
to efficiently handle text data processing in Python.

## 17. Unicode and Encoding in Python

Understanding Unicode and encoding is essential for handling text data in
Python, especially when dealing with internationalization. Python's
`str` type is Unicode, meaning it can represent a wide variety of
characters from different writing systems.

### Unicode and UTF-8

Unicode is a standard that maps every character to a unique code point.
UTF-8 is a popular encoding format that represents each Unicode
character as a variable-length sequence of bytes. It's widely used
because it supports all Unicode characters and is backwards compatible
with ASCII.

```python
text = "こんにちは"
utf8_encoded = text.encode('utf-8')
print(utf8_encoded)  # Output: b'\xe3\x81\x93\xe3\x82\x93\xe3\x81\xab\xe3\x81\xa1\xe3\x81\xaf'
```

### Encoding and Decoding

**Encoding** is the process of converting a `str` to a `bytes`
representation, while **Decoding** is converting `bytes` back to `str`.

```python

hello_world = "Hello, World!"
encoded = hello_world.encode("utf-8")

decoded = encoded.decode("utf-8")
```

### Handling Errors

When encoding and decoding, there can be errors if a character isn't
representable. Common strategies include `ignore`, `replace`, and
backslashreplace`.

```python
gibberish = "Hello \udce2 World!"
fixed = gibberish.encode("utf-8", "backslashreplace").decode("utf-8")
print(fixed)  # Output: 'Hello \udce2 World!'
```

Understanding these concepts is vital for any Python programmer handling
international text. Properly encoding and decoding ensures data
integrity during storage and transmission.

## 18. Data Classes in Python

Data classes were introduced in Python 3.7 as a way to automate the creation  
of special methods like `__init__`, `__repr__`, and others for simple classes  
used to store data. This can significantly reduce boilerplate and improve  
code readability.

### Defining a Data Class

To define a data class, you use the `@dataclass` decorator from the `dataclasses`  
module. Here's a simple example:

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int
```

This automatically creates an `__init__` method that is equivalent to:

```python
class Point:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y
```

### Benefits and Features

1. **Immutability**: By setting `frozen=True`, you can make your data class  
   immutable. This helps in creating hashable objects.

2. **Default Factory**: You can use `default_factory` for fields needing  
   a default value that is a mutable type like lists or dictionaries.

3. **Comparison Methods**: Data classes automatically implement comparison  
   methods. If you provide the `order=True` parameter in the `@dataclass`  
   decorator, instances of the class will be comparable by field values.

4. **Post-init Processing**: You can define a method `__post_init__` for  
   advanced initialization.

### Example with Advanced Features

```python
from dataclasses import dataclass, field

@dataclass(order=True, frozen=True)
class Student:
    name: str
    id_number: int
    grades: list = field(default_factory=list)

    def __post_init__(self):
        print(f"Student {self.name} created with ID: {self.id_number}")
```

In this example, a `Student` is immutable and can be ordered. It also has  
default values for grades and prints a message during initialization thanks  
to `__post_init__`.

Data classes can greatly simplify your code when dealing with plain data  
structures, allowing you to focus on more complex logic, enhancing both  
maintainability and development speed.

## 19. Advanced Logging Techniques in Python

Logging is an essential part of building robust applications
in Python. While the built-in `logging` module offers simple
ways to implement logging, advanced techniques can significantly
enhance logging capabilities. This article explores some of these
advanced logging techniques, including log filtering, custom
logging levels, and handlers.

### Log Filtering

Filters provide a way to control which log records are output.
They can be used to modify log records or prevent them from being
processed further. Filters should be a callable capable of
receiving a log record and returning a boolean indicating whether
to keep the log record.

```python
import logging

class MyFilter(logging.Filter):
    def filter(self, record):
        return 'KEEP' in record.getMessage()

logger = logging.getLogger(__name__)
logger.addFilter(MyFilter())
```

### Custom Logging Levels

Defining custom logging levels can categorize log messages more
precisely. Custom levels are defined by setting new methods on the
logger object:

```python
import logging

CUSTOM_LEVEL = 25
logging.addLevelName(CUSTOM_LEVEL, "CUSTOM")

logging.basicConfig(level=CUSTOM_LEVEL)
logger = logging.getLogger(__name__)

def log_custom(self, message, *args, **kwargs):
    if self.isEnabledFor(CUSTOM_LEVEL):
        self._log(CUSTOM_LEVEL, message, args, **kwargs)

logging.Logger.custom = log_custom
```

### Custom Handlers

Custom handlers allow you to direct log output to different
destinations, such as external monitoring systems, databases, or
files with complex logic. Here's how to create a custom handler:

```python
import logging

class MyCustomHandler(logging.Handler):
    def emit(self, record):
        log_entry = self.format(record)
        # Handle the message, for example, send to an external log service

logger = logging.getLogger(__name__)
logger.addHandler(MyCustomHandler())
```

### Conclusion

Advanced logging techniques in Python improve log management and
analytical capabilities. By using log filters, defining custom
levels, and creating custom handlers, you can fine-tune your
logging to suit specific needs and ensure that relevant data is
captured in an efficient way. Experimenting with these techniques
can make debugging and monitoring in your Python applications more
effective and manageable.

## 20. Advanced Debugging Techniques

In the realm of software development, the ability to debug complex
code effectively is essential. In Python, numerous tools and
techniques are available to aid in the debugging process, enabling
developers to identify and resolve issues efficiently.

### 1. The Built-in Debugger: pdb

Python's built-in debugger, `pdb`, is a powerful tool to perform
interactive debugging. It provides stepping through code, breakpoints,
stack inspection, and post-mortem debugging.

#### Basic Usage

Start a debugger session by importing `pdb` and then using
`pdb.set_trace()` at the point where you wish to start debugging.
This will initialize an interactive debugging session directly in the
command line.

### 2. Using IDE Debugging Features

IDE features such as those in PyCharm or VSCode allow graphical
stepping through code, inspection of variables, setting breakpoints,
and visualizing the stack trace.

#### Key Features

- **Breakpoints**: Placing breakpoints in your code allows
  developers to pause execution and inspect variables.
- **Watch Expressions**: Track certain variables or expressions
  in real-time as the program executes.

### 3. Loggers for Debugging

Using logging strategically can enhance the debugging process.
Python's `logging` module provides a robust framework for outputting
debug messages to routes such as consoles and files.

#### Strategic Use of Logging

- **Log Levels**: Use different levels (DEBUG, INFO, WARNING,
  ERROR, CRITICAL) to differentiate issues.
- **Log Handlers and Formatters**: Configure where and how log
  messages are delivered.

### 4. Exception Handling and Debugging

Python's exception handling with try, except, and finally blocks
can be used to catch and handle errors. Utilizing traceback
information is critical for debugging.

### 5. Debugging Memory Leaks

Memory profiling tools like `objgraph` and `tracemalloc` help
detect and isolate memory leaks, providing insights into memory
usage trends and objects responsible.

Using these techniques and tools effectively can greatly reduce
debugging time and lead to a more robust and error-free code
base.
