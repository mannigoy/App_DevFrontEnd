package AppDev.CampusMarketplace.Repository;

import AppDev.CampusMarketplace.Entity.OtpCode;
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.transaction.Transactional;

import java.util.Optional;

import java.util.Optional;

public interface OtpRepository extends JpaRepository<OtpCode, Long> {
    Optional<OtpCode> findTopByEmailOrderByExpiresAtDesc(String email);
    @Transactional
    void deleteByEmail(String email);
}