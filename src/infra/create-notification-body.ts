import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CreateNotificationBody {
  @IsNotEmpty()
  content: string

  @IsNotEmpty()
  @Length(5, 240)
  category: string

  @IsNotEmpty()
  @IsUUID()
  recipientId: string
}