package com.unifei.gerenciadorhabitos.services;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.unifei.gerenciadorhabitos.models.UserModel;
import com.unifei.gerenciadorhabitos.repositories.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public List<UserModel> findAll() {
        return userRepository.findAll();
    }

    public UserModel findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional
    public void saveUser(UserModel user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
    }
}
