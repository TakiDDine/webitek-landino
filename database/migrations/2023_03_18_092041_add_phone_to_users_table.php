<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPhoneToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            // $table->string('phone')->nullable();
            // $table->string('affiliate_id')->nullable()->unique();
            // $table->boolean('referal')->default(false);
            // $table->boolean('laraticket_admin')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            // $table->dropColumn('phone');
            // $table->dropColumn('affiliate_id');
            // $table->dropIndex('affiliate_id');
            // $table->dropColumn('referal');
            // $table->dropColumn('laraticket_admin');
        });
    }
}
