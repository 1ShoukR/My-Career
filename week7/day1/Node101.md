# Node 101

## Browser Engines
- popular browsers have a code engine
- Node uses the V8 engine within browsers to decipher js files
    - run files on server side rather than front end 

## difference between Node and Browser JS
- browser js is on the browser, js on your PC is on your PC
    - browser cannot access files on your terminal
    - node lives on your PC and has access to file systems
    - files on PC have modules, their own little worlds where they can all interconnect, but are separate and do not interfere with each other

## Event Based
- can run different code based on the events that occur
- browser events: DOMConetentLoaded, click, change, submit
- Node Events: Network request recieved, file input completed
## Events are asynchronous
- all events in Node are asynchronous

## When should I use node?
- when a lot of requests are coming in 
- can put static HTML (what we made during front end) on Node to make it super fast

## when should I not use Node
- Node is structured to be single threaded. Heavy, CPU intensive  calculations will prevent Node from processing other requests

# Modules
- reusable pieves of javascript code
    - require() and module.exports = 
    - const http.require('https)

## types of Modules
- core modules, local modules, third party modules

## npm
- set of command line tools for managing packages (aka modules)
- keep it DRY
- need to initialize the files 