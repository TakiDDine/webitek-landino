<?php

namespace App\Providers;

use App\User;
use App\Policies\TicketPolicy;
use Illuminate\Support\Facades\Gate;
use RexlManu\LaravelTickets\Models\Ticket;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // Ticket::class => TicketPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::before(function(User $user, $ability) {
            if ($ability == 'can:tickets.all') {
                return $user->user_type == 'admin';
            } else {
                return true;
            }
        });
    }
}
