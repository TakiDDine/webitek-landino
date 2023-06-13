<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubscriptionPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type')->nullable();
            $table->unsignedInteger('limit_website')->nullable();
            $table->decimal('cost_per_month',10, 2)->default(0);
            $table->decimal('cost_per_year',10, 2)->default(0); 
            $table->string('code_promo')->nullable();
            $table->decimal('percentage')->nullable();
            $table->boolean('is_active')->default(true);
            $table->text('features')->nullable();
            $table->string('payment_type')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscription_plans');
    }
}
