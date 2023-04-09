export interface IUser {
  name: string;
  age: number;
  status: boolean;
}

const users: IUser[] = [
  {
    name: "Guido",
    age: 32,
    status: true,
  },
  {
    name: "Dani",
    age: 30,
    status: true,
  },
  {
    name: "João",
    age: 40,
    status: false,
  },
  {
    name: "Guilherme",
    age: 29,
    status: true,
  },
  {
    name: "Ana",
    age: 18,
    status: false,
  },
  {
    name: "José",
    age: 28,
    status: false,
  },
];

function filteredUserByName(list: IUser[], name: string) {
  const usersFiltered = list.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  return usersFiltered;
}

console.log(filteredUserByName(users, "jo"));
