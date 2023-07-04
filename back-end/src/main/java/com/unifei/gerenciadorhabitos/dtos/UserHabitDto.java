package com.unifei.gerenciadorhabitos.dtos;

import java.time.LocalDate;

import com.unifei.gerenciadorhabitos.models.HabitModel;
import com.unifei.gerenciadorhabitos.models.UserModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserHabitDto {
    private HabitModel habitModel;
    private LocalDate date;
}
