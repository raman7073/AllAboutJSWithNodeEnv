/*
   Introduction to Middleware
   Middleware is just a function which is automatically called  in the middle 
   of request and response cycle.
   Let's say we want to authenticate every request before it is processed by the server.
   Rather than writing the authentication logic in every route handler, 
   we can write a middleware function which will be called for every request.
   Middleware functions have access to the request object (req), 
   the response object (res), and the next function in the application’s 
   request-response cycle. 
   The next function is a function in the Express router which, when
   invoked, executes the middleware succeeding the current middleware.
   Or in simple words, it passes the control to the next middleware function.
        Types of Middleware
    1. Application-level middleware
         Bind application-level middleware to an instance of the app object by using app.use() and app.METHOD() 
         methods, where METHOD is the HTTP method of the request that the middleware function handles 
         (such as GET, PUT, or POST) in lowercase.
         Example:
         const express = require('express')
         const app = express()
         // a middleware function with no mount path. This code is executed for every request to the router
         app.use((req, res, next) => {
             console.log('Time:', Date.now())
             next()
        })
       
    2. Router-level middleware
       Router-level middleware works in the same way as application-level middleware, 
       except it is bound to an instance of express.Router()

       const express = require('express')
       const app = express()
       const router = express.Router()

       // a middleware function with no mount path. 
       //This code is executed for every request to the router
       router.use((req, res, next) => {
          console.log('Time:', Date.now())
          next()
      })

     // a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
       router.use('/user/:id', (req, res, next) => {
        console.log('Request URL:', req.originalUrl)
        next()
        }, (req, res, next) => {
        console.log('Request Type:', req.method)
         next()
       })

    // a middleware sub-stack that handles GET requests to the /user/:id path
       router.get('/user/:id', (req, res, next) => {
      // if the user ID is 0, skip to the next router
         if (req.params.id === '0') next('route')
        // otherwise pass control to the next middleware function in this stack
          else next()
        }, (req, res, next) => {
           // render a regular page
           res.render('regular')
         })
    3. Error-handling middleware
    Define error-handling middleware functions in the same way as other middleware functions,
    except with four arguments instead of three, specifically with the signature 
    (err, req, res, next):
    Example:

    app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
    })
    4. Built-in middleware
      Express has the following built-in middleware functions:

        app.use(express.static()) // serves static assets such as HTML files, images, and so on   
        app.use(express.json())   // parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
        app.use(express.urlencoded()) // parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+
    5. Third-party middleware
       you can install the node.js module for the required functionality,
        then load it in your app at the application level or at the router level.

       const express = require('express')
       const app = express()
       const cookieParser = require('cookie-parser')

       // load the cookie-parsing middleware
       app.use(cookieParser())



   */
