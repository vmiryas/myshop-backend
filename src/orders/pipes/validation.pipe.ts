import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { CreateOrderBalanceDtoValid } from '../dto/create-order.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(
    value: CreateOrderBalanceDtoValid,
    metadata: ArgumentMetadata,
  ): CreateOrderBalanceDtoValid {
    if (value.balance < 0) {
      throw new BadRequestException('Balance cannot be less than 0');
    }
    return value;
  }
}
