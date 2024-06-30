import { Sku } from "./types";

const images: { [key: string]: any } = {
  "/products/miller-lite.png": require("../assets/images/miller-lite.png"),
  "/products/corona.jpg": require("../assets/images/corona.jpg"),
  "/products/budweiser.jpg": require("../assets/images/budweiser.jpg"),
  "/products/lagunitas.jpg": require("../assets/images/modelo-especial.jpeg"),
};

export default images;

export function extractSize(input: string): string {
  const regex = /^(\d+\s*-\s*\d+oz).*?,\s*(\d+\s*Pack)$/;
  const match = input.match(regex);

  if (match) {
    const part1 = match[1];
    const part2 = match[2];
    return `${part1} / ${part2}`;
  } else {
    return input;
  }
}

export function getFirstWithStock(skus: Sku[] | undefined): Sku | undefined {
  return skus?.find((sku) => sku.stock > 0);
}
