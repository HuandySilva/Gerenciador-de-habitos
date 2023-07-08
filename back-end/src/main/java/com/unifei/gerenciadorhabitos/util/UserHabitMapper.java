package com.unifei.gerenciadorhabitos.util;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.unifei.gerenciadorhabitos.dtos.UserHabitDto;
import com.unifei.gerenciadorhabitos.models.UserHabitModel;

@Mapper(uses = { HabitMapper.class })
public interface UserHabitMapper {
    UserHabitMapper INSTANCE = Mappers.getMapper(UserHabitMapper.class);

    UserHabitDto toDto(UserHabitModel userHabit);

    List<UserHabitDto> modelsToDtos(List<UserHabitModel> userHabits);
}
