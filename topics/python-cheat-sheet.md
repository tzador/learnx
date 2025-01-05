# Python Cheat Sheet

- [01. Introduction to Python Cheat Sheet](#01-introduction-to-python-cheat-sheet)
- [02. Hello World and Variables](#02-hello-world-and-variables)
- [03. Data Types and Type Conversion](#03-data-types-and-type-conversion)
- [04. Operators and Expressions](#04-operators-and-expressions)
- [05. Conditional Statements](#05-conditional-statements)
- [06. Loops and Iteration](#06-loops-and-iteration)
- [07. Functions and Scope](#07-functions-and-scope)
- [08. Lists and Tuples](#08-lists-and-tuples)
- [09. Dictionaries and Sets](#09-dictionaries-and-sets)
- [10. String Manipulation](#10-string-manipulation)
- [11. File Handling](#11-file-handling)
- [12. List Comprehensions and Generators](#12-list-comprehensions-and-generators)
- [13. Modules and Packages](#13-modules-and-packages)
- [14. Exception Handling](#14-exception-handling)
- [15. Regular Expressions](#15-regular-expressions)
- [16. Object-Oriented Programming](#16-object-oriented-programming)
- [17. Decorators in Python](#17-decorators-in-python)
- [18. Context Managers and the 'with' Statement](#18-context-managers-and-the-with-statement)
- [19. Multithreading and Multiprocessing](#19-multithreading-and-multiprocessing)
- [20. Advanced Python Tips and Tricks](#20-advanced-python-tips-and-tricks)

## 01. Introduction to Python Cheat Sheet

Welcome to the Python Cheat Sheet series! This series is designed to provide
you with quick, easy-access references to essential Python programming
concepts. Whether you're new to Python or looking to polish your skills, this
collection of articles aims to cover fundamental and advanced topics, enabling
you to become a proficient Python programmer.

In this series, we will start with the basics, such as variables, data types,
and basic operations, and gradually move towards more advanced concepts like
object-oriented programming, error handling, and working with external
modules.

Stay tuned for the next article where we dive into variables and data types!

## 02. Hello World and Variables

Welcome to the second article of the Python Cheat Sheet series! Here,
we'll take a look at writing a simple "Hello, World!" program and
explore basic variable assignments in Python.

### Hello, World!

The "Hello, World!" program is a traditional first program when
learning a new programming language. In Python, it is simple:

```python
print("Hello, World!")
```

Simply type the code above in a Python file (e.g., `hello.py`) and run
it using a Python interpreter: `python hello.py`. You'll see the
message "Hello, World!" printed on the console.

### Variables

Variables are used to store information that can be referenced and
manipulated in a program. Let's look at basic variable assignments:

#### Variable Assignment

In Python, you can assign a value to a variable using the `=` operator.
For example:

```python
message = "Hello, Python!"
number = 42
pi = 3.14159
```

Here, `message` is assigned a string, `number` is assigned an integer,
and `pi` is assigned a floating-point number.

#### Type Inference

Python is dynamically typed, so you don't need to declare the type of a
variable. It is inferred based on the value assigned.

#### Print Variables

To print the value of a variable, you can use the `print()` function:

```python
print(message)
print(number)
print(pi)
```

#### Conclusion

You've now learned how to create a basic "Hello, World!" program and
assign values to variables in Python. Stay tuned for more!

In the next article, we will explore data types in greater detail, so
you can work with different kinds of data effectively in Python.

## 03. Data Types and Type Conversion

Python supports several standard data types:

- **int**: Integer values, e.g., `1`, `42`
- **float**: Floating point values, e.g., `3.14`, `0.001`
- **str**: Strings, e.g., `'hello'`, `"world"`
- **bool**: Boolean values, `True` or `False`

### Type Conversion

You can convert between types:

```python

int('42')   # Outputs: 42

float('3.14') # Outputs: 3.14

str(100)   # Outputs: '100'

bool(1)    # Outputs: True
```

Note that conversion can fail if the value isn't compatible
with the target type.

Understanding these types and conversions allows for efficient
and effective coding in Python.

## 04. Operators and Expressions

In Python, operators are used to perform operations on variables
and values. Python supports several types of operators, including
arithmetic, comparison, logical, and more.

### Arithmetic Operators

| Operator | Description    |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |
| `**`     | Exponentiation |
| `//`     | Floor division |

#### Example

```python
x = 10
y = 3

addition = x + y     # 13
multiplication = x * y  # 30
exponentiation = x ** y  # 1000
```

### Comparison Operators

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to    |

#### Example

```python
x = 5
y = 10

is_greater = x > y    # False
is_equal = x == y     # False
```

### Logical Operators

| Operator | Description |
| -------- | ----------- |
| `and`    | Logical and |
| `or`     | Logical or  |
| `not`    | Logical not |

#### Example

```python
x = True
y = False

result = x and y   # False
result = x or y    # True
result = not x     # False
```

## 05. Conditional Statements

Conditional statements in Python are used to execute a block of code
after checking if the condition is True or False. The basic conditional
statement is the `if` statement, which can be expanded using `elif` and
`else` clauses.

### Syntax

```python
if condition1:
    # code to execute if condition1 is True
elif condition2:
    # code to execute if condition2 is True
else:
    # code to execute if none of the conditions above are True
```

### Example Usage

```python
age = 20

if age >= 18:
    print("You are an adult.")
elif age > 12:
    print("You are a teenager.")
else:
    print("You are a child.")
```

In this example, "You are an adult." will be printed because `age` is
greater than 18.

### Nested Conditional Statements

Conditional statements can be nested inside each other:

```python
number = 10

if number > 0:
    print("Positive number")
    if number % 2 == 0:
        print("Even number")
else:
    print("Non-positive number")
```

Here, the output will be:

```
Positive number
Even number
```

because `number` is greater than 0 and is even.

## 06. Loops and Iteration

Loops are fundamental for repeating code. Python supports two types of
loops: `for` and `while` loops.

### For Loop

Used to iterate over a sequence like lists, tuples, dictionaries,
strings, etc.

```python

for i in range(5):
    print(i)
```

### While Loop

Repeats as long as a specified condition is true.

```python

count = 0
while count < 5:
    print(count)
    count += 1
```

#### Break Statement

Terminates the loop prematurely.

```python
for letter in 'Python':
    if letter == 'h':
        break
    print('Current Letter:', letter)
```

#### Continue Statement

Skips the current iteration and moves to the next one.

```python
for num in range(2, 10):
    if num % 2 == 0:
        print("Found an even number", num)
        continue
    print("Found a number", num)
```

Loops, especially with large datasets, can lead to inefficiencies,
so understanding their control flow is crucial.

## 07. Functions and Scope

Functions are blocks of code that perform specific tasks. They help to organize
code, make it reusable, and improve readability. Functions can take arguments
and return a result.

### Defining a Function

```python
def greet(name):
    return f"Hello, {name}!"
```

### Calling a Function

```python
print(greet("Alice"))  # Output: Hello, Alice!
```

### Default Arguments

```python
def greet(name="Guest"):
    return f"Hello, {name}!"

print(greet())  # Output: Hello, Guest!
```

### Variable Scope

Variables inside a function are local to that function and cannot be accessed
outside.

```python
def my_function():
    x = 10  # `x` is local to `my_function`.
    print(x)

my_function()  # Output: 10
print(x)  # Raises NameError: name 'x' is not defined
```

### Global Keyword

To modify a global variable inside a function, use the `global` keyword.

```python
y = 5
def set_global_x():
    global y
    y = 10

set_global_x()
print(y)  # Output: 10
```

Understanding functions and scope is pivotal for managing larger code bases
in Python.

## 08. Lists and Tuples

Lists and tuples are fundamental data structures in Python for grouping
elements. Lists are mutable, meaning you can alter their items, whereas
tuples are immutable.

### Lists

A list is created using square brackets:

```python
fruits = ['apple', 'banana', 'cherry']
```

#### Accessing List Items

You can access list items by their index, starting from 0:

```python
first_fruit = fruits[0]  # 'apple'
```

#### Modifying List Items

Lists allow for item reassignment:

```python
fruits[1] = 'blueberry'
```

#### List Methods

- `append()`: Add an item to the end.
- `pop()`: Remove and return an item.
- `sort()`: Sort the list.

```python
fruits.append('date')
fruits.pop(2)
fruits.sort()
```

### Tuples

A tuple is created using parentheses:

```python
colors = ('red', 'green', 'blue')
```

#### Accessing Tuple Items

Similar to lists, you access items by index:

```python
first_color = colors[0]  # 'red'
```

#### Tuple Operations

Tuples do not support item reassignment or have methods like lists.

### Conclusion

Lists and tuples are essential for organizing data, each with its pros
and cons. Choose lists when you need to modify data, and tuples for
constant data.

## 09. Dictionaries and Sets

Dictionaries and sets are two distinct data structures in Python  
that are widely used for storing collections of items.

### Dictionaries

A dictionary in Python is an unordered collection of items. Each item  
is stored as a pair of `key` and `value`. Here's a simple example:

```python

student = {
    "name": "John",
    "age": 25,
    "courses": ["Math", "CompSci"]
}

print(student["name"])  # Output: John

student["phone"] = "555-5555"

student.pop("age")
```

#### Dictionary Functions

- `dict.keys()`: returns a view object that displays a list of all the keys.
- `dict.values()`: returns a view object of all the values in the dictionary.
- `dict.items()`: returns a view object of all key-value pairs.

### Sets

A set is an unordered collection of unique items. Sets are useful  
for storing elements that should not repeat. Here's an example:

```python

courses = {"Math", "CompSci", "Physics"}

courses.add("History")

courses.remove("CompSci")

print("Math" in courses)  # Output: True
```

#### Set Functions

- `set.add()`: adds an element to the set.
- `set.remove()`: removes a specified element.
- `set.union(set2)`: returns a new set with elements from both sets.
- `set.intersection(set2)`: returns a set of elements common to all sets.
- `set.difference(set2)`: returns a set with elements in the set that are
  not in 'set2'.

Understanding how to effectively use dictionaries and sets enhances  
programming efficiency when handling collections of data.

## 10. String Manipulation

Strings in Python are sequences of characters enclosed in single, double,
triple quotes. They are immutable, meaning they cannot be changed after
creation.

### Basic Operations

- **Concatenation:** Combine strings using `+`

  ```python
  str1 = "Hello"
  str2 = "World"
  result = str1 + " " + str2  # Hello World
  ```

- **Repetition:** Repeat strings using `*`

  ```python
  repeated = "ha" * 3  # hahaha
  ```

- **Indexing:** Access characters using indices

  ```python
  text = "Python"
  char = text[0]  # P
  ```

- **Slicing:** Extract substrings using `[start:stop:step]`
  ```python
  substring = text[1:4]  # yth
  ```

### Common Methods

- **Lower and Upper:** Convert case

  ```python
  lower = text.lower()  # python
  upper = text.upper()  # PYTHON
  ```

- **Split and Join:** Divide and combine strings

  ```python
  parts = "a,b,c".split(",")  # ['a', 'b', 'c']
  joined = "-".join(parts)     # a-b-c
  ```

- **Strip:** Remove whitespace

  ```python
  stripped = "  spaces ".strip()  # "spaces"
  ```

- **Replace:** Substitute substrings
  ```python
  replaced = "Hello, World".replace("World", "Python")  # "Hello, Python"
  ```

## 11. File Handling

File handling is essential for reading from and writing to files in Python.
Python provides built-in functions for handling files, allowing you to open,
read, write, and delete them easily. Here's a quick guide on file handling.

### Opening a File

You can open a file using the `open()` function:

```python
file = open('example.txt', 'r')
```

- `'r'` mode opens a file for reading.
- `'w'` mode opens a file for writing (truncates the file if it exists).
- `'a'` mode opens a file for appending (adds new data to the end).
- `'b'` mode opens a file in binary mode.

### Reading a File

To read contents from a file, use methods like `read()`, `readline()`, or
`readlines()`:

```python
content = file.read()
line = file.readline()
lines = file.readlines()
```

### Writing to a File

To write data to a file, use `write()` or `writelines()`:

```python
file.write('Hello, World!')
file.writelines(['Line1\n', 'Line2\n'])
```

### Closing a File

Always close a file after operations using `close()` to free up system
resources:

```python
file.close()
```

### Using `with` Statement

The `with` statement simplifies file handling. It automatically closes the
file:

```python
with open('example.txt', 'r') as file:
    content = file.read()
```

Utilizing the `with` statement is the best practice for file handling in
Python.

## 12. List Comprehensions and Generators

List comprehensions and generators in Python provide powerful constructs
for creating and handling collections, enabling concise and efficient
code.

### List Comprehensions

List comprehensions offer a compact syntax for generating lists from
iterables.

```python

squared_numbers = [x**2 for x in range(10)]
print(squared_numbers)
```

In the example above, `squared_numbers` is a list of squares of numbers
0 through 9.

### Conditional List Comprehensions

You can incorporate conditions within list comprehensions for
filtering elements.

```python
even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)
```

This generates a list of even numbers between 0 and 19.

### Nested List Comprehensions

List comprehensions can be nested to handle multi-dimensional data.

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_matrix = [num for row in matrix for num in row]
print(flat_matrix)
```

Here, `flat_matrix` is a flattened version of the 2D `matrix`.

### Generators

Generators yield items one at a time and are created using functions
with the `yield` statement.

```python
def generate_numbers(n):
    for i in range(n):
        yield i**2

squared_numbers_gen = generate_numbers(10)
for num in squared_numbers_gen:
    print(num)
```

Generators are memory-efficient as they produce items on the fly.

## 13. Modules and Packages

In Python, a **module** is a file containing Python definitions
and statements. They enable code reuse and organization.
A **package** is a collection of modules that can be used as
an application programming interface for other programs.

### Creating a Module

To create a module, write functions and variables in a file
with a `.py` extension:

```python

def greet(name):
    return f"Hello, {name}!"
```

### Importing a Module

Use the `import` statement to use functions or variables from
another module:

```python
import my_module
print(my_module.greet('World'))  # Output: Hello, World!
```

### Importing Specific Functions

You can import specific functions or variables using the `from`
keyword:

```python
from my_module import greet
print(greet('World'))  # Output: Hello, World!
```

### Exploring Built-in Modules

Python offers various built-in modules for tasks like
mathematics, file I/O, etc.:

```python
import math
print(math.sqrt(16))  # Output: 4.0
```

### Packages

Packages are directories containing a special `__init__.py`
file and can have several modules:

```
mypackage/
    __init__.py
    module1.py
    module2.py
```

To import modules from a package:

```python
from mypackage import module1
```

Packages help in organizing modules and enabling
namespace separation. Use them to maintain clean and clear
code architecture.

## 14. Exception Handling

Exception handling in Python allows you to deal with errors gracefully.
You can use `try`, `except`, `else`, and `finally` to manage errors
in your code.

```python
try:
    # code that may raise an exception
    result = 10 / 0
except ZeroDivisionError:
    print("Division by zero is not allowed.")
else:
    print("No exceptions occurred.")
finally:
    print("This block is always executed.")
```

- **try**: The code within this block is executed first.
- **except**: This block is only executed if an exception occurs.
- **else**: This block is executed if no exceptions occur.
- **finally**: This block is executed no matter if an exception
  occurs or not.

You can also handle multiple exceptions and raise exceptions
manually using `raise`.

```python
try:
    file = open('non_existent_file.txt')
except FileNotFoundError as e:
    print(f"Error: {e}")

if not isinstance('string', int):
    raise TypeError("Expected an integer")
```

Using exception handling makes your Python applications
more robust and reliable. It helps serve as an
effective debugging tool too.

## 15. Regular Expressions

Regular expressions (regex) are a powerful tool for matching patterns in text.
Python provides the `re` module to work with regular expressions.

### Basic Functions

#### `re.match()`

Matches a pattern at the beginning of a string.

```python
import re
pattern = r'hello'
text = 'hello world'
match = re.match(pattern, text)
print(match)  # Output: <re.Match object; span=(0, 5), match='hello'>
```

#### `re.search()`

Searches for a pattern anywhere in the string.

```python
import re
pattern = r'world'
text = 'hello world'
search = re.search(pattern, text)
print(search)  # Output: <re.Match object; span=(6, 11), match='world'>
```

#### `re.findall()`

Finds all occurrences of a pattern in the string and returns a list.

```python
import re
pattern = r'l'
text = 'hello world'
findall = re.findall(pattern, text)
print(findall)  # Output: ['l', 'l', 'l']
```

#### `re.sub()`

Replaces occurrences of a pattern with a replacement string.

```python
import re
pattern = r'world'
replace = 'Python'
text = 'hello world'
sub = re.sub(pattern, replace, text)
print(sub)  # Output: 'hello Python'
```

### Special Characters

- `.` - Matches any character except newline
- `^` - Matches the start of a string
- `$` - Matches the end of a string
- `*` - Matches 0 or more repetitions
- `+` - Matches 1 or more repetitions
- `?` - Matches 0 or 1 repetition
- `{}` - Matches an exact number of repetitions
- `[]` - Denotes a set of characters
- `|` - Acts as an OR operator
- `()` - Captures and groups

### Flags

Flags can modify the behavior of regex patterns.
Examples include case insensitivity and multi-line matching.

#### Example: `re.I` for case insensitivity

```python
import re
pattern = r'hello'
text = 'Hello World'
search = re.search(pattern, text, re.I)
print(search)  # Output: <re.Match object; span=(0, 5), match='Hello'>
```

## 16. Object-Oriented Programming

Object-Oriented Programming (OOP) in Python allows you to create
classes, which are blueprints for creating objects. Here's a simple
guide to using classes in Python.

### Defining a Class

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")
```

- `__init__`: Constructor method that initializes the object.
- `self`: Instance reference, allows access to the object's attributes.

### Creating an Object

```python
my_dog = Dog("Buddy", 3)
```

- This creates an instance of the `Dog` class named `my_dog`.

### Accessing Attributes and Methods

```python
print(my_dog.name)  # Output: Buddy
print(my_dog.age)   # Output: 3
my_dog.bark()       # Output: Woof!
```

### Inheritance

You can create a class that inherits from another class:

```python
class Puppy(Dog):
    def __init__(self, name, age, training_level):
        super().__init__(name, age)
        self.training_level = training_level
```

- `super()`: Calls the constructor of the parent class.

## 17. Decorators in Python

Decorators in Python are a design pattern that allows you to modify the
behavior of a function or class method. They are a powerful tool for
extending the capabilities of existing code without modifying its structure.

### How Decorators Work

Decorators wrap a function, modifying its behavior while keeping the core
functionality intact. They are implemented using the `@decorator_name`
syntax above the function definition.

```python

def my_decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello, World!")

say_hello()
```

#### Explanation

1. **Decorating the Function**: The `@my_decorator` is applied to
   `say_hello`. It passes `say_hello` to the `my_decorator` function.

2. **Wrapper Function**: Inside the `my_decorator`, a `wrapper` function
   is defined that adds behavior before and after the call to the
   decorated function.

3. **Executing the Decorated Function**: When `say_hello()` is called,
   the output demonstrates the added functionality:
   - Before the function call
   - Hello, World!
   - After the function call

#### Chaining Decorators

Multiple decorators can be applied to a single function by stacking them
above the function definition.

```python
@decorator_one
@decorator_two
def sample_function():
    pass
```

In this example, `decorator_two` is applied first, followed by `decorator_one`.

### Practical Uses of Decorators

1. **Logging**: Adding logging information to function calls.
2. **Access Control and Authentication**: Enforcing access controls by
   checking permissions.
3. **Caching**: Memoizing functions to store results of expensive calls.

Decorators provide a clean and readable way to apply these cross-cutting
concerns to your functions throughout your codebase.

## 18. Context Managers and the 'with' Statement

In Python, context managers are a powerful tool for resource management.
They allow you to allocate and release resources precisely when you
want to. The most common example is file handling, but context managers
can be used for many other tasks that require setup and clean-up.

The `with` statement in Python is used to wrap the execution of a block
of code with methods defined by a context manager. This makes the code
cleaner and more readable.

### Basic Usage of `with`

When you use the `with` statement, it automatically calls two methods
on the context manager object: `__enter__()` at the beginning and
`__exit__()` at the end. Here's a basic example:

```python
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)
```

In this example, the file is opened and read, and once done, it is
automatically closed, even if an exception occurs during the file
operation.

### Custom Context Managers

You can create your own context managers by defining the `__enter__`
and `__exit__` methods in a class or by using the `contextlib`
module's `contextmanager` decorator.

#### Using a Class:

```python
class MyContextManager:
    def __enter__(self):
        print("Entering context")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Exiting context")

with MyContextManager() as manager:
    print("Inside context")
```

#### Using `contextlib.contextmanager`:

```python
from contextlib import contextmanager

@contextmanager
def my_context_manager():
    print("Entering context")
    yield
    print("Exiting context")

with my_context_manager() as manager:
    print("Inside context")
```

These examples show how to use `with` to manage resources efficiently
and clean up automatically, which is crucial for effective and
readable code.

## 19. Multithreading and Multiprocessing

Multithreading and multiprocessing in Python are techniques used for parallel
programming to make the most out of the hardware capabilities, especially for
CPU-bound and I/O-bound tasks.

### Multithreading

- The `threading` module is used for multithreading in Python.
- A thread is a lightweight process that runs within a program.

```python
import threading

def print_numbers():
    for i in range(5):
        print(i)

thread = threading.Thread(target=print_numbers)
thread.start()
thread.join()  # Wait for the thread to finish
```

- Use the `threading` module for I/O-bound operations.

### Multiprocessing

- The `multiprocessing` module allows the creation of processes.
- Processes are independent, while threads share the same memory space.

```python
from multiprocessing import Process

def print_numbers():
    for i in range(5):
        print(i)

process = Process(target=print_numbers)
process.start()
process.join()  # Wait for the process to finish
```

- Ideal for CPU-bound operations.

### Best Practices

- Use multithreading for tasks involving network I/O, file I/O.
- Use multiprocessing for CPU-intensive tasks.
- Be aware of the Global Interpreter Lock (GIL) which can impact multithreaded
  performance in Python.

Multithreading and multiprocessing can help enhance the performance of a Python
application if used correctly. Understanding when to use each of these tools is
key to maximizing the efficiency of your code.

## 20. Advanced Python Tips and Tricks

Python is a versatile language with many hidden gems. Here are a few
advanced tips and tricks to enhance your Python skills:

### Use of Lambda Functions

Lambda functions are quick, anonymous functions declared with the
`lambda` keyword, often used where function objects are required.

```python
multiply = lambda x, y: x * y
print(multiply(2, 3))  # Output: 6
```

### Using `enumerate`

`enumerate` is useful for loops as it provides both index and value
of iterables.

```python
colors = ['red', 'green', 'blue']
for idx, color in enumerate(colors):
    print(f"{idx}: {color}")
```

### The Power of `zip`

`zip` is used to combine multiple iterables, great for parallel
iterations.

```python
names = ['John', 'Jane']
scores = [90, 95]
for name, score in zip(names, scores):
    print(f"{name}: {score}")
```

### `*args` and `**kwargs`

`*args` and `**kwargs` allow passing variable numbers of arguments
to functions.

```python
def greet(*names, **details):
    for name in names:
        print("Hello", name)
    print("Details:", details)
```

### Using List Comprehensions Efficiently

List comprehensions are concise, powerful tools for creating lists.

```python
squares = [x**2 for x in range(10) if x % 2 == 0]
print(squares)
```

### Decorate with Fun

Decorators modify the behavior of functions or classes.

```python
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before calling the function")
        result = func(*args, **kwargs)
        print("After calling the function")
        return result
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

### Using `itertools` Module

The `itertools` module is packed with constructs to build iterators.

```python
from itertools import count
for i in count(10, 2):
    if i > 20:
        break
    print(i)
```

These advanced techniques will help improve performance and readability
of your Python code. Happy coding!
