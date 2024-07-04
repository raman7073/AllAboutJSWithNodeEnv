/*
 What is wildcard character in routes?
 ->  Wildcard character in routes acts as a placeholder for the unknown character or string in the URL.
 Example:
  +, *, and ? are the wildcard characters used in routes.
    + is used to match one or more characters.
     Example:
        www.example.com/user-0+1
        will match 0 coming one or more times before 1.
        like www.example.com/user-01, www.example.com/user-001, www.example.com/user-0001, etc.
    * is used to match zero or more characters.
        Example:
            www.example.com/user*-01
            will match any number of characters after user and before -01.
            like www.example.com/user-01, www.example.com/user123-01, www.example.com/userABC-01, etc.
    ? is used to match optional character.
    Example:
     Let's say we want to access the users using the following routes:
     www.example.com/users
     www.example.com/user
     In this case , using two routes will be redundant and not a
     smart decision. Instead, we can use a wildcard character to match both routes.
     s is a optional character here.
     Here we can use ? as a wildcard character.
        www.example.com/users? will match both www.example.com/users and www.example.com/user
 So, wildcard characters enable various pattern matchings in the routes.
    ? -> for optional character
    + -> for n number of same characters
    * -> for 0 or more characters (for any string)
*/
