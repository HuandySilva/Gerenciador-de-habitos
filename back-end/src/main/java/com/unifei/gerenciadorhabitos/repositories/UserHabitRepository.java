package com.unifei.gerenciadorhabitos.repositories;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.unifei.gerenciadorhabitos.models.HabitModel;
import com.unifei.gerenciadorhabitos.models.UserHabitModel;
import com.unifei.gerenciadorhabitos.models.UserModel;

public interface UserHabitRepository extends MongoRepository<UserHabitModel, String> {
    Optional<UserHabitModel> findByUserModelAndDateAndHabitModel(UserModel user,
            LocalDate date,
            HabitModel habitModel);

}
