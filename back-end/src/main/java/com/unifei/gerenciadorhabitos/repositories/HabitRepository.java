package com.unifei.gerenciadorhabitos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unifei.gerenciadorhabitos.models.HabitModel;

public interface HabitRepository extends MongoRepository<HabitModel, String> {

}