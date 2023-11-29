<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Pramana Yuda Sayeti, S.Kom',
                'username' => '199407292022031002',
                'jabatan' => 'Ahli Pertama - Pranata Komputer',
                'email' => '199407292022031002@kemenag.go.id',
                'password' => Hash::make('superadmin'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => ''
            ],
            [
                'name' => 'Rini Amelia, M.Pd',
                'username' => 'riniamelia',
                'jabatan' => 'Kepala Sekolah',
                'email' => 'riniamelia@gmail.com',
                'password' => Hash::make('riniamelia'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => 'http://res.cloudinary.com/dezj1x6xp/image/upload/v1700707079/PandanViewMandeh/riniamelia_cl2oz8.jpg'
            ],
            [
                'name' => 'Hengki Prima, S.Kom',
                'username' => 'hengkiprima',
                'jabatan' => 'Administrator',
                'email' => 'hengkiprima@gmail.com',
                'password' => Hash::make('hengkiprima'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => ''
            ],
            [
                'name' => 'Dihen Ramadhani Puja, A.Md',
                'username' => 'dihenrp',
                'jabatan' => 'Kepala Seksi Pondok Pesantren',
                'email' => 'dihenrp@gmail.com',
                'password' => Hash::make('dihenrp'),
                'updated_at' => \Carbon\Carbon::now(),
                'profile_photo_url' => ''
            ],
            [
                'name' => 'Admin',
                'username' => 'admin',
                'jabatan' => 'Administrator',
                'email' => 'admin@sma3painan.sch.id',
                'password' => Hash::make('admin'),
                'updated_at' => \Carbon\Carbon::now()
            ],
           
        ];

        foreach ($data as $key => $item) {
            \App\Models\User::firstOrCreate(
                ['username' => $item['username']],
                $item
            );
        }


    }
}
