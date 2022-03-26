import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ManagerServiceBase } from "./base/manager.service.base";

@Injectable()
export class ManagerService extends ManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
