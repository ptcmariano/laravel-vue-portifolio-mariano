<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //$this->call(UsersTableSeeder::class);
        $faker = Faker::create();
        foreach(range(1, 5) as $index)
        {
            User::create([
                'name' => $faker->word . $index,
                'email' => $faker->email,
                'password' => 'secret'
            ]);
        }
    }
}
