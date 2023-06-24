package com.unifei.gerenciadorhabitos.util;

import com.unifei.gerenciadorhabitos.dtos.UserDto;
import com.unifei.gerenciadorhabitos.models.UserModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "authorities", ignore = true)
    UserModel dtoToModel(UserDto userDto);

    UserDto modelToDto(UserModel user);
}
