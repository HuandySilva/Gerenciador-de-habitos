package com.unifei.gerenciadorhabitos.Exceptions;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class HabitNotFoundException extends Exception {
    private String description;

    @Override
    public String getMessage() {
        return "Habit '" + description + "' not found.";
    }

}
