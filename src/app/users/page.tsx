import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
  return [
    {
      id: "1",
      avatar: "https://i.pravatar.cc/150?img=1",
      status: "active",
      fullName: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      id: "2",
      avatar: "https://i.pravatar.cc/150?img=2",
      status: "inactive",
      fullName: "Jane Doe",
      email: "janedoe@gmail.com",
    },
    {
      id: "3",
      avatar: "https://i.pravatar.cc/150?img=3",
      status: "active",
      fullName: "Bob Smith",
      email: "bobsmith@gmail.com",
    },
    {
      id: "4",
      avatar: "https://i.pravatar.cc/150?img=4",
      status: "inactive",
      fullName: "Alice Johnson",
      email: "alicejohnson@gmail.com",
    },
    {
      id: "5",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "active",
      fullName: "Charlie Brown",
      email: "charliebrown@gmail.com",
    },

    {
      id: "6",
      avatar: "https://i.pravatar.cc/150?img=6",
      status: "active",
      fullName: "David Miller",
      email: "davidmiller@gmail.com",
    },
    {
      id: "7",
      avatar: "https://i.pravatar.cc/150?img=7",
      status: "inactive",
      fullName: "Emma Wilson",
      email: "emmawilson@gmail.com",
    },
    {
      id: "8",
      avatar: "https://i.pravatar.cc/150?img=8",
      status: "active",
      fullName: "Frank Taylor",
      email: "franktaylor@gmail.com",
    },
    {
      id: "9",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "inactive",
      fullName: "Grace Thomas",
      email: "gracethomas@gmail.com",
    },
    {
      id: "10",
      avatar: "https://i.pravatar.cc/150?img=10",
      status: "active",
      fullName: "Henry Anderson",
      email: "henryanderson@gmail.com",
    },

    {
      id: "11",
      avatar: "https://i.pravatar.cc/150?img=11",
      status: "active",
      fullName: "Ivy Martinez",
      email: "ivymartinez@gmail.com",
    },
    {
      id: "12",
      avatar: "https://i.pravatar.cc/150?img=12",
      status: "inactive",
      fullName: "Jack White",
      email: "jackwhite@gmail.com",
    },
    {
      id: "13",
      avatar: "https://i.pravatar.cc/150?img=13",
      status: "active",
      fullName: "Kathy Harris",
      email: "kathyharris@gmail.com",
    },
    {
      id: "14",
      avatar: "https://i.pravatar.cc/150?img=14",
      status: "inactive",
      fullName: "Leo Clark",
      email: "leoclark@gmail.com",
    },
    {
      id: "15",
      avatar: "https://i.pravatar.cc/150?img=15",
      status: "active",
      fullName: "Mia Lewis",
      email: "mialewis@gmail.com",
    },

    {
      id: "16",
      avatar: "https://i.pravatar.cc/150?img=16",
      status: "inactive",
      fullName: "Noah Walker",
      email: "noahwalker@gmail.com",
    },
    {
      id: "17",
      avatar: "https://i.pravatar.cc/150?img=17",
      status: "active",
      fullName: "Olivia Hall",
      email: "oliviahall@gmail.com",
    },
    {
      id: "18",
      avatar: "https://i.pravatar.cc/150?img=18",
      status: "inactive",
      fullName: "Paul Allen",
      email: "paulallen@gmail.com",
    },
    {
      id: "19",
      avatar: "https://i.pravatar.cc/150?img=19",
      status: "active",
      fullName: "Queen Roberts",
      email: "queenroberts@gmail.com",
    },
    {
      id: "20",
      avatar: "https://i.pravatar.cc/150?img=20",
      status: "inactive",
      fullName: "Ryan Scott",
      email: "ryanscott@gmail.com",
    },
    {
      id: "21",
      avatar: "https://i.pravatar.cc/150?img=21",
      status: "active",
      fullName: "Sara Green",
      email: "saragreen@gmail.com",
    },
  ];
};
const users = Array.from({ length: 100 }, (_, i) => ({
  id: String(i + 1),
  avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
  status: i % 2 === 0 ? "active" : "inactive",
  fullName: `User ${i + 1}`,
  email: `user${i + 1}@gmail.com`,
}));

const UsersPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
