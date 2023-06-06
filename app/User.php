<?php

namespace App;

use App\Project;
use Laravel\Paddle\Billable;
use App\Notifications\DBNotification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use RexlManu\LaravelTickets\Traits\HasTickets;
use RexlManu\LaravelTickets\Traits\HasTicketReference;
use Illuminate\Foundation\Auth\User as Authenticatable;
use RexlManu\LaravelTickets\Interfaces\TicketReference;

class User extends Authenticatable implements MustVerifyEmail, TicketReference
{
    use Notifiable, SoftDeletes,  Billable, HasTickets;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	protected $fillable = [
        'name', 'email', 'password', 'user_type', 'status', 'profile_picture',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
	
	public function client(){
		return $this->hasMany('App\Contact','user_id');
	}
	
	public function company(){
		return $this->belongsTo('App\Company','company_id')->withDefault();
	}

    public function role(){
        return $this->belongsTo('App\Role','role_id')->withDefault();
    }
	
	public function chat_groups(){
		return $this->belongsToMany('App\ChatGroup', 'chat_group_users', 'user_id', 'group_id');
	}

    public function projects(){
        return $this->belongsToMany('App\Project','project_members', 'user_id', 'project_id')->orderBy('id','desc');
    }

    public function tasks(){
        return $this->hasMany('App\Task', 'assigned_user_id')->orderBy('id','desc');
    }
	
	public function notifications()
    {
        return $this->morphMany(DBNotification::class, 'notifiable')
                            ->orderBy('created_at', 'desc');
    }

    public function affiliate()
    {
        return $this->hasOne(Affiliate::class);
    }

    // Check if user has access to this model
  function hasReferenceAccess() : bool {
        return request()->user()->user_id == $this->user_id;
    }
	/**
	 * Show the name when on selection
	 * @return string
	 */
	public function toReference(): string {
    return request()->user()->user_id == $this->user_id;

	}
    public function getRole()
    {
        return $this->role == 'admin' ? 'tailwind' : 'bootstrap';
    }

    /**
     * The templates that belong to the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function templates()
    {
        return $this->belongsToMany(Template::class, 'user_template')->withTimesTamps();
    }

    /**
    * Get all of the project for the User
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function seachProjects()
    {
        return $this->hasMany(Project::class);
    }
    
    /**
     * projects treshed function
     *
     * @return void
     */
    public function projectsTrashed(){
        
        return $this->hasMany(Project::class)->onlyTrashed();
    }
}
