package AppDev.CampusMarketplace.Service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendOtp(String toEmail, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Campus Marketplace — Your Login Code");
        message.setText(
                "Campus Marketplace — Your Login Code\n\n Hello!\n\n" +
                        "Your verification code is: " + code + "\n\n" +
                        "This code expires in 10 minutes.\n\n" +
                        "If you didn't request this, ignore this email."
        );
        mailSender.send(message);
    }
}