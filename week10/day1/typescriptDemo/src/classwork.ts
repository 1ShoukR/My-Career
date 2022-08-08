// create 3 functions

// assign IDs to users
// replace all users with the name "user" to a random name generated
// format the user to send to DB 
// userVerification function
// I should be able to pass the name of the user and the ID, and it should match one of these IDs and the name should match one of the names in your list

const listOfNames: string[] = ['sam', 'John,', 'Joe', "Rahmin", "West", "Stacy", "Sherry", "Rodeny", "Peter"];

const userIds = [
    {
    id: 'b6809de6-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680a0b6-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680a1e2-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680a2fa-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680a3fe-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680a7c8-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680a8ea-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680aa0c-1743-11ed-861d-0242ac120002',
    },
    {
    id: 'b680ab2e-1743-11ed-861d-0242ac120002',
    },
];

const usersToAssign = [
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
    { name: 'user' },
];

type AssignedUsers = {
    name: string;
    id: string;
};

const assignIds = (ids: { id: string }[]): AssignedUsers[] => {
    const assignedIdsAndUsers: AssignedUsers[] = ids.map((idObj, i) => {
    return { name: usersToAssign[i].name, id: idObj.id };
    });
    return assignedIdsAndUsers;
};

const formattedUsersAndIds: AssignedUsers[] = assignIds(userIds);
// userVerification = (id, name) =>{
    //     // check if the name is the name list
//     // check if the id is in the id list
//     // if it passes all test, it returns true, else false
// }