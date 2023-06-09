<?php

namespace App\Utilities;

class Overrider
{

    public static function load($type)
    {
        $method = 'load' . ucfirst($type);
        static::$method();
    }

    protected static function loadSettings()
    {
        // Timezone
        config(['app.timezone' => get_option('timezone')]);

        // Email
        $email_protocol = get_option('mail_type');
        config(['mail.driver' => $email_protocol]);
        config(['mail.from.name' => get_option('from_name')]);
        config(['mail.from.address' => get_option('from_email')]);
        
        if ($email_protocol == 'sendmail') {
            config(['mail.host' => get_option('smtp_host')]);
            config(['mail.port' => get_option('smtp_port')]);
            config(['mail.username' => get_option('smtp_username')]);
            config(['mail.password' => get_option('smtp_password')]);
            config(['mail.encryption' => get_option('smtp_encryption')]);
        }	

        config(['captcha.secret' => get_option('secret_key')]);
        config(['captcha.sitekey' => get_option('site_key')]);
		
    }
	
	protected static function loadServiceSettings()
    {
		//Set Google Login Credentials
		config(['services.google' => [
				'client_id' => get_option('GOOGLE_CLIENT_ID'),
				'client_secret' => get_option('GOOGLE_CLIENT_SECRET'),
				'redirect' => url('google/callback'),
			]
		]);
	}	

}