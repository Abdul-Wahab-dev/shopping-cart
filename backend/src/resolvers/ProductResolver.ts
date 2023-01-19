import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Authorized,
  Ctx,
  Args,
} from "type-graphql";
import { Product } from "../schema/Product";
import { v1 } from "uuid";
import { ProductInput } from "../inputs/ProductInput";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Context {
  req: { headers: { authorization: String } };
  user: {
    id: number;
    email: string;
    name: string;
    role: string;
  };
}

@Resolver()
export class ProductResolver {
  @Authorized()
  @Mutation(() => Product)
  async addProduct(
    @Arg("input") input: ProductInput,
    @Ctx() ctx: Context
  ): Promise<Product> {
    const newProduct = await prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
        category: input.category,
        subCategory: input.subCategory,
        slug: input.name.split(" ").join("-") + "-" + ctx.user.id,
        User: {
          connect: {
            id: ctx.user.id,
          },
        },
        price: {
          create: {
            basePrice: input.basePrice,
            vatPrice: input.vatPrice,
          },
        },
      },
      include: {
        price: true,
        User: true,
      },
    });
    console.log(newProduct);
    return {
      name: newProduct.name,
      description: newProduct.description,
      User: newProduct.User,
      id: newProduct.id,
      category: newProduct.category,
      subCategory: newProduct.subCategory,
      price: newProduct.price,
    };
  }

  @Query(() => Product)
  async getProductById(@Arg("id") id: number): Promise<Product> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        price: true,
        User: true,
      },
    });

    return product;
  }

  @Query(() => [Product])
  async getProducts(): Promise<Product[]> {
    const products = await prisma.product.findMany({
      include: {
        price: true,
        User: true,
      },
    });

    return products;
  }

  @Mutation(() => Product)
  async updateProduct(@Arg("input") input: ProductInput): Promise<Product> {
    const updateProducted = await prisma.product.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
      },
      include: {
        User: true,
        price: true,
      },
    });

    return updateProducted;
  }
}
