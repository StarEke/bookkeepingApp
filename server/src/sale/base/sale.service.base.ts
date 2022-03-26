/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Sale, Item, Admin, Manager } from "@prisma/client";

export class SaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<number> {
    return this.prisma.sale.count(args);
  }

  async findMany<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<Sale[]> {
    return this.prisma.sale.findMany(args);
  }
  async findOne<T extends Prisma.SaleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindUniqueArgs>
  ): Promise<Sale | null> {
    return this.prisma.sale.findUnique(args);
  }
  async create<T extends Prisma.SaleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleCreateArgs>
  ): Promise<Sale> {
    return this.prisma.sale.create<T>(args);
  }
  async update<T extends Prisma.SaleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleUpdateArgs>
  ): Promise<Sale> {
    return this.prisma.sale.update<T>(args);
  }
  async delete<T extends Prisma.SaleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleDeleteArgs>
  ): Promise<Sale> {
    return this.prisma.sale.delete(args);
  }

  async findItem(
    parentId: string,
    args: Prisma.ItemFindManyArgs
  ): Promise<Item[]> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .item(args);
  }

  async getAdmin(parentId: string): Promise<Admin | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .admin();
  }

  async getManager(parentId: string): Promise<Manager | null> {
    return this.prisma.sale
      .findUnique({
        where: { id: parentId },
      })
      .manager();
  }
}
