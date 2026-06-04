import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EstudianteService } from '../../modules/services/estudiante.service';
import { CreateEstudianteDto } from '../../modules/dto/create-estudiante.dto';
import { Estudiante } from '../../modules/entities/estudiante.entity';

@ApiTags('Estudiantes')
@Controller('estudiantes')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo estudiante' })
  @ApiResponse({ status: 201, description: 'Estudiante creado exitosamente' })
  @ApiResponse({ status: 409, description: 'Ya existe un estudiante con ese código' })
  create(@Body() createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los estudiantes' })
  @ApiResponse({ status: 200, description: 'Lista de estudiantes obtenida exitosamente' })
  findAll(): Promise<Estudiante[]> {
    return this.estudianteService.findAll();
  }
}
