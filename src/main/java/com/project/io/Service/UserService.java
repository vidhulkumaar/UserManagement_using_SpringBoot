package com.project.io.Service;

import com.project.io.Entity.User;
import com.project.io.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MailService mailService;

    public String register(User user) {

        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }

        Random random = new Random();
        String otp = String.valueOf(100000 + random.nextInt(900000));

        user.setOtp(otp);
        user.setVerified(false);

        userRepository.save(user);

        mailService.sendOtp(user.getEmail(), otp);

        return "OTP sent successfully";
    }
    public String verifyOtp(String email, String otp) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return "User not found";
        }

        if (user.getOtp().equals(otp)) {
            user.setVerified(true);
            user.setOtp(null);
            userRepository.save(user);
            return "OTP Verified Successfully";
        }

        return "Invalid OTP";
    }
    public String login(String email, String password) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return "User not found";
        }

        if (!user.getVerified()) {
            return "Please verify your email first";
        }

        if (!user.getPassword().equals(password)) {
            return "Invalid Password";
        }

        return "Login Successful";
    }
    public User addUser(User user) {

        user.setVerified(true);
        user.setOtp(null);

        return userRepository.save(user);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User getUser(Long id) {

        return userRepository.findById(id).orElse(null);

    }
    public User updateUser(User user) {

        return userRepository.save(user);

    }
    public String deleteUser(Long id) {

        userRepository.deleteById(id);

        return "User Deleted Successfully";

    }

}