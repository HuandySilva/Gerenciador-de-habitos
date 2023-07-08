package com.unifei.gerenciadorhabitos.dtos;

import java.time.LocalDate;

import com.unifei.gerenciadorhabitos.models.HabitModel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// Não precisa ter a propriedade com o objeto usuário nessa classe, pois sempre
// vamos procurar por hábitos do usuário que já está logado, então é
// desnecessário que a api retorne o usuário para o front.
public class UserHabitDto {
    private HabitModel habitModel;
    private LocalDate date;
}
