import {
  Resolver,
  Mutation,
  Authorized,
  Arg,
  Args,
  Ctx,
  Query,
} from "type-graphql";
import { ProductResponse } from "../responses/ProductResponse";
import { productInput } from "../inputs/ProductInput";
import { Product } from "../schema/Product";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  @Authorized()
  async addProduct(
    @Arg("input") thisInput: productInput,
    @Ctx() context,
  ): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        name: thisInput.name,
        category: thisInput.category,
        description: thisInput.description,
        price: thisInput.price,
        image: thisInput.image,
        userId: context.user.id,
      },
    });

    return product;
  }

  @Mutation(() => Product)
  @Authorized()
  async updateProduct(@Arg("input") thisInput: productInput): Promise<Product> {
    const product = await prisma.product.update({
      where: {
        id: thisInput.id,
      },
      data: {
        name: thisInput.name,
        category: thisInput.category,
        description: thisInput.description,
        price: thisInput.price,
        image: thisInput.image,
      },
    });
    return product;
  }

  // @Mutation(()=>String)
  // @Authorized()
  // async deleteProduct(@Args() id:number):Promise<String>{

  //     const product = await prisma.product.delete({
  //         where:{
  //             id
  //         }
  //     })

  //     console.log(product,'deleted')
  //     return 'Product has deleted successfully'
  // }

  // @Query(()=> Product)
  // async getProductById(@Args() id:number):Promise<Product>{
  //     const product = await prisma.product.findUnique({
  //         where:{
  //             id
  //         },
  //         include:{
  //             user: true
  //         }

  //     })
  //     return product
  // }

  @Query(() => ProductResponse)
  async getProducts(): Promise<ProductResponse> {
    const [products, totalCount] = await prisma.$transaction([
      prisma.product.findMany({ include: { user: true } }),
      prisma.product.count(),
    ]);

    return {
      products,
      total: totalCount,
    };
  }
}
