package com.unifei.gerenciadorhabitos.util;

import com.unifei.gerenciadorhabitos.dtos.UserPostDto;
import com.unifei.gerenciadorhabitos.models.UserModel;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    @Mapping(target = "authorities", ignore = true)
    UserModel dtoToModel(UserPostDto userDto);

    UserPostDto modelToDto(UserModel user);

    List<UserPostDto> modelsToDtos(List<UserModel> models);
}
