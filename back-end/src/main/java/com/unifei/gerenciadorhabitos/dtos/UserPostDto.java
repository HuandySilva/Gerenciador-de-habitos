package com.unifei.gerenciadorhabitos.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserPostDto {
    @NotBlank
    @NotNull
    private String password;
    @Email
    @NotBlank
    @NotNull
    private String username;

}
