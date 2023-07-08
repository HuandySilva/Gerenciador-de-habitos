package com.unifei.gerenciadorhabitos.Exceptions;

public class UserAlreadyExistException extends Exception {

    public UserAlreadyExistException(final String msg) {
        super(msg);
    }
}