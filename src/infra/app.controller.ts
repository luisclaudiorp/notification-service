import { CreateNotificationBody } from './create-notification-body';
import { Controller, Get, Body, Post  } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto'

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany()
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category} = body   
    await this.prisma.notification.create({
      data:{
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
  }
}
