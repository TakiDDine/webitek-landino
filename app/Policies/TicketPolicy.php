<?php

namespace App\Policies;

use App\User;
use RexlManu\LaravelTickets\Models\Ticket;
use Illuminate\Auth\Access\HandlesAuthorization;

class TicketPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function index(User $user)
    {
        dd('hello');
        return false;
    }

    // /**
    //  * Determine whether the user can view the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Ticket  $ticket
    //  * @return \Illuminate\Auth\Access\Response|bool
    //  */
    // public function view(User $user, Ticket $ticket)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can create models.
    //  *
    //  * @param  \App\User  $user
    //  * @return \Illuminate\Auth\Access\Response|bool
    //  */
    // public function create(User $user)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can update the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Ticket  $ticket
    //  * @return \Illuminate\Auth\Access\Response|bool
    //  */
    // public function update(User $user, Ticket $ticket)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can delete the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Ticket  $ticket
    //  * @return \Illuminate\Auth\Access\Response|bool
    //  */
    // public function delete(User $user, Ticket $ticket)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can restore the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Ticket  $ticket
    //  * @return \Illuminate\Auth\Access\Response|bool
    //  */
    // public function restore(User $user, Ticket $ticket)
    // {
    //     //
    // }

    // /**
    //  * Determine whether the user can permanently delete the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Ticket  $ticket
    //  * @return \Illuminate\Auth\Access\Response|bool
    //  */
    // public function forceDelete(User $user, Ticket $ticket)
    // {
    //     //
    // }
}
