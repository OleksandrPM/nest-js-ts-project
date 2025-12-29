import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  create(createImageDto: CreateImageDto) {
    return `This action adds a new image, with data: ${JSON.stringify(createImageDto)}`;
  }

  findAll() {
    return `This action returns all images`;
  }

  findFiltered(filter: string) {
    return `This action returns all images filtered by tags: ${filter.length ? filter.split(',').join(', ') : 'no filters'}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image, with data: ${JSON.stringify(updateImageDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
