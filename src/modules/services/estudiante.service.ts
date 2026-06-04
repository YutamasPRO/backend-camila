import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from '../../modules/entities/estudiante.entity';
import { CreateEstudianteDto } from '../../modules/dto/create-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudianteExiste = await this.estudianteRepository.findOne({
      where: { codigo: createEstudianteDto.codigo },
    });

    if (estudianteExiste) {
      throw new ConflictException(
        `Ya existe un estudiante con el código ${createEstudianteDto.codigo}`,
      );
    }

    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return await this.estudianteRepository.save(estudiante);
  }

  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find({ order: { id: 'ASC' } });
  }
}
