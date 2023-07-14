package com.unifei.gerenciadorhabitos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unifei.gerenciadorhabitos.models.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String> {
    public UserModel findByUsername(String username);
}
