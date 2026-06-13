package com.medstore.backend.controller;

import com.medstore.backend.auth.JwtUtil;
import com.medstore.backend.dto.LoginRequest;
import com.medstore.backend.entity.User;
import com.medstore.backend.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    private final UserRepository userRepository;

    private final JwtUtil jwtUtil;

    private final BCryptPasswordEncoder encoder =
            new BCryptPasswordEncoder();

    public AuthController(
            UserRepository userRepository,
            JwtUtil jwtUtil
    ) {

        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {

        user.setPassword(
                encoder.encode(user.getPassword())
        );

        // Default role for new users
        user.setRole("CUSTOMER");

        userRepository.save(user);

        return "User registered successfully";
    }

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestBody LoginRequest request
    ) {

        Optional<User> optionalUser =
                userRepository.findByEmail(
                        request.getEmail()
                );

        Map<String, String> response =
                new HashMap<>();

        if (
                optionalUser.isPresent()
                        &&
                        encoder.matches(
                                request.getPassword(),
                                optionalUser.get().getPassword()
                        )
        ) {

            User user = optionalUser.get();

            String token =
                    jwtUtil.generateToken(
                            user.getEmail(),
                            user.getRole()
                    );

            response.put("token", token);

            response.put("role", user.getRole());

            return response;
        }

        response.put("error", "Invalid credentials");

        return response;
    }
}