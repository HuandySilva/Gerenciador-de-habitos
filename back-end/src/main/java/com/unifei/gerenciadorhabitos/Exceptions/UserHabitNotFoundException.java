package com.unifei.gerenciadorhabitos.Exceptions;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class UserHabitNotFoundException extends Exception {
    private String message;

}
