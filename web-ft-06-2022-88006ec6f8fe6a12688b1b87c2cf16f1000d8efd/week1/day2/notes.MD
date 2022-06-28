# Notes for Day 2

## Markdown with 2 hashtags

### Markdown with 3 hashtags

- Hello

```
def name():
    print("Howdy")
```

SYNTAX - rules of that specific language

Different languages have different syntax. This is the challenge of learning a new language is that you have to normally learn the syntax for that language.

- In `C` int num = 10
- `Python` num = 10
- `Javascript`
  - const num = 10
  - let num = 10
  - var num = 10

# Fundamentals in most programming languages

- VARIABLES

```
    Syntax
    variableName = variable type

    num = 1
    name = "Joe"
    boolean = True
    studentList = ["Joe","Sam","Ria"]
    dictionary = {"title": "Webster"}
    Strings

```

- FUNCTIONS/METHODS

```
Syntax
    def functionName(argumentGoesHere):
        // function Body is here

    def printName(name):
        print(name)

    Running/Invoking a function:
        printName("Joe")
        -> prints out "Joe"
```

```
# Syntax in python for a function
# def, which stands for define
# functionName, this can be whatever you want
# (): this is where you tell the function name to end and where you can insert arguments to use in your function (argument)
# indent, python is a language that cares about indentation.  Care about what it cares about otherwise it will get 😠

This is an example function.

def sayHi():
    print("Hi")
    print("this is the body")
```

- LOOPS
  There are two types of loops that we will be covering in this part of python. While Loops and For Loops.

  While loop syntax:
  `While loop does something WHILE this is true`

  ```
  while num < len(data):
       print(data[num])
  ```

  For loop syntax:

  ```
    for singular of list:
        do code here

    fruits = ["🍎", "🍍", "🍌","🍎", "🍍", "🍌","🍎", "🍍", "🍌"]

    for fruit in fruits:
    if fruit == "🍌":
        pass
    else:
        print(fruit)
  ```

### Not all languages are created the same. Research and understand the differences of the languages you are going to use in order to meet the problem that you are trying to solve.
