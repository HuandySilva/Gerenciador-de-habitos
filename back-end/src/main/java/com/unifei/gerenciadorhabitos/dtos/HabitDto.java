package com.unifei.gerenciadorhabitos.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HabitDto {
    @NotNull
    @NotBlank
    private String description;
    @NotNull
    @NotBlank
    private String emoji;
}
