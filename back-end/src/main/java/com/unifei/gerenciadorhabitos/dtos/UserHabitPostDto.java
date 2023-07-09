package com.unifei.gerenciadorhabitos.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UserHabitPostDto {
    @NotNull
    private String habitDescription;

}
