<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use RexlManu\LaravelTickets\Traits\HasTicketReference;
use RexlManu\LaravelTickets\Interfaces\TicketReference;

class TicketModel extends Model implements TicketReference 
{

  use HasTicketReference, SoftDeletes;

  // Check if user has access to this model
  function hasReferenceAccess() : bool {
      return request()->user()->user_id == $this->user_id;
  }

}
