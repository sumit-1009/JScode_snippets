// console.log([1, 2] == [1, 2]);
//Output:- false
//Reason:- because the equality comparison (==) operator checks for object reference equality, not value equality for arrays.
//So, [1, 2] === [1, 2] would be false for the same reason as ==. since JavaScript compares objects by reference, not value.

const user1 = {
    name: 'sumit',
    age: 22,
    address: {
        city: 'Mumbai',
        state: 'Maharashtra'
    }
}
const user2 = user1;
user2.name = "sahu";
user2.address.city = "pune";
console.log(user1);
console.log(user2);

//ouput:- 
// {name: 'sahu', age: 22, address: {city: 'pune', state: 'Maharashtra'}}
// {name: 'sahu', age: 22, address: {city: 'pune', state: 'Maharashtra'}}
//Reason:- 
//When you assign user2 = user1, you're not copying the values. You're creating a new variable (user2) that stores the memory address (reference) where the object referenced by user1 is located.
//When you modify properties like user2.name or user2.address.city, you're actually changing the values at the memory location that both user1 and user2 point to. Since they reference the same object, both user1 and user2 will reflect the changes.

//To update user2 without updating user2 without affectinf the values of user1
const userCopy = { ...user1 };
userCopy.name = "rahul";
userCopy.address.city = "nagpur";
console.log(user1); // Output: { name: 'sumit', age: 22, address: { city: 'pune', state: 'Maharashtra' }}
console.log(userCopy); // Output: { name: 'rahul', age: 22, address: { city: 'nagpur', state: 'Maharashtra' }}
