export interface LotInterface {
  id: string;
  product: string;
  current_boxes?: number;
  starting_boxes?: number;
  dispatched_boxes?: number;
}

export interface OrderInterface {
  id: string;
  date: Date;
  status: string;
  lots: LotInterface[];
}

// Interface for containers receipts
export interface ContainerReceiptInterface extends OrderInterface {
  ETA?: Date;
  container_no?: string;
  bl?: string;
}

// Interface for dispatch orders
export interface DispatchOrderInterface extends OrderInterface {
  driver?: string;
  delivery_company?: string;
  pickup_date?: Date;
}

const containerOrders: ContainerReceiptInterface[] = [
    {
      id: "114-4893-857",
      bl: "BXTN8LW62790",
      container_no: "CMCU 773622470",
      status: "Received",
      date: new Date("2024-10-22"),
      ETA: new Date("2024-10-23"),
      lots: [],
    },
    {
      id: "114-4893-858",
      bl: "ZAPS3M093435",
      container_no: "CMCU 5560770",
      status: "Inspection",
      date: new Date("2024-10-22"),
      ETA: new Date("2024-10-23"),
      lots: [],
    },
    {
      id: "114-4893-859",
      bl: "CWPS4M097234",
      container_no: "CMCU 5560770",
      status: "Confirmed Inventory",
      date: new Date("2024-10-21"),
      ETA: new Date("2024-10-22"),
      lots: [
        {
          id: "1829",
          product: "Frozen Pork Meats",
          current_boxes: 800,
          starting_boxes: 800,
        },
        {
          id: "1830",
          product: "Sweet Potato",
          current_boxes: 750,
          starting_boxes: 800,
        },
      ],
    },
    {
      id: "115-4893-860",
      bl: "XYPL5N098765",
      container_no: "XYZU 1234567",
      status: "Confirmed Inventory",
      date: new Date("2024-10-21"),
      ETA: new Date("2024-10-22"),
      lots: [
        {
          id: "1831",
          product: "Beef",
          current_boxes: 900,
          starting_boxes: 1000,
        },
      ],
    },
    {
      id: "116-4893-861",
      bl: "QWERTY098765",
      container_no: "LMNO 8901234",
      status: "Confirmed Inventory",
      date: new Date("2024-10-21"),
      ETA: new Date("2024-10-22"),
      lots: [
        {
          id: "1832",
          product: "Corn",
          current_boxes: 300,
          starting_boxes: 400,
        },
        {
          id: "1833",
          product: "Wheat",
          current_boxes: 100,
          starting_boxes: 150,
        },
      ],
    },
    {
      id: "117-4893-862",
      bl: "ASDFGH123456",
      container_no: "PQRS 5678901",
      status: "Confirmed Inventory",
      date: new Date("2024-10-12"),
      ETA: new Date("2024-10-13"),
      lots: [
        {
          id: "1834",
          product: "Rice",
          current_boxes: 600,
          starting_boxes: 650,
        },
        {
          id: "1835",
          product: "Barley",
          current_boxes: 200,
          starting_boxes: 250,
        },
      ],
    },
    {
      id: "118-4893-863",
      bl: "ZXCVBN54321",
      container_no: "TUVW 2345678",
      status: "Confirmed Inventory",
      date: new Date("2024-10-08"),
      ETA: new Date("2024-10-09"),
      lots: [
        {
          id: "1836",
          product: "Chicken",
          current_boxes: 500,
          starting_boxes: 600,
        },
      ],
    },
    {
      id: "119-4893-864",
      bl: "UIOPQWERTY123",
      container_no: "ABC 3456789",
      status: "Confirmed Inventory",
      date: new Date("2024-10-05"),
      ETA: new Date("2024-10-06"),
      lots: [
        {
          id: "1837",
          product: "Apples",
          current_boxes: 400,
          starting_boxes: 450,
        },
        {
          id: "1838",
          product: "Oranges",
          current_boxes: 350,
          starting_boxes: 400,
        },
      ],
    },
    {
      id: "120-4893-865",
      bl: "TYUIO987654",
      container_no: "DEF 4567890",
      status: "Confirmed Inventory",
      date: new Date("2024-10-02"),
      ETA: new Date("2024-10-03"),
      lots: [
        {
          id: "1839",
          product: "Tomatoes",
          current_boxes: 200,
          starting_boxes: 250,
        },
      ],
    },
    {
      id: "121-4893-866",
      bl: "GHJKL234567",
      container_no: "GHI 6789012",
      status: "Confirmed Inventory",
      date: new Date("2024-09-30"),
      ETA: new Date("2024-09-30"),
      lots: [
        {
          id: "1840",
          product: "Lettuce",
          current_boxes: 100,
          starting_boxes: 150,
        },
        {
          id: "1841",
          product: "Cucumbers",
          current_boxes: 75,
          starting_boxes: 100,
        },
      ],
    },
    {
      id: "122-4893-867",
      bl: "NMNBVCXZ321",
      container_no: "JKL 7890123",
      status: "Confirmed Inventory",
      date: new Date("2024-09-28"),
      ETA: new Date("2024-09-29"),
      lots: [
        {
          id: "1842",
          product: "Potatoes",
          current_boxes: 500,
          starting_boxes: 550,
        },
      ],
    },
    {
      id: "123-4893-868",
      bl: "QWERTY456789",
      container_no: "MNO 8901234",
      status: "Confirmed Inventory",
      date: new Date("2024-09-25"),
      ETA: new Date("2024-09-26"),
      lots: [
        {
          id: "1843",
          product: "Carrots",
          current_boxes: 600,
          starting_boxes: 650,
        },
      ],
    },
  ];

  const dispatchedOrders: DispatchOrderInterface[] = [
    {
      id: "114-4893-859",
      delivery_company: "PR Delivery",
      driver: "Juan Martinez",
      status: "Received",
      date: new Date("2024-10-22"), // Date object for date
      pickup_date: new Date("2024-10-22T13:00:00"), // Combine date + pickup time
      lots: [
        {
          id: "1829",
          product: "Frozen Pork Meats",
          dispatched_boxes: 300,
        },
        {
          id: "1830",
          product: "Sweet Potato",
          dispatched_boxes: 250,
        },
      ],
    },
    {
      id: "115-5234-960",
      delivery_company: "PR Delivery",
      driver: "Maria Lopez",
      status: "Received",
      date: new Date("2024-10-21"),
      pickup_date: new Date("2024-10-21T10:30:00"), // Combine date + pickup time
      lots: [
        {
          id: "1831",
          product: "Chilled Beef",
          dispatched_boxes: 450,
        },
        {
          id: "1832",
          product: "Frozen Fish Fillets",
          dispatched_boxes: 500,
        },
      ],
    },
    {
      id: "116-8745-721",
      delivery_company: "PR Delivery",
      driver: "Pedro Gonzalez",
      status: "Packaging",
      date: new Date("2024-10-18"),
      pickup_date: new Date("2024-10-18T08:15:00"),
      lots: [
        {
          id: "1833",
          product: "Corn",
          dispatched_boxes: 850,
        },
        {
          id: "1834",
          product: "Soybeans",
          dispatched_boxes: 1200,
        },
      ],
    },
    {
      id: "117-6394-832",
      delivery_company: "PR Delivery",
      driver: "Lucia Fernandez",
      status: "Picked Up",
      date: new Date("2024-10-18"),
      pickup_date: new Date("2024-10-18T14:45:00"),
      lots: [
        {
          id: "1835",
          product: "Frozen Chicken",
          dispatched_boxes: 1000,
        },
        {
          id: "1836",
          product: "Apples",
          dispatched_boxes: 500,
        },
      ],
    },
    {
      id: "118-7594-923",
      delivery_company: "PR Delivery",
      driver: "Carlos Ramirez",
      status: "Picked Up",
      date: new Date("2024-10-11"),
      pickup_date: new Date("2024-10-11T16:30:00"),
      lots: [
        {
          id: "1837",
          product: "Frozen Vegetables",
          dispatched_boxes: 350,
        },
        {
          id: "1838",
          product: "Oranges",
          dispatched_boxes: 700,
        },
      ],
    },
    {
      id: "119-9423-512",
      delivery_company: "PR Delivery",
      driver: "Ana Morales",
      status: "Picked Up",
      date: new Date("2024-10-11"),
      pickup_date: new Date("2024-10-11T09:00:00"),
      lots: [
        {
          id: "1839",
          product: "Lettuce",
          dispatched_boxes: 850,
        },
        {
          id: "1840",
          product: "Tomatoes",
          dispatched_boxes: 600,
        },
      ],
    },
    {
      id: "120-2748-623",
      delivery_company: "PR Delivery",
      driver: "Ricardo Martinez",
      status: "Picked Up",
      date: new Date("2024-10-10"),
      pickup_date: new Date("2024-10-10T15:00:00"),
      lots: [
        {
          id: "1841",
          product: "Carrots",
          dispatched_boxes: 900,
        },
        {
          id: "1842",
          product: "Bananas",
          dispatched_boxes: 800,
        },
      ],
    },
    {
      id: "121-9483-734",
      delivery_company: "PR Delivery",
      driver: "Sofia Reyes",
      status: "Picked Up",
      date: new Date("2024-10-10"),
      pickup_date: new Date("2024-10-10T11:00:00"),
      lots: [
        {
          id: "1843",
          product: "Frozen Shrimp",
          dispatched_boxes: 550,
        },
        {
          id: "1844",
          product: "Green Beans",
          dispatched_boxes: 450,
        },
      ],
    },
    {
      id: "122-5294-845",
      delivery_company: "PR Delivery",
      driver: "Jorge Sanchez",
      status: "Picked Up",
      date: new Date("2024-10-08"),
      pickup_date: new Date("2024-10-08T06:45:00"),
      lots: [
        {
          id: "1845",
          product: "Frozen Peas",
          dispatched_boxes: 700,
        },
        {
          id: "1846",
          product: "Pineapples",
          dispatched_boxes: 250,
        },
      ],
    },
    {
      id: "123-1385-956",
      delivery_company: "PR Delivery",
      driver: "Laura Perez",
      status: "Picked Up",
      date: new Date("2024-10-08"),
      pickup_date: new Date("2024-10-08T19:30:00"),
      lots: [
        {
          id: "1847",
          product: "Frozen Blueberries",
          dispatched_boxes: 400,
        },
        {
          id: "1848",
          product: "Frozen Strawberries",
          dispatched_boxes: 550,
        },
      ],
    },
  ];

export const fetchCompanyName = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dominguez & Co.");
    }, 3000); // 3 seconds delay
  });
};

export const fetchAllContainerOrders = async (): Promise<
  ContainerReceiptInterface[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(containerOrders);
    }, 5000); // 5 seconds delay
  });
};

export const fetchAllDispatchedOrders = async (): Promise<
  DispatchOrderInterface[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dispatchedOrders);
    }, 5000); // 5 seconds delay
  });
};
