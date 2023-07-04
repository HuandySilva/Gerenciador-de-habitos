package com.unifei.gerenciadorhabitos.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unifei.gerenciadorhabitos.models.HabitModel;
import java.util.List;
import java.util.Optional;

public interface HabitRepository extends MongoRepository<HabitModel, String> {
    Optional<HabitModel> findByDescription(String description);
}