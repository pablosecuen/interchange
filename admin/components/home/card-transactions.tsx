import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "$50000",
    date: "9/20/2021",
  },
  {
    name: "Jose Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "$45000",
    date: "9/20/2021",
  },
  {
    name: "Martin Garcia",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "$45000",
    date: "9/20/2021",
  },
  {
    name: "Lisandro martinez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "$60000",
    date: "9/20/2021",
  },
  {
    name: "Pepe Perez",
    picture: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    amount: "60000 USD",
    date: "9/20/2021",
  },
];

export const CardTransactions = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">ULTIMAS TRANSACCIONES</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          {items.map((item) => (
            <div key={item.name} className="grid grid-cols-4 w-full">
              <div className="w-full">
                <Avatar
                  isBordered
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </div>

              <span className="text-default-900  font-semibold inline ">{item.name}</span>
              <div>
                <span className="text-success text-xs">{item.amount}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
