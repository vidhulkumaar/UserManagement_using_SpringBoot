package com.project.io.Controller;

import com.project.io.Entity.User;
import com.project.io.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        return userService.register(user);
    }
    @PostMapping("/verify")
    public String verifyOtp(@RequestParam String email,
                            @RequestParam String otp) {

        return userService.verifyOtp(email, otp);
    }
    @PostMapping("/login")
    public String login(@RequestParam String email,
                        @RequestParam String password) {

        return userService.login(email, password);
    }
    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }
}