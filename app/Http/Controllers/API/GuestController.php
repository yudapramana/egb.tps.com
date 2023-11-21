<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guest;
use DataTables;
use App\Models\User;

class GuestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $guests = Guest::orderBy('created_at', 'DESC')->get();

        // return $guests;
        return Datatables::of($guests)
                ->addIndexColumn()
                ->editColumn('gender', function ($guest) {
                    $indicator = $guest->gender == 'L' ? 'Laki-laki' : 'Perempuan';
                    return $indicator;
                })
                ->addColumn('keperluan_tujuan', function ($guest) {
                    $indicator = $guest->keperluan . ' - ' . $guest->tujuan;
                    return $indicator;
                })
                ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'gender' => 'required|string',
            'email' => 'required|email',
            'no_hp' => 'required|numeric',
            'address' => 'required',
            'organisasi' => 'required',
            'jabatan' => 'required',
            'keperluan' => 'required',
            'tujuan' => 'required',
        ], [
            'required' => 'Kolom :attribute wajib diisi.',
            'email' => ':attribute harus berupa alamat surel yang valid.',
            'numeric' => ':attribute harus berupa angka.'
        ]);

        $data = $request->input();

        $date = date('Y-m-d');

        $findGuest = Guest::where([
            'date' => $date,
            'no_hp' => $data['no_hp']
        ])->first();

        if (!$findGuest) {
            $guest = Guest::create([
                'date' => $date,
                'name' => $data['name'],
                'gender' => $data['gender'],
                'email' => $data['email'],
                'no_hp' => $data['no_hp'],
                'address' => $data['address'],
                'organisasi' => $data['organisasi'],
                'jabatan' => $data['jabatan'],
                'keperluan' => $data['keperluan'],
                'tujuan' => $data['tujuan']
            ]);

            $guest->fresh();

            $user = User::whereIn('username', 
            [
                '198008042005011007',
                'mardiyana', 
                ])->get();

            // if($data['tujuan'] == 'Kepala Kantor') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '197105141995031001',
            //     ])->get();
            // } elseif($data['tujuan'] == 'Kasubbag TU') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '198008042005011007',
            //         'mardiyana',
            //     ])->get();
            // } elseif($data['tujuan'] == 'Seksi PHU') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '198106122008011013',
            //         '198104122009012004',
            //         '198701032011012010',
            //         '197101152007102002'
            //     ])->get();
            // } elseif($data['tujuan'] == 'Seksi BIMAS') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '196706191994031004',
            //         '198305042014111002',
            //         '197505162014111001',
            //         '197809292005012003',
            //         '197208212000032003'
            //     ])->get();
            // } elseif($data['tujuan'] == 'Seksi PDPONTREN') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '197202112003121003',
            //         '197205062007101002',
            //         '198406262007101003'
            //     ])->get();
            // } elseif($data['tujuan'] == 'Seksi PAIS') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '197202051997031003',
            //         '198212262005011004',
            //         '198210132007102002'
            //     ])->get();
            // } elseif($data['tujuan'] == 'Seksi PENMAD') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '197107051998031013',
            //         '197903062014122002',
            //         '198312122009011013',
            //     ])->get();
            // } elseif($data['tujuan'] == 'Seksi PENYELENGGARA SYARIAH') {
            //     $user =  User::whereIn('username', 
            //     [
            //         '196906151996032002',
            //         '197706292007102008'
            //     ])->get();
            // } else {
            //     $user = User::all();
            // }


            $grouped =  $user->groupBy('name_phone');
            $array_phone = $this->_getArrPhone($grouped);
            $this->_sendNotificationWA($guest, $array_phone);

            $dataGuest = [
                'code'    => 200,
                'message' => 'Gagal disimpan, data Anda sudah di submit untuk hari ini!',
                'data'    => $guest,
            ];
            return response()->json($dataGuest);
        } else {
            return response()->json(
                [
                    'code'    => 500,
                    'message' => 'Gagal disimpan, data Anda sudah di submit untuk hari ini!',
                    'data'    => [],
                ]
            );
        }
    }

    public function _getArrPhone($grouped)
    {
        $res = [];
        foreach ($grouped as $key => $value) {
            $exp = explode('_', $key);

            if ($exp[1] != "") {
                $res[] = [
                    'name' => $exp[0],
                    'no_hp' => $exp[1],
                ];
            }
        }
        return $res;
    }

    public function _sendNotificationWA($guest, $array_phone)
    {
        foreach ($array_phone as $key => $data) {
            $text = '```.:SIMBUKTU - Sistem Buku Tamu Digital:. \n';
            $text .= '\n';
            $text .= 'Yth, \n';
            $text .= '' . $data['name'] . ' \n';

            $text .= 'Anda memiliki Tamu Baru dengan rincian sebagai berikut: \n \n';
            $text .= '====================\n';
            $text .= 'Nama      : '. $guest->name.'\n';
            $jenis_kelamin = ($guest->gender == 'L') ? 'Laki-laki' : 'Perempuan';
            $text .= 'Gender    : '. $jenis_kelamin .'\n';
            $text .= 'Email     : '. $guest->email .'\n';
            $text .= 'No HP     : '. $guest->no_hp .'\n';
            $text .= 'Alamat    : '. $guest->address .'\n';
            $text .= 'Instansi  : '. $guest->organisasi .'\n';
            $text .= 'Jabatan   : '. $guest->jabatan .'\n';
            $text .= 'Keperluan : '. $guest->keperluan .'\n';
            $text .= 'Tujuan    : '. $guest->tujuan .'\n';
            $text .= '====================\n';
            $text .= 'Terima Kasih atas perhatiannya.';
            $text .= '\n \n';
            $text .= 'Link SIMBUKTU KEMENAG PESSEL ``` \n';
            $text .= 'https://simbutu.kemenagpessel.com';

            \App\Http\Controllers\MessageController::sendMessage($data['no_hp'], $text);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
