package com.unifei.gerenciadorhabitos.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.unifei.gerenciadorhabitos.dtos.HabitDto;
import com.unifei.gerenciadorhabitos.models.HabitModel;
import com.unifei.gerenciadorhabitos.repositories.HabitRepository;
import com.unifei.gerenciadorhabitos.util.HabitMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class HabitService {
    private final HabitRepository habitRepository;

    public List<HabitDto> findAll() {
        return HabitMapper.INSTANCE.modelsToDtos(habitRepository.findAll());
    }

    // Metodo simplificado que eu criei só pra facilitar a inserção de habitos na
    // base de dados. Se você está olhando isso depois de já termos inserido os
    // dados e eu esqueci de tirar o método, sinta-se livre.
    public void save(HabitModel dtoToModel) {
        habitRepository.save(dtoToModel);
    }
}
