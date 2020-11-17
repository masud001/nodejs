# nodejs

Here I started practice to node js code!

-----------------------Day #1---------------------

1.  - I learned how to create node js server and write Hello world.
2.  - I created a module file called 'tutorial.js' and i export function from this module.

-----------------------Day #2----------------------

1.  -   Node is a runtime environment for executing JS code.
2.  -   Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world.
3.  -   We use Node to build fast and scalable networking applications. It’s a perfect choice for building RESTful services.
4.  -   Node applications are single-threaded. That means a single thread is used to serve all clients.
5.  -   Node applications are asynchronous or non-blocking by default. That means when the application involves I/O operations (eg accessing the file system or the network), the thread doesn’t wait (or block) for the result of the operation. It is released to serve other clients.
6.  -   This architecture makes Node ideal for building I/O-intensive applications.
7.  -   You should avoid using Node for CPU-intensive applications, such as a video encoding service. Because while executing these operations, other clients have to wait for the single thread to finish its job and be ready to serve them.
8.  -   In Node, we don’t have browser environment objects such as window or the document object. Instead, we have other objects that are not available in browsers, such as objects for working with the file system, network, operating system, etc.
