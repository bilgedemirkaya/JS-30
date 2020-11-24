## References and Copying Project

It is a project part of JS30 course which has a purpose of showing **Strings, Numbers and Booleans reference and copy** , **Arrays reference and copy**, **Objects reference and copy**

#### Strings, Numbers and Booleans reference and copy
```
let age = 100;
let age2 = age;
age2 = 200;  

// age logs 100 still

let name = 'Kyle';
let name2 = name;
name2 = 'Chad';

// name logs Kyle still

```

When you capy one variable to another, if you change the one you copied, it wont change the original one as expected.

## Arrays reference and copy

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/14%20JS%20References%20vs%20Copying/arraycopy.png)

When copying two array; 
if we update the element of the copied array, it will also **change** original array. Because when we do 
``` const team = players ``` we are not copying the array, **we are making a reference to that array**.
### To copy array

You can do;

``` const team = players.slice() ``` OR `` const team = [].concat(players )`` OR ``const team = [...players]`` OR  `` const team = Array.from(players)  ``

## Objects reference and copy
It is also same in objects.
### To copy object

You can use;

``object.assign({},object that we want to copy,{additional properties})``   

**Note**: object spread operator doesnt work in JS yet.
**Note** : When you do object.assign it does only one level deep.

**Demo [here](https://bilgedemirkaya.github.io/JS-30/14%20JS%20References%20vs%20Copying/index.html)**