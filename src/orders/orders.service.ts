import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';



@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  create(input: { asset_id: string, price: number }) {
    return this.prismaService.order.create({
      data: {
        asset_id: input.asset_id,
        price: input.price,
        status: 'OPEN'
      }
    });
  }

  all() {
    return this.prismaService.order.findMany({
      include: {
        Asset: {
          select: {
            id: true,
            symbol: true
          }
        }
      },
    });
  }
}
