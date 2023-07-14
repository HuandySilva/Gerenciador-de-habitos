package com.unifei.gerenciadorhabitos.util;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.unifei.gerenciadorhabitos.dtos.HabitDto;
import com.unifei.gerenciadorhabitos.models.HabitModel;

@Mapper
public interface HabitMapper {
    HabitMapper INSTANCE = Mappers.getMapper(HabitMapper.class);

    HabitDto modelToDto(HabitModel model);

    List<HabitDto> modelsToDtos(List<HabitModel> models);

    @Mapping(target = "id", ignore = true)
    HabitModel dtoToModel(HabitDto dto);
}
