# Python Cheat Sheet

- [1. Introduction to Python Cheat Sheet](#1-introduction-to-python-cheat-sheet)
- [2. Basic Syntax and Structure](#2-basic-syntax-and-structure)
- [3. Data Types](#3-data-types)
- [4. Control Flow](#4-control-flow)
- [5. Lists and Tuples](#5-lists-and-tuples)
- [6. Dictionaries](#6-dictionaries)
- [7. Sets](#7-sets)
- [8. Functions](#8-functions)
- [9. Modules and Packages](#9-modules-and-packages)
- [10. File Handling](#10-file-handling)
- [11. Object-Oriented Programming](#11-object-oriented-programming)
- [12. Regular Expressions](#12-regular-expressions)
- [13. Error Handling](#13-error-handling)
- [14. Iterators and Generators](#14-iterators-and-generators)
- [15. Decorators and Context Managers](#15-decorators-and-context-managers)
- [16. Multithreading and Multiprocessing](#16-multithreading-and-multiprocessing)
- [17. Networking in Python](#17-networking-in-python)
- [18. Web Scraping with Python](#18-web-scraping-with-python)
- [19. Working with Databases in Python](#19-working-with-databases-in-python)
- [20. Data Visualization in Python](#20-data-visualization-in-python)

## 1. Introduction to Python Cheat Sheet

Welcome to your ultimate guide to the Python programming language! This cheat
sheet is designed to provide you with a quick reference to essential Python
concepts, from the basics to more advanced topics.

Whether you're a beginner just getting started or an experienced developer
looking to refine your skills, this series of articles will cover a vast range
of topics systematically. We aim to encapsulate the essence of Python and
present it in a way that's easy to digest and apply.

Each article will build upon the previous ones, starting with fundamental
concepts such as variable declarations and data types, then moving to loops,
conditions, functions, and later exploring modules, file handling, exceptions,
and more advanced topics.

Stay tuned as we delve deep into Python, making you proficient in writing
efficient and elegant code. With this cheat sheet by your side, you'll
navigate Python programming like a pro! Let's start our journey!

## 2. Basic Syntax and Structure

Python is known for its clean and readable syntax. Here are some basic
components:

### Comments

- Single-line comments start with `#`. For example:

  ```python
  # This is a single-line comment
  ```

- Multi-line comments can be created using triple quotes:
  ```python
  '''
  This is a
  multi-line comment
  '''
  ```

### Variables and Data Types

- Variables are dynamically typed:

  ```python
  x = 5        # int
  y = 3.14     # float
  name = "John" # string
  isOpen = True # boolean
  ```

- Basic data types include integers, floats, strings, and booleans.

### Print Function

- Use `print()` to output text:
  ```python
  print("Hello, world!")
  ```

### Indentation

- Indentation is crucial in Python for defining blocks of code.
  Use consistent spaces (usually 4 spaces per level).
- Example of a simple loop:
  ```python
  for i in range(5):
      print(i)
  ```

Python's emphasis on making code easy to read is one of its defining
features.

## 3. Data Types

Python supports various data types to accommodate different types of data.
Here are some of the fundamental data types you should be familiar with:

- **Integers**: Whole numbers, e.g., `1`, `42`, `-7`
- **Floats**: Decimal numbers, e.g., `3.14`, `-0.001`, `2.0`
- **Strings**: Ordered set of characters, created by using single or double quotes, e.g., `'hello'`, `"world"`
- **Booleans**: Represents truth values, with two constants: `True` and `False`
- **Lists**: Ordered, mutable collections that can hold items of different data types.
  Example: `[1, 2.5, 'Python']`
- **Tuples**: Ordered, immutable collections. Example: `(3, 'cat', 9.2)`
- **Sets**: Unordered collection of unique items. Example: `{1, 2, 3}`
- **Dictionaries**: Unordered collection of key-value pairs.
  Example: `{'name': 'Alice', 'age': 25}`

Understanding these data types allows you to store and manipulate data
appropriately in your Python programs.

## 4. Control Flow

Control flow structures in Python allow you to execute code
conditionally, iterate over data, and handle exceptions efficiently.
Here's an overview of the essential control flow statements.

### Conditional Statements

#### `if`, `elif`, `else`

```python
x = 10
if x > 0:
    print("x is positive")
elif x == 0:
    print("x is zero")
else:
    print("x is negative")
```

- **`if`**: Evaluates condition; executes block if true.
- **`elif`**: Checks another condition if previous was false.
- **`else`**: Executes if none of the conditions are true.

### Looping Constructs

#### `for` Loop

```python
for i in range(5):
    print(i)
```

- Iterates over a sequence (such as a list, tuple, string).

#### `while` Loop

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

- Repeats as long as a condition is true.

### Loop Control Statements

#### `break`

```python
for n in range(10):
    if n == 5:
        break
    print(n)
```

- Exits the loop completely.

#### `continue`

```python
for n in range(10):
    if n % 2 == 0:
        continue
    print(n)
```

- Skips the current iteration.

#### `pass`

```python
for n in range(5):
    if n == 3:
        pass
    else:
        print(n)
```

- Does nothing; acts as a placeholder.

Understanding these basics ensures you can control the logical flow
of Python programs effectively.

## 5. Lists and Tuples

### Lists

Lists in Python are mutable sequences that can store a collection of items.
They are defined using square brackets `[]`, and the items within can be of
different types.

#### Examples:

```python

fruits = ['apple', 'banana', 'cherry']

first_fruit = fruits[0]  # 'apple'

fruits[1] = 'blueberry'  # ['apple', 'blueberry', 'cherry']

fruits.append('orange')  # ['apple', 'blueberry', 'cherry', 'orange']

fruits.remove('cherry')  # ['apple', 'blueberry', 'orange']
```

### Tuples

Tuples are immutable sequences, meaning that once a tuple is created, its
values cannot be changed. They are defined using parentheses `()`.

#### Examples:

```python

coordinates = (10, 20)

x = coordinates[0]  # 10

```

### Key Differences

- **Mutability**: Lists are mutable, tuples are immutable.
- **Syntax**: Lists use `[]`, tuples use `()`.
- **Use Case**: Use lists when you need to modify the data, tuples when the
  data should not change.

## 6. Dictionaries

Dictionaries are a fundamental data structure in Python. They store data in
key-value pairs, allowing for efficient lookup, update, and retrieval of values.
Here are some key operations and methods for working with dictionaries:

### Creating a Dictionary

```python

my_dict = {'key1': 'value1', 'key2': 'value2'}

my_dict = dict(key1='value1', key2='value2')
```

### Accessing Values

```python
value = my_dict['key1']  # Accessing using a key
value = my_dict.get('key1')  # Accessing using get() method
```

### Adding or Updating Entries

```python
my_dict['key3'] = 'value3'  # Adding a new key-value pair
my_dict['key1'] = 'new_value'  # Updating an existing key-value pair
```

### Removing Entries

```python
value = my_dict.pop('key1')  # Removes key and returns the value

del my_dict['key2']
```

### Dictionary Methods

- `keys()`: Returns a view object of all keys
- `values()`: Returns a view object of all values
- `items()`: Returns a view object of all key-value pairs

Example:

```python
keys = my_dict.keys()
values = my_dict.values()
items = my_dict.items()
```

## 7. Sets

Sets in Python are a collection of unique and unordered elements. These are
commonly used for membership testing and eliminating duplicate entries. Here's a
short guide on how to work with sets in Python.

### Creating Sets

You can create a set by using the built-in `set()` function or with curly
braces:

```python

fruits = {'apple', 'banana', 'orange'}

unique_numbers = set([1, 2, 2, 3, 4])
```

### Set Operations

Sets support operations such as union, intersection, difference,
and symmetric difference:

```python
A = {1, 2, 3}
B = {3, 4, 5}

union_set = A | B  # or A.union(B)

intersection_set = A & B  # or A.intersection(B)

difference_set = A - B  # or A.difference(B)

symmetric_difference_set = A ^ B  # or A.symmetric_difference(B)
```

### Adding and Removing Elements

Elements can be added or removed from sets using `add()` and `remove()`,
`discard()`, or `pop()` methods:

```python
my_set = {1, 2, 3}

my_set.add(4)

my_set.remove(3)

my_set.discard(10)

my_set.pop()  # Removes an arbitrary element
```

### Other Set Operations

- **Check Membership**: Use `in` or `not in` to check if an element exists
  in a set.

  ```python
  2 in my_set
  ```

- **Length**: Use `len()` to get the number of items in a set.

  ```python
  len(my_set)
  ```

- **Clear**: `clear()` will remove all elements from a set.

  ```python
  my_set.clear()
  ```

- **Copy**: Creates a shallow copy of a set.
  ```python
  set_copy = my_set.copy()
  ```

Understanding sets and their operations can significantly enhance your ability
to handle collections of unique items effectively in Python.

## 8. Functions

Functions in Python are defined using the `def` keyword. They are used to
encapsulate code for reusability and organization. Here's a basic syntax:

```python

def function_name(parameters):
    """Docstring for description."""
    # Code block
    return value
```

#### Example

```python

def greet(name):
    """Function that greets a person by name."""
    return f"Hello, {name}!"

print(greet("Alice"))
```

#### Key Points

- **Parameters and Arguments**: Functions can take inputs, known as
  parameters, and can return outputs via the `return` statement.
- **Docstrings**: Used to describe what a function does.
- **Return Statement**: Ends the function execution and specifies the value
  to be returned.

#### Advanced Function Features:

- **Default Arguments**: Allows you to initialize function parameters with
  default values if no argument is passed.

  ```python
  def greet(name, msg="Hello"):
      return f"{msg}, {name}!"
  ```

- **Variable Length Arguments**: Use `*args` for non-keyword arguments and
  `**kwargs` for keyword arguments.

  ```python
  def fun(*args, **kwargs):
      print(args)
      print(kwargs)
  ```

Functions enhance modularity and help in avoiding code repetition.

## 9. Modules and Packages

In Python, modules and packages are a way to organize and reuse code
effectively.

### Modules

A module is a file containing Python code that can define functions, classes,
and variables. Modules are imported using the `import` statement.

#### Creating a Module

To create a module, simply save the Python code you want to reuse in a file
with a `.py` extension:

```python

def greet(name):
    return f"Hello, {name}!"
```

#### Importing a Module

You can import a module using the `import` statement:

```python
import mymodule

print(mymodule.greet("World"))
```

You can also import specific functions or variables:

```python
from mymodule import greet

print(greet("World"))
```

#### Built-in Modules

Python comes with many built-in modules such as `math`, `sys`, `os`, and more.
You can import them the same way:

```python
import math

print(math.sqrt(16))
```

### Packages

A package is a way of organizing related modules into a directory hierarchy.
Packages use a special file named `__init__.py` to define package contents.

#### Creating a Package

To create a package, create a directory containing a file named `__init__.py`:

```
my_package/
    __init__.py
    module1.py
    module2.py
```

#### Importing a Package

You can import a module from a package using dot notation:

```python
from my_package import module1
```

Or import specific functions:

```python
from my_package.module1 import func_name
```

Understanding and using modules and packages facilitates code reuse and
efficiently organizes code in large projects.

## 10. File Handling

File handling in Python is essential for reading and writing data
from and to files. Python provides built-in functions to perform
file operations.

#### Opening a File

```python
file = open('example.txt', 'r')
```

- `'r'`: Read mode.
- `'w'`: Write mode.
- `'a'`: Append mode.
- `'b'`: Binary mode.

#### Reading a File

```python
content = file.read()
line = file.readline()
lines = file.readlines()
```

#### Writing to a File

```python
file = open('example.txt', 'w')
file.write('Hello, World!')
```

#### Closing a File

```python
file.close()
```

#### Using `with` Statement

The `with` statement automatically closes the file.

```python
with open('example.txt', 'r') as file:
    content = file.read()
```

File handling in Python is straightforward and robust, making it
easy to perform operations on files.

## 11. Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm based on the
concept of "objects", which can contain data and code: data in the form
of fields (often known as attributes or properties), and code, in the form
of procedures (often known as methods).

Here's a basic overview of OOP in Python:

### Classes and Objects

- **Class**: A blueprint for creating objects (a particular data structure),
  containing methods (functions) and attributes (data).

  ```python
  class Dog:
      species = "Canine"

      def __init__(self, name, age):
          self.name = name
          self.age = age
  ```

- **Object**: An instance of a class.

  ```python
  dog1 = Dog("Buddy", 5)
  print(dog1.name)  # Outputs: Buddy
  ```

### Methods

- **Instance Method**: Function defined inside a class and operates on an
  instance of the class.

  ```python
  class Dog:
      def bark(self):
          return "Woof!"

  dog1 = Dog()
  print(dog1.bark())  # Outputs: Woof!
  ```

- **Static Method**: A method that doesn't take instance or class as the
  first parameter. It's defined with the `@staticmethod` decorator.

  ```python
  class Math:
      @staticmethod
      def add(a, b):
          return a + b

  print(Math.add(5, 3))  # Outputs: 8
  ```

- **Class Method**: A method that takes class itself as the first argument
  (usually named `cls`). It's defined with the `@classmethod` decorator.

  ```python
  class Animal:
      count = 0

      @classmethod
      def increase_count(cls):
          cls.count += 1
  ```

### Inheritance

- **Inheritance**: A way to form new classes using classes that have already
  been defined.

  ```python
  class Dog(Animal):
      pass
  ```

### Encapsulation

- **Encapsulation**: The bundling of data with the methods that operate on
  that data, restricting direct access to some of the object's components.

- Use underscore `_` to denote private attributes or methods.

  ```python
  class Person:
      def __init__(self):
          self._name = ""
  ```

### Polymorphism

- **Polymorphism**: The ability to present the same interface for differing
  underlying data types.

  ```python
  class Bird:
      def speak(self):
          return "Chirp"

  class Dog:
      def speak(self):
          return "Bark"

  def make_noise(animal):
      print(animal.speak())

  make_noise(Bird())  # Outputs: Chirp
  make_noise(Dog())   # Outputs: Bark
  ```

These concepts of OOP make it easier to structure and organize code,
especially for complex systems.

## 12. Regular Expressions

Regular expressions (regex) are sequences of characters that define a search pattern
mainly used for string matching within texts. Python provides the `re` module for
working with regular expressions.

### Basic Syntax

- **Match function**: `re.match()` matches a regex at the start of a string.
- **Search function**: `re.search()` scans a string to find a regex match.
- **Findall function**: `re.findall()` returns a list of all matches in a string.
- **Substitution function**: `re.sub()` finds all matches and replaces them with
  a specified value.

### Common Patterns

- `.`: Matches any character except a newline.
- `^`: Matches the start of a string.
- `$`: Matches the end of a string.
- `*`: Matches 0 or more repetitions of the preceding regex.
- `+`: Matches 1 or more repetitions of the preceding regex.
- `?`: Matches 0 or 1 repetition of the preceding regex.
- `[]`: Matches any single character within the brackets.

### Example

```python
import re

pattern = r"\bFoo\b"
text = "Foo bar, FooBar"

match = re.search(pattern, text)
if match:
    print("Match found:", match.group())  # Output: Match found: Foo
```

## 13. Error Handling

In Python, handling errors effectively is crucial for building robust programs.
Python provides powerful error handling features using `try`, `except`, `else`,
and `finally` blocks. This allows for graceful recovery from errors and ensures
that the program doesn't crash unexpectedly.

### Try and Except

The `try` block lets you test a block of code for errors. The `except` block
lets you handle the error. If an error occurs within the `try` block, Python
will skip the rest of the block and execute the `except` block.

```python
try:
    number = int(input("Enter a number: "))
    print(f"You entered: {number}")
except ValueError:
    print("Invalid input. Please enter a valid number.")
```

### Else

The `else` block can be used to define code to be executed if no errors occur
in the `try` block.

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print("Success! The result is:", result)
```

### Finally

The `finally` block allows you to execute code regardless of the outcome of
the `try` and `except` blocks.

```python
try:
    f = open("file.txt", "r")
    content = f.read()
except FileNotFoundError:
    print("File not found.")
finally:
    f.close()
    print("File closed.")
```

Using these structures, Python ensures that error handling is both flexible
and systematic, allowing for clean and maintainable code.

## 14. Iterators and Generators

Iterators and generators provide a way to efficiently iterate
through sequences in Python. They are especially useful for large
data sets where loading the entire structure in memory is not feasible.

### Iterators

An iterator in Python is an object that implements two methods:
`__iter__()` and `__next__()`. Using iterators, you can traverse
a container, particularly useful for data processing.

```python

num_list = [1, 2, 3, 4]
iterator = iter(num_list)

print(next(iterator)) # Output: 1
print(next(iterator)) # Output: 2
```

### Generators

Generators are simpler way to create iterators. They are written
like regular functions but use the `yield` statement whenever they
want to return data.

```python

def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

counter = count_up_to(5)

for number in counter:
    print(number)  # Outputs numbers 1 through 5
```

#### Advantages of Generators

- **Memory Efficiency:** Only one data element is loaded at a
  time.
- **Infinite Streams:** Generators can model infinite data streams.

## 15. Decorators and Context Managers

Decorators and context managers are advanced Python features that help write more
efficient and readable code.

### Decorators

Decorators allow you to modify or enhance functions or methods without changing
their actual code. A decorator is a function that takes another function and
extends the behavior of the latter function, without explicitly modifying it.

```python

def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper

@my_decorator

def say_hello():
    print("Hello!")

say_hello()
```

### Context Managers

Context managers are used for resource management and are implemented using the
`with` statement. They ensure that resources are properly managed by closing
files or releasing locks after use, even if errors occur.

Python provides a default context manager using the `with` statement:

```python

with open('file.txt', 'w') as f:
    f.write('Hello, World!')
```

To create a custom context manager, define a class with `__enter__` and `__exit__`
methods.

```python

class MyContextManager:
    def __enter__(self):
        print('Entering the context')
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print('Exiting the context')

with MyContextManager() as manager:
    print('Inside the context')
```

Decorators and context managers are powerful tools that can greatly enhance
your Python programming capabilities, making your code cleaner and more efficient.

## 16. Multithreading and Multiprocessing

In Python, both multithreading and multiprocessing are used to perform
parallel execution of code. This is particularly useful when you want
to improve performance and utilize multiple CPU cores.

### Multithreading

Multithreading allows you to run multiple threads (smaller units of a
process) at the same time. This is suitable for I/O-bound operations
like reading and writing files, network operations, etc.

#### Example:

```python
import threading

def print_numbers():
    for i in range(10):
        print(i)

thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()  # Wait for the thread to finish
```

### Multiprocessing

Multiprocessing involves running multiple processes at the same time,
utilizing different CPU cores. It is suitable for CPU-bound tasks.

#### Example:

```python
from multiprocessing import Process

def print_numbers():
    for i in range(10):
        print(i)

process = Process(target=print_numbers)
process.start()
process.join()  # Wait for the process to finish
```

### When to use what?

- **Use multithreading** when tasks are I/O-bound.
- **Use multiprocessing** when tasks are CPU-bound.

### Note

- Python's Global Interpreter Lock (GIL) can affect multithreading
  performance, but this is not an issue for multiprocessing as each
  process has its own Python interpreter.

Understanding the difference and appropriately using each can help
optimize your code's performance effectively.

## 17. Networking in Python

Python provides several modules for networking tasks, such as `socket` for
low-level network interfacing and higher-level modules like `http.server`
and `urllib`. In this section, we'll cover primarily the `socket` module
for basic networking and client-server communication.

### Socket Programming Basics

The `socket` module provides a way to establish a connection and transmit
data between nodes. Here's a simple server-client setup.

#### Server Example

```python
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 8080))
server_socket.listen(1)

print('Server is ready to accept connections.')

while True:
    client_socket, addr = server_socket.accept()
    print(f'Connection from {addr}')
    client_socket.sendall(b'Hello, Client!')
    client_socket.close()
```

#### Client Example

```python
import socket

client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(('localhost', 8080))

response = client_socket.recv(1024)
print(f'Server says: {response.decode()}')
client_socket.close()
```

#### Explanation

- **Server**: Listens for incoming connections. When a client connects,
  it sends a simple message and then closes that connection.
- **Client**: Connects to the server, receives the message, and then
  displays it.

### Higher-Level Networking

#### `http.client` and `http.server`

- `http.server`: Simple HTTP request handler. Useful for quick tests
  and development.
- `http.client`: Used for HTTP requests. Facilitates interaction with
  web servers.

#### Example: Simple HTTP Server

```python
from http.server import SimpleHTTPRequestHandler, HTTPServer

server_address = ('', 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print('Starting simple http server...')
httpd.serve_forever()
```

#### Working with URLs: `urllib`

- **`urllib.request`**: Open URLs.
- **`urllib.parse`**: Parse URLs.
- **`urllib.error`**: Handle URLs errors.

#### Example: Fetch a Webpage

```python
from urllib import request

response = request.urlopen('http://www.example.com')
html = response.read()
print(html)
```

Networking in Python can range from simple server-client models to
complex web interactions, empowering communication between systems. For
security, ensure you handle network data safely to prevent vulnerabilities.

## 18. Web Scraping with Python

Web scraping is a technique used to extract large amounts of data from
websites quickly. Python offers powerful tools for web scraping.

### Libraries for Web Scraping

1. **Beautiful Soup**: A library to pull data out of HTML and XML files.

   - Installation: `pip install beautifulsoup4`
   - Usage:
     ```python
     from bs4 import BeautifulSoup
     html_doc = "<html><head><title>The Dormouse's story</title></head><body>...</body></html>"
     soup = BeautifulSoup(html_doc, 'html.parser')
     print(soup.title.string)
     ```

2. **Requests**: A simple and elegant HTTP library for Python.

   - Installation: `pip install requests`
   - Usage:
     ```python
     import requests
     response = requests.get('https://example.com')
     print(response.text)
     ```

3. **Scrapy**: A fast high-level web crawling & web scraping framework.
   - Installation: `pip install scrapy`
   - Usage:
     - Create a new Scrapy project: `scrapy startproject myproject`
     - Define your spiders and parse methods.

### Basic Web Scraping Workflow

1. **Send an HTTP request** to the URL of the webpage you want to access.
2. **Parse the HTML content** of the page with Beautiful Soup.
3. **Extract useful information** from the parsed data.
4. **Store the data** in the required format (CSV, JSON, etc.).

### Ethical Considerations

Always check the website’s `robots.txt` file to understand the rules for
web scraping, and respect the website's terms of use. Abide by the robots
exclusion protocol and be mindful of the website’s traffic limits to avoid
potential legal issues or bans.

## 19. Working with Databases in Python

Python provides various libraries to interface with databases and
manage data efficiently. This article will guide you through the
basic concepts and libraries for database operations in Python.

### SQLite

SQLite is a C library that provides a lightweight disk-based
database and doesn't require a separate server process. Python's
`sqlite3` module allows you to work with SQLite databases.

```python
import sqlite3

conn = sqlite3.connect('example.db')

cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)''')

cursor.execute("INSERT INTO users (name) VALUES ('Alice')")

conn.commit()

cursor.execute('SELECT * FROM users')
print(cursor.fetchall())

conn.close()
```

### MySQL

To use MySQL with Python, you can install the `mysql-connector-python`
package or `PyMySQL` for interfacing with the MySQL database.

```bash
pip install mysql-connector-python
```

```python
import mysql.connector

conn = mysql.connector.connect(host='localhost',
                               user='yourusername',
                               password='yourpassword',
                               database='yourdB')

cursor = conn.cursor()

cursor.execute('SELECT * FROM users')

results = cursor.fetchall()
for row in results:
    print(row)

conn.close()
```

### PostgreSQL

For PostgreSQL, use the `psycopg2` package, a popular PostgreSQL
database adapter for Python.

```bash
pip install psycopg2
```

```python
import psycopg2

conn = psycopg2.connect(dbname='yourdB',
                        user='yourusername',
                        password='yourpassword',
                        host='localhost')

cursor = conn.cursor()

cursor.execute('SELECT * FROM users')

records = cursor.fetchall()
for record in records:
    print(record)

conn.close()
```

### Summary

Python's comprehensive libraries allow seamless integration with
various types of databases, making it a flexible choice for data
management applications. Whether it's relational databases like
SQLite, MySQL, PostgreSQL, or NoSQL databases like MongoDB, Python
has you covered. In this article, we focused on the relational
databases and how you can perform basic CRUD operations using the
respective libraries for each database type.

## 20. Data Visualization in Python

Data visualization is a crucial part of data analysis, and Python provides
numerous libraries to create insightful visualizations. Some of the most
popular libraries include Matplotlib, Seaborn, and Plotly.

### Matplotlib

Matplotlib is one of the most widely used libraries for creating static,
interactive, and animated visualizations in Python.

#### Basic Plot Example

Here's how you create a simple line plot using Matplotlib:

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 3, 5, 7, 11]

plt.plot(x, y)
plt.title('Basic Line Plot')
plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.show()
```

### Seaborn

Seaborn is a statistical data visualization library based on Matplotlib.
It provides a high-level interface for drawing attractive and informative
statistical graphics.

#### Example

Create a simple scatter plot with linear regression model:

```python
import seaborn as sns

df = sns.load_dataset('iris')
sns.lmplot(x='sepal_length', y='sepal_width', data=df)
plt.title('Iris Flower Dataset Regression')
plt.show()
```

### Plotly

Plotly is a library that allows for the creation of interactive plots
and dashboards. It works well with Jupyter notebooks and can be easily
integrated with web applications.

#### Example

Create an interactive line graph with Plotly:

```python
import plotly.express as px

data = {'x': [1, 2, 3, 4, 5], 'y': [2, 3, 5, 7, 11]}
fig = px.line(data, x='x', y='y', title='Interactive Line Plot')
fig.show()
```

#### Conclusion

These libraries form a solid foundation for developing both simple and
complex visualizations in Python, allowing for a deeper understanding of
your data.
