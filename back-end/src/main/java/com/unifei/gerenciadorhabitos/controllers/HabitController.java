package com.unifei.gerenciadorhabitos.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.unifei.gerenciadorhabitos.dtos.HabitDto;
import com.unifei.gerenciadorhabitos.services.HabitService;
import com.unifei.gerenciadorhabitos.util.HabitMapper;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/habits")
@AllArgsConstructor
public class HabitController {
    final HabitService habitService;

    @GetMapping
    public ResponseEntity<List<HabitDto>> findAll() {
        return ResponseEntity.ok(habitService.findAll());
    }

    // Metodo http post simplificado que eu criei só pra facilitar a inserção de
    // habitos na base de dados. Se você está olhando isso depois de já termos
    // inserido os dados e eu esqueci de tirar o método, sinta-se livre.
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<HabitDto> post(@RequestBody HabitDto dto) {
        habitService.save(HabitMapper.INSTANCE.dtoToModel(dto));
        return ResponseEntity.ok(dto);
    }
}
