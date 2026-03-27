# TypeScript Documentation

Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally

```
npm install -g typescript
```

## What is Typescript

TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.

## Why use Typescript

- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript

```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist

```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts

Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js

Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts

Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts

Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts

Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts

This demonstrates an alternative to using enums by utilizing union types, allowing variables to strictly accept a limited set of string values

## 07-custom-type-role.ts

This shows custom types are defined using the type keyword, which can be reused across variables, functions, and objects. This reduces redundancy and improves code maintainability by avoiding repeated type definitions.

## 08-functions.ts

This shows how TypeScript allows developers to explicitly define data types for function parameters and return values. This ensures that functions behave as expected and helps prevent runtime errors by enforcing type safety.

## 09-special-types.ts

This shows the special type that can be assigned as types this types are useful for handling edge cases, controlling type flexibility, and managing functions that do not return values or never complete.

## 10-form.html and 10-type-narrowing.ts

This show type casting and ensuring Typescript that you're variable will not be null it also show how we can utilize '!' and '?'demonstrate type casting and type narrowing techniques. They show how to assure TypeScript that a variable is not null using the non-null assertion operator (!), as well as how to safely access properties using optional chaining (?)

## 11-optional.ts

This explains how to define optional parameters in functions and optional properties in objects. It also demonstrates the difference between the logical OR (||) operator and the nullish coalescing (??) operator, where || checks for any falsy value while ?? only checks for null or undefined.
