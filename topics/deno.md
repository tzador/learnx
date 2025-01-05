# Deno

- [1. Introduction to Deno](#1-introduction-to-deno)
- [2. Setting Up Deno Environment](#2-setting-up-deno-environment)
- [3. Understanding Deno Modules](#3-understanding-deno-modules)
- [4. Deno CLI Basics](#4-deno-cli-basics)
- [5. Differences Between Deno and Node.js](#5-differences-between-deno-and-nodejs)
- [6. Working with Deno Permissions](#6-working-with-deno-permissions)
- [7. Deno Runtime Security Model](#7-deno-runtime-security-model)
- [8. Creating a Simple Deno Application](#8-creating-a-simple-deno-application)
- [9. Using Deno Third-Party Modules](#9-using-deno-third-party-modules)
- [10. Testing and Debugging in Deno](#10-testing-and-debugging-in-deno)
- [11. Deno and TypeScript](#11-deno-and-typescript)
- [12. Deno File System API](#12-deno-file-system-api)
- [13. Deno HTTP Server](#13-deno-http-server)
- [14. Deno Dependency Management](#14-deno-dependency-management)
- [15. Deno WebSocket API](#15-deno-websocket-api)
- [16. Deno for Building RESTful APIs](#16-deno-for-building-restful-apis)
- [17. WebAssembly with Deno](#17-webassembly-with-deno)
- [18. Deno and Docker Integration](#18-deno-and-docker-integration)
- [19. Advanced Deno Concept: Custom Permissions](#19-advanced-deno-concept-custom-permissions)
- [20. Deno Deploy: Deploying Serverless Applications with Deno](#20-deno-deploy-deploying-serverless-applications-with-deno)

## 1. Introduction to Deno

Deno is a simple, modern, and secure runtime for JavaScript and TypeScript that
aims to offer an improved development experience. Created by Ryan Dahl, the
original developer of Node.js, Deno was designed to address several issues
found in Node.js, including security vulnerabilities, a complex module system,
and a package management system that can sometimes lead to "dependency
hell."

With Deno, developers are offered the convenience of using TypeScript
out-of-the-box, a straightforward module system using URLs, and a strong focus
on security by default—running scripts in a sandboxed environment, asking for
explicit permission to access resources such as the file system, network, or
environment variables.

Deno has begun to gain traction within the developer community, owing to its
simplicity and robustness, making it a compelling choice for building modern
web applications and scripting tasks.

## 2. Setting Up Deno Environment

In this article, we will guide you through the process of setting up the Deno
environment on your local machine. Deno is a JavaScript and TypeScript runtime
built on the V8 engine, created by Ryan Dahl. It offers a secure and modern
alternative to Node.js.

### Installing Deno

To get started, you need to install Deno on your system. Deno provides an
easy installation script through curl:

```bash
curl -fsSL https://deno.land/install.sh | sh
```

This command will download and install Deno. Ensure the directory where
Deno was installed is added to your system's PATH.

Alternatively, if you prefer to use a package manager:

- **Windows**: You can use Scoop or Chocolatey.
- **macOS**: Use Homebrew with the command `brew install deno`.
- **Linux**: You can use the Snapcraft package.

Verify the installation was successful by running the following:

```bash
deno --version
```

This will display the installed version of Deno.

### Understanding Deno's Permissions

Deno is designed with security in mind. By default, it executes code in a
sandbox-like environment without access to the disk, network, or environment.
You need to explicitly grant permissions using flags:

- `--allow-read`: Allows reading from the file system.
- `--allow-write`: Allows writing to the file system.
- `--allow-net`: Grants access to network capabilities.
- `--allow-env`: Allows accessing environment variables.

These permissions help you control the resources a Deno application can
access, reducing potential vulnerabilities.

In the next article, we will delve into writing and running a simple Deno
script to see these concepts in action.

## 3. Understanding Deno Modules

Deno is a modern runtime for JavaScript and TypeScript, and one of its key features
is the way it handles modules. Understanding Deno's module system is essential for
efficiently working with Deno applications.

### Module System

Deno uses a URL-based module system, which is different from Node.js’s `require`
function. This means you can import modules via URLs directly, without needing a
package manager like npm.

#### Importing Modules

You can import modules in Deno using the `import` statement:

```javascript
import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
```

This example imports the `serve` function from a standard Deno library hosted at
deno.land. This approach ensures that the exact version of the library is used.

#### Absolute vs Relative Imports

- **Absolute Imports**: Refer to modules via URLs. You need not worry about
  module paths.
- **Relative Imports**: Also supported but less common. Used when you're
  working within a local codebase.

```javascript
import { foo } from "./local_module.ts";
```

#### Other Features

- **Cache**: Deno caches modules at first run to save on subsequent loads.
- **No `node_modules`**: Modules are linked directly into your program from
  the source URLs.

Understanding how Deno handles these aspects provides a streamlined way of
managing and utilizing modules in your applications.

## 4. Deno CLI Basics

Deno's CLI (Command Line Interface) provides a powerful and flexible way to
execute code in the Deno runtime. It's designed to give developers everything
they need right out of the box, minimizing configuration and dependencies.
Here, we will cover some of the key aspects of the Deno CLI to help get you
started.

### Running Scripts

The primary use of the Deno CLI is to run TypeScript and JavaScript files. You
can execute a script simply by using the `deno run` command followed by the
path to the script file:

```sh
deno run my_script.ts
```

Deno supports remote code execution too. Therefore, you can even specify URLs
to execute code directly from the web:

```sh
deno run https://example.com/my_script.ts
```

### Managing Permissions

One of the important security features of Deno is its permissions model, which
prevents code from executing potentially destructive actions unless explicitly
allowed. By default, Deno scripts have no access to files, network, or
environment variables. Permissions can be granted to a script with flags such
as `--allow-read` or `--allow-net`:

```sh
deno run --allow-read my_script.ts
```

It's a good practice to grant the least amount of permission necessary to run
your script.

### Using the REPL

Deno also ships with a Read-Eval-Print-Loop (REPL), a simple interactive
programming environment. You can start the REPL by running:

```sh
deno
```

Once in the REPL, you can type and execute simple JavaScript and TypeScript
commands and see immediate results.

### Help and Documentation

Deno has robust documentation baked into its CLI. By using the `deno help`
command, you can see a list of available commands and arguments:

```sh
deno help
```

This is useful for discovering new capabilities and learning more about each
feature of the CLI.

Understanding these basics will give you a strong start in using Deno
effectively for your projects, harnessing its speed, security, and simplicity.

## 5. Differences Between Deno and Node.js

Deno and Node.js are both JavaScript runtime environments,
but they have significant differences.
Understanding these distinctions can help developers decide which to
use for specific projects. Let's explore the primary differences between
the two environments.

### Security

Deno is designed with security in mind. By default, it runs code in a
secure sandbox and does not allow network or file system access unless
explicitly permitted by the developer. This approach contrasts with
Node.js, which does not have these restrictions by default and requires
additional packages or configurations to secure the runtime environment.

### Module System

Deno uses ECMAScript modules as its default module system, which aligns
with modern JavaScript practices and promotes compatibility with browser
implementations. On the other hand, Node.js traditionally relied on the
CommonJS module system. While Node.js now supports ECMAScript modules,
the two systems coexist, which can lead to complexity in some projects.

### Package Management

Deno does not have a centralized package manager like npm for Node.js.
Instead, it uses URL imports directly from repositories or servers.
This model simplifies dependency management by removing the need for a
package management tool. Node.js, however, leverages npm for a vast
ec osystem of packages, offering a well-known dependency management
workflow.

### Compatibility

Deno was built from the ground up with TypeScript support, making it
more appealing for TypeScript developers. Node.js supports TypeScript,
but typically requires additional configuration and tools such as
TypeScript compiler (tsc) to run TypeScript code.

### Built-in Utilities

Deno focuses on providing a robust standard library to reduce the need
for third-party tools. Utilities like a test runner and a linter come
pre-packaged with Deno, providing a streamlined development experience.
In contrast, Node.js relies on external packages for these utilities,
offering more choices but at the cost of increased configurations.

By understanding these core differences, developers can better choose
the right tool for their development needs, taking into account factors
like security, module compatibility, and built-in utilities.

## 6. Working with Deno Permissions

Deno is designed with security as a priority, unlike some other JavaScript
runtimes that run code with unrestricted access to system resources. By
default, Deno code executes in a sandboxed environment, and you must explicitly
grant permissions for operations that affect the system.

### Permission Flags

Deno's permission model works by granting necessary permissions using command
line flags when you execute a program. Here are some commonly used permission
flags:

- `--allow-read`: Grants access to read files and directories.
- `--allow-write`: Allows writing to files and directories.
- `--allow-net`: Permits network access.
- `--allow-env`: Grants access to environment variables.
- `--allow-run`: Allows running subprocesses.
- `--allow-hrtime`: Enables high resolution time measurement.

### Usage Example

Suppose you have a script `script.ts` that needs network access and file read
permissions. You can execute it with:

```bash
deno run --allow-net --allow-read script.ts
```

Without these flags, any operation attempting to access the network or read
files will yield an error.

### Checking Permissions

Deno provides an API to programmatically check and request permissions within a
script. This is useful for understanding and mitigating potential security
risks.

#### Example

```typescript
const status = await Deno.permissions.query({ name: "read" });
if (status.state === "granted") {
  console.log("Read access is granted.");
} else {
  console.log("Read access is denied.");
}
```

This script checks if read access is granted and logs the status.

Understanding and controlling permissions is crucial when working with Deno,
as it ensures that scripts have only the access they need to function,
enhancing security.

## 7. Deno Runtime Security Model

Deno differentiates itself from other JavaScript and TypeScript runtimes
by adopting a strong security model by default. The core philosophy here
is "secure by default," which means that Deno restricts access to
resources such as filesystem, network, and environment variables unless
specifically permitted.

### Security Permissions

Deno uses a permission-based model to control what code within a Deno
application can access. By default, no permissions are granted, and
specific permissions must be explicitly granted when launching a Deno
program. This ensures that any malicious or unintended code execution
is unable to interact with sensitive parts of the system without your
explicit consent.

- **Filesystem Access:** With the `--allow-read` and `--allow-write`
  flags, Deno can be granted permission to read from and write to the
  filesystem, respectively. These permissions can be scoped to specific
  directories.
- **Network Access:** The `--allow-net` flag permits Deno scripts to
  make network requests. Similar to filesystem access, network access
  can be restricted to specific addresses or domains.
- **Environment Variables:** Access to environment variables is
  governed by the `--allow-env` flag. Without this, Deno scripts cannot
  access any environment variables.

- **Running subprocesses:** Controlled by the `--allow-run` flag, it
  allows Deno scripts to spawn subprocesses.

### Benefits of Deno's Security Model

The main advantage of Deno's security model is the fine-tuned control it
offers developers over how a script or application can interact with the
system. This helps in:

1. **Reducing Attack Surface:** By restricting default access, Deno
   insulates applications from unauthorized data access and malicious
   attacks.

2. **Encouraging Best Practices:** It nudges developers towards more
   responsible programming practices and resource access management.

3. **Minimizing Risks:** By granting permissions only when necessary,
   Deno significantly lowers the risk of scripts performing unwanted
   actions.

Deno's security model empowers users to build more secure applications
by necessity, aligning security with development processes in a simple
and effective way. Understanding and leveraging this model ensures
developers can make the most of Deno's security offerings efficiently.

## 8. Creating a Simple Deno Application

In this article, we will guide you through the steps of creating a simple
Deno application. Deno aims to provide a secure and scalable environment
for writing modern JavaScript and TypeScript applications. Let's start
by developing a basic web server.

### Step 1: Initialize Your Project

First, create a new directory for your Deno project. This can be done
using the terminal:

```bash
mkdir my-deno-app
cd my-deno-app
```

### Step 2: Create a Basic Web Server

Create a new file named `server.ts` within your project directory.
Open this file in your favorite text editor and add the following code
to create a simple HTTP server:

```typescript
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });
console.log("HTTP server running on http://localhost:8000/");

for await (const req of server) {
  req.respond({ body: "Hello World!" });
}
```

In this code, the `serve` function from Deno's standard library is
imported and used to create an HTTP server that listens on port 8000.
The server responds with "Hello World!" to every request.

### Step 3: Run the Deno Server

To run your Deno application, navigate to your project directory in the
terminal and use the following command:

```bash
deno run --allow-net server.ts
```

The `--allow-net` flag is necessary because Deno is secure by default
and requires explicit permission for network access.

### Step 4: Access Your Web Server

Open a browser and go to `http://localhost:8000/`. You should see the
message "Hello World!" confirming your Deno server is operational.

### Conclusion

You've successfully created a simple web server using Deno. This serves
as a foundation for building more complex applications in the future.
In upcoming articles, we will cover advanced topics like routing and
connecting to databases.

## 9. Using Deno Third-Party Modules

Deno provides a secure environment for running JavaScript and TypeScript
applications. One way to extend Deno's capabilities is by utilizing
third-party modules. Unlike Node.js, Deno doesn't use npm for package
management. Instead, modules can be imported directly via URLs.

### Importing Third-Party Modules

Third-party modules are often hosted on platforms like GitHub or Deno's
official hosting service, Deno Land. To import a third-party module, you
can use the `import` statement with the appropriate URL. For example:

```typescript
import { serve } from "https://deno.land/std@0.115.1/http/server.ts";
```

This statement imports the `serve` function from Deno's standard library.
It's important to note the versioning (`@0.115.1`) included in the URL to
avoid breaking changes.

### Version Control

Deno encourages semantic versioning, which allows developers to import
specific versions of a module. By including the version number in the
import URL, developers can ensure consistent behavior across updates.

### Benefits of URL-Based Imports

- **Simplicity**: Direct URL imports eliminate the need for a package
  manager like npm.
- **Version Management**: Developers can precisely control the versions
  of dependencies.
- **Security**: By explicitly importing modules from URLs, Deno enhances
  transparency and trust.

### Using Deno Land

[Deno Land](https://deno.land/x) offers a curated collection of
third-party modules. Modules listed here are often well-maintained and
come with documentation to ease their adoption.

### Example of Using a Third-Party Module

```typescript
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });
```

In this example, we use the `oak` module to create a simple HTTP server
with Deno.

### Conclusion

While Deno's approach to third-party modules differs from traditional
package managers, its reliance on URL imports provides advantages in
terms of simplicity, security, and version control.

## 10. Testing and Debugging in Deno

Testing and debugging are crucial elements of any software development cycle.
Deno provides robust built-in utilities that help developers write and run
tests, and debug their applications efficiently.

### Testing in Deno

Deno has a built-in test runner that makes writing and running tests
straightforward. Here's a simple example of a test in Deno:

```typescript
deno test my_test.ts
```

Create a file `my_test.ts` and add the following:

```typescript
Deno.test("example test", () => {
  if (1 !== 1) {
    throw new Error("Test failed!");
  }
});
```

The above command will automatically discover your tests and execute them.

### Debugging in Deno

Deno supports debugging via Chrome DevTools. You can launch a script in
debug mode using:

```bash
deno run --inspect-brk my_script.ts
```

This command opens a debugging session, pausing at the first line of the
script, allowing breakpoints to be set and inspected through Chrome DevTools.

#### Summary

- Deno simplifies testing with its built-in test runner.
- Debugging is supported via DevTools integration.
- Use `deno test` to execute tests, and `deno run --inspect-brk` to
  debug.

Embrace these tools to improve your development workflow and ensure
robust applications.

## 11. Deno and TypeScript

Deno is designed with a strong focus on modern technology stacks, which
includes seamless integration with TypeScript out of the box. This
capability sets it apart from other runtimes that might require additional
configurations or tools to accomplish the same feat.

### Why TypeScript?

TypeScript is a superset of JavaScript that provides optional static typing,
interfaces, and type inference, which leads to more maintainable and less
error-prone code. The advantages of using TypeScript include improved
developer tooling with autocompletion and error detection before runtime,
as well as easier code navigation.

### Working with TypeScript in Deno

Using TypeScript in Deno does not require any additional configuration.
Deno natively supports the execution of TypeScript files without the need
for extra compilation steps. Simply create a `.ts` file, and run it using
the `deno run` command. Here's an example:

```typescript
// example.ts

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

Running this file using the Deno command is straightforward:

```bash
deno run example.ts
```

Deno's native TypeScript support means fewer dependencies and less
configuration overhead, making it easier for developers to focus on writing
code rather than setting up tools.

### TypeScript Compiler in Deno

Deno automatically handles the TypeScript to JavaScript compilation process
internally, leveraging the TypeScript compiler API. This built-in feature
ensures that the runtime is always in sync with the latest TypeScript
developments, allowing developers to use modern language features and
enjoy improved performance without manual intervention.

### Advantages for Deno Developers

1. **Zero Configuration:** Developers can write TypeScript without setting
   up a separate build step or configuration.
2. **Seamless Updates:** Through Deno's automatic updates, developers
   can use the latest TypeScript features effortlessly.
3. **Streamlined Workflow:** Combining Deno's features with TypeScript's
   benefits leads to quicker and more efficient development cycles.

In conclusion, Deno's tight coupling with TypeScript highlights its modern
design principles, enabling developers to leverage the best of both
worlds—JavaScript's ubiquity and TypeScript's robustness—without additional
overhead.

## 12. Deno File System API

Deno provides a robust File System API, allowing developers to interact
with the file system efficiently. It is designed to offer similar
functionality to Node.js but with Deno's secure permissions model, which
means file operations require explicit permissions.

To begin using Deno's File System API, one must ensure the necessary
permissions are granted. This can be done using command line flags such
as `--allow-read` and `--allow-write`. These flags can fine-tune which
operations are permissible on specific paths, enhancing security.

### Reading Files

Reading files in Deno is straightforward. Using the built-in `Deno.readFile`
function, you can read file contents into a Uint8Array buffer:

```typescript
const data = await Deno.readFile("./file.txt");
const text = new TextDecoder().decode(data);
console.log(text);
```

For reading text files directly, `Deno.readTextFile` can be used:

```typescript
const text = await Deno.readTextFile("./file.txt");
console.log(text);
```

### Writing Files

Writing data to a file can be done with `Deno.writeFile`. This function
expects a path and a Uint8Array:

```typescript
const encoder = new TextEncoder();
const data = encoder.encode("Hello, World!\n");
await Deno.writeFile("./hello.txt", data);
```

For simpler operations, such as writing text directly, use
`Deno.writeTextFile`:

```typescript
await Deno.writeTextFile("./hello.txt", "Hello, World!\n");
```

### Working with Directories

Creating directories is simple with `Deno.mkdir`, which ensures the
specified path is created:

```typescript
await Deno.mkdir("./new_dir", { recursive: true });
```

Likewise, removing files or directories can be done with `Deno.remove`:

```typescript
await Deno.remove("./hello.txt");
await Deno.remove("./new_dir", { recursive: true });
```

### Watching File Changes

Deno provides the ability to watch for file changes using `Deno.watchFs`:

```typescript
for await (const event of Deno.watchFs("./")) {
  console.log("File change detected: ", event);
}
```

This feature is quite useful in scenarios where live reloading is
required, as it monitors specified paths for any changes.

The Deno File System API is a powerful tool for developers, allowing
fine-grained control over file operations with heightened security
measures. Understanding and utilizing this API can greatly enhance a
developer's ability to build scalable and secure Deno applications.

## 13. Deno HTTP Server

In this article, we will explore how to set up a simple HTTP server using Deno.
Deno provides built-in capabilities to handle HTTP requests, making it simple
to create server-side applications.

### Setting Up a Basic HTTP Server

To start, you can set up a basic HTTP server with just a few lines of code. The
`serve` function from Deno's standard library facilitates this.

Here's a step-by-step guide:

1. **Import the `serve` Function**

```typescript
import { serve } from "https://deno.land/std@0.110.0/http/server.ts";
```

2. **Define the Port**
   Choose a port number where the server will listen for incoming requests.

```typescript
const port = 8000;
```

3. **Create the Server**
   Utilize the `serve` function to handle requests and responses.

```typescript
const server = serve({ port });
console.log(`HTTP webserver running. Access it at:  http://localhost:${port}/`);

for await (const request of server) {
  request.respond({
    status: 200,
    body: "Hello, World!",
  });
}
```

### Running the Server

To run the server, you need to have Deno installed. Save the above code in a
file, for example, `server.ts`, and run it using the following command:

```shell
deno run --allow-net server.ts
```

The `--allow-net` permission is necessary for the server to listen for network
requests.

### Explanation

- The `serve` function takes configuration options (e.g., the port number).
- The server listens for HTTP requests asynchronously using a `for await of`
  loop.
- The `request.respond` method sends a response back to the client.

Deno's built-in server is powerful and efficient, enabling easy creation of web
servers with minimal code.

Explore additional features and options in the Deno standard library for more
advanced server setups, such as routing and middleware handling.

## 14. Deno Dependency Management

Deno has introduced a new perspective on how to handle dependencies.
Instead of using a centralized package manager like npm in Node.js,
Deno fetches dependencies directly through URL. This allows for a
simpler and more transparent dependency management process.

### Importing Dependencies

In Deno, importing a dependency is straightforward. You simply use
the `import` statement along with a URL:

```javascript
import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
```

This imports the specified module directly from the URL. Note that
the version is specified with `@0.167.0` to ensure the code remains
stable across updates.

### Cached Dependencies

Deno automatically caches downloaded modules. Once downloaded, the
module is stored locally and reused in subsequent executions,
unless explicitly updated or the cache is cleared.

### Lock Files

While Deno does not use `package.json`, it can generate and use
lock files, which ensure reproducibility. These lock files keep
track of exact versions of dependencies to provide consistent
environments across different setups.

You can create a lock file using:

```
deno cache --lock=lock.json
```

Use the lock file during execution with:

```
deno run --lock=lock.json my_script.ts
```

### Third-Party Modules

For third-party packages, Deno provides a registry at
[deno.land/x](https://deno.land/x), where developers can
share their packages hosted on GitHub. This registry aids
users in discovering and using community modules.

In summary, Deno's approach to dependency management through
URL imports streamlines the process and provides a secure,
cache-friendly, and version-controlled method to handle
third-party code.

## 15. Deno WebSocket API

Deno provides built-in support for WebSockets, empowering developers to
efficiently implement real-time communication in web applications.
WebSockets enable full-duplex communication channels over a single TCP
connection, allowing servers and clients to exchange messages
seamlessly.

### Implementing WebSocket in Deno

To create a WebSocket server in Deno, you first need to import the
necessary functionalities from the `std/ws` module. Here is a basic
example to illustrate setting up a WebSocket server:

```ts
import { serve } from "https://deno.land/std@0.115.1/http/server.ts";
import { acceptWebSocket } from "https://deno.land/std@0.115.1/ws/mod.ts";

async function handleWs(sock) {
  console.log("New WebSocket connection");
  for await (const ev of sock) {
    if (typeof ev === "string") {
      // Handle text message
      console.log("Received message:", ev);
      sock.send(`Echo: ${ev}`);
    }
  }
}

async function startServer() {
  console.log("WebSocket server started on :8080");
  for await (const req of serve({ port: 8080 })) {
    const { conn, r: bufReader, w: bufWriter, headers } = req;
    acceptWebSocket({ conn, bufReader, bufWriter, headers })
      .then(handleWs)
      .catch(async (err) => {
        console.error(`Failed to accept WebSocket: ${err}`);
        await req.respond({ status: 400 });
      });
  }
}

startServer();
```

#### Key Points:

- **serve()**: Creates an HTTP server that listens to incoming
  connections.
- **acceptWebSocket()**: Takes care of the WebSocket handshake and
  returns a WebSocket object.
- **sock.send()**: Sends messages back to the connected client.

#### Testing the WebSocket Server

You can test the WebSocket server using any WebSocket client or
a browser console. Open a browser and navigate to `ws://localhost:8080`.
This connection will establish and you should be able to see messages
in the server console.

Deno's WebSocket integration is straightforward and aligns well with
modern JavaScript syntax, providing a robust way to develop real-time
applications.

## 16. Deno for Building RESTful APIs

Deno, a secure runtime for JavaScript and TypeScript, is gaining traction among
developers for building RESTful APIs. Its built-in features, such as TypeScript
support, modern standard libraries, and security model, make it an excellent
choice for developing backend services.

### Why Use Deno for RESTful APIs?

1. **Built-in TypeScript**: Deno natively supports TypeScript, which allows you
   to build robust and scalable APIs with static typing.
2. **Standard Modules**: Deno provides a collection of audited standard
   modules, reducing the need to depend on third-party libraries for common
   functionalities, enhancing security.
3. **Security**: Deno's security-first approach with execution permissions
   helps create safer applications by default.
4. **Simplification**: Deno aims to simplify module management with the use
   of URLs directly for dependencies.

### Creating a Basic REST API with Deno

To create a RESTful API in Deno, you can use the standard HTTP module. Here is
a simple example illustrating the creation of an API that manages a list of
items.

```typescript
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 8000 });
console.log("HTTP server running on http://localhost:8000/");

for await (const req of server) {
  const url = new URL(req.url);
  if (url.pathname === "/items" && req.method === "GET") {
    req.respond({ body: "List of items" });
  } else if (url.pathname === "/items" && req.method === "POST") {
    req.respond({ body: "Item created" });
  } else {
    req.respond({ status: 404 });
  }
}
```

#### Explanation

- **Import the Server Module**: Begin by importing the HTTP server module from
  Denoland's standard library.
- **Create the Server Instance**: Instantiate a server running on the specified
  port.
- **Handle Requests**: Use a loop to await incoming HTTP requests, perform
  action based on the request's method and path.
- **Respond**: Send appropriate responses; currently handles `GET` and `POST`
  for `/items` endpoint.

### Expanding the API

You can enhance this basic setup by introducing routing, parsing request bodies,
and connecting to databases. For robust applications, consider leveraging
third-party modules like Oak or Alosaur for advanced routing and middleware
support.

This setup demonstrates the ease with which you can build and expand RESTful
APIs using Deno. As you explore more, you'll find Deno provides the flexibility
and security necessary for modern web development.

## 17. WebAssembly with Deno

WebAssembly (Wasm) is a binary instruction format that enables efficient
running of code across various platforms, backed by major web browsers.
Deno supports running WebAssembly modules, allowing developers to tap
into high-performance web modules conveniently.

### Advantages of Using WebAssembly with Deno

- **Performance**: Wasm code is optimized for quick execution.
- **Portability**: Compatible across platforms, making it flexible.
- **Interoperability**: Seamless integration with JavaScript and
  TypeScript.

### Importing WebAssembly in Deno

You can import and run a WebAssembly module within Deno using the
`WebAssembly.instantiateStreaming` method. Here is a basic example:

```typescript
// Importing a WebAssembly module in Deno
const wasmModuleURL = new URL("./example.wasm", import.meta.url);

const response = await fetch(wasmModuleURL);
const { instance } = await WebAssembly.instantiateStreaming(response);

console.log(instance.exports);
```

In this example, the WebAssembly module `example.wasm` is fetched and
instantiated.

### Working with WebAssembly Modules

After importing a Wasm module, you can utilize its exported functions
within your Deno program. For instance:

```typescript
const result = instance.exports.addNumbers(5, 10);
console.log(`Sum is: ${result}`);
```

Here, `addNumbers` is a hypothetical function exposed by the Wasm
module which accepts two numbers and returns their sum.

### Challenges and Considerations

While WebAssembly offers numerous advantages, there are some
considerations:

- **Debugging**: Debugging Wasm modules can be challenging compared to
  JavaScript or TypeScript.
- **Complexity**: Understanding and writing WebAssembly might be more
  complex for newcomers.

Despite these challenges, the benefits of integrating WebAssembly with
Deno, such as performance improvements and resource efficiency, make
it a valuable tool for developers.

## 18. Deno and Docker Integration

Deno provides a powerful and secure runtime for JavaScript
and TypeScript, which can be further optimized by deploying
within a Docker container. Docker allows applications to run
consistently across various environments, making it a popular
choice for software deployment.

### Integrating Deno with Docker

To run a Deno application in a Docker container, you need
to create a Dockerfile to specify the environment for your
Deno application. Here's a basic setup:

```dockerfile

FROM denoland/deno:alpine

WORKDIR /app

COPY . .

RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]
```

#### Explanation of the Dockerfile

1. **FROM**: Specifies the base image for Deno. The `alpine` variant is
   a lightweight image.
2. **WORKDIR**: Sets `/app` as the working directory in the container.
3. **COPY**: Copies all local files from the current directory to the
   working directory in the container.
4. **RUN**: Caches Deno modules by running the `deno cache` command
   on `main.ts`.
5. **CMD**: Runs the Deno application with necessary permissions.

#### Building the Docker Image

Run the following command from the same directory as your Dockerfile
to build the Docker image:

```bash
docker build -t my-deno-app .
```

#### Running the Docker Container

Once the image is built, you can run it with Docker:

```bash
docker run -p 8000:8000 my-deno-app
```

This command maps port 8000 on your local machine to port 8000 in the
Docker container, allowing you to access the Deno application running
inside Docker.

#### Conclusion

Integrating Deno with Docker ensures a consistent deployment
environment, enhancing reliability and simplifying distribution of
Deno applications across development, testing, and production
environments.

## 19. Advanced Deno Concept: Custom Permissions

In Deno, permissions are a critical feature that enhance security by limiting
access to system resources. However, you might encounter scenarios where you
need more granular control over these permissions. In this article, we'll
explore how you can implement custom permissions in Deno applications.

### What Are Custom Permissions?

Custom permissions extend the basic permission model by allowing more
intricate access rules. With custom permissions, you can create tailored
permissions that suit the specific needs of an application, such as controlling
access to particular files, networks, or subprocesses in a fine-tuned manner.

### Implementing Custom Permissions

Custom permissions aren't natively supported in Deno directly but can be
implemented through a combination of existing permission APIs and additional
logic. Here's an overview of how you might approach creating custom
permissions:

1. **Define Permission Logic**: Develop a function or a set of rules that
   determines access based on your custom criteria.

2. **Integrate With Deno's Permission APIs**: Use Deno's built-in permissions
   such as `Deno.permissions.query()` to check default permissions and then
   apply your additional logic.

3. **Enforce Custom Rules**: Within your application, ensure that custom
   permission checks are consistently applied before allowing actions like
   file read/write, network requests, or other sensitive operations.

### Example: File Access Control

Consider an example where you want to restrict file access to read-only.
Here's a simple implementation:

```typescript
async function withCustomPermission(filePath: string) {
  const status = await Deno.permissions.query({ name: "read", path: filePath });
  if (status.state !== "granted") {
    throw new Error("Read permission denied");
  }

  // Custom logic: Example of disallowing modifications
  if (filePath.endsWith(".config")) {
    throw new Error("Modification of config files is not allowed");
  }

  // Proceed with file operation
  const file = await Deno.readFile(filePath);
  console.log(new TextDecoder().decode(file));
}
```

In this example, before proceeding with the file read operation, the
application checks for the Deno read permission for the specified file path
and applies a custom rule to prevent modifications to `.config` files.

### Conclusion

Custom permissions offer a powerful way to enhance the security model of Deno
applications. By leveraging these advanced techniques, you can create more
secure and tightly controlled applications tailored to your specific
environment's needs. While they require careful planning and implementation,
the added security benefits are substantial.

## 20. Deno Deploy: Deploying Serverless Applications with Deno

Deno Deploy is a platform-as-a-service offering that allows developers to
quickly deploy serverless applications written in JavaScript or TypeScript.
This serverless model simplifies the deployment process and enables automatic
scaling to accommodate varying loads.

#### Key Features of Deno Deploy

- **Fast Deployments:** Deno Deploy facilitates quick deployments due to its
  event-driven model.

- **Global Reach:** Applications are executed on edge locations across the
  globe, ensuring low-latency responses for any user.

- **Security:** Deno Deploy inherently follows Deno's security model,
  allowing safe execution of code in a sandboxed environment.

#### How Deno Deploy Works

Deno Deploy follows a simple and seamless deployment approach. Developers
can push their applications to the Deno Deploy console or use CI/CD
services to automatically deploy updates. The environment handles routing
and scaling, removing the need for manual infrastructure planning.

#### Benefits of Using Deno Deploy

- **Ease of Use:** You don't need to manage servers; simply deploy your code
  and let Deno Deploy handle the rest.

- **Reduced Latency:** By running your code closer to your users, you can
  ensure faster response times.

- **Scalability:** Automatically scale applications based on traffic demands,
  without having to pre-allocate resources.

#### Getting Started with Deno Deploy

1. **Sign Up:** Begin by signing up at [Deno Deploy website](https://deno.com/deploy).

2. **Create a Project:** Create a new project and choose the deployment options
   that suit your application needs.

3. **Deploy:** Upload your application files or connect a repository for easy
   deployment flows.

4. **Manage Deployments:** Use the Deno Deploy dashboard to monitor and manage
   your deployment status and scale.

Deno Deploy provides an efficient and effective way to launch serverless
applications, embracing the power of edge computing. Whether you're looking
for flexibility, security, or speed, Deno Deploy equips developers with the
tools they need to succeed in building modern applications.

By embracing Deno Deploy, you can take full advantage of the edge
infrastructure capabilities, delivering faster and more reliable applications
to your users worldwide.
