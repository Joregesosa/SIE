<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewUserNotification extends Notification
{
    use Queueable;

    private $username;
    private $password;


    /**
     * Create a new notification instance.
     */
    public function __construct($userName, $password)
    {
        $this->username = $userName;
        $this->password = $password;

        return [$userName, $password];
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->line('Bienvenido! '.  $notifiable->email)
                    ->line('Hay que hacer una mejora aqui')
                    ->line('Nombre de usuario: '. $this->username)
                    ->line('Contraseña: '. $this->password)
                    ->action('Notification Action', '')
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            $notifiable->email
        ];
    }

    
}
