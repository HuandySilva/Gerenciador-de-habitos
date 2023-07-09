package com.unifei.gerenciadorhabitos.services;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;
import com.unifei.gerenciadorhabitos.Exceptions.HabitNotFoundException;
import com.unifei.gerenciadorhabitos.Exceptions.UserHabitNotFoundException;
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
    private final HabitService habitService;

    public List<UserHabitModel> findAll() {
        return userHabitRepository.findAll();
    }

    public UserHabitModel findByUserModelUsernameAndDateAndHabitModelDescription(String habitDescription,
            Principal principal) throws Exception {
        LocalDate now = LocalDate.now();
        LocalDate today = LocalDate.of(now.getYear(), now.getMonthValue(), now.getDayOfMonth());
        UserModel userModel = userService.findByUsername(principal.getName());
        HabitModel habitModel = habitService.findByDescription(habitDescription)
                .orElseThrow(() -> new HabitNotFoundException(habitDescription));
        UserHabitModel userHabitModel = userHabitRepository
                .findByUserModelAndDateAndHabitModel(userModel, today, habitModel)
                .orElseThrow(() -> new UserHabitNotFoundException("Not found"));
        return userHabitModel;
    }

    public void saveUserHabit(String string, Principal principal) throws HabitNotFoundException {
        LocalDate currentDate = LocalDate.now();
        LocalDate habit_date = LocalDate.of(currentDate.getYear(), currentDate.getMonth(), currentDate.getDayOfMonth());
        HabitModel habit = habitService.findByDescription(string)
                .orElseThrow(() -> new HabitNotFoundException(string));
        UserModel userModel = userService.findByUsername(principal.getName());
        UserHabitModel uhm = new UserHabitModel(habit, userModel, habit_date);
        userHabitRepository.save(uhm);
    }
}