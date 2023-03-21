<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use RexlManu\LaravelTickets\Interfaces\TicketReference;
use RexlManu\LaravelTickets\Traits\HasTicketReference;

class TicketModel extends Model implements TicketReference {

  use HasTicketReference;

  // Check if user has access to this model
  function hasReferenceAccess() : bool {
      return request()->user()->user_id == $this->user_id;
  }

}
