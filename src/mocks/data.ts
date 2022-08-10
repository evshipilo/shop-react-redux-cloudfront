import { OrderStatus } from "~/constants/order";
import { CartItem } from "~/models/CartItem";
import { Order } from "~/models/Order";
import { AvailableProduct, Product } from "~/models/Product";

export const products: Product[] = [
  {
    description: "SUP-Board Gladiator Lite",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
    price: 500,
    title: "Gladiator Lite",
  },
  {
    description: "SUP-Board Gladiator Pro",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a1",
    price: 750,
    title: "Gladiator Pro",
  },
  {
    description: "SUP-Board Gladiator Elite",
    id: "7567ec4b-b10c-48c5-9345-fc73c48a80a3",
    price: 1000,
    title: "Gladiator Elite",
  },
  {
    description: "SUP-Board Shark Lite",
    id: "7567ec4b-b10c-48c5-9345-fc73348a80a1",
    price: 590,
    title: "Shark Lite",
  },
  {
    description: "SUP-Board Shark Pro",
    id: "7567ec4b-b10c-48c5-9445-fc73c48a80a2",
    price: 800,
    title: "Shark Pro",
  },
  {
    description: "SUP-Board Shark Elite",
    id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
    price: 1150,
    title: "Shark Elite",
  },
];

export const availableProducts: AvailableProduct[] = products.map(
  (product, index) => ({ ...product, count: index + 1 })
);

export const cart: CartItem[] = [
  {
    product: {
      description: "Short Product Description1",
      id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
      price: 24,
      title: "ProductOne",
    },
    count: 2,
  },
  {
    product: {
      description: "Short Product Description7",
      id: "7567ec4b-b10c-45c5-9345-fc73c48a80a1",
      price: 15,
      title: "ProductName",
    },
    count: 5,
  },
];

export const orders: Order[] = [
  {
    id: "1",
    address: {
      address: "some address",
      firstName: "Name",
      lastName: "Surname",
      comment: "",
    },
    items: [
      { productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 2 },
      { productId: "7567ec4b-b10c-45c5-9345-fc73c48a80a1", count: 5 },
    ],
    statusHistory: [
      { status: OrderStatus.Open, timestamp: Date.now(), comment: "New order" },
    ],
  },
  {
    id: "2",
    address: {
      address: "another address",
      firstName: "John",
      lastName: "Doe",
      comment: "Ship fast!",
    },
    items: [{ productId: "7567ec4b-b10c-48c5-9345-fc73c48a80aa", count: 3 }],
    statusHistory: [
      {
        status: OrderStatus.Sent,
        timestamp: Date.now(),
        comment: "Fancy order",
      },
    ],
  },
];
