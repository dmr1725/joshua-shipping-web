export interface LotInterface {
    id: string;
    product: string;
    current_boxes?: number;
    starting_boxes?: number;
    dispatched_boxes?: number;
}

export interface OrderInterface {
    id: string;
    bl?: string;
    container_no?: string;
    date: string;
    lots: LotInterface[]
}

const orders: OrderInterface[] = [
    {
      id: "114-4893-859",
      bl: "CWPS4M097234",
      container_no: "CMCU 5560770",
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
  

export const fetchCompanyName = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dominguez & Co.");
        }, 3000); // 3 seconds delay
    });
};

export const fetchAllOrders = async (): Promise<OrderInterface[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(orders);
        }, 5000); // 5 seconds delay
    });
}