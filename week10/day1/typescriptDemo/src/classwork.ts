// create 3 functions

// assign IDs to users
// replace all users with the name "user" to a random name generated
// format the user to send to DB 
// userVerification function
// I should be able to pass the name of the user and the ID, and it should match one of these IDs and the name should match one of the names in your list

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
const listOfNewUsers = [
  'blake',
  'amanda',
  'stacy',
  'jason',
  'andrea',
  'rahmin',
  'olivia',
  'carlos',
  'ethan',
];

type Ids = {
  id: string;
};

type AssignedUsers = {
  name: string;
  id: string;
};

type DatabaseUserFormat = {
  name: string;
  dept: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userVerification: (id: string, name: string) => boolean;
};

const assignIds = (ids: { id: string }[]): AssignedUsers[] => {
  const assignedIdsAndUsers: AssignedUsers[] = ids.map(
    (idObj: Ids, i: number) => {
      return { name: usersToAssign[i].name, id: idObj.id };
    }
  );
  return assignedIdsAndUsers;
};

const replaceUserNames = (users: AssignedUsers[]): AssignedUsers[] => {
  const newUsers: AssignedUsers[] = users.map(
    (user: AssignedUsers, i: number): AssignedUsers => {
      return { ...user, name: listOfNewUsers[i] };
    }
  );
  return newUsers;
};

const userVerification = (id: string, name: string): boolean => {
  let trigger: boolean = false;
  let userTrigger: boolean = false;
  for (const idObj of userIds) {
    if (id === idObj.id) {
      trigger = true;
      break;
    }
    trigger = false;
  }
  for (const user of listOfNewUsers) {
    if (name === user) {
      trigger = true;
      break;
    }
    trigger = false;
  }
  if (userTrigger && trigger) return true;
  return trigger;
};

const formattedUsersAndIds: AssignedUsers[] = assignIds(userIds);

const finalUsers: AssignedUsers[] = replaceUserNames(formattedUsersAndIds);

console.log(userVerification(finalUsers[1].id, finalUsers[0].name));
// userVerification = (id, name) =>{
    //     // check if the name is the name list
//     // check if the id is in the id list
//     // if it passes all test, it returns true, else false
// }