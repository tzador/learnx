# Next.js

- [1. Introduction to Next.js](#1-introduction-to-nextjs)
- [2. Setting Up a Next.js Project](#2-setting-up-a-nextjs-project)
- [3. Pages and Routing in Next.js](#3-pages-and-routing-in-nextjs)
- [4. Static File Serving in Next.js](#4-static-file-serving-in-nextjs)
- [5. Data Fetching in Next.js](#5-data-fetching-in-nextjs)
- [6. API Routes in Next.js](#6-api-routes-in-nextjs)
- [7. Styling in Next.js](#7-styling-in-nextjs)
- [8. Image Optimization in Next.js](#8-image-optimization-in-nextjs)
- [9. Internationalization (i18n) in Next.js](#9-internationalization-i18n-in-nextjs)
- [10. Environment Variables in Next.js](#10-environment-variables-in-nextjs)
- [11. Custom Document and App in Next.js](#11-custom-document-and-app-in-nextjs)
- [12. Middleware in Next.js](#12-middleware-in-nextjs)
- [13. Authentication in Next.js](#13-authentication-in-nextjs)
- [14. Deployment Strategies for Next.js Applications](#14-deployment-strategies-for-nextjs-applications)
- [15. Performance Optimization in Next.js](#15-performance-optimization-in-nextjs)
- [16. Server-Side Rendering (SSR) in Next.js](#16-server-side-rendering-ssr-in-nextjs)
- [17. Incremental Static Regeneration (ISR) in Next.js](#17-incremental-static-regeneration-isr-in-nextjs)
- [18. Advanced Configuration in Next.js](#18-advanced-configuration-in-nextjs)
- [19. Testing in Next.js](#19-testing-in-nextjs)
- [20. Building a Full-Stack Application with Next.js](#20-building-a-full-stack-application-with-nextjs)

## 1. Introduction to Next.js

Next.js is a popular open-source JavaScript framework built upon React. It's
designed to facilitate server-side rendering and the generation of static
websites, making it an optimal choice for building high-performance web
applications. Companies like Vercel, Netflix, and GitHub use Next.js for its
scalability and robust features.

Developed by the team at Vercel, Next.js provides numerous advantages for
developers, such as enabling hybrid static and server rendering, supporting API
routes, and offering built-in CSS and Sass support. Its zero-config setup and
extensive development tools further allow for efficient workflows, making it
ideal for both beginners and experienced developers.

Next.js simplifies the process of developing a full-fledged React-based web
application by handling various under-the-hood complexities, offering features
like hot code reloading, automatic code splitting, and optimized performance.
Whether you're building an e-commerce platform, a blog, or a dashboard, Next.js
provides the tools and flexibility to create dynamic applications with ease.

## 2. Setting Up a Next.js Project

Setting up a new Next.js project is a simple process. Next.js can
be used to create both static and dynamic web applications.
In this article, we will go through the steps to set up a new
Next.js project from scratch.

### Prerequisites

Before starting, make sure you have Node.js installed on your
machine. You can download it from [nodejs.org](https://nodejs.org/).
Having a basic understanding of React is also beneficial as
Next.js is built on top of React.

### Step-by-Step Setup

1. **Install Create Next App**:
   Create Next App is a command-line tool provided by the
   Next.js team to quickly set up a new Next.js project
   with all necessary dependencies. Run the following
   command in your terminal:

   ```bash
   npx create-next-app my-nextjs-app
   ```

   Replace `my-nextjs-app` with your desired project folder name.

2. **Navigate to the Project Directory**:
   After installation, navigate to your project directory:

   ```bash
   cd my-nextjs-app
   ```

3. **Start the Development Server**:
   Launch the development server using:

   ```bash
   npm run dev
   ```

   By default, this server runs at `http://localhost:3000`.
   Open this URL in your browser to see your new Next.js
   application in action.

4. **Explore**:
   Once the server is running, explore the default project
   structure. This will help you understand how Next.js
   organizes your files and where to make future changes.

In the next article, we will cover some key features of Next.js
and explain how they can enhance your web development process.

## 3. Pages and Routing in Next.js

In Next.js, pages are React components exported from files in the `pages`
directory. Each file in this directory automatically becomes a route.
This makes creating routes in your Next.js application straightforward.

### Creating Pages

To create a new page, simply add a new file under the `pages` directory.
For example, to create an `about` page, create a file named `about.js`
in the `pages` directory with the following content:

```jsx
// pages/about.js
export default function About() {
  return <h1>About Page</h1>;
}
```

This page can be accessed through `http://localhost:3000/about`.

### Nested Routing

To create nested routes, use folders inside the `pages` directory. For
instance, you can create a folder `blog` and a file `index.js` inside
it to set up `http://localhost:3000/blog`. This structure makes it
easy to maintain organized and scalable file structures.

```jsx
// pages/blog/index.js
export default function Blog() {
  return <h1>Blog Home</h1>;
}
```

### Dynamic Routing

Next.js supports dynamic routes, such as `/blog/[slug]`. To define a
dynamic route, create a file using square brackets inside the `pages`
directory. For instance:

```jsx
// pages/blog/[slug].js
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Blog Post: {slug}</h1>;
}
```

This page can be accessed through any URL matching `/blog/[any-slug]`.

## 4. Static File Serving in Next.js

In a Next.js application, serving static files like images, CSS, or fonts
is straightforward. These files should be placed in the `public` directory
at the root of your project. Any file inside this directory can be
accessed via a URL matching the file path relative to the `public` folder.

For example, if you place an image in `public/images/photo.jpg`, you can
serve it in your application by using a URL like `/images/photo.jpg`.
Next.js will automatically handle the file serving for you.

This mechanism leverages the power of Next.js to serve files efficiently
without additional configuration, reflecting the built-in optimizations of
the framework.

### Example

Here's a simple example of using an image in a component:

```jsx
import Image from "next/image";

const MyComponent = () => (
  <div>
    <h1>Hello Next.js!</h1>
    <Image src="/images/photo.jpg" alt="Photo" width={500} height={300} />
  </div>
);

export default MyComponent;
```

In this example, we use Next.js' built-in `Image` component, which
automatically optimizes images for better performance.

### Handling Cache Control

Next.js provides a way to set custom cache control for static files
through headers. You can do this in the `next.config.js` by using the
`headers` configuration:

```js
module.exports = {
  async headers() {
    return [
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
```

This code sets a `Cache-Control` header for images, ensuring they are
cached by clients and proxies efficiently.

## 5. Data Fetching in Next.js

Next.js provides versatile data fetching strategies
that cater to different use cases in web applications.
Understanding these methods will help you leverage
the power of Next.js and optimize the performance of
your application.

### getStaticProps

`getStaticProps` allows you to fetch data at build time,
ideal for static generation.
Use it in any page component to supply `props` to
the page.

Here's a simple example:

```javascript
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data },
  };
}
```

This function is executed at build-time, fetching
data and passing it as `props` to the component.

### getServerSideProps

`getServerSideProps` is used for server-side rendering,
fetching data on each request.
This is useful when you need updated data on each
request.

Example:

```javascript
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return {
    props: { data },
  };
}
```

This function ensures fresh data fetched on every
request, ideal for dynamic content.

### Incremental Static Regeneration

This allows you to update static content after
deployment, as it enables `getStaticProps` pages to
regenerate.

Use the `revalidate` property:

```javascript
return {
  props: { data },
  revalidate: 10, // revalidate every 10 seconds
};
```

Combining these fetching strategies can optimize your
Next.js application, ensuring you have the best
performance and up-to-date data.

## 6. API Routes in Next.js

API Routes in Next.js allow you to create backend endpoints as part of your
Next.js application. This enables you to handle form submissions, save data
to a database, or interact with third-party services.

In a Next.js project, API routes are defined inside the `pages/api` directory
and are mapped to `/api/*`. For example, if you create a file named
`hello.js` inside `pages/api`, it will be accessible via
`http://localhost:3000/api/hello`.

An API route can export a default function and the request/response objects
from Node.js. Here's a simple example:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, World!" });
}
```

In this example, when you visit `/api/hello`, it returns a JSON response
with a message.

API routes support dynamic routing, allowing you to capture parts of
your URL as parameters. This is similar to how dynamic pages are handled
in Next.js. You can use brackets to signify dynamic parameters:

```javascript
// pages/api/greet/[name].js
export default function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({ message: `Hello, ${name}!` });
}
```

By visiting `/api/greet/John`, the API will respond with
`{ message: 'Hello, John!' }`.

API routes in Next.js provide a flexible way to build full-stack applications,
bridging the gap between client-side and server-side operations, all in a
unified codebase. They come with all the benefits of Node's ecosystem, such
as middleware and data parsing packages, allowing you to create robust
endpoints easily.

## 7. Styling in Next.js

Next.js provides multiple ways to add styles to your application.
You can use CSS, Sass, styled-jsx, or even CSS-in-JS libraries
like styled-components. Each method has its benefits and can suit
different scenarios.

### Global Styles with CSS or Sass

Global styles apply to your entire application and can be defined
by creating a CSS or Sass file in the `styles` directory.
To include a global stylesheet, import it in the `_app.js` file.

```jsx
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

For Sass, install it using `npm install sass` or `yarn add sass`.  
The `.scss` files can then be imported similarly.

### CSS Modules

CSS Modules offer a way to scope your CSS to specific components.
This is achieved by naming your CSS files with a `.module.css`
extension. CSS is locally scoped by default.

Consider a component-specific style:

```css
/* styles.module.css */
.title {
  color: blue;
}
```

In your component:

```jsx
import styles from "./styles.module.css";

function Title() {
  return <h1 className={styles.title}>Hello World</h1>;
}
```

### Styled-JSX

Styled-jsx is the default way to include scoped styles in Next.js.  
It allows you to use component-level styles without relying on
any external libraries.

```jsx
function Title() {
  return (
    <div>
      <h1>Hello World</h1>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
}
```

### CSS-in-JS

Next.js supports CSS-in-JS libraries like `styled-components` or
`emotion`. These libraries let you write styles within your
JavaScript files, providing a way to use dynamic styling based
on props or themes.

To use `styled-components`, install it using:

```bash
npm install styled-components
```

Then, use it within your component:

```jsx
import styled from "styled-components";

const Title = styled.h1`
  color: green;
`;

function HomePage() {
  return <Title>Hello World</Title>;
}
```

Each styling method has unique advantages, and your choice should
depend on factors like team familiarity and project requirements.  
The next article will dive into more specifics of CSS-in-JS in
Next.js applications.

## 8. Image Optimization in Next.js

Image optimization is a crucial aspect of modern web development,
ensuring that websites load quickly and efficiently while maintaining
high-quality visuals. Next.js provides built-in support for image
optimization, making it easy to integrate optimized images into your
website.

### Advantages of Image Optimization

Image optimization in Next.js helps to:

- Reduce page load times
- Improve performance metrics
- Enhance user experience

### Using the `next/image` Component

Next.js offers a powerful `next/image` component to handle image
optimization. This ensures that images are properly resized and served
in modern formats like WebP, automatically optimizing images
for faster load times.

#### Importing and Using

Start by importing the `Image` component from `next/image`:

```jsx
import Image from "next/image";

const MyComponent = () => (
  <div>
    <h1>Welcome to Image Optimization</h1>
    {/* Use the Image component */}
    <Image
      src="/path/to/image.jpg"
      alt="An example image"
      width={500}
      height={300}
    />
  </div>
);
```

#### Key Features

- **Automatic Image Resizing:** Define `width` and `height` to ensure
  the image is served in required dimensions.

- **Image Formats:** Automatically serves images as WebP where
  supported.

- **Lazy Loading:** Loads images only when they are visible on the
  viewport.

- **Responsive Images:** Easily create responsive images by using the
  `layout="responsive"` property.

### Configuration

You can configure the image loader settings in `next.config.js` to
customize the behavior:

```js
module.exports = {
  images: {
    domains: ["example.com"], // Add domains for external images
  },
};
```

This setup ensures images from `example.com` can be optimized by
Next.js.

Image optimization is an integral part of making your Next.js
application fast and efficient, enabling better performance without any
extra efforts from your end.

## 9. Internationalization (i18n) in Next.js

Next.js has built-in internationalization (i18n) support, enabling developers to
easily support multiple languages and locales in a single application. This
feature allows you to render different languages based on user preferences or
location.

### Enabling Internationalization

To enable i18n in a Next.js project, update the `next.config.js` file with the
`i18n` configuration:

```javascript
module.exports = {
  i18n: {
    locales: ["en-US", "fr", "es"],
    defaultLocale: "en-US",
  },
};
```

- **locales**: An array of locale identifiers your application supports.
- **defaultLocale**: The default locale used when visiting a non-locale prefixed
  path.

### Using the useRouter Hook

The `useRouter` hook from Next.js can be used to inspect and manipulate the
locale within your components.

```javascript
import { useRouter } from "next/router";

const ExampleComponent = () => {
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <div>
      <p>Current Locale: {locale}</p>
      <p>Available Locales: {locales.join(", ")}</p>
      <p>Default Locale: {defaultLocale}</p>
    </div>
  );
};
```

### Routing with Locales

Locales can be prefixed to routes, enabling URL-based language selection. For
example, a page might be accessible at `/en-US/about` or `/fr/about`.

### Dynamic Content with getStaticProps

The `getStaticProps` and `getStaticPaths` functions can be used to serve
localized static content:

```javascript
export async function getStaticProps({ locale }) {
  const res = await fetch(`.../data?locale=${locale}`);
  const data = await res.json();
  return {
    props: {
      localizedData: data,
    },
  };
}
```

By customizing content fetching to include locale information, you can serve
data in different languages efficiently.

Internationalization support in Next.js is a powerful feature that minimizes
the overhead typically associated with building multilingual applications. This
article covers the basics of setting it up and integrating it into Next.js.
With just a few configurations, your application can be globally accessible.

## 10. Environment Variables in Next.js

Environment variables are crucial in web development for defining different
configurations that change based on environments (development, production,
etc.). In Next.js, environment variables can be managed efficiently and
securely.

#### Setting Environment Variables

There are several ways to manage environment variables in Next.js:

- **.env.local**

  - Used for local development. These variables are ignored by version control
    to ensure they remain secret.

- **.env.development**

  - Used during the development phase. These variables are explicit to the
    environment.

- **.env.production**

  - Used in the production build. Like `.env.local`, these are ignored from
    version control.

- **.env**
  - Default file for all environments, usually checked into version control.

#### Accessing Environment Variables

In Next.js, you access environment variables using the `process.env` object.

```javascript
console.log(process.env.NEXT_PUBLIC_API_URL);
```

This prints the value of the `NEXT_PUBLIC_API_URL` variable.

#### Public vs Private Variables

Environment variables prefixed with `NEXT_PUBLIC_` are accessible on the
client-side. Other variables are restricted to server-side use.

#### Using Environment Variables

To use an environment variable, ensure it is defined in one of the `.env` files.
For example, to set an API key:

```
API_KEY=12345xyz
```

Then access it in your code:

```javascript
const apiKey = process.env.API_KEY;
```

#### Best Practices

- **Keep secrets safe**: Do not store sensitive information in public
  variables.

- **Different variables for different environments**: Use `.env.development`,
  `.env.local` and others to manage settings across environments.

Understanding and utilizing environment variables allow developers to securely
manage configuration settings that tailor applications to suit various
environments and use cases. Be sure to follow best practices to ensure
security and maintainability of your applications.

## 11. Custom Document and App in Next.js

In Next.js, you can customize the default HTML document using a
custom `Document` and manage the initialization of pages with a
custom `App`. These components provide flexibility in how your
application's layout is structured and allows for adding global
styles, scripts, and more.

### Custom Document

The `Document` component allows you to augment your application's
HTML document. This is particularly useful for modifying `/pages/_document.js`.

#### Creating a Custom Document

Create a file named `_document.js` in the `pages` directory. Then
extend the default Document class provided by `next/document`:

```jsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/styles/custom-styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### Custom App

The `App` component allows you to initialize pages and persist
layouts across route changes, which is useful for keeping
state when navigating different pages in your application.

#### Creating a Custom App

Create a file named `_app.js` in the `pages` directory. Then extend
the default App class provided by `next/app`:

```jsx
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
```

By using a custom `App`, you can wrap all components in providers,
import global CSS, and enhance performance through techniques like
caching.

## 12. Middleware in Next.js

Middleware in Next.js allows developers to run code before a request is
completed. It gives the ability to modify request headers, perform logic based
on the incoming request, redirect to different pages, or even terminate request
if certain conditions aren't met.

### Creating Middleware

To create a middleware in a Next.js application, you need to create a `_middleware.js`
or `_middleware.ts` file inside the `pages` directory or within a sub-folder under
`pages` where you want the middleware to apply.

#### Example:

```javascript
// pages/_middleware.js

export function middleware(request) {
  // Check if the user is authenticated
  const loggedIn = checkUserAuthenticated(request);

  if (!loggedIn) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect("/login");
  }
}
```

Here, the middleware checks if a user is logged in, and if not, it redirects
them to the login page.

### Middleware Composition

Middleware can be composed, which means you can have multiple middleware
functions running sequentially. This allows splitting concerns, making each
middleware function handle one particular aspect.

### Performance Considerations

Be cautious with middleware as it runs every time a request is made. It should
be efficient and not overly complex to avoid performance degradation.

Middleware supports both server-side and edge functions increasing flexibility
to run custom logic where most applicable.

## 13. Authentication in Next.js

Authentication is a critical part of web applications. Next.js offers
flexibility to integrate various authentication methods, including JWT,
OAuth, and more traditional username/password strategies.

NextAuth.js is a popular library for authentication in Next.js, offering
a complete solution for handling user sessions and storing user data.

### Setting up Authentication

First, install NextAuth.js in your Next.js project:

```shell
npm install next-auth
```

Then create a new file at `pages/api/auth/[...nextauth].js`, which will
contain the configuration for NextAuth.js.

#### Basic Configuration

Here's a simple setup to get you started:

```javascript
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
```

In this setup, Google Sign-In is the provider. You can add other
providers like Facebook, GitHub, etc.

#### Environment Variables

Store sensitive information such as `GOOGLE_CLIENT_ID` and
`GOOGLE_CLIENT_SECRET` in environment variables (`.env.local` file):

```
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
```

#### Securing API Routes

Secure your API routes using the `getSession` method from NextAuth:

```javascript
import { getSession } from "next-auth/client";

export default async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  // Your protected code here
};
```

#### Protecting Pages

You can secure your pages with session behavior:

```javascript
import { useSession, signIn } from "next-auth/client";

export default function Page() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;
  if (!session) return <button onClick={signIn}>Sign in</button>;

  return <p>Signed in as {session.user.email}</p>;
}
```

This will prompt users to authenticate before accessing the page.

### Conclusion

Integrating authentication with Next.js provides flexibility in how you
authenticate users while maintaining security. NextAuth.js simplifies
the authentication process, making it easier to manage different
providers and secure both your pages and API routes.

## 14. Deployment Strategies for Next.js Applications

Next.js can be deployed using various platforms and strategies. Its ability to
handle both static and dynamic content makes it versatile for different hosting
environments. In this article, we will overview some of the popular options
for deploying Next.js applications.

### Vercel

Vercel is the company behind Next.js and offers a seamless deployment
experience. By connecting your GitHub repository, you can automatically deploy
changes and benefit from Vercel's edge network. Deployment on Vercel supports
serverless functions and static exports.

### Static Site Hosting

For applications that leverage static generation, platforms like Netlify,
GitHub Pages, and AWS Amplify work well. You can export your site statically
using `next export` and host it on any platform supporting static files.

### Server Deployment

For applications requiring server-side rendering (SSR), deploying on a custom
server such as Node.js-based hosting (e.g., Heroku or AWS Elastic Beanstalk)
provides full flexibility. You can also use Docker to encapsulate your app
and deploy it on platforms with Docker support.

### Conclusion

With the right deployment strategy, Next.js applications can perform optimally,
ensuring a seamless experience for end-users. Consider the nature of your
application and choose a platform that aligns with your needs.
Learn more about deploying Next.js through official [Next.js Deployment
Documentation](https://nextjs.org/docs/deployment/).

## 15. Performance Optimization in Next.js

Next.js is designed with performance in mind, offering several features
and techniques to help you optimize your application. In this article,
we'll explore various strategies for enhancing the performance of
your Next.js projects.

### Code Splitting

Next.js automatically splits your code into smaller bundles to improve
loading times. By default, it splits at the page level, but you can
dynamically import components to create additional splits if needed,
using syntax such as:

```jsx
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("../components/MyComponent"));
```

### Using the Image Component

The Next.js Image component optimizes images on the server, auto-
generates responsive sizes, and lazy-loads out of the box,
enhancing both loading performance and user experience.

### Optimizing Fonts

Using the `next/font` module, you can automatically optimize fonts.
This includes features like subsetting and loading with the web's
performance in mind:

```jsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
```

### Minify JavaScript and CSS

Next.js automatically minifies your JavaScript and CSS in production
using Terser and PostCSS, respectively. Make sure to test your site
in production to observe the minification effects.

### Compression

Using built-in Next.js compression techniques, such as Gzip or Brotli,
improves the delivery of static files, notably for server-side-rendered
content.

### HTTP/2 Server Push

This allows you to send resources ahead of time, reducing latency
for the client. While Next.js doesn't natively support this, you can
configure your server (e.g., Nginx, Apache) to take advantage of it.

### Monitoring Performance

Tools like Lighthouse or real user monitoring services like
Google Analytics provide insights into user experiences,
helping you identify potential bottlenecks or areas for
improvement.

By implementing these performance optimization techniques, you'll
drastically improve the speed and responsiveness of your Next.js
applications, leading to better user satisfaction and potentially
improved SEO performance. In the next article, we'll explore
Server-Side Rendering (SSR) in Next.js.

## 16. Server-Side Rendering (SSR) in Next.js

Server-Side Rendering (SSR) is a popular method in which web pages
are rendered on the server instead of the client. Next.js
supports SSR out of the box, allowing developers to create dynamic,
SEO-friendly web applications that can deliver content quickly.

### Benefits of SSR in Next.js

- **Improved SEO**: Since the content is rendered on the server, it can
  be crawled by search engine bots, improving search rankings.
- **Faster initial load**: The HTML is sent pre-populated with data,
  providing a faster experience to users.
- **Better Performance**: Reduces client-side JavaScript burden,
  leading to enhanced performance for users with lower bandwidth.

### Implementing SSR in Next.js

In Next.js, SSR can be implemented using the `getServerSideProps`
function, which allows you to fetch data server-side and send it
along with the rendered HTML. Here's a basic example:

```javascript
// pages/ssr-page.js
import React from "react";

function SSRPage({ data }) {
  return <div>{data.content}</div>;
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.example.com/data`);
  const data = await res.json();

  return { props: { data } }; // Passed to the page component as props
}

export default SSRPage;
```

#### Key Points of `getServerSideProps`

- **Calls on Every Request**: This function is executed on each request.
- **Server-side Only**: Runs only on the server side, ensuring secure
  data fetching without exposing sensitive logic to clients.
- **Data Fetching**: Can perform complex data-fetching operations;
  use caching strategies to optimize performance.

### When to Use SSR

While SSR provides significant advantages, it's not always the best
choice. It's beneficial for pages requiring frequent updates,
complex dynamic data, or where SEO is crucial. Consider your
application's requirements and trade-offs, like server load and
complexity, before opting for SSR in your project.

Utilizing SSR with Next.js enables developers to leverage the
power of React with the benefits of server-side content delivery,
making web applications more performant and SEO-friendly.

## 17. Incremental Static Regeneration (ISR) in Next.js

Next.js is a popular framework for building server-rendered React applications,
known for its flexibility and performance optimization capabilities. One of its
powerful features is Incremental Static Regeneration (ISR), which allows you
to update static content after it has been deployed without rebuilding the
entire site.

ISR combines the benefits of static site generation (SSG) and server-side
rendering (SSR) by statically generating pages at build time and then updating
any outdated pages in the background as traffic flows to them. This ongoing
regeneration happens according to a periodic revalidation time you specify.

### How ISR Works

When you use ISR, a static page is first generated and served to users. You can
set a revalidation period for the page, which determines after how long the
page is considered stale. Once the revalidation period is up, the next request
to that page will trigger a background rebuild of the page. Once the regeneration
is complete, the request receives the fresh page.

### Implementation in Next.js

To use ISR in your Next.js application, you have to modify `getStaticProps`.
Use the `revalidate` property to specify the time interval at which the page
should be regenerated:

```jsx
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: {
      data,
    },
    revalidate: 10, // In seconds
  };
}
```

In the example above, the page will regenerate in the background every 10
seconds once a request is made, ensuring updated data is presented to the
users.

### Benefits of ISR

- **Fresh Data**: Provides users with up-to-date content without waiting for
  a full site rebuild.
- **Performance**: Keeps load times fast as static pages are served, avoiding
  real-time server rendering overhead.
- **Scalability**: Efficiently handles large-scale sites by incrementally
  updating pages.

ISR offers a middle-ground solution between static and dynamic content,
providing flexibility in handling content updates efficiently. This feature
ensures constant improvements and keeps content relevant.

## 18. Advanced Configuration in Next.js

Next.js provides several advanced configuration options that allow developers to tailor
their applications to specific needs. By using these configurations, you can optimize
your Next.js application for both development and production environments.

### Custom Webpack Configuration

Next.js allows you to extend its default Webpack configuration. This is particularly
useful when you need to add custom loaders or plugins for handling specific file types
or transformations.
You can modify the Webpack configuration by adding a `webpack` function inside
`next.config.js`. This function has access to all default Webpack configurations.

Example:

```js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Example of modifying the configuration
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.customKey": JSON.stringify("myCustomValue"),
      }),
    );

    // Return the modified config
    return config;
  },
};
```

### Using Environment-Specific Configurations

Next.js supports configuration adjustments based on the deployment environment. You
can access different environments by using the `NODE_ENV` property. For instance, you
might want to activate certain features only in the production environment.

Example:

```js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  future: { webpack5: true },
});
```

### Build-time Plugins

Next.js encourages the use of various build-time plugins to enhance application
features without increasing runtime overhead. One common plugin is `@next/bundle-analyzer`,
which helps analyze the size of different parts of your bundle.

### Exporting Static HTML

You can export a Next.js application as a static site using `next export`. This command
creates an `out` folder that contains static HTML files for each of your pages. However,
keep in mind that certain features, like dynamic server-side rendering, will not work.

### Customizing PostCSS Configuration

If you need to modify PostCSS configuration, you can create a `postcss.config.js` file
in the root directory and customize your PostCSS setup there. This allows you to tailor
CSS preprocessing to meet your specific application needs.

### Conclusion

By leveraging these advanced configurations, you can customize the build and runtime
behaviors of your Next.js applications according to your unique requirements and
preferences. These adjustments can help in optimizing performance, adding custom
dependencies, and support extensive customization.

## 19. Testing in Next.js

In software development, testing is essential to ensuring that your **Next.js**
application works as expected. With the dynamic nature of **Next.js** and its
flexibility, it's crucial to have a robust testing strategy. This article will
cover various aspects of testing in Next.js, including unit tests, integration
tests, and end-to-end tests.

### Unit Testing

Unit tests focus on individual components or functions in your **Next.js**
application. Popular testing utilities like **Jest** and **React Testing Library**
can be used.

#### Setting up Jest

1. Install Jest using npm:

   ```bash
   npm install --save-dev jest babel-jest @testing-library/react
   @testing-library/jest-dom
   ```

2. Create a jest.config.js file:

   ```javascript
   module.exports = {
     testEnvironment: "jsdom",
     setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
     moduleNameMapper: {
       "^@/(.*)$": "<rootDir>/src/$1",
     },
   };
   ```

3. Create jest.setup.js to configure the testing environment:
   ```javascript
   import "@testing-library/jest-dom/extend-expect";
   ```

### Integration Testing

Integration tests ensure that different parts of your application work together
correctly. For **Next.js**, **Cypress** is a popular choice because it allows
you to write and manage tests that navigate through the application.

#### Setting up Cypress

1. Install Cypress via npm:

   ```bash
   npm install cypress --save-dev
   ```

2. Open Cypress for the first time:

   ```bash
   npx cypress open
   ```

3. Write your integration tests in the **cypress/integration** directory.

### End-to-End Testing

End-to-end (E2E) tests simulate real-world scenarios and verify that your
**Next.js** application performs correctly from the start to end of an interaction.
**Cypress** also excels in E2E testing.

#### Writing E2E Tests

- Ensure your backend is running and accessible.
- Use **Cypress** to automate navigating your application and verifying outcomes.

### Conclusion

Testing in **Next.js** is multifaceted, involving unit, integration, and E2E tests.
By leveraging tools like **Jest** and **Cypress**, you can create a reliable
testing environment to ensure your application is robust.

## 20. Building a Full-Stack Application with Next.js

In this article, we will dive into building a comprehensive full-stack
application using Next.js. We'll go through the process of creating a
backend with API routes, integrating a database, and building a modern,
responsive frontend.

### Backend with Next.js API Routes

Next.js API routes allow you to create server-side logic alongside your
frontend. To create an API route, simply add a file to the `pages/api`
folder. Each file corresponds to a distinct endpoint.

For example, create a file `hello.js` in `pages/api`:

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
```

This creates an API endpoint at `/api/hello` that returns a JSON object
with a welcome message.

### Database Integration

To build a full-stack app, you'll typically need a database to store and
retrieve data. Many developers use MongoDB, PostgreSQL, or MySQL.

#### Using MongoDB

First, install the MongoDB client library:

```bash
npm install mongodb
```

Then, create a utility to connect to the database. For instance, create
`lib/mongodb.js`:

```javascript
// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

if (!client) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function connectToDatabase() {
  if (!client.isConnected()) await client.connect();
  return client.db();
}
```

In your API route, use the utility to access the database:

```javascript
// pages/api/users.js
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  const users = await db.collection("users").find().toArray();
  res.status(200).json(users);
}
```

### Building the Frontend

With the backend ready, you can build a dynamic frontend to consume the
API data. Next.js offers server-side rendering (SSR) and static site
generation (SSG) to handle data fetching effectively.

#### Dynamic Page Example

Create a page to display user data dynamically:

```javascript
// pages/users.js
import { useEffect, useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
```

This setup allows us to fetch user data from the API route and render
it on the frontend.

### Conclusion

Building a full-stack application with Next.js simplifies the process
of integrating frontend and backend logic. With API routes, database
integration, and powerful rendering options, Next.js provides the tools
needed for modern web applications.
