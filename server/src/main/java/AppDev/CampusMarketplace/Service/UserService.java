package AppDev.CampusMarketplace.Service;

import AppDev.CampusMarketplace.Entity.User;
import AppDev.CampusMarketplace.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}