export interface LotInterface {
  id: string;
  product: string;
  current_boxes?: number;
  starting_boxes?: number;
  dispatched_boxes?: number;
}

export interface OrderInterface {
  id: string;
  date: string;
  status: string;
  lots: LotInterface[];
}

// Interface for containers receipts
export interface ContainerReceiptInterface extends OrderInterface {
  container_no?: string;
  bl?: string;
}

// Interface for dispatch orders
export interface DispatchOrderInterface extends OrderInterface {
  driver?: string;
  pickup_time?: string;
}

const containerOrders: ContainerReceiptInterface[] = [
  {
    id: "114-4893-858",
    bl: "ZAPS3M093435",
    container_no: "CMCU 5560770",
    status: "Pending",
    date: "2024-10-16",
    lots: [],
  },
  {
    id: "114-4893-859",
    bl: "CWPS4M097234",
    container_no: "CMCU 5560770",
    status: "Pending",
    date: "2024-10-16",
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
    status: "Pending",
    date: "2024-10-10",
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
    status: "Pending",
    date: "2024-10-14",
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
    status: "Pending",
    date: "2024-10-12",
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
    status: "Pending",
    date: "2024-10-08",
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
    status: "At Warehouse",
    date: "2024-10-05",
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
    status: "At Warehouse",
    date: "2024-10-02",
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
    status: "At Warehouse",
    date: "2024-09-30",
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
    status: "At Warehouse",
    date: "2024-09-28",
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
    status: "At Warehouse",
    date: "2024-09-25",
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
    driver: "Juan Martinez",
    status: "Pending",
    date: "2024-10-16",
    pickup_time: "1:00pm",
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
    driver: "Maria Lopez",
    status: "Pending",
    date: "2024-10-17",
    pickup_time: "10:30am",
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
    driver: "Pedro Gonzalez",
    status: "Pending",
    date: "2024-10-18",
    pickup_time: "8:15am",
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
    driver: "Lucia Fernandez",
    status: "Pending",
    date: "2024-10-18",
    pickup_time: "2:45pm",
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
    driver: "Carlos Ramirez",
    status: "Pending",
    date: "2024-10-19",
    pickup_time: "4:30pm",
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
    driver: "Ana Morales",
    status: "Picked Up",
    date: "2024-10-19",
    pickup_time: "9:00am",
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
    driver: "Ricardo Martinez",
    status: "Picked Up",
    date: "2024-10-20",
    pickup_time: "3:00pm",
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
    driver: "Sofia Reyes",
    status: "Picked Up",
    date: "2024-10-20",
    pickup_time: "11:00am",
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
    driver: "Jorge Sanchez",
    status: "Picked Up",
    date: "2024-10-21",
    pickup_time: "6:45am",
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
    driver: "Laura Perez",
    status: "Picked Up",
    date: "2024-10-21",
    pickup_time: "7:30pm",
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
