package com.unifei.gerenciadorhabitos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unifei.gerenciadorhabitos.models.UserHabitModel;

public interface UserHabitRepository extends MongoRepository<UserHabitModel, String> {

}
