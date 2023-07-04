package com.unifei.gerenciadorhabitos.services;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.unifei.gerenciadorhabitos.Exceptions.HabitNotFoundException;
import com.unifei.gerenciadorhabitos.models.HabitModel;
import com.unifei.gerenciadorhabitos.models.UserHabitModel;
import com.unifei.gerenciadorhabitos.models.UserModel;
import com.unifei.gerenciadorhabitos.repositories.UserHabitRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserHabitService {
    private final UserHabitRepository userHabitRepository;
    private final UserService userService;
    private HabitService habitService;

    public List<UserHabitModel> findAll() {
        return userHabitRepository.findAll();
    }

    public void saveUserHabit(HabitModel model, Principal principal) throws HabitNotFoundException {
        LocalDate currentDate = LocalDate.now();
        LocalDate habit_date = LocalDate.of(currentDate.getYear(), currentDate.getMonth(), currentDate.getDayOfMonth());
        HabitModel habit = habitService.findByDescription(model.getDescription())
                .orElseThrow(() -> new HabitNotFoundException(model.getDescription()));
        UserModel userModel = userService.findByUsername(principal.getName());
        System.out.println(userModel.getUsername());
        UserHabitModel uhm = new UserHabitModel(habit, userModel, habit_date);
        userHabitRepository.save(uhm);
    }
}