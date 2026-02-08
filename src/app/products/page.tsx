import { Product, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "Product Name 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 299.36,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["gray", "purple", "green"],
      images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
      },
    },
    {
      id: 2,
      name: "Product Name 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 399.12,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["gray", "green"],
      images: {
        gray: "/products/2g.png",
        green: "/products/2gr.png",
      },
    },
    {
      id: 3,
      name: "Product Name 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 359.11,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["blue", "black", "green"],
      images: {
        blue: "/products/3b.png",
        black: "/products/3bl.png",
        green: "/products/3gr.png",
      },
    },
    {
      id: 4,
      name: "Product Name 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 299.0,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["pink", "white"],
      images: {
        pink: "/products/4p.png",
        white: "/products/4w.png",
      },
    },
    {
      id: 5,
      name: "Product Name 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 499.57,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["black", "orange", "red"],
      images: {
        black: "/products/5bl.png",
        orange: "/products/5o.png",
        red: "/products/5r.png",
      },
    },
    {
      id: 6,
      name: "Product Name 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 599.55,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["gray", "white"],
      images: {
        gray: "/products/6g.png",
        white: "/products/6w.png",
      },
    },
    {
      id: 7,
      name: "Product Name 7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 299.0,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["gray", "pink"],
      images: {
        gray: "/products/7g.png",
        pink: "/products/7p.png",
      },
    },
    {
      id: 8,
      name: "Product Name 8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut! Necessitatibus dolorem similique asperiores adipisci exercitationem?",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit odio culpa numquam ut!",
      price: 299.0,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["blue", "green"],
      images: {
        blue: "/products/8b.png",
        green: "/products/8gr.png",
      },
    },
  ];
};

const ProductPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Products</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ProductPage;
