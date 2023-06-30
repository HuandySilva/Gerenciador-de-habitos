package com.unifei.gerenciadorhabitos.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.unifei.gerenciadorhabitos.dtos.HabitDto;
import com.unifei.gerenciadorhabitos.models.HabitModel;
import com.unifei.gerenciadorhabitos.repositories.HabitRepository;
import com.unifei.gerenciadorhabitos.util.HabitMapper;

@Service
public class HabitService {
    private HabitRepository habitRepository;

    public HabitService(HabitRepository habitRepository) {
        this.habitRepository = habitRepository;
    }

    public List<HabitDto> findAll() {
        return HabitMapper.INSTANCE.modelsToDtos(habitRepository.findAll());
    }

    public void save(HabitModel dtoToModel) {
        habitRepository.save(dtoToModel);
    }
}
